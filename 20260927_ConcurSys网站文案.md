## English

### Foundations for agents.

Language, runtime and consensus engineering for agents that need persistent state, explicit authority and verifiable execution. Built by the team behind ALUX.

导航：Services / Technology / Company / Team

Discuss your project / Explore our expertise

### An agent needs a foundation. We engineer it.

From the language an agent runs to the network that verifies its work, we build the layers that make execution possible.

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

### Pages

**home**

Home

**overview**

Overview

**learnMore**

Learn more

**related**

Related technology

**serviceDetail**

Service details

**technologyDetail**

Technology details

**approach**

How we work

**contactIntro**

Share the system you are building, the execution challenge you are facing, and the scope you would like to discuss. We can use that context to determine whether our engineering work fits your needs.

**projectLabel**

Project

**emailLabel**

Email

**challengeLabel**

Technical challenge

**scopeLabel**

Scope to discuss

**prepareEmail**

Prepare email

**emailHint**

This opens your email application with a draft. It will not send automatically.

**required**

Please complete the required fields.

**servicesIntro**

We work on the execution layer: from runtime and bytecode engineering to the coordination and state handling required across participating machines. Each engagement begins with the system constraints and the specific behavior that needs to be built or examined.

**technologyIntro**

Our work spans language and bytecode execution, process coordination, authority boundaries, durable execution patterns, and distributed agreement. These technologies inform our engineering practice; each system still needs to be assessed against its own requirements and deployment environment.

**companyIntro**

ConcurSys is the US technology company behind ALUX. We develop the underlying language, runtime, and consensus technologies and apply that engineering experience to technical services for teams working on the global computer.

**serviceDetails.agent.eyebrow**

PUBLIC-CHAIN AGENT EXECUTION

**serviceDetails.agent.title**

Engineering support for on-chain execution.

**serviceDetails.agent.intro**

We help teams reason about agents that run on public chains, including how execution is coordinated, state is carried forward, and authority is represented at the runtime boundary. The work is scoped to the underlying system requirements.

**serviceDetails.agent.questionsTitle**

Questions we work through

**serviceDetails.agent.questions.0**

Which execution steps must run on-chain, and which dependencies sit outside the chain?

**serviceDetails.agent.questions.1**

What state must be preserved between blocks, and under what conditions should execution resume?

**serviceDetails.agent.questions.2**

How are capabilities and access boundaries represented and enforced across runtime interactions?

**serviceDetails.agent.deliverablesTitle**

Potential engineering outputs

**serviceDetails.agent.deliverables.0**

An execution architecture and boundary map tied to the stated system requirements.

**serviceDetails.agent.deliverables.1**

A runtime integration plan describing relevant state, coordination, and authority interfaces.

**serviceDetails.agent.deliverables.2**

Targeted execution tests and technical notes for agreed scenarios and failure cases.

**serviceDetails.vm.eyebrow**

VIRTUAL MACHINE ENGINEERING

**serviceDetails.vm.title**

Bytecode runtimes shaped around the system.

**serviceDetails.vm.intro**

We work on bytecode execution, process coordination, and runtime semantics. The focus may include a concrete TVM environment, its toolchain, or the behavior required at the boundary between a runtime and the surrounding system.

**serviceDetails.vm.questionsTitle**

Questions we work through

**serviceDetails.vm.questions.0**

What bytecode operations and execution semantics must the runtime support?

**serviceDetails.vm.questions.1**

How should concurrent processes communicate through channels and communication events?

**serviceDetails.vm.questions.2**

Which toolchain, observability, replay, or diagnostic capabilities are needed to inspect execution?

**serviceDetails.vm.deliverablesTitle**

Potential engineering outputs

**serviceDetails.vm.deliverables.0**

A runtime design or implementation plan mapped to the required execution semantics.

**serviceDetails.vm.deliverables.1**

Integration guidance for bytecode, compiler/toolchain, process, and communication boundaries.

**serviceDetails.vm.deliverables.2**

A focused diagnostic or test plan covering representative execution paths and edge cases.

**serviceDetails.distributed.eyebrow**

DISTRIBUTED SYSTEMS

**serviceDetails.distributed.title**

Coordination across participating machines.

**serviceDetails.distributed.intro**

We examine concurrency, replay, protocol behavior, and failure handling across machines. Work is grounded in the system’s coordination model and the properties that need to be validated, without assuming guarantees beyond the agreed design.

**serviceDetails.distributed.questionsTitle**

Questions we work through

**serviceDetails.distributed.questions.0**

How are concurrent updates ordered, linked, or reconciled across participants?

**serviceDetails.distributed.questions.1**

What information must be recorded to reproduce an execution deterministically?

**serviceDetails.distributed.questions.2**

How should the system behave when a participant, message, or dependency is delayed or unavailable?

**serviceDetails.distributed.deliverablesTitle**

Potential engineering outputs

**serviceDetails.distributed.deliverables.0**

A system or protocol architecture describing coordination and state-transition boundaries.

**serviceDetails.distributed.deliverables.1**

Distributed test scenarios for concurrency, replay, and selected failure conditions.

**serviceDetails.distributed.deliverables.2**

Implementation and integration findings documented for the agreed scope.

**techDetails.glvm.focusTitle**

System-level architecture in development

**techDetails.glvm.points.0**

GLVM is an evolving execution architecture being developed across participating TVMs.

**techDetails.glvm.points.1**

It defines a shared logical model above individual bytecode engines; it is not presented as a finished, generally available product.

**techDetails.glvm.points.2**

Engineering discussion can clarify runtime boundaries, coordination assumptions, and integration needs for a particular system.

**techDetails.tvm.focusTitle**

Concrete bytecode execution and process coordination

**techDetails.tvm.points.0**

TVM is the bytecode engine on a participating machine and executes Tolang bytecode.

**techDetails.tvm.points.1**

Channels and communication events provide the described mechanisms for coordinating concurrent processes.

**techDetails.tvm.points.2**

Runtime work can examine execution semantics, toolchain integration, diagnostics, and process boundaries.

**techDetails.blockgit.focusTitle**

A graph-based model for concurrent block history

**techDetails.blockgit.points.0**

BlockGit is the consensus protocol developed for ALUX.

**techDetails.blockgit.points.1**

Its design organizes concurrent blocks in a directed acyclic graph with strong and weak links.

**techDetails.blockgit.points.2**

Merge rules coordinate block history and state transitions; protocol behavior must be evaluated against the system requirements.

**techDetails.ocap.focusTitle**

Authority expressed through references

**techDetails.ocap.points.0**

Object-capability design uses unforgeable references to define what a task can access.

**techDetails.ocap.points.1**

For TVM-native interactions, the runtime enforces these authority boundaries.

**techDetails.ocap.points.2**

External services and hosted environments require their own access controls and integration review.

**techDetails.durable.focusTitle**

Stateful work that can wait and resume

**techDetails.durable.points.0**

A public chain can provide a durable environment for agent execution.

**techDetails.durable.points.1**

Preserved state and continuations can support work that waits across blocks for dependencies.

**techDetails.durable.points.2**

Resume conditions, replay needs, and finalization boundaries must be defined for each system.

### Technology map

**mapTitle**

Inside the agent execution stack.

**mapIntro**

Follow the path from language to runtime, authority, state and consensus. Explore what each layer contributes to an agent’s execution—and how the layers connect.

**mapHint**

Select a module to see its responsibilities and connected components.

**layers.0**

Development entry

**layers.1**

Concurrent execution

**layers.2**

Transactions & verification

**layers.3**

Consensus & network

**layers.4**

Evolution path

**current**

Current foundation

**evolving**

Continuously evolving

**roadmap**

Roadmap

**role**

Module role

**connections**

Connected modules

**details**

Technical details

**team**

Team

**modules.tolang.name**

Tolang

**modules.tolang.title**

A language and compiler for concurrent services

**modules.tolang.body**

ConcurSys develops Tolang and its compiler for expressing concurrent processes that target the TVM runtime.

**modules.tolang.help**

Language design, compiler behavior, and the path from source to runtime execution.

**modules.tolang.points.0**

Compiles Tolang programs to TVM-targeted bytecode.

**modules.tolang.points.1**

Models work as concurrent processes that can communicate through channels.

**modules.tolang.points.2**

Connects source-level service logic with TVM execution and the developer toolchain.

**modules.tolang.status**

current

**modules.replay.name**

ReplayTrie & BranchId

**modules.replay.title**

Replayable evidence for deterministic validation

**modules.replay.body**

The runtime records execution choices that may otherwise vary, so validators can reproduce the accepted path.

**modules.replay.help**

Replay requirements, execution evidence, and validator-side reproduction.

**modules.replay.points.0**

BranchId identifies the execution branch associated with recorded work.

**modules.replay.points.1**

COMM records preserve relevant communication events and choices.

**modules.replay.points.2**

ReplayTrie organizes evidence used to reproduce execution deterministically.

**modules.replay.status**

current

**modules.atomicity.name**

Cross-block atomicity

**modules.atomicity.title**

One transaction that can wait and resume

**modules.atomicity.body**

An ALUX transaction can suspend at a block boundary, continue in a later block, and keep its ALUX state changes staged until final commit or abort.

**modules.atomicity.help**

Long-running workflows, isolation boundaries, and commit or abort behavior.

**modules.atomicity.points.0**

Segments and partitions preserve progress at suspension points.

**modules.atomicity.points.1**

Isolation and replay support resumption and validation across blocks.

**modules.atomicity.points.2**

Atomicity covers staged ALUX state; external-world effects such as an API call or physical action are not automatically rolled back.

**modules.atomicity.status**

current

**modules.evm.name**

EVM & TSAC

**modules.evm.title**

Supported EVM workloads, coordinated through TVM

**modules.evm.body**

ALUX currently supports selected EVM workloads in isolated execution environments. TSAC coordinates relevant global-state operations with TVM; compatibility depends on the supported surface.

**modules.evm.help**

EVM integration boundaries, TSAC coordination, and workload compatibility review.

**modules.evm.points.0**

Each EVM instance keeps its own execution stack and memory.

**modules.evm.points.1**

TSAC routes supported global-state interactions for coordination with TVM processes.

**modules.evm.points.2**

WASM guest execution is planned; this does not imply universal EVM compatibility.

**modules.evm.status**

current

**modules.framework.name**

Segments · Partitions · Fringe

**modules.framework.title**

Structure execution work for scheduling and finality

**modules.framework.body**

Framework services organize execution traces into segments and partitions, then assemble candidate work into fringes for the consensus path.

**modules.framework.help**

Execution scheduling, dependency handling, and the handoff from runtime work to block production.

**modules.framework.points.0**

Segments capture bounded portions of execution progress.

**modules.framework.points.1**

Partitions organize dependencies and resumable work.

**modules.framework.points.2**

Fringe building groups candidate blocks for BlockGit to process.

**modules.framework.status**

current

**modules.node.name**

Node · RPC · P2P

**modules.node.title**

The network-facing runtime surface

**modules.node.body**

The node layer connects execution to supported RPC methods, peer communication, and storage context. Exact endpoints and operational behavior depend on the current implementation surface.

**modules.node.help**

Node integration, supported RPC scope, peer communication, and storage boundaries.

**modules.node.points.0**

Exposes supported Ethereum-facing eth_* RPC methods.

**modules.node.points.1**

P2P gossip carries network messages among participating peers.

**modules.node.points.2**

Node storage context and static service surfaces sit around the runtime.

**modules.node.status**

current

**modules.tooling.name**

Compiler · LSP · Playground

**modules.tooling.title**

Inspect and exercise service logic during development

**modules.tooling.body**

Compiler diagnostics and the language-server and playground workflows help developers examine Tolang programs before connecting them to a node.

**modules.tooling.help**

Compiler integration, diagnostics, editor workflows, and early runtime evaluation.

**modules.tooling.points.0**

Compiler diagnostics surface issues along the source-to-bytecode path.

**modules.tooling.points.1**

LSP workflows support language-aware inspection and editing.

**modules.tooling.points.2**

Playground runs, expansion, and formatting help examine service behavior.

**modules.tooling.status**

current

**modules.sharding.name**

Cross-shard execution

**modules.sharding.title**

Horizontal atomicity across shards

**modules.sharding.body**

The design target is a single all-or-nothing transaction boundary across participating shards. Cross-shard execution remains on the roadmap.

**modules.sharding.help**

Future transaction coordination across shards and protection against partial visibility.

**modules.sharding.points.0**

Stage shard-local effects under one transaction boundary.

**modules.sharding.points.1**

Commit all participating effects together or abort them together.

**modules.sharding.points.2**

Keep intermediate cross-shard state unobservable to unrelated transactions.

**modules.sharding.status**

roadmap

**modules.worldos.name**

World OS & client surfaces

**modules.worldos.title**

Extend the execution model to new environments

**modules.worldos.body**

A programmable World OS layer and deployment on client devices are longer-term directions for the system. They are roadmap items, not current runtime capabilities.

**modules.worldos.help**

Future deployment models and the system-level abstractions needed to support them.

**modules.worldos.points.0**

GLVM is the evolving system-level model across participating TVMs.

**modules.worldos.points.1**

Client-device TVM deployment remains planned.

**modules.worldos.points.2**

A programmable World OS layer remains a roadmap direction.

**modules.worldos.status**

roadmap

**menuGroups.0**

Language & runtime

**menuGroups.1**

Execution & security

**menuGroups.2**

Consensus & integration

**menuGroups.3**

Research directions

### Team

**title**

The people behind the systems

**intro**

ConcurSys brings together deep experience in quantitative risk systems and concurrent computing. That work informs the runtime, language, and consensus technologies we build.

**frank.role**

Founder & President

**frank.bio.0**

Frank He (Atticbee) is a blockchain researcher and entrepreneur whose work includes the design and implementation of concurrent virtual machines. Before ConcurSys, he spent more than 15 years as a senior quantitative analyst and developer at Bloomberg, Lehman Brothers, and Barclays Capital, building highly scalable risk computation systems.

**frank.bio.1**

At ConcurSys, he applies that experience to concurrent systems architecture. His work connects the runtime, programming language, and consensus technologies developed for ALUX into a coherent engineering foundation.

**frank.focus.0**

Concurrent systems

**frank.focus.1**

Risk computation

**frank.focus.2**

Runtime architecture

**tomislav.role**

CTO

**tomislav.bio.0**

Tomislav’s interest in computing began with a cardboard calculator at five and C64c assembly programming at ten. More than a decade in electronics and two decades of programming across languages such as JavaScript and Haskell shaped his approach: explore the model, understand the machinery, then build.

**tomislav.bio.1**

His work on concurrency draws on process calculus. At ConcurSys, he connects formal models of processes and communication with practical runtime engineering, bringing the same curiosity and deep project involvement to the foundations of ALUX.

**tomislav.focus.0**

Process calculus

**tomislav.focus.1**

Concurrency

**tomislav.focus.2**

Runtime engineering

### Join Us

**nav**

Join Us

**title**

Build the foundations with us.

**intro**

Interested in concurrent systems, programming languages or distributed execution? Introduce yourself and the engineering work you want to contribute to.

**label**

Engineering interests

**body**

Tell us about a system you have built, a difficult problem you have investigated, or an open-source contribution you are proud of. Include links that help us understand your work.

**cta**

Introduce yourself

**subject**

Working with ConcurSys

**email**

About me:

Engineering interests:

Selected work and links:


### Agent infrastructure

**eyebrow**

Agent infrastructure

**title**

Foundations for agents.

**body**

Language, runtime and consensus engineering for agents that need persistent state, explicit authority and verifiable execution. Built by the team behind ALUX.

**rails.0**

Persistent state

**rails.1**

Explicit authority

**rails.2**

Coordinated execution

**rails.3**

Replayable validation

**servicesTitle**

An agent needs a foundation. We engineer it.

**servicesIntro**

From the language an agent runs to the network that verifies its work, we build the layers that make execution possible.

**mapTitle**

Inside the agent execution stack.

**mapIntro**

Follow the path from language to runtime, authority, state and consensus. Explore what each layer contributes to an agent’s execution—and how the layers connect.

**bridgeTitle**

From agent intent to system behavior.

**bridgeBody**

A model can propose an action. The execution system must define what can run, what it can access, how state survives waiting, and how results are agreed. These are the engineering questions behind our work on ALUX.

**coreLabels.0**

Native concurrent language

**coreLabels.1**

Agent execution engine

**coreLabels.2**

Explicit authority

**coreLabels.3**

Concurrent consensus

**coreLabels.4**

One logical execution model

### Agent relevance

**label**

For agent systems

**modules.glvm**

GLVM is an evolving shared logical model across participating TVMs for coordinating execution at the system level.

**modules.tolang**

Tolang expresses concurrent service logic that can be compiled for execution by TVM.

**modules.tvm**

TVM executes bytecode and coordinates communication among concurrent processes.

**modules.ocap**

Object capabilities make explicit which objects and resources an agent can reach.

**modules.durable**

Durable execution preserves state and continuations so work can wait for dependencies and resume later.

**modules.atomicity**

Cross-block atomicity stages ALUX state until commit or abort; external side effects do not automatically roll back.

**modules.replay**

Replay provides a basis for deterministically re-running execution and checking its recorded choices.

**modules.framework**

Segments, partitions, and fringes organize execution, recovery, and finalization boundaries.

**modules.blockgit**

BlockGit coordinates concurrent block history and state across distributed participants.

**modules.evm**

EVM/TSAC lets existing EVM contracts participate through coordination by TVM.

**modules.node**

Node interfaces connect agent requests and state queries; P2P handles propagation between nodes.

**modules.tooling**

Compiler, LSP, and Playground tools help build and inspect program logic.

**modules.sharding**

Cross-shard atomicity is a development direction for coordinating agent work across shards.

**modules.worldos**

World OS and client deployment are roadmap directions for a programmable execution environment.

### Tolang

**eyebrow**

A native language for next-generation blockchains

**title**

Tolang gives agents a native way to express concurrent work.

**intro**

Built for next-generation blockchain systems, Tolang connects agent workflows to the execution layer: concurrent processes, typed communication, and a direct path to the TVM runtime.

**cta**

Explore the Tolang toolchain

**pipeline.0**

Tolang source

**pipeline.1**

tolangc compiler

**pipeline.2**

.tox bytecode

**pipeline.3**

TVM processes

**features.0.title**

Concurrency as a language primitive

**features.0.body**

Express work as processes that can fork, wait, resume, and make progress together. This gives agent systems a clear way to describe tasks that do not fit a single sequential call.

**features.1.title**

Typed process communication

**features.1.body**

Processes exchange data through typed tuple-space channels rather than shared memory. Channel descriptors and behavioral types help catch some misuse early; runtime rules govern channel lifecycles.

**features.2.title**

A path into persistent services

**features.2.body**

Tolang compiles to TVM bytecode, where processes can continue across waits and coordinate through channels. The language connects service logic to the runtime; persistence and transaction guarantees depend on the surrounding ALUX system.

**features.3.title**

A practical developer loop

**features.3.body**

Compiler APIs, LSP diagnostics, formatting, expansion, and playground runs help teams inspect and iterate on service behavior from source toward runtime.

### Execution model

**eyebrow**

Agent execution foundations

**title**

From intent to execution.

**body**

ConcurSys builds ALUX’s underlying language, runtime, and consensus technologies. Together, they provide the engineering layers for expressing, coordinating, and examining agent work.

**diagramLabel**

Execution model

**agents**

Agent tasks

**service**

Tolang service

**scope**

OCAP authority

**runtime**

TVM processes

**proof**

ReplayTrie + BlockGit

**states.0.label**

01 / DEFINE

**states.0.title**

Express concurrent work.

**states.0.body**

Tolang uses process calculus to describe services that divide work, communicate, and progress concurrently.

**states.1.label**

02 / AUTHORIZE

**states.1.title**

Make authority explicit.

**states.1.body**

Object capabilities use unforgeable references to define which objects and resources a task can access.

**states.2.label**

03 / EXECUTE

**states.2.title**

Coordinate, wait, resume.

**states.2.body**

TVM runs processes that communicate through channels; preserved execution state can wait for dependencies and resume when ready.

**states.3.label**

04 / VERIFY

**states.3.title**

Inspect execution and agreement.

**states.3.body**

ReplayTrie provides a basis for replaying execution, while BlockGit coordinates concurrent block history and state.

**mapTitle**

Explore the execution stack.

**mapBody**

See how language, authority, runtime, and consensus fit together.

**mapLink**

Explore the architecture

## 简体中文

### 为 Agent， 构建执行底座。

从编程语言、运行时到共识技术，为 Agent 构建保存状态、明确权限与验证执行的工程基础。我们是 ALUX 底层技术的研发团队。

导航：技术服务 / 技术体系 / 关于我们 / 团队

聊聊你的项目 / 了解我们的技术服务

### Agent 的能力， 需要底层技术承接。

从 Agent 运行的语言，到验证执行结果的网络，我们深入每一层工程。

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

### Pages

**home**

首页

**overview**

概览

**learnMore**

了解详情

**related**

相关技术

**serviceDetail**

服务详情

**technologyDetail**

技术详情

**approach**

合作流程

**contactIntro**

请介绍你正在构建的系统、遇到的执行难题，以及希望讨论的合作范围。我们会据此判断现有工程能力是否适合你的需求。

**projectLabel**

项目

**emailLabel**

邮箱

**challengeLabel**

技术难题

**scopeLabel**

希望讨论的范围

**prepareEmail**

准备邮件

**emailHint**

此操作会打开邮件客户端并生成草稿，不会自动发送。

**required**

请填写必填项。

**servicesIntro**

我们深入系统的执行层，处理运行时与字节码工程，以及多台参与机器之间所需的协作和状态管理。每项合作都从系统约束和需要实现或分析的具体行为出发。

**technologyIntro**

我们的工作涉及语言与字节码执行、进程协作、权限边界、持久执行模式和分布式共识。这些技术构成工程实践的基础；具体方案仍须结合系统需求与部署环境评估。

**companyIntro**

ConcurSys 是 ALUX 背后的美国技术公司。我们研发底层语言、运行时与共识技术，并将相关工程经验用于支持构建全球计算机的团队。

**serviceDetails.agent.eyebrow**

公链 Agent 执行支持

**serviceDetails.agent.title**

为链上执行提供工程支持。

**serviceDetails.agent.intro**

我们协助团队梳理运行在公链上的 Agent 执行问题，包括如何协调执行、延续状态，以及如何在运行时边界表达权限。服务范围依据底层系统需求确定。

**serviceDetails.agent.questionsTitle**

共同梳理的工程问题

**serviceDetails.agent.questions.0**

哪些执行步骤需要在链上完成，哪些依赖位于链外？

**serviceDetails.agent.questions.1**

跨区块需要保留哪些状态，又应在什么条件下恢复执行？

**serviceDetails.agent.questions.2**

能力与访问边界如何表达，并在运行时交互中得到执行？

**serviceDetails.agent.deliverablesTitle**

可约定的工程交付

**serviceDetails.agent.deliverables.0**

结合明确系统需求整理的执行架构与边界说明。

**serviceDetails.agent.deliverables.1**

说明状态、协作和权限接口的运行时集成方案。

**serviceDetails.agent.deliverables.2**

针对约定场景与故障情况设计的执行测试及技术说明。

**serviceDetails.vm.eyebrow**

虚拟机工程

**serviceDetails.vm.title**

围绕系统需求构建字节码运行时。

**serviceDetails.vm.intro**

我们处理字节码执行、进程协作和运行时语义。工作可以围绕具体的 TVM 环境及其工具链，也可以聚焦运行时与外围系统之间所需的行为。

**serviceDetails.vm.questionsTitle**

共同梳理的工程问题

**serviceDetails.vm.questions.0**

运行时需要支持哪些字节码操作与执行语义？

**serviceDetails.vm.questions.1**

并发进程应如何通过通道和通信事件协作？

**serviceDetails.vm.questions.2**

检查执行过程需要哪些工具链、观测、重放或诊断能力？

**serviceDetails.vm.deliverablesTitle**

可约定的工程交付

**serviceDetails.vm.deliverables.0**

对应所需执行语义的运行时设计或实现方案。

**serviceDetails.vm.deliverables.1**

针对字节码、编译器与工具链、进程及通信边界的集成说明。

**serviceDetails.vm.deliverables.2**

覆盖代表性执行路径与边界情况的专项诊断或测试方案。

**serviceDetails.distributed.eyebrow**

分布式系统

**serviceDetails.distributed.title**

协调多台参与机器上的执行。

**serviceDetails.distributed.intro**

我们分析机器之间的并发、重放、协议行为和故障处理。工作以系统的协作模型及待验证的性质为依据，不对约定设计之外的保证作出假设。

**serviceDetails.distributed.questionsTitle**

共同梳理的工程问题

**serviceDetails.distributed.questions.0**

参与方之间的并发更新如何排序、关联或协调？

**serviceDetails.distributed.questions.1**

为确定性重放，需要记录哪些执行信息？

**serviceDetails.distributed.questions.2**

参与方、消息或依赖延迟或不可用时，系统应如何响应？

**serviceDetails.distributed.deliverablesTitle**

可约定的工程交付

**serviceDetails.distributed.deliverables.0**

说明协作机制与状态转移边界的系统或协议架构。

**serviceDetails.distributed.deliverables.1**

针对并发、重放及选定故障条件的分布式测试场景。

**serviceDetails.distributed.deliverables.2**

与约定范围相符的实现及集成分析记录。

**techDetails.glvm.focusTitle**

仍在发展的系统级架构

**techDetails.glvm.points.0**

GLVM 是正在多个参与 TVM 之上构建的执行架构，仍在持续演进。

**techDetails.glvm.points.1**

它在各个字节码引擎之上定义共同的逻辑模型，目前不作为已完成且普遍可用的产品介绍。

**techDetails.glvm.points.2**

工程讨论可围绕具体系统的运行时边界、协作假设与集成需求展开。

**techDetails.tvm.focusTitle**

具体的字节码执行与进程协作

**techDetails.tvm.points.0**

TVM 是参与机器上的字节码引擎，负责执行 Tolang 字节码。

**techDetails.tvm.points.1**

通道与通信事件是协调并发进程的相关机制。

**techDetails.tvm.points.2**

运行时工程可讨论执行语义、工具链集成、诊断能力与进程边界。

**techDetails.blockgit.focusTitle**

以图结构组织并发区块历史

**techDetails.blockgit.points.0**

BlockGit 是为 ALUX 研发的共识协议。

**techDetails.blockgit.points.1**

其设计以有向无环图组织并发区块，并包含强链接与弱链接。

**techDetails.blockgit.points.2**

合并规则用于协调区块历史与状态转移；协议行为需结合系统需求评估。

**techDetails.ocap.focusTitle**

通过引用表达权限

**techDetails.ocap.points.0**

对象能力设计使用不可伪造的引用，限定任务能够访问的对象。

**techDetails.ocap.points.1**

在 TVM 原生交互中，权限边界由运行时执行。

**techDetails.ocap.points.2**

外部服务与托管环境仍须具备各自的访问控制并经过集成审查。

**techDetails.durable.focusTitle**

可等待并继续的有状态执行

**techDetails.durable.points.0**

公链可以为 Agent 执行提供持久环境。

**techDetails.durable.points.1**

保留状态与续体，可支持任务跨区块等待依赖条件就绪。

**techDetails.durable.points.2**

每个系统都需要明确恢复条件、重放需求与终局边界。

### Technology map

**mapTitle**

深入 Agent 的执行底座。

**mapIntro**

沿着语言、运行时、权限、状态与共识，查看各模块如何支撑 Agent 执行，以及它们之间的协作关系。

**mapHint**

点选模块，查看它的职责及连接关系。

**layers.0**

开发入口

**layers.1**

并发执行

**layers.2**

事务与验证

**layers.3**

共识与网络

**layers.4**

演进方向

**current**

当前技术基础

**evolving**

持续演进

**roadmap**

路线图

**role**

模块职责

**connections**

协作模块

**details**

技术详解

**team**

团队

**modules.tolang.name**

Tolang

**modules.tolang.title**

面向并发服务的语言与编译器

**modules.tolang.body**

ConcurSys 研发 Tolang 及其编译器，用于表达面向 TVM 运行时的并发进程。

**modules.tolang.help**

语言设计、编译器行为，以及从源码到运行时执行的衔接。

**modules.tolang.points.0**

将 Tolang 程序编译为面向 TVM 的字节码。

**modules.tolang.points.1**

以并发进程表达工作，并通过通道进行通信。

**modules.tolang.points.2**

衔接源码中的服务逻辑、TVM 执行与开发工具链。

**modules.tolang.status**

current

**modules.replay.name**

ReplayTrie 与 BranchId

**modules.replay.title**

支持确定性验证的可重放证据

**modules.replay.body**

运行时记录可能产生差异的执行选择，使验证者能够复现已接受的执行路径。

**modules.replay.help**

重放要求、执行证据与验证者侧的路径复现。

**modules.replay.points.0**

BranchId 标识记录执行所属的分支。

**modules.replay.points.1**

COMM 记录保存相关通信事件与执行选择。

**modules.replay.points.2**

ReplayTrie 组织用于确定性复现执行的证据。

**modules.replay.status**

current

**modules.atomicity.name**

跨区块原子性

**modules.atomicity.title**

可以等待和恢复的单笔事务

**modules.atomicity.body**

一笔 ALUX 事务可以在区块边界挂起，在后续区块继续执行；其 ALUX 状态变更会保持暂存，直到最终提交或中止。

**modules.atomicity.help**

长流程、隔离边界，以及提交与中止行为。

**modules.atomicity.points.0**

Segments 与 Partitions 在挂起点保存执行进度。

**modules.atomicity.points.1**

隔离与重放支持跨区块恢复和验证。

**modules.atomicity.points.2**

原子性覆盖暂存中的 ALUX 状态；API 调用或现实动作等外部副作用不会自动回滚。

**modules.atomicity.status**

current

**modules.evm.name**

EVM 与 TSAC

**modules.evm.title**

在 TVM 协调下运行受支持的 EVM 工作负载

**modules.evm.body**

ALUX 当前在隔离执行环境中支持部分 EVM 工作负载。TSAC 将相关全局状态操作交由 TVM 协调；具体兼容范围取决于已支持的功能面。

**modules.evm.help**

EVM 集成边界、TSAC 协调方式与工作负载兼容性评估。

**modules.evm.points.0**

每个 EVM 实例保有独立的执行栈与内存。

**modules.evm.points.1**

TSAC 将受支持的全局状态交互转交 TVM 进程协同处理。

**modules.evm.points.2**

WASM 客户端虚拟机仍在路线图中；当前支持不代表兼容所有 EVM 合约。

**modules.evm.status**

current

**modules.framework.name**

Segments · Partitions · Fringe

**modules.framework.title**

组织执行工作，衔接调度与终局

**modules.framework.body**

框架服务将执行轨迹整理为 Segments 与 Partitions，再把候选工作组织成 Fringe，交由共识流程处理。

**modules.framework.help**

执行调度、依赖处理，以及运行时工作到区块生产的衔接。

**modules.framework.points.0**

Segments 记录边界清晰的执行进度片段。

**modules.framework.points.1**

Partitions 组织依赖关系与可恢复的工作。

**modules.framework.points.2**

Fringe 构建流程将候选区块集合交给 BlockGit 处理。

**modules.framework.status**

current

**modules.node.name**

节点 · RPC · P2P

**modules.node.title**

连接网络的运行时接口

**modules.node.body**

节点层将执行系统接入受支持的 RPC 方法、节点间通信与存储上下文。具体接口和运行行为以当前实现范围为准。

**modules.node.help**

节点集成、RPC 支持范围、节点通信与存储边界。

**modules.node.points.0**

提供当前已支持的以太坊风格 eth_* RPC 方法。

**modules.node.points.1**

P2P gossip 在参与节点间传递网络消息。

**modules.node.points.2**

节点存储上下文与静态服务接口围绕运行时提供支持。

**modules.node.status**

current

**modules.tooling.name**

编译器 · LSP · Playground

**modules.tooling.title**

在开发过程中检查和试运行服务逻辑

**modules.tooling.body**

编译器诊断、语言服务器与 Playground 工作流，帮助开发者在接入节点前检查 Tolang 程序。

**modules.tooling.help**

编译器集成、诊断信息、编辑器工作流与早期运行评估。

**modules.tooling.points.0**

编译器诊断揭示源码至字节码流程中的问题。

**modules.tooling.points.1**

LSP 工作流支持具备语言感知能力的查看与编辑。

**modules.tooling.points.2**

Playground 运行、展开与格式化功能便于检查服务行为。

**modules.tooling.status**

current

**modules.sharding.name**

跨分片执行

**modules.sharding.title**

跨分片实现横向原子性

**modules.sharding.body**

设计目标是在参与分片之间建立统一的全有或全无事务边界。跨分片执行仍属于路线图。

**modules.sharding.help**

未来的跨分片事务协作，以及避免部分结果对外可见。

**modules.sharding.points.0**

在统一事务边界内暂存各分片的本地变更。

**modules.sharding.points.1**

所有参与变更一并提交，或一并中止。

**modules.sharding.points.2**

避免无关事务观察到尚未完成的跨分片中间状态。

**modules.sharding.status**

roadmap

**modules.worldos.name**

World OS 与客户端

**modules.worldos.title**

将执行模型延伸到更多环境

**modules.worldos.body**

可编程 World OS 层与客户端设备部署，是系统未来的拓展方向，属于路线图规划，并非当前运行时能力。

**modules.worldos.help**

未来部署形态，以及支撑这些形态所需的系统级抽象。

**modules.worldos.points.0**

GLVM 是仍在演进的系统级模型，连接多个参与 TVM。

**modules.worldos.points.1**

在客户端设备部署 TVM 仍属规划方向。

**modules.worldos.points.2**

可编程 World OS 层仍在路线图中。

**modules.worldos.status**

roadmap

**menuGroups.0**

语言与运行时

**menuGroups.1**

执行与安全

**menuGroups.2**

共识与集成

**menuGroups.3**

研发方向

### Team

**title**

构建底层系统的人

**intro**

ConcurSys 汇聚了量化风险系统与并发计算领域的经验，并将这些积累用于研发运行时、编程语言与共识技术。

**frank.role**

创始人兼总裁

**frank.bio.0**

Frank He（Atticbee）是一位区块链研究者与创业者，研究涵盖并发虚拟机的设计与实现。在创办 ConcurSys 之前，他曾在 Bloomberg、Lehman Brothers 和 Barclays Capital 担任高级量化分析师与开发者，拥有逾十五年的相关经历，构建了高可扩展的风险计算系统。

**frank.bio.1**

在 ConcurSys，他将这段经验用于并发系统架构设计，并把为 ALUX 研发的运行时、编程语言与共识技术衔接成完整的工程基础。

**frank.focus.0**

并发系统

**frank.focus.1**

风险计算

**frank.focus.2**

运行时架构

**tomislav.role**

首席技术官

**tomislav.bio.0**

Tomislav 对计算的兴趣始于五岁时制作的纸板计算器，十岁时开始在 C64c 上学习汇编编程。十余年的电子技术经历，以及二十余年从 JavaScript 到 Haskell 的跨语言编程实践，塑造了他理解模型、探索底层机制并亲手实现的工作方式。

**tomislav.bio.1**

他以 进程演算探索并发计算。在 ConcurSys，他将进程与通信的形式化模型带入运行时工程，以持续的好奇心和对项目的深入投入，参与构建 ALUX 的底层技术。

**tomislav.focus.0**

进程演算

**tomislav.focus.1**

并发计算

**tomislav.focus.2**

运行时工程

### Join Us

**nav**

加入我们

**title**

一起构建底层技术。

**intro**

如果你关注并发系统、编程语言或分布式执行，欢迎向我们介绍自己，以及你希望参与的工程工作。

**label**

技术方向

**body**

聊聊你构建过的系统、深入研究过的技术难题，或引以为傲的开源贡献。也欢迎附上能帮助我们了解你的作品链接。

**cta**

介绍你自己

**subject**

与 ConcurSys 一起工作

**email**

个人介绍：

技术兴趣：

代表作品与链接：


### Agent infrastructure

**eyebrow**

Agent 底层技术

**title**

为 Agent， 构建执行底座。

**body**

从编程语言、运行时到共识技术，为 Agent 构建保存状态、明确权限与验证执行的工程基础。我们是 ALUX 底层技术的研发团队。

**rails.0**

状态持续保存

**rails.1**

权限清晰可控

**rails.2**

执行协同推进

**rails.3**

结果可重放验证

**servicesTitle**

Agent 的能力， 需要底层技术承接。

**servicesIntro**

从 Agent 运行的语言，到验证执行结果的网络，我们深入每一层工程。

**mapTitle**

深入 Agent 的执行底座。

**mapIntro**

沿着语言、运行时、权限、状态与共识，查看各模块如何支撑 Agent 执行，以及它们之间的协作关系。

**bridgeTitle**

从 Agent 的意图， 到系统的实际执行。

**bridgeBody**

模型可以提出行动，执行系统则需要定义：哪些工作能够运行、可以访问什么、等待期间如何保存状态，以及如何对结果达成一致。这些正是我们研发 ALUX 底层技术时解决的工程问题。

**coreLabels.0**

原生并发语言

**coreLabels.1**

Agent 执行引擎

**coreLabels.2**

明确的权限边界

**coreLabels.3**

并发共识协议

**coreLabels.4**

统一逻辑执行模型

### Agent relevance

**label**

面向 Agent 系统

**modules.glvm**

GLVM 正在发展为跨参与 TVM 的共同逻辑模型，用于在系统层协调执行。

**modules.tolang**

Tolang 用于表达并发服务逻辑，并可编译为 TVM 执行的字节码。

**modules.tvm**

TVM 执行字节码，并协调并发进程之间的通信。

**modules.ocap**

对象能力机制明确 Agent 可以触达哪些对象与资源。

**modules.durable**

持久执行保留状态与续体，使任务能够等待依赖就绪后继续运行。

**modules.atomicity**

跨区块原子性让 ALUX 状态暂存至提交或中止；外部副作用不会因此自动回滚。

**modules.replay**

重放为确定性地重新执行并核对已记录的执行选择提供依据。

**modules.framework**

Segments、partitions 与 fringes 用于组织执行、恢复和终局边界。

**modules.blockgit**

BlockGit 协调分布式参与方之间的并发区块历史与状态。

**modules.evm**

EVM/TSAC 让既有 EVM 合约可在 TVM 协调下接入。

**modules.node**

节点接口连接 Agent 的请求与状态查询，P2P 层负责节点间传播。

**modules.tooling**

编译器、LSP 与 Playground 工具帮助构建并检查程序逻辑。

**modules.sharding**

跨分片原子性是协调跨分片 Agent 工作的后续研发方向。

**modules.worldos**

程序化 World OS 与客户端部署属于路线图中的执行环境方向。

### Tolang

**eyebrow**

原生面向新一代区块链的编程语言

**title**

Tolang，让 Agent 原生表达并发工作。

**intro**

Tolang 面向新一代区块链系统的底层执行场景设计，将 Agent 工作流连接到并发进程、带类型的通信与 TVM 运行时。

**cta**

了解 Tolang 工具链

**pipeline.0**

Tolang 源码

**pipeline.1**

tolangc 编译器

**pipeline.2**

.tox 字节码

**pipeline.3**

TVM 进程

**features.0.title**

把并发写进语言表达

**features.0.body**

将工作表达为能够分支、等待、恢复并协同推进的进程，为 Agent 系统描述多路并行任务提供清晰方式。

**features.1.title**

带类型的进程通信

**features.1.body**

进程通过带类型的元组空间通道交换数据，无需共享内存。通道描述符与行为类型有助于提前发现部分误用，通道生命周期则由运行时规则约束。

**features.2.title**

衔接可持续运行的服务

**features.2.body**

Tolang 编译为 TVM 字节码，进程可在等待后继续执行，并通过通道协作。语言负责衔接服务逻辑与运行时；持久性和事务保证取决于 ALUX 系统的其他部分。

**features.3.title**

面向开发的工具链

**features.3.body**

编译器 API、LSP 诊断、格式化、展开与 Playground 试运行，帮助团队从源码出发检查并迭代服务行为。

### Execution model

**eyebrow**

Agent 执行底层技术

**title**

从意图出发， 让执行有据可循。

**body**

ConcurSys 研发 ALUX 底层的语言、运行时与共识技术。它们共同构成表达、协调和检查 Agent 任务的工程层。

**diagramLabel**

执行原理示意

**agents**

Agent 任务

**service**

Tolang 服务

**scope**

OCAP 权限

**runtime**

TVM 进程

**proof**

ReplayTrie + BlockGit

**states.0.label**

01 / 定义

**states.0.title**

表达并发工作。

**states.0.body**

Tolang 以进程演算描述服务逻辑，让工作能够拆分、通信并并发推进。

**states.1.label**

02 / 授权

**states.1.title**

明确权限边界。

**states.1.body**

对象能力机制通过不可伪造的引用，限定任务可以访问哪些对象与资源。

**states.2.label**

03 / 执行

**states.2.title**

协调、等待与恢复。

**states.2.body**

TVM 运行通过通道通信的进程；保留的执行状态可等待依赖就绪后继续运行。

**states.3.label**

04 / 验证

**states.3.title**

检查执行与共识。

**states.3.body**

ReplayTrie 为重放执行提供依据，BlockGit 则协调并发区块历史与状态。

**mapTitle**

了解 Agent 执行底座。

**mapBody**

查看语言、权限、运行时与共识如何衔接。

**mapLink**

探索技术架构

## 한국어

### 에이전트를 위한 실행 기반.

지속되는 상태, 명확한 권한, 검증 가능한 실행이 필요한 에이전트를 위해 언어·런타임·합의 기술을 개발합니다. ALUX의 기반 기술을 만든 팀입니다.

导航：기술 서비스 / 기술 체계 / 회사 소개 / 팀

프로젝트 논의하기 / 전문 분야 살펴보기

### 에이전트의 능력을 받쳐 주는 기반 기술.

에이전트가 실행하는 언어부터 결과를 검증하는 네트워크까지, 실행을 가능하게 하는 각 계층을 구축합니다.

#### 퍼블릭 체인 에이전트 실행

퍼블릭 체인에서 상태를 유지하고 실행을 조율하며 권한을 명확히 해야 하는 에이전트를 위한 엔지니어링 지원입니다.

아키텍처 · 런타임 통합 · 실행 테스트

#### 가상 머신 엔지니어링

시스템에 맞춘 바이트코드 런타임, 프로세스 조율 및 실행 의미 체계를 구축합니다.

가상 머신 설계 · 툴체인 통합 · 런타임 진단

#### 분산 시스템

참여하는 여러 머신 간의 동시성, 재생 및 조율을 다룹니다.

시스템 설계 · 합의 프로토콜 · 장애 분석

### 하나의 글로벌 컴퓨터. 수많은 엔지니어링 과제.

바이트코드 런타임부터 합의 계층까지, 독자 기술을 소개합니다.

#### GLVM · 글로벌 논리 가상 머신

여러 머신에 걸친 논리 모델.

GLVM은 참여하는 TVM 전반에 걸쳐 개발 중인 시스템 수준의 실행 아키텍처입니다. 개별 바이트코드 엔진 위에 공통 논리 모델을 정의합니다.

제공 가능한 지원：실행 아키텍처, 런타임 경계 및 통합 설계.

#### TVM · 튜플 공간 가상 머신

바이트코드가 실행으로 이어지는 곳.

TVM은 참여 머신에서 동작하는 구체적인 바이트코드 엔진입니다. Tolang 바이트코드를 실행하고 채널과 통신 이벤트를 통해 동시 프로세스를 조율합니다.

제공 가능한 지원：바이트코드 런타임 엔지니어링, 프로세스 조율, 툴체인 통합 및 진단.

#### BLOCKGIT · BLOCKGIT 합의 프로토콜

동시 작업을 위한 합의.

BlockGit은 ALUX를 위한 합의 프로토콜입니다. 방향성 비순환 그래프에 동시 블록을 구성하고, 강한 링크와 약한 링크 및 병합 규칙으로 블록 이력과 상태 전이를 조율합니다.

제공 가능한 지원：합의 아키텍처, 프로토콜 구현, 통합 및 분산 테스트.

#### OCAP · OCAP (객체 능력)

권한을 명시적으로.

객체 능력은 위조할 수 없는 참조를 사용해 작업이 접근할 수 있는 대상을 정의합니다. TVM 네이티브 상호작용에서는 런타임이 이 경계를 적용하며, 외부 서비스와 호스팅 환경에는 각각 별도의 제어가 필요합니다.

제공 가능한 지원：능력 경계, 최소 권한 설계 및 통합 검토.

#### DURABLE · 지속 실행

실행을 이어 가다.

퍼블릭 체인은 에이전트에 지속적인 실행 환경을 제공할 수 있습니다. 실행 상태와 컨티뉴에이션을 보존하면 작업이 블록을 넘어 대기한 뒤 의존 조건이 준비되었을 때 재개할 수 있습니다.

제공 가능한 지원：상태 지속성, 대기 및 재개 흐름, 재생 요건과 확정 경계.

### 언어에서 합의까지.

ConcurSys는 ALUX의 기반 기술인 Tolang, TVM 바이트코드 런타임, ReplayTrie 및 BlockGit 합의 프로토콜을 개발합니다. 언어 설계, 동시 실행 및 분산 합의를 연결합니다.

Tolang：동시 프로세스를 위한 언어와 컴파일러로, TVM 바이트코드를 대상으로 합니다.

ReplayTrie：결정적 재생에 필요한 실행 선택을 기록하는 런타임 구조입니다.

GLVM은 계속 발전 중인 시스템 수준 아키텍처입니다. 샤드 간 실행과 추가 배포 환경은 개발 방향으로 남아 있습니다.

### 기술을 만든 사람들이 함께합니다.

ConcurSys는 ALUX를 개발하는 미국 기술 기업입니다. 자체 언어, 런타임 및 합의 엔지니어링 역량을 바탕으로 글로벌 컴퓨터의 기반을 구축하는 팀에 기술 서비스를 제공합니다.

#### 문제 정의

실행 요건, 제약 조건 및 시스템 경계를 파악합니다.

#### 기반 구축

범위를 합의한 뒤 기반 구성 요소를 설계하고 구현합니다.

#### 시스템 검증

합의한 동작을 테스트하고 장애 사례를 검토한 뒤 인계 내용을 문서화합니다.

### 어려운 문제를 함께 해결해요.

무엇을 구축하고 있는지, 실행에서 어떤 어려움이 있는지, 무엇이 제대로 작동해야 하는지 알려 주세요.

기술 상담 시작하기

info@concursys.io

글로벌 컴퓨터를 위한 기술 서비스.

### Pages

**home**

홈

**overview**

개요

**learnMore**

자세히 보기

**related**

관련 기술

**serviceDetail**

서비스 상세

**technologyDetail**

기술 상세

**approach**

협업 방식

**contactIntro**

구축 중인 시스템과 실행 과정의 과제, 논의하고 싶은 범위를 알려 주세요. 이를 바탕으로 저희 엔지니어링이 요구에 적합한지 살펴보겠습니다.

**projectLabel**

프로젝트

**emailLabel**

이메일

**challengeLabel**

기술 과제

**scopeLabel**

논의할 범위

**prepareEmail**

이메일 작성

**emailHint**

이 작업은 이메일 앱에서 초안을 엽니다. 자동으로 전송되지는 않습니다.

**required**

필수 항목을 입력해 주세요.

**servicesIntro**

런타임과 바이트코드 엔지니어링부터 여러 참여 머신 간의 조율과 상태 관리까지, 실행 계층을 다룹니다. 각 협업은 시스템 제약과 구현 또는 분석이 필요한 구체적인 동작에서 시작합니다.

**technologyIntro**

언어와 바이트코드 실행, 프로세스 조율, 권한 경계, 지속 실행 패턴, 분산 합의에 걸쳐 기술을 개발합니다. 구체적인 시스템은 각 요구 사항과 배포 환경에 맞춰 검토해야 합니다.

**companyIntro**

ConcurSys는 ALUX를 뒷받침하는 미국 기술 기업입니다. 기반 언어와 런타임, 합의 기술을 개발하며 글로벌 컴퓨터를 구축하는 팀에 기술 서비스를 제공합니다.

**serviceDetails.agent.eyebrow**

퍼블릭 체인 에이전트 실행

**serviceDetails.agent.title**

온체인 실행을 위한 엔지니어링 지원.

**serviceDetails.agent.intro**

퍼블릭 체인에서 실행되는 에이전트의 실행 조율, 상태 유지, 런타임 경계의 권한 표현을 함께 검토합니다. 구체적인 서비스 범위는 기반 시스템의 요구 사항에 따라 정합니다.

**serviceDetails.agent.questionsTitle**

함께 살펴볼 엔지니어링 질문

**serviceDetails.agent.questions.0**

어떤 실행 단계가 온체인에서 이뤄져야 하며, 어떤 의존성은 체인 외부에 있나요?

**serviceDetails.agent.questions.1**

블록 사이에 유지해야 하는 상태는 무엇이며 어떤 조건에서 실행을 재개해야 하나요?

**serviceDetails.agent.questions.2**

런타임 상호작용에서 기능과 접근 경계를 어떻게 표현하고 적용하나요?

**serviceDetails.agent.deliverablesTitle**

협의 가능한 엔지니어링 결과물

**serviceDetails.agent.deliverables.0**

명시된 시스템 요구 사항에 맞춘 실행 아키텍처와 경계 문서.

**serviceDetails.agent.deliverables.1**

상태, 조율, 권한 인터페이스를 설명하는 런타임 통합 계획.

**serviceDetails.agent.deliverables.2**

합의된 시나리오와 장애 사례를 대상으로 한 실행 테스트 및 기술 문서.

**serviceDetails.vm.eyebrow**

가상 머신 엔지니어링

**serviceDetails.vm.title**

시스템에 맞춘 바이트코드 런타임.

**serviceDetails.vm.intro**

바이트코드 실행, 프로세스 조율, 런타임 의미 체계를 다룹니다. 구체적인 TVM 환경과 툴체인 또는 런타임과 주변 시스템 사이에 필요한 동작을 중심으로 진행할 수 있습니다.

**serviceDetails.vm.questionsTitle**

함께 살펴볼 엔지니어링 질문

**serviceDetails.vm.questions.0**

런타임이 지원해야 하는 바이트코드 연산과 실행 의미 체계는 무엇인가요?

**serviceDetails.vm.questions.1**

동시 프로세스가 채널과 통신 이벤트를 통해 어떻게 협력해야 하나요?

**serviceDetails.vm.questions.2**

실행을 살펴보려면 어떤 툴체인, 관측, 재생 또는 진단 기능이 필요한가요?

**serviceDetails.vm.deliverablesTitle**

협의 가능한 엔지니어링 결과물

**serviceDetails.vm.deliverables.0**

필요한 실행 의미 체계에 맞춘 런타임 설계 또는 구현 계획.

**serviceDetails.vm.deliverables.1**

바이트코드, 컴파일러 및 툴체인, 프로세스, 통신 경계의 통합 지침.

**serviceDetails.vm.deliverables.2**

대표 실행 경로와 경계 사례를 다루는 집중 진단 또는 테스트 계획.

**serviceDetails.distributed.eyebrow**

분산 시스템

**serviceDetails.distributed.title**

참여 머신 전반의 실행 조율.

**serviceDetails.distributed.intro**

머신 간 동시성, 재생, 프로토콜 동작과 장애 처리를 검토합니다. 시스템의 조율 모델과 검증할 속성을 바탕으로 하며 합의된 설계 밖의 보장을 가정하지 않습니다.

**serviceDetails.distributed.questionsTitle**

함께 살펴볼 엔지니어링 질문

**serviceDetails.distributed.questions.0**

참여자 간 동시 업데이트를 어떻게 정렬하고 연결하거나 조정하나요?

**serviceDetails.distributed.questions.1**

결정적 재생을 위해 어떤 실행 정보를 기록해야 하나요?

**serviceDetails.distributed.questions.2**

참여자, 메시지 또는 의존성이 지연되거나 사용할 수 없을 때 시스템은 어떻게 동작해야 하나요?

**serviceDetails.distributed.deliverablesTitle**

협의 가능한 엔지니어링 결과물

**serviceDetails.distributed.deliverables.0**

조율 방식과 상태 전이 경계를 설명하는 시스템 또는 프로토콜 아키텍처.

**serviceDetails.distributed.deliverables.1**

동시성, 재생, 선택된 장애 조건을 다루는 분산 테스트 시나리오.

**serviceDetails.distributed.deliverables.2**

합의된 범위의 구현 및 통합 검토 기록.

**techDetails.glvm.focusTitle**

개발 중인 시스템 수준 아키텍처

**techDetails.glvm.points.0**

GLVM은 여러 참여 TVM에 걸쳐 개발 중인 실행 아키텍처이며 계속 발전하고 있습니다.

**techDetails.glvm.points.1**

개별 바이트코드 엔진 위에 공유 논리 모델을 정의하며, 완성되어 일반 제공되는 제품으로 소개하지 않습니다.

**techDetails.glvm.points.2**

특정 시스템의 런타임 경계, 조율 가정, 통합 요구를 중심으로 엔지니어링 논의를 할 수 있습니다.

**techDetails.tvm.focusTitle**

구체적인 바이트코드 실행과 프로세스 조율

**techDetails.tvm.points.0**

TVM은 참여 머신의 바이트코드 엔진이며 Tolang 바이트코드를 실행합니다.

**techDetails.tvm.points.1**

채널과 통신 이벤트는 동시 프로세스를 조율하는 데 사용되는 메커니즘입니다.

**techDetails.tvm.points.2**

런타임 작업에서는 실행 의미 체계, 툴체인 통합, 진단, 프로세스 경계를 검토할 수 있습니다.

**techDetails.blockgit.focusTitle**

동시 블록 이력을 위한 그래프 모델

**techDetails.blockgit.points.0**

BlockGit은 ALUX를 위해 개발한 합의 프로토콜입니다.

**techDetails.blockgit.points.1**

설계에서는 방향성 비순환 그래프에 동시 블록을 구성하고 강한 링크와 약한 링크를 사용합니다.

**techDetails.blockgit.points.2**

병합 규칙은 블록 이력과 상태 전이를 조율하며, 프로토콜 동작은 시스템 요구에 맞춰 평가해야 합니다.

**techDetails.ocap.focusTitle**

참조를 통해 표현하는 권한

**techDetails.ocap.points.0**

객체 능력 설계는 위조할 수 없는 참조로 작업의 접근 범위를 정의합니다.

**techDetails.ocap.points.1**

TVM 네이티브 상호작용에서는 런타임이 권한 경계를 적용합니다.

**techDetails.ocap.points.2**

외부 서비스와 호스팅 환경에는 별도의 접근 제어와 통합 검토가 필요합니다.

**techDetails.durable.focusTitle**

대기 후 재개할 수 있는 상태 기반 실행

**techDetails.durable.points.0**

퍼블릭 체인은 에이전트 실행에 지속적인 환경을 제공할 수 있습니다.

**techDetails.durable.points.1**

상태와 컨티뉴에이션을 보존하면 의존 조건을 기다리는 작업을 블록 너머로 이어갈 수 있습니다.

**techDetails.durable.points.2**

재개 조건, 재생 요건, 확정 경계는 시스템별로 정의해야 합니다.

### Technology map

**mapTitle**

에이전트 실행 기반의 내부.

**mapIntro**

언어에서 런타임, 권한, 상태, 합의로 이어지는 경로를 살펴보세요. 각 계층의 역할과 상호 연결을 확인할 수 있습니다.

**mapHint**

모듈을 선택해 역할과 연결 구성 요소를 확인하세요.

**layers.0**

개발 진입점

**layers.1**

동시 실행

**layers.2**

트랜잭션 및 검증

**layers.3**

합의 및 네트워크

**layers.4**

진화 방향

**current**

현재 기술 기반

**evolving**

지속적으로 발전 중

**roadmap**

로드맵

**role**

모듈 역할

**connections**

연결 모듈

**details**

기술 세부 정보

**team**

팀

**modules.tolang.name**

Tolang

**modules.tolang.title**

동시성 서비스를 위한 언어와 컴파일러

**modules.tolang.body**

ConcurSys는 TVM 런타임을 대상으로 하는 동시 프로세스를 표현하기 위해 Tolang과 컴파일러를 개발합니다.

**modules.tolang.help**

언어 설계, 컴파일러 동작, 소스에서 런타임 실행까지의 흐름을 다룹니다.

**modules.tolang.points.0**

Tolang 프로그램을 TVM 대상 바이트코드로 컴파일합니다.

**modules.tolang.points.1**

채널로 통신할 수 있는 동시 프로세스로 작업을 모델링합니다.

**modules.tolang.points.2**

소스 수준 서비스 로직과 TVM 실행 및 개발 도구 체인을 연결합니다.

**modules.tolang.status**

current

**modules.replay.name**

ReplayTrie 및 BranchId

**modules.replay.title**

결정론적 검증을 위한 재생 증거

**modules.replay.body**

런타임은 달라질 수 있는 실행 선택을 기록해 검증자가 승인된 경로를 재현할 수 있도록 합니다.

**modules.replay.help**

재생 요건, 실행 증거, 검증자 측 경로 재현을 다룹니다.

**modules.replay.points.0**

BranchId는 기록된 작업이 속한 실행 분기를 식별합니다.

**modules.replay.points.1**

COMM 기록은 관련 통신 이벤트와 선택을 보존합니다.

**modules.replay.points.2**

ReplayTrie는 실행을 결정론적으로 재현하는 데 쓰이는 증거를 구성합니다.

**modules.replay.status**

current

**modules.atomicity.name**

블록 간 원자성

**modules.atomicity.title**

대기 후 재개할 수 있는 단일 트랜잭션

**modules.atomicity.body**

ALUX 트랜잭션은 블록 경계에서 중단된 뒤 이후 블록에서 재개될 수 있으며, ALUX 상태 변경은 최종 커밋 또는 중단까지 스테이징됩니다.

**modules.atomicity.help**

장기 실행 워크플로, 격리 경계, 커밋 및 중단 동작을 다룹니다.

**modules.atomicity.points.0**

Segments와 Partitions가 중단 지점의 진행 상태를 보존합니다.

**modules.atomicity.points.1**

격리와 재생은 블록 간 재개 및 검증을 지원합니다.

**modules.atomicity.points.2**

원자성은 스테이징된 ALUX 상태에 적용됩니다. API 호출이나 물리적 동작 같은 외부 부작용은 자동으로 롤백되지 않습니다.

**modules.atomicity.status**

current

**modules.evm.name**

EVM 및 TSAC

**modules.evm.title**

TVM 조정 아래 지원되는 EVM 워크로드 실행

**modules.evm.body**

ALUX는 현재 격리 실행 환경에서 일부 EVM 워크로드를 지원합니다. TSAC는 관련 전역 상태 작업을 TVM과 조정하며, 호환 범위는 지원되는 기능에 따라 달라집니다.

**modules.evm.help**

EVM 통합 경계, TSAC 조정, 워크로드 호환성 검토를 다룹니다.

**modules.evm.points.0**

각 EVM 인스턴스는 자체 실행 스택과 메모리를 유지합니다.

**modules.evm.points.1**

TSAC는 지원되는 전역 상태 상호작용을 TVM 프로세스의 조정 경로로 전달합니다.

**modules.evm.points.2**

WASM 게스트 실행은 계획 중이며, 현재 지원이 모든 EVM과의 호환을 뜻하지는 않습니다.

**modules.evm.status**

current

**modules.framework.name**

Segments · Partitions · Fringe

**modules.framework.title**

실행 작업을 구조화해 스케줄링과 확정으로 연결

**modules.framework.body**

프레임워크 서비스는 실행 추적을 Segments와 Partitions로 구성한 다음 후보 작업을 Fringe로 묶어 합의 경로에 전달합니다.

**modules.framework.help**

실행 스케줄링, 의존성 처리, 런타임 작업에서 블록 생성까지의 연결을 다룹니다.

**modules.framework.points.0**

Segments는 경계가 있는 실행 진행 구간을 기록합니다.

**modules.framework.points.1**

Partitions는 의존성과 재개 가능한 작업을 구성합니다.

**modules.framework.points.2**

Fringe 빌더는 후보 블록을 BlockGit 처리 경로로 전달합니다.

**modules.framework.status**

current

**modules.node.name**

노드 · RPC · P2P

**modules.node.title**

네트워크에 연결되는 런타임 인터페이스

**modules.node.body**

노드 계층은 실행 시스템을 지원되는 RPC 메서드, 피어 통신, 스토리지 컨텍스트에 연결합니다. 구체적인 엔드포인트와 동작은 현재 구현 범위에 따릅니다.

**modules.node.help**

노드 통합, RPC 지원 범위, 피어 통신, 스토리지 경계를 다룹니다.

**modules.node.points.0**

현재 지원되는 이더리움 계열 eth_* RPC 메서드를 제공합니다.

**modules.node.points.1**

P2P gossip은 참여 피어 간 네트워크 메시지를 전달합니다.

**modules.node.points.2**

노드 스토리지 컨텍스트와 정적 서비스 인터페이스가 런타임을 둘러싸고 지원합니다.

**modules.node.status**

current

**modules.tooling.name**

컴파일러 · LSP · Playground

**modules.tooling.title**

개발 중 서비스 로직을 점검하고 실행

**modules.tooling.body**

컴파일러 진단, 언어 서버, Playground 워크플로를 통해 개발자는 노드에 연결하기 전에 Tolang 프로그램을 살펴볼 수 있습니다.

**modules.tooling.help**

컴파일러 통합, 진단, 편집기 워크플로, 초기 실행 평가를 다룹니다.

**modules.tooling.points.0**

컴파일러 진단은 소스에서 바이트코드까지의 문제를 표시합니다.

**modules.tooling.points.1**

LSP 워크플로는 언어 인식 기반의 코드 확인과 편집을 지원합니다.

**modules.tooling.points.2**

Playground 실행, 확장, 포맷 기능으로 서비스 동작을 살펴볼 수 있습니다.

**modules.tooling.status**

current

**modules.sharding.name**

샤드 간 실행

**modules.sharding.title**

샤드 전반의 수평 원자성

**modules.sharding.body**

설계 목표는 참여 샤드 전반에 하나의 전부 아니면 전무 트랜잭션 경계를 두는 것입니다. 샤드 간 실행은 로드맵에 있습니다.

**modules.sharding.help**

향후 샤드 간 트랜잭션 조정과 부분 상태 노출 방지를 다룹니다.

**modules.sharding.points.0**

하나의 트랜잭션 경계 아래 각 샤드의 로컬 변경을 스테이징합니다.

**modules.sharding.points.1**

참여하는 모든 변경을 함께 커밋하거나 함께 중단합니다.

**modules.sharding.points.2**

관련 없는 트랜잭션이 중간 샤드 상태를 관찰하지 못하게 합니다.

**modules.sharding.status**

roadmap

**modules.worldos.name**

World OS 및 클라이언트 환경

**modules.worldos.title**

실행 모델을 새로운 환경으로 확장

**modules.worldos.body**

프로그래밍 가능한 World OS 계층과 클라이언트 기기 배포는 장기적인 확장 방향입니다. 로드맵 항목이며 현재 런타임 기능은 아닙니다.

**modules.worldos.help**

향후 배포 모델과 이를 지원하는 데 필요한 시스템 수준 추상화를 다룹니다.

**modules.worldos.points.0**

GLVM은 여러 참여 TVM을 아우르는 진화 중인 시스템 수준 모델입니다.

**modules.worldos.points.1**

클라이언트 기기의 TVM 배포는 아직 계획 단계입니다.

**modules.worldos.points.2**

프로그래밍 가능한 World OS 계층은 로드맵 방향입니다.

**modules.worldos.status**

roadmap

**menuGroups.0**

언어와 런타임

**menuGroups.1**

실행과 보안

**menuGroups.2**

합의와 통합

**menuGroups.3**

연구 방향

### Team

**title**

시스템을 만드는 사람들

**intro**

ConcurSys는 정량적 리스크 시스템과 동시성 컴퓨팅 분야의 경험을 바탕으로 런타임, 프로그래밍 언어, 합의 기술을 개발합니다.

**frank.role**

창립자 겸 대표

**frank.bio.0**

Frank He(Atticbee)는 블록체인 연구자이자 창업가로, 동시성 가상 머신의 설계와 구현을 연구합니다. ConcurSys 이전에는 Bloomberg, Lehman Brothers, Barclays Capital에서 15년 넘게 선임 퀀트 애널리스트와 개발자로 일하며 확장성 높은 리스크 계산 시스템을 구축했습니다.

**frank.bio.1**

ConcurSys에서 그는 그 경험을 동시성 시스템 아키텍처에 적용합니다. ALUX를 위해 개발한 런타임, 프로그래밍 언어, 합의 기술을 하나의 일관된 엔지니어링 기반으로 연결합니다.

**frank.focus.0**

동시성 시스템

**frank.focus.1**

리스크 계산

**frank.focus.2**

런타임 아키텍처

**tomislav.role**

최고기술책임자

**tomislav.bio.0**

Tomislav는 다섯 살에 종이 계산기를 만들며 컴퓨팅에 관심을 갖기 시작했고, 열 살에는 C64c에서 어셈블리 프로그래밍을 시작했습니다. 10년 넘게 쌓은 전자 기술 경험과 JavaScript부터 Haskell까지 20년 이상 이어온 다언어 프로그래밍은 모델과 내부 작동 원리를 이해한 뒤 직접 구현하는 접근 방식의 토대가 되었습니다.

**tomislav.bio.1**

그는 프로세스 계산을 통해 동시성의 가능성을 탐구합니다. ConcurSys에서는 프로세스와 통신의 형식 모델을 실제 런타임 엔지니어링으로 연결하며, 호기심과 깊은 몰입으로 ALUX의 기반 기술을 구축합니다.

**tomislav.focus.0**

프로세스 계산

**tomislav.focus.1**

동시성

**tomislav.focus.2**

런타임 엔지니어링

### Join Us

**nav**

함께하기

**title**

기술의 기반을 함께 만드세요.

**intro**

동시성 시스템, 프로그래밍 언어, 분산 실행에 관심이 있으신가요? 자신과 참여하고 싶은 엔지니어링 작업을 소개해 주세요.

**label**

기술 분야

**body**

직접 구축한 시스템, 깊이 연구한 기술 문제, 자랑하고 싶은 오픈 소스 기여를 알려 주세요. 작업을 이해하는 데 도움이 되는 링크도 환영합니다.

**cta**

자기소개 보내기

**subject**

ConcurSys와 함께하기

**email**

자기소개:

관심 기술 분야:

주요 작업과 링크:


### Agent infrastructure

**eyebrow**

에이전트 인프라

**title**

에이전트를 위한 실행 기반.

**body**

지속되는 상태, 명확한 권한, 검증 가능한 실행이 필요한 에이전트를 위해 언어·런타임·합의 기술을 개발합니다. ALUX의 기반 기술을 만든 팀입니다.

**rails.0**

지속되는 상태

**rails.1**

명확한 권한

**rails.2**

조율되는 실행

**rails.3**

재실행을 통한 검증

**servicesTitle**

에이전트의 능력을 받쳐 주는 기반 기술.

**servicesIntro**

에이전트가 실행하는 언어부터 결과를 검증하는 네트워크까지, 실행을 가능하게 하는 각 계층을 구축합니다.

**mapTitle**

에이전트 실행 기반의 내부.

**mapIntro**

언어에서 런타임, 권한, 상태, 합의로 이어지는 경로를 살펴보세요. 각 계층의 역할과 상호 연결을 확인할 수 있습니다.

**bridgeTitle**

에이전트의 의도에서 시스템의 실행까지.

**bridgeBody**

모델은 행동을 제안할 수 있습니다. 실행 시스템은 무엇을 실행할지, 어떤 자원에 접근할지, 대기 중 상태를 어떻게 유지할지, 결과에 어떻게 합의할지를 정의해야 합니다. 이것이 ALUX 기반 기술을 개발하며 다루는 엔지니어링 과제입니다.

**coreLabels.0**

네이티브 동시성 언어

**coreLabels.1**

에이전트 실행 엔진

**coreLabels.2**

명확한 권한 경계

**coreLabels.3**

동시성 합의 프로토콜

**coreLabels.4**

하나의 논리 실행 모델

### Agent relevance

**label**

에이전트 시스템을 위한 기술

**modules.glvm**

GLVM은 시스템 수준의 실행 조율을 위해 여러 참여 TVM에 걸쳐 개발 중인 공유 논리 모델입니다.

**modules.tolang**

Tolang은 동시 서비스 로직을 표현하며 TVM에서 실행할 바이트코드로 컴파일할 수 있습니다.

**modules.tvm**

TVM은 바이트코드를 실행하고 동시 프로세스 간 통신을 조율합니다.

**modules.ocap**

객체 능력은 에이전트가 접근할 수 있는 객체와 리소스를 명확히 합니다.

**modules.durable**

지속 실행은 상태와 컨티뉴에이션을 보존해 작업이 의존성을 기다린 뒤 재개되도록 합니다.

**modules.atomicity**

블록 간 원자성은 ALUX 상태를 커밋 또는 중단까지 임시 보관하며 외부 부작용을 자동으로 되돌리지는 않습니다.

**modules.replay**

재생은 실행을 결정론적으로 다시 수행하고 기록된 선택을 확인할 근거를 제공합니다.

**modules.framework**

세그먼트, 파티션, 프린지가 실행·복구·확정 경계를 구성합니다.

**modules.blockgit**

BlockGit은 분산 참여자 간의 동시 블록 이력과 상태를 조율합니다.

**modules.evm**

EVM/TSAC는 기존 EVM 컨트랙트가 TVM의 조율 아래 참여할 수 있도록 합니다.

**modules.node**

노드 인터페이스는 에이전트 요청과 상태 조회를 연결하고 P2P 계층은 노드 간 전파를 담당합니다.

**modules.tooling**

컴파일러, LSP, Playground 도구로 프로그램 로직을 작성하고 점검할 수 있습니다.

**modules.sharding**

샤드 간 원자성은 샤드를 넘는 에이전트 작업 조율을 위한 개발 방향입니다.

**modules.worldos**

프로그래밍 가능한 World OS와 클라이언트 배포는 로드맵상의 실행 환경 방향입니다.

### Tolang

**eyebrow**

차세대 블록체인을 위해 설계된 언어

**title**

Tolang은 에이전트가 동시 작업을 자연스럽게 표현하도록 돕습니다.

**intro**

차세대 블록체인 시스템의 실행 계층을 위해 설계된 Tolang은 에이전트 워크플로를 동시 프로세스, 타입이 있는 통신, TVM 런타임으로 연결합니다.

**cta**

Tolang 도구 체인 살펴보기

**pipeline.0**

Tolang 소스

**pipeline.1**

tolangc 컴파일러

**pipeline.2**

.tox 바이트코드

**pipeline.3**

TVM 프로세스

**features.0.title**

언어의 기본 요소로 표현하는 동시성

**features.0.body**

작업을 분기하고 기다렸다가 재개하며 함께 진행하는 프로세스로 표현합니다. 단일 순차 호출로 담기 어려운 에이전트 작업을 명확히 기술할 수 있습니다.

**features.1.title**

타입이 있는 프로세스 통신

**features.1.body**

프로세스는 공유 메모리 대신 타입이 있는 튜플 공간 채널로 데이터를 주고받습니다. 채널 설명자와 행위 타입은 일부 오용을 미리 찾는 데 도움이 되며, 런타임 규칙이 채널 수명 주기를 관리합니다.

**features.2.title**

지속 실행 서비스로 이어지는 경로

**features.2.body**

Tolang은 TVM 바이트코드로 컴파일되며, 프로세스는 대기 후 실행을 이어가고 채널로 협력할 수 있습니다. 언어는 서비스 로직과 런타임을 연결하며, 지속성과 트랜잭션 보장은 ALUX 시스템의 다른 구성 요소에 달려 있습니다.

**features.3.title**

실용적인 개발 도구 흐름

**features.3.body**

컴파일러 API, LSP 진단, 포매팅, 확장 보기, Playground 실행으로 소스에서 런타임 동작까지 살펴보고 개선할 수 있습니다.

### Execution model

**eyebrow**

에이전트 실행 기반 기술

**title**

의도에서 실행까지.

**body**

ConcurSys는 ALUX의 기반 언어, 런타임, 합의 기술을 개발합니다. 이 기술들은 에이전트 작업을 표현하고 조율하며 살펴보기 위한 엔지니어링 계층을 이룹니다.

**diagramLabel**

실행 모델

**agents**

에이전트 작업

**service**

Tolang 서비스

**scope**

OCAP 권한

**runtime**

TVM 프로세스

**proof**

ReplayTrie + BlockGit

**states.0.label**

01 / 정의

**states.0.title**

동시 작업을 표현합니다.

**states.0.body**

Tolang은 프로세스 계산법으로 작업을 나누고 통신하며 동시에 진행하는 서비스를 기술합니다.

**states.1.label**

02 / 권한 설정

**states.1.title**

권한을 명확히 합니다.

**states.1.body**

객체 능력은 위조할 수 없는 참조로 작업이 접근할 수 있는 객체와 리소스를 정의합니다.

**states.2.label**

03 / 실행

**states.2.title**

조율하고 기다렸다 재개합니다.

**states.2.body**

TVM은 채널로 통신하는 프로세스를 실행하며, 보존된 실행 상태는 의존성이 준비될 때까지 기다렸다가 재개할 수 있습니다.

**states.3.label**

04 / 검증

**states.3.title**

실행과 합의를 살펴봅니다.

**states.3.body**

ReplayTrie는 실행을 재생해 확인할 근거를 제공하고, BlockGit은 동시 블록 이력과 상태를 조율합니다.

**mapTitle**

에이전트 실행 기반 살펴보기.

**mapBody**

언어, 권한, 런타임, 합의가 어떻게 연결되는지 확인하세요.

**mapLink**

아키텍처 살펴보기

## 日本語

### エージェントの 実行基盤。

状態の永続化、明確な権限、検証可能な実行を必要とするエージェントのために、言語・ランタイム・合意技術を開発します。ALUXの基盤技術をつくるチームです。

导航：サービス / テクノロジー / 会社情報 / チーム

プロジェクトについて相談する / 技術領域を見る

### エージェントの能力を、 基盤技術で支える。

エージェントが動く言語から実行結果を検証するネットワークまで、各層のエンジニアリングに取り組みます。

#### パブリックチェーン上の エージェント実行

パブリックチェーン上で永続的な状態を保ち、実行を協調させ、権限を明示する必要があるエージェントをエンジニアリング面から支援します。

アーキテクチャ · ランタイム統合 · 実行テスト

#### 仮想マシン エンジニアリング

お客様のシステムに合わせて、バイトコードランタイム、プロセス協調、実行セマンティクスを設計・構築します。

VM設計 · ツールチェーン統合 · ランタイム診断

#### 分散 システム

複数の参加マシンにまたがる並行処理、リプレイ、協調を扱います。

システム設計 · コンセンサスプロトコル · 障害分析

### ひとつのグローバルコンピューター。 幾層にもわたるエンジニアリング。

バイトコードランタイムからコンセンサス層まで、独自技術を開発しています。

#### GLVM · グローバル論理仮想マシン

複数のマシンにまたがる論理モデル。

GLVMは、参加する複数のTVM上で現在開発を進めているシステムレベルの実行アーキテクチャです。個々のバイトコードエンジンの上位に、共通の論理モデルを定義します。

提供できる支援：実行アーキテクチャ、ランタイム境界、統合設計。

#### TVM · タプル空間仮想マシン

バイトコードを実行へ。

TVMは、参加マシン上で動作する具体的なバイトコードエンジンです。Tolangのバイトコードを実行し、チャネルと通信イベントを通じて並行プロセスを協調させます。

提供できる支援：バイトコードランタイムの開発、プロセス協調、ツールチェーン統合、診断。

#### BLOCKGIT · BLOCKGITコンセンサスプロトコル

並行する作業のためのコンセンサス。

BlockGitはALUX向けのコンセンサスプロトコルです。有向非巡回グラフで並行ブロックを構成し、強リンク、弱リンク、マージ規則によってブロック履歴と状態遷移を調整します。

提供できる支援：コンセンサスアーキテクチャ、プロトコル実装、統合、分散テスト。

#### OCAP · オブジェクトケイパビリティ

権限を明示する。

オブジェクト能力は、偽造できない参照によってタスクのアクセス範囲を定めます。TVMネイティブのやり取りではランタイムがこの境界を強制します。外部サービスやホスティング環境では、それぞれ独自の制御が必要です。

提供できる支援：能力境界、最小権限設計、統合レビュー。

#### DURABLE · 永続的な実行

実行を先へつなぐ。

パブリックチェーンは、エージェントに永続的な実行環境を提供できます。実行状態と継続処理を保持することで、処理をブロックをまたいで待機させ、依存条件が整った時点で再開できます。

提供できる支援：状態の永続化、待機と再開のフロー、リプレイ要件、最終確定の境界。

### 言語からコンセンサスまで。

ConcurSysはALUXを支える技術として、Tolang、TVMバイトコードランタイム、ReplayTrie、BlockGitコンセンサスプロトコルを開発しています。言語設計、並行実行、分散合意をつなぐ取り組みです。

Tolang：並行プロセス向けの言語とコンパイラー。TVMバイトコードを実行対象とします。

ReplayTrie：決定論的なリプレイに必要な実行上の選択を記録するランタイム構造。

GLVMは現在も進化を続けるシステムレベルのアーキテクチャです。クロスシャード実行や追加のデプロイ環境は、引き続き開発段階にあります。

### テクノロジーを開発する私たちが、実装を支援します。

ConcurSysはALUXを支える米国のテクノロジー企業です。独自開発の言語、ランタイム、コンセンサス技術を生かし、グローバルコンピューターの基盤を構築するチームに技術サービスを提供します。

#### 課題を定義する

実行要件、制約、システム境界を整理します。

#### 基盤を構築する

作業範囲を合意し、基盤となるコンポーネントを設計・実装します。

#### システムを検証する

合意した動作をテストし、障害ケースを確認して、引き継ぎ資料を整えます。

### 難しい課題を、 お聞かせください。

何を構築しているのか、実行のどこに難しさがあるのか、何を実現したいのかをお聞かせください。

技術相談を始める

info@concursys.io

グローバルコンピューターのための技術サービス。

### Pages

**home**

ホーム

**overview**

概要

**learnMore**

詳しく見る

**related**

関連技術

**serviceDetail**

サービス詳細

**technologyDetail**

技術詳細

**approach**

進め方

**contactIntro**

構築中のシステム、実行上の課題、相談したい範囲をお聞かせください。その内容をもとに、当社のエンジニアリングがご要望に合うか検討します。

**projectLabel**

プロジェクト

**emailLabel**

メールアドレス

**challengeLabel**

技術課題

**scopeLabel**

相談したい範囲

**prepareEmail**

メールを作成

**emailHint**

メールアプリで下書きを開きます。自動送信はされません。

**required**

必須項目を入力してください。

**servicesIntro**

ランタイムやバイトコードのエンジニアリングから、複数の参加マシンにまたがる調整や状態管理まで、実行レイヤーに取り組みます。システムの制約と、実装または検討が必要な具体的な動作を起点に進めます。

**technologyIntro**

言語とバイトコードの実行、プロセス間の調整、権限境界、永続的な実行パターン、分散合意に関する技術を扱います。個々のシステムは要件と導入環境に照らして検討します。

**companyIntro**

ConcurSysはALUXを支える米国のテクノロジー企業です。基盤となる言語、ランタイム、コンセンサス技術を開発し、グローバルコンピューターの構築に取り組むチームに技術サービスを提供します。

**serviceDetails.agent.eyebrow**

パブリックチェーン上のエージェント実行

**serviceDetails.agent.title**

オンチェーン実行のエンジニアリング支援。

**serviceDetails.agent.intro**

パブリックチェーン上で動作するエージェントについて、実行の調整、状態の引き継ぎ、ランタイム境界での権限表現を検討します。具体的な範囲は基盤システムの要件に応じて定めます。

**serviceDetails.agent.questionsTitle**

一緒に検討する技術課題

**serviceDetails.agent.questions.0**

どの実行手順をオンチェーンで行い、どの依存関係をチェーン外に置きますか？

**serviceDetails.agent.questions.1**

ブロックをまたいで保持する状態は何で、どの条件で実行を再開しますか？

**serviceDetails.agent.questions.2**

ランタイムのやり取りで、能力とアクセス境界をどう表現し適用しますか？

**serviceDetails.agent.deliverablesTitle**

合意に基づく成果物の例

**serviceDetails.agent.deliverables.0**

明示されたシステム要件に沿った実行アーキテクチャと境界の整理。

**serviceDetails.agent.deliverables.1**

状態、調整、権限インターフェースを説明するランタイム統合案。

**serviceDetails.agent.deliverables.2**

合意したシナリオと障害ケースを対象とする実行テストと技術資料。

**serviceDetails.vm.eyebrow**

仮想マシンエンジニアリング

**serviceDetails.vm.title**

システムに合わせたバイトコードランタイム。

**serviceDetails.vm.intro**

バイトコード実行、プロセス間の調整、ランタイムの意味論を扱います。具体的なTVM環境とツールチェーン、またはランタイムと周辺システムの境界で必要となる動作を検討します。

**serviceDetails.vm.questionsTitle**

一緒に検討する技術課題

**serviceDetails.vm.questions.0**

ランタイムが対応すべきバイトコード操作と実行意味論は何ですか？

**serviceDetails.vm.questions.1**

並行プロセスはチャネルや通信イベントを通じてどう連携しますか？

**serviceDetails.vm.questions.2**

実行を調べるために、ツールチェーン、可観測性、リプレイ、診断のどの機能が必要ですか？

**serviceDetails.vm.deliverablesTitle**

合意に基づく成果物の例

**serviceDetails.vm.deliverables.0**

必要な実行意味論に対応するランタイム設計または実装計画。

**serviceDetails.vm.deliverables.1**

バイトコード、コンパイラーとツールチェーン、プロセス、通信境界の統合指針。

**serviceDetails.vm.deliverables.2**

代表的な実行経路と境界ケースを扱う診断またはテスト計画。

**serviceDetails.distributed.eyebrow**

分散システム

**serviceDetails.distributed.title**

参加マシン間の実行を調整する。

**serviceDetails.distributed.intro**

マシン間の並行処理、リプレイ、プロトコルの動作、障害対応を検討します。システムの調整モデルと検証対象を基準とし、合意した設計を超える保証を前提にしません。

**serviceDetails.distributed.questionsTitle**

一緒に検討する技術課題

**serviceDetails.distributed.questions.0**

参加者間の同時更新をどのように順序付け、関連付け、調整しますか？

**serviceDetails.distributed.questions.1**

決定論的なリプレイに必要な実行情報は何ですか？

**serviceDetails.distributed.questions.2**

参加者、メッセージ、依存先が遅延または利用不能のとき、システムはどう動作しますか？

**serviceDetails.distributed.deliverablesTitle**

合意に基づく成果物の例

**serviceDetails.distributed.deliverables.0**

調整方式と状態遷移の境界を示すシステムまたはプロトコル設計。

**serviceDetails.distributed.deliverables.1**

並行処理、リプレイ、選定した障害条件を扱う分散テストシナリオ。

**serviceDetails.distributed.deliverables.2**

合意した範囲に関する実装・統合上の検討結果。

**techDetails.glvm.focusTitle**

開発が続くシステムレベルのアーキテクチャ

**techDetails.glvm.points.0**

GLVMは、複数の参加TVMにまたがって開発中の実行アーキテクチャで、現在も進化しています。

**techDetails.glvm.points.1**

個々のバイトコードエンジンの上位に共通の論理モデルを定義します。完成済みの一般提供製品としては扱いません。

**techDetails.glvm.points.2**

個別システムのランタイム境界、調整に関する前提、統合要件を検討できます。

**techDetails.tvm.focusTitle**

具体的なバイトコード実行とプロセス調整

**techDetails.tvm.points.0**

TVMは参加マシン上のバイトコードエンジンで、Tolangバイトコードを実行します。

**techDetails.tvm.points.1**

チャネルと通信イベントが、並行プロセスの調整に使われる仕組みです。

**techDetails.tvm.points.2**

ランタイムの実行意味論、ツールチェーン統合、診断、プロセス境界を検討できます。

**techDetails.blockgit.focusTitle**

並行ブロック履歴のグラフモデル

**techDetails.blockgit.points.0**

BlockGitはALUX向けに開発されたコンセンサスプロトコルです。

**techDetails.blockgit.points.1**

有向非巡回グラフに並行ブロックを配置し、強リンクと弱リンクを使う設計です。

**techDetails.blockgit.points.2**

マージ規則でブロック履歴と状態遷移を調整します。動作はシステム要件に照らして評価します。

**techDetails.ocap.focusTitle**

参照によって権限を表現する

**techDetails.ocap.points.0**

オブジェクト能力設計では、偽造できない参照によってタスクのアクセス範囲を定義します。

**techDetails.ocap.points.1**

TVMネイティブのやり取りでは、ランタイムが権限境界を適用します。

**techDetails.ocap.points.2**

外部サービスやホスティング環境には、それぞれのアクセス制御と統合レビューが必要です。

**techDetails.durable.focusTitle**

待機して再開できる状態を持つ実行

**techDetails.durable.points.0**

パブリックチェーンは、エージェント実行に持続的な環境を提供できます。

**techDetails.durable.points.1**

状態と継続処理を保持することで、依存条件を待つ処理をブロックをまたいで継続できます。

**techDetails.durable.points.2**

再開条件、リプレイ要件、最終確定の境界はシステムごとに定義する必要があります。

### Technology map

**mapTitle**

エージェントの実行基盤を知る。

**mapIntro**

言語、ランタイム、権限、状態、合意へと続く構造をたどり、各層が担う役割とつながりを確認できます。

**mapHint**

モジュールを選択して、役割と連携する要素を確認してください。

**layers.0**

開発の入口

**layers.1**

並行実行

**layers.2**

トランザクションと検証

**layers.3**

コンセンサスとネットワーク

**layers.4**

進化の方向

**current**

現在の技術基盤

**evolving**

継続的に進化中

**roadmap**

ロードマップ

**role**

モジュールの役割

**connections**

連携モジュール

**details**

技術詳細

**team**

チーム

**modules.tolang.name**

Tolang

**modules.tolang.title**

並行サービスのための言語とコンパイラ

**modules.tolang.body**

ConcurSysは、TVMランタイムを対象とする並行プロセスを記述するため、Tolangとそのコンパイラを開発しています。

**modules.tolang.help**

言語設計、コンパイラの動作、ソースからランタイム実行までを扱います。

**modules.tolang.points.0**

TolangプログラムをTVM向けバイトコードにコンパイルします。

**modules.tolang.points.1**

チャネルを介して通信する並行プロセスとして処理を表現します。

**modules.tolang.points.2**

ソース上のサービスロジックをTVM実行と開発ツールチェーンにつなぎます。

**modules.tolang.status**

current

**modules.replay.name**

ReplayTrie と BranchId

**modules.replay.title**

決定的な検証を支える再実行可能な証跡

**modules.replay.body**

ランタイムは変動し得る実行上の選択を記録し、バリデーターが確定した経路を再現できるようにします。

**modules.replay.help**

再実行の要件、実行証跡、バリデーターによる経路の再現を扱います。

**modules.replay.points.0**

BranchIdは記録された処理が属する実行ブランチを識別します。

**modules.replay.points.1**

COMM記録は関連する通信イベントと選択内容を保持します。

**modules.replay.points.2**

ReplayTrieは実行を決定的に再現するための証跡を構成します。

**modules.replay.status**

current

**modules.atomicity.name**

ブロック間アトミシティ

**modules.atomicity.title**

待機と再開ができる単一トランザクション

**modules.atomicity.body**

ALUXのトランザクションはブロック境界で中断し、後続ブロックで再開できます。ALUXの状態変更は最終的なコミットまたは中止までステージングされます。

**modules.atomicity.help**

長時間ワークフロー、分離境界、コミットと中止の動作を扱います。

**modules.atomicity.points.0**

SegmentsとPartitionsが中断地点の進行状況を保持します。

**modules.atomicity.points.1**

分離と再実行により、ブロックをまたぐ再開と検証を支えます。

**modules.atomicity.points.2**

アトミシティの対象はステージングされたALUX状態です。API呼び出しや物理的な操作など、外部世界への副作用は自動的にロールバックされません。

**modules.atomicity.status**

current

**modules.evm.name**

EVM と TSAC

**modules.evm.title**

TVMが連携する、サポート対象のEVMワークロード

**modules.evm.body**

ALUXは現在、隔離された実行環境で一部のEVMワークロードをサポートしています。TSACは関連するグローバル状態操作をTVMと連携させます。互換性はサポート範囲によって異なります。

**modules.evm.help**

EVM統合の境界、TSACによる連携、ワークロードの互換性確認を扱います。

**modules.evm.points.0**

各EVMインスタンスは独自の実行スタックとメモリを保持します。

**modules.evm.points.1**

TSACはサポート対象のグローバル状態操作をTVMプロセスとの連携に渡します。

**modules.evm.points.2**

WASMゲスト実行は計画段階です。現行の対応範囲はすべてのEVMとの互換性を意味しません。

**modules.evm.status**

current

**modules.framework.name**

Segments · Partitions · Fringe

**modules.framework.title**

実行処理を整理し、スケジューリングと確定につなぐ

**modules.framework.body**

フレームワークサービスは実行トレースをSegmentsとPartitionsに整理し、候補処理をFringeにまとめてコンセンサス経路へ渡します。

**modules.framework.help**

実行スケジューリング、依存関係の処理、ランタイム処理からブロック生成までを扱います。

**modules.framework.points.0**

Segmentsは範囲を区切った実行進捗を記録します。

**modules.framework.points.1**

Partitionsは依存関係と再開可能な処理を整理します。

**modules.framework.points.2**

Fringeの構築処理が候補ブロックをBlockGitへ渡します。

**modules.framework.status**

current

**modules.node.name**

ノード · RPC · P2P

**modules.node.title**

ネットワークに接続するランタイムの窓口

**modules.node.body**

ノード層は実行システムを、サポート対象のRPCメソッド、ピア通信、ストレージコンテキストに接続します。具体的なエンドポイントと動作は現行の実装範囲によります。

**modules.node.help**

ノード統合、RPCの対応範囲、ピア通信、ストレージ境界を扱います。

**modules.node.points.0**

現在サポートしているEthereum形式のeth_* RPCメソッドを提供します。

**modules.node.points.1**

P2P gossipが参加ピア間でネットワークメッセージを伝達します。

**modules.node.points.2**

ノードのストレージコンテキストと静的サービスの窓口がランタイムを支えます。

**modules.node.status**

current

**modules.tooling.name**

コンパイラ · LSP · Playground

**modules.tooling.title**

開発中にサービスロジックを調べて実行

**modules.tooling.body**

コンパイラ診断、言語サーバー、Playgroundを通じて、開発者はノードに接続する前にTolangプログラムを確認できます。

**modules.tooling.help**

コンパイラ統合、診断、エディターでの作業、初期段階の実行評価を扱います。

**modules.tooling.points.0**

コンパイラ診断がソースからバイトコードまでの問題を示します。

**modules.tooling.points.1**

LSPにより言語を認識したコードの確認と編集ができます。

**modules.tooling.points.2**

Playgroundでの実行、展開表示、整形を通じてサービスの動作を調べられます。

**modules.tooling.status**

current

**modules.sharding.name**

シャード間実行

**modules.sharding.title**

シャードをまたぐ水平アトミシティ

**modules.sharding.body**

設計目標は、参加するシャード全体に単一の全件コミットまたは全件中止の境界を設けることです。シャード間実行はロードマップ上にあります。

**modules.sharding.help**

将来的なシャード間トランザクション連携と、部分状態の可視化防止を扱います。

**modules.sharding.points.0**

共通のトランザクション境界の下で各シャードのローカル変更をステージングします。

**modules.sharding.points.1**

参加するすべての変更をまとめてコミットするか、まとめて中止します。

**modules.sharding.points.2**

無関係なトランザクションから中間状態を見えなくします。

**modules.sharding.status**

roadmap

**modules.worldos.name**

World OS とクライアント環境

**modules.worldos.title**

実行モデルを新たな環境へ広げる

**modules.worldos.body**

プログラム可能なWorld OS層とクライアント端末への展開は、将来的な拡張方向です。ロードマップ項目であり、現行ランタイムの機能ではありません。

**modules.worldos.help**

将来の展開モデルと、それを支えるシステムレベルの抽象化を扱います。

**modules.worldos.points.0**

GLVMは複数の参加TVMをつなぐ、進化を続けるシステムレベルのモデルです。

**modules.worldos.points.1**

クライアント端末へのTVM展開は計画段階です。

**modules.worldos.points.2**

プログラム可能なWorld OS層はロードマップ上の方向性です。

**modules.worldos.status**

roadmap

**menuGroups.0**

言語とランタイム

**menuGroups.1**

実行とセキュリティ

**menuGroups.2**

合意と統合

**menuGroups.3**

研究開発

### Team

**title**

システムをつくる人々

**intro**

ConcurSysは、定量的なリスクシステムと並行計算の経験を生かし、ランタイム、プログラミング言語、コンセンサス技術を開発しています。

**frank.role**

創業者・代表

**frank.bio.0**

Frank He（Atticbee）は、並行仮想マシンの設計と実装を研究するブロックチェーン研究者・起業家です。ConcurSys以前は、Bloomberg、Lehman Brothers、Barclays Capitalで15年以上にわたりシニア・クオンツアナリストおよび開発者として、拡張性の高いリスク計算システムを構築してきました。

**frank.bio.1**

ConcurSysでは、その経験を並行システムのアーキテクチャ設計に生かしています。ALUX向けに開発するランタイム、プログラミング言語、コンセンサス技術を、一貫したエンジニアリング基盤へと結び付けます。

**frank.focus.0**

並行システム

**frank.focus.1**

リスク計算

**frank.focus.2**

ランタイム設計

**tomislav.role**

最高技術責任者

**tomislav.bio.0**

Tomislavの計算への関心は、5歳で作った段ボールの計算機から始まり、10歳にはC64cのアセンブリ言語でプログラミングを始めました。10年以上の電子技術の経験と、JavaScriptからHaskellまで20年以上にわたる多言語プログラミングが、モデルと仕組みを理解して実装する姿勢につながっています。

**tomislav.bio.1**

現在はプロセス計算を通じて並行計算の可能性を探究しています。ConcurSysでは、プロセスと通信の形式モデルを実際のランタイム開発につなげ、好奇心と深い取り組みをALUXの基盤技術に生かしています。

**tomislav.focus.0**

プロセス計算

**tomislav.focus.1**

並行性

**tomislav.focus.2**

ランタイム開発

### Join Us

**nav**

参加する

**title**

技術の基盤を、ともに。

**intro**

並行システム、プログラミング言語、分散実行に関心をお持ちですか。ご自身のことや、取り組みたい開発についてお聞かせください。

**label**

技術領域

**body**

構築したシステム、深く研究した技術的な課題、誇りに思うオープンソースへの貢献などをご紹介ください。取り組みを理解できるリンクも歓迎します。

**cta**

自己紹介を送る

**subject**

ConcurSysとの協働について

**email**

自己紹介：

関心のある技術領域：

主な取り組みとリンク：


### Agent infrastructure

**eyebrow**

エージェントの基盤技術

**title**

エージェントの 実行基盤。

**body**

状態の永続化、明確な権限、検証可能な実行を必要とするエージェントのために、言語・ランタイム・合意技術を開発します。ALUXの基盤技術をつくるチームです。

**rails.0**

状態を保持する

**rails.1**

権限を明確にする

**rails.2**

実行を協調させる

**rails.3**

リプレイで検証する

**servicesTitle**

エージェントの能力を、 基盤技術で支える。

**servicesIntro**

エージェントが動く言語から実行結果を検証するネットワークまで、各層のエンジニアリングに取り組みます。

**mapTitle**

エージェントの実行基盤を知る。

**mapIntro**

言語、ランタイム、権限、状態、合意へと続く構造をたどり、各層が担う役割とつながりを確認できます。

**bridgeTitle**

エージェントの意図を、 システムの実行へ。

**bridgeBody**

モデルは行動を提案できます。実行システムには、何を実行できるか、何にアクセスできるか、待機中に状態をどう保持するか、結果にどう合意するかを定義する役割があります。これらがALUXの基盤技術で取り組む課題です。

**coreLabels.0**

並行性を表す言語

**coreLabels.1**

エージェント実行エンジン

**coreLabels.2**

明確な権限境界

**coreLabels.3**

並行処理の合意プロトコル

**coreLabels.4**

統一された論理実行モデル

### Agent relevance

**label**

エージェントシステムを支える技術

**modules.glvm**

GLVMは、参加する複数のTVMにまたがる実行をシステムレベルで調整するために開発中の共有論理モデルです。

**modules.tolang**

Tolangは並行サービスのロジックを記述し、TVMで実行するバイトコードへコンパイルできます。

**modules.tvm**

TVMはバイトコードを実行し、並行プロセス間の通信を調整します。

**modules.ocap**

オブジェクト能力により、エージェントがアクセスできるオブジェクトとリソースを明確にします。

**modules.durable**

永続的な実行では状態と継続処理を保持し、依存先を待つ処理を後から再開できます。

**modules.atomicity**

ブロックをまたぐ原子性ではALUXの状態をコミットまたは中止まで保留しますが、外部の副作用は自動的にロールバックされません。

**modules.replay**

リプレイは実行を決定論的に再現し、記録された選択を確認する根拠になります。

**modules.framework**

セグメント、パーティション、フリンジで実行・復旧・最終確定の境界を構成します。

**modules.blockgit**

BlockGitは分散参加者間の並行ブロック履歴と状態を調整します。

**modules.evm**

EVM/TSACにより、既存のEVMコントラクトをTVMの調整下で接続できます。

**modules.node**

ノードのインターフェースはエージェントのリクエストと状態照会をつなぎ、P2P層がノード間の伝播を担います。

**modules.tooling**

コンパイラー、LSP、Playgroundの各ツールでプログラムのロジックを構築し確認できます。

**modules.sharding**

シャード間原子性は、複数シャードにまたがるエージェント処理を調整するための開発方向です。

**modules.worldos**

プログラム可能なWorld OSとクライアント展開は、ロードマップ上の実行環境の方向性です。

### Tolang

**eyebrow**

次世代ブロックチェーンのために生まれた言語

**title**

Tolangで、エージェントの並行処理を自然に記述。

**intro**

次世代ブロックチェーンの実行層を想定して設計されたTolangは、エージェントのワークフローを並行プロセス、型付き通信、TVMランタイムへつなぎます。

**cta**

Tolangのツールチェーンを見る

**pipeline.0**

Tolangソース

**pipeline.1**

tolangcコンパイラ

**pipeline.2**

.toxバイトコード

**pipeline.3**

TVMプロセス

**features.0.title**

並行性を言語で表現

**features.0.body**

処理を分岐し、待機し、再開しながら進めるプロセスとして記述できます。単一の逐次呼び出しでは表しにくいエージェントの複数タスクを明確に表現します。

**features.1.title**

型付きのプロセス間通信

**features.1.body**

プロセスは共有メモリではなく、型付きタプルスペースチャネルを介してデータを交換します。チャネル記述子と振る舞い型は一部の誤用を早期に検出する助けとなり、チャネルのライフサイクルはランタイム規則が制御します。

**features.2.title**

継続実行サービスへの接続

**features.2.body**

TolangはTVMバイトコードにコンパイルされ、プロセスは待機後に実行を再開し、チャネルを通じて連携できます。言語はサービスロジックとランタイムをつなぎ、永続性やトランザクションの保証はALUXシステムの他の構成要素に依存します。

**features.3.title**

開発を支えるツールチェーン

**features.3.body**

コンパイラAPI、LSP診断、整形、展開表示、Playgroundでの実行により、ソースからランタイム動作まで確認しながら改善できます。

### Execution model

**eyebrow**

エージェント実行の基盤技術

**title**

意図から 実行へ。

**body**

ConcurSysはALUXの基盤となる言語、ランタイム、コンセンサス技術を開発しています。これらがエージェントの処理を記述し、調整し、確認するための技術層を構成します。

**diagramLabel**

実行モデル

**agents**

エージェントのタスク

**service**

Tolangサービス

**scope**

OCAP権限

**runtime**

TVMプロセス

**proof**

ReplayTrie + BlockGit

**states.0.label**

01 / 定義

**states.0.title**

並行処理を記述する。

**states.0.body**

Tolangはプロセス計算によって、処理を分け、通信し、並行して進めるサービスを記述します。

**states.1.label**

02 / 権限設定

**states.1.title**

権限を明確にする。

**states.1.body**

オブジェクト能力は偽造できない参照を使い、タスクがアクセスできるオブジェクトとリソースを定めます。

**states.2.label**

03 / 実行

**states.2.title**

調整し、待機し、再開する。

**states.2.body**

TVMはチャネルで通信するプロセスを実行します。保持された実行状態は依存先を待ち、準備が整うと再開できます。

**states.3.label**

04 / 検証

**states.3.title**

実行と合意を確認する。

**states.3.body**

ReplayTrieは実行をリプレイして確認する根拠となり、BlockGitは並行ブロック履歴と状態を調整します。

**mapTitle**

エージェント実行基盤を見る。

**mapBody**

言語、権限、ランタイム、コンセンサスのつながりを紹介します。

**mapLink**

アーキテクチャを見る

## العربية

### الأسس الهندسية لتشغيل الوكلاء.

نطوّر اللغات وبيئات التشغيل وتقنيات الإجماع للوكلاء الذين يحتاجون إلى حالة مستمرة وصلاحيات واضحة وتنفيذ قابل للتحقق. نحن الفريق الذي يطوّر الأسس التقنية لـ ALUX.

导航：الخدمات / التقنيات / عن الشركة / الفريق

ناقش مشروعك معنا / استكشف خبراتنا

### قدرات الوكيل تحتاج إلى أساس. ونحن نبنيه.

من اللغة التي يعمل بها الوكيل إلى الشبكة التي تتحقق من نتائجه، نبني طبقات التنفيذ الأساسية.

#### تشغيل الوكلاء على السلاسل العامة

دعم هندسي للوكلاء الذين يحتاجون إلى حالة دائمة، وتنفيذ منسق، وصلاحيات محددة بوضوح على سلاسل الكتل العامة.

تصميم المعمارية · تكامل بيئة التشغيل · اختبار التنفيذ

#### هندسة الآلات الافتراضية

بيئات تشغيل الشيفرة البايتية، وتنسيق العمليات، ودلالات التنفيذ المصممة وفق احتياجات نظامك.

تصميم الآلات الافتراضية · تكامل أدوات التطوير · تشخيص بيئة التشغيل

#### الأنظمة الموزعة

التزامن وإعادة التنفيذ والتنسيق بين الأجهزة المشاركة.

تصميم الأنظمة · بروتوكولات الإجماع · تحليل الأعطال

### حاسوب عالمي واحد. تحديات هندسية متعددة.

تقنيات نطورها من بيئة تشغيل الشيفرة البايتية إلى طبقة الإجماع.

#### GLVM · الآلة الافتراضية المنطقية العالمية

نموذج منطقي يمتد عبر الأجهزة.

GLVM هي معمارية التنفيذ على مستوى النظام التي نطورها عبر آلات TVM المشاركة. وهي تحدد نموذجًا منطقيًا مشتركًا فوق محركات الشيفرة البايتية الفردية.

كيف يمكننا مساعدتك：معمارية التنفيذ، وحدود بيئات التشغيل، وتصميم التكامل.

#### TVM · الآلة الافتراضية لفضاء الصفوف

حيث تتحول الشيفرة البايتية إلى تنفيذ.

TVM هي محرك الشيفرة البايتية الفعلي على الجهاز المشارك. تشغّل شيفرة Tolang البايتية وتنسق العمليات المتزامنة عبر القنوات وأحداث الاتصال.

كيف يمكننا مساعدتك：هندسة بيئات تشغيل الشيفرة البايتية، وتنسيق العمليات، وتكامل أدوات التطوير، والتشخيص.

#### BLOCKGIT · بروتوكول الإجماع BLOCKGIT

إجماع يدعم العمل المتزامن.

BlockGit هو بروتوكول الإجماع الذي نطوره لصالح ALUX. ينظم الكتل المتزامنة في رسم بياني موجه غير دوري، ويستخدم روابط قوية وضعيفة وقواعد دمج لتنسيق سجل الكتل وانتقالات الحالة.

كيف يمكننا مساعدتك：تصميم معمارية الإجماع، وتنفيذ البروتوكول، والتكامل، والاختبارات الموزعة.

#### OCAP · صلاحيات الكائنات

صلاحيات واضحة وحدود محددة.

تعتمد صلاحيات الكائنات على مراجع غير قابلة للتزوير لتحديد ما تستطيع المهمة الوصول إليه. تفرض بيئة التشغيل هذه الحدود في التفاعلات الأصلية داخل TVM؛ أما الخدمات الخارجية والبيئات المستضافة فتحتاج إلى ضوابطها الخاصة.

كيف يمكننا مساعدتك：تحديد حدود الصلاحيات، والتصميم وفق مبدأ الحد الأدنى من الصلاحيات، ومراجعة التكامل.

#### DURABLE · التنفيذ الدائم

حافظ على استمرارية التنفيذ.

يمكن لسلسلة كتل عامة أن توفر بيئة تنفيذ دائمة للوكلاء. يتيح حفظ حالة التنفيذ واستمرارياته انتظار العمل عبر الكتل واستئنافه عندما تصبح اعتمادياته جاهزة.

كيف يمكننا مساعدتك：استدامة الحالة، ومسارات الانتظار والاستئناف، ومتطلبات إعادة التنفيذ، وحدود النهائية.

### من اللغة إلى الإجماع.

تطور ConcurSys التقنيات التي تقوم عليها ALUX: لغة Tolang، وبيئة تشغيل TVM للشيفرة البايتية، وReplayTrie، وبروتوكول الإجماع BlockGit. يربط عملنا بين تصميم اللغات والتنفيذ المتزامن والاتفاق الموزع.

Tolang：لغة ومترجم للعمليات المتزامنة، يستهدفان شيفرة TVM البايتية.

ReplayTrie：بنية في بيئة التشغيل تسجل خيارات التنفيذ اللازمة لإعادة تنفيذ حتمية.

GLVM معمارية متطورة باستمرار على مستوى النظام. ولا يزال التنفيذ عبر الشظايا وبيئات النشر الإضافية ضمن اتجاهات البحث والتطوير.

### مبتكرو التقنية، وشركاؤك في الهندسة.

ConcurSys هي شركة التقنية الأمريكية التي تقف وراء ALUX. نوظف خبراتنا في تطوير اللغات وبيئات التشغيل وبروتوكولات الإجماع لتقديم خدمات تقنية للفرق التي تبني أسس الحاسوب العالمي.

#### تحديد المشكلة

نحدد متطلبات التنفيذ والقيود وحدود النظام.

#### بناء الأساس

نتفق على نطاق العمل، ثم نصمم المكونات الأساسية وننفذها.

#### التحقق من النظام

نختبر السلوك المتفق عليه، ونراجع حالات الأعطال، ونوثق التسليم.

### شاركنا تحديك التقني.

أخبرنا بما تبنيه، وأين تواجه صعوبات في التنفيذ، وما الذي يحتاج نظامك إلى تحقيقه.

ابدأ حوارًا تقنيًا

info@concursys.io

خدمات تقنية للحاسوب العالمي.

### Pages

**home**

الرئيسية

**overview**

نظرة عامة

**learnMore**

اعرف المزيد

**related**

تقنيات ذات صلة

**serviceDetail**

تفاصيل الخدمة

**technologyDetail**

تفاصيل التقنية

**approach**

آلية العمل

**contactIntro**

أخبرونا عن النظام الذي تبنونه، وتحديات التنفيذ التي تواجهكم، والنطاق الذي ترغبون في مناقشته. سنستخدم هذه المعلومات لتحديد مدى ملاءمة خبرتنا الهندسية لاحتياجاتكم.

**projectLabel**

المشروع

**emailLabel**

البريد الإلكتروني

**challengeLabel**

التحدي التقني

**scopeLabel**

النطاق المطلوب مناقشته

**prepareEmail**

إعداد رسالة

**emailHint**

سيفتح هذا تطبيق البريد مع مسودة جاهزة، ولن تُرسل تلقائيًا.

**required**

يرجى استكمال الحقول المطلوبة.

**servicesIntro**

نعمل على طبقة التنفيذ، من هندسة بيئات التشغيل والشيفرة البايتية إلى التنسيق وإدارة الحالة بين الأجهزة المشاركة. يبدأ كل تعاون بقيود النظام والسلوك المحدد المطلوب بناؤه أو تحليله.

**technologyIntro**

يشمل عملنا تنفيذ اللغات والشيفرة البايتية، وتنسيق العمليات، وحدود الصلاحيات، وأنماط التنفيذ الدائم، والإجماع الموزع. ويجب تقييم كل نظام وفق متطلباته وبيئة نشره.

**companyIntro**

ConcurSys هي الشركة التقنية الأمريكية التي تقف وراء ALUX. نطور اللغة الأساسية وبيئة التشغيل وتقنيات الإجماع، ونقدم خبرتنا الهندسية للفرق التي تبني أسس الحاسوب العالمي.

**serviceDetails.agent.eyebrow**

تشغيل الوكلاء على السلاسل العامة

**serviceDetails.agent.title**

دعم هندسي للتنفيذ على السلسلة.

**serviceDetails.agent.intro**

نساعد الفرق على دراسة الوكلاء العاملين على السلاسل العامة، بما في ذلك تنسيق التنفيذ واستمرار الحالة وتمثيل الصلاحيات عند حدود بيئة التشغيل. ويتحدد النطاق وفق متطلبات النظام الأساسية.

**serviceDetails.agent.questionsTitle**

مسائل هندسية ندرسها معًا

**serviceDetails.agent.questions.0**

ما خطوات التنفيذ التي ينبغي أن تتم على السلسلة، وما الاعتماديات الموجودة خارجها؟

**serviceDetails.agent.questions.1**

ما الحالة التي يجب الاحتفاظ بها بين الكتل، وما شروط استئناف التنفيذ؟

**serviceDetails.agent.questions.2**

كيف تُمثّل القدرات وحدود الوصول وتُفرض أثناء التفاعل مع بيئة التشغيل؟

**serviceDetails.agent.deliverablesTitle**

مخرجات هندسية يمكن الاتفاق عليها

**serviceDetails.agent.deliverables.0**

معمارية تنفيذ وخريطة للحدود مرتبطة بمتطلبات النظام المحددة.

**serviceDetails.agent.deliverables.1**

خطة تكامل لبيئة التشغيل توضح واجهات الحالة والتنسيق والصلاحيات.

**serviceDetails.agent.deliverables.2**

اختبارات تنفيذ وملاحظات تقنية لسيناريوهات وحالات أعطال متفق عليها.

**serviceDetails.vm.eyebrow**

هندسة الآلات الافتراضية

**serviceDetails.vm.title**

بيئات تشغيل للشيفرة البايتية وفق احتياجات النظام.

**serviceDetails.vm.intro**

نعمل على تنفيذ الشيفرة البايتية وتنسيق العمليات ودلالات بيئة التشغيل. وقد يركز العمل على بيئة TVM محددة وأدواتها أو السلوك المطلوب عند حدودها مع النظام المحيط.

**serviceDetails.vm.questionsTitle**

مسائل هندسية ندرسها معًا

**serviceDetails.vm.questions.0**

ما عمليات الشيفرة البايتية ودلالات التنفيذ التي ينبغي أن تدعمها بيئة التشغيل؟

**serviceDetails.vm.questions.1**

كيف تتعاون العمليات المتزامنة عبر القنوات وأحداث الاتصال؟

**serviceDetails.vm.questions.2**

ما قدرات الأدوات والرصد وإعادة التنفيذ والتشخيص اللازمة لفحص التنفيذ؟

**serviceDetails.vm.deliverablesTitle**

مخرجات هندسية يمكن الاتفاق عليها

**serviceDetails.vm.deliverables.0**

تصميم أو خطة تنفيذ لبيئة تشغيل تلائم دلالات التنفيذ المطلوبة.

**serviceDetails.vm.deliverables.1**

إرشادات تكامل للشيفرة البايتية والمترجم والأدوات والعمليات وحدود الاتصال.

**serviceDetails.vm.deliverables.2**

خطة تشخيص أو اختبار مركزة لمسارات تنفيذ ممثلة وحالات طرفية.

**serviceDetails.distributed.eyebrow**

الأنظمة الموزعة

**serviceDetails.distributed.title**

تنسيق التنفيذ بين الأجهزة المشاركة.

**serviceDetails.distributed.intro**

ندرس التزامن وإعادة التنفيذ وسلوك البروتوكول ومعالجة الأعطال بين الأجهزة. يستند العمل إلى نموذج التنسيق والخصائص المطلوب التحقق منها، من دون افتراض ضمانات تتجاوز التصميم المتفق عليه.

**serviceDetails.distributed.questionsTitle**

مسائل هندسية ندرسها معًا

**serviceDetails.distributed.questions.0**

كيف تُرتب التحديثات المتزامنة بين المشاركين أو تُربط أو تُسوّى؟

**serviceDetails.distributed.questions.1**

ما المعلومات التي ينبغي تسجيلها لإعادة تنفيذ حتمية؟

**serviceDetails.distributed.questions.2**

كيف ينبغي أن يتصرف النظام عند تأخر مشارك أو رسالة أو اعتماد أو تعذره؟

**serviceDetails.distributed.deliverablesTitle**

مخرجات هندسية يمكن الاتفاق عليها

**serviceDetails.distributed.deliverables.0**

معمارية نظام أو بروتوكول توضّح التنسيق وحدود انتقال الحالة.

**serviceDetails.distributed.deliverables.1**

سيناريوهات اختبار موزعة للتزامن وإعادة التنفيذ وظروف أعطال محددة.

**serviceDetails.distributed.deliverables.2**

نتائج موثقة لتحليل التنفيذ والتكامل ضمن النطاق المتفق عليه.

**techDetails.glvm.focusTitle**

معمارية على مستوى النظام قيد التطوير

**techDetails.glvm.points.0**

GLVM معمارية تنفيذ نطورها عبر عدة آلات TVM مشاركة، وما زالت تتطور.

**techDetails.glvm.points.1**

تحدد نموذجًا منطقيًا مشتركًا فوق محركات الشيفرة البايتية الفردية، ولا نقدمها بوصفها منتجًا مكتملًا ومتاحًا عمومًا.

**techDetails.glvm.points.2**

يمكن أن يتناول النقاش الهندسي حدود بيئة التشغيل وافتراضات التنسيق ومتطلبات التكامل لنظام بعينه.

**techDetails.tvm.focusTitle**

تنفيذ فعلي للشيفرة البايتية وتنسيق العمليات

**techDetails.tvm.points.0**

TVM محرك الشيفرة البايتية على الجهاز المشارك، ويشغّل شيفرة Tolang البايتية.

**techDetails.tvm.points.1**

القنوات وأحداث الاتصال هي الآليات الموصوفة لتنسيق العمليات المتزامنة.

**techDetails.tvm.points.2**

يمكن أن تبحث هندسة بيئة التشغيل في دلالات التنفيذ وتكامل الأدوات والتشخيص وحدود العمليات.

**techDetails.blockgit.focusTitle**

نموذج بياني لسجل الكتل المتزامنة

**techDetails.blockgit.points.0**

BlockGit بروتوكول الإجماع الذي نطوره لصالح ALUX.

**techDetails.blockgit.points.1**

ينظم التصميم الكتل المتزامنة في رسم بياني موجه غير دوري ويستخدم روابط قوية وضعيفة.

**techDetails.blockgit.points.2**

تنسق قواعد الدمج سجل الكتل وانتقالات الحالة؛ ويجب تقييم سلوك البروتوكول وفق متطلبات النظام.

**techDetails.ocap.focusTitle**

تحديد الصلاحيات عبر المراجع

**techDetails.ocap.points.0**

يستخدم تصميم صلاحيات الكائنات مراجع غير قابلة للتزوير لتحديد ما يمكن للمهمة الوصول إليه.

**techDetails.ocap.points.1**

في التفاعلات الأصلية داخل TVM، تفرض بيئة التشغيل حدود الصلاحيات.

**techDetails.ocap.points.2**

تحتاج الخدمات الخارجية والبيئات المستضافة إلى ضوابط وصول خاصة بها ومراجعة للتكامل.

**techDetails.durable.focusTitle**

تنفيذ يحتفظ بالحالة ويمكنه الانتظار والاستئناف

**techDetails.durable.points.0**

يمكن لسلسلة كتل عامة أن توفر بيئة دائمة لتنفيذ الوكلاء.

**techDetails.durable.points.1**

يسمح حفظ الحالة والاستمراريات بدعم عمل ينتظر اعتمادياته عبر الكتل.

**techDetails.durable.points.2**

يجب تحديد شروط الاستئناف ومتطلبات إعادة التنفيذ وحدود النهائية لكل نظام.

### Technology map

**mapTitle**

داخل بنية تشغيل الوكلاء.

**mapIntro**

تتبّع المسار من اللغة إلى بيئة التشغيل والصلاحيات والحالة والإجماع، واستكشف دور كل طبقة وصلاتها بالطبقات الأخرى.

**mapHint**

اختر وحدة للاطلاع على مسؤولياتها والوحدات المتصلة بها.

**layers.0**

مدخل التطوير

**layers.1**

التنفيذ المتزامن

**layers.2**

المعاملات والتحقق

**layers.3**

الإجماع والشبكة

**layers.4**

مسار التطور

**current**

الأساس التقني الحالي

**evolving**

قيد التطوير المستمر

**roadmap**

خارطة الطريق

**role**

دور الوحدة

**connections**

الوحدات المتعاونة

**details**

التفاصيل التقنية

**team**

الفريق

**modules.tolang.name**

Tolang

**modules.tolang.title**

لغة ومصرّف للخدمات المتزامنة

**modules.tolang.body**

تطوّر ConcurSys لغة Tolang ومصرّفها للتعبير عن عمليات متزامنة تستهدف بيئة تشغيل TVM.

**modules.tolang.help**

تصميم اللغة وسلوك المصرّف والانتقال من المصدر إلى التنفيذ في بيئة التشغيل.

**modules.tolang.points.0**

يحوّل برامج Tolang إلى شيفرة بايتية تستهدف TVM.

**modules.tolang.points.1**

يمثّل العمل كعمليات متزامنة تتواصل عبر القنوات.

**modules.tolang.points.2**

يربط منطق الخدمة في المصدر بتنفيذ TVM وسلسلة أدوات التطوير.

**modules.tolang.status**

current

**modules.replay.name**

ReplayTrie وBranchId

**modules.replay.title**

أدلة قابلة لإعادة التشغيل للتحقق الحتمي

**modules.replay.body**

تسجّل بيئة التشغيل اختيارات التنفيذ التي قد تختلف، كي يتمكن المدققون من إعادة إنتاج المسار المقبول.

**modules.replay.help**

متطلبات إعادة التشغيل وأدلة التنفيذ وإعادة إنتاج المسار لدى المدققين.

**modules.replay.points.0**

يحدّد BranchId فرع التنفيذ الذي ينتمي إليه العمل المسجّل.

**modules.replay.points.1**

تحفظ سجلات COMM أحداث الاتصال والاختيارات ذات الصلة.

**modules.replay.points.2**

ينظّم ReplayTrie الأدلة المستخدمة لإعادة إنتاج التنفيذ بصورة حتمية.

**modules.replay.status**

current

**modules.atomicity.name**

الذرّية عبر الكتل

**modules.atomicity.title**

معاملة واحدة يمكنها الانتظار والاستئناف

**modules.atomicity.body**

يمكن تعليق معاملة ALUX عند حدّ كتلة ثم استئنافها في كتلة لاحقة، مع إبقاء تغييرات حالة ALUX مرحّلة حتى اعتمادها نهائياً أو إلغائها.

**modules.atomicity.help**

سير العمل الطويل وحدود العزل وسلوك الاعتماد أو الإلغاء.

**modules.atomicity.points.0**

تحفظ Segments وPartitions التقدم عند نقاط التعليق.

**modules.atomicity.points.1**

يدعم العزل وإعادة التشغيل الاستئناف والتحقق عبر الكتل.

**modules.atomicity.points.2**

تشمل الذرّية حالة ALUX المرحّلة؛ أما الآثار الخارجية، مثل استدعاء API أو فعل مادي، فلا يجري التراجع عنها تلقائياً.

**modules.atomicity.status**

current

**modules.evm.name**

EVM وTSAC

**modules.evm.title**

أحمال EVM المدعومة بتنسيق من TVM

**modules.evm.body**

تدعم ALUX حالياً بعض أحمال EVM ضمن بيئات تنفيذ معزولة. ينسّق TSAC عمليات الحالة العامة ذات الصلة مع TVM، ويتحدد التوافق وفق نطاق الدعم.

**modules.evm.help**

حدود دمج EVM وآلية تنسيق TSAC ومراجعة توافق أحمال العمل.

**modules.evm.points.0**

يحتفظ كل مثيل EVM بمكدس التنفيذ والذاكرة الخاصين به.

**modules.evm.points.1**

يمرر TSAC تفاعلات الحالة العامة المدعومة إلى مسار التنسيق مع عمليات TVM.

**modules.evm.points.2**

تنفيذ WASM مخطط له؛ ولا يعني الدعم الحالي التوافق مع كل تطبيقات EVM.

**modules.evm.status**

current

**modules.framework.name**

Segments · Partitions · Fringe

**modules.framework.title**

تنظيم التنفيذ وربطه بالجدولة والنهائية

**modules.framework.body**

تنظم خدمات الإطار آثار التنفيذ في Segments وPartitions، ثم تجمع الأعمال المرشحة في Fringe لتمريرها إلى مسار الإجماع.

**modules.framework.help**

جدولة التنفيذ ومعالجة الاعتماديات والانتقال من أعمال بيئة التشغيل إلى إنتاج الكتل.

**modules.framework.points.0**

تسجل Segments أجزاء محددة من تقدم التنفيذ.

**modules.framework.points.1**

تنظم Partitions الاعتماديات والأعمال القابلة للاستئناف.

**modules.framework.points.2**

تجمع عملية بناء Fringe الكتل المرشحة ليتعامل معها BlockGit.

**modules.framework.status**

current

**modules.node.name**

العقدة · RPC · P2P

**modules.node.title**

واجهة بيئة التشغيل المتصلة بالشبكة

**modules.node.body**

تربط طبقة العقدة التنفيذ بطرق RPC المدعومة واتصال الأقران وسياق التخزين. وتعتمد نقاط الاتصال والسلوك التشغيلي المحدد على نطاق التنفيذ الحالي.

**modules.node.help**

دمج العقدة ونطاق دعم RPC واتصال الأقران وحدود التخزين.

**modules.node.points.0**

توفر طرق eth_* المدعومة حالياً والمتوافقة مع واجهة Ethereum.

**modules.node.points.1**

ينقل P2P gossip رسائل الشبكة بين الأقران المشاركين.

**modules.node.points.2**

يدعم سياق تخزين العقدة وواجهات الخدمات الثابتة بيئة التشغيل.

**modules.node.status**

current

**modules.tooling.name**

المصرّف · LSP · Playground

**modules.tooling.title**

فحص منطق الخدمة وتجربته أثناء التطوير

**modules.tooling.body**

تساعد تشخيصات المصرّف وخادم اللغة وبيئة Playground المطورين على فحص برامج Tolang قبل ربطها بعقدة.

**modules.tooling.help**

دمج المصرّف والتشخيصات وسير عمل المحرر والتقييم المبكر للتنفيذ.

**modules.tooling.points.0**

تكشف تشخيصات المصرّف المشكلات على امتداد المسار من المصدر إلى الشيفرة البايتية.

**modules.tooling.points.1**

تدعم آليات LSP فحص الشيفرة وتحريرها مع مراعاة اللغة.

**modules.tooling.points.2**

تساعد عمليات Playground والتوسيع والتنسيق على فحص سلوك الخدمة.

**modules.tooling.status**

current

**modules.sharding.name**

التنفيذ عبر الأجزاء

**modules.sharding.title**

ذرّية أفقية تمتد عبر الأجزاء

**modules.sharding.body**

الهدف التصميمي هو وضع حد موحد للمعاملة عبر الأجزاء المشاركة، بحيث تنجح التغييرات كلها أو تُلغى كلها. يظل التنفيذ عبر الأجزاء ضمن خارطة الطريق.

**modules.sharding.help**

تنسيق المعاملات المستقبلية بين الأجزاء ومنع ظهور النتائج الجزئية.

**modules.sharding.points.0**

تُرحّل التغييرات المحلية لكل جزء ضمن حد معاملة واحد.

**modules.sharding.points.1**

تُعتمد كل التغييرات المشاركة معاً أو تُلغى معاً.

**modules.sharding.points.2**

لا تُظهر الحالة الوسيطة عبر الأجزاء للمعاملات غير المرتبطة.

**modules.sharding.status**

roadmap

**modules.worldos.name**

World OS وبيئات العملاء

**modules.worldos.title**

توسيع نموذج التنفيذ إلى بيئات جديدة

**modules.worldos.body**

تُعد طبقة World OS القابلة للبرمجة ونشر TVM على أجهزة العملاء اتجاهين مستقبليين. وهما من عناصر خارطة الطريق وليسا من قدرات بيئة التشغيل الحالية.

**modules.worldos.help**

نماذج النشر المستقبلية والتجريدات على مستوى النظام اللازمة لدعمها.

**modules.worldos.points.0**

GLVM نموذج على مستوى النظام لا يزال يتطور عبر عدة بيئات TVM مشاركة.

**modules.worldos.points.1**

يظل نشر TVM على أجهزة العملاء مخططاً له.

**modules.worldos.points.2**

تبقى طبقة World OS القابلة للبرمجة ضمن اتجاهات خارطة الطريق.

**modules.worldos.status**

roadmap

**menuGroups.0**

اللغة وبيئة التشغيل

**menuGroups.1**

التنفيذ والأمان

**menuGroups.2**

الإجماع والتكامل

**menuGroups.3**

اتجاهات البحث

### Team

**title**

الأشخاص الذين يبنون الأنظمة

**intro**

تجمع ConcurSys خبرات في أنظمة المخاطر الكمية والحوسبة المتزامنة، وتستند إليها في تطوير بيئات التشغيل ولغات البرمجة وتقنيات الإجماع.

**frank.role**

المؤسس والرئيس

**frank.bio.0**

Frank He (Atticbee) باحث في تقنيات البلوكشين ورائد أعمال، وتشمل أبحاثه تصميم الآلات الافتراضية المتزامنة وتنفيذها. قبل ConcurSys، أمضى أكثر من خمسة عشر عامًا محللًا كميًا ومطورًا أول لدى Bloomberg وLehman Brothers وBarclays Capital، حيث بنى أنظمة عالية القابلية للتوسع لحساب المخاطر.

**frank.bio.1**

في ConcurSys، يوظف هذه الخبرة في تصميم معمارية الأنظمة المتزامنة. كما يربط بين بيئة التشغيل ولغة البرمجة وتقنيات الإجماع التي تطورها الشركة لصالح ALUX ضمن أساس هندسي متكامل.

**frank.focus.0**

الأنظمة المتزامنة

**frank.focus.1**

حساب المخاطر

**frank.focus.2**

معمارية بيئة التشغيل

**tomislav.role**

الرئيس التنفيذي للتقنية

**tomislav.bio.0**

بدأ اهتمام Tomislav بالحوسبة بمحاولة صنع آلة حاسبة من الورق المقوّى في الخامسة، ثم البرمجة بلغة التجميع على C64c في العاشرة. وقد أسهم أكثر من عقد في الإلكترونيات وعقدان من البرمجة بلغات تتراوح من JavaScript إلى Haskell في تشكيل منهجه: فهم النموذج وآليات العمل ثم التنفيذ.

**tomislav.bio.1**

يستكشف إمكانات التزامن باستخدام حساب العمليات. وفي ConcurSys، يربط النماذج الشكلية للعمليات والتواصل بهندسة بيئات التشغيل، موظفًا فضوله وانخراطه العميق في المشاريع لبناء أسس ALUX التقنية.

**tomislav.focus.0**

حساب العمليات

**tomislav.focus.1**

التزامن

**tomislav.focus.2**

هندسة بيئة التشغيل

### Join Us

**nav**

انضم إلينا

**title**

ابنِ معنا الأسس التقنية.

**intro**

هل تهتم بالأنظمة المتزامنة أو لغات البرمجة أو التنفيذ الموزّع؟ عرّفنا بنفسك وبالعمل الهندسي الذي ترغب في المساهمة فيه.

**label**

المجالات التقنية

**body**

أخبرنا عن نظام بنيته، أو مسألة تقنية بحثتها بعمق، أو مساهمة مفتوحة المصدر تعتز بها. وأرفق الروابط التي تساعدنا على فهم عملك.

**cta**

عرّفنا بنفسك

**subject**

العمل مع ConcurSys

**email**

نبذة عني:

الاهتمامات التقنية:

أعمال مختارة وروابط:


### Agent infrastructure

**eyebrow**

البنية التحتية للوكلاء

**title**

الأسس الهندسية لتشغيل الوكلاء.

**body**

نطوّر اللغات وبيئات التشغيل وتقنيات الإجماع للوكلاء الذين يحتاجون إلى حالة مستمرة وصلاحيات واضحة وتنفيذ قابل للتحقق. نحن الفريق الذي يطوّر الأسس التقنية لـ ALUX.

**rails.0**

حالة مستمرة

**rails.1**

صلاحيات واضحة

**rails.2**

تنفيذ منسّق

**rails.3**

تحقق بإعادة التنفيذ

**servicesTitle**

قدرات الوكيل تحتاج إلى أساس. ونحن نبنيه.

**servicesIntro**

من اللغة التي يعمل بها الوكيل إلى الشبكة التي تتحقق من نتائجه، نبني طبقات التنفيذ الأساسية.

**mapTitle**

داخل بنية تشغيل الوكلاء.

**mapIntro**

تتبّع المسار من اللغة إلى بيئة التشغيل والصلاحيات والحالة والإجماع، واستكشف دور كل طبقة وصلاتها بالطبقات الأخرى.

**bridgeTitle**

من نية الوكيل إلى تنفيذ النظام.

**bridgeBody**

يمكن للنموذج اقتراح إجراء. وعلى نظام التنفيذ تحديد ما يمكن تشغيله، والموارد المتاحة له، وكيفية الحفاظ على الحالة أثناء الانتظار، وكيفية الاتفاق على النتائج. هذه هي المسائل الهندسية التي نعالجها في تطوير أسس ALUX.

**coreLabels.0**

لغة متزامنة بطبيعتها

**coreLabels.1**

محرك تنفيذ الوكلاء

**coreLabels.2**

صلاحيات واضحة

**coreLabels.3**

إجماع متزامن

**coreLabels.4**

نموذج تنفيذ منطقي موحّد

### Agent relevance

**label**

تقنيات لأنظمة الوكلاء

**modules.glvm**

GLVM نموذج منطقي مشترك قيد التطوير عبر آلات TVM المشاركة لتنسيق التنفيذ على مستوى النظام.

**modules.tolang**

تعبّر Tolang عن منطق الخدمات المتزامنة ويمكن ترجمتها إلى شيفرة بايتية تنفذها TVM.

**modules.tvm**

تنفذ TVM الشيفرة البايتية وتنسق الاتصال بين العمليات المتزامنة.

**modules.ocap**

توضح صلاحيات الكائنات الكائنات والموارد التي يستطيع الوكيل الوصول إليها.

**modules.durable**

يحفظ التنفيذ الدائم الحالة والاستمراريات كي ينتظر العمل اعتمادياته ثم يُستأنف لاحقًا.

**modules.atomicity**

تُبقي الذرية عبر الكتل حالة ALUX مؤقتة حتى الاعتماد أو الإلغاء؛ ولا تتراجع الآثار الخارجية تلقائيًا.

**modules.replay**

توفر إعادة التنفيذ أساسًا لإعادة التشغيل الحتمية والتحقق من خيارات التنفيذ المسجلة.

**modules.framework**

تنظم المقاطع والتقسيمات والهوامش حدود التنفيذ والاستعادة والنهائية.

**modules.blockgit**

ينسق BlockGit سجل الكتل المتزامنة والحالة بين المشاركين الموزعين.

**modules.evm**

تتيح EVM/TSAC إشراك عقود EVM الحالية تحت تنسيق TVM.

**modules.node**

تربط واجهات العقد طلبات الوكلاء واستعلامات الحالة، بينما تتولى طبقة P2P الانتشار بين العقد.

**modules.tooling**

تساعد أدوات المترجم وLSP وPlayground على بناء منطق البرنامج وفحصه.

**modules.sharding**

الذرية بين الأجزاء اتجاه تطوير لتنسيق عمل الوكلاء عبر الأجزاء.

**modules.worldos**

يمثل World OS القابل للبرمجة ونشر العملاء اتجاهًا مستقبليًا لبيئة التنفيذ.

### Tolang

**eyebrow**

لغة صُممت أصلاً للجيل الجديد من البلوك تشين

**title**

تتيح Tolang للوكلاء التعبير عن العمل المتزامن بأسلوب أصيل.

**intro**

صُممت Tolang لطبقة التنفيذ في أنظمة البلوك تشين من الجيل الجديد، وتربط سير عمل الوكلاء بالعمليات المتزامنة والاتصال ذي الأنواع وبيئة تشغيل TVM.

**cta**

استكشف أدوات Tolang

**pipeline.0**

مصدر Tolang

**pipeline.1**

مصرّف tolangc

**pipeline.2**

شيفرة .tox البايتية

**pipeline.3**

عمليات TVM

**features.0.title**

التزامن جزء من تعبير اللغة

**features.0.body**

صِف العمل كعمليات يمكنها التفرع والانتظار والاستئناف والتقدم معاً. يوفّر ذلك طريقة واضحة لتمثيل مهام الوكلاء التي لا تناسب استدعاءً تسلسلياً واحداً.

**features.1.title**

اتصال بين العمليات قائم على الأنواع

**features.1.body**

تتبادل العمليات البيانات عبر قنوات فضاء المجموعات ذات الأنواع، بدلاً من الذاكرة المشتركة. تساعد واصفات القنوات وأنواع السلوك على اكتشاف بعض حالات الاستخدام الخاطئ مبكراً، بينما تضبط قواعد بيئة التشغيل دورة حياة القناة.

**features.2.title**

مسار نحو خدمات تواصل التنفيذ

**features.2.body**

تُترجم Tolang إلى شيفرة TVM البايتية، حيث يمكن للعملية متابعة التنفيذ بعد الانتظار والتنسيق عبر القنوات. تربط اللغة منطق الخدمة ببيئة التشغيل؛ أما ضمانات الاستمرارية والمعاملات فتعتمد على مكونات ALUX الأخرى.

**features.3.title**

سير عمل عملي للمطورين

**features.3.body**

تساعد واجهات المصرّف وتشخيصات LSP والتنسيق وعرض التوسيع وتشغيل Playground الفرق على فحص سلوك الخدمات وتحسينه انطلاقاً من المصدر.

### Execution model

**eyebrow**

أسس تنفيذ الوكلاء

**title**

من النية إلى التنفيذ.

**body**

تطور ConcurSys اللغة وبيئة التشغيل وتقنيات الإجماع الأساسية في ALUX. وتشكل هذه التقنيات طبقات هندسية للتعبير عن مهام الوكلاء وتنسيقها وفحصها.

**diagramLabel**

نموذج التنفيذ

**agents**

مهام الوكلاء

**service**

خدمة Tolang

**scope**

صلاحيات OCAP

**runtime**

عمليات TVM

**proof**

ReplayTrie + BlockGit

**states.0.label**

01 / التعريف

**states.0.title**

عبّر عن العمل المتزامن.

**states.0.body**

تستخدم Tolang حساب العمليات لوصف خدمات تقسّم العمل وتتواصل وتتقدم بالتوازي.

**states.1.label**

02 / التفويض

**states.1.title**

اجعل الصلاحيات واضحة.

**states.1.body**

تستخدم صلاحيات الكائنات مراجع غير قابلة للتزوير لتحديد الكائنات والموارد التي تستطيع المهمة الوصول إليها.

**states.2.label**

03 / التنفيذ

**states.2.title**

نسّق وانتظر ثم استأنف.

**states.2.body**

تشغّل TVM عمليات تتواصل عبر القنوات؛ ويمكن لحالة التنفيذ المحفوظة انتظار اعتمادياتها ثم الاستئناف عند جاهزيتها.

**states.3.label**

04 / التحقق

**states.3.title**

افحص التنفيذ والإجماع.

**states.3.body**

توفر ReplayTrie أساسًا لإعادة تنفيذ العمل وفحصه، بينما ينسق BlockGit سجل الكتل المتزامنة والحالة.

**mapTitle**

استكشف بنية تنفيذ الوكلاء.

**mapBody**

تعرّف على ترابط اللغة والصلاحيات وبيئة التشغيل والإجماع.

**mapLink**

استكشف المعمارية
