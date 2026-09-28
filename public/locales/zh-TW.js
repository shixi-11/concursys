// Traditional Chinese (Taiwan) copy. Loaded after all base copy files.
(function(d){for(const k in d)window[k]['zh-TW']=d[k];})({
 "siteCopy": {
  "navServices": "技術服務",
  "navTechnology": "技術體系",
  "navCompany": "關於我們",
  "talk": "聯絡我們",
  "heroTitle": "為 Agent，<br>打造執行底座。",
  "heroBody": "從程式語言、執行時到共識技術，為需要持久狀態、明確權限與可驗證執行的 Agent 提供工程基礎。我們是 ALUX 底層技術的研發團隊。",
  "discuss": "聊聊你的專案",
  "explore": "了解我們的技術服務",
  "railAgent": "公有鏈 Agent 執行支援",
  "railVM": "虛擬機工程",
  "railDistributed": "分散式系統",
  "serviceLabel": "01 / 技術服務",
  "servicesTitle": "Agent 需要底座，<br>我們負責打造。",
  "servicesIntro": "從 Agent 使用的語言，到驗證執行結果的網路，我們打造支撐執行的每一層。",
  "deliverables": "服務範圍",
  "services": [
   {
    "id": "agent",
    "title": "公有鏈 Agent 執行支援",
    "body": "針對需要在公有鏈上保存狀態、協調執行並明確權限邊界的 Agent，提供底層工程支援。",
    "scope": "架構設計 · 執行時整合 · 執行驗證"
   },
   {
    "id": "vm",
    "title": "虛擬機工程",
    "body": "依據系統需求，設計與實作位元組碼執行時、進程協作機制和執行語意。",
    "scope": "虛擬機設計 · 工具鏈整合 · 執行時診斷"
   },
   {
    "id": "distributed",
    "title": "分散式系統",
    "body": "處理多台參與機器之間的並行、重播與協作問題。",
    "scope": "系統設計 · 共識協定 · 故障分析"
   }
  ],
  "techLabel": "02 / 技術體系",
  "techTitle": "一台全球電腦，<br>諸多工程難題。",
  "techIntro": "從位元組碼執行時到共識層，皆為原創技術。",
  "durableTab": "持久執行",
  "conceptual": "架構原理示意",
  "helpTitle": "我們能提供的支援",
  "architectureCTA": "討論你的技術架構",
  "tech": {
   "glvm": {
    "name": "全域邏輯虛擬機",
    "title": "跨越多台機器的邏輯執行模型。",
    "body": "GLVM（Global Logical Virtual Machine）是我們正在打造的系統級執行架構，在參與系統的多個 TVM 位元組碼引擎之上定義共同的邏輯模型。",
    "help": "執行架構設計、執行時邊界劃分與系統整合設計。"
   },
   "tvm": {
    "name": "元組空間虛擬機",
    "title": "從位元組碼到實際執行。",
    "body": "TVM（Tuple-space Virtual Machine）是參與機器上的具體位元組碼執行引擎。它執行 Tolang 位元組碼，透過通道與通訊事件協調並行進程。",
    "help": "位元組碼執行時工程、進程協作、工具鏈整合與執行診斷。"
   },
   "blockgit": {
    "name": "BLOCKGIT 共識協定",
    "title": "讓並行工作達成共識。",
    "body": "BlockGit 是我們為 ALUX 研發的共識協定。它以有向無環圖組織並行區塊，透過強連結、弱連結與合併規則協調區塊歷史和狀態轉移。",
    "help": "共識架構設計、協定實作、系統整合與分散式測試。"
   },
   "ocap": {
    "name": "物件能力機制",
    "title": "讓權限邊界明確可控。",
    "body": "物件能力機制透過不可偽造的參照，限定任務可以存取的物件。在 TVM 原生互動中，這些邊界由執行時強制執行；外部服務與託管環境需要各自的權限控管。",
    "help": "能力邊界劃分、最小權限設計與整合審查。"
   },
   "durable": {
    "name": "持久執行",
    "title": "讓執行狀態延續下去。",
    "body": "公有鏈可以為 Agent 提供持久執行環境。透過保留執行狀態與續體，任務能夠跨區塊等待，並在所依賴的條件就緒後繼續執行。",
    "help": "狀態持久化、等待與恢復流程、重播需求及終局邊界設計。"
   }
  },
  "diagram": {
   "shared": "共同的邏輯執行模型",
   "node": "執行節點",
   "source": "Tolang",
   "bytecode": "位元組碼",
   "runtime": "TVM",
   "process": "進程",
   "channel": "通道 / COMM",
   "task": "任務",
   "capability": "能力參照",
   "allowed": "可存取物件",
   "unreachable": "無能力參照",
   "boundary": "TVM 原生權限邊界",
   "blockgitCaption": "並行區塊 / 連結關係 / 合併規則",
   "stages": [
    "執行",
    "保存",
    "等待",
    "恢復",
    "終局"
   ],
   "steps": [
    "並行進程開始執行各自的工作。",
    "保留執行狀態與續體。",
    "任務跨區塊等待所依賴的條件。",
    "條件就緒後，從保存的續體繼續執行。",
    "執行抵達終局邊界。"
   ]
  },
  "tolangDetail": "面向並行進程的語言與編譯器，以 TVM 位元組碼為執行目標。",
  "replayDetail": "記錄確定性重播所需執行選擇的執行時結構。",
  "originalLabel": "原創系統工程",
  "originalTitle": "從語言到共識，貫通底層。",
  "originalBody": "ConcurSys 研發了 ALUX 背後的 Tolang、TVM 位元組碼執行時、ReplayTrie 與 BlockGit 共識協定，將語言設計、並行執行與分散式共識銜接起來。",
  "originalNote": "GLVM 是持續演進的系統級架構，跨分片執行與更多部署環境仍屬於研發方向。",
  "play": "播放流程",
  "pause": "暫停流程",
  "replay": "重新播放",
  "next": "下一步",
  "reset": "重設",
  "step": "步驟",
  "companyLabel": "03 / 關於我們",
  "companyTitle": "技術的研發者，也是你的工程夥伴。",
  "companyBody": "ConcurSys 是一家美國技術公司，也是 ALUX 的技術服務公司。我們將自研語言、執行時與共識協定的工程能力，帶入面向全球電腦底層建設的技術服務。",
  "aluxLink": "了解 ALUX",
  "process": [
   [
    "釐清問題",
    "梳理執行需求、專案限制與系統邊界。"
   ],
   [
    "打造基礎",
    "確定合作範圍，設計並實作底層元件。"
   ],
   [
    "驗證系統",
    "測試約定行為、檢查故障情境，並完成文件交接。"
   ]
  ],
  "contactLabel": "04 / 開始合作",
  "contactTitle": "把最難的問題<br>交給我們。",
  "contactBody": "告訴我們你在打造什麼、執行在哪裡遇到難點，以及哪些部分必須能正常運作。",
  "contactCTA": "開啟一次技術交流",
  "copyEmail": "複製電子郵件地址",
  "copied": "電子郵件地址已複製。",
  "copyFailed": "請選取上方電子郵件地址進行複製。",
  "footerLine": "面向全球電腦的技術服務。",
  "menuOpen": "開啟導覽",
  "menuClose": "關閉導覽",
  "skip": "跳至主要內容",
  "artAlt": "由相互連接的運算路徑構成的抽象雕塑",
  "meta": "從程式語言、執行時到共識技術，為需要持久狀態、明確權限與可驗證執行的 Agent 提供工程基礎。我們是 ALUX 底層技術的研發團隊。",
  "pageTitle": "ConcurSys——Agent 執行基礎設施",
  "navLabel": "主導覽",
  "languageLabel": "選擇語言",
  "emailSubject": "ConcurSys 技術服務諮詢",
  "emailBody": "專案簡介：\n\n技術問題：\n\n預期合作範圍與時程：\n"
 },
 "pageCopy": {
  "home": "首頁",
  "overview": "概覽",
  "learnMore": "了解詳情",
  "related": "相關技術",
  "serviceDetail": "服務詳情",
  "technologyDetail": "技術詳情",
  "approach": "合作流程",
  "contactIntro": "請介紹你正在打造的系統、遇到的執行難題，以及希望討論的合作範圍。我們會據此判斷現有工程能力是否符合你的需求。",
  "projectLabel": "專案",
  "emailLabel": "電子郵件",
  "challengeLabel": "技術難題",
  "scopeLabel": "希望討論的範圍",
  "prepareEmail": "準備郵件",
  "emailHint": "此操作會開啟郵件用戶端並產生草稿，不會自動寄出。",
  "required": "請填寫必填欄位。",
  "servicesIntro": "我們深入系統的執行層，處理執行時與位元組碼工程，以及多台參與機器之間所需的協作和狀態管理。每項合作都從系統限制和需要實作或分析的具體行為出發。",
  "technologyIntro": "我們的工作涵蓋語言與位元組碼執行、進程協作、權限邊界、持久執行模式和分散式共識。這些技術構成工程實務的基礎；具體方案仍須依據系統需求與部署環境評估。",
  "companyIntro": "ConcurSys 是一家美國技術公司，也是 ALUX 的技術服務公司。我們研發底層語言、執行時與共識技術，並將相關工程經驗用於支援打造全球電腦的團隊。",
  "serviceDetails": {
   "agent": {
    "eyebrow": "公有鏈 Agent 執行支援",
    "title": "為鏈上執行提供工程支援。",
    "intro": "我們協助團隊梳理在公有鏈上運作的 Agent 執行問題，包括如何協調執行、延續狀態，以及如何在執行時邊界表達權限。服務範圍依底層系統需求確定。",
    "questionsTitle": "共同梳理的工程問題",
    "questions": [
     "哪些執行步驟需要在鏈上完成，哪些依賴位於鏈外？",
     "跨區塊需要保留哪些狀態，又應在什麼條件下恢復執行？",
     "能力與存取邊界如何表達，並在執行時互動中得到落實？"
    ],
    "deliverablesTitle": "可約定的工程交付",
    "deliverables": [
     "依據既定系統需求整理的執行架構與邊界說明。",
     "說明狀態、協作和權限介面的執行時整合方案。",
     "針對約定情境與故障情況設計的執行測試及技術說明。"
    ]
   },
   "vm": {
    "eyebrow": "虛擬機工程",
    "title": "依據系統需求打造位元組碼執行時。",
    "intro": "我們處理位元組碼執行、進程協作和執行時語意。工作可以圍繞具體的 TVM 環境及其工具鏈，也可以聚焦執行時與周邊系統之間所需的行為。",
    "questionsTitle": "共同梳理的工程問題",
    "questions": [
     "執行時需要支援哪些位元組碼操作與執行語意？",
     "並行進程應如何透過通道和通訊事件協作？",
     "檢查執行過程需要哪些工具鏈、觀測、重播或診斷能力？"
    ],
    "deliverablesTitle": "可約定的工程交付",
    "deliverables": [
     "對應所需執行語意的執行時設計或實作方案。",
     "針對位元組碼、編譯器與工具鏈、進程及通訊邊界的整合說明。",
     "涵蓋代表性執行路徑與邊界情況的專項診斷或測試方案。"
    ]
   },
   "distributed": {
    "eyebrow": "分散式系統",
    "title": "協調多台參與機器上的執行。",
    "intro": "我們分析機器之間的並行、重播、協定行為和故障處理。工作以系統的協作模型及待驗證的性質為依據，不對約定設計之外的保證作出假設。",
    "questionsTitle": "共同梳理的工程問題",
    "questions": [
     "參與方之間的並行更新如何排序、關聯或協調？",
     "為了確定性重播，需要記錄哪些執行資訊？",
     "參與方、訊息或依賴延遲或無法使用時，系統應如何回應？"
    ],
    "deliverablesTitle": "可約定的工程交付",
    "deliverables": [
     "說明協作機制與狀態轉移邊界的系統或協定架構。",
     "針對並行、重播及選定故障條件的分散式測試情境。",
     "與約定範圍相符的實作及整合分析紀錄。"
    ]
   }
  },
  "techDetails": {
   "glvm": {
    "focusTitle": "仍在發展的系統級架構",
    "points": [
     "GLVM 是正在多個參與 TVM 之上打造的執行架構，仍在持續演進。",
     "它在各個位元組碼引擎之上定義共同的邏輯模型，目前尚非已完成、正式可用的產品。",
     "工程討論可圍繞具體系統的執行時邊界、協作假設與整合需求展開。"
    ]
   },
   "tvm": {
    "focusTitle": "具體的位元組碼執行與進程協作",
    "points": [
     "TVM 是參與機器上的位元組碼引擎，負責執行 Tolang 位元組碼。",
     "並行進程透過通道與通訊事件進行協調。",
     "執行時工程可討論執行語意、工具鏈整合、診斷能力與進程邊界。"
    ]
   },
   "blockgit": {
    "focusTitle": "以圖結構組織並行區塊歷史",
    "points": [
     "BlockGit 是為 ALUX 研發的共識協定。",
     "其設計以有向無環圖組織並行區塊，並包含強連結與弱連結。",
     "合併規則用於協調區塊歷史與狀態轉移；協定行為需依據系統需求評估。"
    ]
   },
   "ocap": {
    "focusTitle": "透過參照表達權限",
    "points": [
     "物件能力設計使用不可偽造的參照，限定任務能夠存取的物件。",
     "在 TVM 原生互動中，權限邊界由執行時強制執行。",
     "外部服務與託管環境仍須具備各自的存取控管，並經過整合審查。"
    ]
   },
   "durable": {
    "focusTitle": "可等待並繼續的有狀態執行",
    "points": [
     "公有鏈可以為 Agent 執行提供持久環境。",
     "保留狀態與續體，可支援任務跨區塊等待依賴條件就緒。",
     "每個系統都需要明確恢復條件、重播需求與終局邊界。"
    ]
   }
  }
 },
 "technologyCopy": {
  "mapTitle": "深入 Agent 的執行底座。",
  "mapIntro": "沿著語言、執行時、權限、狀態與共識，檢視各模組如何支撐 Agent 執行，以及它們之間的協作關係。",
  "mapHint": "點選模組，查看它的職責及連接關係。",
  "layers": [
   "開發入口",
   "並行執行",
   "交易與驗證",
   "共識與網路",
   "演進方向"
  ],
  "current": "目前技術基礎",
  "evolving": "持續演進",
  "roadmap": "路線圖",
  "role": "模組職責",
  "connections": "協作模組",
  "details": "技術詳解",
  "team": "團隊",
  "modules": {
   "tolang": {
    "name": "Tolang",
    "title": "面向並行服務的語言與編譯器",
    "body": "ConcurSys 研發 Tolang 及其編譯器，用於表達面向 TVM 執行時的並行進程。",
    "help": "語言設計、編譯器行為，以及從原始碼到執行時的銜接。",
    "points": [
     "將 Tolang 程式編譯為面向 TVM 的位元組碼。",
     "以並行進程表達工作，並透過通道進行通訊。",
     "銜接原始碼中的服務邏輯、TVM 執行與開發工具鏈。"
    ],
    "status": "current"
   },
   "replay": {
    "name": "ReplayTrie 與 BranchId",
    "title": "支援確定性驗證的可重播證據",
    "body": "執行時記錄可能產生差異的執行選擇，使驗證者能夠重現已被接受的執行路徑。",
    "help": "重播需求、執行證據與驗證者端的路徑重現。",
    "points": [
     "BranchId 標示已記錄工作所屬的執行分支。",
     "COMM 紀錄保存相關通訊事件與執行選擇。",
     "ReplayTrie 組織用於確定性重現執行的證據。"
    ],
    "status": "current"
   },
   "atomicity": {
    "name": "跨區塊原子性",
    "title": "可以等待和恢復的單筆交易",
    "body": "一筆 ALUX 交易可以在區塊邊界暫停，並在後續區塊繼續執行；其 ALUX 狀態變更會保持暫存，直到最終提交或中止。",
    "help": "長流程、隔離邊界，以及提交與中止行為。",
    "points": [
     "Segments 與 Partitions 在暫停點保存執行進度。",
     "隔離與重播支援跨區塊恢復和驗證。",
     "原子性涵蓋暫存中的 ALUX 狀態；API 呼叫或現實動作等外部副作用不會自動復原。"
    ],
    "status": "current"
   },
   "evm": {
    "name": "EVM 與 TSAC",
    "title": "在 TVM 協調下執行受支援的 EVM 工作負載",
    "body": "ALUX 目前在隔離執行環境中支援部分 EVM 工作負載。TSAC 將相關全域狀態操作交由 TVM 協調；具體相容範圍取決於目前支援的介面範圍。",
    "help": "EVM 整合邊界、TSAC 協調方式與工作負載相容性評估。",
    "points": [
     "每個 EVM 執行個體擁有獨立的執行堆疊與記憶體。",
     "TSAC 將受支援的全域狀態互動轉交 TVM 進程協同處理。",
     "WASM guest 執行仍在規劃中；這並不代表相容所有 EVM 合約。"
    ],
    "status": "current"
   },
   "framework": {
    "name": "Segments · Partitions · Fringe",
    "title": "組織執行工作，銜接排程與終局",
    "body": "框架服務將執行軌跡封存為 Segments 與 Partitions，供區塊產出使用；BlockGit 對某個 Fringe 完成終局確認後，其中的並行區塊會合併為一次狀態轉移。",
    "help": "執行排程、依賴處理，以及執行時工作到區塊產出的銜接。",
    "points": [
     "Segments 記錄邊界清晰的執行進度片段。",
     "Partitions 將一筆交易已封存的 Segments 歸組，納入區塊。",
     "BlockGit 每確認一個 Fringe 的終局，FringeBuilder 就對其執行區塊合併。"
    ],
    "status": "current"
   },
   "node": {
    "name": "節點 · RPC · P2P",
    "title": "連接網路的執行時介面",
    "body": "節點層將執行系統接入受支援的 RPC 方法、節點間通訊與儲存環境。具體介面和執行行為以目前實作範圍為準。",
    "help": "節點整合、RPC 支援範圍、節點通訊與儲存邊界。",
    "points": [
     "提供目前已支援的以太坊風格 eth_* RPC 方法。",
     "P2P gossip 在參與節點間傳遞網路訊息。",
     "節點儲存環境與靜態服務介面圍繞執行時提供支援。"
    ],
    "status": "current"
   },
   "tooling": {
    "name": "編譯器 · LSP · Playground",
    "title": "在開發過程中檢查和試執行服務邏輯",
    "body": "編譯器診斷、語言伺服器與 Playground 工作流程，協助開發者在接入節點前檢查 Tolang 程式。",
    "help": "編譯器整合、診斷資訊、編輯器工作流程與早期執行評估。",
    "points": [
     "編譯器診斷揭露原始碼至位元組碼流程中的問題。",
     "LSP 工作流程支援具備語言感知能力的檢視與編輯。",
     "Playground 的執行、展開與格式化功能便於檢查服務行為。"
    ],
    "status": "current"
   },
   "sharding": {
    "name": "跨分片執行",
    "title": "跨分片實現橫向原子性",
    "body": "設計目標是在參與分片之間建立統一的全有或全無交易邊界。跨分片執行仍在路線圖中。",
    "help": "未來的跨分片交易協作，以及避免部分結果對外可見。",
    "points": [
     "在統一交易邊界內暫存各分片的本地變更。",
     "所有參與變更一併提交，或一併中止。",
     "避免無關交易觀察到尚未完成的跨分片中間狀態。"
    ],
    "status": "roadmap"
   },
   "worldos": {
    "name": "World OS 與用戶端",
    "title": "將執行模型延伸到更多環境",
    "body": "可程式化的 World OS 層與用戶端裝置部署，是系統未來的拓展方向，屬於路線圖規劃，並非目前的執行時能力。",
    "help": "未來部署形態，以及支撐這些形態所需的系統級抽象。",
    "points": [
     "GLVM 是仍在演進的系統級模型，連接多個參與 TVM。",
     "在用戶端裝置部署 TVM 仍屬規劃方向。",
     "可程式化的 World OS 層仍在路線圖中。"
    ],
    "status": "roadmap"
   }
  },
  "menuGroups": [
   "語言與執行時",
   "執行與安全",
   "共識與整合",
   "研發方向"
  ]
 },
 "teamCopy": {
  "title": "打造底層系統的人",
  "intro": "ConcurSys 匯聚了量化風險系統與並行運算領域的經驗，並將這些積累用於研發執行時、程式語言與共識技術。",
  "frank": {
   "role": "創辦人暨總裁",
   "bio": [
    "Frank He（Atticbee）是一位區塊鏈研究者與創業家，工作涵蓋並行虛擬機的設計與實作。創辦 ConcurSys 之前，他在 Bloomberg、Lehman Brothers 和 Barclays Capital 擔任資深量化分析師與開發者逾十五年，打造高度可擴展的風險運算系統。",
    "在 ConcurSys，他將這段經驗用於並行系統架構設計，並把為 ALUX 研發的執行時、程式語言與共識技術銜接成完整的工程基礎。"
   ],
   "focus": [
    "並行系統",
    "風險運算",
    "執行時架構"
   ]
  },
  "tomislav": {
   "role": "技術長",
   "bio": [
    "Tomislav 對運算的興趣，始於五歲時的一台紙板計算機，十歲時又在 C64c 上寫起了組合語言。十餘年的電子技術經歷，以及二十餘年橫跨 JavaScript、Haskell 等語言的程式設計實務，形塑了他的工作方式：先探索模型，再理解機制，然後動手打造。",
    "他以進程演算探索並行運算。在 ConcurSys，他將進程與通訊的形式化模型帶入執行時工程，以持續的好奇心和對專案的深入投入，參與打造 ALUX 的底層技術。"
   ],
   "focus": [
    "進程演算",
    "並行運算",
    "執行時工程"
   ]
  }
 },
 "joinCopy": {
  "nav": "加入我們",
  "title": "一起打造底層技術。",
  "intro": "如果你關注並行系統、程式語言或分散式執行，歡迎向我們介紹自己，以及你希望參與的工程工作。",
  "label": "技術方向",
  "body": "聊聊你打造過的系統、深入研究過的技術難題，或引以為傲的開源貢獻。也歡迎附上相關連結，幫助我們了解你的工作。",
  "cta": "介紹你自己",
  "subject": "與 ConcurSys 一起工作",
  "email": "個人介紹：\n\n技術興趣：\n\n代表作品與連結：\n"
 },
 "agentCopy": {
  "eyebrow": "Agent 底層技術",
  "title": "為 Agent，<br>打造執行底座。",
  "body": "從程式語言、執行時到共識技術，為需要持久狀態、明確權限與可驗證執行的 Agent 提供工程基礎。我們是 ALUX 底層技術的研發團隊。",
  "rails": [
   "狀態持續保存",
   "權限清晰可控",
   "執行協同推進",
   "結果可重播驗證"
  ],
  "servicesTitle": "Agent 需要底座，<br>我們負責打造。",
  "servicesIntro": "從 Agent 使用的語言，到驗證執行結果的網路，我們打造支撐執行的每一層。",
  "mapTitle": "深入 Agent 的執行底座。",
  "mapIntro": "沿著語言、執行時、權限、狀態與共識，檢視各模組如何支撐 Agent 執行，以及它們之間的協作關係。",
  "bridgeTitle": "從 Agent 的意圖，<br>到系統的實際執行。",
  "bridgeBody": "模型可以提出行動，執行系統則需要定義：哪些工作能夠執行、可以存取什麼、等待期間如何保存狀態，以及如何對結果達成一致。這些正是我們研發 ALUX 底層技術時解決的工程問題。",
  "coreLabels": [
   "原生並行語言",
   "Agent 執行引擎",
   "明確的權限邊界",
   "並行共識協定",
   "統一邏輯執行模型"
  ]
 },
 "agentRelevance": {
  "label": "面向 Agent 系統",
  "modules": {
   "glvm": "GLVM 是仍在演進的共享邏輯模型，橫跨多個參與 TVM，用於在系統層協調執行。",
   "tolang": "Tolang 用於表達並行服務邏輯，並可編譯為由 TVM 執行的位元組碼。",
   "tvm": "TVM 執行位元組碼，並協調並行進程之間的通訊。",
   "ocap": "物件能力機制明確界定 Agent 可以觸及哪些物件與資源。",
   "durable": "持久執行保留狀態與續體，使任務能夠等待依賴就緒後繼續執行。",
   "atomicity": "跨區塊原子性讓 ALUX 狀態暫存至提交或中止；外部副作用不會因此自動復原。",
   "replay": "重播為確定性地重新執行並核對已記錄的執行選擇提供依據。",
   "framework": "Segments、Partitions 與 Fringe 用於組織執行、恢復和終局邊界。",
   "blockgit": "BlockGit 協調分散式參與方之間的並行區塊歷史與狀態。",
   "evm": "EVM/TSAC 讓既有 EVM 合約可在 TVM 協調下接入。",
   "node": "節點介面連接 Agent 的請求與狀態查詢，P2P 層負責節點間傳播。",
   "tooling": "編譯器、LSP 與 Playground 工具協助打造並檢查程式邏輯。",
   "sharding": "跨分片原子性是協調跨分片 Agent 工作的後續研發方向。",
   "worldos": "World OS 與用戶端部署是路線圖中的方向，目標是可程式化的執行環境。"
  }
 },
 "tolangCopy": {
  "eyebrow": "面向新一代區塊鏈的原生程式語言",
  "title": "Tolang，讓 Agent 原生表達並行工作。",
  "intro": "Tolang 為新一代區塊鏈系統而設計，將 Agent 工作流程接入執行層：並行進程、具型別的通訊，以及直達 TVM 執行時的路徑。",
  "cta": "了解 Tolang 工具鏈",
  "pipeline": [
   "Tolang 原始碼",
   "tolangc 編譯器",
   ".tox 位元組碼",
   "TVM 進程"
  ],
  "features": [
   {
    "title": "並行即語言原語",
    "body": "將工作表達為可分支、等待、恢復並協同推進的進程，讓 Agent 系統能清楚描述單次循序呼叫無法承載的任務。"
   },
   {
    "title": "具型別的進程通訊",
    "body": "進程透過具型別的元組空間通道交換資料，而非共享記憶體。通道描述符與行為型別有助於提前發現部分誤用，通道生命週期則由執行時規則約束。"
   },
   {
    "title": "通往持久運作的服務",
    "body": "Tolang 編譯為 TVM 位元組碼，進程可在等待後繼續執行，並透過通道協作。語言負責銜接服務邏輯與執行時；持久性和交易保證取決於 ALUX 系統的其他部分。"
   },
   {
    "title": "實用的開發循環",
    "body": "編譯器 API、LSP 診斷、格式化、展開與 Playground 試執行，協助團隊從原始碼出發檢查並迭代服務行為。"
   }
  ]
 },
 "heroExecutionCopy": {
  "eyebrow": "Agent 執行底層技術",
  "title": "從意圖<br>到執行。",
  "body": "ConcurSys 研發 ALUX 底層的語言、執行時與共識技術。它們共同構成表達、協調和檢查 Agent 任務的工程層。",
  "diagramLabel": "執行原理示意",
  "agents": "Agent 任務",
  "service": "Tolang 服務",
  "scope": "OCAP 權限",
  "runtime": "TVM 進程",
  "proof": "ReplayTrie + BlockGit",
  "states": [
   {
    "label": "01 / 定義",
    "title": "表達並行工作。",
    "body": "Tolang 以進程演算描述服務邏輯，讓工作能夠拆分、通訊並並行推進。"
   },
   {
    "label": "02 / 授權",
    "title": "明確權限邊界。",
    "body": "物件能力機制透過不可偽造的參照，限定任務可以存取哪些物件與資源。"
   },
   {
    "label": "03 / 執行",
    "title": "協調、等待與恢復。",
    "body": "TVM 執行透過通道通訊的進程；保留的執行狀態可等待依賴就緒後繼續執行。"
   },
   {
    "label": "04 / 驗證",
    "title": "檢查執行與共識。",
    "body": "ReplayTrie 為重播執行提供依據，BlockGit 則協調並行區塊歷史與狀態。"
   }
  ],
  "mapTitle": "了解 Agent 執行底座。",
  "mapBody": "檢視語言、權限、執行時與共識如何銜接。",
  "mapLink": "探索技術架構",
  "demo": {
   "label": "互動執行示範",
   "run": "啟動任務",
   "pause": "暫停",
   "continue": "繼續",
   "resume": "恢復任務",
   "replay": "重新示範",
   "reset": "重設",
   "scenario": "任務情境",
   "allowed": "權限範圍內",
   "denied": "越權存取",
   "status": {
    "idle": "準備開始",
    "defined": "Tolang · 已定義並行任務",
    "authorized": "OCAP · 允許存取",
    "waiting": "TVM · 等待依賴",
    "resumed": "TVM · 已恢復執行",
    "verified": "ReplayTrie + BlockGit · 驗證階段",
    "denied": "OCAP · 拒絕存取"
   },
   "deniedTitle": "權限，是明確的邊界。",
   "deniedBody": "這個範例請求了授權範圍外的資源，任務在權限邊界處停止。",
   "waitTitle": "等待，不必從頭開始。",
   "waitBody": "示範中的任務正在等待外部依賴。點擊「恢復任務」，查看執行如何從保留的狀態繼續。",
   "doneTitle": "從執行，走向驗證。",
   "doneBody": "示範進入重播驗證與共識階段。ReplayTrie 提供執行證據，BlockGit 協調並行歷史。"
  }
 },
 "stackCopy": {
  "relation": "ALUX 的技術服務公司",
  "frame": "Agent 執行技術堆疊",
  "builtBy": "由 ConcurSys 研發",
  "layers": {
   "tolang": "語言",
   "ocap": "權限",
   "tvm": "並行執行時",
   "blockgit": "共識",
   "glvm": "邏輯虛擬機"
  },
  "tiles": {
   "tolang": [
    "並行進程",
    "型別化通道",
    "Join 模式",
    "tolangc → .tox"
   ],
   "ocap": [
    "不可偽造的參照",
    "守衛通道",
    "權限縮限",
    "權限委派"
   ]
  },
  "tvmCaption": "元組空間 / COMM 事件 / 等待與恢復",
  "bgCaption": "DAG 區塊 / 弱連結 / Fringe 終局",
  "substrates": [
   "區塊鏈節點",
   "雲端伺服器",
   "個人裝置"
  ],
  "trace": "任務軌跡",
  "traceIdle": "執行一個任務，查看它如何逐層通過。",
  "readTitle": "如何解讀圖示。",
  "readIntro": "每一層都是 ConcurSys 為 ALUX 研發的執行時技術。選擇一層查看說明，或執行一個任務，看它如何逐層通過。",
  "aluxTitle": "我們研發 ALUX 的底層技術，也把它帶進你的系統。",
  "aluxLab": "Runtime Lab",
  "aluxCode": "GitHub",
  "servicesLabel": "技術服務",
  "codeCaption": "兩個 Agent 平行回報，只有兩份結果都到齊，Join 才會觸發。"
 }
});
