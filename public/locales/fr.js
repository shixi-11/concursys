// French copy. Loaded after all base copy files.
(function(d){for(const k in d)window[k].fr=d[k];})({
 "siteCopy": {
  "navServices": "Services",
  "navTechnology": "Technologie",
  "navCompany": "À propos",
  "talk": "Parlons-en",
  "heroTitle": "Les fondations<br>des agents.",
  "heroBody": "Ingénierie du langage, de l'environnement d'exécution et du consensus pour des agents qui exigent un état persistant, une autorité explicite et une exécution vérifiable. Conçu par l'équipe derrière ALUX.",
  "discuss": "Parlons de votre projet",
  "explore": "Découvrir notre expertise",
  "railAgent": "Exécution d'agents sur chaîne publique",
  "railVM": "Ingénierie de machines virtuelles",
  "railDistributed": "Systèmes distribués",
  "serviceLabel": "01 / SERVICES",
  "servicesTitle": "Un agent a besoin de fondations.<br>Nous les concevons.",
  "servicesIntro": "Du langage qu'exécute un agent au réseau qui vérifie son travail, nous construisons les couches qui rendent l'exécution possible.",
  "deliverables": "PÉRIMÈTRE D'INGÉNIERIE",
  "services": [
   {
    "id": "agent",
    "title": "Exécution d'agents<br>sur chaîne publique",
    "body": "Accompagnement technique pour les agents qui exigent un état persistant, une exécution coordonnée et une autorité explicite sur les chaînes publiques.",
    "scope": "Architecture · Intégration à l'environnement d'exécution · Tests d'exécution"
   },
   {
    "id": "vm",
    "title": "Ingénierie de<br>machines virtuelles",
    "body": "Environnements d'exécution de bytecode, coordination de processus et sémantique d'exécution conçus autour de votre système.",
    "scope": "Conception de VM · Intégration de la chaîne d'outils · Diagnostic d'exécution"
   },
   {
    "id": "distributed",
    "title": "Systèmes<br>distribués",
    "body": "Concurrence, rejeu et coordination entre les machines participantes.",
    "scope": "Conception système · Protocoles de consensus · Analyse des défaillances"
   }
  ],
  "techLabel": "02 / TECHNOLOGIE",
  "techTitle": "Un ordinateur mondial.<br>De nombreux défis d'ingénierie.",
  "techIntro": "Une technologie originale, de l'environnement d'exécution du bytecode à la couche de consensus.",
  "durableTab": "Exécution durable",
  "conceptual": "Architecture conceptuelle",
  "helpTitle": "Comment nous pouvons aider",
  "architectureCTA": "Parlons de votre architecture",
  "tech": {
   "glvm": {
    "name": "MACHINE VIRTUELLE LOGIQUE GLOBALE",
    "title": "Un modèle logique commun aux machines.",
    "body": "GLVM est l'architecture d'exécution de niveau système que nous développons à travers les TVM participantes. Elle définit un modèle logique partagé au-dessus des moteurs de bytecode individuels.",
    "help": "Architecture d'exécution, frontières de l'environnement d'exécution et conception de l'intégration."
   },
   "tvm": {
    "name": "MACHINE VIRTUELLE À ESPACE DE TUPLES",
    "title": "Là où le bytecode devient exécution.",
    "body": "TVM est le moteur de bytecode concret d'une machine participante. Il exécute le bytecode Tolang et coordonne des processus concurrents au moyen de canaux et d'événements de communication.",
    "help": "Ingénierie d'environnements d'exécution de bytecode, coordination de processus, intégration de la chaîne d'outils et diagnostic."
   },
   "blockgit": {
    "name": "PROTOCOLE DE CONSENSUS BLOCKGIT",
    "title": "Un consensus pour le travail concurrent.",
    "body": "BlockGit est notre protocole de consensus pour ALUX. Il organise les blocs concurrents dans un graphe orienté acyclique, en combinant liens forts, liens faibles et règles de fusion pour coordonner l'historique des blocs et les transitions d'état.",
    "help": "Architecture de consensus, implémentation de protocole, intégration et tests distribués."
   },
   "ocap": {
    "name": "CAPACITÉS D'OBJET",
    "title": "Rendre l'autorité explicite.",
    "body": "Les capacités d'objet s'appuient sur des références infalsifiables pour définir ce à quoi une tâche peut accéder. Dans les interactions natives TVM, l'environnement d'exécution applique ces frontières ; les services externes et les environnements hébergés nécessitent leurs propres contrôles.",
    "help": "Frontières de capacités, conception à moindre autorité et revues d'intégration."
   },
   "durable": {
    "name": "EXÉCUTION DURABLE",
    "title": "Prolonger l'exécution.",
    "body": "Une chaîne publique peut offrir un environnement durable aux agents. Grâce à l'état d'exécution et aux continuations préservés, le travail peut attendre d'un bloc à l'autre et reprendre dès que ses dépendances sont prêtes.",
    "help": "Persistance de l'état, flux d'attente et de reprise, exigences de rejeu et frontières de finalisation."
   }
  },
  "diagram": {
   "shared": "Modèle logique d'exécution partagé",
   "node": "Nœud d'exécution",
   "source": "Tolang",
   "bytecode": "Bytecode",
   "runtime": "TVM",
   "process": "Processus",
   "channel": "Canal / COMM",
   "task": "Tâche",
   "capability": "Référence de capacité",
   "allowed": "Objet accessible",
   "unreachable": "Aucune référence",
   "boundary": "Frontière d'autorité native TVM",
   "blockgitCaption": "Blocs concurrents / liens / règles de fusion",
   "stages": [
    "Exécuter",
    "Préserver",
    "Attendre",
    "Reprendre",
    "Finaliser"
   ],
   "steps": [
    "Les processus concurrents commencent leur travail.",
    "L'état d'exécution et les continuations sont préservés.",
    "Le travail attend une dépendance d'un bloc à l'autre.",
    "La continuation reprend lorsque sa dépendance est prête.",
    "L'exécution atteint sa frontière de finalisation."
   ]
  },
  "tolangDetail": "Un langage et un compilateur pour processus concurrents, ciblant le bytecode TVM.",
  "replayDetail": "Une structure d'exécution qui enregistre les choix nécessaires à un rejeu déterministe.",
  "originalLabel": "INGÉNIERIE DE SYSTÈMES ORIGINAUX",
  "originalTitle": "Du langage au consensus.",
  "originalBody": "ConcurSys développe la technologie qui sous-tend ALUX : Tolang, l'environnement d'exécution de bytecode TVM, ReplayTrie et le protocole de consensus BlockGit. Nos travaux relient conception de langages, exécution concurrente et accord distribué.",
  "originalNote": "GLVM est l'architecture de niveau système en cours d'évolution. L'exécution inter-shards et d'autres environnements de déploiement restent des axes de développement.",
  "play": "Lire la séquence",
  "pause": "Mettre la séquence en pause",
  "replay": "Rejouer la séquence",
  "next": "Étape suivante",
  "reset": "Réinitialiser",
  "step": "ÉTAPE",
  "companyLabel": "03 / ENTREPRISE",
  "companyTitle": "Conçu par ceux qui ont créé la technologie.",
  "companyBody": "ConcurSys est l'entreprise technologique américaine derrière ALUX. Nous mettons notre propre ingénierie du langage, de l'environnement d'exécution et du consensus au service des équipes qui bâtissent les fondations de l'ordinateur mondial.",
  "aluxLink": "Découvrir ALUX",
  "process": [
   [
    "Définir le problème",
    "Cartographier vos exigences d'exécution, vos contraintes et les frontières de votre système."
   ],
   [
    "Construire les fondations",
    "Convenir du périmètre, puis concevoir et implémenter les composants sous-jacents."
   ],
   [
    "Valider le système",
    "Tester le comportement convenu, examiner les cas de défaillance et documenter la passation."
   ]
  ],
  "contactLabel": "04 / CONSTRUISONS",
  "contactTitle": "Confiez-nous<br>le problème difficile.",
  "contactBody": "Dites-nous ce que vous construisez, où l'exécution se complique et ce qui doit fonctionner.",
  "contactCTA": "Engager une discussion technique",
  "copyEmail": "Copier l'adresse e-mail",
  "copied": "Adresse e-mail copiée.",
  "copyFailed": "Sélectionnez l'adresse ci-dessus pour la copier.",
  "footerLine": "Services techniques pour l'ordinateur mondial.",
  "menuOpen": "Ouvrir la navigation",
  "menuClose": "Fermer la navigation",
  "skip": "Aller au contenu",
  "artAlt": "Une sculpture abstraite de chemins de calcul interconnectés",
  "meta": "Ingénierie du langage, de l'environnement d'exécution et du consensus pour des agents qui exigent un état persistant, une autorité explicite et une exécution vérifiable. Conçu par l'équipe derrière ALUX.",
  "pageTitle": "ConcurSys — Infrastructure d'exécution pour agents",
  "navLabel": "Navigation principale",
  "languageLabel": "Choisir la langue",
  "emailSubject": "Services techniques ConcurSys",
  "emailBody": "Présentation du projet :\n\nDéfi technique :\n\nPérimètre et calendrier envisagés :\n"
 },
 "pageCopy": {
  "home": "Accueil",
  "overview": "Vue d'ensemble",
  "learnMore": "En savoir plus",
  "related": "Technologies associées",
  "serviceDetail": "Détails du service",
  "technologyDetail": "Détails de la technologie",
  "approach": "Notre méthode",
  "contactIntro": "Présentez le système que vous construisez, le défi d'exécution auquel vous faites face et le périmètre que vous souhaitez aborder. Ce contexte nous permettra de déterminer si notre travail d'ingénierie répond à vos besoins.",
  "projectLabel": "Projet",
  "emailLabel": "E-mail",
  "challengeLabel": "Défi technique",
  "scopeLabel": "Périmètre à aborder",
  "prepareEmail": "Préparer l'e-mail",
  "emailHint": "Votre messagerie s'ouvre avec un brouillon. Rien n'est envoyé automatiquement.",
  "required": "Veuillez remplir les champs obligatoires.",
  "servicesIntro": "Nous intervenons sur la couche d'exécution : de l'ingénierie des environnements d'exécution et du bytecode jusqu'à la coordination et à la gestion d'état requises entre les machines participantes. Chaque mission commence par les contraintes du système et le comportement précis à construire ou à examiner.",
  "technologyIntro": "Nos travaux couvrent l'exécution du langage et du bytecode, la coordination des processus, les frontières d'autorité, les modèles d'exécution durable et l'accord distribué. Ces technologies nourrissent notre pratique d'ingénierie ; chaque système doit néanmoins être évalué au regard de ses propres exigences et de son environnement de déploiement.",
  "companyIntro": "ConcurSys est l'entreprise technologique américaine derrière ALUX. Nous développons les technologies de langage, d'environnement d'exécution et de consensus sous-jacentes, et mettons cette expérience d'ingénierie au service des équipes qui travaillent sur l'ordinateur mondial.",
  "serviceDetails": {
   "agent": {
    "eyebrow": "EXÉCUTION D'AGENTS SUR CHAÎNE PUBLIQUE",
    "title": "Un accompagnement technique pour l'exécution on-chain.",
    "intro": "Nous aidons les équipes à raisonner sur les agents qui s'exécutent sur des chaînes publiques : coordination de l'exécution, continuité de l'état et représentation de l'autorité à la frontière de l'environnement d'exécution. Le travail est cadré selon les exigences du système sous-jacent.",
    "questionsTitle": "Les questions que nous traitons",
    "questions": [
     "Quelles étapes d'exécution doivent se dérouler on-chain, et quelles dépendances se situent hors de la chaîne ?",
     "Quel état doit être préservé entre les blocs, et dans quelles conditions l'exécution doit-elle reprendre ?",
     "Comment les capacités et les frontières d'accès sont-elles représentées et appliquées dans les interactions avec l'environnement d'exécution ?"
    ],
    "deliverablesTitle": "Livrables d'ingénierie possibles",
    "deliverables": [
     "Une architecture d'exécution et une cartographie des frontières alignées sur les exigences exprimées du système.",
     "Un plan d'intégration à l'environnement d'exécution décrivant les interfaces d'état, de coordination et d'autorité concernées.",
     "Des tests d'exécution ciblés et des notes techniques pour les scénarios et cas de défaillance convenus."
    ]
   },
   "vm": {
    "eyebrow": "INGÉNIERIE DE MACHINES VIRTUELLES",
    "title": "Des environnements de bytecode taillés pour le système.",
    "intro": "Nous travaillons sur l'exécution du bytecode, la coordination des processus et la sémantique de l'environnement d'exécution. Le travail peut porter sur un environnement TVM concret, sa chaîne d'outils ou le comportement requis à la frontière entre l'environnement d'exécution et le système qui l'entoure.",
    "questionsTitle": "Les questions que nous traitons",
    "questions": [
     "Quelles opérations de bytecode et quelle sémantique d'exécution l'environnement d'exécution doit-il prendre en charge ?",
     "Comment les processus concurrents doivent-ils communiquer au moyen de canaux et d'événements de communication ?",
     "Quelles capacités de chaîne d'outils, d'observabilité, de rejeu ou de diagnostic faut-il pour inspecter l'exécution ?"
    ],
    "deliverablesTitle": "Livrables d'ingénierie possibles",
    "deliverables": [
     "Une conception ou un plan d'implémentation de l'environnement d'exécution aligné sur la sémantique d'exécution requise.",
     "Des recommandations d'intégration pour les frontières du bytecode, du compilateur et de la chaîne d'outils, des processus et de la communication.",
     "Un plan de diagnostic ou de test ciblé couvrant des chemins d'exécution représentatifs et des cas limites."
    ]
   },
   "distributed": {
    "eyebrow": "SYSTÈMES DISTRIBUÉS",
    "title": "La coordination entre machines participantes.",
    "intro": "Nous étudions la concurrence, le rejeu, le comportement des protocoles et la gestion des défaillances entre machines. Le travail s'ancre dans le modèle de coordination du système et les propriétés à valider, sans présumer de garanties au-delà de la conception convenue.",
    "questionsTitle": "Les questions que nous traitons",
    "questions": [
     "Comment les mises à jour concurrentes sont-elles ordonnées, liées ou réconciliées entre participants ?",
     "Quelles informations faut-il enregistrer pour reproduire une exécution de façon déterministe ?",
     "Comment le système doit-il se comporter lorsqu'un participant, un message ou une dépendance est retardé ou indisponible ?"
    ],
    "deliverablesTitle": "Livrables d'ingénierie possibles",
    "deliverables": [
     "Une architecture système ou protocolaire décrivant les frontières de coordination et de transition d'état.",
     "Des scénarios de tests distribués pour la concurrence, le rejeu et certaines conditions de défaillance.",
     "Des constats d'implémentation et d'intégration documentés pour le périmètre convenu."
    ]
   }
  },
  "techDetails": {
   "glvm": {
    "focusTitle": "Une architecture de niveau système en développement",
    "points": [
     "GLVM est une architecture d'exécution évolutive, développée à travers les TVM participantes.",
     "Elle définit un modèle logique partagé au-dessus des moteurs de bytecode individuels ; elle n'est pas présentée comme un produit fini et disponible à grande échelle.",
     "Un échange technique peut clarifier les frontières de l'environnement d'exécution, les hypothèses de coordination et les besoins d'intégration d'un système donné."
    ]
   },
   "tvm": {
    "focusTitle": "Exécution concrète du bytecode et coordination des processus",
    "points": [
     "TVM est le moteur de bytecode d'une machine participante et exécute le bytecode Tolang.",
     "Les canaux et les événements de communication constituent les mécanismes décrits pour coordonner les processus concurrents.",
     "Le travail sur l'environnement d'exécution peut porter sur la sémantique d'exécution, l'intégration de la chaîne d'outils, le diagnostic et les frontières des processus."
    ]
   },
   "blockgit": {
    "focusTitle": "Un modèle en graphe pour l'historique des blocs concurrents",
    "points": [
     "BlockGit est le protocole de consensus développé pour ALUX.",
     "Sa conception organise les blocs concurrents dans un graphe orienté acyclique doté de liens forts et faibles.",
     "Des règles de fusion coordonnent l'historique des blocs et les transitions d'état ; le comportement du protocole doit être évalué au regard des exigences du système."
    ]
   },
   "ocap": {
    "focusTitle": "L'autorité exprimée par des références",
    "points": [
     "La conception par capacités d'objet s'appuie sur des références infalsifiables pour définir ce à quoi une tâche peut accéder.",
     "Pour les interactions natives TVM, l'environnement d'exécution applique ces frontières d'autorité.",
     "Les services externes et les environnements hébergés exigent leurs propres contrôles d'accès et une revue d'intégration."
    ]
   },
   "durable": {
    "focusTitle": "Un travail avec état qui peut attendre et reprendre",
    "points": [
     "Une chaîne publique peut offrir un environnement durable pour l'exécution des agents.",
     "L'état et les continuations préservés permettent à un travail d'attendre ses dépendances d'un bloc à l'autre.",
     "Les conditions de reprise, les besoins de rejeu et les frontières de finalisation doivent être définis pour chaque système."
    ]
   }
  }
 },
 "technologyCopy": {
  "mapTitle": "Au cœur de la pile d'exécution des agents.",
  "mapIntro": "Suivez le chemin qui mène du langage à l'environnement d'exécution, à l'autorité, à l'état et au consensus. Découvrez l'apport de chaque couche à l'exécution d'un agent, et la manière dont elles s'articulent.",
  "mapHint": "Sélectionnez un module pour voir ses responsabilités et les composants qui lui sont liés.",
  "layers": [
   "Point d'entrée du développement",
   "Exécution concurrente",
   "Transactions et vérification",
   "Consensus et réseau",
   "Trajectoire d'évolution"
  ],
  "current": "Fondation actuelle",
  "evolving": "En évolution continue",
  "roadmap": "Feuille de route",
  "role": "Rôle du module",
  "connections": "Modules liés",
  "details": "Détails techniques",
  "team": "Équipe",
  "modules": {
   "tolang": {
    "name": "Tolang",
    "title": "Un langage et un compilateur pour services concurrents",
    "body": "ConcurSys développe Tolang et son compilateur pour exprimer des processus concurrents ciblant l'environnement d'exécution TVM.",
    "help": "Conception du langage, comportement du compilateur et chemin du code source jusqu'à l'exécution.",
    "points": [
     "Compile les programmes Tolang en bytecode destiné à TVM.",
     "Modélise le travail sous forme de processus concurrents capables de communiquer par des canaux.",
     "Relie la logique de service au niveau source à l'exécution TVM et à la chaîne d'outils du développeur."
    ],
    "status": "current"
   },
   "replay": {
    "name": "ReplayTrie & BranchId",
    "title": "Des preuves rejouables pour une validation déterministe",
    "body": "L'environnement d'exécution enregistre les choix d'exécution susceptibles de varier, afin que les validateurs puissent reproduire le chemin accepté.",
    "help": "Exigences de rejeu, preuves d'exécution et reproduction côté validateur.",
    "points": [
     "BranchId identifie la branche d'exécution associée au travail enregistré.",
     "Les enregistrements COMM conservent les événements de communication et les choix pertinents.",
     "ReplayTrie organise les preuves servant à reproduire l'exécution de façon déterministe."
    ],
    "status": "current"
   },
   "atomicity": {
    "name": "Atomicité inter-blocs",
    "title": "Une transaction qui peut attendre et reprendre",
    "body": "Une transaction ALUX peut se suspendre à une frontière de bloc, se poursuivre dans un bloc ultérieur et garder ses modifications d'état ALUX en attente jusqu'à la validation finale ou l'annulation.",
    "help": "Flux de travail de longue durée, frontières d'isolation et comportement de validation ou d'annulation.",
    "points": [
     "Les segments et les partitions préservent la progression aux points de suspension.",
     "L'isolation et le rejeu permettent la reprise et la validation d'un bloc à l'autre.",
     "L'atomicité couvre l'état ALUX en attente ; les effets sur le monde extérieur, comme un appel d'API ou une action physique, ne sont pas annulés automatiquement."
    ],
    "status": "current"
   },
   "evm": {
    "name": "EVM & TSAC",
    "title": "Des charges EVM prises en charge, coordonnées par TVM",
    "body": "ALUX prend actuellement en charge certaines charges de travail EVM dans des environnements d'exécution isolés. TSAC coordonne avec TVM les opérations pertinentes sur l'état global ; la compatibilité dépend du périmètre pris en charge.",
    "help": "Frontières d'intégration EVM, coordination TSAC et revue de compatibilité des charges de travail.",
    "points": [
     "Chaque instance EVM conserve sa propre pile d'exécution et sa propre mémoire.",
     "TSAC achemine les interactions prises en charge avec l'état global pour les coordonner avec les processus TVM.",
     "L'exécution de WASM en tant qu'invité est prévue ; cela n'implique pas une compatibilité EVM universelle."
    ],
    "status": "current"
   },
   "framework": {
    "name": "Segments · Partitions · Fringe",
    "title": "Structurer l'exécution pour l'ordonnancement et la finalité",
    "body": "Les services du framework scellent les traces d'exécution en segments et en partitions pour la production de blocs ; lorsque BlockGit finalise un fringe, ses blocs concurrents sont fusionnés en une seule transition d'état.",
    "help": "Ordonnancement de l'exécution, gestion des dépendances et passage du travail d'exécution à la production de blocs.",
    "points": [
     "Les segments capturent des portions bornées de la progression de l'exécution.",
     "Les partitions regroupent les segments scellés d'une transaction en vue de leur inclusion dans un bloc.",
     "FringeBuilder applique la fusion de blocs à chaque fringe finalisé par BlockGit."
    ],
    "status": "current"
   },
   "node": {
    "name": "Nœud · RPC · P2P",
    "title": "La surface de l'environnement d'exécution côté réseau",
    "body": "La couche nœud relie l'exécution aux méthodes RPC prises en charge, à la communication entre pairs et au contexte de stockage. Les points d'accès exacts et le comportement opérationnel dépendent de l'implémentation actuelle.",
    "help": "Intégration des nœuds, périmètre RPC pris en charge, communication entre pairs et frontières du stockage.",
    "points": [
     "Expose les méthodes RPC eth_* compatibles Ethereum prises en charge.",
     "Le gossip P2P achemine les messages réseau entre les pairs participants.",
     "Le contexte de stockage du nœud et les surfaces de services statiques entourent l'environnement d'exécution."
    ],
    "status": "current"
   },
   "tooling": {
    "name": "Compilateur · LSP · Playground",
    "title": "Inspecter et éprouver la logique de service en développement",
    "body": "Les diagnostics du compilateur, le serveur de langage et le Playground aident les développeurs à examiner les programmes Tolang avant de les connecter à un nœud.",
    "help": "Intégration du compilateur, diagnostics, flux de travail d'édition et évaluation précoce de l'exécution.",
    "points": [
     "Les diagnostics du compilateur signalent les problèmes tout au long du chemin du source au bytecode.",
     "Les flux de travail LSP permettent une inspection et une édition sensibles au langage.",
     "Les exécutions, l'expansion et le formatage dans le Playground aident à examiner le comportement des services."
    ],
    "status": "current"
   },
   "sharding": {
    "name": "Exécution inter-shards",
    "title": "Atomicité horizontale entre shards",
    "body": "L'objectif de conception est une frontière transactionnelle unique, tout ou rien, couvrant les shards participants. L'exécution inter-shards reste inscrite à la feuille de route.",
    "help": "Coordination future des transactions entre shards et protection contre la visibilité partielle.",
    "points": [
     "Mettre en attente les effets propres à chaque shard sous une même frontière transactionnelle.",
     "Valider ensemble tous les effets participants, ou les annuler ensemble.",
     "Garder l'état intermédiaire inter-shards invisible pour les transactions sans lien."
    ],
    "status": "roadmap"
   },
   "worldos": {
    "name": "World OS et interfaces client",
    "title": "Étendre le modèle d'exécution à de nouveaux environnements",
    "body": "Une couche World OS programmable et le déploiement sur les appareils clients sont des orientations à plus long terme pour le système. Ils figurent à la feuille de route et ne sont pas des capacités actuelles de l'environnement d'exécution.",
    "help": "Futurs modèles de déploiement et abstractions de niveau système nécessaires pour les prendre en charge.",
    "points": [
     "GLVM est le modèle de niveau système en évolution à travers les TVM participantes.",
     "Le déploiement de TVM sur les appareils clients reste prévu.",
     "Une couche World OS programmable reste une orientation de la feuille de route."
    ],
    "status": "roadmap"
   }
  },
  "menuGroups": [
   "Langage et environnement d'exécution",
   "Exécution et sécurité",
   "Consensus et intégration",
   "Axes de recherche"
  ]
 },
 "teamCopy": {
  "title": "Les personnes derrière les systèmes",
  "intro": "ConcurSys réunit une expérience approfondie des systèmes de risque quantitatif et du calcul concurrent. Cette expertise nourrit les technologies d'environnement d'exécution, de langage et de consensus que nous construisons.",
  "frank": {
   "role": "Fondateur et président",
   "bio": [
    "Frank He (Atticbee) est chercheur et entrepreneur dans le domaine de la blockchain ; ses travaux incluent la conception et l'implémentation de machines virtuelles concurrentes. Avant ConcurSys, il a passé plus de 15 ans comme analyste quantitatif et développeur senior chez Bloomberg, Lehman Brothers et Barclays Capital, où il a construit des systèmes de calcul de risque hautement évolutifs.",
    "Chez ConcurSys, il met cette expérience au service de l'architecture des systèmes concurrents. Ses travaux réunissent l'environnement d'exécution, le langage de programmation et les technologies de consensus développés pour ALUX en une fondation d'ingénierie cohérente."
   ],
   "focus": [
    "Systèmes concurrents",
    "Calcul de risque",
    "Architecture d'exécution"
   ]
  },
  "tomislav": {
   "role": "CTO",
   "bio": [
    "L'intérêt de Tomislav pour l'informatique est né à cinq ans avec une calculatrice en carton, puis à dix ans avec la programmation en assembleur sur C64c. Plus de dix ans dans l'électronique et vingt ans de programmation dans des langages comme JavaScript et Haskell ont façonné son approche : explorer le modèle, comprendre la mécanique, puis construire.",
    "Ses travaux sur la concurrence s'appuient sur le calcul de processus. Chez ConcurSys, il relie les modèles formels des processus et de la communication à l'ingénierie concrète des environnements d'exécution, et apporte aux fondations d'ALUX la même curiosité et le même engagement profond dans les projets."
   ],
   "focus": [
    "Calcul de processus",
    "Concurrence",
    "Ingénierie d'exécution"
   ]
  }
 },
 "joinCopy": {
  "nav": "Nous rejoindre",
  "title": "Construisez les fondations avec nous.",
  "intro": "Les systèmes concurrents, les langages de programmation ou l'exécution distribuée vous intéressent ? Présentez-vous et dites-nous à quels travaux d'ingénierie vous souhaitez contribuer.",
  "label": "Centres d'intérêt techniques",
  "body": "Parlez-nous d'un système que vous avez construit, d'un problème difficile que vous avez étudié ou d'une contribution open source dont vous êtes fier. Ajoutez des liens qui nous aident à comprendre votre travail.",
  "cta": "Présentez-vous",
  "subject": "Travailler avec ConcurSys",
  "email": "À propos de moi :\n\nCentres d'intérêt techniques :\n\nTravaux choisis et liens :\n"
 },
 "agentCopy": {
  "eyebrow": "Infrastructure pour agents",
  "title": "Les fondations<br>des agents.",
  "body": "Ingénierie du langage, de l'environnement d'exécution et du consensus pour des agents qui exigent un état persistant, une autorité explicite et une exécution vérifiable. Conçu par l'équipe derrière ALUX.",
  "rails": [
   "État persistant",
   "Autorité explicite",
   "Exécution coordonnée",
   "Validation rejouable"
  ],
  "servicesTitle": "Un agent a besoin de fondations.<br>Nous les concevons.",
  "servicesIntro": "Du langage qu'exécute un agent au réseau qui vérifie son travail, nous construisons les couches qui rendent l'exécution possible.",
  "mapTitle": "Au cœur de la pile d'exécution des agents.",
  "mapIntro": "Suivez le chemin qui mène du langage à l'environnement d'exécution, à l'autorité, à l'état et au consensus. Découvrez l'apport de chaque couche à l'exécution d'un agent, et la manière dont elles s'articulent.",
  "bridgeTitle": "De l'intention de l'agent<br>au comportement du système.",
  "bridgeBody": "Un modèle peut proposer une action. Le système d'exécution doit définir ce qui peut s'exécuter, ce à quoi l'action peut accéder, comment l'état survit à l'attente et comment les résultats font l'objet d'un accord. Telles sont les questions d'ingénierie qui sous-tendent nos travaux sur ALUX.",
  "coreLabels": [
   "Langage concurrent natif",
   "Moteur d'exécution d'agents",
   "Autorité explicite",
   "Consensus concurrent",
   "Un modèle d'exécution logique unique"
  ]
 },
 "agentRelevance": {
  "label": "Pour les systèmes d'agents",
  "modules": {
   "glvm": "GLVM est un modèle logique partagé, en évolution, couvrant les TVM participantes pour coordonner l'exécution au niveau système.",
   "tolang": "Tolang exprime une logique de service concurrente qui peut être compilée pour être exécutée par TVM.",
   "tvm": "TVM exécute le bytecode et coordonne la communication entre processus concurrents.",
   "ocap": "Les capacités d'objet explicitent les objets et les ressources qu'un agent peut atteindre.",
   "durable": "L'exécution durable préserve l'état et les continuations afin que le travail puisse attendre ses dépendances et reprendre plus tard.",
   "atomicity": "L'atomicité inter-blocs met l'état ALUX en attente jusqu'à la validation ou l'annulation ; les effets de bord externes ne sont pas annulés automatiquement.",
   "replay": "Le rejeu fournit une base pour relancer une exécution de façon déterministe et en vérifier les choix enregistrés.",
   "framework": "Les segments, les partitions et les fringes organisent les frontières d'exécution, de reprise et de finalisation.",
   "blockgit": "BlockGit coordonne l'historique des blocs concurrents et l'état entre participants distribués.",
   "evm": "EVM/TSAC permet aux contrats EVM existants de participer grâce à la coordination assurée par TVM.",
   "node": "Les interfaces des nœuds relaient les requêtes des agents et les consultations d'état ; le P2P assure la propagation entre nœuds.",
   "tooling": "Le compilateur, le LSP et le Playground aident à construire et à inspecter la logique des programmes.",
   "sharding": "L'atomicité inter-shards est un axe de développement pour coordonner le travail des agents entre shards.",
   "worldos": "World OS et le déploiement sur client sont des orientations de la feuille de route pour un environnement d'exécution programmable."
  }
 },
 "tolangCopy": {
  "eyebrow": "Un langage natif pour les blockchains de nouvelle génération",
  "title": "Tolang offre aux agents une façon native d'exprimer le travail concurrent.",
  "intro": "Conçu pour les systèmes blockchain de nouvelle génération, Tolang relie les flux de travail des agents à la couche d'exécution : processus concurrents, communication typée et chemin direct vers l'environnement d'exécution TVM.",
  "cta": "Découvrir la chaîne d'outils Tolang",
  "pipeline": [
   "Source Tolang",
   "Compilateur tolangc",
   "Bytecode .tox",
   "Processus TVM"
  ],
  "features": [
   {
    "title": "La concurrence comme primitive du langage",
    "body": "Exprimez le travail sous forme de processus capables de bifurquer, d'attendre, de reprendre et de progresser ensemble. Les systèmes d'agents disposent ainsi d'un moyen clair de décrire des tâches qui ne se réduisent pas à un seul appel séquentiel."
   },
   {
    "title": "Communication typée entre processus",
    "body": "Les processus échangent des données via des canaux typés en espace de tuples plutôt que par mémoire partagée. Les descripteurs de canaux et les types comportementaux aident à détecter tôt certains usages incorrects ; des règles d'exécution régissent le cycle de vie des canaux."
   },
   {
    "title": "Une voie vers les services persistants",
    "body": "Tolang se compile en bytecode TVM, où les processus peuvent se poursuivre au-delà des attentes et se coordonner par des canaux. Le langage relie la logique de service à l'environnement d'exécution ; les garanties de persistance et de transaction dépendent du système ALUX environnant."
   },
   {
    "title": "Une boucle de développement pratique",
    "body": "API du compilateur, diagnostics LSP, formatage, expansion et exécutions dans le Playground aident les équipes à inspecter et à faire évoluer le comportement des services, du code source jusqu'à l'exécution."
   }
  ]
 },
 "heroExecutionCopy": {
  "eyebrow": "Fondations de l'exécution des agents",
  "title": "De l'intention<br>à l'exécution.",
  "body": "ConcurSys construit les technologies de langage, d'environnement d'exécution et de consensus qui sous-tendent ALUX. Ensemble, elles fournissent les couches d'ingénierie permettant d'exprimer, de coordonner et d'examiner le travail des agents.",
  "diagramLabel": "Modèle d'exécution",
  "agents": "Tâches d'agents",
  "service": "Service Tolang",
  "scope": "Autorité OCAP",
  "runtime": "Processus TVM",
  "proof": "ReplayTrie + BlockGit",
  "states": [
   {
    "label": "01 / DÉFINIR",
    "title": "Exprimer le travail concurrent.",
    "body": "Tolang s'appuie sur le calcul de processus pour décrire des services qui répartissent le travail, communiquent et progressent de manière concurrente."
   },
   {
    "label": "02 / AUTORISER",
    "title": "Rendre l'autorité explicite.",
    "body": "Les capacités d'objet s'appuient sur des références infalsifiables pour définir les objets et les ressources auxquels une tâche peut accéder."
   },
   {
    "label": "03 / EXÉCUTER",
    "title": "Coordonner, attendre, reprendre.",
    "body": "TVM exécute des processus qui communiquent par des canaux ; l'état d'exécution préservé peut attendre des dépendances et reprendre lorsqu'elles sont prêtes."
   },
   {
    "label": "04 / VÉRIFIER",
    "title": "Inspecter l'exécution et l'accord.",
    "body": "ReplayTrie fournit une base pour rejouer l'exécution, tandis que BlockGit coordonne l'historique des blocs concurrents et l'état."
   }
  ],
  "mapTitle": "Explorer la pile d'exécution.",
  "mapBody": "Découvrez comment le langage, l'autorité, l'environnement d'exécution et le consensus s'articulent.",
  "mapLink": "Explorer l'architecture",
  "demo": {
   "label": "Modèle d'exécution interactif",
   "run": "Lancer une tâche",
   "pause": "Pause",
   "continue": "Continuer",
   "resume": "Reprendre la tâche",
   "replay": "Relancer",
   "reset": "Réinitialiser",
   "scenario": "Scénario de tâche",
   "allowed": "Dans le périmètre d'autorité",
   "denied": "Hors du périmètre d'autorité",
   "status": {
    "idle": "Prêt à explorer",
    "defined": "Tolang · tâches concurrentes définies",
    "authorized": "OCAP · accès autorisé",
    "waiting": "TVM · en attente d'une dépendance",
    "resumed": "TVM · exécution reprise",
    "verified": "ReplayTrie + BlockGit · étape de validation",
    "denied": "OCAP · accès refusé"
   },
   "deniedTitle": "L'autorité est une frontière.",
   "deniedBody": "Cet exemple demande une ressource hors des capacités qui lui ont été accordées. La tâche s'arrête à la frontière des permissions.",
   "waitTitle": "Attendre ne veut pas dire recommencer.",
   "waitBody": "Le modèle attend une dépendance externe. Reprenez la tâche pour voir l'exécution se poursuivre à partir de son état préservé.",
   "doneTitle": "De l'exécution à la vérification.",
   "doneBody": "Le modèle atteint la validation par rejeu et le consensus. ReplayTrie fournit les preuves d'exécution ; BlockGit coordonne l'historique concurrent."
  }
 },
 "stackCopy": {
  "relation": "La société de services technologiques d'ALUX",
  "frame": "Pile d'exécution des agents",
  "builtBy": "Conçu par ConcurSys",
  "layers": {
   "tolang": "Langage",
   "ocap": "Autorité",
   "tvm": "Exécution concurrente",
   "blockgit": "Consensus",
   "glvm": "VM logique"
  },
  "tiles": {
   "tolang": [
    "Processus",
    "Canaux typés",
    "Motifs de jointure",
    "tolangc → .tox"
   ],
   "ocap": [
    "Réf. infalsifiables",
    "Canaux gardés",
    "Atténuation",
    "Délégation"
   ]
  },
  "tvmCaption": "Espace de tuples / événements COMM / attente et reprise",
  "bgCaption": "Blocs DAG / liens faibles / finalité par fringe",
  "substrates": [
   "Nœuds blockchain",
   "Serveurs cloud",
   "Appareils personnels"
  ],
  "trace": "Trace de tâche",
  "traceIdle": "Lancez une tâche pour la suivre à travers chaque couche.",
  "readTitle": "Lire le diagramme.",
  "readIntro": "Chaque strate est une couche de l'environnement d'exécution ALUX que construit ConcurSys. Sélectionnez une couche, ou lancez une tâche et regardez-la les traverser.",
  "aluxTitle": "Nous concevons ALUX. Les mêmes fondations peuvent propulser votre système.",
  "aluxLab": "Runtime Lab",
  "aluxCode": "GitHub",
  "servicesLabel": "Services",
  "codeCaption": "Deux agents rendent compte en parallèle. La jointure ne se déclenche que lorsque les deux résultats existent."
 }
});
