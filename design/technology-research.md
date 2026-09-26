# ConcurSys 技术清单：ALUX 技术来源与表达边界

研究范围：ALUX 官方网站英文源文案及页面结构、当前本地网站仓库技术材料，以及官网明确指向的官方公开资料。研究目标是帮助 ConcurSys 以技术服务提供方身份介绍 ALUX 技术；不复用 ALUX 官网的“building global VM”品牌叙事，也不把 ALUX 描述成企业级 agent 开发框架。

## 结论与定位

归属以用户本轮明确提供的公司事实为准：ConcurSys 是 ALUX 背后技术的研发来源，同时是面向客户的技术服务公司。网站应表达其自主研发的 Tolang、TVM、ReplayTrie、BlockGit 及系统架构能力，不能倒置为使用 ALUX 技术的下游集成商。OCAP、字节码虚拟机、DAG 和确定性重放等通用概念，与 ConcurSys 对这些原理的具体实现应分别表述。下文“ALUX 的技术”指在 ALUX 项目语境中呈现的 ConcurSys 研发成果，不表示另一家公司向 ConcurSys 提供技术。

技术主线是：Tolang 描述并发进程 → 编译为 TVM 字节码 → TVM 在单台节点运行进程、Tuple Space/COMM 通信与挂起恢复 → 长交易跨区块保留上下文，由 ReplayTrie 记录非确定性选择以供重放 → BlockGit 汇集并合并并发区块、推进一致终局 → GLVM 抽象多个 TVM 的系统级逻辑执行模型。OCAP 是贯穿进程和通道的权限边界。EVM 沙箱经适配接入 TVM 协调；跨分片原子提交、私有云与客户端设备作为执行面，以及 World OS 服务发现／编排均需按路线状态表述。

这套技术可用于描述“链上持久执行／长时任务”与 agent 工作流的底层运行能力：fork、wait、join、跨块暂停恢复、权限显式传递、确定性重放及原子终局。它不等于面向企业的 agent 开发平台，也不代表 LLM 调用本身由链上执行；模型/API 与人工输入仍属于应用层接入，外部数据源负责其事实真实性，链外不可逆副作用也不在回滚保证内。

## 技术逐项清单

| 技术 | 定义与相互关系 | 原创性可证明边界 | 当前状态与 ConcurSys 网站表达 |
|---|---|---|---|
| Tolang | ALUX 的源语言，用于表达并发进程、通道交互和长任务；`tolangc` 编译为 `.tox` / TVM 可执行字节码。它是开发入口，TVM 才是执行引擎。 | 可说“ALUX 的 Tolang 语言及编译工具链”；不能据此宣称发明编程语言、并发语言或编译器。公开证据支持原生解析器、编译期常量、LSP 与 VS Code 扩展已完成。 | 本地路线图 2026 Q2 标为完成。网站可讲语言—编译器—运行时链路，避免把 Tolang 说成 TVM 或 GLVM。
| TVM / 字节码虚拟机 | Tuple-Space Virtual Machine，是单个执行节点上的具体虚拟机。运行 Tolang 字节码进程；以隔离进程而非共享内存为基本交互方式，通过 typed tuple-space channels、produce/consume 与 COMM 事件通信，支持 fork、wait、resume、join/select。TVM 保存执行上下文并记录重放所需事件。 | ALUX 对自身 TVM 指令集、进程与 tuple-space/COMM 机制的实现可以作为其实现特色；通用字节码 VM、进程隔离、通道并发并非 ALUX 原创。网站声称 OCAP 支持进入字节码层，须限定在 TVM 原生能力。 | 官网将其列为现有核心。可称“ALUX Tuple-Space Virtual Machine（TVM）”，首处释义，后文简称 TVM。TVM ≠ EVM；TVM 可托管隔离的 EVM guest。TVM ≠ GLVM。 |
| 长交易／durable execution | 一项交易可在区块边界挂起、跨后续区块恢复，以同一个 ALUX 交易上下文完成；中间 ALUX 状态暂存，最终提交或丢弃。Runtime Lab 还描述 authenticated HTTPS GET 的响应记录与重放。 | 长时工作流、耐久执行、事件重放、跨块事务各自都是更广泛的概念。可主张 ALUX 已实现的机制和它们的组合，不可宣称“首个 agent durable execution”或把应用层 agent/API 工作等同链上执行。 | 本地路线图列出跨块执行、唤醒、打包、重放和终局机制为完成；2026 Q2 仍列共识层端到端集成测试为进行中。官网说长交易与跨块能力 today，但部署成熟度、吞吐、成本、安全审计未由这些材料证明。用“支持／正在集成”，避免生产级承诺。 |
| ReplayTrie / 确定性重放 | TVM 运行可能因竞态或外部输入出现非确定性；ReplayTrie 记录影响执行的非确定性 COMM 选择／已认证输入，使验证节点能重现被接受的执行路径。它为长交易恢复、验证和共识提供可复算证据。 | 确定性重放本身并非 ALUX 原创。ALUX 可说明自己的 ReplayTrie 与运行时集成；“bit-exact”是官网主张，公开技术说明不足以独立验证所有执行环境下的位级相同性。 | 官网与路线图列为现有运行时核心，且列有 lazy validators 测试。对外用“记录重放所需选择，供验证节点重放”，若强调 bit-exact 应有可公开复现的实现/测试材料支撑。 |
| BlockGit | ALUX 自有共识协议名，拼写为 **BlockGit**（B、G 大写，无空格、无连字符，不是 Blockgit、Block Git 或 Blocklace）。它以并发 DAG 区块和 fringe（当前候选前沿）组织提议；区块间的 strong link 与 weak link 表示不同关系；block merge 的冲突处理选择可形成一致结果的区块效果，避免所有工作先挤进单一串行队列。官网明确点名 DAG blocks、weak links、block merge、fringes。Weaklink 的关键定位是把“共识观察／纳入关系”和“是否接受对方状态转移”解耦：弱链接可承认某区块参与共识图而不等于对其所有状态效果背书。不要把它简化为普通父区块哈希指针。 | “BlockGit 是 ALUX 设计的新共识协议”有官网路线图与官方自述支撑；2024 Q3 初始设计实现、Q4 接入节点和 Docker 网络测试、2025 Q1/2 加入并测试 Weaklink 可作为项目自身设计/实现证据。DAG、Git 类比、并发提议、弱链接等思想不能单独据此说成原创；公开材料不足以证明“全球首创”“首个弱链接协议”或完整形式化安全性。GitHub 公开组织目前没有可见 BlockGit 规格/实现仓库，机制细节应以公开技术规格或可审阅代码补足。 | 官网将 BlockGit 列为现有核心，但最新本地路线图仍将 2026 Q2“包括共识层的端到端集成测试”标为 WIP。应区分“协议实现和初步网络测试已完成”与“全套 runtime+consensus 集成及生产网络成熟”；状态需在上线前向 ALUX 核对。建议叫“ALUX BlockGit 共识协议”，用一句解释“允许并发提议，再按链接关系和合并规则形成终局”。 |
| OCAP / 对象能力 | Object Capability（对象能力）是既有安全模型：对象引用同时标识对象并授予对其接口的权限；权限通过显式持有／传递，不能靠全局名称随意取得。ALUX 的实现以不可伪造的 channel references 为能力，在 TVM 字节码与通道规则中约束进程可触达资源，并支持显式委派、范围收窄／attenuation。它与 typed channels、Tolang、TVM 的对象引用机制交织。 | OCAP 通用概念不是 ALUX 发明。ALUX 可主张将对象能力原则落到自身 TVM 字节码、通道引用、名称空间与生命周期规则的具体实现。不可笼统承诺所有 EVM 合约、外部 API 或整台主机自动受该边界保护；官网自身也限定 hosted EVM 与外部服务需要各自控制。 | 官网列“Native OCAP foundations”为核心。对外称“ALUX TVM 原生对象能力实现”；解释权限被显式传给任务、TVM 在能力介导交互中执行边界。不要用“OCAP 由 ALUX 发明”或“全面防住 prompt injection”。 |
| GLVM / 全球逻辑虚拟机 | Global Logical Virtual Machine，是 ALUX 构建中的开发者侧／系统级逻辑执行抽象：多个物理机器各跑一个具体 TVM，上层把执行状态、进程、并发、重放、复制、终局和共识组织成一个逻辑模型。官网明确写它“不是另一个 bytecode VM”。它统摄 TVM、持久执行、权限、终局与 BlockGit，而不替代各层。 | “GLVM”及其 ALUX 架构定义是 ALUX 品牌／系统设计主张；全球 VM、单一系统映像、分布式 OS 等愿景已有长期先例。不要说 ALUX 发明了全球计算机概念，也不应把目标架构叙述成当前已跨公有链、云和终端统一执行。 | 链上 TVM 是当前基础；私有云是下一集成面；客户端设备、本地执行、跨分片、跨异构 runtime 原子组成仍是路线目标。网站宜称“ALUX 正构建的逻辑执行层／架构方向”。将“全球计算机”作为通俗类比时须解释为多个 TVM 协同，不是单台超级电脑或无边界云主机。 |
| EVM 沙箱、TSAC、其他 VM | 现有兼容路径：隔离 EVM guest 保留各自 stack/memory，由 TSAC adapter 将读写全局状态的操作接到 TVM 并发协调。TVM 是 host/runtime，EVM 是被托管的执行环境。WASM 等更多 guest VM 属扩展计划。 | EVM 兼容、沙箱和适配器是具体集成，不意味着异构虚拟机间通用可组合已经落地。 | 官网写 EVM today、WASM planned；本地路线图显示新 EVM sandbox 和常用 eth_* RPC 路径已完成/在集成。仅写已支持工作负载与具体接口范围，避免“兼容所有 EVM 合约”。 |
| Cross-shard / 水平原子性 | 目标是让一笔交易跨分片协调并以单一提交边界全成全败。它是 GLVM 横向扩展方向，依赖分片间协议和终局机制，不是现有跨区块长交易的同义词。 | 原子跨分片交易是广泛研究方向；ALUX 可描述自身方案目标，不可宣称已实现或 ALUX 独占。 | 官网明确写“Roadmap”“not implemented in current runtime”。ConcurSys 服务网站只能列为技术路线／规划，不列作现售能力。 |
| 全球计算机／World OS | ALUX 的长期愿景是在一个逻辑执行抽象之上增加服务／agent 注册发现、编排和可编程能力；再由多个公链、私有集群、客户端 TVM 承载。此为 GLVM 上方的服务层，不是 TVM、BlockGit 或 OCAP 本身。 | “World OS”与全球计算机是愿景性概念，不能仅以官网架构图证明完成或原创。 | 官网把 service/agent discovery、orchestration 标为 future service layer；私有云下一步、设备端 roadmap。适合 ConcurSys 用“面向多执行面的长期架构方向”，并把已实现的链上 runtime 与未来服务层分开。 |

## 推荐用于 ConcurSys 服务网站的表达

建议把叙事中心放在客户能理解的技术能力，而不是复刻 ALUX 的全球 VM 愿景：

> ConcurSys 研发 ALUX 背后的语言、运行时与共识技术，并为并发执行和链上长时任务提供底层技术服务。ALUX 的 Tuple-Space Virtual Machine（TVM）运行 Tolang 字节码进程，支持任务并发、跨区块等待与恢复；ReplayTrie 为验证重放记录执行选择，BlockGit 负责组织并发区块及其终局。TVM 原生对象能力机制让任务只持有显式授予的通道权限。GLVM 是 ALUX 正构建的跨 TVM 逻辑执行抽象，云端、设备端和跨分片执行仍处于集成／路线阶段。

需结合 ConcurSys 实际交付合同调整“提供服务”“可部署”“支持”等词；ALUX 官网能力说明不自动等于 ConcurSys 已上线产品、服务等级或独立审计保证。对 agent 的说明建议限定为“这些运行时原语可承载 agent 工作流”，并说明模型供应商 API 与人工审批在应用层连接；不称“企业级 agent 平台”。

## 证据与仓库定位

本地源仓库 `A:\vibe coding\01_网站维护\01_ALUX\alux.network` 的 `README.md` 声明它是官方 ALUX 网站源码事实来源。主要证据位置：

- `i18n/source/site.en.json`：`home.sections.2.clusters.0`（TVM）、`.1`（OCAP）、`.2`（长交易）、`.4`（BlockGit）、`.5`（EVM/TSAC）；`home.sections.2.combinations.*`（组合关系）；`home.sections.2.core.*` 与 `home.sections.0.*`（GLVM）；`home.sections.9.items.*`（FAQ / agent durable execution / OCAP / replay）。
- `i18n/source/site.en.json`：`glvm.definition.*`、`glvm.architecture.layers.*`、`glvm.stack.items.*`、`glvm.ocapStory.*`、`glvm.status.*`（明确区分 TVM 与 GLVM、权限边界及路线状态）；`roadmapStatic.*`（路线图英文节点）。
- 页面骨架：`index.html`、`glvm.html`、`runtime-lab.html`、`for-ai-agents.html`、`alux-vs-others.html`、`roadmap.html`；交互和页面渲染由 `script.js` 提供：`renderHomeCapabilityMapSection`、`renderHomeArchitectureSection`、`renderGlvmPage`、`setupGlvmPage`。官网不是一页白皮书；部分源文本在 `script.js` 的 `glvmPageEn` 中，未完全纳入 i18n JSON。
- 本地路线图 `roadmap.html` 顶部标记 Last updated: July 6, 2026；其中 Q2 标出 Tolang native parser/compiler tooling、API、node CLI 与 customized explorer 完成，而 full end-to-end integration testing including consensus、EVM sandbox 和 Ethereum toolchain 等各自标为进行中。官网线上可检索到的路线图版本标记 April 9, 2026，状态描述有差异；本清单优先采用任务指定本地仓库作内容基线，但正式发布前需对齐 ALUX 当前路线图。

## 网页与官方材料

- [ALUX 首页（技术栈与 capability map）](https://www.alux.network/)
- [ALUX GLVM 页面](https://www.alux.network/glvm.html)
- [ALUX Runtime Lab](https://www.alux.network/runtime-lab.html)
- [ALUX 路线图](https://www.alux.network/roadmap.html)
- [ALUX 官方 GitHub 组织及公开仓库清单](https://github.com/alux-network)：公开可见的仓库包括 alux-rust（仓库简介为 typed Rust specifications）、alux-programming 与网站源码；未见公开 BlockGit 规范／共识实现仓库。故本报告不把网站自述当成独立安全审计或形式化证明。
- [ALUX 官方 Tolang 编程指南](https://github.com/alux-network/alux-programming)：官方仓库 README 描述其为 ALUX programming guidelines，并称为 pre-release、随 ALUX 演进；能佐证官方语言／编程方向，不能替代 TVM 字节码和链上运行时规范。
- [对象能力模型的学术定义示例（论文）](https://doi.org/10.1016/j.envsoft.2022.105471)：对象能力将对象引用作为不可伪造能力，确立通用 OCAP 思想的既有来源边界。
- [Blocklace 学术论文](https://arxiv.org/abs/2402.08068)：说明 blocklace/DAG 类结构的既有研究背景；ALUX 路线图记录早期 Blocklace 实现后再设计 BlockGit，因此两者不应混称。公开材料不足以由此推断 BlockGit 与论文协议同构。
- ALUX 公开路线说明称 BlockGit 是“new consensus protocol”，路线图列出 2024 Q3 初版设计实现、2024 Q4 接入 node 并在 Docker network 测试、2025 Q1/2 引入和测试 Weaklink。路线说明能证明 ALUX 的实现进度主张，不能独立证明其原创优先权、攻击模型或安全性质。
