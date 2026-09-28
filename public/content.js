window.siteCopy = {
  en: {
    navServices:'Services',navTechnology:'Technology',navCompany:'About Us',talk:'Let’s talk',
    heroTitle:'Deep engineering.<br>Real execution.',heroBody:'Technical services for public-chain agent execution, virtual machines, and distributed systems.',discuss:'Discuss your project',explore:'Explore our expertise',
    railAgent:'Public-chain agent execution',railVM:'Virtual machine engineering',railDistributed:'Distributed systems',
    serviceLabel:'01 / SERVICES',servicesTitle:'Your hardest systems problems.<br>Our engineering focus.',servicesIntro:'From architecture to implementation, we work at the execution layer.',deliverables:'ENGINEERING SCOPE',
    services:[
      {id:'agent',title:'Public-chain<br>agent execution',body:'Engineering support for agents that need persistent state, coordinated execution, and explicit authority on public chains.',scope:'Architecture · Runtime integration · Execution testing'},
      {id:'vm',title:'Virtual machine<br>engineering',body:'Bytecode runtimes, process coordination, and execution semantics built around your system.',scope:'VM design · Toolchain integration · Runtime diagnostics'},
      {id:'distributed',title:'Distributed<br>systems',body:'Concurrency, replay, and coordination across participating machines.',scope:'System design · Consensus protocols · Failure analysis'}
    ],
    techLabel:'02 / TECHNOLOGY',techTitle:'One global computer.<br>Many engineering challenges.',techIntro:'Original technology, from the bytecode runtime to the consensus layer.',durableTab:'Durable execution',conceptual:'Conceptual architecture',helpTitle:'How we can help',architectureCTA:'Discuss your architecture',
    tech:{
      glvm:{name:'GLOBAL LOGICAL VIRTUAL MACHINE',title:'A logical model across machines.',body:'GLVM is the system-level execution architecture we are developing across participating TVMs. It defines a shared logical model above the individual bytecode engines.',help:'Execution architecture, runtime boundaries, and integration design.'},
      tvm:{name:'TUPLE-SPACE VIRTUAL MACHINE',title:'Where bytecode becomes execution.',body:'TVM is the concrete bytecode engine on a participating machine. It runs Tolang bytecode and coordinates concurrent processes through channels and communication events.',help:'Bytecode runtime engineering, process coordination, toolchain integration, and diagnostics.'},
      blockgit:{name:'BLOCKGIT CONSENSUS PROTOCOL',title:'Consensus for concurrent work.',body:'BlockGit is our consensus protocol for ALUX. It organizes concurrent blocks in a directed acyclic graph, using strong and weak links with merge rules to coordinate block history and state transitions.',help:'Consensus architecture, protocol implementation, integration, and distributed testing.'},
      ocap:{name:'OBJECT CAPABILITIES',title:'Make authority explicit.',body:'Object capabilities use unforgeable references to define what a task can access. In TVM-native interactions, the runtime enforces these boundaries; external services and hosted environments need their own controls.',help:'Capability boundaries, least-authority design, and integration reviews.'},
      durable:{name:'DURABLE EXECUTION',title:'Carry execution forward.',body:'A public chain can provide a durable environment for agents. Preserved execution state and continuations let work wait across blocks and resume when its dependencies are ready.',help:'State persistence, wait-and-resume flows, replay requirements, and finalization boundaries.'}
    },
    diagram:{shared:'Shared logical execution model',node:'Execution node',source:'Tolang',bytecode:'Bytecode',runtime:'TVM',process:'Process',channel:'Channel / COMM',task:'Task',capability:'Capability reference',allowed:'Reachable object',unreachable:'No reference',boundary:'TVM-native authority boundary',blockgitCaption:'Concurrent blocks / links / merge rules',stages:['Execute','Preserve','Wait','Resume','Finalize'],steps:['Concurrent processes begin their work.','Execution state and continuations are preserved.','Work waits for a dependency across blocks.','The continuation resumes when its dependency is ready.','Execution reaches its finalization boundary.']},
    tolangDetail:'A language and compiler for concurrent processes, targeting TVM bytecode.',replayDetail:'A runtime structure that records execution choices needed for deterministic replay.',originalLabel:'ORIGINAL SYSTEMS ENGINEERING',originalTitle:'From language to consensus.',originalBody:'ConcurSys develops the technology behind ALUX: Tolang, the TVM bytecode runtime, ReplayTrie, and the BlockGit consensus protocol. Our work connects language design, concurrent execution, and distributed agreement.',originalNote:'GLVM is the evolving system-level architecture. Cross-shard execution and additional deployment environments remain development directions.',
    play:'Play sequence',pause:'Pause sequence',replay:'Replay sequence',next:'Next step',reset:'Reset',step:'STEP',
    companyLabel:'03 / COMPANY',companyTitle:'Built by the people behind the technology.',companyBody:'ConcurSys is the US technology company behind ALUX. We bring our own language, runtime, and consensus engineering into technical services for teams building at the foundations of the global computer.',aluxLink:'Explore ALUX',
    process:[['Define the problem','Map your execution requirements, constraints, and system boundaries.'],['Build the foundation','Agree the scope, then design and implement the underlying components.'],['Validate the system','Test the agreed behavior, review failure cases, and document the handover.']],
    contactLabel:'04 / LET’S BUILD',contactTitle:'Bring us<br>the hard problem.',contactBody:'Tell us what you are building, where execution gets difficult, and what needs to work.',contactCTA:'Start a technical conversation',copyEmail:'Copy email address',copied:'Email address copied.',copyFailed:'Select the address above to copy it.',footerLine:'Technical services for the global computer.',
    menuOpen:'Open navigation',menuClose:'Close navigation',skip:'Skip to content',artAlt:'Conceptual 3D structure of connected execution layers',meta:'ConcurSys provides technical services for public-chain agent execution, bytecode virtual machines, and distributed systems.'
  },
  zh: {
    navServices:'技术服务',navTechnology:'技术体系',navCompany:'关于我们',talk:'联系我们',
    heroTitle:'深耕底层技术，让系统真正运行。',heroBody:'为公链上的 Agent 执行、虚拟机与分布式系统提供技术服务。',discuss:'聊聊你的项目',explore:'了解我们的技术服务',
    railAgent:'公链 Agent 执行支持',railVM:'虚拟机工程',railDistributed:'分布式系统',
    serviceLabel:'01 / 技术服务',servicesTitle:'你的系统难题，是我们的工程课题。',servicesIntro:'从架构设计到工程实现，深入系统的执行层。',deliverables:'服务范围',
    services:[
      {id:'agent',title:'公链 Agent 执行支持',body:'面向需要在公链上保存状态、协调执行并明确权限边界的 Agent，提供底层工程支持。',scope:'架构设计 · 运行时集成 · 执行验证'},
      {id:'vm',title:'虚拟机工程',body:'围绕系统需求，设计与实现字节码运行时、进程协作机制和执行语义。',scope:'虚拟机设计 · 工具链集成 · 运行时诊断'},
      {id:'distributed',title:'分布式系统',body:'处理多台参与机器之间的并发、重放与协作问题。',scope:'系统设计 · 共识协议 · 故障分析'}
    ],
    techLabel:'02 / 技术体系',techTitle:'面向全球计算机，深入每一层工程。',techIntro:'从字节码运行时到共识层，深入我们的原创技术。',durableTab:'持久执行',conceptual:'架构原理示意',helpTitle:'我们能提供的支持',architectureCTA:'讨论你的技术架构',
    tech:{
      glvm:{name:'全局逻辑虚拟机',title:'跨越多台机器的逻辑执行模型。',body:'GLVM（Global Logical Virtual Machine）是我们正在构建的系统级执行架构，在参与系统的多个 TVM 字节码引擎之上定义共同的逻辑模型。',help:'执行架构设计、运行时边界划分与系统集成设计。'},
      tvm:{name:'元组空间虚拟机',title:'从字节码到实际执行。',body:'TVM（Tuple-space Virtual Machine）是参与机器上的具体字节码执行引擎。它运行 Tolang 字节码，通过通道与通信事件协调并发进程。',help:'字节码运行时工程、进程协作、工具链集成与运行诊断。'},
      blockgit:{name:'BLOCKGIT 共识协议',title:'让并发工作达成共识。',body:'BlockGit 是我们为 ALUX 研发的共识协议。它以有向无环图组织并发区块，通过强链接、弱链接与合并规则协调区块历史和状态转移。',help:'共识架构设计、协议实现、系统集成与分布式测试。'},
      ocap:{name:'对象能力机制',title:'让权限边界明确可控。',body:'对象能力机制通过不可伪造的引用，限定任务可以访问的对象。在 TVM 原生交互中，这些边界由运行时执行；外部服务与托管环境需要各自的权限控制。',help:'能力边界划分、最小权限设计与集成审查。'},
      durable:{name:'持久执行',title:'让执行状态延续下去。',body:'公链可以为 Agent 提供持久执行环境。通过保留执行状态与续体，任务能够跨区块等待，并在所依赖的条件就绪后继续执行。',help:'状态持久化、等待与恢复流程、重放要求及终局边界设计。'}
    },
    diagram:{shared:'共同的逻辑执行模型',node:'执行节点',source:'Tolang',bytecode:'字节码',runtime:'TVM',process:'进程',channel:'通道 / COMM',task:'任务',capability:'能力引用',allowed:'可访问对象',unreachable:'无能力引用',boundary:'TVM 原生权限边界',blockgitCaption:'并发区块 / 链接关系 / 合并规则',stages:['执行','保存','等待','恢复','终局'],steps:['并发进程开始执行各自的工作。','保留执行状态与续体。','任务跨区块等待所依赖的条件。','条件就绪后，从保存的续体继续执行。','执行到达其终局边界。']},
    tolangDetail:'面向并发进程的语言与编译器，以 TVM 字节码为执行目标。',replayDetail:'记录确定性重放所需执行选择的运行时结构。',originalLabel:'原创系统工程',originalTitle:'从语言到共识，贯通底层。',originalBody:'ConcurSys 研发了 ALUX 背后的 Tolang、TVM 字节码运行时、ReplayTrie 与 BlockGit 共识协议，将语言设计、并发执行与分布式共识衔接起来。',originalNote:'GLVM 是持续演进的系统级架构，跨分片执行与更多部署环境仍属于研发方向。',
    play:'播放流程',pause:'暂停流程',replay:'重新播放',next:'下一步',reset:'重置',step:'步骤',
    companyLabel:'03 / 关于我们',companyTitle:'技术的研发者，也是你的工程伙伴。',companyBody:'ConcurSys 是 ALUX 的美国技术公司。我们将自研语言、运行时与共识协议的工程能力，带入面向全球计算机底层建设的技术服务。',aluxLink:'了解 ALUX',
    process:[['明确问题','梳理执行需求、项目约束与系统边界。'],['构建基础','确定合作范围，设计并实现底层组件。'],['验证系统','测试约定行为、检查故障场景，并完成文档交接。']],
    contactLabel:'04 / 开始合作',contactTitle:'把技术难题，交给我们一起解决。',contactBody:'告诉我们你正在构建什么、执行环节遇到了什么困难，以及系统需要实现什么。',contactCTA:'开启一次技术交流',copyEmail:'复制邮箱地址',copied:'邮箱地址已复制。',copyFailed:'请选中上方邮箱地址进行复制。',footerLine:'面向全球计算机的技术服务。',
    menuOpen:'打开导航',menuClose:'关闭导航',skip:'跳到正文',artAlt:'由相连执行层构成的三维概念结构',meta:'ConcurSys 为公链 Agent 执行、字节码虚拟机与分布式系统提供底层技术服务。'
  }
};

Object.assign(window.siteCopy.en, {pageTitle:'ConcurSys — Deep engineering. Real execution.',navLabel:'Main navigation',languageLabel:'Select language',emailSubject:'ConcurSys technical services',emailBody:'Project overview:\n\nTechnical challenge:\n\nExpected scope and timeline:\n'});
Object.assign(window.siteCopy.zh, {pageTitle:'ConcurSys｜底层技术与系统工程服务',navLabel:'主导航',languageLabel:'选择语言',emailSubject:'ConcurSys 技术服务咨询',emailBody:'项目简介：\n\n技术问题：\n\n预期合作范围与时间：\n'});
