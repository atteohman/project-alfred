// Alliance network data
// Last updated: 2026-Q1

// ─── Alliance Definitions ─────────────────────────────────────────────────────
const ALLIANCES = {
  nato: {
    id: "nato", label: "NATO", fullName: "North Atlantic Treaty Organization",
    color: "#4fa3e0", xf: 0.21, yf: 0.36,
    founded: "April 4, 1949", hq: "Brussels, Belgium", memberCount: 32,
    summary: "NATO is the world's most powerful defensive military alliance. Its founding principle — Article 5, which states that an attack on one member is an attack on all — has been invoked only once: after the September 11, 2001 attacks on the United States. Founded to counter Soviet expansionism, NATO has since evolved into a comprehensive security organization managing crises from the Balkans to Afghanistan to the Arctic.",
    events: [
      { y: 1949, e: "Founded by 12 nations including USA, UK, France, Canada and most of Western Europe." },
      { y: 1952, e: "Greece and Turkey join, extending NATO's southeastern flank into the Middle East." },
      { y: 1955, e: "West Germany joins. Soviets respond by founding the Warsaw Pact." },
      { y: 1991, e: "Soviet collapse and dissolution of Warsaw Pact transforms NATO's mission from containment to crisis management." },
      { y: 1999, e: "First major combat operation: 78-day bombing campaign against Yugoslavia over Kosovo." },
      { y: 2001, e: "Article 5 invoked for the first time following the 9/11 attacks. NATO deploys to Afghanistan." },
      { y: 2004, e: "Largest single expansion: 7 Eastern European states join, including the Baltic republics." },
      { y: 2022, e: "Russia's invasion of Ukraine triggers NATO's largest military buildup since the Cold War." },
      { y: 2023, e: "Finland becomes the 31st member, doubling NATO's direct land border with Russia." },
      { y: 2024, e: "Sweden becomes the 32nd member, completing full Nordic integration into NATO." }
    ]
  },
  eu: {
    id: "eu", label: "EU", fullName: "European Union",
    color: "#7fa8d4", xf: 0.37, yf: 0.46,
    founded: "November 1, 1993 (Maastricht Treaty)", hq: "Brussels, Belgium", memberCount: 27,
    summary: "The European Union evolved from post-WWII efforts to bind European economies together and prevent another continental war. What began as a coal and steel community among 6 nations has grown into the world's largest single market, representing 450 million people. While primarily an economic and political union, Article 42.7 of the Lisbon Treaty creates a mutual defense clause. The EU lost the UK through Brexit in 2020, its first-ever member departure.",
    events: [
      { y: 1951, e: "European Coal and Steel Community founded by France, West Germany, Italy, and Benelux — the original 6." },
      { y: 1957, e: "Treaties of Rome create the EEC (Common Market) and Euratom." },
      { y: 1985, e: "Schengen Agreement begins dismantling internal borders; single passport zone follows." },
      { y: 1993, e: "Maastricht Treaty creates the European Union with common citizenship and a path to monetary union." },
      { y: 1999, e: "Euro currency launched for financial transactions; banknotes/coins follow in 2002." },
      { y: 2004, e: "Largest expansion: 10 countries join, including Poland, Hungary, Czech Republic and Baltic states." },
      { y: 2009, e: "Lisbon Treaty reforms EU institutions and creates the European External Action Service (de facto foreign ministry)." },
      { y: 2016, e: "UK votes 52-48% to leave the EU — first ever departure of a member state." },
      { y: 2020, e: "Brexit completed. UK formally leaves the single market and customs union." },
      { y: 2022, e: "Ukraine and Moldova granted EU candidate status following Russian invasion." }
    ]
  },
  five_eyes: {
    id: "five_eyes", label: "Five Eyes", fullName: "Five Eyes Intelligence Alliance",
    color: "#9b8dc4", xf: 0.10, yf: 0.20,
    founded: "March 5, 1946 (UKUSA Agreement)", hq: "No permanent HQ", memberCount: 5,
    summary: "The Five Eyes is the world's most sophisticated intelligence-sharing network, rooted in a secret 1946 signals intelligence (SIGINT) pact between the US and UK. Expanded to include Canada, Australia, and New Zealand, the alliance remained classified until the NSA documents leaked by Edward Snowden in 2013 revealed its full scope. Member agencies collectively operate ECHELON, a system capable of intercepting and processing virtually all global electronic communications.",
    events: [
      { y: 1943, e: "BRUSA Agreement establishes preliminary US-UK intelligence sharing during WWII." },
      { y: 1946, e: "UKUSA Agreement formalizes the Anglo-American intelligence partnership post-war." },
      { y: 1948, e: "Canada joins; the network expands to three nations." },
      { y: 1956, e: "Australia and New Zealand join, completing the five-nation alliance." },
      { y: 1971, e: "ECHELON satellite surveillance network begins operations under NSA/GCHQ." },
      { y: 2003, e: "Five Eyes intelligence is central to — and later controversially assessed in — the Iraq WMD dossier." },
      { y: 2013, e: "Edward Snowden leaks reveal the alliance's full scope, including mass surveillance of allied leaders." },
      { y: 2018, e: "Five Eyes countries collectively attribute major cyberattacks to China and Russia for the first time." },
      { y: 2020, e: "Alliance members publicly warn against Huawei 5G infrastructure on security grounds." }
    ]
  },
  g7: {
    id: "g7", label: "G7", fullName: "Group of Seven",
    color: "#a8b4c0", xf: 0.36, yf: 0.16,
    founded: "November 15–17, 1975 (Rambouillet Summit)", hq: "No permanent HQ", memberCount: 7,
    summary: "The G7 was formed in 1975 to coordinate economic policy among the world's leading industrial democracies following the OPEC oil crisis. Originally the G6, Canada joined in 1976. Russia was admitted in 1998 (forming the G8) to encourage post-Soviet integration, but was expelled in 2014 following the annexation of Crimea. The G7 has become the primary coordination mechanism for Western economic statecraft, including financial sanctions packages and debt relief for developing nations.",
    events: [
      { y: 1975, e: "G6 summit at Rambouillet, France: USA, UK, France, West Germany, Italy, Japan." },
      { y: 1976, e: "Canada joins; the group becomes the G7." },
      { y: 1998, e: "Russia joins, forming the G8. Seen as a reward for democratic reforms under Yeltsin." },
      { y: 2002, e: "G8 launches the Africa Action Plan, committing hundreds of billions in aid and debt relief." },
      { y: 2014, e: "Russia expelled following annexation of Crimea. G8 returns to G7 format." },
      { y: 2021, e: "Cornwall Summit: G7 backs 'Build Back Better World' as alternative to China's Belt and Road Initiative." },
      { y: 2022, e: "G7 coordinates unprecedented sanctions package against Russia following Ukraine invasion." },
      { y: 2023, e: "Hiroshima Summit: G7 adopts new guidelines on economic coercion, targeting China's trade practices." }
    ]
  },
  aukus: {
    id: "aukus", label: "AUKUS", fullName: "Australia–United Kingdom–United States Security Pact",
    color: "#5fb8a5", xf: 0.16, yf: 0.72,
    founded: "September 15, 2021", hq: "No permanent HQ", memberCount: 3,
    summary: "AUKUS is a trilateral security pact announced in September 2021, centered on the transfer of nuclear-powered submarine technology to Australia — the first time the US had shared this technology since sharing it with the UK in 1958. The announcement came as a dramatic surprise: Australia simultaneously cancelled a $90 billion diesel submarine contract with France, triggering a major diplomatic crisis and the recall of French ambassadors. AUKUS represents a historic reshaping of Indo-Pacific security architecture designed explicitly to counter Chinese naval expansion.",
    events: [
      { y: 2016, e: "Australia signs $90 billion deal with France's Naval Group to build 12 Attack-class submarines." },
      { y: 2021, e: "AUKUS announced; Australia cancels French deal. France recalls ambassadors in unprecedented crisis." },
      { y: 2022, e: "Formal consultations begin on optimal submarine pathway for Royal Australian Navy." },
      { y: 2023, e: "San Diego Summit: 'Optimal Pathway' announced — US Virginia-class subs sold to Australia from early 2030s." },
      { y: 2023, e: "Pillar 2 of AUKUS announced: broader tech-sharing in AI, quantum computing, hypersonics, electronic warfare." },
      { y: 2024, e: "Legislation passed in US Congress to enable submarine transfer; base access agreements signed." }
    ]
  },
  csto: {
    id: "csto", label: "CSTO", fullName: "Collective Security Treaty Organization",
    color: "#e05c5c", xf: 0.63, yf: 0.20,
    founded: "May 14, 1992 (Treaty) / October 7, 2002 (Organization)", hq: "Moscow, Russia", memberCount: 6,
    summary: "The CSTO is Russia's primary multilateral military alliance, binding Moscow with five former Soviet republics in a collective defense pact. Often described as a Russian-dominated counterpart to NATO, in practice it has served primarily as a tool for Russia to maintain sphere-of-influence over the post-Soviet space. Its most dramatic deployment came in January 2022, when CSTO forces intervened in Kazakhstan to suppress protests against President Tokayev — a use of force against civilian unrest that alarmed many observers.",
    events: [
      { y: 1992, e: "Collective Security Treaty signed in Tashkent by 6 post-Soviet republics amid Soviet dissolution." },
      { y: 1999, e: "Azerbaijan, Georgia, and Uzbekistan withdraw. Alliance reduced to Russia's core sphere." },
      { y: 2002, e: "Treaty reformalized as the Collective Security Treaty Organization with a permanent secretariat." },
      { y: 2009, e: "CSTO Collective Rapid Reaction Force created — a joint military unit for rapid deployment." },
      { y: 2020, e: "CSTO refuses to invoke mutual defense during Armenia-Azerbaijan Nagorno-Karabakh war, embarrassing alliance." },
      { y: 2022, e: "CSTO deploys to Kazakhstan to support President Tokayev against mass anti-government protests." },
      { y: 2022, e: "Armenia withdraws from CSTO exercises following Russian inaction over Azerbaijani attacks on Armenian territory." },
      { y: 2024, e: "Armenia suspends CSTO membership, citing Russia's failure to defend it from Azerbaijan." }
    ]
  },
  sco: {
    id: "sco", label: "SCO", fullName: "Shanghai Cooperation Organisation",
    color: "#e07c3c", xf: 0.73, yf: 0.42,
    founded: "June 15, 2001", hq: "Beijing, China", memberCount: 10,
    summary: "Founded by China, Russia, and four Central Asian republics, the SCO has grown into a major Eurasian security and economic bloc. Dramatically expanded with India and Pakistan (2017), Iran (2023), and Belarus (2024), the SCO now encompasses approximately 40% of the world's population and 25% of global GDP. It positions itself as an alternative to Western-led security institutions and increasingly serves as a forum for China and Russia to coordinate Eurasian strategy, though deep India-China rivalry limits its cohesion.",
    events: [
      { y: 1996, e: "'Shanghai Five' formed for border demilitarization between China, Russia, and Central Asian states." },
      { y: 2001, e: "Shanghai Five expands with Uzbekistan and is formalized as the SCO." },
      { y: 2005, e: "SCO calls for deadline on US military bases in Central Asia; Uzbekistan expels US forces within months." },
      { y: 2017, e: "India and Pakistan join simultaneously, dramatically expanding the alliance's global weight." },
      { y: 2021, e: "Iran granted observer status on path to full membership." },
      { y: 2022, e: "SCO holds largest-ever joint military exercises following Russia's Ukraine invasion." },
      { y: 2023, e: "Iran becomes full member. SCO now includes all major Eurasian non-Western powers." },
      { y: 2024, e: "Belarus joins as full member; SCO formally encompasses the full Russia-China bloc architecture." }
    ]
  },
  brics: {
    id: "brics", label: "BRICS+", fullName: "Brazil–Russia–India–China–South Africa (+ Partners)",
    color: "#c8873a", xf: 0.62, yf: 0.60,
    founded: "June 16, 2009 (First BRIC Summit)", hq: "No permanent HQ (rotating presidency)", memberCount: 10,
    summary: "BRICS began as a Goldman Sachs investment thesis — the acronym coined in 2001 by economist Jim O'Neill to describe fast-growing emerging economies. The countries formalized it as a political grouping in 2009. In 2010 South Africa joined (making it BRICS). At the 2023 Johannesburg Summit, the group invited six new members, expanding to represent 40%+ of global oil production. BRICS's central ambition is reducing dollar dominance in global trade and challenging Western-led financial institutions like the IMF and World Bank.",
    events: [
      { y: 2001, e: "Goldman Sachs economist Jim O'Neill coins the 'BRIC' acronym in a research paper on emerging markets." },
      { y: 2009, e: "First formal BRIC leaders' summit held in Yekaterinburg, Russia." },
      { y: 2010, e: "South Africa joins; group renamed BRICS." },
      { y: 2014, e: "BRICS New Development Bank (NDB) founded as alternative to IMF/World Bank." },
      { y: 2015, e: "NDB begins lending; Contingent Reserve Arrangement (CRA) created to stabilize member currencies." },
      { y: 2022, e: "Russia's Ukraine invasion strains group cohesion; India and China refuse to condemn Moscow." },
      { y: 2023, e: "Johannesburg Summit invites UAE, Egypt, Ethiopia, Iran, Saudi Arabia, Argentina to join." },
      { y: 2024, e: "Saudi Arabia, UAE, Iran, Egypt, Ethiopia join. Argentina declines under new president Milei." }
    ]
  },
  quad: {
    id: "quad", label: "Quad", fullName: "Quadrilateral Security Dialogue",
    color: "#b05aad", xf: 0.80, yf: 0.66,
    founded: "May 2007 (first meeting, revived 2017)", hq: "No permanent HQ", memberCount: 4,
    summary: "The Quad is an informal strategic forum between the United States, Japan, India, and Australia, first convened in 2007 after the Indian Ocean tsunami. It lay dormant for a decade after Australia withdrew under Chinese diplomatic pressure, but was revived in 2017 with an explicit focus on countering China's growing assertiveness in the Indo-Pacific. Elevated to leader-level summits starting in 2021, the Quad remains an informal consultative body — not a formal treaty alliance — focused on maritime security, critical technology, and supply chain resilience.",
    events: [
      { y: 2004, e: "Tsunami relief cooperation between USA, Japan, India, and Australia plants seeds of Quad cooperation." },
      { y: 2007, e: "First Quad meeting held in Manila on sidelines of ASEAN Regional Forum." },
      { y: 2008, e: "Australia withdraws from Quad under Prime Minister Rudd, citing sensitivity about China relations." },
      { y: 2017, e: "Quad revived at senior official level during ASEAN summit; explicit focus on free and open Indo-Pacific." },
      { y: 2019, e: "Quad elevated to foreign minister level meetings." },
      { y: 2021, e: "First Quad leaders' summit (virtual); commits to delivering 1 billion COVID vaccines to Asia." },
      { y: 2022, e: "Quad Summit in Tokyo; joint maritime awareness initiative launched to monitor Chinese vessels." },
      { y: 2023, e: "Hiroshima Quad Summit: new cancer initiative, clean energy partnerships, and undersea cable security." }
    ]
  },
  asean: {
    id: "asean", label: "ASEAN", fullName: "Association of Southeast Asian Nations",
    color: "#c8a838", xf: 0.88, yf: 0.52,
    founded: "August 8, 1967", hq: "Jakarta, Indonesia", memberCount: 10,
    summary: "ASEAN was founded in 1967 at the height of the Cold War by five anti-communist Southeast Asian nations. It operates on the 'ASEAN Way' — consensus-based decision-making and strict non-interference in members' internal affairs. This principle has made ASEAN effective at managing interstate relations but slow to address internal crises. ASEAN's geographic centrality in the Indo-Pacific has made it an essential hub for regional diplomacy, though its reluctance to confront Myanmar over the 2021 military coup has tested its credibility.",
    events: [
      { y: 1967, e: "Founded in Bangkok by Indonesia, Malaysia, Philippines, Singapore, and Thailand as an anti-communist bloc." },
      { y: 1984, e: "Brunei joins after independence from Britain." },
      { y: 1995, e: "Vietnam joins — the first communist state in ASEAN, marking end of Cold War divisions." },
      { y: 1997, e: "Laos and Myanmar join. Asian Financial Crisis tests economic cooperation." },
      { y: 1999, e: "Cambodia joins, completing the 10-nation bloc covering all of Southeast Asia." },
      { y: 2003, e: "ASEAN Declaration of Concord II launches the ASEAN Community framework (economic, security, cultural pillars)." },
      { y: 2007, e: "ASEAN Charter adopted, giving the organization legal personality and binding commitments." },
      { y: 2015, e: "ASEAN Economic Community (AEC) officially established — single market of 600 million people." },
      { y: 2021, e: "Myanmar military coup tests ASEAN principles; 5-Point Consensus largely ignored by junta." }
    ]
  },
  arab_league: {
    id: "arab_league", label: "Arab League", fullName: "League of Arab States",
    color: "#5aaa6a", xf: 0.53, yf: 0.76,
    founded: "March 22, 1945", hq: "Cairo, Egypt", memberCount: 22,
    summary: "The Arab League is the world's oldest regional political organization, founded in Cairo in 1945 to foster political, economic, and cultural coordination among Arab states. In practice, it has been repeatedly undermined by deep divisions — the Cold War created competing pro-Soviet and pro-Western blocs, the 1979 Egypt-Israel peace treaty led to Egypt's suspension, and the 2011 Arab Spring fractured consensus. Despite these limitations, the Arab League remains the primary forum for pan-Arab coordination and has played key roles in the Syrian conflict and Palestinian cause.",
    events: [
      { y: 1945, e: "Founded in Cairo by Egypt, Iraq, Jordan, Lebanon, Saudi Arabia, Syria, and Yemen." },
      { y: 1948, e: "Arab League coordinates military intervention against newly declared State of Israel — and loses." },
      { y: 1967, e: "Khartoum Resolution: 'Three Nos' — no peace with Israel, no recognition, no negotiations." },
      { y: 1979, e: "Egypt suspended for 10 years after signing peace treaty with Israel; HQ moved from Cairo to Tunis." },
      { y: 1990, e: "Arab League condemns Iraq's invasion of Kuwait, fracturing Arab solidarity." },
      { y: 2011, e: "Arab League suspends Libya and Syria during Arab Spring uprisings; endorses NATO intervention in Libya." },
      { y: 2022, e: "Arab League moves to normalize Syria's suspended membership amid regional rapprochement." },
      { y: 2023, e: "Syria readmitted to Arab League after 12-year suspension; Saudi-Iran rapprochement reshapes the Arab world." }
    ]
  },
  gcc: {
    id: "gcc", label: "GCC", fullName: "Gulf Cooperation Council",
    color: "#7ab87a", xf: 0.67, yf: 0.84,
    founded: "May 25, 1981", hq: "Riyadh, Saudi Arabia", memberCount: 6,
    summary: "The Gulf Cooperation Council was formed in 1981 in response to the Iranian Revolution (1979) and the Iran-Iraq War (1980), which threatened the stability of the Gulf Arab monarchies. The six member states share Gulf Arab culture, vast hydrocarbon wealth, and security anxieties about Iran. Combined, GCC states hold the world's largest concentrations of sovereign wealth funds. The 2017-2021 Qatar blockade — when Saudi Arabia, UAE, Bahrain, and Egypt severed relations with Qatar — represented the alliance's most severe internal crisis.",
    events: [
      { y: 1979, e: "Iranian Revolution and Iran-Iraq War create security fears among Gulf Arab monarchies." },
      { y: 1981, e: "GCC founded in Abu Dhabi by Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, and Oman." },
      { y: 1990, e: "Iraqi invasion of Kuwait tests the GCC; Saudi Arabia hosts coalition forces for Gulf War." },
      { y: 2003, e: "US invasion of Iraq destabilizes the region and strengthens Iranian influence, uniting GCC concerns." },
      { y: 2011, e: "GCC deploys troops to Bahrain to suppress Arab Spring protests, prioritizing regime stability." },
      { y: 2015, e: "Saudi-led GCC coalition begins military intervention in Yemen against Houthi forces." },
      { y: 2017, e: "Saudi Arabia, UAE, Bahrain, and Egypt blockade Qatar over alleged ties to Iran and Islamists." },
      { y: 2021, e: "Al-Ula Declaration ends Qatar blockade; GCC reconciliation achieved." }
    ]
  }
};

// ─── Country Data ─────────────────────────────────────────────────────────────
const COUNTRIES = {
  USA: { name: "United States",     a: ["nato","five_eyes","g7","quad","aukus"] },
  GBR: { name: "United Kingdom",    a: ["nato","five_eyes","g7","aukus"] },
  CAN: { name: "Canada",            a: ["nato","five_eyes","g7"] },
  AUS: { name: "Australia",         a: ["five_eyes","quad","aukus"] },
  NZL: { name: "New Zealand",       a: ["five_eyes"] },
  FRA: { name: "France",            a: ["nato","eu","g7"] },
  DEU: { name: "Germany",           a: ["nato","eu","g7"] },
  ITA: { name: "Italy",             a: ["nato","eu","g7"] },
  JPN: { name: "Japan",             a: ["g7","quad"] },
  ESP: { name: "Spain",             a: ["nato","eu"] },
  POL: { name: "Poland",            a: ["nato","eu"] },
  TUR: { name: "Turkey",            a: ["nato"] },
  NLD: { name: "Netherlands",       a: ["nato","eu"] },
  BEL: { name: "Belgium",           a: ["nato","eu"] },
  NOR: { name: "Norway",            a: ["nato"] },
  DNK: { name: "Denmark",           a: ["nato","eu"] },
  SWE: { name: "Sweden",            a: ["nato","eu"] },
  FIN: { name: "Finland",           a: ["nato","eu"] },
  GRC: { name: "Greece",            a: ["nato","eu"] },
  PRT: { name: "Portugal",          a: ["nato","eu"] },
  HUN: { name: "Hungary",           a: ["nato","eu"] },
  CZE: { name: "Czechia",           a: ["nato","eu"] },
  SVK: { name: "Slovakia",          a: ["nato","eu"] },
  ROU: { name: "Romania",           a: ["nato","eu"] },
  BGR: { name: "Bulgaria",          a: ["nato","eu"] },
  HRV: { name: "Croatia",           a: ["nato","eu"] },
  EST: { name: "Estonia",           a: ["nato","eu"] },
  LVA: { name: "Latvia",            a: ["nato","eu"] },
  LTU: { name: "Lithuania",         a: ["nato","eu"] },
  SVN: { name: "Slovenia",          a: ["nato","eu"] },
  ALB: { name: "Albania",           a: ["nato"] },
  MNE: { name: "Montenegro",        a: ["nato"] },
  MKD: { name: "N. Macedonia",      a: ["nato"] },
  ISL: { name: "Iceland",           a: ["nato"] },
  LUX: { name: "Luxembourg",        a: ["nato","eu"] },
  AUT: { name: "Austria",           a: ["eu"] },
  IRL: { name: "Ireland",           a: ["eu"] },
  CYP: { name: "Cyprus",            a: ["eu"] },
  MLT: { name: "Malta",             a: ["eu"] },
  RUS: { name: "Russia",            a: ["csto","sco","brics"] },
  BLR: { name: "Belarus",           a: ["csto","sco"] },
  KAZ: { name: "Kazakhstan",        a: ["csto","sco"] },
  KGZ: { name: "Kyrgyzstan",        a: ["csto","sco"] },
  TJK: { name: "Tajikistan",        a: ["csto","sco"] },
  ARM: { name: "Armenia",           a: ["csto"] },
  UZB: { name: "Uzbekistan",        a: ["sco"] },
  CHN: { name: "China",             a: ["sco","brics"] },
  IND: { name: "India",             a: ["sco","brics","quad"] },
  PAK: { name: "Pakistan",          a: ["sco"] },
  IRN: { name: "Iran",              a: ["sco","brics"] },
  BRA: { name: "Brazil",            a: ["brics"] },
  ZAF: { name: "South Africa",      a: ["brics"] },
  SAU: { name: "Saudi Arabia",      a: ["brics","gcc","arab_league"] },
  ARE: { name: "UAE",               a: ["brics","gcc","arab_league"] },
  EGY: { name: "Egypt",             a: ["brics","arab_league"] },
  ETH: { name: "Ethiopia",          a: ["brics"] },
  IDN: { name: "Indonesia",         a: ["asean"] },
  MYS: { name: "Malaysia",          a: ["asean"] },
  PHL: { name: "Philippines",       a: ["asean"] },
  SGP: { name: "Singapore",         a: ["asean"] },
  THA: { name: "Thailand",          a: ["asean"] },
  BRN: { name: "Brunei",            a: ["asean"] },
  VNM: { name: "Vietnam",           a: ["asean"] },
  LAO: { name: "Laos",              a: ["asean"] },
  MMR: { name: "Myanmar",           a: ["asean"] },
  KHM: { name: "Cambodia",          a: ["asean"] },
  JOR: { name: "Jordan",            a: ["arab_league"] },
  IRQ: { name: "Iraq",              a: ["arab_league"] },
  KWT: { name: "Kuwait",            a: ["gcc","arab_league"] },
  QAT: { name: "Qatar",             a: ["gcc","arab_league"] },
  BHR: { name: "Bahrain",           a: ["gcc","arab_league"] },
  OMN: { name: "Oman",              a: ["gcc","arab_league"] },
  YEM: { name: "Yemen",             a: ["arab_league"] },
  LBN: { name: "Lebanon",           a: ["arab_league"] },
  LBY: { name: "Libya",             a: ["arab_league"] },
  TUN: { name: "Tunisia",           a: ["arab_league"] },
  MAR: { name: "Morocco",           a: ["arab_league"] },
  DZA: { name: "Algeria",           a: ["arab_league"] },
  SDN: { name: "Sudan",             a: ["arab_league"] },
  SYR: { name: "Syria",             a: ["arab_league"] }
};
