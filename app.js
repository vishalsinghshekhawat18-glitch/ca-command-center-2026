// Current Affairs Command Center 2026 — Kindle Centered Reader Logic (v3.4)

document.addEventListener("DOMContentLoaded", () => {
  let activeSectionId = "all";
  let activeTier = "all";
  let searchQuery = "";
  let activeRecallMode = false;
  let bookmarkedIds = JSON.parse(localStorage.getItem("ca_bookmarks") || "[]");

  // DOM Elements
  const sectionNavList = document.getElementById("sectionNavList");
  const notesFeed = document.getElementById("notesFeed");
  const searchInput = document.getElementById("searchInput");
  const activeCountEl = document.getElementById("activeCount");
  const toggleRecallBtn = document.getElementById("toggleRecallBtn");
  const toggleSidebarBtn = document.getElementById("toggleSidebarBtn");
  const sectionNavDrawer = document.getElementById("sectionNavDrawer");
  const sidebarChevron = document.getElementById("sidebarChevron");
  const drillContainer = document.getElementById("drillContainer");

  // Helper 1: Plain Markdown Parser (for Headlines & Titles — NO numeral highlighting)
  function parseMarkdownOnly(text) {
    if (!text) return "";
    let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    return html;
  }

  // Helper 2: High-Yield Numeral Highlight Parser (Excludes passing years 19XX/20XX & dates)
  function processBodyText(text) {
    if (!text) return "";

    // 1. Parse bold & italic markdown
    let html = parseMarkdownOnly(text);

    // 2. High-Yield Numeral Regex: Currency (₹/$), %, or key counts (EXCLUDING passing 4-digit years 19XX/20XX)
    const keyNumRegex = /(\₹[\d,]+(\.\d+)?\s*(trillion|crore|lakh|billion|cr)?|\$\d+(\.\d+)?\s*(trillion|billion|million|crore)?|\d+(\.\d+)?%|\b(?!19\d\d\b|20\d\d\b)\d{1,3}(,\d{3})*(\.\d+)?\b)/gi;

    if (activeRecallMode) {
      // Ink Mask for Active Recall Mode
      html = html.replace(keyNumRegex, (match) => {
        // Exclude standalone 4-digit years (1900-2099)
        if (/^(19|20)\d\d$/.test(match.trim())) return match;
        return `<span class="masked-figure" onclick="this.classList.toggle('revealed')">${match}</span>`;
      });
    } else {
      // Distinct Monospace Numeral Highlight for Key Trap/Figure Contrast
      html = html.replace(keyNumRegex, (match) => {
        // Exclude standalone 4-digit years (1900-2099)
        if (/^(19|20)\d\d$/.test(match.trim())) return match;
        return `<span class="num-highlight">${match}</span>`;
      });
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

  // Toggle Section Drawer Accordion
  toggleSidebarBtn.addEventListener("click", () => {
    const isOpen = sectionNavDrawer.classList.toggle("open");
    sidebarChevron.textContent = isOpen ? "▲" : "▼";
  });

  // Render Notes Feed
  function renderFeed() {
    notesFeed.innerHTML = "";

    let filtered = CA_NOTES_DATA.filter(note => {
      const matchesSec = activeSectionId === "all" || note.secId === activeSectionId;
      const matchesTier = activeTier === "all" || note.tier === activeTier;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        note.title.toLowerCase().includes(q) || 
        (note.staticGk && note.staticGk.toLowerCase().includes(q)) ||
        (note.bullets && note.bullets.some(b => b.toLowerCase().includes(q)));
      return matchesSec && matchesTier && matchesSearch;
    });

    activeCountEl.textContent = `${filtered.length} notes`;

    if (filtered.length === 0) {
      notesFeed.innerHTML = `
        <div class="note-card" style="padding: 40px; text-align: center; color: var(--text-muted);">
          <h3>🔍 No notes match your search filters</h3>
          <p style="margin-top: 8px; font-size: 0.9rem;">Try clearing your search query or selecting a different section.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(note => {
      const isBookmarked = bookmarkedIds.includes(note.id);
      const secObj = CA_SECTIONS.find(s => s.id === note.secId);

      // Determine Density Class: Tier B+ or single-bullet notes get compact padding
      const isCompact = note.tier === "Tier B+" || (!note.hook && !note.trap && !note.interviewQ && note.bullets.length <= 1);
      
      const card = document.createElement("div");
      card.className = `note-card ${isCompact ? 'note-card-compact' : ''}`;

      let bulletsHtml = "";
      if (note.bullets && note.bullets.length > 0) {
        bulletsHtml = `
          <ul class="bullets-list">
            ${note.bullets.map(b => `<li>${processBodyText(b)}</li>`).join("")}
          </ul>
        `;
      }

      let hookHtml = note.hook ? `
        <div class="hook-box">
          🪝 <strong>Rationale:</strong> ${processBodyText(note.hook)}
        </div>
      ` : "";

      let staticHtml = note.staticGk ? `
        <div class="static-gk-box">
          🏛️ <strong>Static GK:</strong> ${processBodyText(note.staticGk)}
        </div>
      ` : "";

      let trapHtml = note.trap ? `
        <div class="trap-box">
          ⚠️ <strong>Trap Contrast:</strong> ${processBodyText(note.trap)}
        </div>
      ` : "";

      let interviewHtml = note.interviewQ ? `
        <div class="interview-box">
          💼 <strong>Interview Insight:</strong> ${processBodyText(note.interviewQ)}
        </div>
      ` : "";

      // Notice: Headlines use parseMarkdownOnly so title numbers remain clean & plain!
      card.innerHTML = `
        <div class="note-header">
          <h3 class="note-title">📰 ${parseMarkdownOnly(note.title)}</h3>
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
        <strong>Q${idx+1}.</strong> ${processBodyText(q)}
      </div>
    `).join("");

    let coverTestsHtml = drill.coverTests.map(c => `
      <div class="quiz-q-item">
        ⚡ ${processBodyText(c)}
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
        ${processBodyText(drill.answers)}
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

  // Event Listeners
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderFeed();
  });

  toggleRecallBtn.addEventListener("click", () => {
    activeRecallMode = !activeRecallMode;
    toggleRecallBtn.classList.toggle("active", activeRecallMode);
    toggleRecallBtn.innerHTML = activeRecallMode ? "👁️ Active Recall: ON" : "👁️ Active Recall: OFF";
    renderFeed();
  });

  // Initial Execution
  renderSidebar();
  renderFeed();
  renderDrill();
});
