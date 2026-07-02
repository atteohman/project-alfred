// Economic data — edit this file to update figures
// Last updated: 2026-Q2

// ── Economic Data ─────────────────────────────────────────────────────────────
// Key: ISO 3166-1 numeric code (as used by topojson world-atlas)
// gdp: billions USD | gdpPerCap: USD | growth: % | debt: % of GDP
// tradeBalance: billions USD (positive = surplus, negative = deficit)
const ECON_DATA = {
  840: { name:"United States", gdp:31800, gdpPerCap:94400, growth:2.3, debt:124.5, tradeBalance:-1050,
    exports:["Technology","Aerospace","Pharmaceuticals","Financial Services","Agriculture","Petroleum"],
    partners:["Canada","Mexico","EU","Japan","UK"],
    sanctions:false,
    summary:"World's largest nominal economy. The IMF April 2026 WEO (released April 14) projects US growth at 2.3% for 2026, revised down from 2.4% in January, reflecting higher trade barriers and Middle East war disruption — US energy producers benefit from elevated oil prices — Brent crude spiked back to ~$126/barrel on April 30 as stalled nuclear talks raised doubts over Hormuz reopening, keeping energy-sector upside risks elevated — partially offsetting broader uncertainty from the Strait of Hormuz closure and the US-Israel-Iran war (Operation Epic Fury, from February 28, 2026). Islamabad permanent-deal talks broke down April 12; Trump ordered a US Navy blockade of Iranian ports on April 13; Trump extended the ceasefire on April 21 at Pakistan's request, though the blockade remains. The Iran shock — on top of 145%+ tariffs on China — has elevated recession risk. Growth had been supported by the One Big Beautiful Bill Act tax incentives, AI-driven investment, and a partial trade truce with China agreed in November 2025. On May 23, Trump announced a deal with Iran was 'largely negotiated'; however, by May 29–30, talks stalled as Trump added new demands (Hormuz navigation, Iran's nuclear program, frozen assets) that were not well received in Tehran. Bloomberg (May 30) reported the US insists Hormuz transit deals are 'prohibited'; VP Vance confirmed MoU signing is 'TBD'. On June 1, Iranian state media reported talks suspended over Israel's Lebanon actions; Trump insisted June 2 that talks are ongoing and a deal is reachable 'over the next week.' On June 14, the US and Iran formally announced a ceasefire agreement — the Islamabad Memorandum, to be signed at Bürgenstock, Switzerland on June 19 — including toll-free Strait of Hormuz navigation, Iran's indefinite nuclear weapons prohibition, and the lifting of the US naval blockade; oil prices fell ~4% to ~$83/barrel on the announcement (down from $126/barrel peak) and continued sliding to ~$80/barrel by June 17 — coinciding with the first Iranian crude tankers exiting the Strait of Hormuz since the blockade began — signalling market expectations of an imminent Hormuz reopening that would significantly ease the energy-price drag on the 2026 growth outlook. On June 17, at the conclusion of the G7 summit in Évian-les-Bains, Trump personally signed the US-Iran memorandum during a state visit to the Palace of Versailles hosted by President Macron, with Iran's President Pezeshkian co-signing remotely; Brent crude extended its decline to a fifth straight session, reaching ~$79/barrel by June 18 — its lowest level since early March — as markets priced in the prospective release of 100+ tankers stranded in the Gulf, ahead of the planned June 19 Bürgenstock implementation talks, which collapsed before they began — Pakistan's PM Sharif called off his trip once the MoU's main signing was already achieved at Versailles, US VP Vance postponed his own travel citing unresolved logistics, and Iran's delegation suspended its departure in protest at continued Israeli strikes in southern Lebanon. Strait of Hormuz commercial traffic remained at only 5-10% of pre-war levels (under 10 vessels daily versus 100+ previously) as mine-clearance and war-risk insurance hurdles persisted, with Brent easing further to ~$78/barrel by June 18, even as US energy producers continued to benefit from a more gradual normalisation than a sudden full reopening would bring. A separate MoU provision committing the US to help develop a $300 billion Iran reconstruction fund — intended to be financed by Gulf and other partners rather than US taxpayers — became a domestic political flashpoint on June 18-19, with Trump and VP Vance both moving to rebut claims that Washington itself would fund the package. On June 19, the Lebanon front flared again as Hezbollah killed 4 Israeli soldiers and Israeli retaliatory strikes killed at least 83 people and wounded 141 across Lebanon, per the Lebanese Health Ministry's final toll — the war's second-deadliest day — prompting the US and Qatar to broker a renewed ceasefire effective 4pm local time, a reminder that the broader peace process remains fragile even as Hormuz traffic and oil markets normalise. That reminder proved immediate: on June 20, Hezbollah fired 50+ projectiles overnight at IDF positions in southern Lebanon and Israeli retaliatory strikes killed at least 32 people, including 2 children, even as Hormuz shipping continued its gradual recovery — JMIC/UKMTO cut the regional maritime threat level to 'substantial' from 'severe' on June 17, and 25 vessels (~20 tankers) transited the Strait on June 18, the busiest day in weeks, though still well short of the 100+ pre-war daily average, with Brent crude steadying near $80/barrel on June 19. That tentative recovery reversed within hours: on June 20, Iran's Khatam al-Anbiya Central Headquarters announced a fresh closure of the Strait of Hormuz to commercial traffic, citing the US and Israel's breach of the MoU's first clause over continued Lebanon strikes and warning of further steps if the 'aggression' continues; Iran's own Foreign Ministry contradicted the military, telling Tasnim that shipping was operating normally, and VP Vance publicly disputed any closure on Fox News even as Iran's negotiating delegation was reported en route to Switzerland for talks. On June 21, US Central Command directly rebutted Iran's closure claim, stating that 55 merchant ships carrying more than 17 million barrels of oil transited the Strait on June 20 alone. The same day, Trump threatened to impose US tolls on Hormuz transit if a final deal is not reached within the 60-day ceasefire window, declaring there would be 'NO TOLLS in the Hormuz Strait for 60 days during the Cease Fire Period... unless they are imposed by and for the United States of America, should the deal not be completed' — framing the prospective tolls as payment for US 'services rendered as the Guardian Angel to the countries of the Middle East' — leaving the durability of the ceasefire, and the nascent Hormuz reopening, deeply unresolved. Later that day, the Bürgenstock implementation talks — collapsed two days earlier — formally got underway at the Lake Lucerne hotel complex in Switzerland, with VP Vance leading the US delegation, Iran's Parliament Speaker Ghalibaf leading Tehran's, and Pakistan and Qatar mediating; Vance said the priority was progress on the nuclear issue and the Lebanon ceasefire, kicking off the 60-day sprint on technical details that markets are watching for clarity on Hormuz reopening and oil-price direction. Vance, joined at Bürgenstock by special envoy Steve Witkoff and Jared Kushner, told reporters 'we've already made great progress' and that Hormuz reopening and Iran's nuclear program 'have already been accomplished'; hours later Trump posted on Truth Social that the US would 'hit Iran very hard again' if Tehran's 'proxies' in Lebanon kept 'causing trouble,' and Ghalibaf countered that Iran's 'armed forces are ready to respond' — a threat-and-rebuttal exchange that injected fresh uncertainty into oil markets just as Brent had begun stabilising near $80/barrel. On June 22, the US and Iran reported the first concrete progress since the talks resumed in Switzerland: negotiators agreed on a roadmap toward a final deal within 60 days and set up a Lebanon 'deconfliction cell' — adding Lebanese officials to the US-Iran talks, mediated by Qatar and Pakistan — to enforce the ceasefire, alongside a new High Level Committee to oversee the roadmap; Iran's FM Araghchi called the Bürgenstock outcome 'major progress,' citing secured oil and petrochemical export waivers, the lifting of the port blockade, and the release of some frozen assets. The US Treasury Department, under Secretary Scott Bessent, issued a 60-day general license (expiring August 21 unless renewed) authorising the production, delivery, and dollar-denominated sale of Iranian oil and petroleum products — a concrete sanctions-relief step tied to the roadmap. Yet maritime intelligence firm Windward reported commercial shipping through the Strait of Hormuz stalled over the weekend (just 12 vessels Sunday versus 21+ Saturday), even as Lloyd's List disputed that picture, reporting transits continuing largely unaffected by Iran's disputed June 20 closure announcement; Brent crude fell further to ~$74.3/barrel by June 22 — its lowest level since early March — suggesting markets see the diplomatic progress as incremental and the on-the-ground Hormuz reopening as still unresolved. On June 23, Trump announced he had agreed to let the Strait of Hormuz remain open with no further US naval blockade, citing Iran's 'full and complete' agreement to admit high-level nuclear inspections — a claim Iran's Foreign Ministry immediately disputed — while US ships remain in place in case the blockade needs to be reinstituted. The same day, Iran and Oman agreed to form a joint working group on future Hormuz navigation fees and services, with Iran's negotiators insisting the strait will 'never return to its pre-war conditions'; Hormuz transits nonetheless hit a post-war high of 35 vessels on June 22, still roughly a third of pre-war volume. Brent crude traded around $77/barrel on the news. On June 24, Secretary of State Rubio said the US would not accept Iran charging tolls or fees on Hormuz transit under any final deal, calling the idea contrary to international law, as the International Maritime Organization finalized a plan to evacuate roughly 11,000 seafarers stranded in the region by the conflict. Brent crude extended its slide the same day, falling 1.7% to ~$75.81/barrel — its lowest level since February 27, the day before the war began — as signs of progress in the Hormuz reopening and the US Treasury's 60-day Iranian oil-sales license eased supply concerns. On June 24, Oman, in coordination with the IMO, announced a temporary, fee-free shipping transit corridor through the Strait of Hormuz to help evacuate roughly 11,000 stranded seafarers and restore freedom of navigation; Brent crude extended its slide further, falling below $74/barrel by June 25 — its lowest level since late February and roughly 40% below its wartime peak — as Hormuz tanker traffic increased and the IEA estimated UAE crude exports had recovered to nearly 85% of pre-war levels. Also on June 24, Energy Secretary Chris Wright told a New York conference that US naval escorts through Omani waters had ended Iran's ability to close the Strait of Hormuz going forward, citing 72 ships carrying 19 million barrels of oil that transited the Strait in the prior 24 hours. On June 25, however, Iran's IRGC Navy rejected the new corridor as 'unacceptable,' warning vessels must use only Iran-approved routes and coordinate via Channel 16 or face 'enforcement measures' — reasserting Tehran's contested claim over the strait and clouding the durability of the oil-price decline. On June 26, Trump accused Iran of a 'foolish violation' of the ceasefire after Iranian forces fired four one-way attack drones at vessels transiting the Strait of Hormuz; one struck the Singapore-flagged, Evergreen Marine-operated container ship Ever Lovely 3.6 nautical miles southeast of Khawr Naiwah, Oman, damaging its bridge and starboard side without casualties, while US forces shot down the other three — a day after a record 70-78 vessels transited the Strait — prompting the IMO to pause its evacuation operations for the 11,000+ stranded seafarers and dealing a fresh blow to the fragile US-Iran ceasefire framework. Hours later, US Central Command struck Iranian missile and drone storage depots and coastal radar installations in retaliation; on June 27, Iran's IRGC Navy said it had struck US military targets in the region in response, with a Khatam al-Anbiya Central Headquarters spokesman calling the response 'unprecedented' — the most direct US-Iran exchange of fire since the ceasefire MoU was signed, with oil markets watching closely for renewed upside risk to Brent crude after its slide to multi-month lows. The IRGC's June 27 response struck Al Udeid Air Base (Qatar), Ali Al Salem Air Base (Kuwait), Al Dhafra Air Base (UAE), and the US Fifth Fleet headquarters in Bahrain — with no casualties reported at Al Udeid — and Iran again declared the Strait of Hormuz closed; despite the escalation, Brent crude extended its slide to ~$72/barrel by June 26, its lowest since February 27 and an over 10% weekly drop (the largest in a month), as Hormuz transits recovered to roughly 75% of prewar levels and Saudi Arabia resumed loading tankers at its Ras Tanura terminal. On June 28, following a fresh US strike on Iranian coastal positions, Iran's IRGC carried out a 'joint missile and drone operation' before dawn, striking Ali Al Salem Air Base in Kuwait and the US Fifth Fleet headquarters in Bahrain and claiming to have destroyed eight US military facilities; no US casualties or independently confirmed damage were reported, and the IRGC warned that further such exchanges would halt diplomatic processes entirely, clouding the outlook for a durable de-escalation in oil markets. On June 29, CBS News reported Iran had reiterated that 'complete halt' threat, though a Washington official said talks would continue; hours later the US and Iran agreed to halt the renewed round of hostilities, and VP Vance travelled to Switzerland for fresh high-level talks to clarify ceasefire terms — Brent crude rose 0.9% to ~$72.20/barrel and WTI climbed 1.3% to ~$70.09/barrel on the news. Separately on June 29, Trump announced via social media that the US and Iran would hold fresh talks in Doha, Qatar on June 30 after Tehran 'requested' the meeting, though a senior Iranian official disputed that any technical-team session was actually scheduled, leaving markets uncertain about the next concrete step even as Brent held in the low-$70s. On June 30, US special envoy Steve Witkoff and Jared Kushner arrived in Doha for technical talks with Qatari and Pakistani mediators on Hormuz shipping management and ceasefire implementation, with Iranian officials participating separately through intermediaries — Iran's Foreign Ministry confirmed indirect dialogue but ruled out direct US-Iran contact — leaving Brent crude in the low-$70s as markets awaited signs the fractured framework can hold." },

  156: { name:"China", gdp:20700, gdpPerCap:14700, growth:4.4, debt:86.8, tradeBalance:1190,
    exports:["Electronics","Machinery","EVs","Steel","Chemicals","Solar Equipment"],
    partners:["ASEAN","EU","United States","Japan","South Korea"],
    sanctions:false,
    summary:"World's second-largest economy facing a prolonged property sector correction and US tariff escalation. Growth is forecast at 4.4% for 2026 (IMF April 2026 WEO), supported by lower effective US tariff rates on Chinese goods, domestic stimulus, and strong manufacturing exports — particularly EVs and clean energy equipment. De-risking by Western multinationals continues to redirect some supply chains." },

  392: { name:"Japan", gdp:4460, gdpPerCap:36000, growth:0.8, debt:257.0, tradeBalance:-42,
    exports:["Vehicles","Machinery","Electronics","Precision Instruments","Chemicals"],
    partners:["United States","China","South Korea","Australia","EU"],
    sanctions:false,
    summary:"Highly developed economy under PM Sanae Takaichi (Japan's first female PM, since October 2025), who launched a ¥13.9 trillion stimulus package. The IMF April 2026 WEO revised Japan's growth to 0.8% (down from 1.1% in January), citing weaker external demand and the energy price shock from the Middle East conflict. The Bank of Japan has gradually raised rates from negative territory; yen weakness has boosted export earnings. Demographic contraction and record public debt remain long-term structural challenges." },

  276: { name:"Germany", gdp:5050, gdpPerCap:60200, growth:0.8, debt:63.5, tradeBalance:268,
    exports:["Vehicles","Machinery","Chemicals","Pharmaceuticals","Electronics"],
    partners:["United States","France","Netherlands","China","Italy"],
    sanctions:false,
    summary:"Europe's largest economy, recovering from a two-year contraction. The new CDU-led government that won the February 2025 election reformed the constitutional debt brake to unlock a €500B defence and infrastructure fund. Automotive sector restructuring continues as EV adoption accelerates. The IMF April 2026 WEO cut German growth to 0.8% (from 1.1%), reflecting the Iran war energy price shock, US tariff headwinds on key export industries, and continued weakness in industrial orders." },

  356: { name:"India", gdp:4500, gdpPerCap:3130, growth:6.5, debt:82.5, tradeBalance:-250,
    exports:["Petroleum Products","Pharmaceuticals","IT Services","Textiles","Machinery"],
    partners:["United States","UAE","China","Saudi Arabia","EU"],
    sanctions:false,
    summary:"World's third-largest economy by nominal GDP and its fastest-growing major economy. A young workforce, digital public infrastructure (UPI, ONDC), and manufacturing diversification underpin strong growth. India is attracting significant supply-chain relocation from China in electronics and pharmaceuticals. The April 22, 2025 Pahalgam terrorist attack (26 civilians killed) triggered Operation Sindoor — India's missile and aerial strikes into Pakistan-administered Kashmir and Pakistani Punjab — followed by a US-mediated ceasefire on May 10, 2025. Bilateral trade, airspace, and visas remain suspended; the Indus Waters Treaty is in abeyance. The confrontation caused short-term market volatility but has not derailed India's structural growth trajectory." },

  826: { name:"United Kingdom", gdp:3430, gdpPerCap:49500, growth:0.8, debt:100.5, tradeBalance:-185,
    exports:["Financial Services","Pharmaceuticals","Machinery","Vehicles","Aerospace"],
    partners:["United States","EU","China","India","UAE"],
    sanctions:false,
    summary:"Highly service-driven economy anchored by London's global financial centre. The Labour government that took office in 2024 has focused on fiscal consolidation and public investment. A partial trade reset with the EU has reduced some post-Brexit friction. The IMF April 2026 WEO cut UK growth to 0.8% — the steepest G7 downgrade — citing heavy exposure to the Iran war energy shock through oil and gas imports and financial market sensitivity to Middle East disruption. PM Keir Starmer announced his resignation on June 22, 2026 amid falling poll numbers — the sixth UK PM to resign outside Downing Street in seven years — with Labour leadership nominations opening July 9; former Manchester Mayor Andy Burnham is the widely expected successor, with his appointment anticipated around July 18–19." },

  250: { name:"France", gdp:3150, gdpPerCap:47800, growth:0.9, debt:115.8, tradeBalance:-105,
    exports:["Aerospace","Pharmaceuticals","Luxury Goods","Vehicles","Agriculture"],
    partners:["Germany","United States","Italy","Belgium","Spain"],
    sanctions:false,
    summary:"Diversified economy with world-leading aerospace (Airbus), luxury, and agriculture sectors. Political fragmentation following the 2024 snap elections has complicated fiscal consolidation, keeping the deficit above EU treaty limits. The defence sector has expanded amid increased NATO commitments." },

  380: { name:"Italy", gdp:2310, gdpPerCap:39200, growth:0.5, debt:139.8, tradeBalance:57,
    exports:["Machinery","Vehicles","Pharmaceuticals","Fashion & Textiles","Food & Wine"],
    partners:["Germany","France","United States","Spain","Switzerland"],
    sanctions:false,
    summary:"Third-largest eurozone economy with chronic high debt. The Meloni government has managed fiscal pressures while maintaining EU relationships and accessing Next Generation EU funds. Italy has emerged as a key hub for transatlantic energy infrastructure following reduced Russian gas flows. The IMF April 2026 WEO cut Italy's 2026 growth to 0.5% (from 0.8%), reflecting high energy price sensitivity — Italy lacks domestic hydrocarbon resources and relies heavily on gas and oil imports disrupted by the Iran-Hormuz crisis." },

  76:  { name:"Brazil", gdp:2280, gdpPerCap:10500, growth:1.9, debt:91.0, tradeBalance:110,
    exports:["Soybeans","Iron Ore","Petroleum","Poultry","Sugar","Vehicles"],
    partners:["China","United States","Argentina","Netherlands","EU"],
    sanctions:false,
    summary:"South America's largest economy benefiting from strong commodity exports. Growth is projected at 1.9% for 2026 (IMF April 2026 WEO) — Brazil is a net energy exporter and the Iran-war oil price shock provides a modest positive boost (~0.2pp). The Lula government's fiscal framework has faced credibility challenges; the central bank raised rates significantly to anchor inflation expectations. Brazil's commodity wealth and BRICS role give it strategic leverage." },

  124: { name:"Canada", gdp:2290, gdpPerCap:57500, growth:1.5, debt:107.5, tradeBalance:22,
    exports:["Petroleum","Vehicles","Gold","Wheat","Machinery","Lumber"],
    partners:["United States","China","Mexico","Japan","UK"],
    sanctions:false,
    summary:"Resource-rich economy facing pressure from US tariffs on steel, aluminium, and autos under the Trump trade policy. Canada has responded with retaliatory measures while seeking USMCA renegotiation. Energy exports to Asia are growing as pipelines to the Pacific come online." },

  643: { name:"Russia", gdp:2250, gdpPerCap:15500, growth:1.1, debt:18.0, tradeBalance:180,
    exports:["Petroleum","Natural Gas","Metals","Wheat","Chemicals","Arms"],
    partners:["China","India","Turkey","Iran","Kazakhstan"],
    sanctions:true,
    summary:"War-economy operating under extensive Western sanctions. Inflation has been persistent and the central bank holds rates above 20%. Trade has been fully reoriented toward China, India, and the Global South. A US-brokered 72-hour ceasefire (May 9–11) was agreed but largely violated by both sides; Putin's Victory Day declaration that the war is 'coming to an end' and his offer of direct talks with Zelenskyy signal possible momentum toward negotiation, though formal peace talks remain stalled. Long-term capital and talent flight is eroding productive capacity." },

  410: { name:"South Korea", gdp:1870, gdpPerCap:36400, growth:1.9, debt:55.8, tradeBalance:45,
    exports:["Semiconductors","Vehicles","Ships","Petrochemicals","Electronics"],
    partners:["China","United States","Vietnam","Japan","Australia"],
    sanctions:false,
    summary:"Highly export-dependent economy that navigated a political crisis following President Yoon's brief martial law declaration in late 2024. Recovery in semiconductor markets, led by AI chip demand, has boosted exports. Samsung and SK Hynix are major beneficiaries of HBM memory demand." },

  484: { name:"Mexico", gdp:1590, gdpPerCap:11900, growth:1.5, debt:48.2, tradeBalance:-12,
    exports:["Vehicles","Electronics","Machinery","Petroleum","Agricultural Products"],
    partners:["United States","Canada","China","Germany","Japan"],
    sanctions:false,
    summary:"Manufacturing hub facing significant headwinds from US tariff policy. The Sheinbaum government has pushed judicial reforms while managing nearshoring investment momentum. US tariffs on Mexican goods under the USMCA renegotiation have added uncertainty, though Mexico's integrated supply chains with the US create mutual dependency." },

  36:  { name:"Australia", gdp:1900, gdpPerCap:69000, growth:2.0, debt:48.0, tradeBalance:125,
    exports:["Iron Ore","Coal","Gold","Natural Gas","Agriculture","Education"],
    partners:["China","Japan","South Korea","United States","UK"],
    sanctions:false,
    summary:"Resource-driven economy with a large services sector. China remains the dominant trading partner despite strategic tensions; a partial trade rapprochement restored some commodity flows. Strong immigration has supported labour supply and GDP growth above OECD peers. Critical minerals strategy is attracting US and Japanese investment." },

  724: { name:"Spain", gdp:1730, gdpPerCap:35700, growth:2.1, debt:106.0, tradeBalance:-34,
    exports:["Vehicles","Machinery","Food & Beverages","Pharmaceuticals","Tourism"],
    partners:["France","Germany","Portugal","Italy","United States"],
    sanctions:false,
    summary:"One of the eurozone's strongest growth performers, boosted by record tourism revenues and resilient domestic consumption. Spain has emerged as a leading destination for data centres and renewable energy investment. Persistent housing affordability issues and regional political tensions remain challenges." },

  360: { name:"Indonesia", gdp:1510, gdpPerCap:5390, growth:5.0, debt:40.5, tradeBalance:40,
    exports:["Palm Oil","Coal","Natural Gas","Nickel","Rubber","Textiles"],
    partners:["China","United States","Japan","India","Singapore"],
    sanctions:false,
    summary:"Southeast Asia's largest economy with robust growth momentum. The Prabowo government, inaugurated in October 2024, has continued the downstream industrial policy — restricting raw nickel exports to force value-added processing. Indonesia is positioning as an essential player in global EV battery supply chains." },

  528: { name:"Netherlands", gdp:1230, gdpPerCap:69500, growth:1.6, debt:47.0, tradeBalance:97,
    exports:["Machinery","Chemicals","Petroleum Products","Agriculture","High-tech Equipment"],
    partners:["Germany","Belgium","UK","France","United States"],
    sanctions:false,
    summary:"Gateway economy to Europe and home to ASML, the world's sole manufacturer of extreme ultraviolet (EUV) chip lithography machines. Dutch export controls on ASML equipment to China have become a flashpoint in US-China tech competition. Rotterdam handles over a third of all EU maritime trade." },

  792: { name:"Turkey", gdp:1380, gdpPerCap:16100, growth:3.4, debt:30.5, tradeBalance:-78,
    exports:["Vehicles","Machinery","Textiles","Steel","Electronics","Food"],
    partners:["Germany","Russia","China","United States","Iraq"],
    sanctions:false,
    summary:"Emerging market that has pivoted back to orthodox monetary policy after 2023–24 rate hikes tamed inflation from its 85% peak. The IMF April 2026 WEO cut Turkey's growth to 3.4% (from 4.2% in January), citing higher energy costs from the Middle East war shock and weaker-than-expected domestic momentum. Turkey continues to leverage its NATO membership and Black Sea gateway position as a geopolitical mediator between Russia and Ukraine." },

  682: { name:"Saudi Arabia", gdp:1220, gdpPerCap:33000, growth:3.1, debt:26.5, tradeBalance:185,
    exports:["Crude Oil","Refined Products","Petrochemicals","Plastics","Dates"],
    partners:["China","India","Japan","South Korea","United States"],
    sanctions:false,
    summary:"Economy diversifying under Vision 2030, though non-oil revenue targets remain challenging. ARAMCO dividends fund a massive sovereign investment programme. IMF April 2026 WEO cut Saudi growth to 3.1% (from 4.5%), citing the Strait of Hormuz disruption and regional conflict as key downside risks; Saudi Arabia's Red Sea export terminals (Yanbu) provide partial insulation from Hormuz closure. Giga-projects like NEOM continue; oil prices remain highly volatile — spiked to $126/barrel during peak Hormuz closure, briefly surging back near $126/barrel on April 30 as stalled nuclear negotiations raised doubts about Hormuz reopening; on June 14, the US-Iran ceasefire deal announcement caused Brent crude to fall ~4% to ~$83/barrel on expectations of imminent Hormuz reopening, with prices easing further to ~$80/barrel by June 17, the same day the first Iranian crude tankers in two months exited the Strait of Hormuz. On June 17, Trump signed the memorandum in person at Versailles following the G7 summit in Évian-les-Bains, with Iran's Pezeshkian co-signing remotely; Brent extended its slide to ~$79/barrel by June 18 — its lowest since early March — as markets anticipated the release of 100+ tankers stranded in the Gulf. The planned June 19 Bürgenstock implementation talks (mediated by Pakistan and Qatar) collapsed before they began — Pakistan's PM Sharif called off his trip once the MoU was already signed at Versailles, US VP Vance postponed his own travel citing logistics, and Iran's delegation suspended its departure over continued Israeli strikes in Lebanon — leaving implementation talks without a new date; commercial Hormuz transits remained at only 5-10% of pre-war levels as of June 18, limiting the near-term boost to Saudi non-Hormuz export routes via Red Sea terminals. Nonetheless, on June 18 three Saudi-flagged supertankers (Shaden, Jaham, and a third vessel) carrying roughly 6 million barrels crossed the Strait — the first Saudi-owned tankers to do so since the war began — an early sign that some Gulf shippers are cautiously resuming Hormuz transits. The recovery gained further ground on June 17-18: JMIC/UKMTO downgraded the regional maritime threat level to 'substantial' from 'severe,' and at least 25 vessels (~20 tankers, ~10 million barrels) transited the Strait on June 18 — the busiest day in weeks, though still far below the 100+ pre-war daily average. Renewed Israel-Hezbollah fighting in Lebanon on June 20 — Hezbollah fired 50+ projectiles overnight and Israeli strikes killed at least 32 — is a reminder that the broader ceasefire underpinning this recovery remains fragile. Hours later that same day, Iran's Khatam al-Anbiya Central Headquarters announced it was closing the Strait to commercial traffic again over the Lebanon strikes, directly threatening Saudi Arabia's tentative tanker-crossing recovery (including the June 18 Shaden/Jaham crossings); Iran's Foreign Ministry denied any closure was in effect and US VP Vance publicly disputed the claim, while Iran's delegation was still reported heading to Switzerland for talks. On June 21, US Central Command rebutted Iran's closure claim, reporting that 55 merchant ships carrying more than 17 million barrels of oil transited the Strait on June 20 alone, and Trump threatened to impose US tolls on Hormuz transit — framed as payment for America's 'Guardian Angel' role in the region — if a final US-Iran deal is not reached within the 60-day ceasefire window, leaving the durability of the Hormuz reopening, and Saudi non-Hormuz routing needs, deeply uncertain. The uncertainty deepened hours later when Trump threatened on Truth Social to 'hit Iran very hard again' over Lebanon and Ghalibaf countered that Iran's 'armed forces are ready to respond,' even as VP Vance — joined by special envoy Steve Witkoff and Jared Kushner at Bürgenstock — claimed Hormuz reopening and Iran's nuclear file had 'already been accomplished'; the contradiction leaves Saudi planners unable to bank on a swift return to full Hormuz volumes. On June 22, the US and Iran agreed on a 60-day roadmap toward a final deal and a Lebanon 'deconfliction cell' to enforce the ceasefire, mediated by Qatar and Pakistan, alongside a new High Level Committee to oversee the roadmap's implementation — modest diplomatic steps that put Saudi Arabia's tentative Hormuz tanker-crossing recovery on slightly firmer footing. The same day, the US Treasury issued a 60-day license authorising Iranian oil sales (expiring August 21), a sanctions-relief move Iran's FM Araghchi called 'major progress.' Even so, maritime tracker Windward reported Hormuz shipping stalling over the weekend (12 vessels Sunday versus 21+ Saturday) — disputed by Lloyd's List, which said transits continued — leaving the durability of Saudi Arabia's Red Sea-to-Hormuz routing recovery uncertain as Brent crude slid further to ~$74.3/barrel, its lowest since early March. On June 23, Trump announced he had agreed to let the Strait of Hormuz remain open with no further US naval blockade, citing Iran's claimed agreement on nuclear inspections — a claim Iran's Foreign Ministry disputed — putting Saudi Arabia's Hormuz routing on firmer, though still unconfirmed, footing as Brent crude traded back up to around $77/barrel. On June 24, however, Brent resumed its slide, falling 1.7% to ~$75.81/barrel — its lowest level since February 27, the day before the war began — as the gradual Hormuz reopening and the US Treasury's 60-day Iranian oil-sales license eased supply concerns. The slide continued as Oman, with the IMO, announced a temporary fee-free Hormuz transit corridor on June 24 to evacuate stranded seafarers and restore freedom of navigation, pushing Brent below $74/barrel by June 25 — its lowest since late February. Also on June 24, Energy Secretary Chris Wright said US naval escorts through Omani waters had ended Iran's ability to close the Strait of Hormuz going forward, citing 72 ships carrying 19 million barrels of oil that transited the Strait in the prior 24 hours — even as Iran's IRGC Navy rejected the corridor the same day as 'unacceptable' and warned of 'enforcement measures' against vessels bypassing Iranian coordination, leaving the durability of Saudi Arabia's Hormuz-dependent export recovery contested. On June 26, an Iranian drone strike on the Singapore-flagged vessel Ever Lovely near Khawr Naiwah, Oman — a day after a record 70-78 ships transited the Strait — prompted the IMO to pause its seafarer-evacuation operations, underscoring the fragility of the Hormuz recovery underpinning Saudi Arabia's Red Sea-to-Hormuz routing. Hours later, US Central Command struck Iranian missile and drone storage sites in retaliation, and on June 27 Iran's IRGC Navy struck US military targets in the region in response — the most direct US-Iran exchange since the ceasefire MoU, a fresh shock that directly threatens Saudi Arabia's tentative Hormuz-dependent export recovery. The IRGC's June 27 response struck US bases in Qatar, Kuwait, the UAE, and Bahrain, and Iran again declared the Strait closed; even so, Brent crude extended its slide to ~$72/barrel by June 26 — its lowest since February 27, an over 10% weekly drop and the largest in a month — as Hormuz transits recovered to roughly 75% of prewar levels and Saudi Arabia resumed loading tankers at its Ras Tanura terminal, a tentative sign markets are looking past the latest exchange of fire." },

  756: { name:"Switzerland", gdp:985, gdpPerCap:109000, growth:1.6, debt:37.5, tradeBalance:91,
    exports:["Pharmaceuticals","Chemicals","Watches","Financial Services","Machinery"],
    partners:["Germany","United States","UK","France","China"],
    sanctions:false,
    summary:"One of the world's wealthiest countries per capita and a global hub for private banking, pharmaceuticals, and precision manufacturing. The UBS-Credit Suisse merger, completed in 2023, created an even larger systemically important institution. Switzerland aligned with EU Russia sanctions but maintains its traditional neutrality." },

  616: { name:"Poland", gdp:920, gdpPerCap:24300, growth:3.5, debt:48.0, tradeBalance:10,
    exports:["Machinery","Vehicles","Electronics","Food","Furniture"],
    partners:["Germany","Czech Republic","France","UK","Netherlands"],
    sanctions:false,
    summary:"Central Europe's largest economy and the EU's most significant defence spender by share of GDP (~4%). The Tusk government reversed some of the previous administration's judicial changes, unblocking over €35B in EU recovery funds. Poland's strategic position as a NATO frontline state has driven unprecedented military investment." },

  32:  { name:"Argentina", gdp:680, gdpPerCap:14500, growth:3.5, debt:86.0, tradeBalance:22,
    exports:["Soybeans","Corn","Beef","Petroleum","Lithium"],
    partners:["Brazil","China","United States","Chile","EU"],
    sanctions:false,
    summary:"President Milei's radical libertarian programme has achieved fiscal balance after decades of deficits, at the cost of a severe 2024 recession. A gradual recovery is underway in 2026, with inflation falling from triple digits and the IMF providing a renewed programme. Currency controls have been progressively lifted." },

  56:  { name:"Belgium", gdp:660, gdpPerCap:55500, growth:1.3, debt:107.5, tradeBalance:18,
    exports:["Chemicals","Pharmaceuticals","Machinery","Food Products","Diamonds"],
    partners:["Germany","France","Netherlands","UK","United States"],
    sanctions:false,
    summary:"Small open economy hosting EU institutions and NATO headquarters in Brussels. Antwerp remains a global diamond trading and chemicals hub. High public debt and a complex federal structure constrain fiscal flexibility; a new federal coalition government is implementing gradual consolidation." },

  752: { name:"Sweden", gdp:650, gdpPerCap:60500, growth:1.7, debt:29.0, tradeBalance:28,
    exports:["Machinery","Vehicles","Pharmaceuticals","Steel","Paper","Technology"],
    partners:["Germany","United States","Norway","Denmark","Finland"],
    sanctions:false,
    summary:"Innovation-driven economy that joined NATO in March 2024, completing Nordic integration into the alliance. Defence spending is rising toward 3% of GDP. Low public debt provides fiscal space. Household debt remains elevated but the housing market has started to stabilise after sharp post-2022 price corrections." },

  578: { name:"Norway", gdp:590, gdpPerCap:106000, growth:2.2, debt:39.0, tradeBalance:195,
    exports:["Crude Oil","Natural Gas","Fish","Metals","Shipping Services"],
    partners:["Germany","UK","Netherlands","Sweden","France"],
    sanctions:false,
    summary:"Sovereign wealth fund (Government Pension Fund Global) has surpassed $1.9 trillion — the world's largest — benefiting from elevated energy prices. Norway is Europe's most important post-Russia gas supplier. Domestic economy is stable; electric vehicle adoption leads globally at over 90% of new car sales." },

  784: { name:"United Arab Emirates", gdp:570, gdpPerCap:54500, growth:4.5, debt:25.5, tradeBalance:100,
    exports:["Crude Oil","Refined Products","Gold","Machinery","Re-exports"],
    partners:["India","China","Saudi Arabia","Japan","United States"],
    sanctions:false,
    summary:"Rapidly diversified hub economy anchored by Dubai's finance, logistics, and tourism alongside Abu Dhabi's oil wealth. The UAE formally departed OPEC on May 1, 2026, ending six decades of membership as ADNOC pursues an independent production and pricing strategy. The UAE has attracted significant capital and talent flows amid global instability. Strong fintech, AI, and crypto sectors are emerging. The UAE plays an active role in regional diplomacy including Gaza ceasefire efforts. On May 4–5, 2026, Iran struck UAE territory with 15 ballistic missiles and 4 drones — the first Iranian attack on UAE soil — causing a fire at a Fujairah oil facility; UAE air defences intercepted most projectiles. The attack marks a significant new security risk to the hub economy and investor confidence." },

  372: { name:"Ireland", gdp:635, gdpPerCap:119000, growth:4.5, debt:41.0, tradeBalance:180,
    exports:["Pharmaceuticals","Medical Devices","Chemicals","Software","Finance"],
    partners:["United States","Belgium","Germany","UK","Netherlands"],
    sanctions:false,
    summary:"GDP figures remain distorted by US multinational profit-shifting; modified GNI* better captures domestic activity. A global minimum corporate tax rate (15%) agreed under OECD Pillar Two reduces Ireland's tax differential but has not triggered a major exodus of multinationals. Underlying economy is near full employment with a fiscal surplus." },

  702: { name:"Singapore", gdp:545, gdpPerCap:91000, growth:2.5, debt:133.5, tradeBalance:85,
    exports:["Electronics","Refined Petroleum","Chemicals","Machinery","Pharmaceuticals"],
    partners:["China","Malaysia","United States","Hong Kong","Indonesia"],
    sanctions:false,
    summary:"City-state and Asia's premier financial and logistics hub, navigating US-China decoupling tensions by maintaining strong links with both. A major beneficiary of wealth management flows from mainland China. Public debt is almost entirely domestic savings; state assets (Temasek, GIC) are substantial. AI and semiconductor research investment is expanding." },

  710: { name:"South Africa", gdp:408, gdpPerCap:6700, growth:1.4, debt:74.0, tradeBalance:14,
    exports:["Gold","Platinum","Coal","Iron Ore","Vehicles","Wine"],
    partners:["China","United States","Germany","UK","India"],
    sanctions:false,
    summary:"Most industrialised economy in Africa. The Government of National Unity formed after the 2024 election has made progress on electricity sector reform, reducing load-shedding from its peak. Growth is recovering but unemployment remains near 33%. South Africa chaired the G20 in 2025, but the US barred it from the 2026 G20 Miami summit — the bloc's first-ever exclusion of a member — and suspended aid after President Trump cited disputed claims of Afrikaner persecution; South Africa has rejected the allegations and skipped subsequent G20 sherpa meetings in protest." },

  818: { name:"Egypt", gdp:450, gdpPerCap:4100, growth:4.2, debt:91.5, tradeBalance:-28,
    exports:["Petroleum Products","Natural Gas","Gold","Textiles","Agriculture"],
    partners:["United States","UAE","Saudi Arabia","Italy","Turkey"],
    sanctions:false,
    summary:"Strategic location controlling the Suez Canal provides critical revenue, though Houthi Red Sea attacks in 2024–25 significantly disrupted canal traffic and revenues. The 2024 IMF deal and pound devaluation are enabling a gradual stabilisation. Gulf investment pledges, particularly from UAE, are supporting growth recovery." },

  566: { name:"Nigeria", gdp:415, gdpPerCap:1790, growth:3.3, debt:39.5, tradeBalance:12,
    exports:["Crude Oil","Natural Gas","Cocoa","Rubber","Sesame"],
    partners:["India","Spain","France","Netherlands","China"],
    sanctions:false,
    summary:"Africa's largest economy by GDP is regaining stability after the 2023 naira floatation and fuel subsidy removal caused a severe cost-of-living crisis. Inflation is gradually declining from its 2024 peaks. Dangote Refinery, Africa's largest, has begun operations, reducing Nigeria's costly petroleum product imports." },

  764: { name:"Thailand", gdp:545, gdpPerCap:7580, growth:3.0, debt:62.5, tradeBalance:36,
    exports:["Vehicles","Electronics","Machinery","Rubber","Agricultural Products"],
    partners:["United States","China","Japan","Vietnam","Australia"],
    sanctions:false,
    summary:"Upper-middle-income economy anchored by tourism, automotive manufacturing, and electronics. Tourism arrivals have fully recovered and surpassed pre-COVID levels. Thailand is positioning as an EV manufacturing hub in Southeast Asia, with BYD and several Chinese automakers establishing production facilities." },

  458: { name:"Malaysia", gdp:450, gdpPerCap:12900, growth:4.8, debt:63.5, tradeBalance:52,
    exports:["Electronics","Petroleum","Palm Oil","LNG","Chemicals"],
    partners:["China","Singapore","United States","Japan","Thailand"],
    sanctions:false,
    summary:"Export-oriented economy and key node in global semiconductor and electronics supply chains. US-China tech competition has benefited Malaysia as manufacturers diversify production; data centre investment is surging in Johor. The Madani government's industrial policy targets high-income status. Malaysia has been tactfully neutral in geopolitical rivalries." },

  608: { name:"Philippines", gdp:450, gdpPerCap:3830, growth:5.8, debt:60.5, tradeBalance:-62,
    exports:["Electronics","Copper","Petroleum Products","Fruits","Services (BPO)"],
    partners:["United States","Japan","China","Hong Kong","Singapore"],
    sanctions:false,
    summary:"Resilient consumption-driven economy with strong remittance inflows. US security relationship has deepened under Marcos Jr., with new military base access agreements; this has attracted US investment but raised tensions with China over South China Sea disputes. BPO sector faces modest headwinds from AI automation." },

  704: { name:"Vietnam", gdp:490, gdpPerCap:4880, growth:6.2, debt:33.5, tradeBalance:32,
    exports:["Electronics","Garments","Footwear","Machinery","Seafood"],
    partners:["United States","China","South Korea","Japan","EU"],
    sanctions:false,
    summary:"One of Asia's fastest-growing economies and the largest beneficiary of supply-chain diversification from China. Samsung, Apple suppliers, and Intel have major Vietnam operations. The country has achieved upper-middle-income status and is upgrading into higher-value semiconductor assembly and testing. US trade relations remain a priority." },

  170: { name:"Colombia", gdp:375, gdpPerCap:7200, growth:2.3, debt:54.5, tradeBalance:-8,
    exports:["Petroleum","Coal","Coffee","Flowers","Gold"],
    partners:["United States","Panama","China","Ecuador","Mexico"],
    sanctions:false,
    summary:"Upper-middle-income economy with a growing services sector and improving security situation. President Petro's left-wing government has sought to reduce fossil fuel extraction, creating investment uncertainty for oil and coal sectors. Colombia's biodiversity and proximity to US markets position it well for nearshoring in some sectors. Right-wing outsider Abelardo de la Espriella won the June 21, 2026 presidential runoff by under 250,000 votes — the narrowest margin in Colombian history — and is set to take office August 7, 2026; markets are watching for a reversal of Petro-era restrictions on oil and coal extraction." },

  152: { name:"Chile", gdp:345, gdpPerCap:17200, growth:2.5, debt:37.0, tradeBalance:23,
    exports:["Copper","Lithium","Fruit","Fish Meal","Cellulose"],
    partners:["China","United States","Japan","South Korea","Brazil"],
    sanctions:false,
    summary:"South America's most stable economy and a critical supplier of copper and lithium for the global energy transition. Lithium nationalisation proposals have been moderated; the government is pursuing state partnership models. Global EV-driven demand for Chilean lithium gives the country long-term strategic importance." },

  604: { name:"Peru", gdp:290, gdpPerCap:8380, growth:2.8, debt:33.0, tradeBalance:10,
    exports:["Copper","Gold","Lead","Zinc","Natural Gas","Agriculture"],
    partners:["China","United States","Canada","EU","Brazil"],
    sanctions:false,
    summary:"Mining-dependent economy that has maintained growth despite political instability — multiple presidential crises since 2021. Copper and lithium production continues to expand, underpinning export revenues. Infrastructure investment, including the Chancay port (Chinese-funded), is reshaping regional logistics." },

  203: { name:"Czech Republic", gdp:375, gdpPerCap:34800, growth:2.2, debt:42.5, tradeBalance:18,
    exports:["Vehicles","Machinery","Electronics","Metals","Pharmaceuticals"],
    partners:["Germany","Slovakia","Austria","France","Poland"],
    sanctions:false,
    summary:"Central European manufacturing hub deeply integrated into German value chains. The economy is navigating the automotive EV transition: Skoda is accelerating electrification, though adjustment costs are significant. Defence spending has risen sharply in response to the Ukraine war, exceeding NATO targets." },

  348: { name:"Hungary", gdp:248, gdpPerCap:25600, growth:2.8, debt:72.0, tradeBalance:10,
    exports:["Machinery","Vehicles","Electronics","Chemicals","Agricultural Products"],
    partners:["Germany","Austria","Slovakia","Romania","Italy"],
    sanctions:false,
    summary:"Export-oriented economy that has attracted the largest per-capita Chinese EV and battery investment in the EU (CATL, BYD, Huawei). Tisza Party's landslide April 12, 2026 election victory (141/199 seats) ends Orbán's 16-year rule; PM Péter Magyar (sworn in May 9, 2026) is moving to unblock EU cohesion funds withheld over rule-of-law disputes and restore judicial independence, improving the medium-term fiscal and investment outlook." },

  642: { name:"Romania", gdp:395, gdpPerCap:20800, growth:3.0, debt:51.5, tradeBalance:-22,
    exports:["Vehicles","Machinery","Electronics","Agriculture","Software"],
    partners:["Germany","Italy","France","Hungary","Bulgaria"],
    sanctions:false,
    summary:"Largest economy in south-east Europe with a thriving IT sector and growing defence industry. Romania has emerged as one of the EU's most active supporters of Ukraine, hosting significant NATO military infrastructure. Fiscal consolidation is required after years of deficits exceeding EU treaty limits." },

  300: { name:"Greece", gdp:268, gdpPerCap:25200, growth:2.0, debt:160.5, tradeBalance:-22,
    exports:["Petroleum Products","Aluminium","Pharmaceuticals","Olive Oil","Tourism"],
    partners:["Italy","Germany","Turkey","Cyprus","United States"],
    sanctions:false,
    summary:"Economy continuing its post-crisis recovery, with investment-grade ratings restored. Tourism remains the engine of growth, with record arrivals. The Mitsotakis government has pursued business-friendly reforms and regional energy infrastructure investment. Public debt is declining as a share of GDP but remains the highest in the EU." },

  620: { name:"Portugal", gdp:310, gdpPerCap:29800, growth:2.5, debt:95.5, tradeBalance:-14,
    exports:["Vehicles","Machinery","Footwear","Wine","Petroleum Products","Tourism"],
    partners:["Spain","Germany","France","United States","Netherlands"],
    sanctions:false,
    summary:"Steady growth driven by tourism, technology investment, and renewable energy exports. Lisbon has established itself as a European tech hub and startup ecosystem. Public debt is declining toward pre-crisis levels. A significant influx of digital nomads and remote workers has boosted services but strained housing markets." },

  208: { name:"Denmark", gdp:445, gdpPerCap:74500, growth:2.3, debt:27.5, tradeBalance:49,
    exports:["Machinery","Pharmaceuticals","Food","Shipping","Wind Energy"],
    partners:["Germany","Sweden","United States","Norway","UK"],
    sanctions:false,
    summary:"Highly competitive economy with world-class pharmaceutical (Novo Nordisk's GLP-1 obesity drugs reshaping global healthcare) and clean-energy sectors. Novo Nordisk's market cap has at times exceeded the entire Danish GDP. Denmark has raised defence spending significantly amid concerns about Arctic security." },

  246: { name:"Finland", gdp:318, gdpPerCap:57200, growth:1.3, debt:73.5, tradeBalance:5,
    exports:["Machinery","Metals","Paper","Chemicals","Technology"],
    partners:["Germany","Sweden","United States","Netherlands","China"],
    sanctions:false,
    summary:"Nordic economy that joined NATO in April 2023, completing Finland's historic security realignment. Defence spending has surged to ~2.3% of GDP. GDP contracted in 2024 due to weak demand and high rates, but recovery is underway. Nokia is reinvesting in 5G/6G network leadership and has restructured for profitability." },

  40:  { name:"Austria", gdp:565, gdpPerCap:62500, growth:1.5, debt:72.5, tradeBalance:19,
    exports:["Machinery","Vehicles","Pharmaceuticals","Steel","Tourism"],
    partners:["Germany","Italy","United States","Switzerland","France"],
    sanctions:false,
    summary:"German-language economy recovering from energy-cost headwinds following Russia's invasion of Ukraine. Vienna remains a hub for international organisations and a gateway to Central and Eastern Europe. The economy is diversifying into tourism and services while defending its strong industrial base." },

  442: { name:"Luxembourg", gdp:95, gdpPerCap:144000, growth:1.8, debt:24.5, tradeBalance:6,
    exports:["Financial Services","Steel","Chemicals","Rubber Products"],
    partners:["Germany","France","Belgium","Netherlands","United States"],
    sanctions:false,
    summary:"Highest GDP per capita in the EU, driven by a dominant financial sector managing over €5 trillion in investment fund assets. A major EU institutional hub. Global minimum corporate tax reform slightly erodes Luxembourg's competitive advantage, but its legal and financial infrastructure remains formidable." },

  586: { name:"Pakistan", gdp:385, gdpPerCap:1650, growth:3.5, debt:72.0, tradeBalance:-24,
    exports:["Textiles","Garments","Rice","Leather","Chemicals"],
    partners:["China","United States","United Arab Emirates","United Kingdom","Afghanistan"],
    sanctions:false,
    summary:"Economy stabilising after a severe balance-of-payments crisis that required an emergency IMF bailout in 2023. Inflation is declining from its 2023 peak above 35%. CPEC infrastructure remains Pakistan's flagship connectivity project. Political instability continues with former PM Imran Khan imprisoned since 2023. The May 2025 military confrontation with India (Operation Sindoor, following the Pahalgam attack) was ended by a US-mediated ceasefire on May 10, 2025, but India's subsequent suspension of the Indus Waters Treaty, closure of the Attari-Wagah border, and ban on bilateral trade have imposed ongoing economic costs. Heightened military expenditure and the trade ban complicate Pakistan's adherence to IMF programme targets, raising concerns over future disbursements." },

  50:  { name:"Bangladesh", gdp:520, gdpPerCap:3080, growth:6.2, debt:37.5, tradeBalance:-17,
    exports:["Ready-Made Garments","Knitwear","Jute","Leather","Pharmaceuticals"],
    partners:["United States","EU","India","China","Canada"],
    sanctions:false,
    summary:"Remarkable development story built on garment exports. Following the 2024 student-led ouster of Sheikh Hasina and an 18-month Yunus-led interim administration, the BNP's Tarique Rahman was sworn in as Prime Minister on February 17, 2026 after a landslide election win. His government has set a goal of a $1 trillion economy by 2034 and launched a 600 billion BDT incentive package to revive closed factories, but faces ~30% non-performing loans and Bangladesh's looming graduation from LDC status (November 2026), which will strip away key tariff concessions for exporters. The world's second-largest apparel exporter continues to grow, now targeting higher-value manufacturing." },

  368: { name:"Iraq", gdp:298, gdpPerCap:6750, growth:3.8, debt:47.5, tradeBalance:28,
    exports:["Crude Oil","Natural Gas","Dates","Sulphur"],
    partners:["China","India","Turkey","South Korea","Italy"],
    sanctions:false,
    summary:"Oil-dependent economy where petroleum accounts for over 90% of revenues. Oil production has expanded, boosting revenues. Iraq has pursued a hedging strategy, maintaining ties with both Iran and the United States. Corruption and political gridlock remain key constraints on non-oil growth. On June 25, 2026, Iraq threatened to leave OPEC if the group did not raise its production quota to match its output capacity, citing financial strain from the Iran war; Iraq's oil ministry said later the same day this did not reflect official government policy, though it continues pressing for a quota review. An Iraqi exit would cut OPEC's total capacity by roughly 17% (Bloomberg) and would follow the UAE's similar departure on May 1, 2026." },

  887: { name:"Yemen", gdp:22, gdpPerCap:660, growth:-0.5, debt:79.0, tradeBalance:-4,
    exports:["Crude Oil","Coffee","Dried Fruits","Fish"],
    partners:["China","UAE","Saudi Arabia","India","Somalia"],
    sanctions:false,
    summary:"Devastated by a decade of civil war. Houthi Red Sea attacks on shipping (launched in late 2023 in solidarity with Gaza) caused massive disruption to global trade routes through the Suez Canal and earned US/UK retaliatory strikes. A fragile truce has held intermittently; reconstruction remains a distant prospect." },

  231: { name:"Ethiopia", gdp:178, gdpPerCap:1400, growth:7.2, debt:28.5, tradeBalance:-7,
    exports:["Coffee","Gold","Cut Flowers","Oil Seeds","Khat"],
    partners:["China","Somalia","Saudi Arabia","Germany","United States"],
    sanctions:false,
    summary:"Africa's second most populous nation recovering from the devastating Tigray conflict (2020–2022). Debt restructuring under the G20 Common Framework has been completed, restoring IMF access. Ethiopia's capital Addis Ababa hosts the African Union and is positioning as a continental diplomatic and economic hub." },

  404: { name:"Kenya", gdp:133, gdpPerCap:2340, growth:5.5, debt:70.0, tradeBalance:-10,
    exports:["Tea","Flowers","Coffee","Petroleum Products","Vegetables"],
    partners:["Uganda","Netherlands","Pakistan","UK","United States"],
    sanctions:false,
    summary:"East Africa's largest economy and regional fintech hub. Deadly anti-government protests in June 2024 forced President Ruto to withdraw a finance bill and reshuffle the cabinet. Economic growth has resumed; M-Pesa and Nairobi's tech ecosystem remain regional benchmarks." },

  504: { name:"Morocco", gdp:165, gdpPerCap:4330, growth:3.8, debt:67.0, tradeBalance:-15,
    exports:["Phosphates","Agriculture","Automobiles","Textiles","Electronics"],
    partners:["Spain","France","India","United States","Brazil"],
    sanctions:false,
    summary:"North Africa's most dynamic economy, now co-hosting the 2030 FIFA World Cup. European supply-chain nearshoring — particularly in auto manufacturing (Renault, Stellantis) and electronics — is expanding. Morocco's massive phosphate reserves and growing renewable energy capacity underpin long-term strategic relevance." },

  12:  { name:"Algeria", gdp:268, gdpPerCap:5700, growth:3.8, debt:58.0, tradeBalance:18,
    exports:["Crude Oil","Natural Gas","Petroleum Products","Agricultural Products"],
    partners:["Italy","France","Spain","Germany","Turkey"],
    sanctions:false,
    summary:"Hydrocarbon-dependent economy that has benefited from elevated post-Ukraine energy prices in Europe. Algeria has become Europe's second-largest gas supplier. Diversification remains a stated priority but has been slow; the state-dominated economy maintains large subsidies that constrain fiscal space." },

  788: { name:"Tunisia", gdp:50, gdpPerCap:4000, growth:1.0, debt:82.0, tradeBalance:-12,
    exports:["Clothing","Phosphate Products","Electronics","Olive Oil","Dates"],
    partners:["France","Italy","Germany","Spain","UK"],
    sanctions:false,
    summary:"Economy stagnating under President Saied's increasingly authoritarian rule following his 2021 constitutional coup. IMF negotiations have repeatedly stalled over reform conditionality. Youth unemployment and emigration are chronic; Tunisia remains one of the largest sources of irregular migration to Europe." },

  862: { name:"Venezuela", gdp:120, gdpPerCap:4300, growth:4.5, debt:155.0, tradeBalance:18,
    exports:["Petroleum","Gold","Bauxite","Agricultural Products"],
    partners:["China","Cuba","Russia","Turkey","Colombia"],
    sanctions:true,
    summary:"In January 2026, the US captured Nicolás Maduro; Acting President Delcy Rodríguez assumed power. The US lifted sanctions on Rodríguez on April 2, 2026 and authorised PDVSA to sell Venezuelan oil directly to US companies — the first significant US sanctions relief in years and a potential structural shift for the oil sector. Partial dollarisation continues; hyperinflation has moderated but underlying economic dysfunction persists. On June 24, 2026, back-to-back magnitude 7.2/7.5 earthquakes near Caracas — Venezuela's strongest since 1900 — damaged or destroyed roughly 250 buildings; Health Minister Carlos Alvarado put the toll at 235 dead on June 26, but National Assembly President Jorge Rodríguez gave a sharply higher count later that day — at least 920 dead and 3,360 injured, with ~200 still trapped — adding major reconstruction costs and short-term economic disruption atop the fragile post-Maduro transition. USGS post-quake hazard modelling put the probability of an eventual death toll above 10,000 at 44%, with economic losses estimated in the billions to tens of billions of dollars, underscoring substantial downside risk to near-term growth and reconstruction financing needs. On June 26, the US pledged $150 million in earthquake aid — $100 million to a UN humanitarian fund for Venezuela and $50 million to aid organizations already operating in the country — as USSOUTHCOM deployed naval and airlift assets and US urban search-and-rescue teams to support relief efforts. By June 27, Rodríguez raised the toll again to at least 1,430 dead and 3,238 injured, with 3,142 families left homeless and 430+ aftershocks recorded since the initial doublet. By June 28, the confirmed death toll had climbed further to at least 1,450 as search-and-rescue teams pushed on past the critical 72-hour survival window — a further escalation of the reconstruction burden facing the post-Maduro government. By June 29, the toll neared 1,500 with nearly 200 buildings fully collapsed and over 46,000 people still reported missing by families, and the US deployed 230 additional military personnel to help reopen a key seaport and expand airport capacity for relief and reconstruction logistics — deepening the near-term fiscal burden on the post-Maduro government. By June 30, the confirmed death toll climbed to 1,943 with 10,571 injured, per Venezuelan lawmaker Jorge Rodríguez, as rescuers continued operations well past the 72-hour survival window." },

  364: { name:"Iran", gdp:720, gdpPerCap:8000, growth:-6.1, debt:31.0, tradeBalance:26,
    exports:["Crude Oil","Petroleum Products","Petrochemicals","Pistachios","Carpets"],
    partners:["China","Iraq","Turkey","UAE","Russia"],
    sanctions:true,
    summary:"Economy under dual shock: Western sanctions and an active war with the US and Israel (Operation Epic Fury, since Feb 28, 2026). IMF April 2026 WEO cut Iran's 2026 growth to -6.1% (a -7.2pp revision). The IRGC closed the Strait of Hormuz, sending oil to $126/barrel; commercial shipping dropped 90%+. Islamabad permanent-deal talks broke down April 12 (JD Vance departed without a deal); Trump declared a US Navy blockade of Hormuz effective April 13. On April 21, Trump extended the ceasefire at Pakistan's request, though the blockade persists and Iran's oil exports remain effectively zero. Mojtaba Khamenei (elected Supreme Leader March 8) is an IRGC-aligned hardliner. On May 28, CNN reported a tentative agreement; however, by May 29–30, talks stalled as Trump added new demands (Hormuz, nuclear program, frozen assets) that were rejected by Tehran. Bloomberg (May 30) reported the US insists Hormuz transit deals are 'prohibited'; Iran reasserted Hormuz control; VP Vance confirmed MoU signing is 'TBD'. On June 1, Iranian state media reported talks suspended over Israel's Lebanon actions; Trump insisted June 2 that talks are ongoing and a deal is reachable 'over the next week.' Iran's oil exports remain at zero; the US port blockade continues. Around June 5–6, US and Iranian forces skirmished twice in the Strait of Hormuz; US-Iran strikes escalated through June 11 including 49 US Tomahawk missiles, Iran's complete Hormuz closure declaration, and IAEA's June 12 finding that Iran is in breach of non-proliferation obligations. On June 13, Pakistan's PM Sharif announced the US and Iran had agreed on the 'final' wording of a peace deal — a potential breakthrough toward formal ceasefire and Hormuz reopening. On June 14, the US and Iran formally announced a ceasefire agreement — the Islamabad Memorandum, to be signed at Bürgenstock, Switzerland on June 19 — including immediate cessation of hostilities on all fronts (including Lebanon), toll-free Hormuz navigation, Iran's indefinite nuclear weapons prohibition, and the lifting of the US naval blockade; oil prices fell to ~$83/barrel on the announcement. On June 17, ship-tracking data showed the first Iranian crude tankers since the blockade began — NITC supertankers Diona and Hero 2 plus a third vessel, carrying a combined ~4.8 million barrels — exit the Strait of Hormuz, an early concrete sign the blockade is unwinding two days ahead of the planned signing, even as the 60-day nuclear talks and the Lebanon dispute remain unresolved. Also on June 17, President Trump personally signed the memorandum at the Palace of Versailles following the G7 summit in Évian-les-Bains, with President Masoud Pezeshkian co-signing remotely for Iran; the IAEA Board of Governors met in June and urged Iran's continued cooperation as Director General Grossi briefed on verification activities, while Brent crude extended its decline to ~$79/barrel by June 18 — its lowest since early March — on expectations that the roughly 100+ tankers stranded in the Gulf will soon be released. If implemented, the deal would end the Iran war, allow oil exports to restart from near-zero, and open a path to sanctions relief and economic recovery. The planned June 19 Bürgenstock implementation talks collapsed before they began, as Pakistan's PM Sharif called off his trip, US VP Vance postponed his own travel citing logistics, and Iran's own delegation suspended its departure in protest at continued Israeli strikes in Lebanon, leaving implementation talks without a new date; resumption of Iran's oil exports remains gradual, with Strait of Hormuz commercial transits still running at only 5-10% of pre-war volume amid unresolved mine-clearance and insurance issues, though analysts project recovery toward roughly half of prewar shipping volumes within 30 days if implementation talks resume. On June 18, Supreme Leader Mojtaba Khamenei said he had authorised the MoU despite holding a 'different view,' citing assurances from President Pezeshkian on safeguarding Iran's rights; the same day, the deal's provision committing to a $300 billion Iran reconstruction and economic-development fund — envisioned as a privately financed vehicle backed by Gulf, Asian, and other partners rather than direct US government money, with its implementation mechanism left to the 60-day negotiation period — became a political flashpoint in Washington, with Trump calling reports of US funding 'fake news' and VP Vance saying the US 'isn't giving up a cent.' Separately, three Saudi-flagged supertankers (including the Shaden and Jaham) carrying a combined ~6 million barrels crossed the Strait of Hormuz on June 18 — the first Saudi-owned crossings since the war began. That same day, the Lebanon front flared again as Hezbollah killed 4 Israeli soldiers and Israeli retaliatory strikes killed at least 83 people and wounded 141 across Lebanon, per the Lebanese Health Ministry's final toll — the war's second-deadliest day; the US and Qatar brokered a renewed ceasefire effective 4pm local time on June 19, underscoring that the broader Islamabad Memorandum's promised cessation of hostilities on the Lebanon front remains fragile even as the Hormuz reopening proceeds. The fragility was confirmed on June 20, when Hezbollah fired 50+ projectiles overnight at IDF positions and Israeli retaliatory strikes killed at least 32 in southern Lebanon, including 2 children — even as Hormuz shipping showed tentative recovery, with JMIC/UKMTO cutting the regional threat level to 'substantial' on June 17 and 25 vessels transiting the Strait on June 18, still far below the 100+ pre-war daily average. Hours later, Iran's own Khatam al-Anbiya Central Headquarters announced the Strait was being closed again to commercial traffic, framing it as a first-step response to the US and Israel's breach of the MoU's Lebanon clause and warning of further measures if 'the enemy' does not comply; in an apparent split within Tehran, the Foreign Ministry told Tasnim that shipping was 'operating normally' and denied any closure, while US VP Vance also publicly disputed that Iran had closed the Strait — even as Iran's negotiating team was reported heading to Switzerland for talks. On June 21, US Central Command directly rebutted Iran's closure claim, stating that 55 merchant ships carrying more than 17 million barrels of oil transited the Strait on June 20 alone, and President Trump threatened to impose US tolls on Hormuz transit — payment, he said, for America's 'Guardian Angel' role in the Middle East — if a final deal is not reached within the 60-day ceasefire window, leaving Iran's fragile oil-export recovery hanging on which signal proves accurate. Later that day, the Bürgenstock implementation talks — collapsed two days earlier — formally got underway at the Lake Lucerne hotel complex in Switzerland, with VP Vance leading the US delegation, Iran's Parliament Speaker Ghalibaf leading Tehran's, and Pakistan and Qatar mediating; Vance said the priority was progress on the nuclear issue and the Lebanon ceasefire, launching the 60-day sprint on technical details that will determine the pace of sanctions relief and oil-export recovery. Vance — joined by special envoy Steve Witkoff and Jared Kushner — claimed Hormuz reopening and Iran's nuclear program had 'already been accomplished,' but Trump's Truth Social threat to 'hit Iran very hard again' over Lebanon, and Ghalibaf's rebuttal that Iran's 'armed forces are ready to respond,' underscored how exposed Iran's nascent oil-export recovery remains to renewed escalation. On June 22, talks yielded Iran's first tangible diplomatic gain since the Bürgenstock spat: a 60-day roadmap toward a final deal, a new High Level Committee to oversee its implementation, and a Lebanon 'deconfliction cell' — adding Lebanese officials to the US-Iran channel, mediated by Qatar and Pakistan — that FM Araghchi called the framework's '1st real test,' while separately hailing 'major progress' including secured oil and petrochemical export waivers, the lifting of the port blockade, and the release of some frozen Iranian assets. The US Treasury, under Secretary Scott Bessent, followed with a 60-day general license (expiring August 21) authorising production, delivery, and dollar-denominated sale of Iranian oil and petroleum products — Iran's most concrete sanctions-relief gain yet. But the relief was tempered by maritime tracker Windward's finding that Hormuz shipping stalled over the weekend (12 vessels Sunday versus 21+ Saturday), a claim disputed by Lloyd's List, which reported transits continuing; Brent crude fell further to ~$74.3/barrel by June 22 — its lowest since early March — suggesting Iran's oil-export recovery remains gradual and contested rather than assured. On June 22, VP Vance said Iran had agreed to admit IAEA inspectors 'at the minimum of this week' — a claim Iran's Tasnim News Agency denied was ever committed to. On June 23, departing Switzerland, Ghalibaf said the Strait would be 'managed under Iranian arrangements' and would 'never return to what it was before the war,' though the two sides agreed to a Hormuz hotline and coordination center to manage ship-transit disputes — leaving the pace of Iran's oil-export recovery as contested as ever. On June 23, Trump said he had agreed to let the Strait of Hormuz remain open with no further US naval blockade, crediting Iran's 'full and complete' agreement on high-level nuclear inspections; Iran's Foreign Ministry immediately denied any inspection plan or protocol for its damaged nuclear sites beyond standing NPT obligations, and FM Araghchi and President Pezeshkian travelled to Islamabad the same day to keep the Pakistan-mediated channel active. Also on June 23, Iran and Oman agreed to form a joint foreign-ministry working group to negotiate the future administration of Hormuz navigation — including maritime services and associated transit fees — after Iran's chief negotiator told state media the waterway would 'never return to its pre-war conditions' and that Iran will retain control of it; the Islamabad Memorandum still obliges Iran to provide toll-free passage for 60 days from signing. Hormuz traffic continued its gradual, uneven recovery, with Monday June 22 the busiest day for transits since the war began (35 vessels, roughly a third of pre-war volume). Brent crude traded around $77/barrel. On June 24, Iran and Oman issued a joint statement on studying administration of the Hormuz trade route and its transit fees while reasserting Iranian sovereignty over the strait — a position the US rejected the same day, with Secretary of State Rubio saying Washington would not accept Iranian tolls on Hormuz transit under a final deal. Separately, IAEA Director-General Grossi said inspections of Iran's nuclear sites 'will happen,' a claim Iran's Foreign Ministry again denied alongside any meeting with Grossi. Brent crude fell 1.7% to ~$75.81/barrel on June 24 — its lowest level since February 27, the day before the war began — as the gradual Hormuz reopening and the Treasury's 60-day Iranian oil-sales license eased supply concerns, even as Iran's export recovery remains contested. The contested recovery deepened on June 24, when Oman and the IMO announced a temporary, fee-free Hormuz transit corridor — bypassing Iran's own Hormuz administration talks with Oman — to evacuate stranded seafarers and ensure freedom of navigation; Brent crude fell further, dropping below $74/barrel by June 25, its lowest since late February. Also on June 24, Energy Secretary Chris Wright told a New York conference that US naval escorts through Omani waters had ended Iran's ability to close the Strait of Hormuz going forward, citing 72 ships carrying 19 million barrels of oil that transited the Strait in the prior 24 hours. On June 25, Iran's IRGC Navy rejected the corridor outright as 'unacceptable' and a safety risk, insisting only Iran-approved routes are valid and warning of 'enforcement measures' against vessels that bypass coordination with Iranian authorities — underscoring that Iran's oil-export recovery, and its control over the strait, remain unresolved even as global oil prices ease. On June 26, Iran fired four one-way attack drones at vessels transiting the Strait of Hormuz; one struck the Singapore-flagged, Evergreen Marine-operated Ever Lovely near Khawr Naiwah, Oman, damaging its bridge and starboard side without casualties, while US forces shot down the other three — a day after a record 70-78 vessels transited the Strait — prompting the IMO to pause its evacuation of 11,000+ stranded seafarers and casting fresh doubt on Iran's commitment to the corridor it had rejected just a day earlier; Trump called the strike a 'foolish violation' of the ceasefire. Hours later, US Central Command struck Iranian missile and drone storage depots and coastal radar installations in retaliation; on June 27, Iran's IRGC Navy said it had struck US military targets in the region in response, with a Khatam al-Anbiya Central Headquarters spokesman calling Iran's response 'unprecedented' — the most direct US-Iran exchange of fire since the ceasefire MoU was signed, leaving Iran's already-fragile oil-export recovery exposed to renewed disruption. The IRGC's response, confirmed hours later, struck Al Udeid Air Base (Qatar), Ali Al Salem Air Base (Kuwait), Al Dhafra Air Base (UAE), and the US Fifth Fleet HQ (Bahrain); Khatam al-Anbiya called it a 'powerful retaliatory assault' and warned of 'heavier and more extensive strikes' if the US strikes again, while Iran declared the Strait of Hormuz closed once more over the alleged MoU violation. Brent crude nonetheless extended its slide to ~$72/barrel by June 26 — its lowest since February 27 and an over 10% weekly drop, the largest in a month — as Hormuz transits recovered to roughly 75% of prewar levels, suggesting markets are pricing the latest exchange as contained rather than a return to full-scale war. On June 28, Iran's IRGC carried out a further 'joint missile and drone operation' before dawn, striking Ali Al Salem Air Base in Kuwait and the US Fifth Fleet headquarters in Bahrain in response to a fresh US strike on Iranian coastal positions, and claimed to have destroyed eight US military facilities; no US casualties or independently confirmed damage were reported, and the IRGC warned further such exchanges would bring diplomatic talks to a complete halt — underscoring how exposed Iran's nascent oil-export recovery remains to renewed escalation. On June 29, CBS News reported Iran had reiterated a threat of a 'complete halt' to diplomatic processes, though a Washington official said talks would continue; hours later the US and Iran agreed to halt the renewed round of hostilities, and VP Vance travelled to Switzerland for fresh high-level talks to clarify ceasefire terms, with Brent crude rising 0.9% to ~$72.20/barrel on the news. Separately on June 29, Trump announced via social media that the US and Iran would hold fresh talks in Doha, Qatar on June 30 after Tehran 'requested' the meeting — a claim a senior Iranian official disputed, saying no technical-team session was actually scheduled, underscoring continued confusion over the diplomatic track even as Iran's oil-export recovery remains gradual and contested." },

  408: { name:"North Korea", gdp:18, gdpPerCap:665, growth:0.8, debt:0, tradeBalance:0,
    exports:["Coal","Iron","Textiles","Armaments","Cyber Services"],
    partners:["China","Russia","Syria"],
    sanctions:true,
    summary:"One of the world's most isolated economies under comprehensive UN, US, and EU sanctions. North Korea has deployed troops to support Russia in Ukraine, deepening its strategic alignment with Moscow and extracting military technology concessions. GDP estimates remain highly uncertain; China accounts for ~90% of trade." },

  268: { name:"Georgia", gdp:36, gdpPerCap:9600, growth:6.0, debt:38.5, tradeBalance:-4,
    exports:["Vehicles (re-export)","Wine","Copper Ore","Ferroalloys","Hazelnuts"],
    partners:["Russia","Turkey","China","Azerbaijan","Armenia"],
    sanctions:false,
    summary:"Small but fast-growing Caucasus economy that benefited enormously from Russian capital and migration inflows post-2022. The Georgian Dream government's 2024 decision to suspend EU accession negotiations triggered months of street protests. Relations with the West have deteriorated sharply, raising questions about the country's geopolitical trajectory." },

  398: { name:"Kazakhstan", gdp:298, gdpPerCap:14900, growth:5.3, debt:22.0, tradeBalance:27,
    exports:["Crude Oil","Natural Gas","Ferrous Metals","Grain","Uranium"],
    partners:["China","Russia","Italy","Netherlands","UK"],
    sanctions:false,
    summary:"Central Asia's largest economy navigating a careful balance between Russia and the West. Kazatomprom remains the world's largest uranium producer, critical for global nuclear power. Kazakhstan has refused to help Russia circumvent sanctions and is deepening trade ties with China and the EU via the Trans-Caspian corridor." },

  804: { name:"Ukraine", gdp:200, gdpPerCap:6200, growth:4.5, debt:97.0, tradeBalance:-8,
    exports:["Grain","Sunflower Oil","Iron Ore","Steel","Armaments"],
    partners:["EU","United States","Turkey","Egypt","China"],
    sanctions:false,
    summary:"Economy recovering with massive Western financial support (~$50B/year in direct budget aid). Military production has become a significant economic sector. War damage estimates exceed $500 billion. EU accession negotiations are proceeding. A US-brokered 72-hour ceasefire (May 9–11) was agreed but largely violated by both sides; peace talks remain stalled though Putin has signalled openness to direct negotiations in Moscow or a neutral country, keeping reconstruction investment scenarios on the horizon. Significant population loss due to casualties and displacement remains a structural challenge." },

  222: { name:"El Salvador", gdp:38, gdpPerCap:5760, growth:3.8, debt:73.0, tradeBalance:-5,
    exports:["Coffee","Sugar","Textiles","Gold","Ethanol"],
    partners:["United States","Honduras","Guatemala","China","Mexico"],
    sanctions:false,
    summary:"Bukele's second term (2024–) continues his anti-gang security model, which has reduced homicide rates to among the lowest in the Americas, boosting tourism and FDI. The Bitcoin legal tender law remains, though the IMF secured its de-emphasisati on as part of a 2024 deal. Remittances (~25% of GDP) remain the largest income source." },

  624: { name:"Guinea-Bissau", gdp:2.2, gdpPerCap:1020, growth:5.5, debt:76.0, tradeBalance:-0.8,
    exports:["Cashew Nuts","Fish","Peanuts","Timber"],
    partners:["India","Senegal","China","Netherlands","Nigeria"],
    sanctions:false,
    summary:"One of the world's poorest nations, highly dependent on cashew nut exports which account for ~90% of export earnings. Political instability and coup cycles remain endemic. Significant narco-trafficking activity links it to South American drug networks transiting to Europe." },

  760: { name:"Syria", gdp:30, gdpPerCap:1370, growth:5.5, debt:88.0, tradeBalance:-3,
    exports:["Crude Oil","Minerals","Olive Oil","Textiles"],
    partners:["Iraq","Turkey","Lebanon","Jordan","Gulf States"],
    sanctions:true,
    summary:"Assad's government fell in December 2024 after a rapid rebel offensive. The new HTS-led transitional government has secured cautious Gulf and Western engagement. Some sanctions have been partially eased to allow humanitarian and reconstruction flows. GDP is recovering from a near-total wartime collapse, though the baseline is extremely low." },

  422: { name:"Lebanon", gdp:22, gdpPerCap:3100, growth:2.5, debt:165.0, tradeBalance:-9,
    exports:["Jewellery","Base Metals","Chemical Products","Vegetables","Electrical Equipment"],
    partners:["Switzerland","Saudi Arabia","UAE","United States","Syria"],
    sanctions:false,
    summary:"After years of paralysis, the election of a new president in January 2025 re-opened the path to IMF negotiations and banking sector reform. A 2026 Lebanon war erupted as Hezbollah re-escalated alongside Iran's retaliation campaign against Israel (Operation Epic Fury, beginning March 2026), halting nascent reconstruction and reversing early economic stabilisation. A preliminary ceasefire on June 1 and a broader Washington-brokered deal on June 3 both collapsed within days — Hezbollah rejected the latter as 'absurd, humiliating and insulting' — and fighting resumed despite the wider US-Iran ceasefire signed June 17 explicitly covering Lebanon. A renewed US/Qatar-brokered ceasefire took effect June 19 after the war's second-deadliest day (the Lebanese Health Ministry's final toll: 83 killed and 141 wounded in Israeli strikes), but the IDF says it will keep forces in southern Lebanon and remains ready to resume fighting. The truce lasted barely a day: on June 20, Hezbollah fired 50+ projectiles overnight at IDF positions and Israeli strikes on Nabatiyeh-area villages killed at least 32, including 2 children, further delaying any resumption of reconstruction or Gulf investment. A fifth round of direct Israel-Lebanon talks (political and military tracks, excluding Hezbollah) opened in Washington, DC on June 23, focused on finalizing 'pilot zones' — agreed in principle at the fourth round on June 2-3 — for an initial IDF withdrawal from parts of southern Lebanon to the Lebanese Armed Forces, excluding Hezbollah; Axios reported the opening day produced no progress, more regression than steps forward, with Israeli Ambassador Leiter blaming the US-Iran MoU for giving Tehran undue influence over the Lebanon track. On June 26, after four days of talks, Israel and Lebanon signed a framework agreement in Washington — Israel will withdraw from two pilot zones in southern Lebanon and hand them to the Lebanese army, paired with $100 million in US aid and a path to disarm Hezbollah — but on June 27 Hezbollah's Naim Qassem rejected the deal as 'null and void' and Parliament Speaker Berri called it 'incitement to civil war,' while Israel's Defense Minister Katz ruled out any IDF withdrawal until Hezbollah disarms, leaving the reconstruction and investment outlook as contested as ever. Gulf investment has again paused; IMF negotiations are suspended. Underscoring the framework's fragility, Israel struck Hezbollah positions in Beirut's southern suburbs again in late June, triggering mass evacuations, while Defense Minister Katz reiterated the IDF would not withdraw until Hezbollah disarms and outlined plans to demolish border villages and Litani River crossings; UN OCHA's cumulative toll since the war began on March 2, 2026 stood at 3,412 killed and over 10,000 injured. GDP contraction in 2026 is virtually certain." },

  116: { name:"Cambodia", gdp:34, gdpPerCap:1960, growth:6.5, debt:32.0, tradeBalance:-5,
    exports:["Garments","Footwear","Tourism","Rice","Rubber"],
    partners:["United States","Germany","Japan","China","Thailand"],
    sanctions:false,
    summary:"Lower-middle-income economy with robust garment and tourism sectors. Hun Manet, who took power from his father Hun Sen in 2023, has sought to modernise governance while maintaining the political status quo. The US has raised concerns over Chinese military access to Ream Naval Base." },

  288: { name:"Ghana", gdp:88, gdpPerCap:2560, growth:5.5, debt:52.0, tradeBalance:5,
    exports:["Gold","Cocoa","Oil","Timber","Tuna"],
    partners:["UAE","India","China","Netherlands","United States"],
    sanctions:false,
    summary:"Completed debt restructuring under the G20 Common Framework in 2024, restoring market access. New President Mahama took office in January 2025 inheriting a fragile stabilisation. Gold and cocoa exports remain the backbone; cocoa output recovery from disease-hit trees is ongoing." },

  144: { name:"Sri Lanka", gdp:97, gdpPerCap:4400, growth:6.0, debt:108.0, tradeBalance:-7,
    exports:["Garments","Tea","Rubber","Gems","Coconut Products"],
    partners:["United States","UK","India","Germany","Italy"],
    sanctions:false,
    summary:"Recovery is well underway following the 2022 foreign exchange crisis and sovereign default. An IMF programme is on track; debt restructuring with bilateral creditors including China has been completed. New President Dissanayake, elected in 2024, is pursuing anti-corruption reforms while managing the recovery programme." },

  434: { name:"Libya", gdp:56, gdpPerCap:7900, growth:5.0, debt:2.5, tradeBalance:17,
    exports:["Crude Oil","Natural Gas","Petroleum Products","Chemicals"],
    partners:["Italy","China","Spain","Germany","France"],
    sanctions:false,
    summary:"Oil-rich economy divided between the UN-recognised Government of National Unity in Tripoli and the rival Benghazi administration backed by Haftar. Oil revenues are split but production is near 1.2 mb/d. Persistent political division is the main barrier to reconstruction and sustainable growth." },

  780: { name:"Trinidad & Tobago", gdp:28, gdpPerCap:18500, growth:2.2, debt:54.0, tradeBalance:7,
    exports:["Petroleum","LNG","Ammonia","Methanol","Steel"],
    partners:["United States","Spain","Argentina","Jamaica","Guyana"],
    sanctions:false,
    summary:"Energy-rich economy and the Caribbean's leading industrial exporter of LNG and petrochemicals. Declining mature hydrocarbon fields are a long-term concern; new deep-water blocks with Venezuela under a joint development agreement could extend productive life significantly." },

  478: { name:"Mauritania", gdp:12.5, gdpPerCap:2570, growth:5.8, debt:50.0, tradeBalance:2,
    exports:["Iron Ore","Fish","Gold","Copper","Petroleum"],
    partners:["China","Switzerland","Spain","France","Morocco"],
    sanctions:false,
    summary:"Sparsely populated Saharan economy transformed by the launch of the Grande Tortue/Ahmeyim offshore gas field (shared with Senegal) in 2025. Gas revenues are beginning to flow, offering potential for significant fiscal transformation. Iron ore and fisheries remain important." },

  591: { name:"Panama", gdp:90, gdpPerCap:20500, growth:5.0, debt:58.0, tradeBalance:22,
    exports:["Gold","Bananas","Shrimp","Sugar","Iron/Steel Scrap"],
    partners:["United States","China","Ecuador","South Korea","Japan"],
    sanctions:false,
    summary:"Hub economy centred on the Panama Canal, financial services, and the Colón Free Trade Zone. Canal revenues remain strong. The Cobre Panama copper mine, shuttered after 2023 protests, remains closed; its eventual reopening is a significant upside risk. US President Trump's repeated statements about 'reclaiming' the Canal have created diplomatic tensions." },

  858: { name:"Uruguay", gdp:86, gdpPerCap:24500, growth:3.5, debt:65.0, tradeBalance:4,
    exports:["Beef","Cellulose","Soybeans","Dairy","Wool"],
    partners:["China","Brazil","United States","Netherlands","Argentina"],
    sanctions:false,
    summary:"One of South America's most stable, transparent, and socially developed economies, with strong institutions and rule of law. Orsi's centre-left government took office in 2025. Uruguay is expanding as a regional data centre hub and green hydrogen potential is attracting EU investment." },

  // Qatar
  634: { name:"Qatar", gdp:242, gdpPerCap:87000, growth:2.0, debt:40.0, tradeBalance:64,
    exports:["LNG","Crude Oil","Petroleum Products","Petrochemicals","Aluminium"],
    partners:["Japan","South Korea","India","China","Singapore"],
    sanctions:false,
    summary:"World's largest LNG exporter and home to one of the world's biggest sovereign wealth funds (Qatar Investment Authority ~$500B). Qatar has been a key mediator in the Gaza ceasefire negotiations. LNG expansion capacity investments are underway to capitalise on European demand for alternatives to Russian gas." },

  // Oman
  512: { name:"Oman", gdp:118, gdpPerCap:25600, growth:2.0, debt:38.5, tradeBalance:16,
    exports:["Petroleum","LNG","Petrochemicals","Metals","Fish"],
    partners:["China","UAE","India","South Korea","Japan"],
    sanctions:false,
    summary:"Moderate Gulf state pursuing Vision 2040 economic diversification. Oman functions as a key diplomatic back-channel between Iran and Western powers, hosting sensitive negotiations. Fiscal position has strengthened significantly following post-2020 debt concerns." },

  // Bahrain
  48:  { name:"Bahrain", gdp:49, gdpPerCap:31500, growth:3.0, debt:127.0, tradeBalance:6,
    exports:["Aluminium","Petroleum Products","Textiles","Finance","Tourism"],
    partners:["Saudi Arabia","UAE","United States","Japan","India"],
    sanctions:false,
    summary:"Small island economy with a large financial services sector and the ALBA aluminium smelter. High public debt relative to Gulf neighbours, sustained by a 2021 Saudi bailout. Bahrain is diversifying into fintech, logistics, and Formula 1 tourism. Heavily reliant on Saudi Arabia for political and fiscal support. The 2026 Iran-US war has struck Bahraini soil four times, including repeated Iranian missile and drone attacks near the US Fifth Fleet's regional headquarters, elevating war-risk insurance costs and clouding the outlook for trade and financial-sector activity." },

  // Jordan
  400: { name:"Jordan", gdp:56, gdpPerCap:4850, growth:2.8, debt:90.0, tradeBalance:-9,
    exports:["Potash","Phosphate","Pharmaceuticals","Fertilisers","Vegetables"],
    partners:["United States","Saudi Arabia","Iraq","India","UAE"],
    sanctions:false,
    summary:"Import-dependent economy with limited natural resources but strategic location bordering Israel, Syria, Iraq, and Saudi Arabia. The Gaza conflict has impacted Jordanian stability and trade routes. The World Bank and Gulf donors provide critical balance-of-payments support. Syrian reconstruction opportunities could benefit Jordan's services sector." },

  // New Zealand
  554: { name:"New Zealand", gdp:278, gdpPerCap:52500, growth:1.9, debt:45.5, tradeBalance:2,
    exports:["Dairy","Meat","Wool","Timber","Wine","Tourism"],
    partners:["China","Australia","United States","Japan","South Korea"],
    sanctions:false,
    summary:"Commodity and services export economy that navigated a brief recession in 2024 as rate hikes cooled housing and consumption. Recovery is underway; the Reserve Bank has begun easing. Dairy and meat exports to China remain pivotal. New Zealand is deepening defence and intelligence ties with the US, UK, and Australia (AUKUS-adjacent)." },

  // Cuba
  192: { name:"Cuba", gdp:100, gdpPerCap:9000, growth:-1.5, debt:82.0, tradeBalance:-2,
    exports:["Sugar","Nickel","Tobacco","Pharmaceuticals","Tourism"],
    partners:["Venezuela","China","Russia","Spain","Canada"],
    sanctions:true,
    summary:"Centrally planned economy under US embargo since 1962 is in severe crisis. Electricity blackouts lasting 12+ hours daily, food shortages, and medicine scarcity have triggered the largest wave of emigration since the 1990s. GDP continues to contract. Trump re-imposed tightened sanctions in 2025." },

  // Bolivia
  68:  { name:"Bolivia", gdp:49, gdpPerCap:3900, growth:3.2, debt:77.0, tradeBalance:3,
    exports:["Natural Gas","Zinc","Gold","Soybeans","Tin"],
    partners:["Brazil","Argentina","Colombia","United States","China"],
    sanctions:false,
    summary:"New right-wing President Rodrigo Paz Pereira took office in November 2025, ending 20 years of MAS government. He is pursuing radical fiscal austerity — a 30%+ spending cut — to address exhausted foreign currency reserves and fuel shortages inherited from the Arce government. Months of nationwide protests and road blockades over the austerity drive and a since-annulled land mortgage law have compounded the damage, with official estimates putting cumulative losses from the unrest at roughly US$2.76 billion by mid-June 2026. Lithium production remains a long-term asset; private-sector partnerships are being expanded." },

  // DR Congo
  180: { name:"DR Congo", gdp:76, gdpPerCap:764, growth:6.8, debt:24.0, tradeBalance:7,
    exports:["Cobalt","Copper","Coltan","Gold","Timber"],
    partners:["China","Zambia","South Korea","Finland","UAE"],
    sanctions:false,
    summary:"Holds over 70% of global cobalt reserves — a critical input for EV batteries — yet remains among the world's poorest countries. Renewed conflict in eastern DRC, including advances by M23 rebels backed by Rwanda, has disrupted mining operations in 2025. The mineral wealth–conflict nexus remains profound. A Bundibugyo ebolavirus outbreak declared a WHO Public Health Emergency of International Concern on May 16, 2026 has surpassed 1,000 cases (1,155 confirmed, 304 deaths as of June 25) concentrated in gold-mining areas of Ituri province, layering a public-health shock atop the conflict-driven economic disruption." },

  // Tanzania
  834: { name:"Tanzania", gdp:92, gdpPerCap:1370, growth:5.5, debt:39.5, tradeBalance:-1,
    exports:["Gold","Coffee","Tea","Tobacco","Cashew Nuts"],
    partners:["India","China","Kenya","UAE","Switzerland"],
    sanctions:false,
    summary:"East African economy with robust gold exports and growing tourism. Dar es Salaam is becoming a significant regional logistics hub, connecting landlocked neighbours to global markets. President Hassan's moderate governance has attracted FDI. Tanzania is developing a major natural gas sector for domestic use and export." },

  // Angola
  24:  { name:"Angola", gdp:118, gdpPerCap:3200, growth:4.8, debt:73.0, tradeBalance:22,
    exports:["Crude Oil","Diamonds","Refined Petroleum","LNG"],
    partners:["China","India","United States","France","South Africa"],
    sanctions:false,
    summary:"Sub-Saharan Africa's third-largest economy. Oil production is stabilising after years of decline with new deepwater investments. Lourenço's privatisation programme has broadened the private sector. Angola has rebalanced somewhat away from exclusive Chinese dependence, engaging the US and EU via the Lobito Corridor infrastructure project." },

  // Mozambique
  508: { name:"Mozambique", gdp:22, gdpPerCap:636, growth:5.5, debt:100.0, tradeBalance:-2,
    exports:["Coal","Aluminium","Natural Gas","Electricity","Tobacco"],
    partners:["India","South Africa","China","Netherlands","Germany"],
    sanctions:false,
    summary:"Potential future LNG giant hampered by Islamist insurgency in Cabo Delgado. TotalEnergies suspended its $20B Mozambique LNG project in 2021; security conditions have partially improved but the project restart timeline remains uncertain. Eni's smaller Coral Sul FLNG is operational, generating export revenues." },

  // Ivory Coast
  384: { name:"Ivory Coast", gdp:92, gdpPerCap:3080, growth:6.8, debt:55.0, tradeBalance:7,
    exports:["Cocoa","Coffee","Palm Oil","Gold","Petroleum"],
    partners:["Switzerland","Netherlands","United States","France","Malaysia"],
    sanctions:false,
    summary:"West Africa's largest economy and the world's largest cocoa exporter (~40% of global supply). Strong growth is driven by agriculture, construction, and a growing manufacturing base. Political stability under Ouattara has made Abidjan a regional financial hub." },

  // Senegal
  686: { name:"Senegal", gdp:40, gdpPerCap:2070, growth:9.5, debt:68.0, tradeBalance:-2,
    exports:["Petroleum Products","Gas","Fish","Phosphates","Gold","Peanuts"],
    partners:["Mali","India","Switzerland","China","France"],
    sanctions:false,
    summary:"Oil production from the Sangomar field (launched 2024) and gas from Grande Tortue/Ahmeyim are driving a resource boom. President Faye's government is managing the windfall while pursuing anti-corruption pledges. Senegal is among the world's fastest-growing economies in 2025–2026 due to hydrocarbon revenues." },

  // Zimbabwe
  716: { name:"Zimbabwe", gdp:32, gdpPerCap:1940, growth:4.0, debt:92.0, tradeBalance:-1,
    exports:["Gold","Tobacco","Platinum","Diamonds","Nickel","Lithium"],
    partners:["UAE","South Africa","Mozambique","China","Zambia"],
    sanctions:true,
    summary:"Slow recovery from hyperinflation and economic collapse. The ZiG (Zimbabwe Gold) currency, introduced in 2024, has been more stable than its predecessors. Lithium mining is expanding rapidly with Chinese investment. Western sanctions over human rights and governance remain in place under the Mnangagwa government." },

  // Myanmar
  104: { name:"Myanmar", gdp:62, gdpPerCap:1220, growth:1.0, debt:69.0, tradeBalance:-2,
    exports:["Natural Gas","Jade","Gems","Garments","Fish"],
    partners:["China","Thailand","India","Singapore","Japan"],
    sanctions:true,
    summary:"Economy in deep crisis following the 2021 military coup. Civil war between the junta and a coalition of ethnic armed organisations and the People's Defence Force has intensified; resistance forces control significant territory. Sanctions from the US, EU, and UK are in place. China remains the junta's principal economic and diplomatic supporter." },

  // Uzbekistan
  860: { name:"Uzbekistan", gdp:115, gdpPerCap:3200, growth:6.5, debt:36.0, tradeBalance:-6,
    exports:["Gold","Natural Gas","Cotton","Copper","Fruits"],
    partners:["China","Russia","Kazakhstan","Turkey","South Korea"],
    sanctions:false,
    summary:"Central Asia's most populous nation and a fast-growing liberalising economy under Mirziyoyev. WTO accession is progressing. Uzbekistan is attracting investment in auto manufacturing, textiles, and critical minerals processing. Remittances from Russia remain significant but are diversifying toward South Korea, Turkey, and the Gulf." },

  // Azerbaijan
  31:  { name:"Azerbaijan", gdp:80, gdpPerCap:7800, growth:2.5, debt:17.0, tradeBalance:17,
    exports:["Crude Oil","Natural Gas","Refined Petroleum","Tomatoes","Cotton"],
    partners:["Italy","Turkey","Israel","Germany","Georgia"],
    sanctions:false,
    summary:"Energy-exporting South Caucasus state that consolidated control over Nagorno-Karabakh in September 2023. The SOFAZ sovereign wealth fund channels oil revenues into a post-hydrocarbon transition. Azerbaijan hosted COP29 in 2024, using energy diplomacy to balance Western relationships while maintaining ties with Russia." },

  // Armenia
  51:  { name:"Armenia", gdp:28, gdpPerCap:9200, growth:5.5, debt:47.0, tradeBalance:-3,
    exports:["Copper","Aluminium","Diamonds","Brandy","Iron Ore"],
    partners:["Russia","UAE","China","Georgia","EU"],
    sanctions:false,
    summary:"Small but resilient economy that has pivoted dramatically toward the EU and US following the loss of Nagorno-Karabakh (2023) and breakdown in relations with Russia. A peace treaty with Azerbaijan remains under negotiation. Western investment and diplomatic support have increased sharply." },

  // Nepal
  524: { name:"Nepal", gdp:46, gdpPerCap:1510, growth:5.5, debt:48.0, tradeBalance:-11,
    exports:["Carpets","Textiles","Tea","Coffee","Tourism","Hydropower"],
    partners:["India","United States","Germany","UK","China"],
    sanctions:false,
    summary:"Himalayan economy dependent on remittances (~25% of GDP) and tourism. Hydropower development has accelerated, with electricity exports to India becoming a significant new income source. India accounts for two-thirds of trade; Nepal navigates carefully between India and China." },

  // Honduras
  340: { name:"Honduras", gdp:35, gdpPerCap:3390, growth:3.8, debt:43.0, tradeBalance:-2,
    exports:["Coffee","Bananas","Textiles","Palm Oil","Shrimp"],
    partners:["United States","Germany","Belgium","El Salvador","Guatemala"],
    sanctions:false,
    summary:"Central American economy where security improvements following regional anti-gang crackdowns have reduced emigration pressure. Maquila (export-processing) sector and coffee exports remain pillars. Conservative President Nasry Asfura (inaugurated January 27, 2026, after winning the November 2025 election) replaced the Castro government; Honduras-China diplomatic relations established in 2023 remain in place. Closer US ties are anticipated under the Trump-backed president." },

  // Taiwan
  158: { name:"Taiwan", gdp:780, gdpPerCap:32500, growth:3.2, debt:27.5, tradeBalance:88,
    exports:["Semiconductors","Electronics","Machinery","Petrochemicals","Flat Panels"],
    partners:["China","United States","Japan","Hong Kong","South Korea"],
    sanctions:false,
    summary:"Taiwan is the world's most strategically important semiconductor hub — TSMC manufactures over 90% of the world's most advanced chips. Economic fundamentals are strong with low debt and robust trade surpluses. The central risk is geopolitical: China's claim on the island and ambiguous US commitment under Trump create structural uncertainty that increasingly factors into investment decisions." },

  // Slovakia
  703: { name:"Slovakia", gdp:148, gdpPerCap:27100, growth:2.5, debt:58.0, tradeBalance:3,
    exports:["Vehicles","Machinery","Electronics","Iron & Steel","Rubber"],
    partners:["Germany","Czech Republic","Poland","France","Hungary"],
    sanctions:false,
    summary:"Slovakia is one of the world's largest per-capita car producers (Volkswagen, Kia, Stellantis all have major plants). Deeply integrated into Central European and German value chains. PM Fico's pro-Russia government has created friction with EU partners but not disrupted the industrial base. EV transition poses structural risks to the auto sector." },

  // Kuwait
  414: { name:"Kuwait", gdp:170, gdpPerCap:42000, growth:2.2, debt:3.5, tradeBalance:55,
    exports:["Crude Oil","Refined Products","Fertilizers","Chemical Products"],
    partners:["China","India","Japan","South Korea","United States"],
    sanctions:false,
    summary:"Kuwait is one of the world's wealthiest states per capita, almost entirely dependent on oil. The Kuwait Investment Authority (KIA) is one of the world's oldest and largest sovereign wealth funds (~$800B). Chronic political gridlock between parliament and the Al-Sabah ruling family has blocked economic diversification plans for decades. The 2026 Iran-US war has struck Kuwaiti soil repeatedly, including a June 3 missile and drone attack on Kuwait International Airport that killed one person and severely damaged the terminal, and subsequent strikes on Ali Al Salem Air Base, disrupting trade and raising regional war-risk costs." },

  // Ecuador
  218: { name:"Ecuador", gdp:128, gdpPerCap:6900, growth:1.5, debt:57.5, tradeBalance:-2,
    exports:["Petroleum","Bananas","Shrimp","Cocoa","Cut Flowers"],
    partners:["United States","China","Panama","Chile","Colombia"],
    sanctions:false,
    summary:"Ecuador's economy is dollarised and heavily oil-dependent. President Noboa's government has declared war on drug cartels that have plunged the country into a security crisis. Oil production is in long-term decline, intensifying the need for diversification. Shrimp and agricultural exports are growing revenue sources." },

  // Dominican Republic
  214: { name:"Dominican Republic", gdp:128, gdpPerCap:11000, growth:4.5, debt:55.0, tradeBalance:-12,
    exports:["Gold","Silver","Medical Instruments","Cocoa","Tobacco","Tourism"],
    partners:["United States","Haiti","Canada","India","China"],
    sanctions:false,
    summary:"The Dominican Republic is the Caribbean's largest economy and among its most dynamic, driven by tourism, manufacturing (free trade zones), remittances, and mining. Haiti's political collapse has created migration pressure and trade disruption. President Abinader's business-friendly administration has attracted significant FDI." },

  // Guatemala
  320: { name:"Guatemala", gdp:96, gdpPerCap:5100, growth:3.5, debt:29.5, tradeBalance:-9,
    exports:["Coffee","Bananas","Sugar","Palm Oil","Cardamom","Textiles"],
    partners:["United States","El Salvador","Honduras","Mexico","Nicaragua"],
    sanctions:false,
    summary:"Central America's largest economy, with remittances (~18% of GDP) from the Guatemalan diaspora in the United States as the single largest income source. President Arévalo's anti-corruption government survived unprecedented attempts to block his inauguration. Structural challenges — poverty, inequality, institutional weakness — remain profound." },

  // Lithuania
  440: { name:"Lithuania", gdp:83, gdpPerCap:29500, growth:2.8, debt:38.5, tradeBalance:1,
    exports:["Petroleum Products","Machinery","Chemicals","Food","Wood Products"],
    partners:["Latvia","Germany","Poland","Russia (legacy)","US"],
    sanctions:false,
    summary:"Baltic state that has been one of Ukraine's most committed supporters relative to GDP. Lithuania completed electricity grid desynchronisation from the Russian BRELL system in early 2025, connecting to the EU grid — a strategic milestone. Vilnius is emerging as a major fintech and startup hub. Defence spending is among NATO's highest per GDP." },

  // Slovenia
  705: { name:"Slovenia", gdp:76, gdpPerCap:36500, growth:2.2, debt:69.0, tradeBalance:4,
    exports:["Machinery","Pharmaceuticals","Motor Vehicles","Electrical Equipment","Chemicals"],
    partners:["Germany","Italy","Croatia","Austria","Switzerland"],
    sanctions:false,
    summary:"One of the most prosperous post-communist economies in Central Europe, with high living standards and EU/NATO membership. The Golob government has pursued progressive domestic policies. Slovenia's pharmaceutical sector (Krka, Lek) and machinery exports underpin an export-oriented economy with strong trade ties to Germany and Italy." },

  // Croatia
  191: { name:"Croatia", gdp:82, gdpPerCap:20800, growth:2.8, debt:62.0, tradeBalance:-8,
    exports:["Machinery","Electrical Equipment","Chemicals","Vehicles","Food & Beverages"],
    partners:["Italy","Germany","Slovenia","Bosnia","United States"],
    sanctions:false,
    summary:"Croatia joined the eurozone in January 2023, completing its EU integration. Tourism (~20% of GDP) is the economic engine; Croatia is one of Europe's fastest-growing destinations. Defence spending has risen sharply, including procurement of US F-16 fighters. The Adriatic coast remains a major strategic real estate and investment target." },

  // Serbia
  688: { name:"Serbia", gdp:78, gdpPerCap:11600, growth:3.5, debt:52.0, tradeBalance:-7,
    exports:["Vehicles","Machinery","Metals","Electricity","Agricultural Products"],
    partners:["Germany","Italy","Bosnia","Romania","Russia"],
    sanctions:false,
    summary:"Serbia's economy is growing steadily, anchored by FCA/Stellantis automobile production and a growing IT sector. Serbia has attracted significant Chinese investment in lithium mining (Rio Tinto's Jadar project controversially approved) and industrial parks. Geopolitically, Serbia resists NATO and EU accession pressure while formally pursuing both, maintaining ties with Russia and China." },

  // Estonia
  233: { name:"Estonia", gdp:46, gdpPerCap:34500, growth:2.0, debt:22.5, tradeBalance:-1,
    exports:["Machinery","Wood Products","Electronics","Shale Oil","Food"],
    partners:["Finland","Sweden","Latvia","Germany","United States"],
    sanctions:false,
    summary:"Estonia is one of the world's most digitally advanced economies — e-residency, digital public services, and blockchain governance are global benchmarks. A NATO frontline state and one of Ukraine's most committed supporters per GDP. Home to major NATO Cyber Defence Centre. Economy recovering from 2023-24 contraction driven by energy costs." },

  // Latvia
  428: { name:"Latvia", gdp:46, gdpPerCap:24800, growth:2.5, debt:43.0, tradeBalance:-2,
    exports:["Wood Products","Metals","Machinery","Foodstuffs","Chemicals"],
    partners:["Lithuania","Estonia","Germany","Sweden","Denmark"],
    sanctions:false,
    summary:"Baltic state completing its strategic detachment from Russia: energy grids, transit dependency, and Russian-speaking minority integration are the three pillars of a multi-decade transformation process. Latvia's wood and timber sector, IT services, and transit logistics are the main economic pillars. Defence spending raised to 3%+ of GDP." },

  // Sudan
  729: { name:"Sudan", gdp:28, gdpPerCap:580, growth:-12.0, debt:185.0, tradeBalance:-8,
    exports:["Gold","Oil","Cotton","Sesame","Livestock"],
    partners:["UAE","China","Saudi Arabia","India","Egypt"],
    sanctions:false,
    summary:"Sudan's economy has been devastated by the civil war between the SAF and RSF that erupted in April 2023. GDP has collapsed by an estimated 30%+. Khartoum — the capital — has been largely destroyed. Oil infrastructure is paralysed. Famine is spreading. The humanitarian crisis is the world's worst, surpassing Ukraine and Gaza in scale of displacement." },

  // Uganda
  800: { name:"Uganda", gdp:58, gdpPerCap:1210, growth:6.0, debt:49.0, tradeBalance:-8,
    exports:["Coffee","Gold","Fish","Tea","Tobacco","Petroleum (new)"],
    partners:["UAE","Kenya","China","India","Democratic Republic of Congo"],
    sanctions:false,
    summary:"East Africa's third-largest economy with strong agricultural exports and new oil wealth on the horizon. The TotalEnergies East African Crude Oil Pipeline (EACOP) project, though controversial due to environmental concerns, will eventually enable export of Uganda's Lake Albert oil reserves. Museveni's 40-year rule maintains stability at the cost of political freedom." },

  // Cameroon
  120: { name:"Cameroon", gdp:52, gdpPerCap:1780, growth:4.2, debt:45.0, tradeBalance:-3,
    exports:["Crude Oil","Timber","Cocoa","Coffee","Cotton","Aluminium"],
    partners:["China","France","Netherlands","India","Italy"],
    sanctions:false,
    summary:"Central Africa's second-largest economy faces the Anglophone Ambazonia separatist conflict in its northwest and southwest regions, severely disrupting those areas' economies. Oil production is declining. The Douala-Ngaoundéré railway corridor serves landlocked Chad and CAR. President Biya, in power since 1982, shows no signs of stepping down." },

  // Bulgaria
  100: { name:"Bulgaria", gdp:115, gdpPerCap:17200, growth:2.5, debt:26.5, tradeBalance:-7,
    exports:["Machinery","Metals","Chemicals","Fuels","Agricultural Products"],
    partners:["Germany","Romania","Turkey","Italy","Greece"],
    sanctions:false,
    summary:"Bulgaria is the EU's poorest member by GDP per capita but has very low public debt and hosts significant nearshoring investment due to competitive labour costs. After eight snap elections since 2021, the April 19, 2026 vote produced a majority for Rumen Radev's Progressive Bulgaria coalition (~43.9%, 131/240 seats), ending years of caretaker governments; Radev was confirmed as PM by parliament on May 8, 2026 — though his euroskeptic, Russia-friendly stance may complicate EU cohesion fund access and reform momentum. Bulgaria joined the Schengen area in 2024 and is working toward eurozone entry." },

  // Paraguay
  600: { name:"Paraguay", gdp:49, gdpPerCap:6500, growth:3.8, debt:42.0, tradeBalance:4,
    exports:["Soybeans","Electricity (Itaipú)","Beef","Corn","Wheat"],
    partners:["Brazil","Argentina","Chile","Russia","United States"],
    sanctions:false,
    summary:"Paraguay is the world's fourth-largest soy exporter and a major electricity generator via the Itaipú hydroelectric dam (shared with Brazil), which provides nearly all of Paraguay's power and significant export revenue. The Colorado Party has dominated politics for 75+ years. Corruption and drug trafficking (particularly cannabis) through its borders remain systemic." },

  // Papua New Guinea
  598: { name:"Papua New Guinea", gdp:32, gdpPerCap:3100, growth:4.5, debt:49.0, tradeBalance:12,
    exports:["LNG","Gold","Copper","Timber","Palm Oil","Coffee"],
    partners:["Australia","China","Japan","Singapore","United States"],
    sanctions:false,
    summary:"Resource-rich nation with vast LNG, gold, and copper reserves. ExxonMobil's PNG LNG project and the potential P'nyang and Papua LNG expansions make PNG a significant energy exporter. Urban gang violence, tribal conflict in the Highlands, and state capacity weaknesses constrain development despite resource wealth." },

  // Guyana
  328: { name:"Guyana", gdp:22, gdpPerCap:26500, growth:34.0, debt:28.0, tradeBalance:5,
    exports:["Petroleum","Gold","Bauxite","Sugar","Timber","Rice"],
    partners:["United States","Canada","Trinidad","United Kingdom","Netherlands"],
    sanctions:false,
    summary:"Guyana is the world's fastest-growing economy due to massive offshore oil production (ExxonMobil, Hess, CNOOC). GDP per capita has quadrupled since first oil in 2019. Production is projected to exceed 1 million barrels/day by 2027. The windfall raises governance challenges and a territorial dispute with Venezuela over the Essequibo region (which Venezuela claims) is a latent security risk." },

  // Rwanda
  646: { name:"Rwanda", gdp:16, gdpPerCap:1140, growth:7.5, debt:67.0, tradeBalance:-14,
    exports:["Coffee","Tea","Minerals","Tourism"],
    partners:["DRC","Uganda","Tanzania","Belgium","United States"],
    sanctions:false,
    summary:"Rwanda is one of Africa's best-governed and fastest-growing economies, transformed by President Kagame's modernisation drive since the 1994 genocide. Kigali is emerging as a major African conference and business hub. However, Rwanda's military involvement in eastern DRC's conflict (backing M23) has drawn international sanctions threats and damaged its international reputation." },

  // Iceland
  352: { name:"Iceland", gdp:31, gdpPerCap:82000, growth:2.5, debt:66.0, tradeBalance:3,
    exports:["Aluminium","Fish & Seafood","Ferrosilicon","Tourism"],
    partners:["Netherlands","UK","Germany","United States","Denmark"],
    sanctions:false,
    summary:"Small high-income island economy with near-full renewable energy. Major aluminium smelting powered by geothermal and hydro energy. Tourism (pre-volcano disruption) was the largest sector. The Reykjanes Peninsula volcanic eruptions since 2023 have been an economic disruptor but also a tourist draw. Iceland has a unique position outside the EU but in the Schengen area and EEA." },

  // Laos
  418: { name:"Laos", gdp:16, gdpPerCap:2080, growth:4.0, debt:128.0, tradeBalance:-3,
    exports:["Electricity","Gold","Copper","Timber","Rubber","Coffee"],
    partners:["Thailand","China","Vietnam","United States","Japan"],
    sanctions:false,
    summary:"Landlocked Laos faces a debt crisis driven largely by Chinese infrastructure loans under Belt and Road. The Laos-China Railway, while transforming connectivity, came with debt costs that have pushed total public debt above 120% of GDP. Electricity exports to Thailand via the Mekong are the main revenue source. Risk of debt default is the central economic concern." },

  // Zambia
  894: { name:"Zambia", gdp:34, gdpPerCap:1720, growth:5.5, debt:118.0, tradeBalance:3,
    exports:["Copper","Cobalt","Zinc","Tobacco","Flowers"],
    partners:["Switzerland","China","UAE","Democratic Republic of Congo","South Africa"],
    sanctions:false,
    summary:"Africa's second-largest copper producer has completed a landmark debt restructuring under the G20 Common Framework (2024). New copper and cobalt projects are ramping up production to meet EV battery demand. The Copperbelt is attracting significant US, EU, and Australian investment as a strategic alternative to DRC supply." }
};
