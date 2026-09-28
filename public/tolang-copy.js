window.tolangCopy = {
  en: {
    eyebrow: "A native language for next-generation blockchains",
    title: "Tolang gives agents a native way to express concurrent work.",
    intro: "Built for next-generation blockchain systems, Tolang connects agent workflows to the execution layer: concurrent processes, typed communication, and a direct path to the TVM runtime.",
    cta: "Explore the Tolang toolchain",
    pipeline: ["Tolang source", "tolangc compiler", ".tox bytecode", "TVM processes"],
    features: [
      { title: "Concurrency as a language primitive", body: "Express work as processes that can fork, wait, resume, and make progress together. This gives agent systems a clear way to describe tasks that do not fit a single sequential call." },
      { title: "Typed process communication", body: "Processes exchange data through typed tuple-space channels rather than shared memory. Channel descriptors and behavioral types help catch some misuse early; runtime rules govern channel lifecycles." },
      { title: "A path into persistent services", body: "Tolang compiles to TVM bytecode, where processes can continue across waits and coordinate through channels. The language connects service logic to the runtime; persistence and transaction guarantees depend on the surrounding ALUX system." },
      { title: "A practical developer loop", body: "Compiler APIs, LSP diagnostics, formatting, expansion, and Playground runs help teams inspect and iterate on service behavior from source toward runtime." }
    ]
  },
  zh: {
    eyebrow: "面向新一代区块链的原生编程语言",
    title: "Tolang，让 Agent 原生表达并发工作。",
    intro: "Tolang 为新一代区块链系统而设计，将 Agent 工作流接入执行层：并发进程、带类型的通信，以及直达 TVM 运行时的路径。",
    cta: "了解 Tolang 工具链",
    pipeline: ["Tolang 源码", "tolangc 编译器", ".tox 字节码", "TVM 进程"],
    features: [
      { title: "并发即语言原语", body: "将工作表达为可分支、等待、恢复并协同推进的进程，让 Agent 系统能清晰描述单次顺序调用无法承载的任务。" },
      { title: "带类型的进程通信", body: "进程通过带类型的元组空间通道交换数据，而非共享内存。通道描述符与行为类型有助于提前发现部分误用，通道生命周期则由运行时规则约束。" },
      { title: "通往持久运行的服务", body: "Tolang 编译为 TVM 字节码，进程可在等待后继续执行，并通过通道协作。语言负责衔接服务逻辑与运行时；持久性和事务保证取决于 ALUX 系统的其他部分。" },
      { title: "实用的开发闭环", body: "编译器 API、LSP 诊断、格式化、展开与 Playground 试运行，帮助团队从源码出发检查并迭代服务行为。" }
    ]
  },
  ko: {
    eyebrow: "차세대 블록체인을 위해 설계된 언어",
    title: "Tolang은 에이전트가 동시 작업을 자연스럽게 표현하도록 돕습니다.",
    intro: "차세대 블록체인 시스템의 실행 계층을 위해 설계된 Tolang은 에이전트 워크플로를 동시 프로세스, 타입이 있는 통신, TVM 런타임으로 연결합니다.",
    cta: "Tolang 툴체인 살펴보기",
    pipeline: ["Tolang 소스", "tolangc 컴파일러", ".tox 바이트코드", "TVM 프로세스"],
    features: [
      { title: "언어의 기본 요소로 표현하는 동시성", body: "작업을 분기하고 기다렸다가 재개하며 함께 진행하는 프로세스로 표현합니다. 단일 순차 호출로 담기 어려운 에이전트 작업을 명확히 기술할 수 있습니다." },
      { title: "타입이 있는 프로세스 통신", body: "프로세스는 공유 메모리 대신 타입이 있는 튜플 스페이스 채널로 데이터를 주고받습니다. 채널 설명자와 행위 타입은 일부 오용을 미리 찾는 데 도움이 되며, 런타임 규칙이 채널 수명 주기를 관리합니다." },
      { title: "지속 실행 서비스로 이어지는 경로", body: "Tolang은 TVM 바이트코드로 컴파일되며, 프로세스는 대기 후 실행을 이어가고 채널로 협력할 수 있습니다. 언어는 서비스 로직과 런타임을 연결하며, 지속성과 트랜잭션 보장은 ALUX 시스템의 다른 구성 요소에 달려 있습니다." },
      { title: "실용적인 개발 루프", body: "컴파일러 API, LSP 진단, 포매팅, 확장 보기, Playground 실행으로 소스에서 런타임 동작까지 살펴보고 개선할 수 있습니다." }
    ]
  },
  ja: {
    eyebrow: "次世代ブロックチェーンのために生まれた言語",
    title: "Tolangで、エージェントの並行処理を自然に記述。",
    intro: "次世代ブロックチェーンの実行層を想定して設計されたTolangは、エージェントのワークフローを並行プロセス、型付き通信、TVMランタイムへつなぎます。",
    cta: "Tolangのツールチェーンを見る",
    pipeline: ["Tolangソース", "tolangcコンパイラ", ".toxバイトコード", "TVMプロセス"],
    features: [
      { title: "並行性を言語で表現", body: "処理を、分岐・待機・再開しながら並行して進むプロセスとして記述できます。単一の逐次呼び出しに収まらないエージェントのタスクも明確に表現できます。" },
      { title: "型付きのプロセス間通信", body: "プロセスは共有メモリではなく、型付きタプルスペースチャネルを介してデータを交換します。チャネル記述子と振る舞い型は一部の誤用を早期に検出する助けとなり、チャネルのライフサイクルはランタイム規則が制御します。" },
      { title: "永続的なサービスへの道筋", body: "TolangはTVMバイトコードにコンパイルされ、プロセスは待機後に実行を再開し、チャネルを通じて連携できます。言語はサービスロジックとランタイムをつなぎ、永続性やトランザクションの保証はALUXシステムの他の構成要素に依存します。" },
      { title: "開発を支えるツールチェーン", body: "コンパイラAPI、LSP診断、整形、展開表示、Playgroundでの実行により、ソースからランタイム動作まで確認しながら改善できます。" }
    ]
  },
  ar: {
    eyebrow: "لغة صُممت أصلًا للجيل الجديد من البلوك تشين",
    title: "تتيح Tolang للوكلاء التعبير عن العمل المتزامن بأسلوب أصيل.",
    intro: "صُممت Tolang لأنظمة البلوك تشين من الجيل الجديد، وتربط سير عمل الوكلاء بطبقة التنفيذ: عمليات متزامنة، واتصال مُنمَّط، ومسار مباشر إلى بيئة تشغيل TVM.",
    cta: "استكشف أدوات Tolang",
    pipeline: ["مصدر Tolang", "مصرّف tolangc", "شيفرة .tox البايتية", "عمليات TVM"],
    features: [
      { title: "التزامن عنصر أساسي في اللغة", body: "صِف العمل في صورة عمليات يمكنها التفرع والانتظار والاستئناف والتقدم معًا. يوفّر ذلك طريقة واضحة لتمثيل مهام الوكلاء التي لا تناسب استدعاءً تسلسليًا واحدًا." },
      { title: "اتصال مُنمَّط بين العمليات", body: "تتبادل العمليات البيانات عبر قنوات فضاء الصفوف المُنمَّطة، بدلًا من الذاكرة المشتركة. تساعد واصفات القنوات وأنواع السلوك على اكتشاف بعض حالات الاستخدام الخاطئ مبكرًا، بينما تضبط قواعد بيئة التشغيل دورة حياة القناة." },
      { title: "مسار نحو خدمات مستمرة", body: "تُصرَّف Tolang إلى شيفرة TVM البايتية، حيث تستطيع العمليات مواصلة التنفيذ عبر فترات الانتظار، والتنسيق فيما بينها عبر القنوات. تربط اللغة منطق الخدمة ببيئة التشغيل؛ أما ضمانات الاستمرارية والمعاملات فتعتمد على مكونات ALUX الأخرى." },
      { title: "سير عمل عملي للمطورين", body: "تساعد واجهات المصرّف وتشخيصات LSP والتنسيق وعرض التوسيع وتشغيل Playground الفرق على فحص سلوك الخدمات وتحسينه انطلاقًا من المصدر." }
    ]
  }
};
