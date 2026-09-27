// Spanish copy. Loaded after all base copy files.
(function(d){for(const k in d)window[k].es=d[k];})({
 "siteCopy": {
  "navServices": "Servicios",
  "navTechnology": "Tecnología",
  "navCompany": "Empresa",
  "talk": "Hablemos",
  "heroTitle": "Cimientos<br>para agentes.",
  "heroBody": "Ingeniería de lenguajes, entornos de ejecución y consenso para agentes que necesitan estado persistente, autoridad explícita y ejecución verificable. Desarrollada por el equipo detrás de ALUX.",
  "discuss": "Hablemos de su proyecto",
  "explore": "Conozca nuestra experiencia",
  "railAgent": "Ejecución de agentes en cadenas públicas",
  "railVM": "Ingeniería de máquinas virtuales",
  "railDistributed": "Sistemas distribuidos",
  "serviceLabel": "01 / SERVICIOS",
  "servicesTitle": "Un agente necesita cimientos.<br>Nosotros los construimos.",
  "servicesIntro": "Desde el lenguaje en el que se ejecuta un agente hasta la red que verifica su trabajo, construimos las capas que hacen posible la ejecución.",
  "deliverables": "ALCANCE DE INGENIERÍA",
  "services": [
   {
    "id": "agent",
    "title": "Ejecución de agentes<br>en cadenas públicas",
    "body": "Soporte de ingeniería para agentes que necesitan estado persistente, ejecución coordinada y autoridad explícita en cadenas públicas.",
    "scope": "Arquitectura · Integración del entorno de ejecución · Pruebas de ejecución"
   },
   {
    "id": "vm",
    "title": "Ingeniería de<br>máquinas virtuales",
    "body": "Entornos de ejecución de bytecode, coordinación de procesos y semántica de ejecución diseñados en torno a su sistema.",
    "scope": "Diseño de VM · Integración de la cadena de herramientas · Diagnóstico del entorno de ejecución"
   },
   {
    "id": "distributed",
    "title": "Sistemas<br>distribuidos",
    "body": "Concurrencia, reproducción y coordinación entre las máquinas participantes.",
    "scope": "Diseño de sistemas · Protocolos de consenso · Análisis de fallos"
   }
  ],
  "techLabel": "02 / TECNOLOGÍA",
  "techTitle": "Un computador global.<br>Muchos retos de ingeniería.",
  "techIntro": "Tecnología propia, desde el entorno de ejecución de bytecode hasta la capa de consenso.",
  "durableTab": "Ejecución duradera",
  "conceptual": "Arquitectura conceptual",
  "helpTitle": "Cómo podemos ayudar",
  "architectureCTA": "Hablemos de su arquitectura",
  "tech": {
   "glvm": {
    "name": "MÁQUINA VIRTUAL LÓGICA GLOBAL",
    "title": "Un modelo lógico entre máquinas.",
    "body": "GLVM es la arquitectura de ejecución a nivel de sistema que estamos desarrollando sobre las TVM participantes. Define un modelo lógico compartido por encima de cada motor de bytecode.",
    "help": "Arquitectura de ejecución, límites del entorno de ejecución y diseño de integración."
   },
   "tvm": {
    "name": "MÁQUINA VIRTUAL DE ESPACIO DE TUPLAS",
    "title": "Donde el bytecode se convierte en ejecución.",
    "body": "TVM es el motor de bytecode concreto de cada máquina participante. Ejecuta bytecode de Tolang y coordina procesos concurrentes mediante canales y eventos de comunicación.",
    "help": "Ingeniería de entornos de ejecución de bytecode, coordinación de procesos, integración de la cadena de herramientas y diagnóstico."
   },
   "blockgit": {
    "name": "PROTOCOLO DE CONSENSO BLOCKGIT",
    "title": "Consenso para trabajo concurrente.",
    "body": "BlockGit es nuestro protocolo de consenso para ALUX. Organiza bloques concurrentes en un grafo acíclico dirigido y usa enlaces fuertes y débiles con reglas de fusión para coordinar el historial de bloques y las transiciones de estado.",
    "help": "Arquitectura de consenso, implementación del protocolo, integración y pruebas distribuidas."
   },
   "ocap": {
    "name": "CAPACIDADES DE OBJETO",
    "title": "Haga explícita la autoridad.",
    "body": "Las capacidades de objeto usan referencias infalsificables para definir a qué puede acceder una tarea. En las interacciones nativas de TVM, el entorno de ejecución impone estos límites; los servicios externos y los entornos alojados necesitan sus propios controles.",
    "help": "Límites de capacidad, diseño de mínima autoridad y revisiones de integración."
   },
   "durable": {
    "name": "EJECUCIÓN DURADERA",
    "title": "Lleve la ejecución hacia adelante.",
    "body": "Una cadena pública puede ofrecer un entorno duradero para agentes. El estado de ejecución y las continuaciones preservados permiten que el trabajo espere a lo largo de varios bloques y se reanude cuando sus dependencias estén listas.",
    "help": "Persistencia de estado, flujos de espera y reanudación, requisitos de reproducción y límites de finalización."
   }
  },
  "diagram": {
   "shared": "Modelo lógico de ejecución compartido",
   "node": "Nodo de ejecución",
   "source": "Tolang",
   "bytecode": "Bytecode",
   "runtime": "TVM",
   "process": "Proceso",
   "channel": "Canal / COMM",
   "task": "Tarea",
   "capability": "Referencia de capacidad",
   "allowed": "Objeto alcanzable",
   "unreachable": "Sin referencia",
   "boundary": "Límite de autoridad nativo de TVM",
   "blockgitCaption": "Bloques concurrentes / enlaces / reglas de fusión",
   "stages": [
    "Ejecutar",
    "Preservar",
    "Esperar",
    "Reanudar",
    "Finalizar"
   ],
   "steps": [
    "Los procesos concurrentes inician su trabajo.",
    "Se preservan el estado de ejecución y las continuaciones.",
    "El trabajo espera una dependencia a lo largo de varios bloques.",
    "La continuación se reanuda cuando su dependencia está lista.",
    "La ejecución alcanza su límite de finalización."
   ]
  },
  "tolangDetail": "Un lenguaje y un compilador para procesos concurrentes, orientados al bytecode de TVM.",
  "replayDetail": "Una estructura del entorno de ejecución que registra las decisiones de ejecución necesarias para una reproducción determinista.",
  "originalLabel": "INGENIERÍA DE SISTEMAS PROPIA",
  "originalTitle": "Del lenguaje al consenso.",
  "originalBody": "ConcurSys desarrolla la tecnología detrás de ALUX: Tolang, el entorno de ejecución de bytecode TVM, ReplayTrie y el protocolo de consenso BlockGit. Nuestro trabajo une el diseño de lenguajes, la ejecución concurrente y el acuerdo distribuido.",
  "originalNote": "GLVM es la arquitectura a nivel de sistema en evolución. La ejecución entre fragmentos y otros entornos de despliegue siguen siendo líneas de desarrollo.",
  "play": "Reproducir secuencia",
  "pause": "Pausar secuencia",
  "replay": "Repetir secuencia",
  "next": "Paso siguiente",
  "reset": "Reiniciar",
  "step": "PASO",
  "companyLabel": "03 / EMPRESA",
  "companyTitle": "Creado por las personas detrás de la tecnología.",
  "companyBody": "ConcurSys es la empresa tecnológica estadounidense detrás de ALUX. Llevamos nuestra propia ingeniería de lenguajes, entornos de ejecución y consenso a servicios técnicos para equipos que construyen en los cimientos del computador global.",
  "aluxLink": "Conozca ALUX",
  "process": [
   [
    "Definir el problema",
    "Identificamos sus requisitos de ejecución, restricciones y límites del sistema."
   ],
   [
    "Construir los cimientos",
    "Acordamos el alcance y luego diseñamos e implementamos los componentes subyacentes."
   ],
   [
    "Validar el sistema",
    "Probamos el comportamiento acordado, revisamos los casos de fallo y documentamos la entrega."
   ]
  ],
  "contactLabel": "04 / CONSTRUYAMOS",
  "contactTitle": "Tráiganos<br>el problema difícil.",
  "contactBody": "Cuéntenos qué está construyendo, dónde se complica la ejecución y qué necesita funcionar.",
  "contactCTA": "Iniciar una conversación técnica",
  "copyEmail": "Copiar dirección de correo",
  "copied": "Dirección de correo copiada.",
  "copyFailed": "Seleccione la dirección de arriba para copiarla.",
  "footerLine": "Servicios técnicos para el computador global.",
  "menuOpen": "Abrir navegación",
  "menuClose": "Cerrar navegación",
  "skip": "Ir al contenido",
  "artAlt": "Una escultura abstracta de rutas computacionales interconectadas",
  "meta": "Ingeniería de lenguajes, entornos de ejecución y consenso para agentes que necesitan estado persistente, autoridad explícita y ejecución verificable. Desarrollada por el equipo detrás de ALUX.",
  "pageTitle": "ConcurSys — Infraestructura de ejecución de agentes",
  "navLabel": "Navegación principal",
  "languageLabel": "Seleccionar idioma",
  "emailSubject": "Servicios técnicos de ConcurSys",
  "emailBody": "Descripción del proyecto:\n\nReto técnico:\n\nAlcance y plazos previstos:\n"
 },
 "pageCopy": {
  "home": "Inicio",
  "overview": "Resumen",
  "learnMore": "Más información",
  "related": "Tecnología relacionada",
  "serviceDetail": "Detalles del servicio",
  "technologyDetail": "Detalles de la tecnología",
  "approach": "Cómo trabajamos",
  "contactIntro": "Cuéntenos qué sistema está construyendo, qué reto de ejecución enfrenta y qué alcance le gustaría tratar. Con ese contexto podremos determinar si nuestro trabajo de ingeniería se ajusta a sus necesidades.",
  "projectLabel": "Proyecto",
  "emailLabel": "Correo electrónico",
  "challengeLabel": "Reto técnico",
  "scopeLabel": "Alcance a tratar",
  "prepareEmail": "Preparar correo",
  "emailHint": "Se abrirá su aplicación de correo con un borrador. No se enviará automáticamente.",
  "required": "Complete los campos obligatorios.",
  "servicesIntro": "Trabajamos en la capa de ejecución: desde la ingeniería de entornos de ejecución y bytecode hasta la coordinación y la gestión de estado necesarias entre las máquinas participantes. Cada proyecto parte de las restricciones del sistema y del comportamiento concreto que hay que construir o examinar.",
  "technologyIntro": "Nuestro trabajo abarca la ejecución de lenguajes y bytecode, la coordinación de procesos, los límites de autoridad, los patrones de ejecución duradera y el acuerdo distribuido. Estas tecnologías orientan nuestra práctica de ingeniería; aun así, cada sistema debe evaluarse según sus propios requisitos y entorno de despliegue.",
  "companyIntro": "ConcurSys es la empresa tecnológica estadounidense detrás de ALUX. Desarrollamos las tecnologías subyacentes de lenguaje, entorno de ejecución y consenso, y aplicamos esa experiencia de ingeniería a servicios técnicos para equipos que trabajan en el computador global.",
  "serviceDetails": {
   "agent": {
    "eyebrow": "EJECUCIÓN DE AGENTES EN CADENAS PÚBLICAS",
    "title": "Soporte de ingeniería para la ejecución on-chain.",
    "intro": "Ayudamos a los equipos a analizar agentes que se ejecutan en cadenas públicas: cómo se coordina la ejecución, cómo se conserva el estado y cómo se representa la autoridad en el límite del entorno de ejecución. El trabajo se ajusta a los requisitos del sistema subyacente.",
    "questionsTitle": "Preguntas que abordamos",
    "questions": [
     "¿Qué pasos de ejecución deben ocurrir on-chain y qué dependencias quedan fuera de la cadena?",
     "¿Qué estado debe preservarse entre bloques y en qué condiciones debe reanudarse la ejecución?",
     "¿Cómo se representan e imponen las capacidades y los límites de acceso en las interacciones con el entorno de ejecución?"
    ],
    "deliverablesTitle": "Posibles resultados de ingeniería",
    "deliverables": [
     "Una arquitectura de ejecución y un mapa de límites vinculados a los requisitos declarados del sistema.",
     "Un plan de integración del entorno de ejecución que describe las interfaces relevantes de estado, coordinación y autoridad.",
     "Pruebas de ejecución específicas y notas técnicas para los escenarios y casos de fallo acordados."
    ]
   },
   "vm": {
    "eyebrow": "INGENIERÍA DE MÁQUINAS VIRTUALES",
    "title": "Entornos de ejecución de bytecode a la medida del sistema.",
    "intro": "Trabajamos en la ejecución de bytecode, la coordinación de procesos y la semántica del entorno de ejecución. El foco puede incluir un entorno TVM concreto, su cadena de herramientas o el comportamiento necesario en el límite entre un entorno de ejecución y el sistema que lo rodea.",
    "questionsTitle": "Preguntas que abordamos",
    "questions": [
     "¿Qué operaciones de bytecode y qué semántica de ejecución debe admitir el entorno de ejecución?",
     "¿Cómo deben comunicarse los procesos concurrentes mediante canales y eventos de comunicación?",
     "¿Qué capacidades de cadena de herramientas, observabilidad, reproducción o diagnóstico se necesitan para inspeccionar la ejecución?"
    ],
    "deliverablesTitle": "Posibles resultados de ingeniería",
    "deliverables": [
     "Un diseño o plan de implementación del entorno de ejecución alineado con la semántica de ejecución requerida.",
     "Orientación de integración para los límites de bytecode, compilador y cadena de herramientas, procesos y comunicación.",
     "Un plan de diagnóstico o de pruebas centrado en rutas de ejecución representativas y casos límite."
    ]
   },
   "distributed": {
    "eyebrow": "SISTEMAS DISTRIBUIDOS",
    "title": "Coordinación entre las máquinas participantes.",
    "intro": "Examinamos la concurrencia, la reproducción, el comportamiento de los protocolos y la gestión de fallos entre máquinas. El trabajo se basa en el modelo de coordinación del sistema y en las propiedades que deben validarse, sin suponer garantías más allá del diseño acordado.",
    "questionsTitle": "Preguntas que abordamos",
    "questions": [
     "¿Cómo se ordenan, enlazan o concilian las actualizaciones concurrentes entre participantes?",
     "¿Qué información debe registrarse para reproducir una ejecución de forma determinista?",
     "¿Cómo debe comportarse el sistema cuando un participante, un mensaje o una dependencia se retrasa o no está disponible?"
    ],
    "deliverablesTitle": "Posibles resultados de ingeniería",
    "deliverables": [
     "Una arquitectura de sistema o de protocolo que describe los límites de coordinación y de transición de estado.",
     "Escenarios de pruebas distribuidas para concurrencia, reproducción y condiciones de fallo seleccionadas.",
     "Hallazgos de implementación e integración documentados para el alcance acordado."
    ]
   }
  },
  "techDetails": {
   "glvm": {
    "focusTitle": "Arquitectura a nivel de sistema en desarrollo",
    "points": [
     "GLVM es una arquitectura de ejecución en evolución que se desarrolla sobre las TVM participantes.",
     "Define un modelo lógico compartido por encima de cada motor de bytecode; no se presenta como un producto terminado ni de disponibilidad general.",
     "Una conversación de ingeniería puede aclarar los límites del entorno de ejecución, los supuestos de coordinación y las necesidades de integración de un sistema concreto."
    ]
   },
   "tvm": {
    "focusTitle": "Ejecución concreta de bytecode y coordinación de procesos",
    "points": [
     "TVM es el motor de bytecode de cada máquina participante y ejecuta bytecode de Tolang.",
     "Los canales y los eventos de comunicación son los mecanismos descritos para coordinar procesos concurrentes.",
     "El trabajo sobre el entorno de ejecución puede examinar la semántica de ejecución, la integración de la cadena de herramientas, el diagnóstico y los límites entre procesos."
    ]
   },
   "blockgit": {
    "focusTitle": "Un modelo basado en grafos para el historial de bloques concurrentes",
    "points": [
     "BlockGit es el protocolo de consenso desarrollado para ALUX.",
     "Su diseño organiza los bloques concurrentes en un grafo acíclico dirigido con enlaces fuertes y débiles.",
     "Las reglas de fusión coordinan el historial de bloques y las transiciones de estado; el comportamiento del protocolo debe evaluarse según los requisitos del sistema."
    ]
   },
   "ocap": {
    "focusTitle": "Autoridad expresada mediante referencias",
    "points": [
     "El diseño basado en capacidades de objeto usa referencias infalsificables para definir a qué puede acceder una tarea.",
     "En las interacciones nativas de TVM, el entorno de ejecución impone estos límites de autoridad.",
     "Los servicios externos y los entornos alojados requieren sus propios controles de acceso y una revisión de integración."
    ]
   },
   "durable": {
    "focusTitle": "Trabajo con estado que puede esperar y reanudarse",
    "points": [
     "Una cadena pública puede ofrecer un entorno duradero para la ejecución de agentes.",
     "El estado y las continuaciones preservados permiten que el trabajo espere dependencias a lo largo de varios bloques.",
     "Las condiciones de reanudación, las necesidades de reproducción y los límites de finalización deben definirse para cada sistema."
    ]
   }
  }
 },
 "technologyCopy": {
  "mapTitle": "Dentro de la pila de ejecución de agentes.",
  "mapIntro": "Siga el recorrido del lenguaje al entorno de ejecución, la autoridad, el estado y el consenso. Descubra qué aporta cada capa a la ejecución de un agente y cómo se conectan entre sí.",
  "mapHint": "Seleccione un módulo para ver sus responsabilidades y componentes conectados.",
  "layers": [
   "Punto de entrada al desarrollo",
   "Ejecución concurrente",
   "Transacciones y verificación",
   "Consenso y red",
   "Línea de evolución"
  ],
  "current": "Base actual",
  "evolving": "En evolución continua",
  "roadmap": "Hoja de ruta",
  "role": "Función del módulo",
  "connections": "Módulos conectados",
  "details": "Detalles técnicos",
  "team": "Equipo",
  "modules": {
   "tolang": {
    "name": "Tolang",
    "title": "Un lenguaje y un compilador para servicios concurrentes",
    "body": "ConcurSys desarrolla Tolang y su compilador para expresar procesos concurrentes orientados al entorno de ejecución TVM.",
    "help": "Diseño del lenguaje, comportamiento del compilador y el recorrido del código fuente a la ejecución.",
    "points": [
     "Compila programas Tolang a bytecode orientado a TVM.",
     "Modela el trabajo como procesos concurrentes que se comunican mediante canales.",
     "Conecta la lógica de servicio a nivel de código fuente con la ejecución en TVM y la cadena de herramientas del desarrollador."
    ],
    "status": "current"
   },
   "replay": {
    "name": "ReplayTrie & BranchId",
    "title": "Evidencia reproducible para una validación determinista",
    "body": "El entorno de ejecución registra las decisiones de ejecución que de otro modo podrían variar, para que los validadores reproduzcan la ruta aceptada.",
    "help": "Requisitos de reproducción, evidencia de ejecución y reproducción por parte de los validadores.",
    "points": [
     "BranchId identifica la rama de ejecución asociada al trabajo registrado.",
     "Los registros COMM preservan los eventos de comunicación y las decisiones relevantes.",
     "ReplayTrie organiza la evidencia utilizada para reproducir la ejecución de forma determinista."
    ],
    "status": "current"
   },
   "atomicity": {
    "name": "Atomicidad entre bloques",
    "title": "Una transacción que puede esperar y reanudarse",
    "body": "Una transacción de ALUX puede suspenderse en el límite de un bloque, continuar en un bloque posterior y mantener sus cambios de estado de ALUX en espera hasta la confirmación o cancelación final.",
    "help": "Flujos de trabajo de larga duración, límites de aislamiento y comportamiento de confirmación o cancelación.",
    "points": [
     "Los segmentos y las particiones preservan el progreso en los puntos de suspensión.",
     "El aislamiento y la reproducción permiten reanudar y validar la ejecución entre bloques.",
     "La atomicidad cubre el estado de ALUX en espera; los efectos en el mundo externo, como una llamada a una API o una acción física, no se revierten automáticamente."
    ],
    "status": "current"
   },
   "evm": {
    "name": "EVM & TSAC",
    "title": "Cargas de trabajo EVM compatibles, coordinadas mediante TVM",
    "body": "ALUX admite actualmente determinadas cargas de trabajo EVM en entornos de ejecución aislados. TSAC coordina con TVM las operaciones de estado global relevantes; la compatibilidad depende de la superficie admitida.",
    "help": "Límites de integración con EVM, coordinación mediante TSAC y revisión de compatibilidad de cargas de trabajo.",
    "points": [
     "Cada instancia de EVM mantiene su propia pila de ejecución y su propia memoria.",
     "TSAC encamina las interacciones de estado global admitidas para coordinarlas con los procesos de TVM.",
     "La ejecución de WASM como invitado está prevista; esto no implica una compatibilidad universal con EVM."
    ],
    "status": "current"
   },
   "framework": {
    "name": "Segments · Partitions · Fringe",
    "title": "Estructurar el trabajo de ejecución para la planificación y la finalidad",
    "body": "Los servicios del framework sellan las trazas de ejecución en segmentos y particiones para la producción de bloques; cuando BlockGit finaliza un Fringe, sus bloques concurrentes se fusionan en una única transición de estado.",
    "help": "Planificación de la ejecución, gestión de dependencias y traspaso del trabajo del entorno de ejecución a la producción de bloques.",
    "points": [
     "Los segmentos capturan porciones acotadas del progreso de la ejecución.",
     "Las particiones agrupan los segmentos sellados de una transacción para incluirlos en un bloque.",
     "FringeBuilder aplica la fusión de bloques a cada Fringe que finaliza BlockGit."
    ],
    "status": "current"
   },
   "node": {
    "name": "Nodo · RPC · P2P",
    "title": "La superficie del entorno de ejecución orientada a la red",
    "body": "La capa de nodo conecta la ejecución con los métodos RPC admitidos, la comunicación entre pares y el contexto de almacenamiento. Los endpoints exactos y el comportamiento operativo dependen de la superficie de implementación actual.",
    "help": "Integración de nodos, alcance de RPC admitido, comunicación entre pares y límites de almacenamiento.",
    "points": [
     "Expone métodos RPC eth_* compatibles con Ethereum.",
     "El gossip P2P transmite los mensajes de red entre los pares participantes.",
     "El contexto de almacenamiento del nodo y las superficies de servicio estáticas rodean al entorno de ejecución."
    ],
    "status": "current"
   },
   "tooling": {
    "name": "Compilador · LSP · Playground",
    "title": "Inspeccionar y ejercitar la lógica de servicio durante el desarrollo",
    "body": "Los diagnósticos del compilador y los flujos de trabajo del servidor de lenguaje y del Playground ayudan a examinar los programas Tolang antes de conectarlos a un nodo.",
    "help": "Integración del compilador, diagnóstico, flujos de trabajo en el editor y evaluación temprana en el entorno de ejecución.",
    "points": [
     "Los diagnósticos del compilador señalan problemas a lo largo del recorrido del código fuente al bytecode.",
     "Los flujos de trabajo LSP permiten inspeccionar y editar con conocimiento del lenguaje.",
     "Las ejecuciones, la expansión y el formateo en Playground ayudan a examinar el comportamiento del servicio."
    ],
    "status": "current"
   },
   "sharding": {
    "name": "Ejecución entre fragmentos",
    "title": "Atomicidad horizontal entre fragmentos",
    "body": "El objetivo de diseño es un único límite transaccional de todo o nada entre los fragmentos participantes. La ejecución entre fragmentos sigue en la hoja de ruta.",
    "help": "Coordinación futura de transacciones entre fragmentos y protección frente a la visibilidad parcial.",
    "points": [
     "Mantener en espera los efectos locales de cada fragmento bajo un único límite transaccional.",
     "Confirmar juntos todos los efectos participantes o cancelarlos juntos.",
     "Mantener el estado intermedio entre fragmentos invisible para transacciones no relacionadas."
    ],
    "status": "roadmap"
   },
   "worldos": {
    "name": "World OS y superficies de cliente",
    "title": "Llevar el modelo de ejecución a nuevos entornos",
    "body": "Una capa World OS programable y el despliegue en dispositivos cliente son líneas a largo plazo del sistema. Son elementos de la hoja de ruta, no capacidades actuales del entorno de ejecución.",
    "help": "Futuros modelos de despliegue y las abstracciones a nivel de sistema necesarias para admitirlos.",
    "points": [
     "GLVM es el modelo a nivel de sistema en evolución sobre las TVM participantes.",
     "El despliegue de TVM en dispositivos cliente sigue previsto.",
     "Una capa World OS programable sigue siendo una línea de la hoja de ruta."
    ],
    "status": "roadmap"
   }
  },
  "menuGroups": [
   "Lenguaje y entorno de ejecución",
   "Ejecución y seguridad",
   "Consenso e integración",
   "Líneas de investigación"
  ]
 },
 "teamCopy": {
  "title": "Las personas detrás de los sistemas",
  "intro": "ConcurSys reúne una amplia experiencia en sistemas de riesgo cuantitativo y computación concurrente. Ese trabajo orienta las tecnologías de entorno de ejecución, lenguaje y consenso que construimos.",
  "frank": {
   "role": "Fundador y presidente",
   "bio": [
    "Frank He (Atticbee) es investigador y emprendedor en blockchain; su trabajo incluye el diseño y la implementación de máquinas virtuales concurrentes. Antes de ConcurSys, pasó más de 15 años como analista cuantitativo y desarrollador sénior en Bloomberg, Lehman Brothers y Barclays Capital, donde construyó sistemas de cálculo de riesgo altamente escalables.",
    "En ConcurSys aplica esa experiencia a la arquitectura de sistemas concurrentes. Su trabajo integra el entorno de ejecución, el lenguaje de programación y las tecnologías de consenso desarrolladas para ALUX en una base de ingeniería coherente."
   ],
   "focus": [
    "Sistemas concurrentes",
    "Cálculo de riesgo",
    "Arquitectura del entorno de ejecución"
   ]
  },
  "tomislav": {
   "role": "CTO",
   "bio": [
    "El interés de Tomislav por la computación comenzó con una calculadora de cartón a los cinco años y con la programación en ensamblador del C64c a los diez. Más de una década en electrónica y dos décadas programando en lenguajes como JavaScript y Haskell dieron forma a su enfoque: explorar el modelo, entender la maquinaria y luego construir.",
    "Su trabajo en concurrencia se apoya en el cálculo de procesos. En ConcurSys conecta los modelos formales de procesos y comunicación con la ingeniería práctica de entornos de ejecución, y aporta la misma curiosidad y una profunda implicación en los cimientos de ALUX."
   ],
   "focus": [
    "Cálculo de procesos",
    "Concurrencia",
    "Ingeniería de entornos de ejecución"
   ]
  }
 },
 "joinCopy": {
  "nav": "Únase",
  "title": "Construya los cimientos con nosotros.",
  "intro": "¿Le interesan los sistemas concurrentes, los lenguajes de programación o la ejecución distribuida? Preséntese y cuéntenos en qué trabajo de ingeniería quiere contribuir.",
  "label": "Intereses de ingeniería",
  "body": "Háblenos de un sistema que haya construido, de un problema difícil que haya investigado o de una contribución de código abierto de la que se sienta orgulloso. Incluya enlaces que nos ayuden a entender su trabajo.",
  "cta": "Preséntese",
  "subject": "Trabajar con ConcurSys",
  "email": "Sobre mí:\n\nIntereses de ingeniería:\n\nTrabajos destacados y enlaces:\n"
 },
 "agentCopy": {
  "eyebrow": "Infraestructura para agentes",
  "title": "Cimientos<br>para agentes.",
  "body": "Ingeniería de lenguajes, entornos de ejecución y consenso para agentes que necesitan estado persistente, autoridad explícita y ejecución verificable. Desarrollada por el equipo detrás de ALUX.",
  "rails": [
   "Estado persistente",
   "Autoridad explícita",
   "Ejecución coordinada",
   "Validación reproducible"
  ],
  "servicesTitle": "Un agente necesita cimientos.<br>Nosotros los construimos.",
  "servicesIntro": "Desde el lenguaje en el que se ejecuta un agente hasta la red que verifica su trabajo, construimos las capas que hacen posible la ejecución.",
  "mapTitle": "Dentro de la pila de ejecución de agentes.",
  "mapIntro": "Siga el recorrido del lenguaje al entorno de ejecución, la autoridad, el estado y el consenso. Descubra qué aporta cada capa a la ejecución de un agente y cómo se conectan entre sí.",
  "bridgeTitle": "De la intención del agente<br>al comportamiento del sistema.",
  "bridgeBody": "Un modelo puede proponer una acción. El sistema de ejecución debe definir qué puede ejecutarse, a qué puede acceder, cómo sobrevive el estado a la espera y cómo se acuerdan los resultados. Estas son las preguntas de ingeniería detrás de nuestro trabajo en ALUX.",
  "coreLabels": [
   "Lenguaje concurrente nativo",
   "Motor de ejecución de agentes",
   "Autoridad explícita",
   "Consenso concurrente",
   "Un modelo lógico de ejecución"
  ]
 },
 "agentRelevance": {
  "label": "Para sistemas de agentes",
  "modules": {
   "glvm": "GLVM es un modelo lógico compartido en evolución sobre las TVM participantes para coordinar la ejecución a nivel de sistema.",
   "tolang": "Tolang expresa lógica de servicio concurrente que puede compilarse para su ejecución en TVM.",
   "tvm": "TVM ejecuta bytecode y coordina la comunicación entre procesos concurrentes.",
   "ocap": "Las capacidades de objeto hacen explícito a qué objetos y recursos puede llegar un agente.",
   "durable": "La ejecución duradera preserva el estado y las continuaciones para que el trabajo pueda esperar dependencias y reanudarse más tarde.",
   "atomicity": "La atomicidad entre bloques mantiene en espera el estado de ALUX hasta la confirmación o cancelación; los efectos secundarios externos no se revierten automáticamente.",
   "replay": "La reproducción ofrece una base para volver a ejecutar de forma determinista y comprobar las decisiones registradas.",
   "framework": "Segmentos, particiones y Fringes organizan los límites de ejecución, recuperación y finalización.",
   "blockgit": "BlockGit coordina el historial de bloques concurrentes y el estado entre participantes distribuidos.",
   "evm": "EVM/TSAC permite que los contratos EVM existentes participen mediante la coordinación de TVM.",
   "node": "Las interfaces de nodo conectan las solicitudes de los agentes y las consultas de estado; P2P gestiona la propagación entre nodos.",
   "tooling": "Las herramientas de compilador, LSP y Playground ayudan a construir e inspeccionar la lógica de los programas.",
   "sharding": "La atomicidad entre fragmentos es una línea de desarrollo para coordinar el trabajo de los agentes entre fragmentos.",
   "worldos": "World OS y el despliegue en clientes son líneas de la hoja de ruta hacia un entorno de ejecución programable."
  }
 },
 "tolangCopy": {
  "eyebrow": "Un lenguaje nativo para blockchains de nueva generación",
  "title": "Tolang da a los agentes una forma nativa de expresar trabajo concurrente.",
  "intro": "Diseñado para sistemas blockchain de nueva generación, Tolang conecta los flujos de trabajo de los agentes con la capa de ejecución: procesos concurrentes, comunicación tipada y una ruta directa al entorno de ejecución TVM.",
  "cta": "Explore la cadena de herramientas de Tolang",
  "pipeline": [
   "Código fuente Tolang",
   "Compilador tolangc",
   "Bytecode .tox",
   "Procesos TVM"
  ],
  "features": [
   {
    "title": "La concurrencia como primitiva del lenguaje",
    "body": "Exprese el trabajo como procesos que pueden bifurcarse, esperar, reanudarse y avanzar juntos. Así, los sistemas de agentes cuentan con una forma clara de describir tareas que no caben en una sola llamada secuencial."
   },
   {
    "title": "Comunicación tipada entre procesos",
    "body": "Los procesos intercambian datos mediante canales tipados de espacio de tuplas en lugar de memoria compartida. Los descriptores de canal y los tipos de comportamiento ayudan a detectar algunos usos indebidos a tiempo; las reglas del entorno de ejecución rigen el ciclo de vida de los canales."
   },
   {
    "title": "Un camino hacia servicios persistentes",
    "body": "Tolang compila a bytecode de TVM, donde los procesos pueden continuar tras las esperas y coordinarse mediante canales. El lenguaje conecta la lógica de servicio con el entorno de ejecución; las garantías de persistencia y transaccionales dependen del sistema ALUX que lo rodea."
   },
   {
    "title": "Un ciclo de desarrollo práctico",
    "body": "Las API del compilador, los diagnósticos LSP, el formateo, la expansión y las ejecuciones en Playground ayudan a los equipos a inspeccionar e iterar el comportamiento del servicio, desde el código fuente hasta el entorno de ejecución."
   }
  ]
 },
 "heroExecutionCopy": {
  "eyebrow": "Cimientos para la ejecución de agentes",
  "title": "De la intención<br>a la ejecución.",
  "body": "ConcurSys construye las tecnologías subyacentes de lenguaje, entorno de ejecución y consenso de ALUX. Juntas, aportan las capas de ingeniería para expresar, coordinar y examinar el trabajo de los agentes.",
  "diagramLabel": "Modelo de ejecución",
  "agents": "Tareas de agentes",
  "service": "Servicio Tolang",
  "scope": "Autoridad OCAP",
  "runtime": "Procesos TVM",
  "proof": "ReplayTrie + BlockGit",
  "states": [
   {
    "label": "01 / DEFINIR",
    "title": "Exprese trabajo concurrente.",
    "body": "Tolang usa el cálculo de procesos para describir servicios que dividen el trabajo, se comunican y avanzan de forma concurrente."
   },
   {
    "label": "02 / AUTORIZAR",
    "title": "Haga explícita la autoridad.",
    "body": "Las capacidades de objeto usan referencias infalsificables para definir a qué objetos y recursos puede acceder una tarea."
   },
   {
    "label": "03 / EJECUTAR",
    "title": "Coordinar, esperar, reanudar.",
    "body": "TVM ejecuta procesos que se comunican mediante canales; el estado de ejecución preservado puede esperar dependencias y reanudarse cuando estén listas."
   },
   {
    "label": "04 / VERIFICAR",
    "title": "Inspeccione ejecución y acuerdo.",
    "body": "ReplayTrie ofrece una base para reproducir la ejecución, mientras BlockGit coordina el historial de bloques concurrentes y el estado."
   }
  ],
  "mapTitle": "Explore la pila de ejecución.",
  "mapBody": "Vea cómo encajan el lenguaje, la autoridad, el entorno de ejecución y el consenso.",
  "mapLink": "Explore la arquitectura",
  "demo": {
   "label": "Modelo de ejecución interactivo",
   "run": "Ejecutar una tarea",
   "pause": "Pausar",
   "continue": "Continuar",
   "resume": "Reanudar tarea",
   "replay": "Ejecutar de nuevo",
   "reset": "Reiniciar",
   "scenario": "Escenario de la tarea",
   "allowed": "Dentro de la autoridad",
   "denied": "Fuera de la autoridad",
   "status": {
    "idle": "Listo para explorar",
    "defined": "Tolang · tareas concurrentes definidas",
    "authorized": "OCAP · acceso permitido",
    "waiting": "TVM · esperando una dependencia",
    "resumed": "TVM · ejecución reanudada",
    "verified": "ReplayTrie + BlockGit · fase de validación",
    "denied": "OCAP · acceso denegado"
   },
   "deniedTitle": "La autoridad es un límite.",
   "deniedBody": "Este ejemplo solicita un recurso fuera de las capacidades concedidas. La tarea se detiene en el límite de permisos.",
   "waitTitle": "Esperar no significa empezar de cero.",
   "waitBody": "El modelo espera una dependencia externa. Reanude la tarea para ver cómo la ejecución continúa desde su estado preservado.",
   "doneTitle": "De la ejecución a la verificación.",
   "doneBody": "El modelo llega a la validación por reproducción y al consenso. ReplayTrie aporta la evidencia de ejecución; BlockGit coordina el historial concurrente."
  }
 },
 "stackCopy": {
  "relation": "La empresa de servicios tecnológicos de ALUX",
  "frame": "Pila de ejecución de agentes",
  "builtBy": "Desarrollada por ConcurSys",
  "layers": {
   "tolang": "Lenguaje",
   "ocap": "Autoridad",
   "tvm": "Ejecución concurrente",
   "blockgit": "Consenso",
   "glvm": "VM lógica"
  },
  "tiles": {
   "tolang": [
    "Procesos",
    "Canales tipados",
    "Patrones join",
    "tolangc → .tox"
   ],
   "ocap": [
    "Refs infalsificables",
    "Canales con guarda",
    "Atenuación",
    "Delegación"
   ]
  },
  "tvmCaption": "Espacio de tuplas / eventos COMM / espera y reanudación",
  "bgCaption": "Bloques DAG / enlaces débiles / finalidad por Fringe",
  "substrates": [
   "Nodos blockchain",
   "Servidores en la nube",
   "Dispositivos personales"
  ],
  "trace": "Traza de la tarea",
  "traceIdle": "Ejecute una tarea para seguirla a través de cada capa.",
  "readTitle": "Cómo leer el diagrama.",
  "readIntro": "Cada estrato es una capa del entorno de ejecución de ALUX que construye ConcurSys. Seleccione una capa o ejecute una tarea y obsérvela atravesarlas.",
  "aluxTitle": "Desarrollamos ALUX. Los mismos cimientos pueden impulsar su sistema.",
  "aluxLab": "Runtime Lab",
  "aluxCode": "GitHub",
  "servicesLabel": "Servicios",
  "codeCaption": "Dos agentes informan en paralelo. El join solo se dispara cuando existen ambos resultados."
 }
});
