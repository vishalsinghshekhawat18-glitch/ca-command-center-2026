// Current Affairs Command Center 2026 — Kindle Centered Reader Logic (v4.0)

document.addEventListener("DOMContentLoaded", () => {
  let activeSectionId = "all";
  let activeMonth = "all";
  let onlyBookmarks = false;
  let activeRecallMode = false;
  let bookmarkedIds = JSON.parse(localStorage.getItem("ca_bookmarks") || "[]");

  // DOM Elements
  const sectionNavList = document.getElementById("sectionNavList");
  const notesFeed = document.getElementById("notesFeed");
  const activeCountEl = document.getElementById("activeCount");
  const activeFilterLabel = document.getElementById("activeFilterLabel");
  const bookmarkBadge = document.getElementById("bookmarkBadge");
  
  const toggleRecallBtn = document.getElementById("toggleRecallBtn");
  const toggleSidebarBtn = document.getElementById("toggleSidebarBtn");
  const toggleMonthBtn = document.getElementById("toggleMonthBtn");
  const toggleBookmarkFilterBtn = document.getElementById("toggleBookmarkFilterBtn");
  
  const sectionNavDrawer = document.getElementById("sectionNavDrawer");
  const monthNavDrawer = document.getElementById("monthNavDrawer");
  const sidebarChevron = document.getElementById("sidebarChevron");
  const monthChevron = document.getElementById("monthChevron");
  
  const drillContainer = document.getElementById("drillContainer");

  // Helper 1: Plain Markdown Parser (for Headlines, Rationale, Bullets — NO numeral highlights)
  function parseMarkdown(text) {
    if (!text) return "";
    let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    return html;
  }

  // Helper 2: Atomic Numeral Parser (Strictly for Trap Contrasts & Static GK boxes)
  function parseTrapAndStaticGK(text) {
    if (!text) return "";
    let html = parseMarkdown(text);
    const atomicNumRegex = /(\₹[\d,]+(\.\d+)?\s*(trillion|crore|lakh|billion|cr)?|\$\d+(\.\d+)?\s*(trillion|billion|million|crore)?|\d+(\.\d+)?%|FY\s*\d{2,4}(-\d{2,4})?|\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2}(,\s*\d{4})?|\b\d{4}-\d{2,4}\b)/gi;

    if (activeRecallMode) {
      html = html.replace(atomicNumRegex, '<span class="masked-figure" onclick="this.classList.toggle(\'revealed\')">$1</span>');
    } else {
      html = html.replace(atomicNumRegex, '<span class="num-highlight">$1</span>');
    }
    return html;
  }

  // Helper 3: Bullet Renderer (Plain text by default; masked in Active Recall Mode)
  function processBulletText(text) {
    if (!text) return "";
    let html = parseMarkdown(text);

    if (activeRecallMode) {
      const recallNumRegex = /(\₹[\d,]+(\.\d+)?\s*(trillion|crore|lakh|billion|cr)?|\$\d+(\.\d+)?\s*(trillion|billion|million|crore)?|\d+(\.\d+)?%|\b(?!19\d\d\b|20\d\d\b)\d{2,}\b)/gi;
      html = html.replace(recallNumRegex, '<span class="masked-figure" onclick="this.classList.toggle(\'revealed\')">$1</span>');
    }

    return html;
  }

  // Render Top Section Navigation Grid
  function renderSidebar() {
    sectionNavList.innerHTML = "";

    // "All Sections" Item
    const allLi = document.createElement("li");
    const allBtn = document.createElement("button");
    allBtn.className = `nav-item-btn ${activeSectionId === "all" ? "active" : ""}`;
    allBtn.innerHTML = `<span>📑 All Sections</span> <span class="badge-count">${CA_NOTES_DATA.length}</span>`;
    allBtn.addEventListener("click", () => selectSection("all"));
    allLi.appendChild(allBtn);
    sectionNavList.appendChild(allLi);

    // 11 Locked Sections
    CA_SECTIONS.forEach(sec => {
      const count = CA_NOTES_DATA.filter(n => n.secId === sec.id).length;
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.className = `nav-item-btn ${activeSectionId === sec.id ? "active" : ""}`;
      btn.innerHTML = `<span>${sec.title}</span> <span class="badge-count">${count}</span>`;
      btn.addEventListener("click", () => selectSection(sec.id));
      li.appendChild(btn);
      sectionNavList.appendChild(li);
    });
  }

  function selectSection(secId) {
    activeSectionId = secId;
    renderSidebar();
    renderFeed();
    renderDrill();
    sectionNavDrawer.classList.remove("open");
    sidebarChevron.textContent = "▼";
  }

  // Window global function for month selection
  window.selectMonth = function(m) {
    activeMonth = m;
    renderFeed();
    monthNavDrawer.classList.remove("open");
    monthChevron.textContent = "▼";

    // Update active button state in month grid
    document.querySelectorAll("#monthNavGrid .nav-item-btn").forEach(btn => {
      btn.classList.remove("active");
    });

    const activeBtn = Array.from(document.querySelectorAll("#monthNavGrid .nav-item-btn")).find(btn => {
      if (m === 'all') return btn.textContent.includes("All Months");
      if (m === '2026-08') return btn.textContent.includes("August 2026");
      if (m === '2026-07') return btn.textContent.includes("July 2026");
      if (m === '2026-06') return btn.textContent.includes("June 2026");
      return false;
    });

    if (activeBtn) activeBtn.classList.add("active");
  };

  // Toggle Drawers
  toggleSidebarBtn.addEventListener("click", () => {
    monthNavDrawer.classList.remove("open");
    monthChevron.textContent = "▼";
    const isOpen = sectionNavDrawer.classList.toggle("open");
    sidebarChevron.textContent = isOpen ? "▲" : "▼";
  });

  toggleMonthBtn.addEventListener("click", () => {
    sectionNavDrawer.classList.remove("open");
    sidebarChevron.textContent = "▼";
    const isOpen = monthNavDrawer.classList.toggle("open");
    monthChevron.textContent = isOpen ? "▲" : "▼";
  });

  toggleBookmarkFilterBtn.addEventListener("click", () => {
    onlyBookmarks = !onlyBookmarks;
    toggleBookmarkFilterBtn.classList.toggle("active", onlyBookmarks);
    renderFeed();
  });

  toggleRecallBtn.addEventListener("click", () => {
    activeRecallMode = !activeRecallMode;
    toggleRecallBtn.classList.toggle("active", activeRecallMode);
    toggleRecallBtn.innerHTML = activeRecallMode ? "👁️ Active Recall: ON" : "👁️ Active Recall: OFF";
    renderFeed();
  });

  // Update Bookmark Count Badge
  function updateBookmarkBadge() {
    bookmarkBadge.textContent = bookmarkedIds.length;
  }

  // Render Notes Feed
  function renderFeed() {
    notesFeed.innerHTML = "";
    updateBookmarkBadge();

    let filtered = CA_NOTES_DATA.filter(note => {
      const matchesSec = activeSectionId === "all" || note.secId === activeSectionId;
      const matchesMonth = activeMonth === "all" || note.date.startsWith(activeMonth);
      const matchesBookmark = !onlyBookmarks || bookmarkedIds.includes(note.id);
      return matchesSec && matchesMonth && matchesBookmark;
    });

    activeCountEl.textContent = `${filtered.length} notes`;

    // Dynamic Filter Banner Label
    let labelParts = [];
    if (activeSectionId !== "all") {
      const secObj = CA_SECTIONS.find(s => s.id === activeSectionId);
      if (secObj) labelParts.push(secObj.title);
    } else {
      labelParts.push("All Sections");
    }

    if (activeMonth !== "all") {
      labelParts.push(`Month: ${activeMonth}`);
    }

    if (onlyBookmarks) {
      labelParts.push("Starred Bookmarks Only");
    }

    activeFilterLabel.textContent = `📑 ${labelParts.join(" • ")}`;

    if (filtered.length === 0) {
      notesFeed.innerHTML = `
        <div class="note-card" style="padding: 40px; text-align: center; color: var(--text-muted);">
          <h3>🔍 No notes match your selected filters</h3>
          <p style="margin-top: 8px; font-size: 0.9rem;">Try selecting a different section, month, or clearing starred filters.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(note => {
      const isBookmarked = bookmarkedIds.includes(note.id);
      const secObj = CA_SECTIONS.find(s => s.id === note.secId);

      const isCompact = note.tier === "Tier B+" || (!note.hook && !note.trap && !note.interviewQ && note.bullets.length <= 1);
      
      const card = document.createElement("div");
      card.className = `note-card ${isCompact ? 'note-card-compact' : ''}`;

      let bulletsHtml = "";
      if (note.bullets && note.bullets.length > 0) {
        bulletsHtml = `
          <ul class="bullets-list">
            ${note.bullets.map(b => `<li>${processBulletText(b)}</li>`).join("")}
          </ul>
        `;
      }

      let hookHtml = note.hook ? `
        <div class="hook-box">
          🪝 <strong>Rationale:</strong> ${parseMarkdown(note.hook)}
        </div>
      ` : "";

      let staticHtml = note.staticGk ? `
        <div class="static-gk-box">
          🏛️ <strong>Static GK:</strong> ${parseTrapAndStaticGK(note.staticGk)}
        </div>
      ` : "";

      let trapHtml = note.trap ? `
        <div class="trap-box">
          ⚠️ <strong>Trap Contrast:</strong> ${parseTrapAndStaticGK(note.trap)}
        </div>
      ` : "";

      let interviewHtml = note.interviewQ ? `
        <div class="interview-box">
          💼 <strong>Interview Insight:</strong> ${parseMarkdown(note.interviewQ)}
        </div>
      ` : "";

      card.innerHTML = `
        <div class="note-header">
          <h3 class="note-title">📰 ${parseMarkdown(note.title)}</h3>
          <button class="btn-bookmark ${isBookmarked ? 'bookmarked' : ''}" onclick="toggleBookmark('${note.id}')" title="Bookmark Note">
            ${isBookmarked ? '★' : '☆'}
          </button>
        </div>
        <div class="note-tags">
          <span class="tag tag-sec">${secObj ? secObj.emoji : ''} ${secObj ? secObj.title.split(' ')[1] : ''}</span>
          <span class="tag ${note.tier === 'Tier A' ? 'tag-tier-a' : 'tag-tier-b'}">${note.tier}</span>
          <span class="tag" style="background: rgba(0,0,0,0.04); color: var(--text-muted);">${note.date}</span>
        </div>
        ${hookHtml}
        ${bulletsHtml}
        ${staticHtml}
        ${trapHtml}
        ${interviewHtml}
      `;

      notesFeed.appendChild(card);
    });
  }

  // Render Section Drill at the bottom of active section
  function renderDrill() {
    drillContainer.innerHTML = "";
    if (activeSectionId === "all") return;

    const drill = CA_SECTION_DRILLS[activeSectionId];
    if (!drill) return;

    const panel = document.createElement("div");
    panel.className = "drill-panel";

    const secObj = CA_SECTIONS.find(s => s.id === activeSectionId);

    let retrievalsHtml = drill.retrievals.map((q, idx) => `
      <div class="quiz-q-item">
        <strong>Q${idx+1}.</strong> ${parseMarkdown(q)}
      </div>
    `).join("");

    let coverTestsHtml = drill.coverTests.map(c => `
      <div class="quiz-q-item">
        ⚡ ${parseTrapAndStaticGK(c)}
      </div>
    `).join("");

    panel.innerHTML = `
      <div class="drill-header">
        🔒 SECTION DRILL & COVER TEST — ${secObj ? secObj.title : ''}
      </div>
      
      <h4 style="font-size: 0.95rem; color: var(--accent-warm); margin-bottom: 10px;">🔁 Active Retrieval Questions (Test Recall Before Revealing)</h4>
      <div class="quiz-q-list">
        ${retrievalsHtml}
      </div>

      <h4 style="font-size: 0.95rem; color: var(--accent-gold); margin-bottom: 10px; margin-top: 18px;">🔒 High-Yield Cover Tests</h4>
      <div class="quiz-q-list">
        ${coverTestsHtml}
      </div>

      <button class="answer-toggle-btn" onclick="toggleAnswerBox(this)">🙈 Reveal Section Drill Answers</button>
      <div class="answer-box">
        <strong>🔑 Verified Answers:</strong><br>
        ${parseTrapAndStaticGK(drill.answers)}
      </div>
    `;

    drillContainer.appendChild(panel);
  }

  // Window global functions
  window.toggleBookmark = function(noteId) {
    if (bookmarkedIds.includes(noteId)) {
      bookmarkedIds = bookmarkedIds.filter(id => id !== noteId);
    } else {
      bookmarkedIds.push(noteId);
    }
    localStorage.setItem("ca_bookmarks", JSON.stringify(bookmarkedIds));
    renderFeed();
  };

  window.toggleAnswerBox = function(btn) {
    const box = btn.nextElementSibling;
    box.classList.toggle("show");
    btn.textContent = box.classList.contains("show") ? "🙈 Hide Section Drill Answers" : "🙈 Reveal Section Drill Answers";
  };

  // Initial Execution
  renderSidebar();
  renderFeed();
  renderDrill();
});
