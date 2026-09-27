# 官网升级验证记录

2026-09-27。此次记录针对24个页面的五语言新版；旧单页验证不能代替本次结果。

## 范围与证据

- 1440像素桌面：24页面×5语言，共120组合；追加首页和Tolang中英文4次复验。一个主标题、正文存在、无横向溢出、无undefined/NaN。证据 output/upgrade/final-desktop.json。
- 390像素手机：24页面×5语言，共120组合。日文服务入口发现标题被拆成多个flex项，已改为完整标题网格栏并复验。证据 final-mobile.json，保留首次失败和修复记录。
- 320、820像素：每种语言的首页、服务概览、Tolang、团队、联系，共50组合。320像素日文页脚因网格最小尺寸撑宽，已修复并复验全部5页；窄屏日文首屏标题字号同步调整。
- 实际查看五语言首屏及中文团队、技术地图、Tolang板块、服务页、RTL布局；截图在 output/upgrade。机器布局检查不冒充母语人工审校。
- 五语言目录字段完整：基础117、页面71、技术91、团队14、加入8、Agent18、技术相关性15、Tolang16。24个HTML、120条sitemap入口及资源引用检查通过。

## 交互

Logo回首页保留语言；独立导航入口和技术子菜单；语言选择刷新保留；手机菜单与Escape焦点；必填联系表单原生校验；技术图选择、14模块详情、关联连线、播放/暂停、单步与重置均已实测。流程首次下一步从Tolang开始，重置回到持久执行。新版追加核验OCAP的Agent说明，以及桌面滚动技术说明保持可见。

联系仅准备邮件草稿，不发送邮件；未测试收件服务。减少动态设置和隐藏页面停止自动流程沿用已验证逻辑。所有新生成页面与资源在发布后另做HTTP及Git内容一致性验证。

## 事实与视觉边界

原彩色Logo字节与指定源文件一致。两位团队成员的履历以旧CCS存档为主，职位恢复为Founder & President与CTO；头像是全新卡通人物，不代表真人照片。术语统一进程演算。

技术以当前ALUX官网及源码为依据，区分现有基础、GLVM持续演进、跨分片及World OS路线图。未添加虚构代码、客户、性能指标或生产承诺。Tolang编译流程是原理说明，不冒充在线执行器。

主视觉是生成的抽象结构图片，技术图是可交互DOM/SVG。视觉已按实际截图检查；未声称用户已最终认可。生产结果与来源提交另记于 deployment.md。

生产首次复核发现旧脚本缓存与新HTML混用导致空白，已在生成器为全部JS/CSS加入内容哈希版本参数，并为替换的Logo更新资源版本。构建检查验证应用版本引用；上线后重新访问验证。

## 2026-09-27 Agent execution and brand refinement

- Header now uses the original transparent ConcurSys symbol alone: 66 px desktop and 56 px mobile, with home navigation preserved. Footer retains the upright text wordmark.
- Homepage replaces decorative rings with an interactive execution model: Agent tasks, OCAP boundary, Tolang, TVM, and ReplayTrie / BlockGit. Four explanatory controls were clicked and verified in the browser.
- The full 14-module map remains on Technology; its playback controls now precede the board. Homepage links to it instead of duplicating the complete map. Repeated homepage technology links were replaced by an entry to the two existing team profiles.
- Five language homepages and Technology pages checked at 390 px: no horizontal overflow, four hero steps, two team entries, and 14 map modules. English, Chinese, Korean, Japanese, and Arabic mobile hero layouts visually reviewed. Japanese headline revised to avoid a stranded verb ending. Section headings now convert editorial breaks into spaces to prevent joined Arabic sentences.
- Desktop hero and map visually checked. Logo home navigation and map Next step checked. Five-language catalog, 24 routes, 120 sitemap URLs, and JavaScript syntax checks passed.
- Figma execution model: https://www.figma.com/design/XtsxMyBSbsv9bWPOAmhEB6?node-id=2-2
- Screenshot evidence lives under output/upgrade/20260927-home-*.png. These are local browser observations, not evidence of a production deployment.

## 2026-09-27 Comfort, menus and execution demonstration

- Navigation parents are now single disclosure buttons. Clicking text or arrow expands the same menu. Overview links remain inside each submenu; Team remains a direct link. Desktop click, Enter, Space, Escape, mutually exclusive opening, Overview navigation, and Chinese mobile expansion were exercised.
- Footer email moved under brand introduction; copyright centered in a separate bottom row. Font size and column rhythm adjusted; desktop and mobile layouts inspected.
- Connector routing uses bottom-edge ports, row gutters and outer rails rather than curves across card interiors. All 14 module selections / 40 relation paths were checked against rendered card rectangles: zero interior crossings at desktop size. Mobile uses selected/connected cards and the textual relation list without background lines.
- Added user-started deterministic execution model with authorized and unauthorized scenarios. Normal path waits for visitor Resume, then reaches the verification stage; denied access stops at OCAP. Browser flows checked. Four state-machine tests cover the gate, wait/resume, pause/reset/disposal and background-tab pause.
- New refinement stylesheet uses neutral charcoal surfaces, restrained blue-green accents, softer boundaries, conventional body fonts and a more compact heading scale. Team biographies, original transparent avatars, technology content and routes remain intact.
- All 24 English routes were rendered and checked for one H1, one footer email, three menu triggers, stylesheet loading and horizontal overflow; no failures. Five-language mobile home checks passed for layout, demo controls, footer placement and menu count. Actual homepage, menu, footer, architecture, contact and team views inspected. Five-language catalog and 120 sitemap URL checks pass.
- Local evidence: output/upgrade/refinement-route-audit.json and screenshot files. Production verification is recorded separately after synchronization.

收藏元数据：英语首页标题更新为 ConcurSys — Agent Execution Infrastructure；全部页面使用带内容版本的 192×192 透明品牌 PNG favicon 与 Apple touch icon；主题色同步深色背景。24 页生成和五语言结构验证通过。既有收藏自定义名称不由网站覆盖。
