# ConcurSys 网站

面向 Agent 执行底座的五语言技术官网：英语、简体中文、韩语、日语、阿拉伯语。ConcurSys 研发 ALUX 背后的语言、运行时和共识技术。默认英语，URL 保存语言，阿拉伯语采用 RTL。

## 运行与检查

运行 `node server.mjs`，访问 http://127.0.0.1:4317/ 。无需安装依赖，预览仅监听本机。静态托管根目录为 `public`。

- `node design/build-pages.mjs`：生成24个独立页面、元数据、语言链接和站点地图。
- `node design/verify-i18n.mjs`：检查五语言字段、页面资源、语言入口、站点地图及术语。
- `node design/export-copy.mjs`：更新五语言文案阅读稿。
- `npm run check`：语法和上述结构检查。浏览器视觉验证另见 design/verification.md。

## 页面与功能

首页、服务概览及3个服务详情、技术概览及14个技术详情、公司、团队、加入我们、联系，共24个页面。页头 Services / Technology / Company 可进入独立页面，箭头展开子菜单；Team 是一级导航。Logo 返回对应语言首页。

首页聚焦 Tolang、TVM、OCAP、BlockGit、GLVM；Tolang 独立板块展示其新一代区块链语言定位、并发与类型化通信、编译至 TVM 的路径和开发工具。14模块能力地图支持选择、关联连线、流程播放、单步、重置，以及各模块面向 Agent 的作用说明。技术状态区分当前基础、持续演进与路线图。

团队仅 Frank He 与 Tomislav Grospić，保留旧站职位和履历，使用全新非写实虚拟人物。来源见 design/team-source-audit.md。

联系表单通过本地校验后准备邮件草稿，不自动发送、不显示虚假提交成功。支持邮箱复制、手机菜单、键盘焦点、减少动态设置。图片使用可访问背景元素，保持浏览器原生页面右键菜单。

## 文件与品牌

正式网页位于 public；五语言文案阅读稿为 `20260927_ConcurSys网站文案.md`。结构化文案分为基础、页面、技术、团队、Agent 相关性和 Tolang 板块，均覆盖五语言。

使用用户指定的原彩色 ConcurSys_logo.png，未重绘标识。深色页头以浅色底承托原Logo。主视觉为原创生成的互锁金属与青色玻璃结构；人物为卡通虚拟形象。Space Grotesk 本地托管并附 OFL 许可。页面没有运行时外部字体或第三方脚本请求。

截图和测试证据在本机 output/upgrade，不进入 Git。技术网站参考见 design/website-references.md，验收记录见 design/verification.md。

## 托管

正式入口 https://concursys.io/ 与 https://www.concursys.io/ 。Vercel 项目 concursys 位于既有 shixilin 团队，连接私有仓库 shixi-11/concursys 的 main 分支。根目录 public，Other 静态预设，无构建命令。部署核验与回滚依据见 design/deployment.md。此次升级不修改 DNS、邮箱或 ALUX 仓库。
