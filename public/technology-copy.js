window.technologyCopy = {
  en: {
    mapTitle: "The ALUX technology map",
    mapIntro: "Explore how language, execution, transaction control, consensus, and developer tools fit together. Select a module to see its role and connections.",
    mapHint: "Select a module to see its responsibilities and connected components.",
    layers: ["Development entry", "Concurrent execution", "Transactions & verification", "Consensus & network", "Evolution path"],
    current: "Current foundation",
    evolving: "Continuously evolving",
    roadmap: "Roadmap",
    role: "Module role",
    connections: "Connected modules",
    details: "Technical details",
    team: "Team",
    modules: {
      tolang: { name: "Tolang", title: "A language and compiler for concurrent services", body: "ConcurSys develops Tolang and its compiler for expressing concurrent processes that target the TVM runtime.", help: "Language design, compiler behavior, and the path from source to runtime execution.", points: ["Compiles Tolang programs to TVM-targeted bytecode.", "Models work as concurrent processes that can communicate through channels.", "Connects source-level service logic with TVM execution and the developer toolchain."], status: "current" },
      replay: { name: "ReplayTrie & BranchId", title: "Replayable evidence for deterministic validation", body: "The runtime records execution choices that may otherwise vary, so validators can reproduce the accepted path.", help: "Replay requirements, execution evidence, and validator-side reproduction.", points: ["BranchId identifies the execution branch associated with recorded work.", "COMM records preserve relevant communication events and choices.", "ReplayTrie organizes evidence used to reproduce execution deterministically."], status: "current" },
      atomicity: { name: "Cross-block atomicity", title: "One transaction that can wait and resume", body: "An ALUX transaction can suspend at a block boundary, continue in a later block, and keep its ALUX state changes staged until final commit or abort.", help: "Long-running workflows, isolation boundaries, and commit or abort behavior.", points: ["Segments and partitions preserve progress at suspension points.", "Isolation and replay support resumption and validation across blocks.", "Atomicity covers staged ALUX state; external-world effects such as an API call or physical action are not automatically rolled back."], status: "current" },
      evm: { name: "EVM & TSAC", title: "Supported EVM workloads, coordinated through TVM", body: "ALUX currently supports selected EVM workloads in isolated execution environments. TSAC coordinates relevant global-state operations with TVM; compatibility depends on the supported surface.", help: "EVM integration boundaries, TSAC coordination, and workload compatibility review.", points: ["Each EVM instance keeps its own execution stack and memory.", "TSAC routes supported global-state interactions for coordination with TVM processes.", "WASM guest execution is planned; this does not imply universal EVM compatibility."], status: "current" },
      framework: { name: "Segments · Partitions · Fringe", title: "Structure execution work for scheduling and finality", body: "Framework services seal execution traces into segments and partitions for block production; once BlockGit finalizes a fringe, its concurrent blocks are merged into one state transition.", help: "Execution scheduling, dependency handling, and the handoff from runtime work to block production.", points: ["Segments capture bounded portions of execution progress.", "Partitions group a transaction’s sealed segments for inclusion in a block.", "FringeBuilder runs block merge on each fringe that BlockGit finalizes."], status: "current" },
      node: { name: "Node · RPC · P2P", title: "The network-facing runtime surface", body: "The node layer connects execution to supported RPC methods, peer communication, and storage context. Exact endpoints and operational behavior depend on the current implementation surface.", help: "Node integration, supported RPC scope, peer communication, and storage boundaries.", points: ["Exposes supported Ethereum-facing eth_* RPC methods.", "P2P gossip carries network messages among participating peers.", "Node storage context and static service surfaces sit around the runtime."], status: "current" },
      tooling: { name: "Compiler · LSP · Playground", title: "Inspect and exercise service logic during development", body: "Compiler diagnostics and the language-server and playground workflows help developers examine Tolang programs before connecting them to a node.", help: "Compiler integration, diagnostics, editor workflows, and early runtime evaluation.", points: ["Compiler diagnostics surface issues along the source-to-bytecode path.", "LSP workflows support language-aware inspection and editing.", "Playground runs, expansion, and formatting help examine service behavior."], status: "current" },
      sharding: { name: "Cross-shard execution", title: "Horizontal atomicity across shards", body: "The design target is a single all-or-nothing transaction boundary across participating shards. Cross-shard execution remains on the roadmap.", help: "Future transaction coordination across shards and protection against partial visibility.", points: ["Stage shard-local effects under one transaction boundary.", "Commit all participating effects together or abort them together.", "Keep intermediate cross-shard state unobservable to unrelated transactions."], status: "roadmap" },
      worldos: { name: "World OS & client surfaces", title: "Extend the execution model to new environments", body: "A programmable World OS layer and deployment on client devices are longer-term directions for the system. They are roadmap items, not current runtime capabilities.", help: "Future deployment models and the system-level abstractions needed to support them.", points: ["GLVM is the evolving system-level model across participating TVMs.", "Client-device TVM deployment remains planned.", "A programmable World OS layer remains a roadmap direction."], status: "roadmap" }
    }
  },
  zh: {
    mapTitle: "ALUX 技术体系图",
    mapIntro: "从语言、执行、事务控制到共识与开发工具，了解各层如何协作。选择一个模块，查看它的职责与连接关系。",
    mapHint: "点选模块，查看它的职责及连接关系。",
    layers: ["开发入口", "并发执行", "事务与验证", "共识与网络", "演进方向"],
    current: "当前技术基础",
    evolving: "持续演进",
    roadmap: "路线图",
    role: "模块职责",
    connections: "协作模块",
    details: "技术详解",
    team: "团队",
    modules: {
      tolang: { name: "Tolang", title: "面向并发服务的语言与编译器", body: "ConcurSys 研发 Tolang 及其编译器，用于表达面向 TVM 运行时的并发进程。", help: "语言设计、编译器行为，以及从源码到运行时执行的衔接。", points: ["将 Tolang 程序编译为面向 TVM 的字节码。", "以并发进程表达工作，并通过通道进行通信。", "衔接源码中的服务逻辑、TVM 执行与开发工具链。"], status: "current" },
      replay: { name: "ReplayTrie 与 BranchId", title: "支持确定性验证的可重放证据", body: "运行时记录可能产生差异的执行选择，使验证者能够复现已接受的执行路径。", help: "重放要求、执行证据与验证者侧的路径复现。", points: ["BranchId 标识记录执行所属的分支。", "COMM 记录保存相关通信事件与执行选择。", "ReplayTrie 组织用于确定性复现执行的证据。"], status: "current" },
      atomicity: { name: "跨区块原子性", title: "可以等待和恢复的单笔事务", body: "一笔 ALUX 事务可以在区块边界挂起，在后续区块继续执行；其 ALUX 状态变更会保持暂存，直到最终提交或中止。", help: "长流程、隔离边界，以及提交与中止行为。", points: ["Segments 与 Partitions 在挂起点保存执行进度。", "隔离与重放支持跨区块恢复和验证。", "原子性覆盖暂存中的 ALUX 状态；API 调用或现实动作等外部副作用不会自动回滚。"], status: "current" },
      evm: { name: "EVM 与 TSAC", title: "在 TVM 协调下运行受支持的 EVM 工作负载", body: "ALUX 当前在隔离执行环境中支持部分 EVM 工作负载。TSAC 将相关全局状态操作交由 TVM 协调；具体兼容范围取决于已支持的功能面。", help: "EVM 集成边界、TSAC 协调方式与工作负载兼容性评估。", points: ["每个 EVM 实例保有独立的执行栈与内存。", "TSAC 将受支持的全局状态交互转交 TVM 进程协同处理。", "WASM 虚拟机支持仍在规划中；当前支持不代表兼容所有 EVM 合约。"], status: "current" },
      framework: { name: "Segments · Partitions · Fringe", title: "组织执行工作，衔接调度与终局", body: "框架服务将执行轨迹封存为 Segments 与 Partitions，供区块生产使用；BlockGit 终局确定一个 Fringe 后，其中的并发区块会合并为统一的状态转移。", help: "执行调度、依赖处理，以及运行时工作到区块生产的衔接。", points: ["Segments 记录边界清晰的执行进度片段。", "Partitions 将一笔事务已封存的 Segments 归组，纳入区块。", "FringeBuilder 对 BlockGit 终局确定的每个 Fringe 执行区块合并。"], status: "current" },
      node: { name: "节点 · RPC · P2P", title: "连接网络的运行时接口", body: "节点层将执行系统接入受支持的 RPC 方法、节点间通信与存储上下文。具体接口和运行行为以当前实现范围为准。", help: "节点集成、RPC 支持范围、节点通信与存储边界。", points: ["提供当前已支持的以太坊风格 eth_* RPC 方法。", "P2P gossip 在参与节点间传递网络消息。", "节点存储上下文与静态服务接口围绕运行时提供支持。"], status: "current" },
      tooling: { name: "编译器 · LSP · Playground", title: "在开发过程中检查和试运行服务逻辑", body: "编译器诊断、语言服务器与 Playground 工作流，帮助开发者在接入节点前检查 Tolang 程序。", help: "编译器集成、诊断信息、编辑器工作流与早期运行评估。", points: ["编译器诊断揭示源码至字节码流程中的问题。", "LSP 工作流支持具备语言感知能力的查看与编辑。", "Playground 运行、展开与格式化功能便于检查服务行为。"], status: "current" },
      sharding: { name: "跨分片执行", title: "跨分片实现横向原子性", body: "设计目标是在参与分片之间建立统一的全有或全无事务边界。跨分片执行仍属于路线图。", help: "未来的跨分片事务协作，以及避免部分结果对外可见。", points: ["在统一事务边界内暂存各分片的本地变更。", "所有参与变更一并提交，或一并中止。", "避免无关事务观察到尚未完成的跨分片中间状态。"], status: "roadmap" },
      worldos: { name: "World OS 与客户端", title: "将执行模型延伸到更多环境", body: "可编程 World OS 层与客户端设备部署，是系统未来的拓展方向，属于路线图规划，并非当前运行时能力。", help: "未来部署形态，以及支撑这些形态所需的系统级抽象。", points: ["GLVM 是仍在演进的系统级模型，连接多个参与 TVM。", "在客户端设备部署 TVM 仍属规划方向。", "可编程 World OS 层仍在路线图中。"], status: "roadmap" }
    }
  },
  ko: {
    mapTitle: "ALUX 기술 아키텍처 맵",
    mapIntro: "언어, 실행, 트랜잭션 제어, 합의, 개발 도구가 어떻게 맞물리는지 살펴보세요. 모듈을 선택하면 역할과 연결 관계를 확인할 수 있습니다.",
    mapHint: "모듈을 선택해 역할과 연결 구성 요소를 확인하세요.",
    layers: ["개발 진입점", "동시 실행", "트랜잭션 및 검증", "합의 및 네트워크", "진화 방향"],
    current: "현재 기술 기반",
    evolving: "지속적으로 발전 중",
    roadmap: "로드맵",
    role: "모듈 역할",
    connections: "연결 모듈",
    details: "기술 세부 정보",
    team: "팀",
    modules: {
      tolang: { name: "Tolang", title: "동시성 서비스를 위한 언어와 컴파일러", body: "ConcurSys는 TVM 런타임을 대상으로 하는 동시 프로세스를 표현하기 위해 Tolang과 컴파일러를 개발합니다.", help: "언어 설계, 컴파일러 동작, 소스에서 런타임 실행까지의 흐름을 다룹니다.", points: ["Tolang 프로그램을 TVM 대상 바이트코드로 컴파일합니다.", "채널로 통신할 수 있는 동시 프로세스로 작업을 모델링합니다.", "소스 수준 서비스 로직과 TVM 실행 및 개발 툴체인을 연결합니다."], status: "current" },
      replay: { name: "ReplayTrie 및 BranchId", title: "결정론적 검증을 위한 재생 증거", body: "런타임은 달라질 수 있는 실행 선택을 기록해 검증자가 승인된 경로를 재현할 수 있도록 합니다.", help: "재생 요건, 실행 증거, 검증자 측 경로 재현을 다룹니다.", points: ["BranchId는 기록된 작업이 속한 실행 분기를 식별합니다.", "COMM 기록은 관련 통신 이벤트와 선택을 보존합니다.", "ReplayTrie는 실행을 결정론적으로 재현하는 데 쓰이는 증거를 구성합니다."], status: "current" },
      atomicity: { name: "블록 간 원자성", title: "대기 후 재개할 수 있는 단일 트랜잭션", body: "ALUX 트랜잭션은 블록 경계에서 중단된 뒤 이후 블록에서 재개될 수 있으며, ALUX 상태 변경은 최종 커밋 또는 중단까지 스테이징됩니다.", help: "장기 실행 워크플로, 격리 경계, 커밋 및 중단 동작을 다룹니다.", points: ["Segments와 Partitions가 중단 지점의 진행 상태를 보존합니다.", "격리와 재생은 블록 간 재개 및 검증을 지원합니다.", "원자성은 스테이징된 ALUX 상태에 적용됩니다. API 호출이나 물리적 동작 같은 외부 부작용은 자동으로 롤백되지 않습니다."], status: "current" },
      evm: { name: "EVM 및 TSAC", title: "TVM 조정 아래 지원되는 EVM 워크로드 실행", body: "ALUX는 현재 격리 실행 환경에서 일부 EVM 워크로드를 지원합니다. TSAC는 관련 전역 상태 작업을 TVM과 조정하며, 호환 범위는 지원되는 기능에 따라 달라집니다.", help: "EVM 통합 경계, TSAC 조정, 워크로드 호환성 검토를 다룹니다.", points: ["각 EVM 인스턴스는 자체 실행 스택과 메모리를 유지합니다.", "TSAC는 지원되는 전역 상태 상호작용을 TVM 프로세스의 조정 경로로 전달합니다.", "WASM 게스트 실행은 계획 중이며, 현재 지원이 모든 EVM과의 호환을 뜻하지는 않습니다."], status: "current" },
      framework: { name: "Segments · Partitions · Fringe", title: "실행 작업을 구조화해 스케줄링과 확정으로 연결", body: "프레임워크 서비스는 실행 추적을 Segments와 Partitions로 봉인해 블록 생성에 전달합니다. BlockGit이 Fringe를 확정하면 그 안의 동시 블록이 하나의 상태 전이로 병합됩니다.", help: "실행 스케줄링, 의존성 처리, 런타임 작업에서 블록 생성까지의 연결을 다룹니다.", points: ["Segments는 경계가 있는 실행 진행 구간을 기록합니다.", "Partitions는 한 트랜잭션의 봉인된 Segments를 묶어 블록에 포함합니다.", "FringeBuilder는 BlockGit이 확정한 각 Fringe에 대해 블록 병합을 수행합니다."], status: "current" },
      node: { name: "노드 · RPC · P2P", title: "네트워크에 연결되는 런타임 인터페이스", body: "노드 계층은 실행 시스템을 지원되는 RPC 메서드, 피어 통신, 스토리지 컨텍스트에 연결합니다. 구체적인 엔드포인트와 동작은 현재 구현 범위에 따릅니다.", help: "노드 통합, RPC 지원 범위, 피어 통신, 스토리지 경계를 다룹니다.", points: ["현재 지원되는 이더리움 계열 eth_* RPC 메서드를 제공합니다.", "P2P gossip은 참여 피어 간 네트워크 메시지를 전달합니다.", "노드 스토리지 컨텍스트와 정적 서비스 인터페이스가 런타임을 둘러싸고 지원합니다."], status: "current" },
      tooling: { name: "컴파일러 · LSP · Playground", title: "개발 중 서비스 로직을 점검하고 실행", body: "컴파일러 진단, 언어 서버, Playground 워크플로를 통해 개발자는 노드에 연결하기 전에 Tolang 프로그램을 살펴볼 수 있습니다.", help: "컴파일러 통합, 진단, 편집기 워크플로, 초기 실행 평가를 다룹니다.", points: ["컴파일러 진단은 소스에서 바이트코드까지의 문제를 표시합니다.", "LSP 워크플로는 언어 인식 기반의 코드 확인과 편집을 지원합니다.", "Playground 실행, 확장, 포맷 기능으로 서비스 동작을 살펴볼 수 있습니다."], status: "current" },
      sharding: { name: "샤드 간 실행", title: "샤드 전반의 수평 원자성", body: "설계 목표는 참여 샤드 전반에 하나의 전부 아니면 전무 트랜잭션 경계를 두는 것입니다. 샤드 간 실행은 로드맵에 있습니다.", help: "향후 샤드 간 트랜잭션 조정과 부분 상태 노출 방지를 다룹니다.", points: ["하나의 트랜잭션 경계 아래 각 샤드의 로컬 변경을 스테이징합니다.", "참여하는 모든 변경을 함께 커밋하거나 함께 중단합니다.", "관련 없는 트랜잭션이 중간 샤드 상태를 관찰하지 못하게 합니다."], status: "roadmap" },
      worldos: { name: "World OS 및 클라이언트 환경", title: "실행 모델을 새로운 환경으로 확장", body: "프로그래밍 가능한 World OS 계층과 클라이언트 기기 배포는 장기적인 확장 방향입니다. 로드맵 항목이며 현재 런타임 기능은 아닙니다.", help: "향후 배포 모델과 이를 지원하는 데 필요한 시스템 수준 추상화를 다룹니다.", points: ["GLVM은 여러 참여 TVM을 아우르는 진화 중인 시스템 수준 모델입니다.", "클라이언트 기기의 TVM 배포는 아직 계획 단계입니다.", "프로그래밍 가능한 World OS 계층은 로드맵 방향입니다."], status: "roadmap" }
    }
  },
  ja: {
    mapTitle: "ALUX 技術アーキテクチャマップ",
    mapIntro: "言語、実行、トランザクション制御、コンセンサス、開発ツールがどう連携するかをご覧ください。モジュールを選ぶと、その役割と接続先を確認できます。",
    mapHint: "モジュールを選択して、役割と連携する要素を確認してください。",
    layers: ["開発の入口", "並行実行", "トランザクションと検証", "コンセンサスとネットワーク", "進化の方向"],
    current: "現在の技術基盤",
    evolving: "継続的に進化中",
    roadmap: "ロードマップ",
    role: "モジュールの役割",
    connections: "連携モジュール",
    details: "技術詳細",
    team: "チーム",
    modules: {
      tolang: { name: "Tolang", title: "並行サービスのための言語とコンパイラ", body: "ConcurSysは、TVMランタイムを対象とする並行プロセスを記述するため、Tolangとそのコンパイラを開発しています。", help: "言語設計、コンパイラの動作、ソースからランタイム実行までを扱います。", points: ["TolangプログラムをTVM向けバイトコードにコンパイルします。", "チャネルを介して通信する並行プロセスとして処理を表現します。", "ソース上のサービスロジックをTVM実行と開発ツールチェーンにつなぎます。"], status: "current" },
      replay: { name: "ReplayTrie と BranchId", title: "決定論的な検証を支えるリプレイ可能な証跡", body: "ランタイムは変動し得る実行上の選択を記録し、バリデーターが確定した経路を再現できるようにします。", help: "リプレイの要件、実行証跡、バリデーターによる経路の再現を扱います。", points: ["BranchIdは記録された処理が属する実行ブランチを識別します。", "COMM記録は関連する通信イベントと選択内容を保持します。", "ReplayTrieは実行を決定論的に再現するための証跡を構成します。"], status: "current" },
      atomicity: { name: "ブロック間アトミシティ", title: "待機と再開ができる単一トランザクション", body: "ALUXのトランザクションはブロック境界で中断し、後続ブロックで再開できます。ALUXの状態変更は最終的なコミットまたは中止までステージングされます。", help: "長時間ワークフロー、分離境界、コミットと中止の動作を扱います。", points: ["SegmentsとPartitionsが中断地点の進行状況を保持します。", "分離とリプレイにより、ブロックをまたぐ再開と検証を支えます。", "アトミシティの対象はステージングされたALUX状態です。API呼び出しや物理的な操作など、外部世界への副作用は自動的にロールバックされません。"], status: "current" },
      evm: { name: "EVM と TSAC", title: "TVMが連携する、サポート対象のEVMワークロード", body: "ALUXは現在、隔離された実行環境で一部のEVMワークロードをサポートしています。TSACは関連するグローバル状態操作をTVMと連携させます。互換性はサポート範囲によって異なります。", help: "EVM統合の境界、TSACによる連携、ワークロードの互換性確認を扱います。", points: ["各EVMインスタンスは独自の実行スタックとメモリを保持します。", "TSACはサポート対象のグローバル状態操作をTVMプロセスとの連携に渡します。", "WASMゲスト実行は計画段階です。現行の対応範囲はすべてのEVMとの互換性を意味しません。"], status: "current" },
      framework: { name: "Segments · Partitions · Fringe", title: "実行処理を整理し、スケジューリングと確定につなぐ", body: "フレームワークサービスは実行トレースをSegmentsとPartitionsにシールしてブロック生成へ渡します。BlockGitがFringeを確定すると、その並行ブロックは一つの状態遷移にマージされます。", help: "実行スケジューリング、依存関係の処理、ランタイム処理からブロック生成までを扱います。", points: ["Segmentsは範囲を区切った実行進捗を記録します。", "Partitionsは、トランザクションのシール済みSegmentsをまとめてブロックに組み込みます。", "FringeBuilderは、BlockGitが確定した各Fringeに対してブロックマージを実行します。"], status: "current" },
      node: { name: "ノード · RPC · P2P", title: "ネットワークに接続するランタイムの窓口", body: "ノード層は実行システムを、サポート対象のRPCメソッド、ピア通信、ストレージコンテキストに接続します。具体的なエンドポイントと動作は現行の実装範囲によります。", help: "ノード統合、RPCの対応範囲、ピア通信、ストレージ境界を扱います。", points: ["現在サポートしているEthereum形式のeth_* RPCメソッドを提供します。", "P2P gossipが参加ピア間でネットワークメッセージを伝達します。", "ノードのストレージコンテキストと静的サービスの窓口がランタイムを支えます。"], status: "current" },
      tooling: { name: "コンパイラ · LSP · Playground", title: "開発中にサービスロジックを調べて実行", body: "コンパイラ診断、言語サーバー、Playgroundを通じて、開発者はノードに接続する前にTolangプログラムを確認できます。", help: "コンパイラ統合、診断、エディターでの作業、初期段階の実行評価を扱います。", points: ["コンパイラ診断がソースからバイトコードまでの問題を示します。", "LSPにより言語を認識したコードの確認と編集ができます。", "Playgroundでの実行、展開表示、整形を通じてサービスの動作を調べられます。"], status: "current" },
      sharding: { name: "シャード間実行", title: "シャードをまたぐ水平アトミシティ", body: "設計目標は、参加するシャード全体に単一の全件コミットまたは全件中止の境界を設けることです。シャード間実行はロードマップ上にあります。", help: "将来的なシャード間トランザクション連携と、部分状態の可視化防止を扱います。", points: ["共通のトランザクション境界の下で各シャードのローカル変更をステージングします。", "参加するすべての変更をまとめてコミットするか、まとめて中止します。", "無関係なトランザクションから中間状態を見えなくします。"], status: "roadmap" },
      worldos: { name: "World OS とクライアント環境", title: "実行モデルを新たな環境へ広げる", body: "プログラム可能なWorld OS層とクライアント端末への展開は、将来的な拡張方向です。ロードマップ項目であり、現行ランタイムの機能ではありません。", help: "将来の展開モデルと、それを支えるシステムレベルの抽象化を扱います。", points: ["GLVMは複数の参加TVMをつなぐ、進化を続けるシステムレベルのモデルです。", "クライアント端末へのTVM展開は計画段階です。", "プログラム可能なWorld OS層はロードマップ上の方向性です。"], status: "roadmap" }
    }
  },
  ar: {
    mapTitle: "خريطة تقنيات ALUX",
    mapIntro: "تعرّف على ترابط اللغة والتنفيذ والتحكم في المعاملات والإجماع وأدوات التطوير. اختر وحدة لمعرفة دورها والأنظمة المتصلة بها.",
    mapHint: "اختر وحدة للاطلاع على مسؤولياتها والوحدات المتصلة بها.",
    layers: ["مدخل التطوير", "التنفيذ المتزامن", "المعاملات والتحقق", "الإجماع والشبكة", "مسار التطور"],
    current: "الأساس التقني الحالي",
    evolving: "قيد التطوير المستمر",
    roadmap: "خارطة الطريق",
    role: "دور الوحدة",
    connections: "الوحدات المتعاونة",
    details: "التفاصيل التقنية",
    team: "الفريق",
    modules: {
      tolang: { name: "Tolang", title: "لغة ومصرّف للخدمات المتزامنة", body: "تطوّر ConcurSys لغة Tolang ومصرّفها للتعبير عن عمليات متزامنة تستهدف بيئة تشغيل TVM.", help: "تصميم اللغة وسلوك المصرّف والانتقال من المصدر إلى التنفيذ في بيئة التشغيل.", points: ["يحوّل برامج Tolang إلى شيفرة بايتية تستهدف TVM.", "يمثّل العمل كعمليات متزامنة تتواصل عبر القنوات.", "يربط منطق الخدمة في المصدر بتنفيذ TVM وسلسلة أدوات التطوير."], status: "current" },
      replay: { name: "ReplayTrie وBranchId", title: "أدلة قابلة لإعادة التنفيذ للتحقق الحتمي", body: "تسجّل بيئة التشغيل اختيارات التنفيذ التي قد تختلف، كي يتمكن المدققون من إعادة إنتاج المسار المقبول.", help: "متطلبات إعادة التنفيذ وأدلة التنفيذ وإعادة إنتاج المسار لدى المدققين.", points: ["يحدّد BranchId فرع التنفيذ الذي ينتمي إليه العمل المسجّل.", "تحفظ سجلات COMM أحداث الاتصال والاختيارات ذات الصلة.", "ينظّم ReplayTrie الأدلة المستخدمة لإعادة إنتاج التنفيذ بصورة حتمية."], status: "current" },
      atomicity: { name: "الذرّية عبر الكتل", title: "معاملة واحدة يمكنها الانتظار والاستئناف", body: "يمكن تعليق معاملة ALUX عند حدّ كتلة ثم استئنافها في كتلة لاحقة، مع إبقاء تغييرات حالة ALUX مرحّلة حتى اعتمادها نهائياً أو إلغائها.", help: "سير العمل الطويل وحدود العزل وسلوك الاعتماد أو الإلغاء.", points: ["تحفظ Segments وPartitions التقدم عند نقاط التعليق.", "يدعم العزل وإعادة التنفيذ الاستئناف والتحقق عبر الكتل.", "تشمل الذرّية حالة ALUX المرحّلة؛ أما الآثار الخارجية، مثل استدعاء API أو فعل مادي، فلا يجري التراجع عنها تلقائياً."], status: "current" },
      evm: { name: "EVM وTSAC", title: "أحمال EVM المدعومة بتنسيق من TVM", body: "تدعم ALUX حالياً بعض أحمال EVM ضمن بيئات تنفيذ معزولة. ينسّق TSAC عمليات الحالة العامة ذات الصلة مع TVM، ويتحدد التوافق وفق نطاق الدعم.", help: "حدود دمج EVM وآلية تنسيق TSAC ومراجعة توافق أحمال العمل.", points: ["يحتفظ كل مثيل EVM بمكدس التنفيذ والذاكرة الخاصين به.", "يمرر TSAC تفاعلات الحالة العامة المدعومة إلى مسار التنسيق مع عمليات TVM.", "تنفيذ WASM مخطط له؛ ولا يعني الدعم الحالي التوافق مع كل تطبيقات EVM."], status: "current" },
      framework: { name: "Segments · Partitions · Fringe", title: "تنظيم التنفيذ وربطه بالجدولة والنهائية", body: "تختم خدمات الإطار آثار التنفيذ في Segments وPartitions لإنتاج الكتل؛ وعندما يثبّت BlockGit نهائية Fringe ما، تُدمج كتله المتزامنة في انتقال حالة واحد.", help: "جدولة التنفيذ ومعالجة الاعتماديات والانتقال من أعمال بيئة التشغيل إلى إنتاج الكتل.", points: ["تسجل Segments أجزاء محددة من تقدم التنفيذ.", "تجمع Partitions الـ Segments المختومة لمعاملة واحدة تمهيدًا لإدراجها في كتلة.", "ينفّذ FringeBuilder دمج الكتل لكل Fringe يثبّت BlockGit نهائيته."], status: "current" },
      node: { name: "العقدة · RPC · P2P", title: "واجهة بيئة التشغيل المتصلة بالشبكة", body: "تربط طبقة العقدة التنفيذ بطرق RPC المدعومة واتصال الأقران وسياق التخزين. وتعتمد نقاط الاتصال والسلوك التشغيلي المحدد على نطاق التنفيذ الحالي.", help: "دمج العقدة ونطاق دعم RPC واتصال الأقران وحدود التخزين.", points: ["توفر طرق eth_* المدعومة حالياً والمتوافقة مع واجهة Ethereum.", "ينقل P2P gossip رسائل الشبكة بين الأقران المشاركين.", "يدعم سياق تخزين العقدة وواجهات الخدمات الثابتة بيئة التشغيل."], status: "current" },
      tooling: { name: "المصرّف · LSP · Playground", title: "فحص منطق الخدمة وتجربته أثناء التطوير", body: "تساعد تشخيصات المصرّف وخادم اللغة وبيئة Playground المطورين على فحص برامج Tolang قبل ربطها بعقدة.", help: "دمج المصرّف والتشخيصات وسير عمل المحرر والتقييم المبكر للتنفيذ.", points: ["تكشف تشخيصات المصرّف المشكلات على امتداد المسار من المصدر إلى الشيفرة البايتية.", "تدعم آليات LSP فحص الشيفرة وتحريرها مع مراعاة اللغة.", "تساعد عمليات Playground والتوسيع والتنسيق على فحص سلوك الخدمة."], status: "current" },
      sharding: { name: "التنفيذ عبر الأجزاء", title: "ذرّية أفقية تمتد عبر الأجزاء", body: "الهدف التصميمي هو وضع حد موحد للمعاملة عبر الأجزاء المشاركة، بحيث تنجح التغييرات كلها أو تُلغى كلها. يظل التنفيذ عبر الأجزاء ضمن خارطة الطريق.", help: "تنسيق المعاملات المستقبلية بين الأجزاء ومنع ظهور النتائج الجزئية.", points: ["تُرحّل التغييرات المحلية لكل جزء ضمن حد معاملة واحد.", "تُعتمد كل التغييرات المشاركة معاً أو تُلغى معاً.", "لا تُظهر الحالة الوسيطة عبر الأجزاء للمعاملات غير المرتبطة."], status: "roadmap" },
      worldos: { name: "World OS وبيئات العملاء", title: "توسيع نموذج التنفيذ إلى بيئات جديدة", body: "تُعد طبقة World OS القابلة للبرمجة ونشر TVM على أجهزة العملاء اتجاهين مستقبليين. وهما من عناصر خارطة الطريق وليسا من قدرات بيئة التشغيل الحالية.", help: "نماذج النشر المستقبلية والتجريدات على مستوى النظام اللازمة لدعمها.", points: ["GLVM نموذج على مستوى النظام لا يزال يتطور عبر عدة بيئات TVM مشاركة.", "يظل نشر TVM على أجهزة العملاء مخططاً له.", "تبقى طبقة World OS القابلة للبرمجة ضمن اتجاهات خارطة الطريق."], status: "roadmap" }
    }
  }
};
Object.entries({en:['Language & runtime','Execution & security','Consensus & integration','Research directions'],zh:['语言与运行时','执行与安全','共识与集成','研发方向'],ko:['언어와 런타임','실행과 보안','합의와 통합','연구 방향'],ja:['言語とランタイム','実行とセキュリティ','コンセンサスと統合','研究開発'],ar:['اللغة وبيئة التشغيل','التنفيذ والأمان','الإجماع والتكامل','اتجاهات البحث']}).forEach(([lang,labels])=>window.technologyCopy[lang].menuGroups=labels);
