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
  },
  {
    "title": "Maharashtra Approves ₹45-Crore Eco-Nature Park with India's 1st AI Bird Monitoring Centre at Thane Creek",
    "interviewQ": "\"How does AI-driven acoustic monitoring improve wetland conservation along the Central Asian Flyway?\"\n💡 **Model Answer: Automated real-time image and sound recognition tracks migratory species populations without human environmental disturbance.**",
    "hook": "Integrates AI acoustic sensors and automated camera tracking into coastal Ramsar wetland conservation.",
    "tier": "Tier A",
    "trap": "India's 1st dedicated flamingo sanctuary (Thane Creek, 2015) vs India's 101st Ramsar site (Glaw Lake, Arunachal Pradesh).",
    "staticGk": "Thane Creek declared wildlife sanctuary in 2015 (India's 1st dedicated flamingo sanctuary) | Designated Ramsar site.",
    "id": "note-sec4-149",
    "bullets": [
      "Project Location: Thane Creek Flamingo Sanctuary shoreline (Bhandup Bird Park project, 20.09 hectares total, 0.35 hectares physical footprint).",
      "Technology Footprint: Uses AI-based cameras and acoustic sensors across a 1.5-km stretch to track bird activity along the Central Asian Flyway.",
      "Funding Allocation: ₹45 crore sanctioned from District Planning Committee special fund."
    ],
    "secId": "sec4",
    "date": "2026-08-01"
  },
  {
    "title": "President Droupadi Murmu Launches e-Audio Guide, e-Upahaar 3rd Edition, and RAAHI Electric Bus Service",
    "interviewQ": null,
    "hook": "Introduces citizen-centric, sustainability-focused, and heritage initiatives marking 4 years of Presidency.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "Droupadi Murmu sworn in as 15th President on July 25, 2022 (India's 1st tribal Head of State) | Historic Mughal Gardens renamed Amrit Udyan.",
    "id": "note-sec4-150",
    "bullets": [
      "Heritage & Inclusion: Launched app-based e-Audio Guide (16 Indian languages + sign language) and 3rd edition of e-Upahaar (300 curated gifts for public auction).",
      "Childcare Facility: Inaugurated 'Bachpan Bal Parisar' comprising 'Kilkari' play zone and 'Samarth Anganwadi-cum-Palna'.",
      "Green Mobility: Flagged off 'RAAHI' (Rashtrapati Bhavan Access and Heritage Interconnector)—a fare-free, 27-seater electric bus operated by women drivers.",
      "Net Zero Infrastructure: Foundation stone laid for new service block under Net Zero Energy Strategy."
    ],
    "secId": "sec4",
    "date": "2026-08-02"
  },
  {
    "title": "MHA Reports Over 12,000 e-Zero FIRs Registered Against Cyber Financial Frauds (Delhi Tops List)",
    "interviewQ": null,
    "hook": "Expedites emergency reporting of financial cybercrime across 18 participating States and Union Territories.",
    "tier": "Tier A",
    "trap": "3-day window to convert e-Zero FIR into regular FIR vs 30-day past due window for loan phone lock restrictions.",
    "staticGk": "National Cyber Crime Reporting Portal (NCRP) administered under I4C (MHA) | CEO: Rajesh Kumar.",
    "id": "note-sec1-151",
    "bullets": [
      "Operational Network: e-Zero FIR system (launched May 2025) implemented across 18 States/UTs, allowing direct online reporting via helpline 1930.",
      "State Rankings: Delhi topped nationwide with 6,115 e-Zero FIRs, followed by Chandigarh (4,174) and Uttarakhand (552).",
      "Procedural Window: Complainants must visit local territorial police station within 3 days to convert Zero FIR into regular FIR.",
      "Constitutional Domain: 'Police' and 'Public Order' are State subjects under the Seventh Schedule of the Constitution."
    ],
    "secId": "sec1",
    "date": "2026-08-03"
  },
  {
    "title": "Department of Expenditure Enforces 'One Officer, One Official Car' Policy for Central Bureaucracy",
    "interviewQ": null,
    "hook": null,
    "tier": "Tier B+",
    "trap": null,
    "staticGk": "Department of Expenditure works under Ministry of Finance.",
    "id": "note-sec1-152",
    "bullets": [
      "Restricts entitled officers to 1 official government car even if assigned additional charge of other ministries, PSUs, or autonomous bodies.",
      "Personal Travel Allowance: Entitled officers may use official cars for personal travel up to 500 km per month by paying ₹3,000 per month and forfeiting transport allowance."
    ],
    "secId": "sec1",
    "date": "2026-08-04"
  },
  {
    "title": "Defence Minister Inaugurates Country's 1st Department of Military Medicine at Command Hospital, Lucknow",
    "interviewQ": null,
    "hook": "Establishes dedicated academic and operational military healthcare research under Army Medical Services.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "AFMS Headquarters: New Delhi | DGAFMS: Air Marshal Sandeep Thareja.",
    "id": "note-sec6-153",
    "bullets": [
      "Administrative Nodal Body: Established under Directorate General of Medical Services (Army).",
      "Strategic Alignment: Complements proposed Global Military Medicine Centre under Raksha Strategy Vision 2026-30.",
      "Specialized Disciplines: Focuses on CBRNe medical response, damage control trauma, combat psychiatry, and high-altitude field care."
    ],
    "secId": "sec6",
    "date": "2026-08-05"
  },
  {
    "title": "Ministry of Panchayati Raj Launches 'DAANVEER' Citizen Participation Portal for Gram Panchayats",
    "interviewQ": null,
    "hook": null,
    "tier": "Tier B+",
    "trap": null,
    "staticGk": "Union Minister for Panchayati Raj: Rajiv Ranjan Singh (Lalan Singh).",
    "id": "note-sec10-154",
    "bullets": [
      "Enables individuals and Indian diaspora to voluntarily donate computers to nearly 2.5 lakh Gram Panchayats via 'Meri Panchayat' app and DigiHaat.",
      "Technical Partners: Developed in collaboration with National Informatics Centre (NIC) and DigiHaat."
    ],
    "secId": "sec10",
    "date": "2026-08-06"
  },
  {
    "title": "MHA Orders Takedown of Open-Source Bluetooth Mesh App 'Bitchat' on GitHub",
    "interviewQ": "\"Why did law enforcement agencies order the removal of peer-to-peer mesh apps like Bitchat?\"\n💡 **Model Answer: Decentralized BLE apps operate without phone numbers, IP logs, or central servers, preventing lawful interception during cyber threats.**",
    "hook": "Addresses lawful interception concerns over decentralized Bluetooth Low Energy (BLE) peer-to-peer messaging.",
    "tier": "Tier A",
    "trap": "3-hour GitHub takedown deadline vs 3-day e-Zero FIR conversion window.",
    "staticGk": "IT Act enacted in 2000 | Safe harbour protection provided under Section 79 of IT Act 2000.",
    "id": "note-sec2-155",
    "bullets": [
      "Legal Citation: Order issued by I4C under Section 79(3)(b) of Information Technology Act 2000 and Rule 3(1)(d) of IT Rules 2021.",
      "Operational Mechanism: Bitchat (created by Jack Dorsey) uses BLE mesh networks for encrypted communication within 30–100 metres without internet or mobile networks.",
      "Takedown Deadline: GitHub directed to disable access to 3 repositories within 3 hours to avoid loss of intermediary safe-harbour protection."
    ],
    "secId": "sec2",
    "date": "2026-08-07"
  },
  {
    "title": "Air India Expands International Aviation Hub Model across 44 Target Airports",
    "interviewQ": null,
    "hook": "Routes Tier-II and Tier-III regional passengers through major hub airports for seamless international connections.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "Air India CEO: Tewolde Gebremariam | Ministry of Civil Aviation.",
    "id": "note-sec1-156",
    "bullets": [
      "Hub & Spoke Footprint: Delhi serves as 1st primary hub airport; Varanasi, Amritsar, and Ahmedabad operating as spoke airports.",
      "Easy Connect Flights: Enables international check-in, luggage drop, and immigration formalities at origin regional airports before connecting via Delhi.",
      "National Target: Ministry of Civil Aviation aims to develop 100 airports and 200 heliports over next 10 years."
    ],
    "secId": "sec1",
    "date": "2026-08-01"
  },
  {
    "title": "MoHUA Approves ₹2,719.80 Crore Urban Challenge Fund (UCF) Projects for Ahmedabad",
    "interviewQ": null,
    "hook": "Finances major urban infrastructure, Intelligent Water Management, and ITMS transit under Centrally Sponsored UCF.",
    "tier": "Tier A",
    "trap": "UCF Central Assistance (₹1 lakh crore / 25% project cost) vs total urban investment target (₹4 lakh crore).",
    "staticGk": "MoHUA Minister: Manohar Lal Khattar | ADB approved  billion loan for Urban Transformation and Investment Program.",
    "id": "note-sec10-157",
    "bullets": [
      "Approved Projects: ₹852.93 cr (West Ahmedabad sewerage), ₹551.35 cr (East Ahmedabad sewerage), ₹479.25 cr (125 TPD Integrated Sludge Facility), ₹331.03 cr (ITMS & AFCS Transit).",
      "UCF Corpus & Structure: UCF approved with ₹1 lakh crore Central Assistance to leverage ₹4 lakh crore urban investments (FY26 to FY31). Central support capped at 25%, minimum 50% market raised, 25% state/ULB.",
      "Credit Guarantee Sub-Scheme: Central repayment guarantee up to ₹7 crore (or 70% of loan) for Tier-II/III cities."
    ],
    "secId": "sec10",
    "date": "2026-08-02"
  },
  {
    "title": "Supreme Court Issues Interim Order Barring Audio-Video Court Recording Monetisation on Digital Platforms",
    "interviewQ": null,
    "hook": "Protects judicial dignity against selective, decontextualized social media video clipping.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "Supreme Court sanctioned judge strength: 38 (including CJI) | Article 124(1).",
    "id": "note-sec2-158",
    "bullets": [
      "Bench Composition: 3-judge bench headed by CJI Surya Kant, Justice Joymalya Bagchi, and Justice V. Mohana.",
      "Order Mandate: Bars posting, reposting, extracting, or monetising courtroom audio-video recordings without written permission of Supreme Court Secretary General or High Court Registrar Generals.",
      "News Reporting Clarification: Clarified that order does NOT restrict genuine news reporting or authorized livestreaming."
    ],
    "secId": "sec2",
    "date": "2026-08-03"
  },
  {
    "title": "Kerala Deploys 'ANNAM.AI' Smart Weather Stations for Climate-Smart Agriculture",
    "interviewQ": null,
    "hook": "Rolls out 3-km resolution agricultural weather monitoring developed by IIT Ropar.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "IIT Ropar located in Punjab | Kerala CM: V. D. Satheesan.",
    "id": "note-sec6-159",
    "bullets": [
      "Centre of Excellence: Developed at IIT Ropar with support from Ministry of Education under 100-day action plan.",
      "Deployment Footprint: 100 AI-powered weather stations deployed at 3-km resolution tracking solar radiation, soil moisture, and rainfall.",
      "National Pilot: Punjab was the 1st implementation state (100 stations deployed by March 30, 2026)."
    ],
    "secId": "sec6",
    "date": "2026-08-04"
  },
  {
    "title": "Ladakh Grants Statutory Protection to 23 Ancient Heritage Sites under J&K Preservation Act",
    "interviewQ": null,
    "hook": null,
    "tier": "Tier B+",
    "trap": null,
    "staticGk": "Ladakh carved out as UT on October 31, 2019 | Lieutenant Governor: Vinai Kumar Saxena.",
    "id": "note-sec4-160",
    "bullets": [
      "Notifies 23 ancient forts, monasteries, and petroglyph clusters as 'Protected Monuments' across Leh and Kargil.",
      "Prominent Monuments: Maitreya Buddha Rock Carving at Shey, Tingmosgang Fort, Ancient Caves at Saspol, and Chamba Karpo at Diggar."
    ],
    "secId": "sec4",
    "date": "2026-08-05"
  },
  {
    "title": "Rajasthan Becomes 1st State to Operationalise Auctioned Rare Earth Elements (REE) Exploration License",
    "interviewQ": null,
    "hook": "Grants 207.63 sq. km. critical mineral exploration block in Navatala-Devigarh to CMPDI.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "CMPDI is a Central PSU subsidiary of Coal India Ltd | Rajasthan CM: Bhajan Lal Sharma.",
    "id": "note-sec1-161",
    "bullets": [
      "Licence Area: Spans 207.63 sq. km. across Pachpadra tehsil (Balotra) and Shergarh tehsil (Jodhpur).",
      "Awardee Entity: Central Mine Planning and Design Institute Limited (CMPDI).",
      "Critical Minerals Identified: Lanthanum, Cerium, Praseodymium, and Neodymium for EV and semiconductor supply chains."
    ],
    "secId": "sec1",
    "date": "2026-08-06"
  },
  {
    "title": "Brookfield Launches  Million 'Lumara' Renewable Energy Platform in India",
    "interviewQ": null,
    "hook": "Accelerates solar, wind, and Battery Energy Storage Systems (BESS) buildout backed by ALTÉRRA fund.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "Brookfield Asset Management HQ: Toronto/New York | CEO: Bruce Flatt.",
    "id": "note-sec1-162",
    "bullets": [
      "Platform Capital: Initial deployment of ~ million backed by Brookfield Catalytic Transition Fund (CTF).",
      "Anchor Investor: Funded by UAE-backed climate vehicle ALTÉRRA (target corpus up to  billion).",
      "National Target Alignment: Supports India's goal of reaching 500 GW installed renewable capacity by 2030."
    ],
    "secId": "sec1",
    "date": "2026-08-07"
  },
  {
    "title": "India Performs Record 20,138 Organ Transplants in 2025; Ranked 3rd Globally (NOTTO Report)",
    "interviewQ": null,
    "hook": "Launches nationwide 'Jug Jug Jiyo Abhiyaan' and e-Pratyaropan portal on 16th Indian Organ Donation Day.",
    "tier": "Tier A",
    "trap": "India's global transplant rank (3rd) vs deceased organ donor top state (Tamil Nadu, 266 donors).",
    "staticGk": "NOTTO works under Ministry of Health & Family Welfare | Indian Organ Donation Day observed August 3.",
    "id": "note-sec3-163",
    "bullets": [
      "Global Ranking: India ranks 3rd globally in total organ transplants (behind US and China).",
      "National Awards: Tamil Nadu named Best State for highest deceased organ donors (266 donors); Assam Best NE State; Delhi Best UT.",
      "Digital Infrastructure: Launched 'e-Pratyaropan' portal and NOTTO app connecting 1,200 registered transplant hospitals.",
      "Aadhaar Pledges: Over 5 lakh Aadhaar-verified organ donation pledges recorded since 2023."
    ],
    "secId": "sec3",
    "date": "2026-08-01"
  },
  {
    "title": "Indian Railways Transports Live Donor Heart by Vande Bharat Express for 1st Time",
    "interviewQ": null,
    "hook": null,
    "tier": "Tier B+",
    "trap": null,
    "staticGk": "Indian Railways CEO: Satish Kumar | RPF works under Ministry of Railways.",
    "id": "note-sec3-164",
    "bullets": [
      "Ferried live heart 250 km from Surat to Ahmedabad aboard Vande Bharat Express (Train No. 20901) to U.N. Mehta Institute.",
      "Green Corridor: Platform 1 at Ahmedabad Station connected via RPF-Police green corridor."
    ],
    "secId": "sec3",
    "date": "2026-08-02"
  },
  {
    "title": "PM Modi Dedicates ₹17,900 Crore Infrastructure Projects in Andhra Pradesh & Opens Alluri Sitarama Raju Airport",
    "interviewQ": null,
    "hook": "Inaugurates Greenfield PPP airport at Bhogapuram and lays foundation for AP's 1st semiconductor facility.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "Andhra Pradesh CM: N. Chandrababu Naidu | Karnataka CM: Siddaramaiah / D. K. Shivakumar.",
    "id": "note-sec4-165",
    "bullets": [
      "Bhogapuram International Airport: Developed under PPP mode at ₹5,640 crore (capacity 6 million passengers annually).",
      "Semiconductor Infrastructure: Foundation stone laid for Andhra Semiconductor and Innovation Park (ASIP) at Visakhapatnam (₹460 crore).",
      "Heritage Landmark: Inaugurated 'Viveka Smaraka' at Sri Ramakrishna Ashrama in Mysuru, Karnataka."
    ],
    "secId": "sec4",
    "date": "2026-08-03"
  },
  {
    "title": "4th Edition of Tri-Services Future Warfare Course Commences in New Delhi",
    "interviewQ": null,
    "hook": null,
    "tier": "Tier B+",
    "trap": null,
    "staticGk": "1st pilot edition held in September 2024 | CENJOWS HQ: New Delhi.",
    "id": "note-sec6-166",
    "bullets": [
      "Organized under aegis of HQ Integrated Defence Staff (IDS) and coordinated by CENJOWS at Manekshaw Centre.",
      "Focus: Multi-domain operations, grey-zone warfare, AI, quantum tech, and autonomous combat systems."
    ],
    "secId": "sec6",
    "date": "2026-08-05"
  },
  {
    "title": "SBI Card and Google Pay Launch Co-Branded 'Google Pay Flex SBI Card' on RuPay & Visa",
    "interviewQ": null,
    "hook": "Integrates UPI payment linking and tap-to-pay tokenization on Google Pay app.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "SBI Cards MD & CEO: Salila Pande | Google CEO: Sundar Pichai.",
    "id": "note-sec3-167",
    "bullets": [
      "Co-Branded Lineage: Google Pay's 2nd co-branded credit card in India (after Axis Bank in Dec 2025).",
      "Payment Interoperability: RuPay variant can be linked directly to UPI for merchant QR payments."
    ],
    "secId": "sec3",
    "date": "2026-08-06"
  },
  {
    "title": "NCDEX Launches 'NCDEX Nidhi' Mutual Fund Transaction Platform to Boost Rural Penetration",
    "interviewQ": null,
    "hook": "Leverages 800+ Farmer Producer Organisations (FPOs) to expand mutual fund distribution beyond top 100 cities.",
    "tier": "Tier A",
    "trap": "FPO corporate ARN fee (reduced to ₹10,000) vs standard corporate ARN fee (₹40,000).",
    "staticGk": "NCDEX HQ: Mumbai | MD & CEO: Arun Raste | AMFI Chairman: Navneet Munot.",
    "id": "note-sec3-168",
    "bullets": [
      "AMC Onboarding: 6 AMCs onboarded (Nippon India, HDFC, Axis, LIC, Tata, and Invesco MF).",
      "ARN Fee Reduction: AMFI reduced corporate ARN registration fee for certified FPO distributors to ₹10,000 (from ₹40,000)."
    ],
    "secId": "sec3",
    "date": "2026-08-07"
  },
  {
    "title": "Nepal Central Bank Allows Indian & Nepalese Currency Notes of ₹200 and ₹500 Denominations",
    "interviewQ": null,
    "hook": "Relaxes 2019 demonetisation restrictions up to a combined carrying limit of ₹25,000 per person.",
    "tier": "Tier A",
    "trap": "Carrying limit for ₹200/₹500 notes (₹25,000 per person) vs un-declared foreign currency limit (,000).",
    "staticGk": "Nepal Rastra Bank (NRB) Governor: Maha Prasad Adhikari | Currency: Nepalese Rupee.",
    "id": "note-sec3-169",
    "bullets": [
      "Carrying Limit: Combined limit of ₹25,000 per person for post-demonetisation ₹200 and ₹500 notes (issued on/after Nov 9, 2016).",
      "Prohibited Notes: Older pre-demonetisation ₹500 and ₹1,000 notes remain strictly banned.",
      "Customs Exemption: Foreign currency up to ,000 allowed without customs declaration."
    ],
    "secId": "sec3",
    "date": "2026-08-01"
  },
  {
    "title": "RBI Defers Revised Basel III Pillar 3 Disclosure Norms Implementation to April 1, 2027",
    "interviewQ": "\"Why did RBI defer Basel III Pillar 3 disclosure norms to April 2027?\"\n💡 **Model Answer: Grants banks IT upgrade preparation time to align Pillar 3 market disclosures with Expected Credit Loss (ECL) credit-risk capital norms.**",
    "hook": "Pushes back commencement to align Pillar 3 market discipline disclosures with Expected Credit Loss (ECL) provisioning.",
    "tier": "Tier A",
    "trap": "Pillar 3 deferred implementation date (April 1, 2027) vs 1st revised quarterly report (June 30, 2027).",
    "staticGk": "Basel III standards developed by Basel Committee on Banking Supervision (BCBS), Basel, Switzerland.",
    "id": "note-sec2-170",
    "bullets": [
      "Revised Timeline: Deferred from September 30, 2026 to April 1, 2027 (1st revised quarterly disclosure for quarter ending June 30, 2027).",
      "Regulatory Directions: RBI issued 10 amendment directions covering commercial banks, SFBs, and payments banks.",
      "Pillar 3 Scope: Mandates consolidated public disclosures on capital adequacy, risk-weighted assets (RWAs), and risk governance."
    ],
    "secId": "sec2",
    "date": "2026-08-02"
  },
  {
    "title": "DFS Launches 'Bharat Maritime Insurance Pool (BMIP)' Offering .5 Billion War-Risk P&I Insurance",
    "interviewQ": null,
    "hook": "India's 1st sovereign-backed Protection & Indemnity insurance pool reduces war-risk premium rates by 35-40%.",
    "tier": "Tier A",
    "trap": "BMIP indemnity limit (.5 billion) vs premium rate reduction (35–40%).",
    "staticGk": "DFS Secretary: Sanjay Lohiya | SCI HQ: Mumbai.",
    "id": "note-sec3-171",
    "bullets": [
      "Underwriting Capacity: Indemnity limit up to .5 billion provided under sovereign backing.",
      "1st Policy Recipient: DFS handed over 1st P&I policy under BMIP to Shipping Corporation of India (SCI).",
      "Product Designer: Designed by The New India Assurance Company Ltd."
    ],
    "secId": "sec3",
    "date": "2026-08-03"
  },
  {
    "title": "SEBI Releases 'GARUDA' Green-Channel Framework for Accelerated AIF Scheme Launches",
    "interviewQ": null,
    "hook": "Permits regular Alternative Investment Funds (AIFs) to launch schemes within 10 working days of PPM filing.",
    "tier": "Tier A",
    "trap": "Regular AIF GARUDA launch window (10 working days after PPM) vs digital accessibility audit extension (October 31, 2026).",
    "staticGk": "SEBI Chairman: Tuhin Kanta Pandey | AIFs governed under SEBI (AIF) Regulations 2012.",
    "id": "note-sec2-172",
    "bullets": [
      "GARUDA Mechanism: Green-Channel AIF Rollout Upon Document Acknowledgement allows operation 10 working days after Private Placement Memorandum (PPM) filing on SEBI SI Portal.",
      "Exemption for AI & Large Value Funds: Accredited Investor (AI-only) funds, Large Value Funds (LVFs), and Angel Funds exempted from merchant banker PPM filing.",
      "Digital Accessibility Audit Extension: Extended deadline for regulated entities to complete digital accessibility audits under Persons with Disabilities Act to October 31, 2026."
    ],
    "secId": "sec2",
    "date": "2026-08-04"
  },
  {
    "title": "Monisha Chakraborty Appointed Executive Director of Reserve Bank of India",
    "interviewQ": null,
    "hook": null,
    "tier": "Tier B+",
    "trap": null,
    "staticGk": "RBI Governor: Sanjay Malhotra (26th) | 4 Deputy Governors.",
    "id": "note-sec2-173",
    "bullets": [
      "Appointed ED overseeing Foreign Exchange Department and Financial Markets Regulation Department.",
      "Career background: Over 3 decades at RBI; previously Chief General Manager-in-Charge of Department of Supervision."
    ],
    "secId": "sec2",
    "date": "2026-08-05"
  },
  {
    "title": "IRDAI Approves ProTec General Insurance License & Operationalises Policyholders' Education Fund (PEPF)",
    "interviewQ": null,
    "hook": "Grants 4th general insurance license of 2026 and replaces periodic intermediary renewals with perpetual registration.",
    "tier": "Tier A",
    "trap": "100% FDI in insurance vs earlier 74% foreign shareholding cap.",
    "staticGk": "IRDAI Chairman: Ajay Seth | HQ: Hyderabad, Telangana | Established 1999.",
    "id": "note-sec3-174",
    "bullets": [
      "License Awardee: ProTec General Insurance Ltd (JV between M. Pallonji Group & True North's Divya Sehgal).",
      "Regulatory Reforms: Operationalised PEPF under Sec 16A of IRDA Act 1999; mandated salesperson tagging on policies; replaced periodic intermediary renewals with annual fee perpetual registration.",
      "FDI Threshold: 2 insurers (1 life, 1 general) increased foreign shareholding beyond 74% following 100% FDI clearance."
    ],
    "secId": "sec3",
    "date": "2026-08-06"
  },
  {
    "title": "SEBI Clarifies 200-Buyer Limit for Off-Market Unlisted Secondary Share Transfers",
    "interviewQ": "\"Why did SEBI set a 200-buyer cap per FY for secondary unlisted share deals?\"\n💡 **Model Answer: Prevents unlisted companies from conducting backdoor public issues without fulfilling prospectus disclosure rules.**",
    "hook": "Private negotiated secondary share sales to up to 200 buyers per FY will not trigger public issue prospectus rules.",
    "tier": "Tier A",
    "trap": "200-buyer limit per FY (excluding QIBs) vs public offer prospectus triggers.",
    "staticGk": "Companies Act 2013 governs securities allotment limits | SEBI HQ: Mumbai.",
    "id": "note-sec2-175",
    "bullets": [
      "Regulatory Informal Guidance: Clarified to IDBI Bank that secondary transfers by existing shareholders to ≤200 buyers in a FY do not constitute a public offer.",
      "QIB Exclusion: Placements made to Qualified Institutional Buyers (QIBs) excluded from the 200-person calculation limit.",
      "Promoter Rights: Contractual Right of First Refusal (ROFR) promoter rights preserved."
    ],
    "secId": "sec2",
    "date": "2026-08-07"
  },
  {
    "title": "Indian Navy Launches 'Machilipatnam' ASW Shallow Water Craft & Delivers DSV 'Nipun'",
    "interviewQ": null,
    "hook": null,
    "tier": "Tier B+",
    "trap": null,
    "staticGk": "Chief of Naval Staff: Admiral Krishna Swaminathan | Cochin Shipyard HQ: Kochi, Kerala.",
    "id": "note-sec6-176",
    "bullets": [
      "Machilipatnam (BY 529): Launched 7th of 8 Anti-Submarine Warfare Shallow Water Crafts built by Cochin Shipyard Ltd (over 80% indigenous content).",
      "DSV Nipun: Hindustan Shipyard Ltd delivered 2nd Diving Support Vessel capable of Deep Sea Saturation Diving up to 300m depth."
    ],
    "secId": "sec6",
    "date": "2026-08-01"
  },
  {
    "title": "Solar Defence Demonstrates Indigenous Counter-Swarm Drone System 'Bhargavastra'",
    "interviewQ": null,
    "hook": "Vehicle-mounted multi-layered system neutralises autonomous drone swarms within 16 seconds.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "SDAL HQ: Nagpur, Maharashtra | Parent Company: Solar Industries India Ltd.",
    "id": "note-sec6-177",
    "bullets": [
      "System Architecture: Integrates unguided micro-rockets (20m lethal radius) and precision micro-missiles (interception range 2.5 km).",
      "Target Detection: Detects large UAVs up to 10 km and small drones up to 6 km under MoD Make-II initiative."
    ],
    "secId": "sec6",
    "date": "2026-08-02"
  },
  {
    "title": "Indian Army Launches 'XWG Diesel' Operational at Extreme Temperatures Down to -42°C",
    "interviewQ": null,
    "hook": null,
    "tier": "Tier B+",
    "trap": null,
    "staticGk": "COAS: General Dhiraj Seth | Indian Army HQ: New Delhi.",
    "id": "note-sec6-178",
    "bullets": [
      "Xtreme Weather Grade (XWG) Diesel jointly developed by Indian Army and OMCs for high-altitude deployment in Siachen and Ladakh.",
      "Specification Compliance: Fully compliant with BS-VI standards and IS 1460:2025 specs without engine modification."
    ],
    "secId": "sec6",
    "date": "2026-08-03"
  },
  {
    "title": "Indian Navy Launches Final Diving Support Craft 'DSC A24' at Titagarh",
    "interviewQ": null,
    "hook": null,
    "tier": "Tier B+",
    "trap": null,
    "staticGk": "Titagarh Rail Systems HQ: Kolkata, West Bengal.",
    "id": "note-sec6-179",
    "bullets": [
      "5th and final vessel of DSC Project launched at Hooghly River by Titagarh Naval Systems (70% indigenous content).",
      "First private shipyard in West Bengal to deliver naval diving vessels."
    ],
    "secId": "sec6",
    "date": "2026-08-04"
  },
  {
    "title": "Anahat Singh Becomes 1st Indian Girl to Win World Junior Squash Championship Title",
    "interviewQ": null,
    "hook": "Defeated Egypt's Ruqayya Salem in Canada to end Egypt's 16-year hold on the junior title.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "Anahat Singh ranked World No. 20 on senior PSA Tour | Squash to debut at LA 2028 Olympics.",
    "id": "note-sec6-180",
    "bullets": [
      "Tournament Location: Niagara-on-the-Lake, Canada.",
      "Historic Context: 1st Indian finalist in over 20 years since Joshna Chinappa (2005) and 1st ever gold medallist.",
      "Boys Event: Aryaveer Dewan reached last 16."
    ],
    "secId": "sec6",
    "date": "2026-08-05"
  },
  {
    "title": "India Wins Historic Para Athletics Medals at Commonwealth Games 2026 Glasgow",
    "interviewQ": null,
    "hook": "Dilip Mahadu Gavit wins gold and Basil Morssinganakath wins silver in Men's 100m T47.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "Commonwealth Games 2026 host: Glasgow, Scotland | Overall medal table topper: Australia.",
    "id": "note-sec6-181",
    "bullets": [
      "Gold Medallist: Dilip Mahadu Gavit clocked Games record 10.71 seconds (1st Indian male para athletics CWG gold).",
      "Additional Medals: Murali Sreeshankar (Silver, Men's Long Jump), Mirabai Chanu (Gold, Women's 48kg Weightlifting), Sharmila Dhankar (Gold, Women's Shot Put F57).",
      "Overall Standings: India ranked 8th overall with 15 medals (3 gold, 9 silver, 3 bronze)."
    ],
    "secId": "sec6",
    "date": "2026-08-06"
  },
  {
    "title": "ISSF World Cup 2026 Hangzhou: India Ranks 3rd Overall with 4 Medals",
    "interviewQ": null,
    "hook": "Esha Singh wins Gold in Women's 25m Pistol; Sainyam Vij wins Silver in 10m Pistol.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "ISSF HQ: Munich, Germany | President: Luciano Rossi.",
    "id": "note-sec6-182",
    "bullets": [
      "Medal Breakdown: India won 1 Gold (Esha Singh), 1 Silver (Sainyam Vij), 2 Bronze (Manu Bhaker, Sonam Maskar & Himanshu Dhillon).",
      "World Record: China's Zhang Changhong set new world record of 363.0 points in 50m Rifle 3 Positions (surpassing Aishwary Pratap Singh Tomar's 362.0).",
      "Overall Winner: China topped standings in Hangzhou."
    ],
    "secId": "sec6",
    "date": "2026-08-07"
  },
  {
    "title": "Ajinkya Rahane Announces Retirement from All Formats of International Cricket",
    "interviewQ": null,
    "hook": null,
    "tier": "Tier B+",
    "trap": null,
    "staticGk": "BCCI President: Roger Binny | HQ: Mumbai.",
    "id": "note-sec6-183",
    "bullets": [
      "Played 85 Tests (5,077 runs), 90 ODIs, and 20 T20Is across 195 international matches for India (2011–2026).",
      "Top scorer for India in 2023 World Test Championship final."
    ],
    "secId": "sec6",
    "date": "2026-08-01"
  },
  {
    "title": "2026 Fields Medals Conferred on 4 Mathematicians at International Congress in Philadelphia",
    "interviewQ": null,
    "hook": "Hong Wang becomes 3rd woman scientist in 90-year history to win the 'Nobel Prize of Mathematics'.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "Fields Medal instituted by J.C. Fields at Univ of Toronto | International Mathematical Union (IMU) HQ: Berlin.",
    "id": "note-sec7-184",
    "bullets": [
      "Recipients: Yu Deng (Univ of Chicago), John Pardon (Stony Brook), Jacob Tsimerman (Univ of Toronto), Hong Wang (NYU/IHES).",
      "Award Structure: Conferred every 4 years to mathematicians under 40 (prize: 15,000 CAD / ,600 and gold medal of Archimedes).",
      "Historic Distinction: Hong Wang (China) is 3rd female recipient after Maryam Mirzakhani (2014) and Maryna Viazovska (2022)."
    ],
    "secId": "sec7",
    "date": "2026-08-02"
  },
  {
    "title": "Cabinet Approves Revamped Khelo India Scheme & Enhanced ANSFs Assistance with ₹36,441 Cr Outlay",
    "interviewQ": null,
    "hook": "8-fold budget increase creates athlete development pathway from grassroots to TOPS.",
    "tier": "Tier A",
    "trap": "Khelo India outlay (₹29,054 crore) vs National Sports Federations ANSF outlay (₹7,387 crore).",
    "staticGk": "Sports Minister: Mansukh Mandaviya | Targets 2030 CWG hosting and 2036 Olympic Games bid.",
    "id": "note-sec10-185",
    "bullets": [
      "Outlay Allocation: Total ₹36,441 crore (FY27 to FY31) comprising ₹29,054 crore for Khelo India and ₹7,387 crore for ANSFs.",
      "New Athlete Category: Introduced 'Emerging Khelo India Athletes (E-KIAs)' alongside school programs KIFS and KIUV.",
      "Coaching Standardisation: Setting up National Coach Accreditation Board (NCAB) to professionalise coaching."
    ],
    "secId": "sec10",
    "date": "2026-08-03"
  },
  {
    "title": "NVIDIA & 35 Tech Giants Launch 'Open Secure AI Alliance' for AI Cybersecurity",
    "interviewQ": null,
    "hook": "Develops open-source security tools to detect and respond to AI-powered cyber threats.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "NVIDIA HQ: Santa Clara, California | CEO: Jensen Huang.",
    "id": "note-sec6-186",
    "bullets": [
      "Founding Alliance Members: Microsoft, IBM, Cisco, Adobe, Cloudflare, CrowdStrike, HPE, Hugging Face, Red Hat, SpaceX, Linux Foundation.",
      "Notable Absentees: OpenAI, Anthropic, Google, and Meta are absent from alliance roster.",
      "Foundational Framework: Builds on Linux Foundation's Akrites initiative and OpenSSF."
    ],
    "secId": "sec6",
    "date": "2026-08-04"
  },
  {
    "title": "IN-SPACe Issues India's 1st Mandatory Framework for Planned Space Object Re-entry",
    "interviewQ": null,
    "hook": "Caps expected casualty risk below 1 in 10,000 for planned atmospheric re-entry of satellites.",
    "tier": "Tier A",
    "trap": "45-day NOTAM advance notice window vs 1 in 10,000 casualty risk cap.",
    "staticGk": "IN-SPACe HQ: Ahmedabad, Gujarat | Chairman: Dr. Pawan Goenka | Department of Space.",
    "id": "note-sec6-187",
    "bullets": [
      "Single-Window Regulatory Mandate: All Indian entities and foreign entities (via Indian JVs) must obtain prior IN-SPACe authorization.",
      "Safety Risk Cap: Expected casualty risk capped at below 1 in 10,000 (aligning with NASA and ESA standards).",
      "Advance Notice: Applicants must file Notice to Airmen (NOTAM) and maritime danger notifications at least 45 days in advance.",
      "Natural Decay Exemption: Satellites burning up naturally in atmosphere through orbital decay exempted."
    ],
    "secId": "sec6",
    "date": "2026-08-05"
  },
  {
    "title": "NIC & eCourts CoEE Roll Out AI Legal Assistant 'LegRAA' and 'Digital Courts 2.1'",
    "interviewQ": null,
    "hook": "Retrieval-Augmented Generation (RAG) AI assistant trained on 36,000 Supreme Court judgments assists judges.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "MoS Law & Justice: Arjun Ram Meghwal | Developed under eCourts Mission Mode Project Phase-III.",
    "id": "note-sec2-188",
    "bullets": [
      "LegRAA Tool: Legal Research Analysis Assistant uses RAG architecture to analyze pleadings and generate case briefs.",
      "Digital Courts 2.1: Includes voice-to-text dictation (ASR-SHRUTI) and translation (PANINI) under eCourts Phase-III.",
      "Financial Allocation: Ministry of Law earmarked ₹53.57 crore for judicial AI tools."
    ],
    "secId": "sec2",
    "date": "2026-08-06"
  },
  {
    "title": "Satya Pal Kumar Appointed Director of Financial Intelligence Unit-India (FIU-IND)",
    "interviewQ": null,
    "hook": null,
    "tier": "Tier B+",
    "trap": null,
    "staticGk": "FIU-IND works under Department of Revenue, Ministry of Finance | HQ: New Delhi.",
    "id": "note-sec5-189",
    "bullets": [
      "Appointed Joint Secretary-level Director of FIU-IND for 5-year tenure (succeeding Pankaj Kumar Mishra).",
      "Agency Mandate: Central national agency receiving and analyzing suspicious financial transaction reports."
    ],
    "secId": "sec5",
    "date": "2026-08-07"
  },
  {
    "title": "Shailesh Jejurikar Appointed Chairman of Procter & Gamble Company",
    "interviewQ": null,
    "hook": null,
    "tier": "Tier B+",
    "trap": null,
    "staticGk": "P&G Global HQ: Cincinnati, Ohio, USA.",
    "id": "note-sec5-190",
    "bullets": [
      "Indian-American business leader appointed P&G Board Chairman (succeeding Jon R. Moeller) while continuing as CEO."
    ],
    "secId": "sec5",
    "date": "2026-08-01"
  },
  {
    "title": "Chhattisgarh Launches 'DWEEPTI Yojana' for Women-Led Rooftop Solar Enterprises",
    "interviewQ": null,
    "hook": "1st Indian state to adopt a women-led distributed renewable energy policy training 'Solar Didis'.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "Chhattisgarh CM: Vishnu Deo Sai | Pilot conducted in Kabirdham district.",
    "id": "note-sec10-191",
    "bullets": [
      "Policy Scope: Places women SHGs at center of rooftop solar expansion to establish 5,000 women-led energy enterprises over 5 years.",
      "Target Reach: 50,000 green jobs and clean energy access for 5 lakh families across Chhattisgarh.",
      "Technical Partners: Jointly developed by Panchayat Dept and Transform Rural India under Green Economy Transition Mission."
    ],
    "secId": "sec10",
    "date": "2026-08-02"
  },
  {
    "title": "PMKSY Completes 10 Years of Sustainable Irrigation; Cabinet Approves M-CADWM Sub-Scheme",
    "interviewQ": null,
    "hook": "Allocates ₹6,587 crore in Budget 2026-27 for micro-irrigation under Per Drop More Crop.",
    "tier": "Tier A",
    "trap": "PMKSY total continuation outlay (₹93,068.56 crore) vs M-CADWM initial sub-scheme outlay (₹1,600 crore).",
    "staticGk": "Ministry of Jal Shakti | PMKSY-AIBP completed 71 of 123 major irrigation projects.",
    "id": "note-sec10-192",
    "bullets": [
      "PMKSY Overview: Launched July 1, 2015; continued for 2021-26 with ₹93,068.56 crore outlay (benefited 27M+ farmers).",
      "Per Drop More Crop (PDMC): 110.92 lakh hectares brought under micro-irrigation.",
      "M-CADWM Sub-Scheme: Cabinet approved Modernization of Command Area Development & Water Management with ₹1,600 crore initial outlay for pipeline networks."
    ],
    "secId": "sec10",
    "date": "2026-08-03"
  },
  {
    "title": "Cabinet Approves ₹84,084 Crore 'Samudra Manthan' Offshore Energy Exploration Scheme",
    "interviewQ": "\"Why did India launch the risk-sharing Samudra Manthan scheme for deepwater energy exploration?\"\n💡 **Model Answer: Deepwater wells cost -150M each; state risk-sharing attracts private capital to reduce India's  crude import dependency.**",
    "hook": "Unlocks India's offshore crude oil and gas potential across Krishna-Godavari, Cauvery, and Mahanadi basins.",
    "tier": "Tier A",
    "trap": "Samudra Manthan Phase-I total outlay (₹84,084 crore) vs deepwater drilling component (₹55,200 crore).",
    "staticGk": "India is 3rd-largest global crude oil consumer ( billion annual import bill) | Hydrocarbon resource target: 2.2B TOE.",
    "id": "note-sec1-193",
    "bullets": [
      "Phase-I Outlay: ₹84,084 crore implementation through FY31 under Ministry of Petroleum & Natural Gas.",
      "Scheme Components: (i) ₹28,534 cr (2D/3D seismic data & NDR AI re-processing); (ii) ₹55,200 cr (drilling 60 deepwater wells); (iii) ₹350 cr (monitoring).",
      "Production Target: Increases domestic oil & gas production from 62 MMTOE to 80 MMTOE annually."
    ],
    "secId": "sec1",
    "date": "2026-08-04"
  },
  {
    "title": "Cabinet Approves ₹5,070 Crore 'Pradhan Mantri Surya Sarovar Yojana (PM-SSY)' for Floating Solar",
    "interviewQ": null,
    "hook": "Integrates 5,000 MW floating solar capacity with 10,000 MWh Energy Storage Systems across inland water bodies.",
    "tier": "Tier A",
    "trap": "PM-SSY financial outlay (₹5,070 crore) vs Central Financial Assistance (₹1 crore per MW).",
    "staticGk": "MNRE Minister: Pralhad Joshi | Current installed floating solar capacity in India is ~700 MW.",
    "id": "note-sec10-194",
    "bullets": [
      "Storage & Generation Cap: 5,000 MW floating solar capacity with 2-hour minimum battery storage (10,000 MWh storage capacity).",
      "Financial Incentive: Central Financial Assistance of ₹1 crore per MW post-commissioning plus ₹50 lakh per project for feasibility studies.",
      "National Potential: National Institute of Solar Energy (NISE) estimates floating solar potential at 102.18 GWp across reservoirs."
    ],
    "secId": "sec10",
    "date": "2026-08-05"
  },
  {
    "title": "Cabinet Extends PM-KISAN Scheme for 5 Years (FY27 to FY31) with ₹3,15,614 Crore Outlay",
    "interviewQ": null,
    "hook": "Reaffirms DBT income support of ₹6,000 annually to eligible landholding farmer families.",
    "tier": "Tier A",
    "trap": "PM-KISAN 5-year extension outlay (₹3.15 lakh crore) vs total disbursed since inception (₹4.5 lakh crore).",
    "staticGk": "PM-KISAN provides ₹6,000 p.a. in 3 equal instalments of ₹2,000 | Ministry of Agriculture.",
    "id": "note-sec10-195",
    "bullets": [
      "5-Year Extension: Total financial outlay of ₹3,15,614 crore (over ₹3.15 lakh crore) through FY31.",
      "Disbursement Track Record: Over ₹4.5 lakh crore disbursed since Feb 2019 inception; 1 out of 4 beneficiaries is a woman farmer."
    ],
    "secId": "sec10",
    "date": "2026-08-06"
  },
  {
    "title": "BIMCO-ICS Seafarer Report 2026: India Emerges as World's 2nd-Largest Supplier of Seafarers",
    "interviewQ": null,
    "hook": "Contributes 3,11,936 maritime professionals to global shipping, capturing 12.16% global workforce share.",
    "tier": "Tier A",
    "trap": "India's global seafaring rank (2nd globally) vs global officer workforce share (13.41%).",
    "staticGk": "Report published by BIMCO & International Chamber of Shipping (ICS) | Ports Minister: Sarbananda Sonowal.",
    "id": "note-sec7-196",
    "bullets": [
      "Global Ranking: India rose to 2nd globally (behind Philippines, ahead of China and Russia).",
      "Officer Share: 140,718 Indian maritime officers account for 13.41% of world's officer workforce.",
      "Workforce Growth: Share grew from 5.2% in 2015 to 12.16% in 2026 under 'Mission 20%' target."
    ],
    "secId": "sec7",
    "date": "2026-08-07"
  },
  {
    "title": "Roshni Nadar Tops 2026 Candere Hurun India Women Leaders List (Wealth Multipliers)",
    "interviewQ": null,
    "hook": "Recognises 117 outstanding women leaders; Priya Nair leads Professional CEOs category.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "Published by Candere by Kalyan Jewellers & Hurun India | Spans 12 categories.",
    "id": "note-sec7-197",
    "bullets": [
      "Top Leaders: Roshni Nadar Malhotra (HCLTech, net worth ₹2,84,120 cr); Priya Nair (HUL CEO, company value ₹5,06,600 cr).",
      "Demographics: Oldest honouree Rajni Bector (86 yrs); youngest Sheetal Devi (19 yrs); 84% self-made leaders."
    ],
    "secId": "sec7",
    "date": "2026-08-01"
  },
  {
    "title": "ADB Approves  Million Loan for PM Surya Ghar: Muft Bijli Yojana (PMSGMBY)",
    "interviewQ": null,
    "hook": "Accelerates Subprogram 2 for rooftop solar installations across 10 million low & middle-income households.",
    "tier": "Tier A",
    "trap": "ADB PMSGMBY loan ( million) vs World Bank PMSGMBY loan ( million).",
    "staticGk": "PMSGMBY launched Feb 13, 2024 by PM Modi | ADB HQ: Manila, Philippines.",
    "id": "note-sec1-198",
    "bullets": [
      "Multilateral Funding: ADB  loan adds to  package previously approved by World Bank.",
      "Subsidy Structure: PMSGMBY (₹75,021 cr outlay) provides ₹30,000 for 1 kW, ₹60,000 for 2 kW, and ₹78,000 for 3 kW solar systems."
    ],
    "secId": "sec1",
    "date": "2026-08-02"
  },
  {
    "title": "REC & PFC Sign ₹26,850 Crore Loan Agreement for 2,400 MW Meja Thermal Power Project",
    "interviewQ": null,
    "hook": "Finances 3 Ultra-Super Critical units of 800 MW each at Meja, Uttar Pradesh.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "REC Chairman & MD: Jitendra Srivastava | PFC CMD: Parminder Chopra.",
    "id": "note-sec1-199",
    "bullets": [
      "Financing Structure: REC and PFC equal 50:50 debt funding of ₹26,850 crore for MUNPL (50:50 JV between NTPC and UPRVUNL).",
      "Project Completion Cost: Estimated at ₹38,357.81 crore equipped with Air Cooled Condenser (ACC) system."
    ],
    "secId": "sec1",
    "date": "2026-08-03"
  },
  {
    "title": "Parliament Passes Prevention of Insults to National Honour (Amendment) Bill 2026",
    "interviewQ": null,
    "hook": "Extends statutory protection under 1971 Act to National Song 'Vande Mataram'.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "Vande Mataram composed by Bankim Chandra Chattopadhyay in 1875 (first published 1882 in Anandamath) | MoS Home: Nityanand Rai.",
    "id": "note-sec4-200",
    "bullets": [
      "Criminal Offence: Intentional insult, prevention, or disruption of Vande Mataram rendition carries up to 3 years imprisonment or fine.",
      "Repeat Conviction: Mandatory minimum 1-year jail term.",
      "Singing Clarification: Bill criminalises deliberate insult/obstruction, NOT the choice not to sing."
    ],
    "secId": "sec4",
    "date": "2026-08-04"
  },
  {
    "title": "Assam Passes Land & Revenue Regulation Bill 2026 Creating 5km Heritage Protected Belts",
    "interviewQ": null,
    "hook": "Restricts land transactions within 5 km radius of 250+ year old religious institutions to original inhabitants.",
    "tier": "Tier A",
    "trap": "Protected heritage radius (5 km) vs documented residence threshold (75 years / 3 generations).",
    "staticGk": "Assam CM: Himanta Biswa Sarma | Amends Assam Land and Revenue Regulation 1886.",
    "id": "note-sec4-201",
    "bullets": [
      "Eligibility Criteria: Land sales/purchases within 5-km radius restricted exclusively to SCs, STs, and 'original inhabitants' (75 years documented residence).",
      "Original Inhabitant Definition: Continuous family residence in protected belt for 3 generations as of January 1, 2006 (25 yrs per generation)."
    ],
    "secId": "sec4",
    "date": "2026-08-05"
  },
  {
    "title": "President Assents to Public Examinations (Prevention of Unfair Means) Amendment Bill 2026",
    "interviewQ": null,
    "hook": "Mandates fast-track courts and 3-month trial conclusion for exam paper leak cases.",
    "tier": "Tier A",
    "trap": "Individual paper leak penalty (5–10 yrs, ₹50L fine) vs organised crime penalty (min 7 yrs, ₹10 crore fine).",
    "staticGk": "Builds on Public Examinations Act 2024 covering NTA, UPSC, SSC, and RRB exams | MoS Personnel: Jitendra Singh.",
    "id": "note-sec4-202",
    "bullets": [
      "Trial Timelines: Paper leak investigations must complete within 2 months; fast-track trials must conclude within 3 months of chargesheet.",
      "Penalties: Paper leak individuals face 5 to 10 years imprisonment & ₹50 lakh fine; organised syndicates face 7 to 10 years jail & ₹10 crore fine."
    ],
    "secId": "sec4",
    "date": "2026-08-06"
  },
  {
    "title": "C-DOT and FSID Sign Agreement to Establish 5th Centre of Excellence at IISc Bengaluru",
    "interviewQ": null,
    "hook": null,
    "tier": "Tier B+",
    "trap": null,
    "staticGk": "C-DOT CEO: Dr. Rajkumar Upadhyay | FSID Director: Prof. B. Gurumoorthy.",
    "id": "note-sec5-203",
    "bullets": [
      "5th C-DOT CoE in India focused on 5G Advanced, 6G, quantum communications, and AI-native networks.",
      "Earlier C-DOT CoEs established at IIT Kanpur, IIT Gandhinagar, IIT Roorkee, and IIT Hyderabad."
    ],
    "secId": "sec5",
    "date": "2026-08-07"
  },
  {
    "title": "DoT and Madhya Pradesh Sign MoU for India's 1st Telecom Manufacturing Zone in Gwalior",
    "interviewQ": null,
    "hook": "350-acre plug-and-play cluster supported by ₹493 crore Central infrastructure funding.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "MP CM: Mohan Yadav | MP Govt provided 170 acres land free of cost.",
    "id": "note-sec5-204",
    "bullets": [
      "SPV Ownership: 51% MP Govt, 49% Department of Telecommunications (MPIDC master developer).",
      "Central Funding: ₹493 crore 100% central funding for Phase-I testing labs (5G core, satellite comms, optical fibre)."
    ],
    "secId": "sec5",
    "date": "2026-08-01"
  },
  {
    "title": "Cotton Corporation of India Launches 'Kapas Darshan' Bulletin & ₹5,659 Cr Kapas Kanti Mission",
    "interviewQ": null,
    "hook": "Transfers ₹41,530 crore directly to cotton farmers under record MSP procurement operations.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "CCI CMD: Lalit Kumar Gupta | Ministry of Textiles | MSP increased by ~7% for 2026-27.",
    "id": "note-sec5-205",
    "bullets": [
      "MSP Procurement: CCI procured 522 lakh quintals of seed cotton (kapas) via 24 lakh transactions, transferring ₹41,530 crore directly to bank accounts.",
      "Kapas Kanti Mission: Cotton Productivity Mission approved with ₹5,659 crore outlay over 5 years."
    ],
    "secId": "sec5",
    "date": "2026-08-02"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-01",
    "bullets": [
      "Funding Agency: Asian Development Bank (ADB) approved .89 million loan (in yen equivalent).",
      "Implementation Scope: Upgrades infrastructure and learning facilities for 500 integrated public schools in rural and semi-urban districts."
    ],
    "title": "ADB Approves .89 Million Loan for Karnataka Public School Infrastructure",
    "staticGk": "ADB HQ: Manila, Philippines | President: Masato Kanda | Karnataka CM: Siddaramaiah / D.K. Shivakumar.",
    "tier": "Tier A",
    "hook": "Strengthens public education system by establishing 500 integrated public schools across Karnataka.",
    "trap": null,
    "id": "note-sec1-206"
  },
  {
    "secId": "sec5",
    "interviewQ": null,
    "date": "2026-07-02",
    "bullets": [
      "Consortium Partners: Lightstorm, Microsoft, Singtel, and Tata Communications.",
      "Landing Points in India: Machilipatnam (Andhra Pradesh) and South Chennai (Tamil Nadu).",
      "System Suppliers: NEC Corporation appointed system supplier; ASEAN Cableship Pte Ltd (ACPL) marine partner."
    ],
    "title": "Microsoft, Lightstorm, Singtel, & Tata Comms Partner to Build 'I-2SEA' Undersea Cable",
    "staticGk": "Singtel HQ: Singapore | Tata Communications HQ: Mumbai | NEC Corporation HQ: Tokyo, Japan.",
    "tier": "Tier A",
    "hook": "Links India with Malaysia and Singapore to expand regional AI and cloud data centre connectivity.",
    "trap": "Landing points (Machilipatnam & Chennai) vs international hubs (Kuala Lumpur & Singapore).",
    "id": "note-sec5-207"
  },
  {
    "secId": "sec1",
    "interviewQ": "\"Why did the government introduce the 'principal employer' concept in EPF Scheme 2026?\"\n💡 **Model Answer: It prevents principal contractors from evading social security contributions for outsourced contract workers by shifting legal compliance onto lead employers.**",
    "date": "2026-07-03",
    "bullets": [
      "Contract Worker Norms: Introduces 'principal employer' concept requiring mandatory EPF contribution for contract workers.",
      "Contribution Timelines: Employer must deposit employee and employer contributions within 15 days of month-end.",
      "Streamlined Withdrawals: Withdrawal categories consolidated from 13 to 3 (Essential Needs, Housing, Special Circumstances).",
      "Mandatory Balance & Unemployment: 25% minimum balance required; 75% withdrawal permitted after 12 months membership; 100% full withdrawal permitted after 1 year of unemployment.",
      "Contribution Rates: 12% standard contribution (10% for notified units); wage ceiling fixed at ₹15,000."
    ],
    "title": "Central Government Notifies Employees' Provident Fund Scheme 2026 (Replaces 1952 Rules)",
    "staticGk": "EPFO works under Ministry of Labour & Employment | Minister: Mansukh Mandaviya.",
    "tier": "Tier A",
    "hook": "Introduces 'principal employer' liability for contract workers and streamlines withdrawal rules into 3 categories.",
    "trap": "3 withdrawal categories (down from 13) vs 25% mandatory minimum balance requirement.",
    "id": "note-sec1-208"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-04",
    "bullets": [
      "Settlement Window: EPFO mandated to settle PF withdrawal claims within 3 working days.",
      "Penal Interest Penalty: Imposes 12% penal interest per annum on officials for claim delays exceeding 20 days.",
      "Pension & Insurance Claims: Pension and EDLI insurance claims must be processed within 20 days.",
      "Full Corpus Withdrawal Age: Lowers the age for full PF corpus withdrawal to 55 years (international workers 58 years)."
    ],
    "title": "New EPFO Rules Mandate 3-Day Settlement Window with 12% Penal Interest on Delays",
    "staticGk": "EPFO established in 1952 under EPF & MP Act 1952 | HQ: New Delhi.",
    "tier": "Tier A",
    "hook": "Imposes strict 3-day turnaround time for provident fund withdrawal claims to eliminate administrative delays.",
    "trap": "3-day PF settlement window vs 20-day penal interest threshold.",
    "id": "note-sec1-209"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-05",
    "bullets": [
      "Public Provident Fund (PPF): 7.10% annual interest (Min ₹500, Max ₹1.5 Lakh p.a.; loans 3rd–6th FY; withdrawal from 7th FY).",
      "Sukanya Samriddhi Yojana (SSY): 8.20% annual interest (Min ₹250, Max ₹1.5 Lakh p.a.; open till age 10; matures after 21 years)."
    ],
    "title": "Small Savings Scheme Interest Rates Unchanged for July–September 2026 Quarter",
    "staticGk": "Small Savings Rates reviewed quarterly by Ministry of Finance.",
    "tier": "Tier A",
    "hook": "Finance Ministry retains PPF interest rate at 7.10% and Sukanya Samriddhi Yojana at 8.20%.",
    "trap": "PPF interest rate (7.10%) vs SSY interest rate (8.20%).",
    "id": "note-sec1-210"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-06",
    "bullets": [
      "Ring-Main Solution: Chennai becomes 1st Indian city to implement a ring-main water supply architecture.",
      "Project Goal: Modernises municipal water supply, sewage treatment, and flood resilience in Chennai."
    ],
    "title": "ADB Approves  Million Loan for Chennai Water Supply & Sanitation Infrastructure",
    "staticGk": "Tamil Nadu CM: M. K. Stalin | Capital: Chennai.",
    "tier": "Tier A",
    "hook": "Finances India's 1st urban ring-main solution for resilient water distribution in Chennai.",
    "trap": null,
    "id": "note-sec1-211"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-07",
    "bullets": [
      "Unemployment Rate: Average unemployment across 46 million-plus cities stood at 6.8% (Prayagraj & Patna >20%; Ahmedabad & Kolkata <2.5%).",
      "Regular vs Casual Jobs: Regular wage/salary jobs accounted for 58.5% in million-plus cities (vs 47.6% urban India); casual labor stood at 6.3% (vs 12% urban India).",
      "Female Participation: Female regular employment reached 65.1% in million-plus cities, surpassing male counterparts (56.4%).",
      "Earnings Comparison: Self-employed earned ₹30,858/month (vs ₹23,013 urban India); regular employees ₹28,808 (vs ₹26,258); casual labour ₹624/day (vs ₹550)."
    ],
    "title": "NSO Report: Regular Salary Employment Higher in Million-Plus Cities (58.5% vs 47.6% Urban India)",
    "staticGk": "National Statistics Office (NSO) works under MoSPI | Minister: Rao Inderjit Singh.",
    "tier": "Tier A",
    "hook": "Highlights urban employment structure across 46 million-plus population cities under PLFS 2025 survey.",
    "trap": "Female regular job rate in million-plus cities (65.1%) vs male rate (56.4%).",
    "id": "note-sec1-212"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-08",
    "bullets": [
      "Divestment Structure: Base 2.52% stake plus 2.52% green-shoe option at ₹1,400 per share floor price.",
      "Government Stake: Union Government holds 67.91% equity stake in Cochin Shipyard Ltd (CSL).",
      "Disinvestment Target: FY27 budget target set at ₹80,000 crore for PSU disinvestment and asset monetisation."
    ],
    "title": "Govt Disinvests 2.52% Base Stake in Cochin Shipyard via OFS at ₹1,400 Floor Price",
    "staticGk": "Cochin Shipyard Ltd HQ: Kochi, Kerala | Greenshoe Option: Post-listing stabilisation mechanism (up to 15% extra shares).",
    "tier": "Tier A",
    "hook": "Unlocks PSU equity via Offer for Sale (OFS) with an additional 2.52% green-shoe oversubscription option.",
    "trap": "Base OFS stake (2.52%) vs green-shoe option (2.52%) vs maximum greenshoe limit (15%).",
    "id": "note-sec1-213"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-09",
    "bullets": [
      "India Category: India remains a Lower-Middle-Income Economy (,176 – ,635 GNI per capita).",
      "Category Upgrades: Sri Lanka, Vietnam, Philippines, Jordan, Micronesia moved to Upper-Middle-Income (,636–,375); Togo moved to Lower-Middle-Income.",
      "Income Thresholds: Low-income (≤,175), Lower-middle (,176–,635), Upper-middle (,636–,375), High-income (>,375)."
    ],
    "title": "World Bank Income Classification 2026: India Retains Lower-Middle-Income Status",
    "staticGk": "World Bank HQ: Washington D.C., US | President: Ajay Banga.",
    "tier": "Tier A",
    "hook": "Classifies 218 global economies using Atlas method GNI per capita thresholds.",
    "trap": "India classification (Lower-Middle Income) vs Sri Lanka/Vietnam (Upper-Middle Income).",
    "id": "note-sec1-214"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-10",
    "bullets": [
      "Loan Quantum: JPY 80 billion green loan facility signed with JBIC.",
      "Project Purpose: Integrates renewable power from Khavda (Gujarat) to Nagpur (Maharashtra) via HVDC grid."
    ],
    "title": "POWERGRID Secures JPY 80 Billion Green Loan from Japan Bank for International Cooperation (JBIC)",
    "staticGk": "POWERGRID Maharatna CPSE HQ: Gurugram, Haryana | JBIC HQ: Tokyo, Japan.",
    "tier": "Tier A",
    "hook": "Finances Khavda-Nagpur high-voltage direct current (HVDC) transmission infrastructure in India.",
    "trap": null,
    "id": "note-sec1-215"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-11",
    "bullets": [
      "India Growth Forecasts: 6.4% in FY27 and 6.7% in FY28 under World Economic Outlook update.",
      "Global Growth Outlook: World growth projected to moderate to 3.0% in 2026 before recovering to 3.4% in 2027."
    ],
    "title": "IMF World Economic Outlook: India Projected to Grow at 6.4% in FY27 and 6.7% in FY28",
    "staticGk": "IMF Chief Economist: Silvana Tenreyro | Managing Director: Kristalina Georgieva | HQ: Washington D.C.",
    "tier": "Tier A",
    "hook": "Reaffirms India's position as the world's fastest-growing major economy.",
    "trap": "India FY27 GDP forecast (6.4%) vs FY28 GDP forecast (6.7%).",
    "id": "note-sec1-216"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-12",
    "bullets": [
      "GDP Revision: India FY27 GDP growth revised to 6.6% (from earlier 6.9%) due to Middle East energy risks.",
      "Inflation Forecast: Inflation forecast raised to 5.2% (from 4.5% projected in April)."
    ],
    "title": "ADB Trims India's FY27 Growth Forecast to 6.6% Amid Energy Price Concerns",
    "staticGk": "ADB Asian Development Outlook published biannually | ADB HQ: Manila.",
    "tier": "Tier A",
    "hook": "Asian Development Outlook (ADO) raises India inflation forecast sharply to 5.2%.",
    "trap": "ADB FY27 GDP forecast (6.6%) vs IMF FY27 GDP forecast (6.4%).",
    "id": "note-sec1-217"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-13",
    "bullets": [
      "Database Migration: Unified CITES 2.01 platform consolidates 340 million accounts across 120 databases.",
      "Auto-Settlement Threshold: Auto-settlement limit for KYC-compliant advance claims raised from ₹1 lakh to ₹5 lakh.",
      "PF Interest Crediting: Enables crediting of 2025-26 PF interest by July 15 ahead of traditional schedule."
    ],
    "title": "EPFO Rolls Out Centralised CITES 2.01 Platform for 340 Million Member Accounts",
    "staticGk": "Central Board of Trustees (CBT) approved CITES platform | EPFO HQ: New Delhi.",
    "tier": "Tier A",
    "hook": "Migrates 120 decentralised databases into a single national system for automated claim processing.",
    "trap": "Auto-settlement limit (₹5 lakh, up from ₹1 lakh) vs 3-day settlement mandate.",
    "id": "note-sec1-218"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-14",
    "bullets": [
      "Duty Exemptions: Customs duty exempted on automotive/medical display assembly parts, mobile wireless charging modules, and lithium-ion cell machinery till March 31, 2029.",
      "Previous Duty Rates: Duties previously ranged from 7.5% to 15%."
    ],
    "title": "Customs Duty Exempted on Lithium-Ion Battery Machinery & Charger Parts till March 2029",
    "staticGk": "CBIC works under Department of Revenue, Ministry of Finance.",
    "tier": "Tier B+",
    "hook": null,
    "trap": null,
    "id": "note-sec1-219"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-15",
    "bullets": [
      "Funding Components:  IBRD loan,  Clean Technology Fund concessional loan,  Livable Planet Fund grant.",
      "Scheme Outlay: PM Surya Ghar Yojana approved in Feb 2024 with ₹75,021 crore outlay for 10 million households.",
      "National RE Target: India committed to 60% non-fossil electricity capacity by 2035 and net-zero emissions by 2070."
    ],
    "title": "World Bank Mobilises .2 Billion Package for PM Surya Ghar: Muft Bijli Yojana",
    "staticGk": "IBRD is the primary lending arm of the World Bank Group | HQ: Washington D.C.",
    "tier": "Tier A",
    "hook": "Includes  million IBRD loan and  million Clean Technology Fund loan for rooftop solar.",
    "trap": "IBRD loan ( million) vs ADB loan ( million).",
    "id": "note-sec1-220"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-16",
    "bullets": [
      "Financial Grant: ₹4 crore financial assistance released in 3 installments (30:50:20 ratio).",
      "ULB Incentive: Urban local bodies notifying street vending plans receive ₹25 lakh bonus incentive.",
      "Partner Agencies: Coordinated by MoHUA, Ministry of Tourism, and FSSAI."
    ],
    "title": "Lakhanpur (J&K) Selected as First Town for PM SVANidhi Street Food Hub",
    "staticGk": "PM SVANidhi launched June 1, 2020 by MoHUA | FSSAI HQ: New Delhi.",
    "tier": "Tier A",
    "hook": "Establishes modern street food hub under Ministry of Housing and Urban Affairs initiative.",
    "trap": "PM SVANidhi street food hub grant (₹4 crore) vs ULB incentive (₹25 lakh).",
    "id": "note-sec1-221"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-17",
    "bullets": [
      "Global Rankings: India became the world's 2nd-largest contributor to global savings in PPP terms (10.3% share).",
      "Top Country: China ranks 1st globally with a 31.9% share of global savings.",
      "Historical Growth: India's share rose from 3.3% in 1992 to 10.3% in 2025."
    ],
    "title": "India Overtakes US in PPP-Based Global Savings (Trails Only China)",
    "staticGk": "EAC-PM Chairman: Bibek Debroy | Headquarters: New Delhi.",
    "tier": "Tier A",
    "hook": "EAC-PM working paper reveals India's global savings share rose to 10.3% in 2025.",
    "trap": "India global savings share (10.3%, 2nd) vs China share (31.9%, 1st).",
    "id": "note-sec1-222"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-18",
    "bullets": [
      "Global Outlook: Growth slows to 2.5% in 2026 before picking up to 2.8% in 2027.",
      "K-Shaped Recovery: Tech-integrated sectors accelerate while traditional labor-intensive sectors decline."
    ],
    "title": "Moody's Analytics: Global Growth to Slow to 2.5% in 2026 Amid K-Shaped AI Divide",
    "staticGk": "Moody's Corporation HQ: New York, US.",
    "tier": "Tier B+",
    "hook": null,
    "trap": null,
    "id": "note-sec1-223"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-19",
    "bullets": [
      "CII Index Value: Notified at 384 for FY 2026-27 (up from 376 in FY 2025-26).",
      "Application Date: Applies from April 1, 2026 for indexation benefit calculations."
    ],
    "title": "CBDT Notifies Cost Inflation Index (CII) at 384 for FY 2026-27",
    "staticGk": "CBDT Chairman: Ravi Agrawal | Works under Department of Revenue.",
    "tier": "Tier A",
    "hook": "Increases Cost Inflation Index by 2.3% for long-term capital gains tax calculations.",
    "trap": "CII FY27 value (384) vs CII FY26 value (376).",
    "id": "note-sec1-224"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-20",
    "bullets": [
      "State Rankings: Gujarat ranks 1st (749,839 installations); Uttar Pradesh 2nd; Maharashtra 3rd.",
      "PM Surya Ghar Impact: Accelerated rooftop installations across UP households."
    ],
    "title": "Uttar Pradesh Overtakes Maharashtra as India's No. 2 in Rooftop Solar Installations",
    "staticGk": "Gujarat CM: Bhupendra Patel | UP CM: Yogi Adityanath.",
    "tier": "Tier A",
    "hook": "UP secures 2nd spot nationally under PM Surya Ghar Muft Bijli Yojana behind Gujarat.",
    "trap": "1st rank rooftop solar (Gujarat) vs 2nd rank (Uttar Pradesh).",
    "id": "note-sec1-225"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-21",
    "bullets": [
      "Investment Pipeline: 20 infrastructure projects with  billion (₹20,000 crore) investment potential.",
      "Partner Entity: International Finance Corporation (IFC), private-sector arm of World Bank Group."
    ],
    "title": "Odisha Signs ₹20,000 Crore TASA Agreement with World Bank's IFC",
    "staticGk": "Odisha CM: Mohan Charan Majhi | IFC HQ: Washington D.C.",
    "tier": "Tier A",
    "hook": "Develops pipeline of 20 infrastructure projects under Transaction Advisory Services Agreement.",
    "trap": null,
    "id": "note-sec1-226"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-22",
    "bullets": [
      "Issuer Protection: CRAs must share key rating information with issuers before publishing ratings.",
      "Registered CRAs: CareEdge Global IFSC Ltd and S&P Global Ratings Singapore registered in GIFT City."
    ],
    "title": "IFSCA Revises GIFT City Credit Rating Agency (CRA) Rules",
    "staticGk": "IFSCA Chairman: K. Rajaraman | HQ: GIFT City, Gandhinagar, Gujarat.",
    "tier": "Tier A",
    "hook": "Mandates pre-rating sharing with issuers to correct factual errors before credit rating publication.",
    "trap": null,
    "id": "note-sec2-227"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-23",
    "bullets": [
      "Launch Date: Launched July 15, 2015 under Ministry of Skill Development and Entrepreneurship."
    ],
    "title": "Skill India Mission Completes 11 Years of Operation (Launched July 15, 2015)",
    "staticGk": "MSDE Minister: Jayant Chaudhary (MoS I/C).",
    "tier": "Tier B+",
    "hook": null,
    "trap": null,
    "id": "note-sec2-228"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-24",
    "bullets": [
      "Coverage Milestone: 94 crore citizens covered under formal social security schemes.",
      "Labor Reform Context: 4 Labour Codes consolidated and replaced 29 central labor laws."
    ],
    "title": "ILO Report: India's Social Security Coverage Expands to 64% (Encompassing 94 Crore People)",
    "staticGk": "ILO Director-General: Gilbert F. Houngbo | HQ: Geneva, Switzerland.",
    "tier": "Tier A",
    "hook": "Expands social protection coverage from 19% in 2014 to 64% in 2026.",
    "trap": "Social security coverage 2014 (19%) vs 2026 (64%).",
    "id": "note-sec2-229"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-25",
    "bullets": [
      "CSR Initiative: Launched by Microsoft India and Foundation for Innovation and Technology Transfer (FITT), IIT Delhi.",
      "Focus: Grassroots AI talent development and startup incubation in Tier 2 and Tier 3 cities."
    ],
    "title": "Microsoft India & FITT IIT Delhi Launch UNNATI AI 2.0 for Tier 2/3 Cities",
    "staticGk": "IIT Delhi Director: Rangan Banerjee | Microsoft CEO: Satya Nadella.",
    "tier": "Tier A",
    "hook": "Democratizes AI access and nurtures deep-tech startups across non-metro hubs.",
    "trap": null,
    "id": "note-sec2-230"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-26",
    "bullets": [
      "Customs Duty Rationalisation: BCD structure simplified by eliminating 100%, 125%, and 150% peak rates, reducing applied rates to 8 bands.",
      "Export Target: Scale share from 1.8% to 10% by 2047."
    ],
    "title": "WTO Trade Policy Review: India Targets 10% Share of Global Merchandise Exports by 2047",
    "staticGk": "WTO Director-General: Ngozi Okonjo-Iweala | HQ: Geneva, Switzerland.",
    "tier": "Tier A",
    "hook": "Outlines strategy to expand global merchandise export share from 1.8% in 2024 to 10% by centenary.",
    "trap": "India merchandise export share 2024 (1.8%) vs 2047 target (10%).",
    "id": "note-sec2-231"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-27",
    "bullets": [
      "Eligibility Thresholds: Minimum 5 years fund management experience, Net worth ≥ ₹50 crore for past 5 years, Paid-up capital ≥ ₹25 crore.",
      "Regulatory Oversight: Applicant must be regulated by RBI, SEBI, or IRDAI."
    ],
    "title": "PFRDA Opens On-Tap Registration for Pension Fund Managers under NPS",
    "staticGk": "PFRDA Chairman: Deepak Mohanty | Established 2003 | HQ: New Delhi.",
    "tier": "Tier A",
    "hook": "Allows eligible asset managers to apply continuously for managing National Pension System funds.",
    "trap": "PFM net worth requirement (₹50 crore) vs paid-up capital requirement (₹25 crore).",
    "id": "note-sec2-232"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-28",
    "bullets": [
      "GPF Rate: 7.10% annual interest for July–September 2026 quarter (EPF subscribers earn 8.25%)."
    ],
    "title": "GPF Interest Rate Maintained at 7.1% for Q2 FY27; EPF Interest at 8.25%",
    "staticGk": "GPF applies strictly to eligible government employees.",
    "tier": "Tier B+",
    "hook": null,
    "trap": "GPF interest rate (7.10%) vs EPF interest rate (8.25%).",
    "id": "note-sec2-233"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-29",
    "bullets": [
      "Foreign Cap: Foreign ownership capped at 49.5% on a fully diluted basis.",
      "IOCC Advantage: Permits direct inventory ownership and sale on quick-commerce platform."
    ],
    "title": "Swiggy Board Caps Aggregate Foreign Ownership at 49.5% for IOCC Status",
    "staticGk": "DPIIT FDI policy governs IOCC compliance thresholds.",
    "tier": "Tier A",
    "hook": "Qualifies quick-commerce Instamart as an Indian-Owned and Controlled Company (IOCC).",
    "trap": "Swiggy foreign ownership cap (49.5%) vs standard retail FDI caps.",
    "id": "note-sec2-234"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-30",
    "bullets": [
      "Tax Exemption: Gifts from specified relatives 100% tax-free; non-relative gifts taxable if aggregate exceeds ₹50,000 in a FY.",
      "Immovable Property: NRIs/OCIs can receive residential/commercial property as gift; agricultural land, plantations, and farmhouses strictly restricted."
    ],
    "title": "Income Tax & FEMA Guidelines for NRI Gifts: Relative Gifts Tax-Free; Non-Relative Exemption ₹50,000",
    "staticGk": "Income Tax Act 2025 replaced Income Tax Act 1961.",
    "tier": "Tier A",
    "hook": "Clarifies tax-free gift rules under Income Tax Act 2025 and FEMA remittance limits.",
    "trap": "Tax-free non-relative gift threshold (₹50,000 p.a.) vs LRS gift limit (,000).",
    "id": "note-sec2-235"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-31",
    "bullets": [
      "State Rankings: Gujarat ranks 1st in total plantation area; Andhra Pradesh 2nd.",
      "MISHTI Scheme: Launched June 5, 2023 for 540 sq. km. mangrove restoration across 9 states and 4 UTs.",
      "National Cover: West Bengal holds 42.45% of national mangrove cover (Sundarbans)."
    ],
    "title": "Andhra Pradesh Ranks 2nd Nationally in MISHTI Mangrove Restoration",
    "staticGk": "Sundarbans is the world's largest contiguous mangrove forest (UNESCO World Heritage Site).",
    "tier": "Tier A",
    "hook": "Secures 2nd rank in mangrove plantation area under Shoreline Habitats initiative behind Gujarat.",
    "trap": "1st rank mangrove plantation (Gujarat) vs largest national mangrove cover share (West Bengal, 42.45%).",
    "id": "note-sec2-236"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-01",
    "bullets": [
      "Thermal Additions: 86,440 MW additional capacity needed by FY36 (63,545 MW under implementation).",
      "Nuclear Capacity Target: Government targets 100 GW nuclear power capacity by 2047."
    ],
    "title": "CEA National Generation Adequacy Plan: India Needs 86.4 GW Additional Thermal Power by FY36",
    "staticGk": "Central Electricity Authority (CEA) works under Ministry of Power | HQ: New Delhi.",
    "tier": "Tier A",
    "hook": "Estimates total coal and lignite thermal capacity requirement of 315,000 MW to meet 2035-36 demand.",
    "trap": "Additional thermal power needed (86.4 GW) vs 2047 nuclear target (100 GW).",
    "id": "note-sec2-237"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-02",
    "bullets": [
      "Individual Penalties: Paper leak jail term increased to 5-10 years (up from 3-5 yrs); max fine raised to ₹50 lakh.",
      "Organised Crime Penalties: Minimum jail term 7-10 years; minimum fine ₹1 crore to ₹10 crore.",
      "Service Provider Debarment: Debarment period for cheating service providers raised to 8 years (fine ₹1 cr to ₹5 cr)."
    ],
    "title": "Government Introduces Public Examinations (Prevention of Unfair Means) Amendment Bill 2026",
    "staticGk": "Public Examinations Act 2024 introduced India's 1st central anti-paper leak law.",
    "tier": "Tier A",
    "hook": "Raises paper leak prison sentences up to 10 years and minimum fines up to ₹10 crore for organised syndicates.",
    "trap": "Individual paper leak fine (up to ₹50 lakh) vs organised syndicate fine (min ₹1 crore to ₹10 crore).",
    "id": "note-sec2-238"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-03",
    "bullets": [
      "CARF Alignment: Aligns Indian crypto exchange reporting with OECD global framework.",
      "Reporting Scope: RCASPs must collect tax residency and TIN details for annual submission."
    ],
    "title": "CBDT Issues Crypto-Asset Reporting Framework (CARF) Compliance Rules",
    "staticGk": "OECD HQ: Paris, France.",
    "tier": "Tier B+",
    "hook": null,
    "trap": null,
    "id": "note-sec2-239"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-04",
    "bullets": [
      "Super-Rich Taxpayers: 576 individuals reported income > ₹100 crore in AY 2025-26 (up 39% from 415).",
      "Gini Inequality Reduction: Household survey Gini coefficient fell to 0.237 for rural areas and 0.284 for urban areas."
    ],
    "title": "Income Tax Data: 576 Individuals Report Gross Income Above ₹100 Crore in AY 2025-26",
    "staticGk": "Gini Coefficient measures income/consumption inequality (0 = perfect equality, 1 = absolute inequality).",
    "tier": "Tier A",
    "hook": "High-income taxpayers rise 39% YoY as rural-urban Gini inequality index narrows.",
    "trap": "Rural Gini coefficient (0.237) vs Urban Gini coefficient (0.284).",
    "id": "note-sec2-240"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-05",
    "bullets": [
      "Savings Account Cash: Cash deposits ≥ ₹10 lakh in a FY.",
      "Current Account Cash: Cash deposits/withdrawals ≥ ₹50 lakh in a FY.",
      "Credit Cards: Cash payments ≥ ₹1 lakh or total payments ≥ ₹10 lakh in a FY.",
      "Investments & Property: FDs/Mutual Funds/Bonds ≥ ₹10 lakh; Immovable property purchase/sale > ₹30 lakh."
    ],
    "title": "CBDT Reporting Thresholds for High-Value SFT Financial Transactions",
    "staticGk": "Statement of Financial Transactions (SFT) filed under Section 285BA of Income Tax Act.",
    "tier": "Tier A",
    "hook": "Mandates bank and financial institution reporting for high-value cash deposits and credit card payments.",
    "trap": "Savings account cash SFT limit (₹10 lakh) vs Current account limit (₹50 lakh).",
    "id": "note-sec2-241"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-06",
    "bullets": [
      "Policy Relaxation: FDI restriction lifted for inventory-based e-commerce when selling domestically produced goods exclusively for export.",
      "Marketplace vs B2C: FDI remains barred in standard domestic B2C inventory e-commerce."
    ],
    "title": "India Permits FDI in Inventory-Based E-Commerce Model Exclusively for Exports",
    "staticGk": "DGFT works under Ministry of Commerce and Industry | Minister: Piyush Goyal.",
    "tier": "Tier A",
    "hook": "Allows 100% FDI in inventory-based e-commerce for exported domestic products via DGFT proposal.",
    "trap": "FDI in export inventory model (permitted) vs domestic B2C inventory model (prohibited).",
    "id": "note-sec1-242"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-07",
    "bullets": [
      "TReDS Mandate: Mandatory TReDS routing for CPSU MSME invoices.",
      "Facilitation Councils: States mandated to establish 3-5 member MSE Facilitation Councils with legal experts.",
      "Appeals Deposit: Buyers challenging MSE awards must deposit at least 50% of awarded amount if pending > 6 months."
    ],
    "title": "MSME Development Amendment Bill 2026 Mandates TReDS Invoice Routing for CPSUs",
    "staticGk": "TReDS (Trade Receivables Discounting System) regulated by RBI.",
    "tier": "Tier A",
    "hook": "Requires all Central PSUs to route MSME supplier invoices through TReDS platforms.",
    "trap": "TReDS appeal deposit requirement (min 50% of awarded amount) vs council members (3-5).",
    "id": "note-sec1-243"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-08",
    "bullets": [
      "Export Breakdown: Merchandise exports .8 billion; Services exports .3 billion (Total .1B).",
      "Top FTA Destination: ASEAN countries emerged as highest merchandise export destination (.42B), followed by UAE (.36B)."
    ],
    "title": "India's Total Exports Reach Record .1 Billion in FY 2025-26",
    "staticGk": "ASEAN (10 member nations) HQ: Jakarta, Indonesia.",
    "tier": "Tier A",
    "hook": "Merchandise exports touch .8B and services exports reach .3B.",
    "trap": "Merchandise exports (.8B) vs Services exports (.3B).",
    "id": "note-sec1-244"
  },
  {
    "secId": "sec2",
    "interviewQ": "\"How does the RBI Integrated Ombudsman Scheme 2026 protect retail banking customers?\"\n💡 **Model Answer: It provides a single-window grievance mechanism with a 30-day RE resolution mandate and caps compensation at ₹30 lakh for financial loss plus ₹3 lakh for harassment.**",
    "date": "2026-07-09",
    "bullets": [
      "Complaint Escalation: 30-day RE response window; 90-day RBI Ombudsman escalation window.",
      "Compensation Caps: Up to ₹30 lakh for consequential financial losses; up to ₹3 lakh for harassment and time loss."
    ],
    "title": "RBI Revamped Integrated Ombudsman Scheme 2026 Takes Effect (Replaces 2021 Rules)",
    "staticGk": "RBI Integrated Ombudsman Scheme covers Banks, NBFCs, and System Participants.",
    "tier": "Tier A",
    "hook": "Increases compensation cap for consequential losses to ₹30 lakh plus ₹3 lakh for time loss.",
    "trap": "Consequential loss compensation cap (₹30 lakh) vs harassment/time loss cap (₹3 lakh).",
    "id": "note-sec2-245"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-10",
    "bullets": [
      "CUSPA Mechanism: Unpaid securities credited directly to client demat and auto-pledged to broker's CUSPA account.",
      "Broker Right: Broker permitted to liquidate unpaid securities if payment obligation is not fulfilled."
    ],
    "title": "SEBI Revises Rules for Unpaid Client Securities (CUSPA Account Auto-Pledge)",
    "staticGk": "SEBI HQ: Mumbai | Regulates stockbrokers under SEBI (Stock Brokers) Regulations.",
    "tier": "Tier A",
    "hook": "Mandates direct demat payout followed by auto-pledge in Client Unpaid Securities Pledgee Account.",
    "trap": null,
    "id": "note-sec2-246"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-11",
    "bullets": [
      "FRSB Coupon Rate: 8.05% per annum for July 1 to Dec 31, 2026 (payable Jan 1, 2027).",
      "Benchmark Formula: FRSB rate = NSC rate (7.70%) + 0.35% spread."
    ],
    "title": "RBI Retains Floating Rate Savings Bonds (FRSB 2020) Interest Rate at 8.05%",
    "staticGk": "FRSB bonds issued by RBI on behalf of Union Government (7-year tenure, taxable).",
    "tier": "Tier A",
    "hook": "Maintains 0.35% premium over National Savings Certificate (NSC) 7.7% benchmark.",
    "trap": "FRSB interest rate (8.05%) vs NSC benchmark rate (7.70%).",
    "id": "note-sec2-247"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-12",
    "bullets": [
      "Rupee Fee Structure: Category-I FPI registration fee fixed at ₹2.3 lakh (replaced ,500); ,000 fee replaced by ₹90,000.",
      "Custodian Monthly Fee: Custodian fee revised to ₹85,000/month (replaced ₹10 lakh annual fee).",
      "Intraday MF Borrowing: Mutual funds permitted intraday borrowing up to 20% of net assets for settlement liquidity."
    ],
    "title": "SEBI Amends FPI Regulations: Rupee-Denominated Fee Structure & Pre-IPO ESOPs",
    "staticGk": "Designated Depository Participants (DDPs) process FPI registrations in India.",
    "tier": "Tier A",
    "hook": "Replaces USD registration fees with INR structure (Category-I FPI fee ₹2.3 lakh).",
    "trap": "Category-I FPI registration fee (₹2.3 lakh) vs custodian monthly fee (₹85,000).",
    "id": "note-sec2-248"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-13",
    "bullets": [
      "Committee Name: ASCEND (Accelerated Scaling of Global Capital Ecosystem and NPS Development).",
      "Chairmanship: Chaired by Dinesh Khara, Chairman of NPS Trust."
    ],
    "title": "PFRDA Constitutes 'ASCEND' Committee to Attract Global Pension Capital",
    "staticGk": "National Pension System (NPS) regulated by PFRDA since 2003.",
    "tier": "Tier A",
    "hook": "Chaired by Dinesh Khara (NPS Trust Chairman) to scale global pension fund inflows under NPS.",
    "trap": null,
    "id": "note-sec2-249"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-14",
    "bullets": [
      "New GI Products: Nalanda Bawanbuti Saree (Bihar), Gaya Pattharkatti Stone Craft (Bihar), Kuchai Silk (Jharkhand), Ba Shilp & Bihu Pepa (Assam), Khajuraho Metal Craft (MP).",
      "NABARD Total: NABARD has supported 176 total products in obtaining GI tags."
    ],
    "title": "NABARD Facilitates GI Registration for 28 New Products (Total 176 Supported)",
    "staticGk": "NABARD established July 12, 1982 | Chairman: Shaji K. V.",
    "tier": "Tier A",
    "hook": "Expands GI tagging for indigenous craft and agri-products across Bihar, Assam, and MP.",
    "trap": "GI products in this round (28) vs total NABARD-supported GI products (176).",
    "id": "note-sec2-250"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-15",
    "bullets": [
      "Platform Connectivity: Terminal directly connected to Negotiated Dealing System-Order Matching (NDS-OM).",
      "Settlement Guarantee: T+1 trades guaranteed by Clearing Corporation of India Limited (CCIL)."
    ],
    "title": "Bloomberg Launches Electronic Trading Platform for Indian Government Bonds (IGBs)",
    "staticGk": "NDS-OM launched in 2005 by RBI | CCIL settles G-Sec and forex transactions.",
    "tier": "Tier A",
    "hook": "Connects FPIs directly to RBI's NDS-OM matching system for T+1 gilt settlement.",
    "trap": "NDS-OM settlement cycle (T+1) vs stock market equities (T+1).",
    "id": "note-sec2-251"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-16",
    "bullets": [
      "Cooling-Off Period: 2-year cooling-off period before former employees can represent clients before SEBI.",
      "Equity Bar: Staff barred from direct investment in equities, derivatives, and convertible instruments.",
      "Gift Threshold: Disclosure threshold for gifts raised from ₹10,000 to ₹50,000."
    ],
    "title": "SEBI Tightens Staff Conduct Rules: 2-Year Cooling-Off Period & Equity Investment Bar",
    "staticGk": "Amends SEBI (Employees' Service) Regulations 2026.",
    "tier": "Tier A",
    "hook": "Bars SEBI staff from direct equity trading and caps investment product exposure at 25%.",
    "trap": "Cooling-off period (2 years) vs gift disclosure threshold (₹50,000).",
    "id": "note-sec2-252"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-17",
    "bullets": [
      "Collaborative Initiative: Joint initiative of NABARD and National Skill Development Corporation (MSDE).",
      "Executing Agency: Executed by Institute for Industrial Development."
    ],
    "title": "NABARD Launches 'Gramodyam' Rural Youth Entrepreneurship Scheme with NSDC",
    "staticGk": "NSDC HQ: New Delhi | Works under Ministry of Skill Development.",
    "tier": "Tier A",
    "hook": "Unveils rural business development initiative on NABARD's 45th Foundation Day.",
    "trap": null,
    "id": "note-sec2-253"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-18",
    "bullets": [
      "Index Value: FI-Index rose 4.48% to 70.0 in March 2026 (up from 67.0 in March 2025).",
      "Parameter Weights: Access (35%), Usage (45%), Quality (20%) — published annually without a base year."
    ],
    "title": "RBI Financial Inclusion Index (FI-Index) Rises to 70.0 in March 2026",
    "staticGk": "FI-Index introduced in August 2021 by RBI.",
    "tier": "Tier A",
    "hook": "Measures 97 financial inclusion indicators across Access (35%), Usage (45%), and Quality (20%).",
    "trap": "Usage weightage (45%) vs Access weightage (35%) vs Quality weightage (20%).",
    "id": "note-sec2-254"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-19",
    "bullets": [
      "Implementation Date: Effective October 1, 2026 (unrealised income reversal required by Sept 30, 2027).",
      "Disposal Cap: Banks must dispose of SNFAs within maximum 7 years via SARFAESI Act 2002 public auction.",
      "Sale Restriction: Prohibits selling SNFA back to defaulting borrower or related parties."
    ],
    "title": "RBI Restricts Banks from Recognising Unrealised Interest as Income on Acquired SNFAs",
    "staticGk": "SNFA (Specified Non-Financial Asset) defined under Banking Regulation Act 1949.",
    "tier": "Tier A",
    "hook": "Mandates 7-year maximum disposal window for Specified Non-Financial Assets acquired under debt resolution.",
    "trap": "SNFA maximum disposal timeline (7 years) vs income reversal deadline (Sept 30, 2027).",
    "id": "note-sec2-255"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-20",
    "bullets": [
      "2-Phase Rollout: Unit-based SWPs/STPs by Jan 31, 2027; Amount-based by April 30, 2027.",
      "Nodal Facilitator: Depositories designated as nodal facilitators (operational framework by Oct 31, 2026)."
    ],
    "title": "SEBI Clears Standing Instructions for SWP and STP in Demat-Held Mutual Funds",
    "staticGk": "Depositories in India: NSDL and CDSL.",
    "tier": "Tier A",
    "hook": "Allows demat unit holders to execute automatic Systematic Withdrawal and Transfer Plans.",
    "trap": "Unit-based SWP deadline (Jan 31, 2027) vs Amount-based SWP deadline (April 30, 2027).",
    "id": "note-sec2-256"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-21",
    "bullets": [
      "PRIDE-Disha: Performance comparison tool utilizing 5,000 days NAV data and XIRR methodology.",
      "Pension Sahayak: AI-powered 22-language grievance portal (30-day intermediary resolution timeline)."
    ],
    "title": "PFRDA Launches 'PRIDE-Disha' Performance Tool & 'Pension Sahayak' AI Portal",
    "staticGk": "XIRR (Extended Internal Rate of Return) accounts for irregular cash inflows/outflows.",
    "tier": "Tier A",
    "hook": "Uses XIRR methodology to compare pension fund manager returns based on actual cash flows.",
    "trap": "Intermediary resolution timeline (30 days) vs NPS Trust escalation timeline (21 days).",
    "id": "note-sec2-257"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-22",
    "bullets": [
      "One-Time Approval: One-time RBI clearance covers future acquisitions up to 10% voting rights/share capital.",
      "Qualifying Entities: SEBI-registered MFs, IRDAI-registered Insurers, PFRDA-registered Pension Funds."
    ],
    "title": "RBI One-Time Approval Proposal for MFs & Insurers to Acquire up to 10% Bank Shareholding",
    "staticGk": "Standard RBI major shareholding threshold in banks is 5%.",
    "tier": "Tier A",
    "hook": "Replaces repeated prior approval requirement for qualifying institutional investors acquiring >5% bank stakes.",
    "trap": "Standard approval threshold (5%) vs one-time clearance cap (10%).",
    "id": "note-sec2-258"
  },
  {
    "secId": "sec3",
    "interviewQ": null,
    "date": "2026-07-28",
    "bullets": [
      "Digital Journeys: 'Financial Fitness' score, 'Sustainability Journey', and 24x7 agentic AI assistant 'YONO Ji'.",
      "Platform Reach: Deployed across YONO Business web and mobile applications."
    ],
    "title": "SBI Unveils Suite of AI Journeys: Financial Fitness, Sustainability, & 'YONO Ji'",
    "staticGk": "SBI Chairman: CS Setty | HQ: Mumbai, Maharashtra.",
    "tier": "Tier A",
    "hook": "Integrates agentic AI virtual assistant 'YONO Ji' across YONO Business web and mobile platforms.",
    "trap": null,
    "id": "note-sec3-259"
  },
  {
    "secId": "sec3",
    "interviewQ": null,
    "date": "2026-07-29",
    "bullets": [
      "Deposit Threshold: Total deposits crossed ₹2,000 crore mark with 0% net NPAs.",
      "UCF Classification: Tier-I (<₹100 cr), Tier-II (₹100 cr – ₹1,000 cr), Tier-III (₹1,000 cr – ₹10,000 cr)."
    ],
    "title": "Kakinada Cooperative Town Bank Attains Tier-III UCB Status (Deposits Surpass ₹2,000 Crore)",
    "staticGk": "Kakinada Cooperative Town Bank located in Andhra Pradesh.",
    "tier": "Tier A",
    "hook": "Secures Tier-III UCB status under RBI norms with zero net Non-Performing Assets (NPAs).",
    "trap": "Tier-II deposit limit (up to ₹1,000 crore) vs Tier-III deposit threshold (₹1,000 cr – ₹10,000 cr).",
    "id": "note-sec3-260"
  },
  {
    "secId": "sec3",
    "interviewQ": null,
    "date": "2026-07-30",
    "bullets": [
      "Biometric Authentication: Replaces SMS-based OTPs with fingerprint, facial recognition, or device PIN.",
      "Launch Partner: Went live in partnership with IDFC FIRST Bank."
    ],
    "title": "Visa Launches Biometric 'Visa Payment Passkey' in India via IDFC FIRST Bank",
    "staticGk": "IDFC FIRST Bank MD & CEO: V. Vaidyanathan | HQ: Mumbai.",
    "tier": "Tier A",
    "hook": "Replaces SMS OTPs with device fingerprint, facial recognition, and PIN biometric authentication.",
    "trap": null,
    "id": "note-sec3-261"
  },
  {
    "secId": "sec3",
    "interviewQ": null,
    "date": "2026-07-31",
    "bullets": [
      "Penalty Breakdown: Private banks collected ₹4,948.71 crore (HDFC Bank top ₹1,798.14 cr; Axis Bank ₹1,081.33 cr); PSBs collected ₹2,137.92 crore (SBI top ₹477.27 cr).",
      "PSB Exemption: 10 out of 12 PSBs have completely discontinued MAB penal charges.",
      "BSBDA Accounts: Basic Savings Bank Deposit Accounts (PMJDY) exempt from minimum balance requirements."
    ],
    "title": "Banks Collected ₹7,086 Crore in Minimum Average Balance Penalties in FY26",
    "staticGk": "BSBDA (Basic Savings Bank Deposit Account) rules mandate zero minimum balance.",
    "tier": "Tier A",
    "hook": "Private sector banks accounted for 70% of total minimum balance penalties collected.",
    "trap": "Private bank penalty share (70% / ₹4,948.71 cr) vs PSB share (₹2,137.92 cr).",
    "id": "note-sec3-262"
  },
  {
    "secId": "sec3",
    "interviewQ": null,
    "date": "2026-07-01",
    "bullets": [
      "Issuance Details: ₹4,691 crore raised via Basel III Additional Tier 1 (AT1) perpetual bonds at 7.75% coupon.",
      "Loss Absorbency: AT1 bonds feature loss absorbency (can be written off or converted to equity during stress)."
    ],
    "title": "SBI Issues ₹4,691 Crore Basel III-Compliant AT-1 Perpetual Bonds",
    "staticGk": "Basel III norms mandate minimum total capital ratio of 9% plus capital conservation buffer.",
    "tier": "Tier A",
    "hook": "Raises core Tier-I regulatory capital with a coupon rate of 7.75% and 5-year call option.",
    "trap": "AT1 bond call option window (after 5 years) vs perpetual maturity.",
    "id": "note-sec3-263"
  },
  {
    "secId": "sec5",
    "interviewQ": null,
    "date": "2026-07-05",
    "bullets": [
      "Regulatory Objective: Monitors dark patterns and forced add-on sales on digital insurance apps.",
      "Implementation Alignment: Follows RBI's anti-misselling framework effective January 1, 2027."
    ],
    "title": "IRDAI Partners with IPAI to Eliminate Dark Patterns in Insurance Sector",
    "staticGk": "Dark Patterns: Deceptive UI/UX designs that trick users into unwanted purchases.",
    "tier": "Tier A",
    "hook": "Partners with Institute of Public Auditors of India to curb misselling on digital insurance portals.",
    "trap": null,
    "id": "note-sec5-264"
  },
  {
    "secId": "sec5",
    "interviewQ": null,
    "date": "2026-07-06",
    "bullets": [
      "Equity Structure: Prudential plc holds 70% stake, HCL Group holds 30% stake.",
      "Separate Acquisition: Prudential plc acquired 75% stake in Bharti Life Insurance."
    ],
    "title": "IRDAI Grants Health Insurance License to Prudential HCL Joint Venture",
    "staticGk": "100% FDI permitted in Indian insurance sector under automatic route.",
    "tier": "Tier A",
    "hook": "Grants standalone health insurance registration to Prudential HCL Health Insurance (70:30 JV).",
    "trap": "Prudential stake in Prudential HCL Health (70%) vs stake in Bharti Life (75%).",
    "id": "note-sec5-265"
  },
  {
    "secId": "sec5",
    "interviewQ": null,
    "date": "2026-07-07",
    "bullets": [
      "Implementation Window: Mandatory for insurers adopting Ind AS in FY 2026-27 (FY 2027-28 for forbearance entities).",
      "Scope: Independent validation assesses actuarial models, IT systems, and financial data management."
    ],
    "title": "IRDAI Mandates Independent Validation of Insurers' Ind AS Implementation Preparedness",
    "staticGk": "Ind AS 117 corresponds to IFRS 17 Insurance Contracts global accounting standard.",
    "tier": "Tier A",
    "hook": "Requires board-approved strategy validation for transitioning to Ind AS 101 and Ind AS 117 standards.",
    "trap": "Ind AS adoption timeline (FY27) vs regulatory forbearance timeline (FY28).",
    "id": "note-sec5-266"
  },
  {
    "secId": "sec5",
    "interviewQ": null,
    "date": "2026-07-08",
    "bullets": [
      "Acquisition Value: ₹4,500 crore total transaction value.",
      "Shareholding Division: Patanjali Ayurved acquires 73.56% stake; DS Group acquires 24.50% stake."
    ],
    "title": "IRDAI Approves Patanjali Ayurved & DS Group's ₹4,500 Crore Acquisition of Magma General Insurance",
    "staticGk": "Magma General Insurance HQ: Mumbai, Maharashtra.",
    "tier": "Tier A",
    "hook": "Patanjali Ayurved acquires 73.56% majority stake from Adar Poonawalla's Sanoti Properties.",
    "trap": "Patanjali stake (73.56%) vs DS Group stake (24.50%).",
    "id": "note-sec5-267"
  },
  {
    "secId": "sec4",
    "interviewQ": null,
    "date": "2026-07-09",
    "bullets": [
      "Capacity Leader: Gujarat ranks 1st in installed wind capacity (16,086 MW) and annual wind generation (33,706 MUs).",
      "National Share: Gujarat accounts for nearly one-third of India's total wind power output."
    ],
    "title": "Gujarat Tops India's Wind Energy Charts with 16,086 MW Installed Capacity",
    "staticGk": "Union Ministry of New and Renewable Energy (MNRE) Minister: Pralhad Joshi.",
    "tier": "Tier A",
    "hook": "Generates 33,706 million units (MUs) of wind power in FY26, contributing 1/3rd of India's total output.",
    "trap": "Gujarat wind capacity (16,086 MW) vs annual generation share (nearly 1/3rd).",
    "id": "note-sec4-268"
  },
  {
    "secId": "sec4",
    "interviewQ": null,
    "date": "2026-07-10",
    "bullets": [
      "Exploratory Well: MN-DW18-1-H-D located 23 nautical miles from ONGC's Konark discovery in Mahanadi offshore basin.",
      "Strategic Signicance: Part of India's  billion crude import reduction strategy."
    ],
    "title": "ONGC Begins Drilling India's First Deepwater Exploration Well (MN-DW18-1-H-D) off Odisha",
    "staticGk": "ONGC Chairman & CEO: Arun Kumar Singh | HQ: New Delhi.",
    "tier": "Tier A",
    "hook": "Exploratory deepwater drilling initiated 23 nautical miles off Odisha coast in Mahanadi basin.",
    "trap": null,
    "id": "note-sec4-269"
  },
  {
    "secId": "sec4",
    "interviewQ": null,
    "date": "2026-07-11",
    "bullets": [
      "Protected Area: 56,825 sq. km. across Gujarat, Maharashtra, Goa, Karnataka, Kerala, and Tamil Nadu (1,500 km length).",
      "Committee Reference: Western Ghats Ecology Expert Panel (WGEEP 2011) headed by Madhav Gadgil."
    ],
    "title": "Centre Notifies 7th Draft for Ecologically Sensitive Areas (ESA) in Western Ghats",
    "staticGk": "Western Ghats (Sahyadri Hills) designated UNESCO World Heritage Site in 2012.",
    "tier": "Tier A",
    "hook": "Proposes protection for 56,825 sq. km. across 6 states based on Madhav Gadgil WGEEP report.",
    "trap": "Number of Western Ghats ESA states (6 states) vs total protected area (56,825 sq km).",
    "id": "note-sec4-270"
  },
  {
    "secId": "sec4",
    "interviewQ": "\"What is the historical significance of Sarnath's UNESCO World Heritage inscription?\"\n💡 **Model Answer: Sarnath is where Gautama Buddha delivered his first sermon (Dhammacakkappavattana Sutta); the site houses the Ashokan Lion Capital, which forms India's official National Emblem.**",
    "date": "2026-07-12",
    "bullets": [
      "World Heritage Site: Sarnath inscribed as India's 45th UNESCO World Heritage Site (Criteria iii & vi).",
      "Monuments Included: Chaukhandi Stupa, Dhamekh Stupa, Dharmarajika Stupa, Mulagandhakuti Vihara, and Ashokan Pillar (Lion Capital).",
      "Global Ranking: India ranks 6th globally and 2nd in Asia-Pacific for total UNESCO World Heritage Sites."
    ],
    "title": "UNESCO Inscribes Sarnath (Uttar Pradesh) as India's 45th World Heritage Site",
    "staticGk": "Buddhism 4 Holiest Sites: Lumbini (Nepal), Bodh Gaya (India), Sarnath (India), Kushinagar (India).",
    "tier": "Tier A",
    "hook": "Inscribed at 48th World Heritage Committee session in Busan; includes Dhamekh & Chaukhandi Stupas.",
    "trap": "India UNESCO World Heritage count (45 sites) vs India global ranking (6th globally, 2nd in Asia-Pacific).",
    "id": "note-sec4-271"
  },
  {
    "secId": "sec4",
    "interviewQ": null,
    "date": "2026-07-13",
    "bullets": [
      "GI Awardees: Spiti Seabuckthorn (Chharma), Chamba Salooni Safed Makka & Metal Art, Sirmauri Loiya gown, Kinnauri Topi, Apple & Jewellery, Mandi Sepuvadi."
    ],
    "title": "Eight Traditional Himachal Pradesh Products Secure Geographical Indication (GI) Tags",
    "staticGk": "GI Registry headquartered in Chennai, Tamil Nadu under DPIIT.",
    "tier": "Tier A",
    "hook": "Grants GI tags to Seabuckthorn, White Maize, Metal Art, Woollen Gowns, and Kinnauri Apples.",
    "trap": null,
    "id": "note-sec4-272"
  },
  {
    "secId": "sec4",
    "interviewQ": null,
    "date": "2026-07-14",
    "bullets": [
      "New GI Products: Chandannagar's Jalbhara Sandesh, Janai's Manohara sweet, and Balagarh traditional wooden boats.",
      "State Ranking: West Bengal ranks 3rd in India (59 GI tags), behind Uttar Pradesh (83) and Tamil Nadu (76)."
    ],
    "title": "West Bengal Secures 3 New GI Tags: Jalbhara Sandesh, Manohara, & Balagarh Wooden Boats",
    "staticGk": "Uttar Pradesh ranks 1st in India for total GI tags (83).",
    "tier": "Tier A",
    "hook": "Increases West Bengal's total GI registrations to 59, making it India's 3rd-highest GI-tagged state.",
    "trap": "West Bengal GI rank (3rd, 59 tags) vs Uttar Pradesh (1st, 83 tags) vs Tamil Nadu (2nd, 76 tags).",
    "id": "note-sec4-273"
  },
  {
    "secId": "sec4",
    "interviewQ": null,
    "date": "2026-07-15",
    "bullets": [
      "Location: Puga Valley, Union Territory of Ladakh.",
      "Execution Agency: Executed by ONGC Energy Centre for 1 MW pilot geothermal power project."
    ],
    "title": "India Commissions First Geothermal Wells in Puga Valley, Ladakh",
    "staticGk": "Geothermal Energy taps heat from the Earth's sub-surface crust.",
    "tier": "Tier A",
    "hook": "Drills India's deepest geothermal wells for 1 MW pilot geothermal power plant.",
    "trap": null,
    "id": "note-sec4-274"
  },
  {
    "secId": "sec4",
    "interviewQ": null,
    "date": "2026-07-16",
    "bullets": [
      "State Cases Ranking: Uttar Pradesh recorded highest complaints (1.85 lakh), followed by Maharashtra (1.58 lakh) and Karnataka (1.21 lakh).",
      "Financial Loss Ranking: Maharashtra recorded highest financial loss (₹1,637.66 crore), followed by Karnataka (₹1,097.37 crore)."
    ],
    "title": "MHA Cyber Fraud Report: Uttar Pradesh Records Highest Complaints in India (1.85 Lakh Cases)",
    "staticGk": "National Cyber Crime Reporting Portal (NCRP) helpline: 1930.",
    "tier": "Tier A",
    "hook": "Records 12.71 lakh total cyber fraud complaints across India between January and June 2026.",
    "trap": "Highest complaint volume state (Uttar Pradesh) vs highest financial loss state (Maharashtra).",
    "id": "note-sec4-275"
  },
  {
    "secId": "sec4",
    "interviewQ": null,
    "date": "2026-07-17",
    "bullets": [
      "Undernourishment Reduction: Share dropped from 21.1% to 9.8% (142.5 million people).",
      "Healthy Diet Cost: Cost of healthy diet in India stands at .11 PPP per person per day (2nd lowest in South Asia after Pakistan .94).",
      "Child Stunting: Stunting in under-5 children fell to 32.9% in 2024 (down from 41.7% in 2012)."
    ],
    "title": "UN SOFI 2026 Report: India Undernourished Population Share Drops to 9.8%",
    "staticGk": "SOFI Report published jointly by FAO, IFAD, UNICEF, WFP, and WHO.",
    "tier": "Tier A",
    "hook": "Undernourished population in India declines from 21.1% (2004-06) to 9.8% (2023-25).",
    "trap": "India undernourished share (9.8%) vs healthy diet cost (.11 PPP/day).",
    "id": "note-sec4-276"
  },
  {
    "secId": "sec7",
    "interviewQ": null,
    "date": "2026-07-18",
    "bullets": [
      "Award Name: Bintang Republik Indonesia Adipurna (established 1959).",
      "Conferring Authority: Indonesian President Prabowo Subianto."
    ],
    "title": "PM Narendra Modi Conferred Indonesia's Highest State Honour 'Bintang Republik Indonesia Adipurna'",
    "staticGk": "Indonesia Capital: Jakarta / Nusantara | Currency: Indonesian Rupiah.",
    "tier": "Tier A",
    "hook": "Conferred by President Prabowo Subianto during official visit to Jakarta.",
    "trap": null,
    "id": "note-sec7-277"
  },
  {
    "secId": "sec7",
    "interviewQ": null,
    "date": "2026-07-19",
    "bullets": [
      "60th Jnanpith Awardee: Renowned Tamil poet and lyricist R. Vairamuthu.",
      "Tamil Predecessors: Akilan (1975) and Jayakanthan (2002).",
      "Previous Winners: 59th Vinod Kumar Shukla (Hindi); 58th Gulzar (Urdu) & Rambhadracharya (Sanskrit)."
    ],
    "title": "Tamil Poet R. Vairamuthu Conferred 60th Jnanpith Award (2025)",
    "staticGk": "Jnanpith Award instituted in 1961 by Bharatiya Jnanpith (1st winner G. Sankara Kurup 1965).",
    "tier": "Tier A",
    "hook": "Becomes 3rd Tamil author to receive India's highest literary honour.",
    "trap": "60th Jnanpith winner (R. Vairamuthu) vs 59th (Vinod Kumar Shukla).",
    "id": "note-sec7-278"
  },
  {
    "secId": "sec7",
    "interviewQ": null,
    "date": "2026-07-20",
    "bullets": [
      "Best Film: Article 370 (Hindi).",
      "Best Actor: Mammootty (Bramayugam) and Kartik Aaryan (Chandu Champion).",
      "Best Actress: Yami Gautam (Article 370).",
      "Best Director: Rajkumar Periasamy (Amaran)."
    ],
    "title": "72nd National Film Awards (2024): 'Article 370' Wins Best Film Award",
    "staticGk": "National Film Awards organized annually by Ministry of Information & Broadcasting (instituted 1954).",
    "tier": "Tier A",
    "hook": "Mammootty and Kartik Aaryan share Best Actor Award; Yami Gautam wins Best Actress.",
    "trap": null,
    "id": "note-sec7-279"
  },
  {
    "secId": "sec7",
    "interviewQ": null,
    "date": "2026-07-21",
    "bullets": [
      "Awardee: National Security Advisor Ajit Doval (longest-serving NSA of India).",
      "Award Presentation: Conferred annually on August 1 (death anniversary of Bal Gangadhar Tilak, instituted 1983)."
    ],
    "title": "NSA Ajit Doval Selected for Prestigious Lokmanya Tilak Award 2026",
    "staticGk": "1st Lokmanya Tilak Award recipient: Socialist leader S. M. Joshi (1983).",
    "tier": "Tier A",
    "hook": "Honoured for outstanding national security service on Bal Gangadhar Tilak's death anniversary.",
    "trap": null,
    "id": "note-sec7-280"
  },
  {
    "secId": "sec7",
    "interviewQ": null,
    "date": "2026-07-22",
    "bullets": [
      "Recipients: Yu Deng (Univ of Chicago), John Pardon (Stony Brook), Jacob Tsimerman (Univ of Toronto), Hong Wang (NYU/IHES).",
      "Award Structure: Conferred every 4 years to mathematicians under 40 (prize: 15,000 CAD / ,600 and gold medal of Archimedes).",
      "Historic Distinction: Hong Wang (China) is 3rd female recipient after Maryam Mirzakhani (2014) and Maryna Viazovska (2022)."
    ],
    "title": "Fields Medal 2026 Conferred on 4 Mathematicians: Hong Wang, Yu Deng, John Pardon, Jacob Tsimerman",
    "staticGk": "Fields Medal instituted by J.C. Fields at Univ of Toronto | International Mathematical Union (IMU) HQ: Berlin.",
    "tier": "Tier A",
    "hook": "Hong Wang becomes 3rd woman scientist in 90-year history to win the 'Nobel Prize of Mathematics'.",
    "trap": null,
    "id": "note-sec7-281"
  },
  {
    "secId": "sec6",
    "interviewQ": null,
    "date": "2026-07-23",
    "bullets": [
      "Champions: Australia (Captain: Sophie Molineux) defeated England by 7 wickets in final.",
      "Player of Tournament: Beth Mooney (Australia).",
      "Total Titles: Australia has won 7 of 9 editions (England 1, West Indies 1)."
    ],
    "title": "2026 ICC Women's T20 World Cup: Australia Defeats England by 7 Wickets for 7th Title",
    "staticGk": "ICC HQ: Dubai, UAE | Chairman: Jay Shah.",
    "tier": "Tier A",
    "hook": "Australia claims 7th Women's T20 World Cup title in England; Beth Mooney Player of Tournament.",
    "trap": "Australia Women's T20 World Cup titles count (7 titles).",
    "id": "note-sec6-282"
  },
  {
    "secId": "sec6",
    "interviewQ": null,
    "date": "2026-07-24",
    "bullets": [
      "Men's Singles Winner: Jannik Sinner (Italy) defeated Alexander Zverev (Germany).",
      "Women's Singles Winner: Linda Nosková (Czech Republic) defeated Karolína Muchová.",
      "Sinner Milestone: 2nd consecutive Wimbledon title and 100th Grand Slam match victory."
    ],
    "title": "139th Wimbledon 2026: Jannik Sinner Wins Men's Singles; Linda Nosková Wins Women's Singles",
    "staticGk": "Wimbledon played on grass courts at All England Club, London (established 1877).",
    "tier": "Tier A",
    "hook": "Jannik Sinner defeats Alexander Zverev to claim 2nd consecutive Wimbledon and 5th Grand Slam title.",
    "trap": "Men's Singles Winner (Jannik Sinner) vs Women's Singles Winner (Linda Nosková).",
    "id": "note-sec6-283"
  },
  {
    "secId": "sec6",
    "interviewQ": null,
    "date": "2026-07-25",
    "bullets": [
      "Women's Singles Winner: PV Sindhu defeated Akane Yamaguchi (Japan) in final.",
      "Men's Singles Winner: Christo Popov (France) defeated Koki Watanabe (Japan)."
    ],
    "title": "BWF Japan Open 2026: PV Sindhu Wins Women's Singles Title",
    "staticGk": "BWF (Badminton World Federation) HQ: Kuala Lumpur, Malaysia.",
    "tier": "Tier A",
    "hook": "PV Sindhu becomes 1st Indian badminton player to win Japan Open title.",
    "trap": null,
    "id": "note-sec6-284"
  },
  {
    "secId": "sec6",
    "interviewQ": null,
    "date": "2026-07-26",
    "bullets": [
      "Champions: Spain (Captain: Rodri) defeated Argentina 2-1 at MetLife Stadium, New York.",
      "Golden Ball (Best Player): Rodri (Spain) | Golden Boot (Top Scorer): Kylian Mbappé (France, 22 all-time World Cup goals).",
      "Golden Glove (Best Goalkeeper): Unai Simón (Spain) | Young Player: Pau Cubarsí (Spain).",
      "2030 World Cup Hosts: Main hosts Morocco, Portugal, Spain (Centenary matches in Argentina, Paraguay, Uruguay)."
    ],
    "title": "2026 FIFA World Cup: Spain Defeats Defending Champions Argentina 2-1 in New York Final",
    "staticGk": "FIFA HQ: Zurich, Switzerland | President: Gianni Infantino.",
    "tier": "Tier A",
    "hook": "Spain becomes 1st nation to hold men's and women's FIFA World Cup crowns simultaneously.",
    "trap": "Golden Ball winner (Rodri) vs Golden Boot winner (Kylian Mbappé).",
    "id": "note-sec6-285"
  },
  {
    "secId": "sec5",
    "interviewQ": null,
    "date": "2026-07-27",
    "bullets": [
      "Achievement: 18-year-old Aswath S becomes India's 98th Grandmaster."
    ],
    "title": "Aswath S (Tamil Nadu) Becomes India's 98th Chess Grandmaster",
    "staticGk": "India's 1st Grandmaster: Viswanathan Anand (1988).",
    "tier": "Tier B+",
    "hook": null,
    "trap": null,
    "id": "note-sec5-286"
  },
  {
    "secId": "sec5",
    "interviewQ": null,
    "date": "2026-07-28",
    "bullets": [
      "Appointment: Lokhande Prashant Sitaram appointed CBSE Chairperson."
    ],
    "title": "Lokhande Prashant Sitaram Appointed CBSE Chairperson",
    "staticGk": "CBSE HQ: New Delhi | Works under Ministry of Education.",
    "tier": "Tier B+",
    "hook": null,
    "trap": null,
    "id": "note-sec5-287"
  },
  {
    "secId": "sec5",
    "interviewQ": null,
    "date": "2026-07-29",
    "bullets": [
      "Appointment: Bijay Kumar Mohanty appointed CMD of IREDA."
    ],
    "title": "Bijay Kumar Mohanty Appointed CMD of IREDA",
    "staticGk": "IREDA is a Mini Ratna Category-I CPSE under Ministry of New and Renewable Energy.",
    "tier": "Tier B+",
    "hook": null,
    "trap": null,
    "id": "note-sec5-288"
  },
  {
    "secId": "sec5",
    "interviewQ": null,
    "date": "2026-07-30",
    "bullets": [
      "Appointment: Silvana Tenreyro appointed IMF Chief Economist."
    ],
    "title": "Silvana Tenreyro Appointed Chief Economist of International Monetary Fund (IMF)",
    "staticGk": "IMF HQ: Washington D.C. | MD: Kristalina Georgieva.",
    "tier": "Tier B+",
    "hook": null,
    "trap": null,
    "id": "note-sec5-289"
  },
  {
    "secId": "sec5",
    "interviewQ": null,
    "date": "2026-07-31",
    "bullets": [
      "Induction: Dilip Asbe inducted into SWIFT Global Supervisory Board.",
      "SWIFT Governance: Overseen by G-10 central banks and European Central Bank (National Bank of Belgium lead overseer)."
    ],
    "title": "Dilip Asbe (NPCI CEO) Inducted into SWIFT Global Supervisory Board",
    "staticGk": "SWIFT (Society for Worldwide Interbank Financial Telecommunication) HQ: La Hulpe, Belgium.",
    "tier": "Tier B+",
    "hook": null,
    "trap": "SWIFT lead overseer central bank (National Bank of Belgium) vs India membership status (Non-member of G-10).",
    "id": "note-sec5-290"
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