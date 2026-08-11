// Current Affairs Command Center 2026 — Master Dataset (148 Items, 1st to 7th August 2026)

const CA_SECTIONS = [
  { id: "sec1", title: "1. 💰 ESI, FINANCE & BUSINESS NEWS", emoji: "💰" },
  { id: "sec2", title: "2. 🏛️ REGULATORY BODIES NEWS", emoji: "🏛️" },
  { id: "sec3", title: "3. 🏦 BANKING & INSURANCE NEWS", emoji: "🏦" },
  { id: "sec4", title: "4. 🌐 NATIONAL, STATE & INTERNATIONAL NEWS", emoji: "🌐" },
  { id: "sec5", title: "5. 🤝 MoUs, CONFERENCES & APPOINTMENTS", emoji: "🤝" },
  { id: "sec6", title: "6. 🔬 SCIENCE, TECHNOLOGY, DEFENCE & SPORTS", emoji: "🔬" },
  { id: "sec7", title: "7. 🏆 AWARDS, BOOKS, INDICES & RANKINGS", emoji: "🏆" },
  { id: "sec8", title: "8. 📅 IMPORTANT DAYS & PERSONS IN NEWS", emoji: "📅" },
  { id: "sec9", title: "9. 📋 PIB, CIRCULARS & NOTIFICATIONS", emoji: "📋" },
  { id: "sec10", title: "10. 📌 MISCELLANEOUS — GOVT SCHEMES & STATIC", emoji: "📌" },
  { id: "sec11", title: "11. 🧠 REVISION", emoji: "🧠" }
];

const CA_NOTES_DATA = [
  {
    "title": "Gross GST Collections Surge 15.4% to ₹2.11 Trillion in July 2026",
    "id": "note-sec1-1",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": "GST introduced July 1, 2017 via 101st Constitutional Amendment Act, 2016 (Article 279A).",
    "tier": "Tier A",
    "hook": "GST collections serve as India's primary high-frequency indicator of indirect tax efficiency and macroeconomic health.",
    "date": "2026-08-01",
    "bullets": [
      "Growth was driven primarily by higher mop-up from **domestic transactions** as well as **import of goods**.",
      "Represents one of the highest monthly gross GST collection figures recorded."
    ],
    "trap": "Do not confuse Gross GST collection (before refunds) with Net GST collection (tax retained post-refunds)."
  },
  {
    "title": "NCGTC Tweaks MFI Credit Guarantee Norms (CGSMFI 2.0) to Boost Scheme Utilisation",
    "id": "note-sec1-2",
    "secId": "sec1",
    "interviewQ": "\"Why did NCGTC increase mandatory bank lending allocation for small/mid MFIs to 15%?\"\n💡 **Model Answer: Reserving 15% prevents large MFIs from monopolizing bank credit, ensuring funds reach lower-tier micro-lenders.**",
    "staticGk": "NCGTC established in 2014 by Ministry of Finance | HQ: Mumbai.",
    "tier": "Tier A",
    "hook": "Restructured rules ensure credit guarantee cover reaches lower-tier microfinance institutions.",
    "date": "2026-08-05",
    "bullets": [
      "The **National Credit Guarantee Trustee Company Ltd. (NCGTC)** modified allocation rules under **CGSMFI 2.0**.",
      "**Mandatory Bank Allocation:** Commercial banks must lend at least **15%** of their total ₹20,000 crore corpus to **small- and mid-size MFIs** (up from 5% and 10%).",
      "**Sanction Cap:** Maximum bank loan capped at **20% of AUM** of NBFC-MFIs and MFIs.",
      "**Lender Size Caps:** Max loan capped at **₹100 crore** (small MFIs), **₹200 crore** (medium MFIs), and **₹1,000 crore** (large MFIs).",
      "**MFI Classification by AUM:** Small MFI (<₹500 crore AUM), Medium MFI (₹500–₹2,000 crore AUM), Large MFI (>₹2,000 crore AUM).",
      "**Scheme Corpus:** Guarantees loans up to **₹20,000 crore** (wholly owned by Govt of India)."
    ],
    "trap": "Small MFI limit (<₹500 cr AUM) vs Medium MFI limit (₹500–₹2,000 cr AUM) vs 15% bank lending pool quota."
  },
  {
    "title": "Government Approves ₹4,687 Crore Interest Subsidies for Ethanol Projects via NABARD",
    "id": "note-sec1-3",
    "secId": "sec1",
    "interviewQ": "\"What role does NABARD play as the nodal agency for ethanol interest subventions?\"\n💡 **Model Answer: NABARD administers and verifies subvention claims from lending banks to ensure capital credit flows into bio-fuel infrastructure.**",
    "staticGk": "NABARD established July 12, 1982 (B. Sivaraman Committee) | HQ: Mumbai.",
    "tier": "Tier A",
    "hook": "Expanding ethanol production capacity accelerates India's E20 target (20% ethanol blending by 2025-26).",
    "date": "2026-08-01",
    "bullets": [
      "Union Government approved **₹4,687 crore** in interest subsidies for eligible ethanol projects.",
      "**Nodal Agency:** **NABARD** serves as the nodal disbursing agency (**₹2,075 crore** released since FY23).",
      "**Subvention Terms:** Interest subvention of **6% per annum or 50% of interest charged** (whichever lower) for **5 years**.",
      "Policy Alignment: Boosts grain-based and sugar-based distilleries under Ethanol Blended Petrol (EBP) program."
    ],
    "trap": "Ethanol interest subvention (6% p.a. or 50% of interest for 5 yrs) vs priority sector short-term crop loan subvention (capped at 3%)."
  },
  {
    "title": "Taxation and Other Laws (Amendment) Bill, 2026 Introduced (2041 Sunset & UPI MDR)",
    "id": "note-sec1-4",
    "secId": "sec1",
    "interviewQ": "\"Why is the government proposing enabling provisions for MDR on digital payments like UPI?\"\n💡 **Model Answer: Zero-MDR strains acquiring bank infrastructure; introducing capped MDR creates a sustainable revenue model for payment security.**",
    "staticGk": "Payment and Settlement Systems Act, 2007 empowers RBI to regulate payment systems.",
    "tier": "Tier A",
    "hook": "Extending tax exemptions for capital equipment foreign suppliers provides long-term stability to domestic electronics manufacturers.",
    "date": "2026-08-05",
    "bullets": [
      "Government introduced **Taxation and Other Laws (Amendment) Bill, 2026** amending Payment & Settlement Systems Act 2007, Income-tax Act 2025, and Finance Act 2026.",
      "**Electronics Exemption Extension:** Extends tax exemption for foreign companies supplying capital goods/tooling to Indian contract manufacturers for electronic goods until **March 31, 2041** (extended from earlier sunset of 2030-31).",
      "**UPI MDR Proposal:** Amends Payment & Settlement Systems Act 2007 to permit Merchant Discount Rate (MDR) on non-negative list electronic payment modes including UPI.",
      "Current Baseline: Credit card MDR ~1.5%, debit card up to 0.9%, UPI currently 0% for merchants."
    ],
    "trap": "Extended sunset year for electronics capital goods tax exemption (**March 31, 2041**) vs earlier sunset year (**March 31, 2031**)."
  },
  {
    "title": "IMF Estimates Indian Economy Will Cross $5 Trillion Mark in FY29",
    "id": "note-sec1-5",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": "IMF established 1944 at Bretton Woods | HQ: Washington D.C. | MD: Kristalina Georgieva.",
    "tier": "Tier A",
    "hook": "Multilateral economic projections validate India's structural growth trajectory toward becoming the world's 3rd largest economy.",
    "date": "2026-08-01",
    "bullets": [
      "FM Sitharaman stated India is on track to cross **USD 5-trillion milestone in FY29 (2028-29)**.",
      "Data Source: IMF World Economic Outlook database (April 2026 edition).",
      "Projected Nominal GDP: India's GDP projected to reach **USD 5.1 trillion by FY 2028-29**."
    ],
    "trap": "Target fiscal year: **FY29 / 2028-29** (exact projected GDP of $5.1 trillion)."
  },
  {
    "title": "IMF Flags Financial Stability Risks from BigTech Expansion in Payments",
    "id": "note-sec1-6",
    "secId": "sec1",
    "interviewQ": "\"Why are central banks and the IMF concerned about BigTech entry into payments?\"\n💡 **Model Answer: Platform data monopolies allow rapid systemic scale, creating payment concentration risks outside traditional banking laws.**",
    "staticGk": "IMF HQ: Washington D.C.",
    "tier": "Tier A",
    "hook": "Platform-based tech conglomerates expanding into payments create systemic financial stability and concentration risks.",
    "date": "2026-08-05",
    "bullets": [
      "IMF report warned growing role of **BigTech firms** in financial services poses systemic financial stability risks if unchecked.",
      "Definition: BigTech defined as large technology companies using platform-based business models and data-driven network effects to scale credit and payments.",
      "Policy Mandate: Recommends activity-based central bank regulation to prevent shadow banking risks."
    ],
    "trap": "BigTech financial risk (platform network scale risk) vs FinTech risk (niche digital startup operational risk)."
  },
  {
    "title": "Government to Offload up to 6.5% Stake in LIC via Offer for Sale (OFS)",
    "id": "note-sec1-7",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": "LIC founded 1st September 1956 under LIC Act, 1956 | HQ: Mumbai.",
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Disinvestment of **2.5% base equity** with an additional **4% greenshoe option** (total up to 6.5%).",
      "Floor price fixed at **₹382 per share**.",
      "Centre currently holds 96.5% stake in LIC."
    ],
    "trap": null
  },
  {
    "title": "Moody's Assigns First-Time Investment-Grade 'Baa2' Rating to RBL Bank",
    "id": "note-sec1-8",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": "RBL Bank (HQ: Mumbai | Tagline: \"Apno Ka Bank\").",
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Moody's Ratings assigned a first-time rating of **Baa2 / P-2** with 'Stable' outlook to RBL Bank.",
      "Incorporates 2-notch uplift for affiliate support from Emirates NBD Bank."
    ],
    "trap": null
  },
  {
    "title": "HSBC India Manufacturing PMI Reaches 53.5 in July 2026",
    "id": "note-sec1-9",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "HSBC India Manufacturing PMI registered **53.5 in July 2026** (above 50 signals manufacturing expansion)."
    ],
    "trap": null
  },
  {
    "title": "HSBC India Services PMI Business Activity Index Reaches 53.3 in July 2026",
    "id": "note-sec1-10",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "HSBC India Services PMI Business Activity Index fell to **53.3 in July 2026** (down from 57.4 in June)."
    ],
    "trap": null
  },
  {
    "title": "OPEC+ Agrees to Increase Crude Oil Production by 188,000 Barrels per Day",
    "id": "note-sec1-11",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "OPEC+ agreed to increase crude oil production by **188,000 barrels per day (bpd)** starting September 2026 (HQ: Vienna, Austria)."
    ],
    "trap": null
  },
  {
    "title": "India Expands Crude Oil Sourcing Base to 41 Countries",
    "id": "note-sec1-12",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "India expanded its crude oil sourcing base to **41 countries** (up from 27 countries earlier) to enhance energy import security.",
      "*Gross GST July 2026 grew 15.4% to reach ₹2.11 trillion.*",
      "*CGSMFI 2.0 mandates banks to lend at least 15% of corpus to small/mid MFIs.*",
      "*Taxation Bill 2026 extends electronics capital goods tax exemption sunset to March 31, 2041.*"
    ],
    "trap": null
  },
  {
    "title": "RBI Streamlines Supervisory Framework by Consolidating 64 Master Directions",
    "id": "note-sec2-13",
    "secId": "sec2",
    "interviewQ": "\"Why is RBI consolidating circulars into Master Directions?\"\n💡 **Model Answer: Creates a single source of truth, eliminates obsolete mandates, and lowers compliance risk for regulated entities.**",
    "staticGk": "RBI established April 1, 1935 under RBI Act, 1934 | HQ: Mumbai.",
    "tier": "Tier A",
    "hook": "Consolidates fragmented circulars into unified directions to reduce compliance friction for banks.",
    "date": "2026-08-01",
    "bullets": [
      "RBI issued **64 consolidated Master Directions** administered by its **Department of Supervision (DoS)**.",
      "Consolidates **628 existing circulars** across **11 categories of Regulated Entities (REs)**."
    ],
    "trap": "Master Directions (ongoing rulebook) vs Master Circulars (annual snapshot compilations)."
  },
  {
    "title": "RBI Mandates Machine Authentication & Impounding of Fake Currency in Border Branches",
    "id": "note-sec2-14",
    "secId": "sec2",
    "interviewQ": "\"Can a bank branch return a suspected counterfeit note to a customer?\"\n💡 **Model Answer: No, regulations strictly mandate immediate impounding to prevent fake notes from re-entering cash circulation.**",
    "staticGk": "Note printing presses at Mysuru, Salboni, Dewas, Nashik | Mints at Mumbai, Hyderabad, Kolkata, Noida.",
    "tier": "Tier A",
    "hook": "Counters cross-border Fake Indian Currency Notes (FICN) smuggling and preserves cash integrity.",
    "date": "2026-08-05",
    "bullets": [
      "Note authentication and sorting machines mandatory in all bank branches in **districts sharing international borders**.",
      "**100% of received banknotes** must be machine-examined for authenticity.",
      "**Impounding Mandate:** Counterfeit notes **must be impounded immediately** — returning or destroying fake notes at the bank is strictly illegal."
    ],
    "trap": "Returning or destroying a fake note is illegal — banks must impound it and issue an acknowledgement receipt."
  },
  {
    "title": "SEBI Clarifies Rules for Private Share Transfers in Unlisted Companies",
    "id": "note-sec2-15",
    "secId": "sec2",
    "interviewQ": "\"Why did SEBI set a 200-buyer cap per FY for secondary unlisted share deals?\"\n💡 **Model Answer: Prevents unlisted companies from conducting backdoor public issues without fulfilling prospectus disclosure rules.**",
    "staticGk": "SEBI established 1988, statutory powers in 1992 via SEBI Act, 1992 | HQ: Mumbai.",
    "tier": "Tier A",
    "hook": "Prevents illegal public offerings disguised as private secondary share sales.",
    "date": "2026-08-01",
    "bullets": [
      "Secondary transfer of unlisted company shares by an existing shareholder to **≤200 buyers in a FY** is **NOT** treated as a public issue.",
      "Contractual rights like **Right of First Refusal (ROFR)** can be honored.",
      "Exceeding **200 buyers per FY** automatically converts the transaction into a **Deemed Public Issue**."
    ],
    "trap": "200 buyers limit per FY for secondary unlisted share deals vs 200 private placement limit under Sec 42 Companies Act 2013."
  },
  {
    "title": "IRDAI Tightens Intermediary Oversight and Relaxes Insurer Investment Norms",
    "id": "note-sec1-16",
    "secId": "sec1",
    "interviewQ": "\"How do IRDAI's revised investment norms impact infrastructure financing?\"\n💡 **Model Answer: Permitting up to 20% assets in AA+ Infra SPVs channels long-term insurance capital into national infrastructure.**",
    "staticGk": "IRDAI established under IRDA Act, 1999 (Malhotra Committee) | HQ: Hyderabad.",
    "tier": "Tier A",
    "hook": "Frees up insurer capital for infrastructure while enforcing training standards on agents.",
    "date": "2026-08-05",
    "bullets": [
      "**Intermediary Registration Validity:** Certificate valid perpetually subject to **annual non-refundable fee** (higher of **₹10,000 or 0.04% commission**).",
      "**IMF Training Mandate:** Principal officers & salespersons must complete **≥25 hours of training once every 3 years**.",
      "**SPV Investment Cap:** Insurers allowed to invest up to **20%** in operational Infra SPVs rated **AA or above**.",
      "**AIF/VCF Investment Caps:** Combined exposure capped at **3% for life insurers** and **5% for general insurers**.",
      "**Promoter & Repo Caps:** Promoter group exposure capped at **5% of investment assets**; Repo/G-Sec lending capped at lower of **25% of available securities or ₹10,000 crore**."
    ],
    "trap": "AIF/VCF cap for Life Insurers (3%) vs General Insurers (5%)."
  },
  {
    "title": "SC Directs RBI on Mule Accounts SOP & IRDAI on ANPR Motor Insurance Verification",
    "id": "note-sec2-17",
    "secId": "sec2",
    "interviewQ": "\"How do SOPs and tools like MuleHunter.AI assist banks in countering cyber fraud?\"\n💡 **Model Answer: Automated pattern matching flags suspicious account clusters instantly, freezing fraudulent transactions before funds leave.**",
    "staticGk": "I4C under MHA (New Delhi) | IRDAI under IRDA Act 1999 (HQ Hyderabad) | Motor Vehicles Act 1988 mandates third-party motor insurance.",
    "tier": "Tier A",
    "hook": "Judicial directives accelerate inter-regulatory SOPs to freeze cyber-fraud accounts and enforce motor insurance.",
    "date": "2026-08-01",
    "bullets": [
      "Supreme Court directed **RBI** to circulate SOP for dealing with **mule accounts** linked to cyber fraud.",
      "RBI combating tools: Uses **MuleHunter.AI** in collaboration with **I4C** (Indian Cyber Crime Coordination Centre under MHA).",
      "SC directed Central Govt & **IRDAI** to pilot **Automatic Number Plate Recognition (ANPR)**-based insurance verification at fuel stations to deny fuel sales to uninsured vehicles."
    ],
    "trap": "MuleHunter.AI (RBI AI tool) vs I4C (MHA national cyber crime coordination portal)."
  },
  {
    "title": "Cybersecurity Benchmarks: DPDPA 2023, RBI IT Governance & SEBI CSCRF",
    "id": "note-sec2-18",
    "secId": "sec2",
    "interviewQ": "\"Why do financial entities face overlapping cybersecurity regulations like DPDPA, RBI IT, and SEBI CSCRF?\"\n💡 **Model Answer: DPDPA protects individual data privacy, while RBI/SEBI norms protect institutional market liquidity and transaction security.**",
    "staticGk": "DPDPA 2023 enacted under MeitY.",
    "tier": "Tier A",
    "hook": "Multi-regulatory frameworks enforce operational resilience and heavy statutory penalties across India's digital ecosystem.",
    "date": "2026-08-05",
    "bullets": [
      "**RBI Penalties:** RBI imposed **₹54.78 crore in penalties across 353 cases** in FY25 for IT/cybersecurity lapses.",
      "**DPDPA 2023 Penalties:** Statutory penalties up to **₹250 crore** for security failures and **₹200 crore** for breach notification failures.",
      "**RBI IT Governance & 2FA:** IT Governance Directions (effective April 2024); Authentication Directions 2025 mandate **2FA with at least one dynamic factor** for domestic digital transactions.",
      "**SEBI CSCRF 2024:** Applies to **22 types of regulated entities** across a **5-tier model** (exchanges, depositories, brokers, AMCs)."
    ],
    "trap": "DPDPA penalty for security failure (up to ₹250 crore) vs breach notification failure (up to ₹200 crore)."
  },
  {
    "title": "RBI Monetary Policy Statement 2026-27 (62nd MPC Meeting Highlights)",
    "id": "note-sec1-19",
    "secId": "sec1",
    "interviewQ": "\"What factors guided the MPC's decision to hold repo rate at 5.25%?\"\n💡 **Model Answer: Core inflation moderation and robust FDI buffers allowed the MPC to maintain a neutral stance while supporting 6.7% GDP growth.**",
    "staticGk": "MPC constituted under Sec 45ZB of RBI Act, 1934 | 6 members | Inflation target: 4% (+/- 2%).",
    "tier": "Tier A",
    "hook": "The MPC balances inflation control with economic growth momentum, setting benchmark interest rates for FY27.",
    "date": "2026-08-01",
    "bullets": [
      "MPC held 62nd meeting from August 3 to 5, 2026 | Chairmanship: **Sanjay Malhotra** (RBI Governor).",
      "**Repo Rate:** Kept unchanged at **5.25%**.",
      "**Real GDP Growth Projection (FY 2026-27):** Projected at **6.7%** (Q1 7.0%, Q2 6.4%, Q3 6.5%, Q4 6.8%).",
      "**CPI Inflation Projection (FY 2026-27):** Lowered to **5.0%** (earlier 5.1%) (Q2 4.7%, Q3 5.9%, Q4 5.5%). Core inflation projected at **4.3%**.",
      "Macro Buffers: Gross FDI inflows at **US$ 30.7 billion** in Q1 FY27; Forex reserves import cover **over 10 months**."
    ],
    "trap": "Real GDP Growth projection (6.7%) vs CPI Inflation projection (5.0%) for FY27."
  },
  {
    "title": "SEBI Closing Auction Session (CAS) Takes Effect August 3, 2026",
    "id": "note-sec2-20",
    "secId": "sec2",
    "interviewQ": "\"Why did SEBI introduce a Closing Auction Session (CAS) for F&O stocks?\"\n💡 **Model Answer: It eliminates end-of-day price manipulation by discovering closing prices through a transparent volume-weighted auction.**",
    "staticGk": "SEBI HQ: Mumbai | Established 1988, Statutory 1992.",
    "tier": "Tier A",
    "hook": "Introducing a Closing Auction Session for derivatives-eligible stocks prevents closing price manipulation.",
    "date": "2026-08-05",
    "bullets": [
      "Introduces **Closing Auction Session (CAS)** for F&O-eligible (Category I) cash equity stocks.",
      "**F&O Stock Timings:** Regular trading ends **3:15 PM**; Transition **3:15–3:20 PM**; CAS Order Entry I **3:20–3:25 PM**; CAS Order Entry II **3:25–3:30 PM** (market orders **cannot** be modified/cancelled); Order matching **3:30–3:35 PM**.",
      "**Pre-Open Timings:** Order entry **9:00–9:07 AM**; Matching **9:07–9:15 AM**; Market opens **9:15 AM**."
    ],
    "trap": "CAS Order Entry I (3:20–3:25 PM, modification allowed) vs CAS Order Entry II (3:25–3:30 PM, modification prohibited)."
  },
  {
    "title": "RBI Proposes Harmonised Regulatory Framework on Interest Rates on Advances",
    "id": "note-sec2-21",
    "secId": "sec2",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "RBI published draft guidelines proposing to harmonise and standardise the regulatory framework on **interest rates on advances** across all Regulated Entities (banks, NBFCs, UCBs, AIFIs) to ensure transparent rate resets."
    ],
    "trap": null
  },
  {
    "title": "SEBI Mulls Depository Receipts (DRs) Against REIT and InvIT Units",
    "id": "note-sec2-22",
    "secId": "sec2",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Markets regulator SEBI proposed allowing REITs and InvITs to issue Depository Receipts (DRs) in foreign jurisdictions to attract foreign capital."
    ],
    "trap": null
  },
  {
    "title": "SEBI Imposes ₹1.48 Crore Penalty & 1-Year Market Bar on ZEEL Promoters",
    "id": "note-sec2-23",
    "secId": "sec2",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "SEBI imposed total ₹1.48 cr penalty on ZEEL, Punit Goenka, and Subhash Chandra; 1-year market bar on promoters."
    ],
    "trap": null
  },
  {
    "title": "K Rajaraman Granted Extension as Chairman of IFSCA",
    "id": "note-sec1-24",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "K Rajaraman granted extension as Chairman of IFSCA beyond July 31, 2026 till age 65 (HQ: GIFT City)."
    ],
    "trap": null
  },
  {
    "title": "RBI Appoints Monisha Chakraborty as Executive Director Overseeing Forex & Financial Markets",
    "id": "note-sec2-25",
    "secId": "sec2",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Monisha Chakraborty appointed ED at RBI overseeing Foreign Exchange Dept & Financial Markets Regulation Dept."
    ],
    "trap": null
  },
  {
    "title": "SEBI Appoints Prasanta Mahapatra as Executive Director",
    "id": "note-sec2-26",
    "secId": "sec2",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Prasanta Mahapatra appointed Executive Director at markets regulator SEBI."
    ],
    "trap": null
  },
  {
    "title": "TRAI Launches Revamped Version of MyCall App",
    "id": "note-sec1-27",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "TRAI launched revamped MyCall app for 1-5 star call quality ratings and call drop reporting.",
      "*RBI consolidated 628 circulars into 64 Master Directions.*",
      "*DPDPA 2023 caps security failure penalties at ₹250 crore.*",
      "*RBI maintained repo rate at 5.25% and projected FY27 GDP growth at 6.7%.*",
      "*SEBI CAS Order Entry II runs from 3:25 PM to 3:30 PM.*"
    ],
    "trap": null
  },
  {
    "title": "India-Maldives Real-Time Payment Corridor Goes Live via Favara and UPI Integration",
    "id": "note-sec3-28",
    "secId": "sec3",
    "interviewQ": "\"What strategic advantages does NIPL achieve by linking UPI with systems like Favara?\"\n💡 **Model Answer: Slashes cross-border remittance costs while promoting INR settlements across South Asia.**",
    "staticGk": "NIPL established April 2020 as international subsidiary of NPCI | Maldives Currency: Maldivian Rufiyaa | Capital: Malé.",
    "tier": "Tier A",
    "hook": "Expands India's digital public infrastructure internationally, reducing cross-border remittance costs.",
    "date": "2026-08-05",
    "bullets": [
      "Maldives integrated instant payment system **'Favara'** with India's **Unified Payments Interface (UPI)**.",
      "Transfer Flow: Transferred in **Maldivian Rufiyaa (MVR)** and credited directly in **Indian Rupees (INR)** to UPI bank accounts.",
      "Implementation: Partnership between **Maldives Monetary Authority (MMA)**, **RBI**, and **NIPL**."
    ],
    "trap": "Maldives' instant payment system Favara vs Singapore's PayNow vs UAE's AANI/Jaywan vs Sri Lanka's LankaPay."
  },
  {
    "title": "Public Sector Banks Report Zero Locker Theft Cases in FY26; RBI Security Norms Highlighted",
    "id": "note-sec1-29",
    "secId": "sec1",
    "interviewQ": "\"What is the compensation cap under RBI guidelines when locker loss occurs due to bank negligence?\"\n💡 **Model Answer: Banks are strictly liable for negligence-related losses, capped at 100 times annual locker rent.**",
    "staticGk": "Safe deposit locker rules revised under Sec 35A of Banking Regulation Act, 1949.",
    "tier": "Tier A",
    "hook": "Mandatory security upgrades eliminated physical locker breaches across state-owned lenders.",
    "date": "2026-08-01",
    "bullets": [
      "PSBs reported **zero (0) locker theft cases in FY26 (2025-26)** (down from 40 cases between FY22-FY25).",
      "Active Lockers: **11,111,077** (1.11 crore) operational lockers across PSBs as on March 31, 2026.",
      "**RBI Security Guidelines:** CCTV cameras mandatory at strong room entry/exit; footage preserved for **at least 180 days**.",
      "**Bank Liability Cap:** Compensation for loss due to bank negligence capped at **100 times prevailing annual locker rent**."
    ],
    "trap": "Bank liability for negligence (capped at 100x annual rent) vs natural calamities/Acts of God (banks NOT liable)."
  },
  {
    "title": "Government Introduces Bankers' Books Evidence Act, 2026 to Replace 1891 British-Era Law",
    "id": "note-sec1-30",
    "secId": "sec1",
    "interviewQ": "\"How does the Bankers' Books Evidence Act 2026 impact banking litigation?\"\n💡 **Model Answer: Legalizes certified digital printouts and encrypted cloud logs as admissible court evidence without physical ledger production.**",
    "staticGk": "Aligned with Bharatiya Sakshya Adhiniyam, 2023.",
    "tier": "Tier A",
    "hook": "Modernizes evidence law by granting digital banking logs primary court admissibility.",
    "date": "2026-08-05",
    "bullets": [
      "Introduced **Bankers' Books Evidence Act, 2026** Bill in Parliament.",
      "Repeals and replaces the 135-year-old British-era **Bankers' Books Evidence Act, 1891**.",
      "Core Reform: Makes **digital and virtual records** admissible primary evidence in court without physical ledger production.",
      "Covers Core Banking Solutions (CBS) logs, electronic statements, and database microfilms."
    ],
    "trap": "Bankers' Books Evidence Act, 2026 vs Bankers' Books Evidence Act, 1891."
  },
  {
    "title": "UPI Clocks Record 23.66 Billion Transactions Worth ₹29.88 Trillion in July 2026",
    "id": "note-sec1-31",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": "NPCI incorporated in 2008 under Sec 25 of Companies Act 1956 (now Sec 8) | HQ: Mumbai.",
    "tier": "Tier A",
    "hook": "UPI sets new monthly transaction volume and value benchmarks as India's primary retail payment spine.",
    "date": "2026-08-01",
    "bullets": [
      "**July 2026 Volume:** Record **23.66 billion transactions** (up 4.1% MoM).",
      "**July 2026 Value:** Record **₹29.88 trillion** (up 3.3% MoM).",
      "System Operator: **National Payments Corporation of India (NPCI)**."
    ],
    "trap": "July 2026 Volume (23.66 billion) vs July 2026 Value (₹29.88 trillion)."
  },
  {
    "title": "Private Banks Lead FCNR(B) Deposit Drive; ICICI, HSBC & SBI Top Performers",
    "id": "note-sec1-32",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": "FCNR(B) accounts maintained in designated foreign currencies by NRIs; interest tax-free in India and fully repatriable.",
    "tier": "Tier A",
    "hook": "Forex swap windows incentivize private and foreign banks to mobilize non-resident foreign currency deposits.",
    "date": "2026-08-05",
    "bullets": [
      "Private banks led FCNR(B) mobilization under RBI's limited-period USD-INR forex swap window.",
      "Foreign banks led by **HSBC and Standard Chartered** mobilized nearly the same volume as all 12 PSBs combined.",
      "**>$1B Private Banks:** 4 lenders (**ICICI, Kotak, Axis, HDFC**).",
      "**>$1B PSBs:** Only 2 lenders (**SBI and Bank of Baroda**)."
    ],
    "trap": "PSBs crossing $1B mark (only 2: SBI & BoB) vs Private banks (4: ICICI, Kotak, Axis, HDFC)."
  },
  {
    "title": "Shivalik Small Finance Bank Acquires ManiBhavnam Home Finance for ₹109 Crore",
    "id": "note-sec1-33",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Shivalik Small Finance Bank completed acquisition and merger of Delhi-based ManiBhavnam Home Finance India Pvt Ltd for **₹109 crore** (Shivalik SFB HQ: Noida)."
    ],
    "trap": null
  },
  {
    "title": "PNB MetLife Launches 360 Health Saving Plan (ULIP)",
    "id": "note-sec1-34",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "PNB MetLife India Insurance Company Ltd launched the **PNB MetLife 360 Health Saving Plan**, a health-focused Unit-Linked Insurance Plan (ULIP)."
    ],
    "trap": null
  },
  {
    "title": "NCDEX Launches 'NCDEX Nidhi' Mutual Fund Transaction Platform",
    "id": "note-sec1-35",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "National Commodity and Derivatives Exchange Ltd (NCDEX) launched **'NCDEX Nidhi'**, an API-first mutual fund transaction platform for rural FPO integration."
    ],
    "trap": null
  },
  {
    "title": "Karnataka Bank Launches 'KBL Finsurance' Platform",
    "id": "note-sec1-36",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Karnataka Bank launched digital portal **'KBL Finsurance'** (powered by SprintMoney) to streamline insurance lead tracking across branches."
    ],
    "trap": null
  },
  {
    "title": "HDFC Bank Launches 'Max for Seniors' and 'Max for Her' Savings Account Variants",
    "id": "note-sec1-37",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "HDFC Bank launched **'Max for Seniors'** and **'Max for Her'** savings account variants with auto-sweep and accidental death cover on debit card up to **₹3.19 crore**."
    ],
    "trap": null
  },
  {
    "title": "SBI General Insurance Launches Motor Campaign 'Chuniye Bharosa, Apno Sa'",
    "id": "note-sec1-38",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "SBI General Insurance launched motor insurance film campaign *\"Chuniye Bharosa, Apno Sa\"* featuring actor **Pankaj Tripathi**."
    ],
    "trap": null
  },
  {
    "title": "WSFx GlobalPay Secures RBI AD Category II License under FEMA 2026",
    "id": "note-sec1-39",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "WSFx Global Pay Limited received RBI Authorised Dealer Cat-II license under FEMA for trade remittances up to **₹25 lakh**."
    ],
    "trap": null
  },
  {
    "title": "ICICI Lombard Celebrates 25th Anniversary on August 3, 2026",
    "id": "note-sec1-40",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "ICICI Lombard General Insurance Company Limited celebrated its **25th foundation anniversary** on August 3, 2026.",
      "*Favara is the instant payment system of Maldives integrated with India's UPI.*",
      "*Bank liability for locker theft due to negligence is capped at 100 times annual rent.*",
      "*Bankers' Books Evidence Act 2026 replaces the 1891 Act to make digital CBS records primary evidence.*",
      "*July 2026 UPI transactions reached 23.66 billion worth ₹29.88 trillion.*"
    ],
    "trap": null
  },
  {
    "title": "Glaw Lake in Arunachal Pradesh Designated India's 101st Ramsar Site",
    "id": "note-sec4-41",
    "secId": "sec4",
    "interviewQ": null,
    "staticGk": "Ramsar Convention signed Feb 2, 1971 (Ramsar, Iran) | India total: **101** | Top state: **Tamil Nadu (18 sites)**.",
    "tier": "Tier A",
    "hook": "Expands international wetland protection in Eastern Himalayan biodiversity corridors.",
    "date": "2026-08-01",
    "bullets": [
      "**Glaw Lake** in Arunachal Pradesh officially designated as **India's 101st Ramsar Site**.",
      "Location: Located inside **Kamlang Tiger Reserve and Wildlife Sanctuary** in Lohit district, Arunachal Pradesh.",
      "State Milestone: Marks **Arunachal Pradesh's first-ever Ramsar Site**."
    ],
    "trap": "Glaw Lake (India's 101st Ramsar Site & Arunachal's 1st)."
  },
  {
    "title": "Lok Sabha Passes Bill to Increase Supreme Court Judge Strength from 33 to 37",
    "id": "note-sec4-42",
    "secId": "sec4",
    "interviewQ": null,
    "staticGk": "Article 124(1) empowers Parliament to alter Supreme Court judge strength by law.",
    "tier": "Tier A",
    "hook": "Expands Apex Court judicial capacity to tackle case pendency and constitute Constitutional Benches.",
    "date": "2026-08-05",
    "bullets": [
      "Passed **Supreme Court (Number of Judges) Amendment Bill, 2026** amending the 1956 Act.",
      "Sanctioned Strength Expansion: Increases SC Judges from **33 to 37** (excluding CJI).",
      "Total Strength with CJI: **38 Judges** (37 Judges + 1 CJI)."
    ],
    "trap": "Judge strength excluding CJI (**37 judges**) vs total strength including CJI (**38 judges**)."
  },
  {
    "title": "PM Modi Launches South India's First Semiconductor Chip Plant in Visakhapatnam",
    "id": "note-sec1-43",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": "India Semiconductor Mission (ISM) launched 2021 under MeitY (outlay ₹76,000 crore).",
    "tier": "Tier A",
    "hook": "Establishes domestic semiconductor packaging hubs under India Semiconductor Mission.",
    "date": "2026-08-01",
    "bullets": [
      "PM laid foundation stone for **ASIP Technologies's ₹2,500 crore** OSAT facility.",
      "Location: **Visakhapatnam, Andhra Pradesh**.",
      "Regional Milestone: **Andhra Pradesh's and South India's 1st semiconductor plant** under ISM 1.0.",
      "Tech Partner: **APACT Co.** (South Korea)."
    ],
    "trap": "South India's 1st OSAT plant (ASIP Visakhapatnam, AP) vs India's 1st Commercial Fab (Tata Dholera, Gujarat)."
  },
  {
    "title": "NOTTO Launches e-Pratyaropan Portal & Mobile App for Organ Donation",
    "id": "note-sec1-44",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": "NOTTO HQ: New Delhi.",
    "tier": "Tier A",
    "hook": "Streamlines national organ donation tracking and real-time donor-recipient matching.",
    "date": "2026-08-05",
    "bullets": [
      "NOTTO launched **e-Pratyaropan Portal** and mobile app for unified digital organ donation tracking.",
      "Nodal Ministry: Ministry of Health and Family Welfare (MoHFW).",
      "Implementing Agency: NOTTO (under Directorate General of Health Services / DGHS)."
    ],
    "trap": null
  },
  {
    "title": "PM Inaugurates ₹5,000 Crore Alluri Sitarama Raju International Airport at Bhogapuram, AP",
    "id": "note-sec1-45",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "PM inaugurated **₹5,000 crore** Alluri Sitarama Raju International Airport at Bhogapuram in Vizianagaram district, Andhra Pradesh."
    ],
    "trap": null
  },
  {
    "title": "Largest Dhimsa Dance Enters Guinness World Records in Andhra Pradesh",
    "id": "note-sec1-46",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Over 13,000 tribal women performed Dhimsa dance at Bhogapuram AP, entering Guinness World Records (origin Koraput Odisha / Araku Valley AP)."
    ],
    "trap": null
  },
  {
    "title": "US and India Collaborate on $528K AI Project for Precision Agriculture",
    "id": "note-sec1-47",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "US NSF awarded **$528,137** research grant for joint project with MeitY for AI-powered soybean breeding (2026-2029)."
    ],
    "trap": null
  },
  {
    "title": "Ladakh Notifies 23 Heritage Sites as Protected Monuments",
    "id": "note-sec4-48",
    "secId": "sec4",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Union Territory Administration of Ladakh notified **23 heritage sites** as Protected Monuments under J&K Ancient Monuments Preservation Act Samvat 1977."
    ],
    "trap": null
  },
  {
    "title": "PM Modi Launches 100-Week 'Nasha Mukt Yuva for Viksit Bharat Sankalp Abhiyan'",
    "id": "note-sec1-49",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "PM Modi launched 100-week-long campaign spearheaded by MY Bharat under Ministry of Youth Affairs & Sports."
    ],
    "trap": null
  },
  {
    "title": "Pacific Nation Nauru Officially Changes Name to Republic of Naoero",
    "id": "note-sec1-50",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Nauru officially changed its name to **Republic of Naoero** (3rd-smallest country by population after Vatican City & Tuvalu; Currency: Australian Dollar)."
    ],
    "trap": null
  },
  {
    "title": "Istanbul, Türkiye to Host 49th Session of UNESCO World Heritage Committee in 2027",
    "id": "note-sec1-51",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "49th session of UNESCO WHC will be held from June 27 to July 7, 2027 in **Istanbul, Türkiye**."
    ],
    "trap": null
  },
  {
    "title": "Nathan Thomas Becomes World's Youngest Male Professor at Age 18",
    "id": "note-sec1-52",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Nathan Thomas (18 yrs 346 days) became world's youngest male professor in Florida, US, breaking a 300-year-old Guinness record."
    ],
    "trap": null
  },
  {
    "title": "MoRTH Proposes Two-Wheeled Road Ambulances under Central Motor Vehicles Rules",
    "id": "note-sec1-53",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "MoRTH published draft amendments to Central Motor Vehicles Rules 1989 introducing two-wheeled road ambulances."
    ],
    "trap": null
  },
  {
    "title": "Mandatory Vehicle-to-Vehicle (V2V) Communication Fitment Mandated from Oct 1, 2028",
    "id": "note-sec1-54",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "MoRTH proposed mandatory fitment of V2V communication systems for all L, M, N category vehicles manufactured on or after **October 1, 2028** (DoT allocated 5.875–5.925 GHz band)."
    ],
    "trap": null
  },
  {
    "title": "India Crosses 5 Lakh Aadhaar-Verified Organ Donation Pledges; Ranks 3rd Globally",
    "id": "note-sec1-55",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "India crossed 5 lakh Aadhaar-verified organ donation pledges; ranks **3rd globally** in organ transplants conducted annually (after US & China)."
    ],
    "trap": null
  },
  {
    "title": "India's GI Ecosystem Surpasses 800 Registered Products; UP Leads Nationally",
    "id": "note-sec1-56",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Ministry of Textiles announced India has over 800 registered GI products (**UP leads with 81 tags**, followed by TN with 76 and Maharashtra with 55)."
    ],
    "trap": null
  },
  {
    "title": "Static GK One-Liners (Umling La Pass & Srisailam Project)",
    "id": "note-sec1-57",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "**Umling La Pass:** Known as the highest motorable mountain pass in the world (Ladakh, India).",
      "**Srisailam Dam Project:** Built across Krishna River on the border of Andhra Pradesh and Telangana.",
      "*Glaw Lake in Kamlang Tiger Reserve, Arunachal Pradesh is India's 101st Ramsar site.*",
      "*Supreme Court judge strength increased to 37 (excluding CJI) under Article 124(1).*",
      "*South India's 1st chip plant built at ₹2,500 crore by ASIP Tech in Visakhapatnam.*",
      "*Uttar Pradesh leads nationally with 81 registered GI products.*"
    ],
    "trap": null
  },
  {
    "title": "Varsha Ashok Aglawe Appointed 54th DG of Geological Survey of India — First Woman Head in 176 Years",
    "id": "note-sec1-58",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": "Geological Survey of India established in **1851** by Thomas Oldham | HQ: **Kolkata, West Bengal**.",
    "tier": "Tier A",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "**Varsha Ashok Aglawe** appointed 54th Director General of GSI.",
      "Milestone: **First-ever woman** to head GSI in its **176-year history**.",
      "Parent Ministry: Ministry of Mines."
    ],
    "trap": "GSI (HQ Kolkata, Est 1851) vs Survey of India (HQ Dehradun)."
  },
  {
    "title": "A S Rajeev Appointed Acting Central Vigilance Commissioner (CVC)",
    "id": "note-sec5-59",
    "secId": "sec5",
    "interviewQ": null,
    "staticGk": "CVC established 1964 (Santhanam Committee) | Statutory via CVC Act, 2003 | HQ: New Delhi.",
    "tier": "Tier A",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "**A S Rajeev** appointed Acting Central Vigilance Commissioner.",
      "Appointment Committee: PM (Chair) + Union Home Minister + Leader of Opposition in Lok Sabha.",
      "Tenure Rules: Fixed **4 years or until age 65**."
    ],
    "trap": "Central Vigilance Commissioner (CVC) vs Chief Information Commissioner (CIC)."
  },
  {
    "title": "Ministry of Ayush Signs MoU with IndiaAI Mission",
    "id": "note-sec1-60",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Ministry of Ayush signed MoU with IndiaAI Mission to promote AI adoption across traditional medicine research and diagnosis."
    ],
    "trap": null
  },
  {
    "title": "Air Marshal Sandeep Thareja Appointed DG Armed Forces Medical Services",
    "id": "note-sec1-61",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Air Marshal Sandeep Thareja appointed Director General Armed Forces Medical Services (DGAFMS)."
    ],
    "trap": null
  },
  {
    "title": "Air Marshal Tejpal Singh Appointed Deputy Chief of Air Staff",
    "id": "note-sec1-62",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Air Marshal Tejpal Singh appointed Deputy Chief of the Air Staff (DCAS)."
    ],
    "trap": null
  },
  {
    "title": "Vice Admiral AN Pramod Appointed Deputy Chief of Naval Staff",
    "id": "note-sec1-63",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Vice Admiral AN Pramod appointed Deputy Chief of Naval Staff (DCNS)."
    ],
    "trap": null
  },
  {
    "title": "Vishwesh Negi Appointed Ambassador of India to Iran",
    "id": "note-sec1-64",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Vishwesh Negi appointed Ambassador of India to the Islamic Republic of Iran."
    ],
    "trap": null
  },
  {
    "title": "Willie Walsh Appointed Chief Executive Officer of IndiGo",
    "id": "note-sec1-65",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Willie Walsh (former IATA chief) appointed Chief Executive Officer of IndiGo."
    ],
    "trap": null
  },
  {
    "title": "New Delhi Hosts GI & Beyond 2.0 Summit Organized by Ministry of Textiles",
    "id": "note-sec1-66",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Ministry of Textiles organized GI & Beyond 2.0 Summit in New Delhi to showcase GI handloom exports."
    ],
    "trap": null
  },
  {
    "title": "Andhra Pradesh Partners with IIT Tirupati and UNSW Sydney for Solar CoE",
    "id": "note-sec1-67",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "AP Government partnered with IIT Tirupati and UNSW Sydney to establish a Centre of Excellence for Solar Manufacturing at IIT Tirupati."
    ],
    "trap": null
  },
  {
    "title": "Bharat Electronics Limited Partners with Esri India for GeoAI",
    "id": "note-sec1-68",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "BEL signed MoU with Esri India to collaborate on defence GIS mapping, location intelligence, and GeoAI."
    ],
    "trap": null
  },
  {
    "title": "C-DAC & GSI MoU for AI and HPC Geoscience Exploration",
    "id": "note-sec5-69",
    "secId": "sec5",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "C-DAC (MeitY) signed MoU with GSI (Ministry of Mines) to collaborate in geosciences and mineral exploration using AI and High-Performance Computing (HPC)."
    ],
    "trap": null
  },
  {
    "title": "GVMC Visakhapatnam & Moscow Govt Smart Mobility Partnership",
    "id": "note-sec1-70",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Greater Visakhapatnam Municipal Corporation (GVMC, AP) signed MoU with **Government of Moscow, Russia** for smart mobility and urban transport technology transfer.",
      "*Varsha Ashok Aglawe appointed 54th DG of GSI (first woman head in 176 years).*",
      "*A S Rajeev appointed Acting Central Vigilance Commissioner.*",
      "*C-DAC and GSI partnered for AI and HPC mineral exploration.*"
    ],
    "trap": null
  },
  {
    "title": "ICAR Develops India's First Complete Pigeonpea Genome ('Asha' Variety)",
    "id": "note-sec6-71",
    "secId": "sec6",
    "interviewQ": null,
    "staticGk": "ICAR established July 16, 1929 | HQ: New Delhi.",
    "tier": "Tier A",
    "hook": "Telomere-to-telomere reference genomes enable molecular breeding of climate-resilient pulse crops.",
    "date": "2026-08-01",
    "bullets": [
      "ICAR developed India's first fully annotated telomere-to-telomere (**T2T**) reference genome for **pigeonpea (matar/arhar)**.",
      "Variety Name: Pigeonpea variety **'Asha'** approved as global reference genome.",
      "Milestone: First crop in India to have a fully annotated T2T reference genome (pigeonpea is India's 2nd most important pulse crop)."
    ],
    "trap": "Pigeonpea T2T reference genome ('Asha' variety) vs unannotated draft genomes."
  },
  {
    "title": "India Secures Historic Judo Gold Medals at 23rd Commonwealth Games 2026",
    "id": "note-sec6-72",
    "secId": "sec6",
    "interviewQ": null,
    "staticGk": "International Judo Federation HQ: Budapest, Hungary.",
    "tier": "Tier A",
    "hook": "Historic individual multi-sport wins mark structural shifts in India's international sports footprint.",
    "date": "2026-08-05",
    "bullets": [
      "**Asmita Dey** won Gold in **Women's 48 kg Judo** (India's 1st CWG judo gold medallist).",
      "**Harsh Singh** won Gold in **Men's 60 kg Judo**.",
      "**Yamini Maurya** won Silver in **Women's 57 kg Judo**.",
      "Athletics: **Neeraj Chopra** (Silver Javelin), **Yash Vir Singh** (Bronze Javelin), **Tejaswin Shankar** (Bronze Decathlon)."
    ],
    "trap": "Asmita Dey (48kg Gold) vs Yamini Maurya (57kg Silver) vs Harsh Singh (60kg Gold)."
  },
  {
    "title": "India Achieves Clean Sweep at 22nd Commonwealth Table Tennis Championships",
    "id": "note-sec6-73",
    "secId": "sec6",
    "interviewQ": null,
    "staticGk": "TTFI HQ: New Delhi.",
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Men's Singles Champion: **Ankur Bhattacharjee** (Gold).",
      "Women's Singles Champion: **Yashaswini Ghorpade** (Gold).",
      "Women's Doubles Champions: **Sreeja Akula and Syndrela Das** (Gold).",
      "Mixed Doubles Champions: **Manav Thakkar and Taneesha Kotecha** (Gold)."
    ],
    "trap": null
  },
  {
    "title": "15-Year-Old Tanvi Sharma Wins Maiden BWF World Tour Title",
    "id": "note-sec1-74",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": "BWF HQ: Kuala Lumpur, Malaysia.",
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "15-year-old **Tanvi Sharma** won maiden BWF World Tour title defeating Vietnam's Nguyen Thuy Linh.",
      "Milestone: **First Indian woman to win the title since Saina Nehwal in 2008**."
    ],
    "trap": null
  },
  {
    "title": "COAS Launches Indigenous Xtreme Weather Grade (XWG) Diesel for -42°C Operation",
    "id": "note-sec1-75",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Chief of the Army Staff General Dhiraj Seth launched indigenously developed XWG Diesel remaining fluid down to **-42°C** for high-altitude operations."
    ],
    "trap": null
  },
  {
    "title": "ICAR-NIHSAD Bhopal Develops Indigenous African Swine Fever (ASF) Vaccine",
    "id": "note-sec1-76",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "ICAR-NIHSAD in Bhopal, MP developed India's 1st homegrown African Swine Fever vaccine (launched by Agri Minister Shivraj Singh Chouhan)."
    ],
    "trap": null
  },
  {
    "title": "25 Years of Himalayan Chandra Telescope (HCT) in Hanle, Ladakh",
    "id": "note-sec4-77",
    "secId": "sec4",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "2-metre HCT at Hanle, Ladakh completed 25 years of scientific operations (operated by IIA Bengaluru under DST)."
    ],
    "trap": null
  },
  {
    "title": "IAF Conducts Counter-UAS Exercise 'ROTOR CLAP-III' in Pokhran, Rajasthan",
    "id": "note-sec1-78",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "IAF conducted 3rd edition of Counter-UAS Exercise ROTOR CLAP-III at Pokhran Field Firing Range, Rajasthan."
    ],
    "trap": null
  },
  {
    "title": "2027 ICC Men's Cricket World Cup to be Co-Hosted Across 12 Venues in South Africa, Zimbabwe & Namibia",
    "id": "note-sec1-79",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "12 venues across **South Africa, Zimbabwe, and Namibia** will co-host the 2027 ICC Men's ODI Cricket World Cup."
    ],
    "trap": null
  },
  {
    "title": "Bonn Open 2026 Tennis Doubles Championship",
    "id": "note-sec1-80",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Ramkumar Ramanathan & Vijay Sundar Prashanth won Men's Doubles title at Bonn Open 2026."
    ],
    "trap": null
  },
  {
    "title": "Washington Open 2026 Tennis Championship",
    "id": "note-sec1-81",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Alexandra Eala (Philippines) became 1st Filipino player to win a WTA Tour-level singles title; Taylor Fritz (USA) won Men's Singles."
    ],
    "trap": null
  },
  {
    "title": "BWF Para World Circuit 2026 in Brazil",
    "id": "note-sec1-82",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Biri Takar (Arunachal Pradesh) won Gold in Men's Doubles and Bronze in Men's Singles."
    ],
    "trap": null
  },
  {
    "title": "Tour de France Femmes Cycling Milestone",
    "id": "note-sec1-83",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Harshita Jakhar (19) became 1st Indian woman cyclist to feature in Tour de France Femmes (Switzerland)."
    ],
    "trap": null
  },
  {
    "title": "AI Super Apps Concept Explained",
    "id": "note-sec1-84",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Single applications integrating multi-agent AI services into one unified conversational interface.",
      "*ICAR developed India's 1st complete pigeonpea T2T reference genome using 'Asha' variety.*",
      "*Asmita Dey won India's 1st CWG Judo Gold medal (Women's 48kg).*",
      "*2027 ICC ODI World Cup will be co-hosted by South Africa, Zimbabwe, and Namibia across 12 venues.*"
    ],
    "trap": null
  },
  {
    "title": "World Bank World Development Report 2026: The Promise of Artificial Intelligence",
    "id": "note-sec1-85",
    "secId": "sec1",
    "interviewQ": "\"Why is AI automation job risk lower in developing countries like India?\"\n💡 **Model Answer: Developing economies have fewer formal cognitive desk jobs prone to Generative AI replacement, making AI primarily a productivity booster.**",
    "staticGk": "World Bank Group (HQ: Washington D.C. | President: Ajay Banga | Founded 1944).",
    "tier": "Tier A",
    "hook": "Assesses Generative AI's differential impact on developing vs developed labor markets.",
    "date": "2026-08-01",
    "bullets": [
      "Report Title: **\"World Development Report 2026: The Promise of Artificial Intelligence\"**, published by **World Bank**.",
      "Automation Risk Differential: **4.5% of jobs in low- and middle-income countries** at risk of automation vs **14.2% in high-income countries**.",
      "Productivity Boost: AI enhances productivity in **16.2% of jobs in developing countries** (vs 18.7% in high-income countries).",
      "Telangana Case Study: AI weather forecasting produced savings **up to $560 per small farmer** in Telangana."
    ],
    "trap": "Job automation risk in developing countries (4.5%) vs high-income countries (14.2%)."
  },
  {
    "title": "Annapurni Subramaniam Conferred COSPAR Vikram Sarabhai Medal 2026",
    "id": "note-sec7-86",
    "secId": "sec7",
    "interviewQ": null,
    "staticGk": "Award instituted 1990 | Awarded biennially | ISRO HQ: Bengaluru.",
    "tier": "Tier A",
    "hook": "Conferred for outstanding contributions to astronomical research and space science leadership.",
    "date": "2026-08-05",
    "bullets": [
      "Indian astrophysicist **Annapurni Subramaniam** conferred **COSPAR Vikram Sarabhai Medal 2026**.",
      "Historic Milestone: **First Indian woman scientist** to receive this award (4th Indian overall).",
      "Past Laureates: U. R. Rao (1996), Gurbax Singh Lakhina (2014), Anil Bharadwaj (2024).",
      "Ceremony: Conferred during 46th COSPAR Scientific Assembly in **Florence, Italy** by COSPAR & ISRO.",
      "Current Post: Director of **Indian Institute of Astrophysics (IIA)**, Bengaluru."
    ],
    "trap": "1st Indian woman scientist to win COSPAR Sarabhai Medal (and 4th Indian overall)."
  },
  {
    "title": "World Bank Report Highlights $194 Billion Extreme Heat Risk to India's Economy",
    "id": "note-sec1-87",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Report Title: *\"A Livable Future: Tackling Extreme Heat for Jobs and Growth in South Asia's Cities\"* ($194B/247B hrs lost in India, 66% agriculture, $1.6T cooling market by 2040)."
    ],
    "trap": null
  },
  {
    "title": "IEA Projects Critical Mineral Demand Surge Through 2040 Requiring $750B Investment",
    "id": "note-sec1-88",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "International Energy Agency report projecting **$750 billion** investment required by 2040 under STEPS for copper and lithium (IEA HQ: Paris)."
    ],
    "trap": null
  },
  {
    "title": "Kroll India's Celebrity Brand Valuation 2025",
    "id": "note-sec1-89",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "**Shah Rukh Khan** claimed #1 position as India's most powerful celebrity in 2025 ($177.9 million brand value), Ranveer Singh #2, Virat Kohli #3."
    ],
    "trap": null
  },
  {
    "title": "Tamil Nadu Wins 'Best State' Award for Organ Donations in NOTTO Report 2025-26",
    "id": "note-sec1-90",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Tamil Nadu won 'Best State' award (266 deceased donors); Delhi ranked #1 in total transplants (4,564)."
    ],
    "trap": null
  },
  {
    "title": "Book: 'Bringing the Cheetah Back to India' by Prashant Agrawal (IFS)",
    "id": "note-sec1-91",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Book Title: *\"Bringing the Cheetah Back to India: How Diplomacy Made Conservation's Big Mission Possible\"* authored by Prashant Agrawal."
    ],
    "trap": null
  },
  {
    "title": "Onam Harvest Festival Celebrated in Kerala",
    "id": "note-sec1-92",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Primary annual harvest festival of Kerala celebrating mythical King Mahabali."
    ],
    "trap": null
  },
  {
    "title": "Aadi Perukku Monsoon Festival Celebrated in Tamil Nadu",
    "id": "note-sec1-93",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Traditional monsoon water festival celebrated on 18th day of Tamil month of Aadi in Tamil Nadu.",
      "*World Bank WDR 2026 reports 4.5% job automation risk in low/middle-income countries.*",
      "*Dr. Annapurni Subramaniam became 1st Indian woman scientist to win COSPAR Vikram Sarabhai Medal.*",
      "*Shah Rukh Khan topped Kroll Brand Valuation 2025 with $177.9 million.*"
    ],
    "trap": null
  },
  {
    "title": "12th National Handloom Day Observed on 7th August",
    "id": "note-sec8-94",
    "secId": "sec8",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Observed August 7 to commemorate Swadeshi Movement launched August 7, 1905 in Calcutta."
    ],
    "trap": null
  },
  {
    "title": "World Breastfeeding Week Observed from 1st to 7th August 2026",
    "id": "note-sec8-95",
    "secId": "sec8",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Theme 2026: *\"Breastfeeding for a sustainable start in life: strengthen what works\"*."
    ],
    "trap": null
  },
  {
    "title": "Indian Organ Donation Day Observed on 3rd August",
    "id": "note-sec1-96",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Promotes voluntary organ donor registration via NOTTO."
    ],
    "trap": null
  },
  {
    "title": "International Clouded Leopard Day Observed on 4th August",
    "id": "note-sec1-97",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Raises global awareness for clouded leopard conservation (Meghalaya state animal)."
    ],
    "trap": null
  },
  {
    "title": "World Wide Web Day & World Lung Cancer Day Observed on 1st August",
    "id": "note-sec1-98",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "WWW Day marks Tim Berners-Lee's creation at CERN in 1989."
    ],
    "trap": null
  },
  {
    "title": "World Ranger Day Observed on 31st July",
    "id": "note-sec1-99",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Honors wildlife rangers killed or injured in line of duty.",
      "*National Handloom Day is observed on August 7 to mark the 1905 Swadeshi Movement.*",
      "🚫 **Skipped (low yield):** Indian Railways Emergency Quota expansion for cancer patients — *routine operational travel facility.*"
    ],
    "trap": null
  },
  {
    "title": "Taxation Bill 2026 Grants 15-Year Tax Exemption for Foreign Rough Diamond Trading via SNZs",
    "id": "note-sec1-100",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": "Income Tax Act 1961 replaced by Income-tax Act 2025.",
    "tier": "Tier A",
    "hook": "Unlocks global rough diamond trading hubs in Special Notified Zones (SNZs) by providing long-term tax certainty.",
    "date": "2026-08-07",
    "bullets": [
      "Inserts Entry 13F in Schedule IV of Income-tax Act 2025.",
      "Tax Exemption Window: October 1, 2026 to March 31, 2041 (15-year tax holiday)."
    ],
    "trap": "Rough diamond SNZ tax exemption (15 years: 2026–2041) vs Contract electronics capital goods tax exemption (sunset March 31, 2041)."
  },
  {
    "title": "Govt Mandates Exporter Registration (EOR) for FDI-Backed E-Commerce Inventory Exports",
    "id": "note-sec1-101",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Prevents speculative domestic stockpiling by foreign-funded e-commerce platforms while ensuring complete export traceability.",
    "date": "2026-08-06",
    "bullets": [
      "Mandatory Registration: Foreign-funded e-commerce inventory exporters must register as Exporter-on-Record (EOR) with DGFT (holding IEC & GSTIN).",
      "Stockpiling Norms: Stockpiling permitted only against confirmed export orders (speculative stockpiling strictly prohibited).",
      "Supplier Protection: Payments to Indian sellers cannot be contingent upon receipt of payment from overseas buyers."
    ],
    "trap": null
  },
  {
    "title": "India's SEZ Exports Rise 11.8% to ₹16.36 Lakh Crore (.28 Billion) in FY26",
    "id": "note-sec1-102",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Special Economic Zones remain India's primary engine for merchandise and services export growth.",
    "date": "2026-08-07",
    "bullets": [
      "Top Exporting State: Gujarat recorded highest SEZ exports worth ₹4,05,595 crore.",
      "Followed By: Karnataka (₹2,69,004 crore), Maharashtra (₹2,43,422 crore), and Tamil Nadu (₹2,12,288 crore)."
    ],
    "trap": null
  },
  {
    "title": "Senior Citizens & Women File ₹7,769.63 Crore Financial Cyber Fraud Complaints in 2025",
    "id": "note-sec1-103",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Escalating financial cyber fraud targets vulnerable demographic segments, driving central reporting infrastructure expansion.",
    "date": "2026-08-06",
    "bullets": [
      "Affected Groups: 1,03,488 senior citizens and 4,63,114 women lodged financial cyber fraud complaints.",
      "Administrative Nodal Office: Indian Cybercrime Coordination Centre (I4C) under Ministry of Home Affairs (MHA), New Delhi.",
      "Reporting System: Citizen Financial Cyber Fraud Reporting and Management System (CFCFRMS) launched in 2021."
    ],
    "trap": null
  },
  {
    "title": "PPF Scheme 2019 Restricts Fresh Accounts for NRIs; Existing Accounts Valid for 15-Year Tenure",
    "id": "note-sec1-104",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Clarifies non-resident investment boundaries under Public Provident Fund rules.",
    "date": "2026-08-07",
    "bullets": [
      "Account Opening Eligibility: Only resident individuals allowed to open fresh PPF accounts (NRIs, PIOs, OCIs prohibited).",
      "Existing NRI Accounts: Accounts opened prior to becoming NRI can continue until completing original 15-year tenure (no extension allowed post-maturity).",
      "Deposit Caps: Minimum ₹500, Maximum ₹1.5 lakh per financial year via NRO account."
    ],
    "trap": null
  },
  {
    "title": "Cabinet Approves ₹23,731 Crore GOBARdhan Bioenergy Scheme (FY27 to FY36)",
    "id": "note-sec1-105",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Accelerates organic waste conversion into compressed biogas (CBG) under National Circular Bioenergy Scheme.",
    "date": "2026-08-06",
    "bullets": [
      "Scheme Name: Galvanizing Organic Bio-Agro Resources Dhan (GOBARdhan).",
      "Total Financial Outlay: ₹23,731 crore for 10-year implementation (FY 2026-27 to FY 2035-36)."
    ],
    "trap": null
  },
  {
    "title": "RBI Flags El Niño Weather Risks to Agriculture and Food Inflation",
    "id": "note-sec1-106",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Monsoon disruptions from ocean surface warming directly impact vegetable and pulse yields, straining headline CPI inflation.",
    "date": "2026-08-07",
    "bullets": [
      "Macro Impact: Below-normal rainfall reduces crop production, driving consumer food price inflation."
    ],
    "trap": null
  },
  {
    "title": "EPFO Highlights 3-Year Inactivity Window for Inoperative Provident Fund Accounts",
    "id": "note-sec1-107",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Ensures timely subscriber fund withdrawals post-retirement or overseas migration.",
    "date": "2026-08-06",
    "bullets": [
      "Inoperative Timeline: EPF accounts become inoperative 3 years after retirement, permanent migration, or member death.",
      "Interest Accrual: Retiring before age 55 allows interest accrual until age 58.",
      "Unique Identifiers: EPF Member ID is 22-digit alphanumeric; UAN is permanent 12-digit universal ID."
    ],
    "trap": null
  },
  {
    "title": "Rajya Sabha Clears ₹54,067 Crore Appropriation Bill 2026 under Article 114",
    "id": "note-sec1-108",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Provides constitutional authorization for parliamentary approval of excess expenditure beyond original budget grants.",
    "date": "2026-08-07",
    "bullets": [
      "Constitutional Mandate: Article 114 mandates parliamentary approval before withdrawing funds from Consolidated Fund of India (CFI)."
    ],
    "trap": null
  },
  {
    "title": "EXIM Bank Named Nodal Implementing Agency for Export Credit Interest Subvention Scheme",
    "id": "note-sec1-109",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Transfers export credit subvention administration from RBI to EXIM Bank under Export Promotion Mission.",
    "date": "2026-08-06",
    "bullets": [
      "Implementation Date: Effective 1 April 2026.",
      "Operational Role: Manages pre- and post-shipment export credit interest subvention claims."
    ],
    "trap": null
  },
  {
    "title": "RBI Proposes On-Tap UCB Licenses for Credit Co-ops with ₹10,000 Crore Deposit Base",
    "id": "note-sec1-110",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Establishes a permanent regulatory pathway for large credit cooperative societies to convert into Urban Cooperative Banks (UCBs).",
    "date": "2026-08-07",
    "bullets": [
      "Operational Track Record: Minimum 10 years operations required.",
      "Capital Thresholds: Deposit base ≥ ₹10,000 crore, Net worth ≥ ₹300 crore (as of March 31).",
      "Initial Eligibility: Restricted to societies registered under Multi-State Cooperative Societies Act 2002.",
      "Prudential Conditions: CRAR ≥ 12%, Net NPA ≤ 3%, individual shareholding cap of 5%."
    ],
    "trap": null
  },
  {
    "title": "Regulators Consider Bringing Insurance Surety Bonds Under RBI's CRILC Database",
    "id": "note-sec2-111",
    "secId": "sec2",
    "interviewQ": null,
    "staticGk": "First digital insurance surety bond launched by National E-Governance Services Ltd & New India Assurance.",
    "tier": "Tier A",
    "hook": "Enhances systemic credit risk monitoring across non-bank surety guarantees.",
    "date": "2026-08-06",
    "bullets": [
      "CRILC Scope: Database maintained by RBI monitoring aggregate borrower credit exposures of ₹5 crore and above."
    ],
    "trap": null
  },
  {
    "title": "India Tops World in IPO Count, Ranks 3rd in Funds Raised (SEBI Annual Report FY26)",
    "id": "note-sec2-112",
    "secId": "sec2",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "High domestic equity issuance volume reinforces India's position in global capital markets.",
    "date": "2026-08-07",
    "bullets": [
      "Public Shareholding Timeline: Largest listed companies given up to 10 years to reach mandatory 25% minimum public shareholding.",
      "Pre-IPO ESOPs: Founders permitted to retain pre-IPO Employee Stock Option Plans."
    ],
    "trap": null
  },
  {
    "title": "SEBI Flags ₹87,124 Crore as Difficult-to-Recover Dues in FY26 (Up 12%)",
    "id": "note-sec2-113",
    "secId": "sec2",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Highlights regulatory enforcement recovery challenges despite record annual fee collections.",
    "date": "2026-08-06",
    "bullets": [
      "SEBI Fee Revenue: Total fee income rose 10% to ₹2,563 crore (stock exchange regulatory fees generated ₹1,349 crore).",
      "Investor Protection Fund (IPF): Fund balance rose to ₹965 crore; investor education spend stood at ₹2.25 crore."
    ],
    "trap": null
  },
  {
    "title": "RBI Classifies Tata Sons as Upper-Layer NBFC (NBFC-UL) under Scale-Based Regulation",
    "id": "note-sec2-114",
    "secId": "sec2",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Enforces enhanced capital and mandatory listing requirements on systemic holding companies.",
    "date": "2026-08-07",
    "bullets": [
      "Scale-Based Classification: 17 NBFCs identified in Upper Layer (NBFC-UL).",
      "Upper Layer Criteria: Asset size ≥ ₹1 lakh crore (₹1 trillion); mandatory public listing within 3 years.",
      "Standalone Assets: Tata Sons standalone assets exceed ₹2 lakh crore (₹2 trillion).",
      "Asset Layer Caps: Base Layer (<₹1,000 cr), Middle Layer (≥₹1,000 cr), Upper Layer (≥₹1 lakh cr)."
    ],
    "trap": null
  },
  {
    "title": "SEBI Proposes REITs & InvITs Investment in Under-Construction Third-Party Assets",
    "id": "note-sec2-115",
    "secId": "sec2",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Unlocks institutional capital for greenfield infrastructure and commercial real estate development.",
    "date": "2026-08-06",
    "bullets": [
      "Exposure Norms: Allows minority non-controlling stakes within existing exposure limits.",
      "Cooling-off Period: Proposed reduction from 12 weeks to 8 weeks for illiquid privately placed InvITs."
    ],
    "trap": null
  },
  {
    "title": "RBI Issues Technology-Based Loan Recovery Norms & Phone Lock Restrictions (Effective Jan 1, 2027)",
    "id": "note-sec2-116",
    "secId": "sec2",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Curbs predatory recovery agent practices and regulates digital mobile loan lock mechanisms.",
    "date": "2026-08-07",
    "bullets": [
      "Implementation Date: Effective January 1, 2027 (extended from October 1, 2026).",
      "Contact Hours: Recovery agents allowed to contact borrowers only between 8:00 AM and 7:00 PM.",
      "Phone Lock Restrictions: No restriction activation until 30 days past due; complete loan restrictions permitted only after 60 days past due.",
      "Mandated Exemptions: Banks CANNOT disable incoming calls, SMS, or emergency SOS functions.",
      "Compensation Penalty: Restoration required within 1 hour post-payment; bank delay penalty of ₹250/hour capped at loan amount."
    ],
    "trap": null
  },
  {
    "title": "SEBI Revamps Securities Lending Scheme, Launches Setu Portal & Bond Tokenisation Pilot",
    "id": "note-sec2-117",
    "secId": "sec2",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Modernizes securities borrowing infrastructure, digital compliance filing, and blockchain corporate bond issuance.",
    "date": "2026-08-06",
    "bullets": [
      "Setu Portal: Centralized online compliance and registration portal for SEBI-regulated intermediaries.",
      "Tokenisation Pilot: Corporate bond tokenisation using Distributed Ledger Technology (DLT)."
    ],
    "trap": null
  },
  {
    "title": "Home Minister Receives ₹22.90 Crore Dividend from REPCO Bank for FY26",
    "id": "note-sec3-118",
    "secId": "sec3",
    "interviewQ": null,
    "staticGk": "REPCO Bank established Nov 19, 1969 under Madras Cooperative Societies Act 1961 (Chairman: E. Santhanam; MHA control; operates in TN, AP, KL, KA).",
    "tier": "Tier A",
    "hook": "State-backed cooperative bank returns 30% dividend on government equity.",
    "date": "2026-08-07",
    "bullets": [
      "Shareholding: Govt of India holds 76.32% share capital (₹76.32 crore)."
    ],
    "trap": null
  },
  {
    "title": "Indel Remit Receives RBI Approval for Foreign Trade Remittances up to ₹25 Lakh",
    "id": "note-sec2-119",
    "secId": "sec2",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Expands non-bank foreign exchange remittance channels for small traders.",
    "date": "2026-08-06",
    "bullets": [
      "Transaction Cap: Up to ₹25 lakh per trade remittance transaction."
    ],
    "trap": null
  },
  {
    "title": "Standard Chartered Obtains IFSCA Nod for GIFT City Wealth Management Services",
    "id": "note-sec3-120",
    "secId": "sec3",
    "interviewQ": null,
    "staticGk": "Standard Chartered was the first foreign bank to commence operations in GIFT City (2020).",
    "tier": "Tier A",
    "hook": "Expands offshore wealth distribution capabilities from India's International Financial Services Centre.",
    "date": "2026-08-07",
    "bullets": [],
    "trap": null
  },
  {
    "title": "Reliance Brands Partners with Kim Kardashian's SKIMS for Indian Retail Expansion",
    "id": "note-sec1-121",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Expands luxury shapewear retail footprint in India via RBL.",
    "date": "2026-08-06",
    "bullets": [],
    "trap": null
  },
  {
    "title": "Niyo Forex Secures Expanded Perpetual AD-II Foreign Exchange Licenses from RBI",
    "id": "note-sec1-122",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Expands forex card and remittance distribution permissions under FEMA 2026.",
    "date": "2026-08-07",
    "bullets": [],
    "trap": null
  },
  {
    "title": "Pawan Hans Partners with Norway's Noemi Aerospace for Electric Seaplanes",
    "id": "note-sec5-123",
    "secId": "sec5",
    "interviewQ": null,
    "staticGk": "Noemi Aerospace (Elfly AS) HQ: Bergen, Norway | Pawan Hans HQ: Noida, UP (Ministry of Civil Aviation).",
    "tier": "Tier A",
    "hook": "Promotes green aviation and regional seaplane connectivity under UDAN framework.",
    "date": "2026-08-06",
    "bullets": [],
    "trap": null
  },
  {
    "title": "IIFL Capital Adopts Flytxt AI Platform to Accelerate AUM Growth",
    "id": "note-sec5-124",
    "secId": "sec5",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Leverages AI for investor engagement and asset management.",
    "date": "2026-08-07",
    "bullets": [],
    "trap": null
  },
  {
    "title": "Ministry of Culture & Tourism Partners with Netflix for 'As Seen on Netflix' Section",
    "id": "note-sec5-125",
    "secId": "sec5",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Showcases Indian cultural heritage destinations on Incredible India Portal.",
    "date": "2026-08-06",
    "bullets": [
      "Netflix Co-CEO: Ted Sarandos | Union Minister: Gajendra Singh Shekhawat."
    ],
    "trap": null
  },
  {
    "title": "Bajaj General Insurance Partners with Swiss Re for Commercial Structured Coverage",
    "id": "note-sec5-126",
    "secId": "sec5",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Leverages Swiss Re's global underwriting platform for Indian commercial risk solutions.",
    "date": "2026-08-07",
    "bullets": [],
    "trap": null
  },
  {
    "title": "Dr. T.V. Somanathan Gets 1-Year Extension as Cabinet Secretary; Govind Mohan as Home Secretary",
    "id": "note-sec5-127",
    "secId": "sec5",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Key administrative extensions in top civil service posts.",
    "date": "2026-08-06",
    "bullets": [
      "CEO Air India: Tewolde Gebremariam."
    ],
    "trap": null
  },
  {
    "title": "Rahul Jain Appointed Senior Adviser to Executive Director (India) at IMF",
    "id": "note-sec1-128",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Key multilateral appointments.",
    "date": "2026-08-07",
    "bullets": [
      "Baldeo Purushartha appointed Senior Adviser to ED at ADB; Satyajit Mohanty appointed Representative of India at ICAO Council."
    ],
    "trap": null
  },
  {
    "title": "India Hosts 2nd National Port Security Conference 2026 in New Delhi",
    "id": "note-sec5-129",
    "secId": "sec5",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Accelerates maritime security digitisation and port workflow standardization.",
    "date": "2026-08-06",
    "bullets": [
      "Key Platforms: e-Samudra portal, Maritime Single Window, and One Nation One Port Process."
    ],
    "trap": null
  },
  {
    "title": "UNCCD COP17 to be Hosted by Mongolia in August 2026",
    "id": "note-sec5-130",
    "secId": "sec5",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Global environmental conference on desertification and land restoration.",
    "date": "2026-08-07",
    "bullets": [
      "Location & Dates: Ulaanbaatar, Mongolia (August 17 to 28, 2026).",
      "Theme: “Restoring Land. Restoring Hope”."
    ],
    "trap": null
  },
  {
    "title": "Seoul Hosts Global AI and Digital Summit 2026",
    "id": "note-sec5-131",
    "secId": "sec5",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "World Bank showcase of sub-national digital sandbox initiatives.",
    "date": "2026-08-06",
    "bullets": [
      "Haryana AI Sandbox showcased at Korea Digital Summit (October 19–22, 2026)."
    ],
    "trap": null
  },
  {
    "title": "9th India Medical Device Conference 2026 Held in New Delhi",
    "id": "note-sec5-132",
    "secId": "sec5",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Promotes India as a global manufacturing hub for quality medical devices.",
    "date": "2026-08-07",
    "bullets": [
      "Organized By: Dept of Pharmaceuticals & FICCI (Aug 7–8, 2026).",
      "Theme: “Towards Viksit Bharat: Advancing India as a Global Hub for Quality Medical Devices”."
    ],
    "trap": null
  },
  {
    "title": "IIT Hyderabad & Crimson Energy Launch 'ANUGYAN' Nuclear Technology Program",
    "id": "note-sec6-133",
    "secId": "sec6",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "India's 1st industry-academia nuclear orientation program.",
    "date": "2026-08-06",
    "bullets": [
      "Capacity Goal: Expand nuclear power capacity from 8.8 GW to 100 GW by 2047."
    ],
    "trap": null
  },
  {
    "title": "Supreme Court Mandates 10km Mining Buffer Zone Around All Notified Wetland Reserves",
    "id": "note-sec4-134",
    "secId": "sec4",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Extends environmental protection order nationwide beyond Asan Wetland Reserve (Uttarakhand).",
    "date": "2026-08-07",
    "bullets": [],
    "trap": null
  },
  {
    "title": "Chandipura Virus Disease (CHPV) Outbreak Triggers Acute Encephalitis Syndrome Alerts",
    "id": "note-sec6-135",
    "secId": "sec6",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Rare vector-borne viral illness causing AES.",
    "date": "2026-08-06",
    "bullets": [],
    "trap": null
  },
  {
    "title": "Ladakh to Launch India's First High-Altitude Wildlife Safari in Hemis & Changthang",
    "id": "note-sec4-136",
    "secId": "sec4",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "First high-altitude safari routes across Hemis National Park, Changthang and Karakoram sanctuaries.",
    "date": "2026-08-07",
    "bullets": [],
    "trap": null
  },
  {
    "title": "India Successfully Test-Fires Agni-4 Ballistic Missile (4,000 km Strike Range)",
    "id": "note-sec6-137",
    "secId": "sec6",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Validates solid-fuel medium-range surface-to-surface missile capability from Chandipur, Odisha.",
    "date": "2026-08-06",
    "bullets": [],
    "trap": null
  },
  {
    "title": "R Praggnanandhaa Wins St. Louis Rapid & Blitz 2026 Chess Tournament",
    "id": "note-sec6-138",
    "secId": "sec6",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Indian Grandmaster defeats Javokhir Sindarov (Uzbekistan).",
    "date": "2026-08-07",
    "bullets": [],
    "trap": null
  },
  {
    "title": "Arunachal Pradesh to Host Asian Rafting Championships 2026 on Simang River",
    "id": "note-sec6-139",
    "secId": "sec6",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Hosted at Boleng from Oct 5–9, 2026. Official Mascot: Nyami.",
    "date": "2026-08-06",
    "bullets": [],
    "trap": null
  },
  {
    "title": "Nitin Gadkari Confers Sarvottam Jeevan Raksha Padak to 12 Silkyara Tunnel Rat Miners",
    "id": "note-sec7-140",
    "secId": "sec7",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Ashoka Chakra series gallantry offshoot (instituted 1961).",
    "date": "2026-08-07",
    "bullets": [
      "Award Money: Sarvottam (₹2,00,000), Uttam (₹1,50,000), Jeevan Raksha (₹100,000)."
    ],
    "trap": null
  },
  {
    "title": "P. Pechiyammal and Govindhammal Honored with Dr. M.S. Swaminathan Award 2026",
    "id": "note-sec7-141",
    "secId": "sec7",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Honored in Chennai by MSSRF, CavinKare & Rotary Club of Madras East for environmental protection.",
    "date": "2026-08-06",
    "bullets": [],
    "trap": null
  },
  {
    "title": "Knight Frank Atlas 2026: Mumbai Ranks 15th, Hyderabad 27th Globally in Data Centre Capacity",
    "id": "note-sec7-142",
    "secId": "sec7",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Evaluates global data center operational and development pipelines.",
    "date": "2026-08-07",
    "bullets": [
      "Mumbai: 15th operational (11th development pipeline).",
      "Hyderabad: 27th operational (151 MW live, 2.2 GW pipeline)."
    ],
    "trap": null
  },
  {
    "title": "Google Named India's Most Attractive Employer Brand in REBR 2026 Report",
    "id": "note-sec7-143",
    "secId": "sec7",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Randstad Employer Brand Research 2026 ranking (followed by Tata Group and Amazon).",
    "date": "2026-08-06",
    "bullets": [],
    "trap": null
  },
  {
    "title": "12th National Handloom Day Observed on 7th August 2026",
    "id": "note-sec8-144",
    "secId": "sec8",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Commemorates 1905 Swadeshi Movement (started 2015).",
    "date": "2026-08-07",
    "bullets": [
      "Awards: 22 total (3 Sant Kabir + 9 National Handloom Awards for 2025)."
    ],
    "trap": null
  },
  {
    "title": "Hiroshima Day Observed Globally on 6th August",
    "id": "note-sec8-145",
    "secId": "sec8",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Commemorates 1945 atomic bombing.",
    "date": "2026-08-06",
    "bullets": [],
    "trap": null
  },
  {
    "title": "Article 370 Abrogation 7th Anniversary Observed on 5th August 2026",
    "id": "note-sec8-146",
    "secId": "sec8",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Celebrated via dPal rNgam Duston festival at Leh Palace for Ladakh UT declaration anniversary.",
    "date": "2026-08-07",
    "bullets": [],
    "trap": null
  },
  {
    "title": "Squadron Leader Bhawana Kanth Becomes First Woman IAF 'Top Gun' Combat Leader",
    "id": "note-sec8-147",
    "secId": "sec8",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "1st woman to graduate from IAF Fighter Combat Leader course after 20-week training.",
    "date": "2026-08-06",
    "bullets": [],
    "trap": null
  },
  {
    "title": "Static GK Highlights: Manas National Park, SpaceX Falcon 9 Lunar Impact, Himalayan Serow",
    "id": "note-sec1-148",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Key static environment & space facts.",
    "date": "2026-08-07",
    "bullets": [
      "Manas NP: Tiger & Elephant reserve in Assam.",
      "Himalayan Serow: Dalhousie, HP (IUCN: Near Threatened, CITES Appendix I).",
      "Mullaperiyar Dam: Masonry gravity dam in Thekkady, Idukki, Kerala."
    ],
    "trap": null
  }
];

const CA_SECTION_DRILLS = {
  "sec1": {
    retrievals: [
      "What is the total financial outlay and implementation duration for the GOBARdhan Bioenergy Scheme approved by Cabinet?",
      "What is the maximum tax exemption window granted under Taxation Bill 2026 for foreign rough diamond trading in SNZs?",
      "What is the minimum deposit base and net worth required for credit co-op societies to apply for an on-tap UCB license?",
      "Under technology-based loan recovery rules, what are the contact hours and mobile phone lock restriction windows?",
      "What floor price per share was fixed for LIC's 6.5% Offer for Sale (OFS)?"
    ],
    coverTests: [
      "1. GOBARdhan outlay & implementation years?",
      "2. SNZ rough diamond tax holiday sunset year?",
      "3. UCB conversion deposit base & net worth threshold?",
      "4. Recovery agent contact hours & phone lock 100% past due window?",
      "5. India SEZ export growth % & top exporting state in FY26?"
    ],
    answers: "1. ₹23,731 Crore, FY27 to FY36 | 2. March 31, 2041 (15-year exemption) | 3. Deposit ≥ ₹10,000 crore, Net worth ≥ ₹300 crore | 4. 8:00 AM to 7:00 PM; 60 days past due | 5. 11.8% growth (₹16.36 lakh cr), Gujarat top state (₹4.05 lakh cr)",
    examAngles: [
      "GOBARdhan scheme total outlay is ₹23,731 crore over 10 years.",
      "SNZ rough diamond tax holiday is 15 years (October 1, 2026 to March 31, 2041).",
      "Recovery agents restricted to 8:00 AM – 7:00 PM; phone lock prohibited before 30 days past due."
    ]
  },
  "sec2": {
    retrievals: [
      "What is India's global ranking in IPO count and funds raised in FY26 according to SEBI's Annual Report?",
      "What is the asset size threshold for an NBFC to be classified in the Upper Layer (NBFC-UL) by RBI?",
      "By how many weeks is SEBI proposing to reduce the cooling-off period for illiquid privately placed InvITs?",
      "What is the minimum aggregate exposure threshold for credit data collected under RBI's CRILC database?",
      "What is the current repo rate and projected FY27 GDP growth rate announced in RBI's 62nd MPC statement?"
    ],
    coverTests: [
      "1. SEBI Annual Report FY26 India IPO count rank & funds raised rank?",
      "2. NBFC Upper Layer (NBFC-UL) asset size threshold & mandatory listing window?",
      "3. InvIT cooling-off period proposed reduction?",
      "4. CRILC minimum borrower aggregate credit exposure threshold?",
      "5. SEBI difficult-to-recover dues amount in FY26?"
    ],
    answers: "1. 1st globally in count, 3rd globally in funds raised | 2. Assets ≥ ₹1 Lakh Crore (₹1 Trillion); mandatory listing within 3 years | 3. Reduced from 12 weeks to 8 weeks | 4. Aggregate credit exposure ≥ ₹5 crore | 5. ₹87,124 crore (up 12%)",
    examAngles: [
      "India ranked 1st in IPO count and 3rd in funds raised in FY26.",
      "NBFC-UL threshold is ₹1 lakh crore asset size with mandatory listing within 3 years.",
      "CRILC database tracks aggregate credit exposures of ₹5 crore and above."
    ]
  }
};