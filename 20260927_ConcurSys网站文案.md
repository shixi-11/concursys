## 中文版

### 深耕底层技术，让系统真正运行。

为公链上的 Agent 执行、虚拟机与分布式系统提供技术服务。

导航：技术服务 / 技术体系 / 关于我们

聊聊你的项目 / 了解我们的技术服务

### 你的系统难题，是我们的工程课题。

从架构设计到工程实现，深入系统的执行层。

#### 公链 Agent 执行支持

面向需要在公链上保存状态、协调执行并明确权限边界的 Agent，提供底层工程支持。

架构设计 · 运行时集成 · 执行验证

#### 虚拟机工程

围绕系统需求，设计与实现字节码运行时、进程协作机制和执行语义。

虚拟机设计 · 工具链集成 · 运行时诊断

#### 分布式系统

处理多台参与机器之间的并发、重放与协作问题。

系统设计 · 共识协议 · 故障分析

### 面向全球计算机，深入每一层工程。

从字节码运行时到共识层，深入我们的原创技术。

#### GLVM · 全局逻辑虚拟机

跨越多台机器的逻辑执行模型。

GLVM（Global Logical Virtual Machine）是我们正在构建的系统级执行架构，在参与系统的多个 TVM 字节码引擎之上定义共同的逻辑模型。

我们能提供的支持：执行架构设计、运行时边界划分与系统集成设计。

#### TVM · 元组空间虚拟机

从字节码到实际执行。

TVM（Tuple-space Virtual Machine）是参与机器上的具体字节码执行引擎。它运行 Tolang 字节码，通过通道与通信事件协调并发进程。

我们能提供的支持：字节码运行时工程、进程协作、工具链集成与运行诊断。

#### BLOCKGIT · BLOCKGIT 共识协议

让并发工作达成共识。

BlockGit 是我们为 ALUX 研发的共识协议。它以有向无环图组织并发区块，通过强链接、弱链接与合并规则协调区块历史和状态转移。

我们能提供的支持：共识架构设计、协议实现、系统集成与分布式测试。

#### OCAP · 对象能力机制

让权限边界明确可控。

对象能力机制通过不可伪造的引用，限定任务可以访问的对象。在 TVM 原生交互中，这些边界由运行时执行；外部服务与托管环境需要各自的权限控制。

我们能提供的支持：能力边界划分、最小权限设计与集成审查。

#### DURABLE · 持久执行

让执行状态延续下去。

公链可以为 Agent 提供持久执行环境。通过保留执行状态与续体，任务能够跨区块等待，并在所依赖的条件就绪后继续执行。

我们能提供的支持：状态持久化、等待与恢复流程、重放要求及终局边界设计。

### 从语言到共识，贯通底层。

ConcurSys 研发了 ALUX 背后的 Tolang、TVM 字节码运行时、ReplayTrie 与 BlockGit 共识协议，将语言设计、并发执行与分布式共识衔接起来。

Tolang：面向并发进程的语言与编译器，以 TVM 字节码为执行目标。

ReplayTrie：记录确定性重放所需执行选择的运行时结构。

GLVM 是持续演进的系统级架构，跨分片执行与更多部署环境仍属于研发方向。

### 技术的研发者，也是你的工程伙伴。

ConcurSys 是 ALUX 的美国技术公司。我们将自研语言、运行时与共识协议的工程能力，带入面向全球计算机底层建设的技术服务。

#### 明确问题

梳理执行需求、项目约束与系统边界。

#### 构建基础

确定合作范围，设计并实现底层组件。

#### 验证系统

测试约定行为、检查故障场景，并完成文档交接。

### 把技术难题，交给我们一起解决。

告诉我们你正在构建什么、执行环节遇到了什么困难，以及系统需要实现什么。

开启一次技术交流

info@concursys.io

面向全球计算机的技术服务。

## English

### Deep engineering. Real execution.

Technical services for public-chain agent execution, virtual machines, and distributed systems.

导航：Services / Technology / Company

Discuss your project / Explore our expertise

### Your hardest systems problems. Our engineering focus.

From architecture to implementation, we work at the execution layer.

#### Public-chain agent execution

Engineering support for agents that need persistent state, coordinated execution, and explicit authority on public chains.

Architecture · Runtime integration · Execution testing

#### Virtual machine engineering

Bytecode runtimes, process coordination, and execution semantics built around your system.

VM design · Toolchain integration · Runtime diagnostics

#### Distributed systems

Concurrency, replay, and coordination across participating machines.

System design · Consensus protocols · Failure analysis

### One global computer. Many engineering challenges.

Original technology, from the bytecode runtime to the consensus layer.

#### GLVM · GLOBAL LOGICAL VIRTUAL MACHINE

A logical model across machines.

GLVM is the system-level execution architecture we are developing across participating TVMs. It defines a shared logical model above the individual bytecode engines.

How we can help：Execution architecture, runtime boundaries, and integration design.

#### TVM · TUPLE-SPACE VIRTUAL MACHINE

Where bytecode becomes execution.

TVM is the concrete bytecode engine on a participating machine. It runs Tolang bytecode and coordinates concurrent processes through channels and communication events.

How we can help：Bytecode runtime engineering, process coordination, toolchain integration, and diagnostics.

#### BLOCKGIT · BLOCKGIT CONSENSUS PROTOCOL

Consensus for concurrent work.

BlockGit is our consensus protocol for ALUX. It organizes concurrent blocks in a directed acyclic graph, using strong and weak links with merge rules to coordinate block history and state transitions.

How we can help：Consensus architecture, protocol implementation, integration, and distributed testing.

#### OCAP · OBJECT CAPABILITIES

Make authority explicit.

Object capabilities use unforgeable references to define what a task can access. In TVM-native interactions, the runtime enforces these boundaries; external services and hosted environments need their own controls.

How we can help：Capability boundaries, least-authority design, and integration reviews.

#### DURABLE · DURABLE EXECUTION

Carry execution forward.

A public chain can provide a durable environment for agents. Preserved execution state and continuations let work wait across blocks and resume when its dependencies are ready.

How we can help：State persistence, wait-and-resume flows, replay requirements, and finalization boundaries.

### From language to consensus.

ConcurSys develops the technology behind ALUX: Tolang, the TVM bytecode runtime, ReplayTrie, and the BlockGit consensus protocol. Our work connects language design, concurrent execution, and distributed agreement.

Tolang：A language and compiler for concurrent processes, targeting TVM bytecode.

ReplayTrie：A runtime structure that records execution choices needed for deterministic replay.

GLVM is the evolving system-level architecture. Cross-shard execution and additional deployment environments remain development directions.

### Built by the people behind the technology.

ConcurSys is the US technology company behind ALUX. We bring our own language, runtime, and consensus engineering into technical services for teams building at the foundations of the global computer.

#### Define the problem

Map your execution requirements, constraints, and system boundaries.

#### Build the foundation

Agree the scope, then design and implement the underlying components.

#### Validate the system

Test the agreed behavior, review failure cases, and document the handover.

### Bring us the hard problem.

Tell us what you are building, where execution gets difficult, and what needs to work.

Start a technical conversation

info@concursys.io

Technical services for the global computer.
