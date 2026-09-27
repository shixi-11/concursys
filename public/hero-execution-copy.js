window.heroExecutionCopy = {
  en: {
    eyebrow: 'Agent execution foundations',
    title: 'From intent<br>to execution.',
    body: 'ConcurSys builds ALUX’s underlying language, runtime, and consensus technologies. Together, they provide the engineering layers for expressing, coordinating, and examining agent work.',
    diagramLabel: 'Execution model',
    agents: 'Agent tasks',
    service: 'Tolang service',
    scope: 'OCAP authority',
    runtime: 'TVM processes',
    proof: 'ReplayTrie + BlockGit',
    states: [
      { label: '01 / DEFINE', title: 'Express concurrent work.', body: 'Tolang uses process calculus to describe services that divide work, communicate, and progress concurrently.' },
      { label: '02 / AUTHORIZE', title: 'Make authority explicit.', body: 'Object capabilities use unforgeable references to define which objects and resources a task can access.' },
      { label: '03 / EXECUTE', title: 'Coordinate, wait, resume.', body: 'TVM runs processes that communicate through channels; preserved execution state can wait for dependencies and resume when ready.' },
      { label: '04 / VERIFY', title: 'Inspect execution and agreement.', body: 'ReplayTrie provides a basis for replaying execution, while BlockGit coordinates concurrent block history and state.' }
    ],
    mapTitle: 'Explore the execution stack.',
    mapBody: 'See how language, authority, runtime, and consensus fit together.',
    mapLink: 'Explore the architecture'
  },
  zh: {
    eyebrow: 'Agent 执行底层技术',
    title: '从意图出发，<br>让执行有据可循。',
    body: 'ConcurSys 研发 ALUX 底层的语言、运行时与共识技术。它们共同构成表达、协调和检查 Agent 任务的工程层。',
    diagramLabel: '执行原理示意',
    agents: 'Agent 任务',
    service: 'Tolang 服务',
    scope: 'OCAP 权限',
    runtime: 'TVM 进程',
    proof: 'ReplayTrie + BlockGit',
    states: [
      { label: '01 / 定义', title: '表达并发工作。', body: 'Tolang 以进程演算描述服务逻辑，让工作能够拆分、通信并并发推进。' },
      { label: '02 / 授权', title: '明确权限边界。', body: '对象能力机制通过不可伪造的引用，限定任务可以访问哪些对象与资源。' },
      { label: '03 / 执行', title: '协调、等待与恢复。', body: 'TVM 运行通过通道通信的进程；保留的执行状态可等待依赖就绪后继续运行。' },
      { label: '04 / 验证', title: '检查执行与共识。', body: 'ReplayTrie 为重放执行提供依据，BlockGit 则协调并发区块历史与状态。' }
    ],
    mapTitle: '了解 Agent 执行底座。',
    mapBody: '查看语言、权限、运行时与共识如何衔接。',
    mapLink: '探索技术架构'
  },
  ko: {
    eyebrow: '에이전트 실행 기반 기술',
    title: '의도에서<br>실행까지.',
    body: 'ConcurSys는 ALUX의 기반 언어, 런타임, 합의 기술을 개발합니다. 이 기술들은 에이전트 작업을 표현하고 조율하며 살펴보기 위한 엔지니어링 계층을 이룹니다.',
    diagramLabel: '실행 모델',
    agents: '에이전트 작업',
    service: 'Tolang 서비스',
    scope: 'OCAP 권한',
    runtime: 'TVM 프로세스',
    proof: 'ReplayTrie + BlockGit',
    states: [
      { label: '01 / 정의', title: '동시 작업을 표현합니다.', body: 'Tolang은 프로세스 계산법으로 작업을 나누고 통신하며 동시에 진행하는 서비스를 기술합니다.' },
      { label: '02 / 권한 설정', title: '권한을 명확히 합니다.', body: '객체 능력은 위조할 수 없는 참조로 작업이 접근할 수 있는 객체와 리소스를 정의합니다.' },
      { label: '03 / 실행', title: '조율하고 기다렸다 재개합니다.', body: 'TVM은 채널로 통신하는 프로세스를 실행하며, 보존된 실행 상태는 의존성이 준비될 때까지 기다렸다가 재개할 수 있습니다.' },
      { label: '04 / 검증', title: '실행과 합의를 살펴봅니다.', body: 'ReplayTrie는 실행을 재생해 확인할 근거를 제공하고, BlockGit은 동시 블록 이력과 상태를 조율합니다.' }
    ],
    mapTitle: '에이전트 실행 기반 살펴보기.',
    mapBody: '언어, 권한, 런타임, 합의가 어떻게 연결되는지 확인하세요.',
    mapLink: '아키텍처 살펴보기'
  },
  ja: {
    eyebrow: 'エージェント実行の基盤技術',
    title: '意図から<br>実行へ。',
    body: 'ConcurSysはALUXの基盤となる言語、ランタイム、コンセンサス技術を開発しています。これらがエージェントの処理を記述し、調整し、確認するための技術層を構成します。',
    diagramLabel: '実行モデル',
    agents: 'エージェントのタスク',
    service: 'Tolangサービス',
    scope: 'OCAP権限',
    runtime: 'TVMプロセス',
    proof: 'ReplayTrie + BlockGit',
    states: [
      { label: '01 / 定義', title: '並行処理を記述する。', body: 'Tolangはプロセス計算によって、処理を分け、通信し、並行して進めるサービスを記述します。' },
      { label: '02 / 権限設定', title: '権限を明確にする。', body: 'オブジェクト能力は偽造できない参照を使い、タスクがアクセスできるオブジェクトとリソースを定めます。' },
      { label: '03 / 実行', title: '調整し、待機し、再開する。', body: 'TVMはチャネルで通信するプロセスを実行します。保持された実行状態は依存先を待ち、準備が整うと再開できます。' },
      { label: '04 / 検証', title: '実行と合意を確認する。', body: 'ReplayTrieは実行をリプレイして確認する根拠となり、BlockGitは並行ブロック履歴と状態を調整します。' }
    ],
    mapTitle: 'エージェント実行基盤を見る。',
    mapBody: '言語、権限、ランタイム、コンセンサスのつながりを紹介します。',
    mapLink: 'アーキテクチャを見る'
  },
  ar: {
    eyebrow: 'أسس تنفيذ الوكلاء',
    title: 'من النية<br>إلى التنفيذ.',
    body: 'تطور ConcurSys اللغة وبيئة التشغيل وتقنيات الإجماع الأساسية في ALUX. وتشكل هذه التقنيات طبقات هندسية للتعبير عن مهام الوكلاء وتنسيقها وفحصها.',
    diagramLabel: 'نموذج التنفيذ',
    agents: 'مهام الوكلاء',
    service: 'خدمة Tolang',
    scope: 'صلاحيات OCAP',
    runtime: 'عمليات TVM',
    proof: 'ReplayTrie + BlockGit',
    states: [
      { label: '01 / التعريف', title: 'عبّر عن العمل المتزامن.', body: 'تستخدم Tolang حساب العمليات لوصف خدمات تقسّم العمل وتتواصل وتتقدم بالتوازي.' },
      { label: '02 / التفويض', title: 'اجعل الصلاحيات واضحة.', body: 'تستخدم صلاحيات الكائنات مراجع غير قابلة للتزوير لتحديد الكائنات والموارد التي تستطيع المهمة الوصول إليها.' },
      { label: '03 / التنفيذ', title: 'نسّق وانتظر ثم استأنف.', body: 'تشغّل TVM عمليات تتواصل عبر القنوات؛ ويمكن لحالة التنفيذ المحفوظة انتظار اعتمادياتها ثم الاستئناف عند جاهزيتها.' },
      { label: '04 / التحقق', title: 'افحص التنفيذ والإجماع.', body: 'توفر ReplayTrie أساسًا لإعادة تنفيذ العمل وفحصه، بينما ينسق BlockGit سجل الكتل المتزامنة والحالة.' }
    ],
    mapTitle: 'استكشف بنية تنفيذ الوكلاء.',
    mapBody: 'تعرّف على ترابط اللغة والصلاحيات وبيئة التشغيل والإجماع.',
    mapLink: 'استكشف المعمارية'
  }
};
