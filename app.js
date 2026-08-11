// Current Affairs Command Center 2026 — Application Logic

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
  const drillContainer = document.getElementById("drillContainer");

  // Render Sidebar Section Navigation
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
  }

  // Active Recall Masker helper
  function maskNumbersInText(text) {
    if (!activeRecallMode) return text;
    // Mask numbers, percentages, currency figures with a blurred span
    return text.replace(/(\₹[\d,]+|\$\d+(\.\d+)?(B|M|T|billion|trillion|million)?|\d+(\.\d+)?%|\b\d{2,}\b)/g, 
      '<span class="masked-figure" onclick="this.classList.toggle(\'revealed\')">$1</span>'
    );
  }

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
        <div class="glass-panel" style="padding: 40px; text-align: center; color: var(--text-muted);">
          <h3>🔍 No notes match your filters</h3>
          <p style="margin-top: 8px; font-size: 0.9rem;">Try clearing your search query or selecting a different section.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(note => {
      const isBookmarked = bookmarkedIds.includes(note.id);
      const secObj = CA_SECTIONS.find(s => s.id === note.secId);

      const card = document.createElement("div");
      card.className = "glass-panel note-card";

      let bulletsHtml = "";
      if (note.bullets && note.bullets.length > 0) {
        bulletsHtml = `
          <ul class="bullets-list">
            ${note.bullets.map(b => `<li>${maskNumbersInText(b)}</li>`).join("")}
          </ul>
        `;
      }

      let hookHtml = note.hook ? `
        <div class="hook-box">
          🪝 Rationale: ${maskNumbersInText(note.hook)}
        </div>
      ` : "";

      let staticHtml = note.staticGk ? `
        <div class="static-gk-box">
          🏛️ <strong>Static GK:</strong> ${maskNumbersInText(note.staticGk)}
        </div>
      ` : "";

      let trapHtml = note.trap ? `
        <div class="trap-box">
          ⚠️ <strong>Trap Contrast:</strong> ${maskNumbersInText(note.trap)}
        </div>
      ` : "";

      let interviewHtml = note.interviewQ ? `
        <div class="interview-box">
          💼 <strong>Interview Insight:</strong> ${maskNumbersInText(note.interviewQ)}
        </div>
      ` : "";

      card.innerHTML = `
        <div class="note-header">
          <h3 class="note-title">📰 ${maskNumbersInText(note.title)}</h3>
          <button class="btn-bookmark ${isBookmarked ? 'bookmarked' : ''}" onclick="toggleBookmark('${note.id}')" title="Bookmark Note">
            ${isBookmarked ? '★' : '☆'}
          </button>
        </div>
        <div class="note-tags">
          <span class="tag tag-sec">${secObj ? secObj.emoji : ''} ${secObj ? secObj.title.split(' ')[1] : ''}</span>
          <span class="tag ${note.tier === 'Tier A' ? 'tag-tier-a' : 'tag-tier-b'}">${note.tier}</span>
          <span class="tag" style="background: rgba(255,255,255,0.05); color: var(--text-muted);">${note.date}</span>
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
        <strong>Q${idx+1}.</strong> ${q}
      </div>
    `).join("");

    let coverTestsHtml = drill.coverTests.map(c => `
      <div class="quiz-q-item">
        ⚡ ${c}
      </div>
    `).join("");

    panel.innerHTML = `
      <div class="drill-header">
        🔒 SECTION DRILL & COVER TEST — ${secObj ? secObj.title : ''}
      </div>
      
      <h4 style="font-size: 0.95rem; color: var(--primary-cyan); margin-bottom: 10px;">🔁 Active Retrieval Questions (Test Recall Before Revealing)</h4>
      <div class="quiz-q-list">
        ${retrievalsHtml}
      </div>

      <h4 style="font-size: 0.95rem; color: var(--accent-amber); margin-bottom: 10px; margin-top: 18px;">🔒 High-Yield Cover Tests</h4>
      <div class="quiz-q-list">
        ${coverTestsHtml}
      </div>

      <button class="answer-toggle-btn" onclick="toggleAnswerBox(this)">🙈 Reveal Section Drill Answers</button>
      <div class="answer-box">
        <strong>🔑 Verified Answers:</strong><br>
        ${drill.answers}
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
