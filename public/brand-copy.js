// Keep technical phrases intact without imposing sentence-wide no-wrap rules.
Object.assign(window.siteCopy.en,{heroTitle:'Engineering<br>concurrent systems.',heroBody:'The team behind ALUX’s language, virtual machine and consensus technology. We build the foundations for public-chain agents and distributed execution.'});
Object.assign(window.siteCopy.zh,{heroTitle:'从底层开始，<br>构建并发系统。',heroBody:'我们研发了 ALUX 的语言、虚拟机与共识技术，为公链 Agent 和分布式执行构建工程基础。'});
Object.assign(window.siteCopy.ko,{heroTitle:'동시성 시스템.<br>기반부터 완성까지.',heroBody:'ALUX의 언어, 가상 머신, 합의 기술을 개발한 팀입니다. 퍼블릭 체인 에이전트와 분산 실행을 위한 기반을 구축합니다.'});
Object.assign(window.siteCopy.ja,{heroTitle:'並行システムを、<br>基盤から実装まで。',heroBody:'ALUXの言語、仮想マシン、コンセンサス技術を開発するチームです。パブリックチェーン上のエージェントと分散実行を支える基盤を構築します。'});
Object.assign(window.siteCopy.ar,{heroTitle:'أنظمة متزامنة.<br>هندسة من الأساس إلى التنفيذ.',heroBody:'الفريق الذي يطوّر لغة ALUX وآلتها الافتراضية وتقنية الإجماع فيها. نبني أسس تشغيل الوكلاء على سلاسل الكتل العامة والتنفيذ الموزّع.'});
Object.entries({en:'ConcurSys — Concurrent Systems Engineering',zh:'ConcurSys｜并发系统与底层技术',ko:'ConcurSys | 동시성 시스템 엔지니어링',ja:'ConcurSys｜並行システムの基盤技術',ar:'ConcurSys | هندسة الأنظمة المتزامنة'}).forEach(([lang,title])=>window.siteCopy[lang].pageTitle=title);
