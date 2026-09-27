// German copy. Loaded after all base copy files.
(function(d){for(const k in d)window[k].de=d[k];})({
 "siteCopy": {
  "navServices": "Leistungen",
  "navTechnology": "Technologie",
  "navCompany": "Über uns",
  "talk": "Kontakt",
  "heroTitle": "Fundamente<br>für Agenten.",
  "heroBody": "Sprach-, Laufzeit- und Konsens-Engineering für Agenten, die persistenten Zustand, explizite Befugnisse und verifizierbare Ausführung benötigen. Entwickelt vom Team hinter ALUX.",
  "discuss": "Projekt besprechen",
  "explore": "Unsere Expertise",
  "railAgent": "Agentenausführung auf Public Chains",
  "railVM": "Engineering virtueller Maschinen",
  "railDistributed": "Verteilte Systeme",
  "serviceLabel": "01 / LEISTUNGEN",
  "servicesTitle": "Ein Agent braucht ein Fundament.<br>Wir bauen es.",
  "servicesIntro": "Von der Sprache, in der ein Agent läuft, bis zum Netzwerk, das seine Arbeit verifiziert: Wir bauen die Schichten, die Ausführung möglich machen.",
  "deliverables": "LEISTUNGSUMFANG",
  "services": [
   {
    "id": "agent",
    "title": "Agentenausführung<br>auf Public Chains",
    "body": "Engineering-Unterstützung für Agenten, die auf Public Chains persistenten Zustand, koordinierte Ausführung und explizite Befugnisse benötigen.",
    "scope": "Architektur · Laufzeitintegration · Ausführungstests"
   },
   {
    "id": "vm",
    "title": "Engineering virtueller<br>Maschinen",
    "body": "Bytecode-Laufzeitumgebungen, Prozesskoordination und Ausführungssemantik, zugeschnitten auf Ihr System.",
    "scope": "VM-Design · Toolchain-Integration · Laufzeitdiagnose"
   },
   {
    "id": "distributed",
    "title": "Verteilte<br>Systeme",
    "body": "Nebenläufigkeit, Replay und Koordination über beteiligte Maschinen hinweg.",
    "scope": "Systemdesign · Konsensprotokolle · Fehleranalyse"
   }
  ],
  "techLabel": "02 / TECHNOLOGIE",
  "techTitle": "Ein globaler Computer.<br>Viele technische Herausforderungen.",
  "techIntro": "Eigene Technologie, von der Bytecode-Laufzeitumgebung bis zur Konsensschicht.",
  "durableTab": "Dauerhafte Ausführung",
  "conceptual": "Konzeptionelle Architektur",
  "helpTitle": "Wie wir helfen können",
  "architectureCTA": "Architektur besprechen",
  "tech": {
   "glvm": {
    "name": "GLOBAL LOGICAL VIRTUAL MACHINE",
    "title": "Ein logisches Modell über Maschinen hinweg.",
    "body": "GLVM ist die Ausführungsarchitektur auf Systemebene, die wir über beteiligte TVMs hinweg entwickeln. Sie definiert ein gemeinsames logisches Modell oberhalb der einzelnen Bytecode-Engines.",
    "help": "Ausführungsarchitektur, Laufzeitgrenzen und Integrationsdesign."
   },
   "tvm": {
    "name": "TUPLE-SPACE VIRTUAL MACHINE",
    "title": "Wo Bytecode zur Ausführung wird.",
    "body": "TVM ist die konkrete Bytecode-Engine auf einer beteiligten Maschine. Sie führt Tolang-Bytecode aus und koordiniert nebenläufige Prozesse über Kanäle und Kommunikationsereignisse.",
    "help": "Engineering von Bytecode-Laufzeitumgebungen, Prozesskoordination, Toolchain-Integration und Diagnose."
   },
   "blockgit": {
    "name": "BLOCKGIT-KONSENSPROTOKOLL",
    "title": "Konsens für nebenläufige Arbeit.",
    "body": "BlockGit ist unser Konsensprotokoll für ALUX. Es ordnet nebenläufige Blöcke in einem gerichteten azyklischen Graphen an und koordiniert Blockhistorie und Zustandsübergänge über starke und schwache Verknüpfungen mit Merge-Regeln.",
    "help": "Konsensarchitektur, Protokollimplementierung, Integration und verteilte Tests."
   },
   "ocap": {
    "name": "OBJEKT-CAPABILITIES",
    "title": "Befugnisse explizit machen.",
    "body": "Objekt-Capabilities legen über unfälschbare Referenzen fest, worauf eine Aufgabe zugreifen kann. Bei TVM-nativen Interaktionen erzwingt die Laufzeitumgebung diese Grenzen; externe Dienste und gehostete Umgebungen benötigen eigene Kontrollen.",
    "help": "Capability-Grenzen, Least-Authority-Design und Integrationsreviews."
   },
   "durable": {
    "name": "DAUERHAFTE AUSFÜHRUNG",
    "title": "Ausführung weitertragen.",
    "body": "Eine Public Chain kann Agenten eine dauerhafte Umgebung bieten. Dank erhaltenem Ausführungszustand und Continuations kann Arbeit über Blöcke hinweg warten und fortgesetzt werden, sobald ihre Abhängigkeiten bereitstehen.",
    "help": "Zustandspersistenz, Warte- und Fortsetzungsabläufe, Replay-Anforderungen und Finalisierungsgrenzen."
   }
  },
  "diagram": {
   "shared": "Gemeinsames logisches Ausführungsmodell",
   "node": "Ausführungsknoten",
   "source": "Tolang",
   "bytecode": "Bytecode",
   "runtime": "TVM",
   "process": "Prozess",
   "channel": "Kanal / COMM",
   "task": "Aufgabe",
   "capability": "Capability-Referenz",
   "allowed": "Erreichbares Objekt",
   "unreachable": "Keine Referenz",
   "boundary": "TVM-native Befugnisgrenze",
   "blockgitCaption": "Nebenläufige Blöcke / Verknüpfungen / Merge-Regeln",
   "stages": [
    "Ausführen",
    "Sichern",
    "Warten",
    "Fortsetzen",
    "Finalisieren"
   ],
   "steps": [
    "Nebenläufige Prozesse beginnen ihre Arbeit.",
    "Ausführungszustand und Continuations werden gesichert.",
    "Die Arbeit wartet blockübergreifend auf eine Abhängigkeit.",
    "Die Continuation wird fortgesetzt, sobald ihre Abhängigkeit bereitsteht.",
    "Die Ausführung erreicht ihre Finalisierungsgrenze."
   ]
  },
  "tolangDetail": "Eine Sprache und ein Compiler für nebenläufige Prozesse, ausgerichtet auf TVM-Bytecode.",
  "replayDetail": "Eine Laufzeitstruktur, die die für deterministisches Replay nötigen Ausführungsentscheidungen aufzeichnet.",
  "originalLabel": "EIGENES SYSTEM-ENGINEERING",
  "originalTitle": "Von der Sprache bis zum Konsens.",
  "originalBody": "ConcurSys entwickelt die Technologie hinter ALUX: Tolang, die TVM-Bytecode-Laufzeitumgebung, ReplayTrie und das BlockGit-Konsensprotokoll. Unsere Arbeit verbindet Sprachdesign, nebenläufige Ausführung und verteilte Einigung.",
  "originalNote": "GLVM ist die sich weiterentwickelnde Architektur auf Systemebene. Shard-übergreifende Ausführung und weitere Einsatzumgebungen bleiben Entwicklungsrichtungen.",
  "play": "Ablauf abspielen",
  "pause": "Ablauf pausieren",
  "replay": "Ablauf wiederholen",
  "next": "Nächster Schritt",
  "reset": "Zurücksetzen",
  "step": "SCHRITT",
  "companyLabel": "03 / UNTERNEHMEN",
  "companyTitle": "Entwickelt von den Köpfen hinter der Technologie.",
  "companyBody": "ConcurSys ist das US-Technologieunternehmen hinter ALUX. Wir bringen unser eigenes Sprach-, Laufzeit- und Konsens-Engineering in technische Leistungen für Teams ein, die an den Fundamenten des globalen Computers bauen.",
  "aluxLink": "ALUX entdecken",
  "process": [
   [
    "Problem definieren",
    "Ausführungsanforderungen, Rahmenbedingungen und Systemgrenzen erfassen."
   ],
   [
    "Fundament bauen",
    "Umfang festlegen, dann die zugrunde liegenden Komponenten entwerfen und implementieren."
   ],
   [
    "System validieren",
    "Vereinbartes Verhalten testen, Fehlerfälle prüfen und die Übergabe dokumentieren."
   ]
  ],
  "contactLabel": "04 / GEMEINSAM BAUEN",
  "contactTitle": "Bringen Sie uns<br>das schwierige Problem.",
  "contactBody": "Erzählen Sie uns, was Sie bauen, wo die Ausführung schwierig wird und was funktionieren muss.",
  "contactCTA": "Technisches Gespräch starten",
  "copyEmail": "E-Mail-Adresse kopieren",
  "copied": "E-Mail-Adresse kopiert.",
  "copyFailed": "Markieren Sie die Adresse oben, um sie zu kopieren.",
  "footerLine": "Technische Leistungen für den globalen Computer.",
  "menuOpen": "Navigation öffnen",
  "menuClose": "Navigation schließen",
  "skip": "Zum Inhalt springen",
  "artAlt": "Eine abstrakte Skulptur aus miteinander verbundenen Rechenpfaden",
  "meta": "Sprach-, Laufzeit- und Konsens-Engineering für Agenten, die persistenten Zustand, explizite Befugnisse und verifizierbare Ausführung benötigen. Entwickelt vom Team hinter ALUX.",
  "pageTitle": "ConcurSys — Infrastruktur für Agentenausführung",
  "navLabel": "Hauptnavigation",
  "languageLabel": "Sprache wählen",
  "emailSubject": "Technische Leistungen von ConcurSys",
  "emailBody": "Projektüberblick:\n\nTechnische Herausforderung:\n\nErwarteter Umfang und Zeitrahmen:\n"
 },
 "pageCopy": {
  "home": "Startseite",
  "overview": "Überblick",
  "learnMore": "Mehr erfahren",
  "related": "Verwandte Technologie",
  "serviceDetail": "Leistungsdetails",
  "technologyDetail": "Technologiedetails",
  "approach": "Unsere Arbeitsweise",
  "contactIntro": "Beschreiben Sie das System, das Sie bauen, die Herausforderung bei der Ausführung und den Umfang, den Sie besprechen möchten. Anhand dieses Kontexts können wir einschätzen, ob unsere Engineering-Arbeit zu Ihrem Bedarf passt.",
  "projectLabel": "Projekt",
  "emailLabel": "E-Mail",
  "challengeLabel": "Technische Herausforderung",
  "scopeLabel": "Zu besprechender Umfang",
  "prepareEmail": "E-Mail vorbereiten",
  "emailHint": "Dadurch öffnet sich Ihr E-Mail-Programm mit einem Entwurf. Die Nachricht wird nicht automatisch gesendet.",
  "required": "Bitte füllen Sie die Pflichtfelder aus.",
  "servicesIntro": "Wir arbeiten an der Ausführungsschicht: vom Engineering von Laufzeitumgebungen und Bytecode bis zu Koordination und Zustandsverwaltung über beteiligte Maschinen hinweg. Jedes Projekt beginnt mit den Rahmenbedingungen des Systems und dem konkreten Verhalten, das gebaut oder untersucht werden soll.",
  "technologyIntro": "Unsere Arbeit umfasst Sprach- und Bytecode-Ausführung, Prozesskoordination, Befugnisgrenzen, Muster dauerhafter Ausführung und verteilte Einigung. Diese Technologien prägen unsere Engineering-Praxis; jedes System muss dennoch anhand seiner eigenen Anforderungen und Einsatzumgebung bewertet werden.",
  "companyIntro": "ConcurSys ist das US-Technologieunternehmen hinter ALUX. Wir entwickeln die zugrunde liegenden Sprach-, Laufzeit- und Konsenstechnologien und bringen diese Engineering-Erfahrung in technische Leistungen für Teams ein, die am globalen Computer arbeiten.",
  "serviceDetails": {
   "agent": {
    "eyebrow": "AGENTENAUSFÜHRUNG AUF PUBLIC CHAINS",
    "title": "Engineering-Unterstützung für On-Chain-Ausführung.",
    "intro": "Wir unterstützen Teams dabei, Agenten auf Public Chains zu durchdenken: wie Ausführung koordiniert wird, wie Zustand erhalten bleibt und wie Befugnisse an der Laufzeitgrenze abgebildet werden. Der Umfang richtet sich nach den zugrunde liegenden Systemanforderungen.",
    "questionsTitle": "Fragen, die wir klären",
    "questions": [
     "Welche Ausführungsschritte müssen on-chain laufen, und welche Abhängigkeiten liegen außerhalb der Chain?",
     "Welcher Zustand muss zwischen Blöcken erhalten bleiben, und unter welchen Bedingungen soll die Ausführung fortgesetzt werden?",
     "Wie werden Capabilities und Zugriffsgrenzen über Laufzeitinteraktionen hinweg abgebildet und durchgesetzt?"
    ],
    "deliverablesTitle": "Mögliche Engineering-Ergebnisse",
    "deliverables": [
     "Eine Ausführungsarchitektur und Grenzübersicht, abgeleitet aus den festgelegten Systemanforderungen.",
     "Ein Plan zur Laufzeitintegration, der die relevanten Schnittstellen für Zustand, Koordination und Befugnisse beschreibt.",
     "Gezielte Ausführungstests und technische Notizen für vereinbarte Szenarien und Fehlerfälle."
    ]
   },
   "vm": {
    "eyebrow": "ENGINEERING VIRTUELLER MASCHINEN",
    "title": "Bytecode-Laufzeitumgebungen, zugeschnitten auf das System.",
    "intro": "Wir arbeiten an Bytecode-Ausführung, Prozesskoordination und Laufzeitsemantik. Im Fokus können eine konkrete TVM-Umgebung, ihre Toolchain oder das erforderliche Verhalten an der Grenze zwischen Laufzeitumgebung und umgebendem System stehen.",
    "questionsTitle": "Fragen, die wir klären",
    "questions": [
     "Welche Bytecode-Operationen und welche Ausführungssemantik muss die Laufzeitumgebung unterstützen?",
     "Wie sollen nebenläufige Prozesse über Kanäle und Kommunikationsereignisse kommunizieren?",
     "Welche Toolchain-, Observability-, Replay- oder Diagnosefunktionen sind nötig, um die Ausführung zu untersuchen?"
    ],
    "deliverablesTitle": "Mögliche Engineering-Ergebnisse",
    "deliverables": [
     "Ein Laufzeitdesign oder Implementierungsplan, abgestimmt auf die erforderliche Ausführungssemantik.",
     "Integrationsleitfaden für Bytecode, Compiler und Toolchain, Prozesse und Kommunikationsgrenzen.",
     "Ein fokussierter Diagnose- oder Testplan für repräsentative Ausführungspfade und Grenzfälle."
    ]
   },
   "distributed": {
    "eyebrow": "VERTEILTE SYSTEME",
    "title": "Koordination über beteiligte Maschinen hinweg.",
    "intro": "Wir untersuchen Nebenläufigkeit, Replay, Protokollverhalten und Fehlerbehandlung über Maschinen hinweg. Grundlage sind das Koordinationsmodell des Systems und die zu validierenden Eigenschaften, ohne Garantien über das vereinbarte Design hinaus anzunehmen.",
    "questionsTitle": "Fragen, die wir klären",
    "questions": [
     "Wie werden nebenläufige Updates zwischen Beteiligten geordnet, verknüpft oder abgeglichen?",
     "Welche Informationen müssen aufgezeichnet werden, um eine Ausführung deterministisch zu reproduzieren?",
     "Wie soll sich das System verhalten, wenn ein Beteiligter, eine Nachricht oder eine Abhängigkeit verzögert oder nicht verfügbar ist?"
    ],
    "deliverablesTitle": "Mögliche Engineering-Ergebnisse",
    "deliverables": [
     "Eine System- oder Protokollarchitektur, die Koordination und Grenzen von Zustandsübergängen beschreibt.",
     "Verteilte Testszenarien für Nebenläufigkeit, Replay und ausgewählte Fehlerbedingungen.",
     "Dokumentierte Erkenntnisse zu Implementierung und Integration für den vereinbarten Umfang."
    ]
   }
  },
  "techDetails": {
   "glvm": {
    "focusTitle": "Architektur auf Systemebene in Entwicklung",
    "points": [
     "GLVM ist eine sich weiterentwickelnde Ausführungsarchitektur, die über beteiligte TVMs hinweg entsteht.",
     "Sie definiert ein gemeinsames logisches Modell oberhalb einzelner Bytecode-Engines; sie wird nicht als fertiges, allgemein verfügbares Produkt dargestellt.",
     "Technische Gespräche können Laufzeitgrenzen, Koordinationsannahmen und Integrationsbedarf für ein bestimmtes System klären."
    ]
   },
   "tvm": {
    "focusTitle": "Konkrete Bytecode-Ausführung und Prozesskoordination",
    "points": [
     "TVM ist die Bytecode-Engine auf einer beteiligten Maschine und führt Tolang-Bytecode aus.",
     "Kanäle und Kommunikationsereignisse sind die beschriebenen Mechanismen zur Koordination nebenläufiger Prozesse.",
     "Laufzeitarbeit kann Ausführungssemantik, Toolchain-Integration, Diagnose und Prozessgrenzen untersuchen."
    ]
   },
   "blockgit": {
    "focusTitle": "Ein graphbasiertes Modell für nebenläufige Blockhistorie",
    "points": [
     "BlockGit ist das für ALUX entwickelte Konsensprotokoll.",
     "Sein Design ordnet nebenläufige Blöcke in einem gerichteten azyklischen Graphen mit starken und schwachen Verknüpfungen an.",
     "Merge-Regeln koordinieren Blockhistorie und Zustandsübergänge; das Protokollverhalten muss anhand der Systemanforderungen bewertet werden."
    ]
   },
   "ocap": {
    "focusTitle": "Befugnisse, ausgedrückt durch Referenzen",
    "points": [
     "Objekt-Capability-Design legt über unfälschbare Referenzen fest, worauf eine Aufgabe zugreifen kann.",
     "Bei TVM-nativen Interaktionen erzwingt die Laufzeitumgebung diese Befugnisgrenzen.",
     "Externe Dienste und gehostete Umgebungen erfordern eigene Zugriffskontrollen und ein Integrationsreview."
    ]
   },
   "durable": {
    "focusTitle": "Zustandsbehaftete Arbeit, die warten und fortfahren kann",
    "points": [
     "Eine Public Chain kann eine dauerhafte Umgebung für die Ausführung von Agenten bieten.",
     "Erhaltener Zustand und Continuations ermöglichen Arbeit, die blockübergreifend auf Abhängigkeiten wartet.",
     "Fortsetzungsbedingungen, Replay-Bedarf und Finalisierungsgrenzen müssen für jedes System definiert werden."
    ]
   }
  }
 },
 "technologyCopy": {
  "mapTitle": "Im Inneren des Agenten-Ausführungsstacks.",
  "mapIntro": "Folgen Sie dem Weg von der Sprache über Laufzeitumgebung, Befugnisse und Zustand bis zum Konsens. Erfahren Sie, was jede Schicht zur Ausführung eines Agenten beiträgt und wie die Schichten zusammenhängen.",
  "mapHint": "Wählen Sie ein Modul, um seine Aufgaben und verbundenen Komponenten zu sehen.",
  "layers": [
   "Einstieg für Entwickler",
   "Nebenläufige Ausführung",
   "Transaktionen & Verifikation",
   "Konsens & Netzwerk",
   "Entwicklungspfad"
  ],
  "current": "Aktuelles Fundament",
  "evolving": "In stetiger Weiterentwicklung",
  "roadmap": "Roadmap",
  "role": "Rolle des Moduls",
  "connections": "Verbundene Module",
  "details": "Technische Details",
  "team": "Team",
  "modules": {
   "tolang": {
    "name": "Tolang",
    "title": "Eine Sprache und ein Compiler für nebenläufige Dienste",
    "body": "ConcurSys entwickelt Tolang und seinen Compiler, um nebenläufige Prozesse für die TVM-Laufzeitumgebung auszudrücken.",
    "help": "Sprachdesign, Compilerverhalten und der Weg vom Quellcode zur Ausführung in der Laufzeitumgebung.",
    "points": [
     "Kompiliert Tolang-Programme zu Bytecode für TVM.",
     "Modelliert Arbeit als nebenläufige Prozesse, die über Kanäle kommunizieren können.",
     "Verbindet Dienstlogik auf Quellcodeebene mit der TVM-Ausführung und der Entwickler-Toolchain."
    ],
    "status": "current"
   },
   "replay": {
    "name": "ReplayTrie & BranchId",
    "title": "Reproduzierbare Nachweise für deterministische Validierung",
    "body": "Die Laufzeitumgebung zeichnet Ausführungsentscheidungen auf, die sonst variieren könnten, damit Validatoren den akzeptierten Pfad reproduzieren können.",
    "help": "Replay-Anforderungen, Ausführungsnachweise und Reproduktion auf Validatorseite.",
    "points": [
     "BranchId kennzeichnet den Ausführungszweig, der zur aufgezeichneten Arbeit gehört.",
     "COMM-Einträge bewahren relevante Kommunikationsereignisse und Entscheidungen.",
     "ReplayTrie ordnet die Nachweise, mit denen sich die Ausführung deterministisch reproduzieren lässt."
    ],
    "status": "current"
   },
   "atomicity": {
    "name": "Blockübergreifende Atomarität",
    "title": "Eine Transaktion, die warten und fortfahren kann",
    "body": "Eine ALUX-Transaktion kann an einer Blockgrenze pausieren, in einem späteren Block fortfahren und ihre ALUX-Zustandsänderungen bis zum endgültigen Commit oder Abort vorgemerkt halten.",
    "help": "Lang laufende Workflows, Isolationsgrenzen sowie Verhalten bei Commit oder Abort.",
    "points": [
     "Segmente und Partitionen sichern den Fortschritt an Unterbrechungspunkten.",
     "Isolation und Replay unterstützen Fortsetzung und Validierung über Blöcke hinweg.",
     "Die Atomarität umfasst vorgemerkten ALUX-Zustand; Effekte in der Außenwelt, etwa ein API-Aufruf oder eine physische Aktion, werden nicht automatisch zurückgerollt."
    ],
    "status": "current"
   },
   "evm": {
    "name": "EVM & TSAC",
    "title": "Unterstützte EVM-Workloads, koordiniert über TVM",
    "body": "ALUX unterstützt derzeit ausgewählte EVM-Workloads in isolierten Ausführungsumgebungen. TSAC koordiniert relevante Operationen auf dem globalen Zustand mit TVM; die Kompatibilität hängt vom unterstützten Funktionsumfang ab.",
    "help": "Integrationsgrenzen der EVM, TSAC-Koordination und Prüfung der Workload-Kompatibilität.",
    "points": [
     "Jede EVM-Instanz behält ihren eigenen Ausführungsstack und Speicher.",
     "TSAC leitet unterstützte Interaktionen mit dem globalen Zustand zur Koordination an TVM-Prozesse weiter.",
     "WASM-Gastausführung ist geplant; daraus folgt keine universelle EVM-Kompatibilität."
    ],
    "status": "current"
   },
   "framework": {
    "name": "Segments · Partitions · Fringe",
    "title": "Ausführungsarbeit für Scheduling und Finalität strukturieren",
    "body": "Framework-Dienste versiegeln Ausführungstraces zu Segmenten und Partitionen für die Blockproduktion; sobald BlockGit einen Fringe finalisiert, werden dessen nebenläufige Blöcke zu einem einzigen Zustandsübergang zusammengeführt.",
    "help": "Ausführungsplanung, Umgang mit Abhängigkeiten und die Übergabe von Laufzeitarbeit an die Blockproduktion.",
    "points": [
     "Segmente erfassen begrenzte Abschnitte des Ausführungsfortschritts.",
     "Partitionen fassen die versiegelten Segmente einer Transaktion zur Aufnahme in einen Block zusammen.",
     "FringeBuilder führt für jeden von BlockGit finalisierten Fringe den Block-Merge aus."
    ],
    "status": "current"
   },
   "node": {
    "name": "Node · RPC · P2P",
    "title": "Die netzwerkseitige Oberfläche der Laufzeitumgebung",
    "body": "Die Node-Schicht verbindet die Ausführung mit unterstützten RPC-Methoden, Peer-Kommunikation und Speicherkontext. Konkrete Endpunkte und Betriebsverhalten hängen vom aktuellen Implementierungsstand ab.",
    "help": "Node-Integration, unterstützter RPC-Umfang, Peer-Kommunikation und Speichergrenzen.",
    "points": [
     "Stellt unterstützte Ethereum-kompatible eth_* RPC-Methoden bereit.",
     "P2P-Gossip überträgt Netzwerknachrichten zwischen beteiligten Peers.",
     "Speicherkontext des Nodes und statische Dienstschnittstellen umgeben die Laufzeitumgebung."
    ],
    "status": "current"
   },
   "tooling": {
    "name": "Compiler · LSP · Playground",
    "title": "Dienstlogik während der Entwicklung prüfen und erproben",
    "body": "Compiler-Diagnosen sowie Language-Server- und Playground-Workflows helfen Entwicklern, Tolang-Programme zu untersuchen, bevor sie mit einem Node verbunden werden.",
    "help": "Compiler-Integration, Diagnose, Editor-Workflows und frühe Laufzeitevaluierung.",
    "points": [
     "Compiler-Diagnosen machen Probleme auf dem Weg vom Quellcode zum Bytecode sichtbar.",
     "LSP-Workflows unterstützen sprachbewusste Analyse und Bearbeitung.",
     "Playground-Läufe, Expansion und Formatierung helfen, das Dienstverhalten zu untersuchen."
    ],
    "status": "current"
   },
   "sharding": {
    "name": "Shard-übergreifende Ausführung",
    "title": "Horizontale Atomarität über Shards hinweg",
    "body": "Designziel ist eine einzige Alles-oder-nichts-Transaktionsgrenze über beteiligte Shards hinweg. Shard-übergreifende Ausführung steht weiterhin auf der Roadmap.",
    "help": "Künftige Transaktionskoordination über Shards und Schutz vor teilweiser Sichtbarkeit.",
    "points": [
     "Shard-lokale Effekte unter einer gemeinsamen Transaktionsgrenze vormerken.",
     "Alle beteiligten Effekte gemeinsam committen oder gemeinsam abbrechen.",
     "Shard-übergreifende Zwischenzustände für unbeteiligte Transaktionen unsichtbar halten."
    ],
    "status": "roadmap"
   },
   "worldos": {
    "name": "World OS & Client-Umgebungen",
    "title": "Das Ausführungsmodell auf neue Umgebungen ausweiten",
    "body": "Eine programmierbare World-OS-Schicht und der Einsatz auf Client-Geräten sind langfristige Richtungen für das System. Sie sind Roadmap-Themen, keine aktuellen Fähigkeiten der Laufzeitumgebung.",
    "help": "Künftige Einsatzmodelle und die Abstraktionen auf Systemebene, die dafür nötig sind.",
    "points": [
     "GLVM ist das sich weiterentwickelnde Modell auf Systemebene über beteiligte TVMs hinweg.",
     "Der Einsatz von TVM auf Client-Geräten ist weiterhin geplant.",
     "Eine programmierbare World-OS-Schicht bleibt eine Richtung auf der Roadmap."
    ],
    "status": "roadmap"
   }
  },
  "menuGroups": [
   "Sprache & Laufzeit",
   "Ausführung & Sicherheit",
   "Konsens & Integration",
   "Forschungsrichtungen"
  ]
 },
 "teamCopy": {
  "title": "Die Menschen hinter den Systemen",
  "intro": "ConcurSys vereint tiefe Erfahrung in quantitativen Risikosystemen und nebenläufigem Rechnen. Diese Arbeit prägt die Laufzeit-, Sprach- und Konsenstechnologien, die wir bauen.",
  "frank": {
   "role": "Gründer & Präsident",
   "bio": [
    "Frank He (Atticbee) ist Blockchain-Forscher und Unternehmer; zu seiner Arbeit gehören Design und Implementierung nebenläufiger virtueller Maschinen. Vor ConcurSys war er mehr als 15 Jahre als Senior Quantitative Analyst und Entwickler bei Bloomberg, Lehman Brothers und Barclays Capital tätig und baute dort hochskalierbare Systeme zur Risikoberechnung.",
    "Bei ConcurSys setzt er diese Erfahrung in der Architektur nebenläufiger Systeme ein. Seine Arbeit verbindet die für ALUX entwickelten Laufzeit-, Programmiersprachen- und Konsenstechnologien zu einem kohärenten technischen Fundament."
   ],
   "focus": [
    "Nebenläufige Systeme",
    "Risikoberechnung",
    "Laufzeitarchitektur"
   ]
  },
  "tomislav": {
   "role": "CTO",
   "bio": [
    "Tomislavs Interesse am Rechnen begann mit fünf Jahren mit einem Taschenrechner aus Pappe und mit zehn mit Assembler-Programmierung auf dem C64c. Mehr als ein Jahrzehnt in der Elektronik und zwei Jahrzehnte Programmierung in Sprachen wie JavaScript und Haskell prägten seinen Ansatz: das Modell erkunden, die Mechanik verstehen, dann bauen.",
    "Seine Arbeit zur Nebenläufigkeit stützt sich auf den Prozesskalkül. Bei ConcurSys verbindet er formale Modelle von Prozessen und Kommunikation mit praktischem Laufzeit-Engineering und bringt dieselbe Neugier und intensive Projektbeteiligung in die Fundamente von ALUX ein."
   ],
   "focus": [
    "Prozesskalkül",
    "Nebenläufigkeit",
    "Laufzeit-Engineering"
   ]
  }
 },
 "joinCopy": {
  "nav": "Karriere",
  "title": "Bauen Sie mit uns die Fundamente.",
  "intro": "Sie interessieren sich für nebenläufige Systeme, Programmiersprachen oder verteilte Ausführung? Stellen Sie sich und die technische Arbeit vor, zu der Sie beitragen möchten.",
  "label": "Technische Interessen",
  "body": "Erzählen Sie uns von einem System, das Sie gebaut haben, einem schwierigen Problem, das Sie untersucht haben, oder einem Open-Source-Beitrag, auf den Sie stolz sind. Fügen Sie Links hinzu, die uns helfen, Ihre Arbeit zu verstehen.",
  "cta": "Stellen Sie sich vor",
  "subject": "Zusammenarbeit mit ConcurSys",
  "email": "Über mich:\n\nTechnische Interessen:\n\nAusgewählte Arbeiten und Links:\n"
 },
 "agentCopy": {
  "eyebrow": "Agenten-Infrastruktur",
  "title": "Fundamente<br>für Agenten.",
  "body": "Sprach-, Laufzeit- und Konsens-Engineering für Agenten, die persistenten Zustand, explizite Befugnisse und verifizierbare Ausführung benötigen. Entwickelt vom Team hinter ALUX.",
  "rails": [
   "Persistenter Zustand",
   "Explizite Befugnisse",
   "Koordinierte Ausführung",
   "Reproduzierbare Validierung"
  ],
  "servicesTitle": "Ein Agent braucht ein Fundament.<br>Wir bauen es.",
  "servicesIntro": "Von der Sprache, in der ein Agent läuft, bis zum Netzwerk, das seine Arbeit verifiziert: Wir bauen die Schichten, die Ausführung möglich machen.",
  "mapTitle": "Im Inneren des Agenten-Ausführungsstacks.",
  "mapIntro": "Folgen Sie dem Weg von der Sprache über Laufzeitumgebung, Befugnisse und Zustand bis zum Konsens. Erfahren Sie, was jede Schicht zur Ausführung eines Agenten beiträgt und wie die Schichten zusammenhängen.",
  "bridgeTitle": "Von der Absicht eines Agenten<br>zum Systemverhalten.",
  "bridgeBody": "Ein Modell kann eine Aktion vorschlagen. Das Ausführungssystem muss festlegen, was laufen darf, worauf zugegriffen werden kann, wie Zustand Wartezeiten übersteht und wie Ergebnisse vereinbart werden. Das sind die technischen Fragen hinter unserer Arbeit an ALUX.",
  "coreLabels": [
   "Native nebenläufige Sprache",
   "Ausführungsengine für Agenten",
   "Explizite Befugnisse",
   "Nebenläufiger Konsens",
   "Ein logisches Ausführungsmodell"
  ]
 },
 "agentRelevance": {
  "label": "Für Agentensysteme",
  "modules": {
   "glvm": "GLVM ist ein sich weiterentwickelndes gemeinsames logisches Modell über beteiligte TVMs hinweg, das die Ausführung auf Systemebene koordiniert.",
   "tolang": "Tolang drückt nebenläufige Dienstlogik aus, die für die Ausführung durch TVM kompiliert werden kann.",
   "tvm": "TVM führt Bytecode aus und koordiniert die Kommunikation zwischen nebenläufigen Prozessen.",
   "ocap": "Objekt-Capabilities machen explizit, welche Objekte und Ressourcen ein Agent erreichen kann.",
   "durable": "Dauerhafte Ausführung sichert Zustand und Continuations, damit Arbeit auf Abhängigkeiten warten und später fortgesetzt werden kann.",
   "atomicity": "Blockübergreifende Atomarität hält ALUX-Zustand bis zu Commit oder Abort vorgemerkt; externe Nebeneffekte werden nicht automatisch zurückgerollt.",
   "replay": "Replay bildet die Grundlage, um Ausführung deterministisch erneut auszuführen und ihre aufgezeichneten Entscheidungen zu prüfen.",
   "framework": "Segmente, Partitionen und Fringes ordnen Ausführung, Wiederherstellung und Finalisierungsgrenzen.",
   "blockgit": "BlockGit koordiniert nebenläufige Blockhistorie und Zustand zwischen verteilten Beteiligten.",
   "evm": "EVM/TSAC ermöglicht bestehenden EVM-Contracts die Teilnahme über eine Koordination durch TVM.",
   "node": "Node-Schnittstellen verbinden Anfragen von Agenten und Zustandsabfragen; P2P übernimmt die Verbreitung zwischen Nodes.",
   "tooling": "Compiler, LSP und Playground helfen, Programmlogik zu erstellen und zu prüfen.",
   "sharding": "Shard-übergreifende Atomarität ist eine Entwicklungsrichtung, um Agentenarbeit über Shards hinweg zu koordinieren.",
   "worldos": "World OS und der Einsatz auf Clients sind Roadmap-Richtungen für eine programmierbare Ausführungsumgebung."
  }
 },
 "tolangCopy": {
  "eyebrow": "Eine native Sprache für Blockchains der nächsten Generation",
  "title": "Mit Tolang drücken Agenten nebenläufige Arbeit nativ aus.",
  "intro": "Tolang wurde für Blockchain-Systeme der nächsten Generation entwickelt und verbindet Agenten-Workflows mit der Ausführungsschicht: nebenläufige Prozesse, typisierte Kommunikation und ein direkter Weg zur TVM-Laufzeitumgebung.",
  "cta": "Tolang-Toolchain entdecken",
  "pipeline": [
   "Tolang-Quellcode",
   "tolangc-Compiler",
   ".tox-Bytecode",
   "TVM-Prozesse"
  ],
  "features": [
   {
    "title": "Nebenläufigkeit als Sprachprimitiv",
    "body": "Beschreiben Sie Arbeit als Prozesse, die sich verzweigen, warten, fortfahren und gemeinsam vorankommen können. So erhalten Agentensysteme einen klaren Weg, Aufgaben zu beschreiben, die nicht in einen einzelnen sequenziellen Aufruf passen."
   },
   {
    "title": "Typisierte Prozesskommunikation",
    "body": "Prozesse tauschen Daten über typisierte Tupelraum-Kanäle statt über gemeinsamen Speicher aus. Kanaldeskriptoren und Verhaltenstypen helfen, manche Fehlverwendung früh zu erkennen; Laufzeitregeln steuern den Lebenszyklus der Kanäle."
   },
   {
    "title": "Ein Weg zu persistenten Diensten",
    "body": "Tolang kompiliert zu TVM-Bytecode, wo Prozesse über Wartezeiten hinweg weiterlaufen und sich über Kanäle koordinieren können. Die Sprache verbindet Dienstlogik mit der Laufzeitumgebung; Persistenz- und Transaktionsgarantien hängen vom umgebenden ALUX-System ab."
   },
   {
    "title": "Ein praxistauglicher Entwicklungszyklus",
    "body": "Compiler-APIs, LSP-Diagnosen, Formatierung, Expansion und Playground-Läufe helfen Teams, das Dienstverhalten vom Quellcode bis zur Laufzeit zu prüfen und iterativ zu verbessern."
   }
  ]
 },
 "heroExecutionCopy": {
  "eyebrow": "Fundamente der Agentenausführung",
  "title": "Von der Absicht<br>zur Ausführung.",
  "body": "ConcurSys entwickelt die zugrunde liegenden Sprach-, Laufzeit- und Konsenstechnologien von ALUX. Gemeinsam bilden sie die technischen Schichten, um Agentenarbeit auszudrücken, zu koordinieren und zu prüfen.",
  "diagramLabel": "Ausführungsmodell",
  "agents": "Agentenaufgaben",
  "service": "Tolang-Dienst",
  "scope": "OCAP-Befugnisse",
  "runtime": "TVM-Prozesse",
  "proof": "ReplayTrie + BlockGit",
  "states": [
   {
    "label": "01 / DEFINIEREN",
    "title": "Nebenläufige Arbeit ausdrücken.",
    "body": "Tolang nutzt den Prozesskalkül, um Dienste zu beschreiben, die Arbeit aufteilen, kommunizieren und nebenläufig voranschreiten."
   },
   {
    "label": "02 / AUTORISIEREN",
    "title": "Befugnisse explizit machen.",
    "body": "Objekt-Capabilities legen über unfälschbare Referenzen fest, auf welche Objekte und Ressourcen eine Aufgabe zugreifen kann."
   },
   {
    "label": "03 / AUSFÜHREN",
    "title": "Koordinieren, warten, fortfahren.",
    "body": "TVM führt Prozesse aus, die über Kanäle kommunizieren; gesicherter Ausführungszustand kann auf Abhängigkeiten warten und fortgesetzt werden, sobald sie bereitstehen."
   },
   {
    "label": "04 / VERIFIZIEREN",
    "title": "Ausführung und Einigung prüfen.",
    "body": "ReplayTrie bildet die Grundlage für das Replay der Ausführung, während BlockGit nebenläufige Blockhistorie und Zustand koordiniert."
   }
  ],
  "mapTitle": "Den Ausführungsstack erkunden.",
  "mapBody": "Sehen Sie, wie Sprache, Befugnisse, Laufzeitumgebung und Konsens zusammenspielen.",
  "mapLink": "Architektur erkunden",
  "demo": {
   "label": "Interaktives Ausführungsmodell",
   "run": "Aufgabe starten",
   "pause": "Pause",
   "continue": "Weiter",
   "resume": "Aufgabe fortsetzen",
   "replay": "Erneut ausführen",
   "reset": "Zurücksetzen",
   "scenario": "Aufgabenszenario",
   "allowed": "Innerhalb der Befugnisse",
   "denied": "Außerhalb der Befugnisse",
   "status": {
    "idle": "Bereit zum Erkunden",
    "defined": "Tolang · nebenläufige Aufgaben definiert",
    "authorized": "OCAP · Zugriff erlaubt",
    "waiting": "TVM · wartet auf eine Abhängigkeit",
    "resumed": "TVM · Ausführung fortgesetzt",
    "verified": "ReplayTrie + BlockGit · Validierungsphase",
    "denied": "OCAP · Zugriff verweigert"
   },
   "deniedTitle": "Befugnisse sind eine Grenze.",
   "deniedBody": "Dieses Beispiel fordert eine Ressource außerhalb der gewährten Capabilities an. Die Aufgabe stoppt an der Berechtigungsgrenze.",
   "waitTitle": "Warten heißt nicht neu beginnen.",
   "waitBody": "Das Modell wartet auf eine externe Abhängigkeit. Setzen Sie die Aufgabe fort, um zu sehen, wie die Ausführung ab dem gesicherten Zustand weiterläuft.",
   "doneTitle": "Von der Ausführung zur Verifikation.",
   "doneBody": "Das Modell erreicht Replay-Validierung und Konsens. ReplayTrie liefert Ausführungsnachweise; BlockGit koordiniert die nebenläufige Historie."
  }
 },
 "stackCopy": {
  "relation": "Das Technologie-Dienstleistungsunternehmen von ALUX",
  "frame": "Stack für Agentenausführung",
  "builtBy": "Entwickelt von ConcurSys",
  "layers": {
   "tolang": "Sprache",
   "ocap": "Befugnisse",
   "tvm": "Nebenläufige Laufzeit",
   "blockgit": "Konsens",
   "glvm": "Logische VM"
  },
  "tiles": {
   "tolang": [
    "Prozesse",
    "Typisierte Kanäle",
    "Join-Muster",
    "tolangc → .tox"
   ],
   "ocap": [
    "Unfälschbare Refs",
    "Bewachte Kanäle",
    "Abschwächung",
    "Delegation"
   ]
  },
  "tvmCaption": "Tupelraum / COMM-Ereignisse / warten und fortfahren",
  "bgCaption": "DAG-Blöcke / schwache Verknüpfungen / Fringe-Finalität",
  "substrates": [
   "Blockchain-Nodes",
   "Cloud-Server",
   "Persönliche Geräte"
  ],
  "trace": "Aufgaben-Trace",
  "traceIdle": "Starten Sie eine Aufgabe, um sie durch alle Schichten zu verfolgen.",
  "readTitle": "So lesen Sie das Diagramm.",
  "readIntro": "Jede Ebene ist eine Schicht der ALUX-Laufzeitumgebung, die ConcurSys baut. Wählen Sie eine Schicht oder starten Sie eine Aufgabe und verfolgen Sie, wie sie die Schichten durchläuft.",
  "aluxTitle": "Wir entwickeln ALUX. Dieselben Fundamente können Ihr System antreiben.",
  "aluxLab": "Runtime Lab",
  "aluxCode": "GitHub",
  "servicesLabel": "Leistungen",
  "codeCaption": "Zwei Agenten melden sich parallel. Der Join feuert erst, wenn beide Ergebnisse vorliegen."
 }
});
