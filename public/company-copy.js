// About page and shared section copy. Keys match across all ten languages.
(() => {
const T = "Tolang · TVM · OCAP · BlockGit · GLVM";
window.companyCopy = {
 en: {
  heroTitle: "The execution layer for agents.",
  heroIntro: "ConcurSys is a US technology company and the technology services company of ALUX. We build programming languages, concurrent runtimes, capability security and consensus, so every step an agent takes can be defined, authorized, resumed and verified.",
  facts: [["Company", "ConcurSys Inc. · United States"], ["Focus", "Agent execution infrastructure"], ["Relationship", "Technology services company of ALUX"], ["Core technology", T]],
  stackTitle: "From language to consensus.",
  stackBody: "Five technologies form one execution path. A language describes concurrent work, a runtime executes it and keeps its state, capabilities bound its authority, and a consensus network verifies the result. GLVM organizes them into one logical machine across many hosts.",
  stack: {tolang: "A language for concurrent processes, compiled to TVM bytecode.", tvm: "A concurrent bytecode runtime where tasks can wait and resume.", ocap: "Authority held as unforgeable references: it can be narrowed, never widened.", blockgit: "DAG blocks coordinate concurrent work; Fringe settles finality.", glvm: "Execution across many machines, organized as one logical VM."},
  processTitle: "From a clear problem to verifiable delivery.",
  processIntro: "Every engagement starts from concrete system constraints and ends with results that can be tested and reviewed.",
  teamTitle: "The people who build the technology are the people you work with.",
  deliverLabel: "Deliverables"
 },
 zh: {
  heroTitle: "为 Agent 构建执行底层。",
  heroIntro: "ConcurSys 是一家美国技术公司，也是 ALUX 的技术服务公司。我们研发编程语言、并发运行时、能力安全与共识技术，让 Agent 的每一步执行都可定义、可授权、可恢复、可验证。",
  facts: [["公司", "ConcurSys Inc. · 美国"], ["定位", "Agent 执行底层技术"], ["关系", "ALUX 的技术服务公司"], ["核心技术", T]],
  stackTitle: "从语言到共识，贯通底层。",
  stackBody: "五项核心技术连成一条完整的执行路径：语言描述并发任务，运行时执行并保存状态，能力边界约束权限，共识网络验证结果；GLVM 再把它们组织成一台跨越多台机器的逻辑虚拟机。",
  stack: {tolang: "面向并发进程的编程语言，编译为 TVM 字节码。", tvm: "执行字节码的并发运行时，任务可以等待，也可以恢复。", ocap: "用不可伪造的引用表达权限，只能收窄，不能放大。", blockgit: "以 DAG 区块协调并发工作，由 Fringe 确定终局。", glvm: "把多台机器上的执行组织为一台逻辑虚拟机。"},
  processTitle: "从明确问题到可验证的交付。",
  processIntro: "每项合作都从具体的系统约束出发，交付可以测试、可以复核的结果。",
  teamTitle: "与你合作的，就是研发这些技术的人。",
  deliverLabel: "交付内容"
 },
 "zh-TW": {
  heroTitle: "為 Agent 構建執行底層。",
  heroIntro: "ConcurSys 是一家美國技術公司，也是 ALUX 的技術服務公司。我們研發程式語言、並行執行時、能力安全與共識技術，讓 Agent 的每一步執行都可定義、可授權、可恢復、可驗證。",
  facts: [["公司", "ConcurSys Inc. · 美國"], ["定位", "Agent 執行底層技術"], ["關係", "ALUX 的技術服務公司"], ["核心技術", T]],
  stackTitle: "從語言到共識，貫通底層。",
  stackBody: "五項核心技術連成一條完整的執行路徑：語言描述並行任務，執行時執行並保存狀態，能力邊界約束權限，共識網路驗證結果；GLVM 再把它們組織成一台跨越多台機器的邏輯虛擬機。",
  stack: {tolang: "面向並行進程的程式語言，編譯為 TVM 位元組碼。", tvm: "執行位元組碼的並行執行時，任務可以等待，也可以恢復。", ocap: "以不可偽造的參照表達權限，只能收窄，不能放大。", blockgit: "以 DAG 區塊協調並行工作，由 Fringe 確定終局。", glvm: "把多台機器上的執行組織為一台邏輯虛擬機。"},
  processTitle: "從明確問題到可驗證的交付。",
  processIntro: "每項合作都從具體的系統約束出發，交付可以測試、可以複核的結果。",
  teamTitle: "與你合作的，就是研發這些技術的人。",
  deliverLabel: "交付內容"
 },
 ja: {
  heroTitle: "エージェントのための実行基盤。",
  heroIntro: "ConcurSys は米国のテクノロジー企業であり、ALUX の技術サービス会社です。プログラミング言語、並行ランタイム、ケイパビリティセキュリティ、コンセンサス技術を開発し、エージェントの実行を一歩ずつ定義・認可・再開・検証できるようにします。",
  facts: [["会社", "ConcurSys Inc. · 米国"], ["領域", "エージェント実行基盤"], ["関係", "ALUX の技術サービス会社"], ["コア技術", T]],
  stackTitle: "言語からコンセンサスまで。",
  stackBody: "五つのコア技術が一つの実行経路をつくります。言語が並行処理を記述し、ランタイムが実行して状態を保持し、ケイパビリティが権限を限定し、コンセンサスネットワークが結果を検証します。GLVM はそれらを、複数のマシンにまたがる一つの論理 VM にまとめます。",
  stack: {tolang: "並行プロセスのための言語。TVM バイトコードにコンパイルされます。", tvm: "タスクの待機と再開ができる並行バイトコードランタイム。", ocap: "偽造できない参照で権限を表します。狭めることはできても、広げることはできません。", blockgit: "DAG ブロックで並行作業を調整し、Fringe でファイナリティを確定します。", glvm: "複数マシン上の実行を、一つの論理 VM として構成します。"},
  processTitle: "課題の明確化から、検証できる成果まで。",
  processIntro: "すべての協業は具体的なシステム制約から始まり、テストとレビューが可能な成果で終わります。",
  teamTitle: "技術をつくった人が、そのまま一緒に取り組みます。",
  deliverLabel: "成果物"
 },
 ko: {
  heroTitle: "에이전트를 위한 실행 기반.",
  heroIntro: "ConcurSys는 미국 기술 기업이자 ALUX의 기술 서비스 회사입니다. 프로그래밍 언어, 동시성 런타임, 케이퍼빌리티 보안, 합의 기술을 개발해 에이전트의 모든 실행 단계를 정의하고, 승인하고, 재개하고, 검증할 수 있게 합니다.",
  facts: [["회사", "ConcurSys Inc. · 미국"], ["분야", "에이전트 실행 기반 기술"], ["관계", "ALUX의 기술 서비스 회사"], ["핵심 기술", T]],
  stackTitle: "언어에서 합의까지.",
  stackBody: "다섯 가지 핵심 기술이 하나의 실행 경로를 이룹니다. 언어는 동시 작업을 기술하고, 런타임은 이를 실행하며 상태를 유지하고, 케이퍼빌리티는 권한을 제한하며, 합의 네트워크는 결과를 검증합니다. GLVM은 이들을 여러 머신에 걸친 하나의 논리 가상 머신으로 묶습니다.",
  stack: {tolang: "동시 프로세스를 위한 언어로, TVM 바이트코드로 컴파일됩니다.", tvm: "작업이 대기하고 재개될 수 있는 동시성 바이트코드 런타임.", ocap: "위조할 수 없는 참조로 권한을 표현합니다. 좁힐 수는 있어도 넓힐 수는 없습니다.", blockgit: "DAG 블록으로 동시 작업을 조정하고, Fringe로 완결성을 확정합니다.", glvm: "여러 머신의 실행을 하나의 논리 가상 머신으로 구성합니다."},
  processTitle: "명확한 문제에서 검증 가능한 결과까지.",
  processIntro: "모든 협업은 구체적인 시스템 제약에서 시작해, 테스트하고 검토할 수 있는 결과로 마무리됩니다.",
  teamTitle: "기술을 만든 사람들이 직접 함께합니다.",
  deliverLabel: "산출물"
 },
 es: {
  heroTitle: "La capa de ejecución para agentes.",
  heroIntro: "ConcurSys es una empresa tecnológica estadounidense y la empresa de servicios tecnológicos de ALUX. Desarrollamos lenguajes de programación, entornos de ejecución concurrentes, seguridad basada en capacidades y consenso, para que cada paso de un agente pueda definirse, autorizarse, reanudarse y verificarse.",
  facts: [["Empresa", "ConcurSys Inc. · Estados Unidos"], ["Enfoque", "Infraestructura de ejecución para agentes"], ["Relación", "Empresa de servicios tecnológicos de ALUX"], ["Tecnología central", T]],
  stackTitle: "Del lenguaje al consenso.",
  stackBody: "Cinco tecnologías forman una sola ruta de ejecución. Un lenguaje describe el trabajo concurrente, un entorno de ejecución lo ejecuta y conserva su estado, las capacidades limitan su autoridad y una red de consenso verifica el resultado. GLVM las organiza en una sola máquina lógica sobre muchos equipos.",
  stack: {tolang: "Un lenguaje para procesos concurrentes, compilado a bytecode de TVM.", tvm: "Un entorno de ejecución de bytecode concurrente donde las tareas pueden esperar y reanudarse.", ocap: "La autoridad se expresa con referencias infalsificables: puede reducirse, nunca ampliarse.", blockgit: "Bloques en DAG coordinan el trabajo concurrente; Fringe fija la finalidad.", glvm: "La ejecución en muchas máquinas, organizada como una sola VM lógica."},
  processTitle: "De un problema claro a una entrega verificable.",
  processIntro: "Cada colaboración parte de restricciones concretas del sistema y termina con resultados que pueden probarse y revisarse.",
  teamTitle: "Quienes crean la tecnología son quienes trabajan con usted.",
  deliverLabel: "Entregables"
 },
 fr: {
  heroTitle: "La couche d'exécution des agents.",
  heroIntro: "ConcurSys est une entreprise technologique américaine et la société de services technologiques d'ALUX. Nous développons des langages de programmation, des environnements d'exécution concurrents, la sécurité par capacités et le consensus, afin que chaque étape d'un agent puisse être définie, autorisée, reprise et vérifiée.",
  facts: [["Entreprise", "ConcurSys Inc. · États-Unis"], ["Domaine", "Infrastructure d'exécution pour agents"], ["Relation", "Société de services technologiques d'ALUX"], ["Technologies clés", T]],
  stackTitle: "Du langage au consensus.",
  stackBody: "Cinq technologies forment un seul chemin d'exécution. Un langage décrit le travail concurrent, un environnement d'exécution l'exécute et conserve son état, les capacités bornent son autorité et un réseau de consensus vérifie le résultat. GLVM les réunit en une seule machine logique répartie sur de nombreux hôtes.",
  stack: {tolang: "Un langage pour processus concurrents, compilé en bytecode TVM.", tvm: "Un environnement d'exécution de bytecode concurrent où les tâches peuvent attendre et reprendre.", ocap: "L'autorité est portée par des références infalsifiables : elle peut être restreinte, jamais élargie.", blockgit: "Des blocs en DAG coordonnent le travail concurrent ; Fringe établit la finalité.", glvm: "L'exécution sur de nombreuses machines, organisée en une seule VM logique."},
  processTitle: "D'un problème clair à une livraison vérifiable.",
  processIntro: "Chaque collaboration part de contraintes système concrètes et aboutit à des résultats testables et vérifiables.",
  teamTitle: "Ceux qui conçoivent la technologie sont ceux qui travaillent avec vous.",
  deliverLabel: "Livrables"
 },
 de: {
  heroTitle: "Die Ausführungsschicht für Agenten.",
  heroIntro: "ConcurSys ist ein US-Technologieunternehmen und das Technologie-Dienstleistungsunternehmen von ALUX. Wir entwickeln Programmiersprachen, nebenläufige Laufzeitumgebungen, Capability-Sicherheit und Konsens, damit jeder Schritt eines Agenten definiert, autorisiert, fortgesetzt und verifiziert werden kann.",
  facts: [["Unternehmen", "ConcurSys Inc. · USA"], ["Schwerpunkt", "Ausführungsinfrastruktur für Agenten"], ["Beziehung", "Technologie-Dienstleister von ALUX"], ["Kerntechnologie", T]],
  stackTitle: "Von der Sprache bis zum Konsens.",
  stackBody: "Fünf Technologien bilden einen durchgehenden Ausführungspfad. Eine Sprache beschreibt nebenläufige Arbeit, eine Laufzeitumgebung führt sie aus und bewahrt ihren Zustand, Capabilities begrenzen ihre Befugnisse, und ein Konsensnetzwerk verifiziert das Ergebnis. GLVM fasst sie zu einer logischen Maschine über viele Hosts zusammen.",
  stack: {tolang: "Eine Sprache für nebenläufige Prozesse, kompiliert zu TVM-Bytecode.", tvm: "Eine nebenläufige Bytecode-Laufzeit, in der Aufgaben warten und fortgesetzt werden können.", ocap: "Befugnisse als unfälschbare Referenzen: einschränkbar, aber nie erweiterbar.", blockgit: "DAG-Blöcke koordinieren nebenläufige Arbeit; Fringe legt die Finalität fest.", glvm: "Ausführung auf vielen Maschinen, organisiert als eine logische VM."},
  processTitle: "Vom klaren Problem zur überprüfbaren Lieferung.",
  processIntro: "Jede Zusammenarbeit beginnt bei konkreten Systemvorgaben und endet mit Ergebnissen, die sich testen und prüfen lassen.",
  teamTitle: "Wer die Technologie entwickelt, arbeitet direkt mit Ihnen.",
  deliverLabel: "Ergebnisse"
 },
 ru: {
  heroTitle: "Уровень исполнения для агентов.",
  heroIntro: "ConcurSys — американская технологическая компания и компания технологических услуг ALUX. Мы разрабатываем языки программирования, конкурентные среды выполнения, безопасность на основе возможностей и консенсус, чтобы каждый шаг агента можно было определить, авторизовать, возобновить и проверить.",
  facts: [["Компания", "ConcurSys Inc. · США"], ["Направление", "Инфраструктура исполнения для агентов"], ["Связь", "Компания технологических услуг ALUX"], ["Ключевые технологии", T]],
  stackTitle: "От языка до консенсуса.",
  stackBody: "Пять технологий образуют единый путь исполнения. Язык описывает конкурентную работу, среда выполнения исполняет её и сохраняет состояние, возможности ограничивают полномочия, а сеть консенсуса проверяет результат. GLVM объединяет их в одну логическую машину поверх многих узлов.",
  stack: {tolang: "Язык для конкурентных процессов, компилируемый в байт-код TVM.", tvm: "Конкурентная среда выполнения байт-кода, где задачи могут ждать и возобновляться.", ocap: "Полномочия выражены неподделываемыми ссылками: их можно сузить, но не расширить.", blockgit: "DAG-блоки координируют конкурентную работу; Fringe фиксирует финальность.", glvm: "Исполнение на многих машинах, организованное как одна логическая VM."},
  processTitle: "От ясной задачи к проверяемому результату.",
  processIntro: "Каждое сотрудничество начинается с конкретных системных ограничений и заканчивается результатами, которые можно протестировать и проверить.",
  teamTitle: "С вами работают те, кто создаёт эти технологии.",
  deliverLabel: "Результаты работ"
 },
 ar: {
  heroTitle: "طبقة التنفيذ للوكلاء.",
  heroIntro: "ConcurSys شركة تقنية أمريكية، وهي شركة الخدمات التقنية لـ ALUX. نطوّر لغات البرمجة وبيئات التشغيل المتزامنة وأمن الصلاحيات القائم على القدرات وتقنيات الإجماع، لكي تكون كل خطوة ينفّذها الوكيل قابلة للتعريف والتفويض والاستئناف والتحقق.",
  facts: [["الشركة", "ConcurSys Inc. · الولايات المتحدة"], ["التركيز", "البنية التحتية لتنفيذ الوكلاء"], ["العلاقة", "شركة الخدمات التقنية لـ ALUX"], ["التقنيات الأساسية", T]],
  stackTitle: "من اللغة إلى الإجماع.",
  stackBody: "تشكّل خمس تقنيات مسار تنفيذ واحدًا: لغة تصف العمل المتزامن، وبيئة تشغيل تنفّذه وتحفظ حالته، وقدرات تحدّ صلاحياته، وشبكة إجماع تتحقق من النتيجة. ويجمعها GLVM في آلة منطقية واحدة تمتد عبر أجهزة متعددة.",
  stack: {tolang: "لغة للعمليات المتزامنة تُصرَّف إلى شيفرة TVM البايتية.", tvm: "بيئة تشغيل متزامنة للشيفرة البايتية، يمكن فيها للمهام أن تنتظر ثم تستأنف.", ocap: "تُمثَّل الصلاحيات بمراجع غير قابلة للتزوير: يمكن تضييقها ولا يمكن توسيعها.", blockgit: "كتل DAG تنسّق العمل المتزامن، وتحدد Fringe النهائية.", glvm: "تنفيذ موزّع على أجهزة متعددة، منظَّم كآلة افتراضية منطقية واحدة."},
  processTitle: "من مشكلة واضحة إلى تسليم قابل للتحقق.",
  processIntro: "يبدأ كل تعاون من قيود النظام الفعلية، وينتهي بنتائج يمكن اختبارها ومراجعتها.",
  teamTitle: "من يبني التقنية هو من يعمل معك.",
  deliverLabel: "المخرجات"
 }
};
})();
