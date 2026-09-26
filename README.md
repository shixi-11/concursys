# ConcurSys 网站

多语言技术服务网站，与 ALUX 当前语言配置对齐：英语、简体中文、韩语、日语、阿拉伯语。默认英语，通过页头语言选择器切换，URL 保存语言；阿拉伯语采用 RTL 布局。以公链 Agent 执行支持、虚拟机工程与分布式系统为服务主线，展示 ConcurSys 自研技术与 ALUX 的关系。

## 打开

在此目录运行 `node server.mjs`，访问 http://127.0.0.1:4317/ 。无需安装依赖。也可双击“启动预览.cmd”。端口由 `PORT` 环境变量配置；预览仅监听本机。

可直接把 `public` 目录交给静态网站托管平台。`public/index.html` 也支持本地直接打开；邮箱复制需要浏览器允许的安全上下文，无法复制时可选中邮箱。

## 文件

- `public/`：正式网页、双语文案、样式、脚本和图片。
- `20260927_ConcurSys网站文案.md`：从实际网页文案导出的五语言阅读稿。
- `design/brief.md`：本次设计与范围说明。
- `design/technology-research.md`：技术依据与实现边界。
- `design/verification.md`：视觉和交互检查范围。
- `output/`：浏览器截图与本机检查证据（不进入 Git）。

## 功能

五语言切换及 URL 语言保留；手机导航；GLVM、TVM、BlockGit、OCAP、持久执行五个技术视图；持久执行流程的播放、暂停、单步与重置；邮箱复制与邮件草稿链接。邮件链接打开用户邮件客户端，不自动发送，也没有伪造提交成功状态。

首屏使用专门生成的三维概念插画并配合轻微指针透视，不是可旋转的 WebGL 三维模型。流程图由 SVG 与真实文字构成。尊重减少动态设置；无自动播放的无限动画。无分析追踪、第三方字体请求或运行时外部脚本。

## 品牌与资产

采用用户提供的 ConcurSys 白字原标识；没有修改源目录文件。主视觉使用内置图像生成工具生成，1536×1024 原图等比转换为 3840×2560 JPG，未裁切；4K 文件尺寸不代表原生 4K 细节。页面所有图片来自本地 `public/assets`。

## 发布状态

正式网站：https://concursys.io/ ，www.concursys.io 同样可访问。网站于2026年9月27日发布到 Vercel 的「11 · Pro」团队，项目名 concursys，连接私有源码仓库 https://github.com/shixi-11/concursys 的 main 分支。部署根目录为 public，使用 Other 静态站预设，无构建命令。

域名继续由 GoDaddy 管理，仅将根域 A 记录改为 Vercel 指定的 216.150.1.1；www 保留指向 concursys.io 的 CNAME，Google Workspace 邮箱及其他 DNS 记录未改。两个 HTTPS 域名已实际访问并核验新版内容；部分递归 DNS 的旧缓存可能稍后更新。发布与回滚依据见 design/deployment.md。

语言文件：`public/content.js` 包含英中文案，`public/locales/` 包含韩语、日语和阿拉伯语。各语言覆盖117个文案字段。`design/verify-i18n.mjs` 检查五种语言和四种视口宽度。
