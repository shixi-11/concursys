window.agentRelevance = {
  en: {
    label: 'For agent systems',
    modules: {
      glvm: 'GLVM is an evolving shared logical model across participating TVMs for coordinating execution at the system level.',
      tolang: 'Tolang expresses concurrent service logic that can be compiled for execution by TVM.',
      tvm: 'TVM executes bytecode and coordinates communication among concurrent processes.',
      ocap: 'Object capabilities make explicit which objects and resources an agent can reach.',
      durable: 'Durable execution preserves state and continuations so work can wait for dependencies and resume later.',
      atomicity: 'Cross-block atomicity stages ALUX state until commit or abort; external side effects do not automatically roll back.',
      replay: 'Replay provides a basis for deterministically re-running execution and checking its recorded choices.',
      framework: 'Segments, Partitions, and Fringe organize execution, recovery, and finalization boundaries.',
      blockgit: 'BlockGit coordinates concurrent block history and state across distributed participants.',
      evm: 'EVM/TSAC lets supported EVM contracts participate under TVM coordination.',
      node: 'Node interfaces connect agent requests and state queries; P2P handles propagation between nodes.',
      tooling: 'Compiler, LSP, and Playground tools help build and inspect program logic.',
      sharding: 'Cross-shard atomicity is a development direction for coordinating agent work across shards.',
      worldos: 'World OS and client deployment are roadmap directions for a programmable execution environment.'
    }
  },
  zh: {
    label: '面向 Agent 系统',
    modules: {
      glvm: 'GLVM 是仍在演进的共享逻辑模型，横跨多个参与 TVM，用于在系统层协调执行。',
      tolang: 'Tolang 用于表达并发服务逻辑，并可编译为由 TVM 执行的字节码。',
      tvm: 'TVM 执行字节码，并协调并发进程之间的通信。',
      ocap: '对象能力机制明确 Agent 可以触达哪些对象与资源。',
      durable: '持久执行保留状态与续体，使任务能够等待依赖就绪后继续运行。',
      atomicity: '跨区块原子性让 ALUX 状态暂存至提交或中止；外部副作用不会因此自动回滚。',
      replay: '重放为确定性地重新执行并核对已记录的执行选择提供依据。',
      framework: 'Segments、Partitions 与 Fringe 用于组织执行、恢复和终局边界。',
      blockgit: 'BlockGit 协调分布式参与方之间的并发区块历史与状态。',
      evm: 'EVM/TSAC 让既有 EVM 合约可在 TVM 协调下接入。',
      node: '节点接口连接 Agent 的请求与状态查询，P2P 层负责节点间传播。',
      tooling: '编译器、LSP 与 Playground 工具帮助构建并检查程序逻辑。',
      sharding: '跨分片原子性是协调跨分片 Agent 工作的后续研发方向。',
      worldos: 'World OS 与客户端部署是路线图中的方向，目标是可编程的执行环境。'
    }
  },
  ko: {
    label: '에이전트 시스템을 위한 기술',
    modules: {
      glvm: 'GLVM은 시스템 수준의 실행 조율을 위해 여러 참여 TVM에 걸쳐 개발 중인 공유 논리 모델입니다.',
      tolang: 'Tolang은 동시 서비스 로직을 표현하며 TVM에서 실행할 바이트코드로 컴파일할 수 있습니다.',
      tvm: 'TVM은 바이트코드를 실행하고 동시 프로세스 간 통신을 조율합니다.',
      ocap: '객체 케이퍼빌리티는 에이전트가 접근할 수 있는 객체와 리소스를 명확히 합니다.',
      durable: '지속 실행은 상태와 컨티뉴에이션을 보존해 작업이 의존성을 기다린 뒤 재개되도록 합니다.',
      atomicity: '블록 간 원자성은 ALUX 상태를 커밋 또는 중단까지 스테이징하며, 외부 부작용을 자동으로 되돌리지는 않습니다.',
      replay: '재생은 실행을 결정론적으로 다시 수행하고 기록된 선택을 확인할 근거를 제공합니다.',
      framework: 'Segments, Partitions, Fringe가 실행·복구·확정 경계를 구성합니다.',
      blockgit: 'BlockGit은 분산 참여자 간의 동시 블록 이력과 상태를 조율합니다.',
      evm: 'EVM/TSAC는 기존 EVM 컨트랙트가 TVM의 조율 아래 참여할 수 있도록 합니다.',
      node: '노드 인터페이스는 에이전트 요청과 상태 조회를 연결하고 P2P 계층은 노드 간 전파를 담당합니다.',
      tooling: '컴파일러, LSP, Playground 도구로 프로그램 로직을 작성하고 점검할 수 있습니다.',
      sharding: '샤드 간 원자성은 여러 샤드에 걸친 에이전트 작업을 조율하기 위한 개발 방향입니다.',
      worldos: '프로그래밍 가능한 World OS와 클라이언트 배포는 로드맵상의 실행 환경 방향입니다.'
    }
  },
  ja: {
    label: 'エージェントシステムを支える技術',
    modules: {
      glvm: 'GLVMは、参加する複数のTVMにまたがる実行をシステムレベルで調整するために開発中の共有論理モデルです。',
      tolang: 'Tolangは並行サービスのロジックを記述し、TVMで実行するバイトコードへコンパイルできます。',
      tvm: 'TVMはバイトコードを実行し、並行プロセス間の通信を調整します。',
      ocap: 'オブジェクトケイパビリティにより、エージェントがアクセスできるオブジェクトとリソースを明確にします。',
      durable: '永続的な実行では状態と継続を保持し、依存先を待つ処理を後から再開できます。',
      atomicity: 'ブロック間アトミシティではALUXの状態をコミットまたは中止までステージングしますが、外部の副作用は自動的にロールバックされません。',
      replay: 'リプレイは実行を決定論的に再現し、記録された選択を確認する根拠になります。',
      framework: 'Segments、Partitions、Fringeで実行・復旧・最終確定の境界を構成します。',
      blockgit: 'BlockGitは分散参加者間の並行ブロック履歴と状態を調整します。',
      evm: 'EVM/TSACにより、既存のEVMコントラクトをTVMの調整下で接続できます。',
      node: 'ノードのインターフェースはエージェントのリクエストと状態照会をつなぎ、P2P層がノード間の伝播を担います。',
      tooling: 'コンパイラ、LSP、Playgroundの各ツールでプログラムのロジックを構築し確認できます。',
      sharding: 'シャード間アトミシティは、複数シャードにまたがるエージェント処理を調整するための今後の開発方針です。',
      worldos: 'World OSとクライアント展開は、プログラム可能な実行環境に向けたロードマップ上の方向性です。'
    }
  },
  ar: {
    label: 'تقنيات لأنظمة الوكلاء',
    modules: {
      glvm: 'GLVM نموذج منطقي مشترك قيد التطوير عبر آلات TVM المشاركة لتنسيق التنفيذ على مستوى النظام.',
      tolang: 'تعبّر Tolang عن منطق الخدمات المتزامنة ويمكن تصريفها إلى شيفرة بايتية تنفذها TVM.',
      tvm: 'تنفذ TVM الشيفرة البايتية وتنسق الاتصال بين العمليات المتزامنة.',
      ocap: 'تحدد قدرات الكائنات بوضوح الكائنات والموارد التي يستطيع الوكيل الوصول إليها.',
      durable: 'يحفظ التنفيذ الدائم الحالة والاستمراريات كي ينتظر العمل اعتمادياته ثم يُستأنف لاحقًا.',
      atomicity: 'تُبقي الذرّية عبر الكتل حالة ALUX مرحّلة حتى الاعتماد أو الإلغاء؛ ولا تتراجع الآثار الخارجية تلقائيًا.',
      replay: 'توفر إعادة التنفيذ أساسًا لتكرار التنفيذ بصورة حتمية والتحقق من خيارات التنفيذ المسجلة.',
      framework: 'تنظم Segments وPartitions وFringe حدود التنفيذ والاستعادة والنهائية.',
      blockgit: 'ينسق BlockGit سجل الكتل المتزامنة والحالة بين المشاركين الموزعين.',
      evm: 'يتيح EVM/TSAC إشراك عقود EVM المدعومة تحت تنسيق TVM.',
      node: 'تربط واجهات العُقد طلبات الوكلاء واستعلامات الحالة، بينما تتولى طبقة P2P الانتشار بين العُقد.',
      tooling: 'تساعد أدوات المصرّف وLSP وPlayground على بناء منطق البرنامج وفحصه.',
      sharding: 'الذرية بين الأجزاء اتجاه تطوير لتنسيق عمل الوكلاء عبر الأجزاء.',
      worldos: 'يمثّل World OS والنشر على أجهزة العملاء اتجاهين ضمن خارطة الطريق نحو بيئة تنفيذ قابلة للبرمجة.'
    }
  }
};
