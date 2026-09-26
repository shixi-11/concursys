# ConcurSys 发布记录

2026-09-27。正式入口为 https://concursys.io/ 和 https://www.concursys.io/ 。

## 托管与源码

- Vercel：用户现有的「11 · Pro」团队（shixilin），独立项目 concursys。
- 项目管理：https://vercel.com/shixilin/concursys 。
- GitHub：shixi-11/concursys，私有仓库，生产分支 main。
- Root Directory：public；Application Preset：Other；无构建步骤。
- 平台地址：https://concursys.vercel.app/ 。
- 首次发布内容来自09ae70a8fbf362363d77a821b690e87e3bd34076；后续本记录更新不改变public内容。

## 域名变更

GoDaddy继续负责DNS。仅修改一条网站记录：A，名称@，值216.150.1.1，TTL3600。该地址取自本项目Vercel域名页面，不来自通用示例。

www的既有CNAME为concursys.io.，TTL3600，保持原值。Vercel主域与www都连接本项目Production，状态均为Valid Configuration。NS、TXT及五条Google Workspace MX未修改。没有购买新套餐、转移注册商或停用原建站产品。

改前根域显示WebsiteBuilder Site。北京时间2026-09-27 05:13:39通过Google DoH记录的原A为76.223.105.230与13.248.243.5；www同样别名指向根域。旧站由GoDaddy建站工具管理，若需恢复，应优先在GoDaddy重新连接原ConcurSys建站网站，并以当时显示的目标核对。原解析截图与表格位于本机output/deployment。

## 验证与缓存

12个已跟踪public资源在平台地址均HTTP 200。文本行尾规范化后与Git一致，图片字节级一致。index.html的Git blob为3e26dfb5b159285dc4bb7a4ea0727f447b104416；app.js为c78663624149feb71a58a06264c76ff00a1c3e40。

北京时间2026-09-27 05:21:18，两个正式HTTPS域名均返回200，首页与Git一致，Logo及主视觉文件核验通过。根域公共DNS查询已返回216.150.1.1；www的递归链查询仍可带旧IP缓存，所以不声称全球所有解析器已同步。

邮箱MX保持：1 aspmx.l.google.com；5 alt1.aspmx.l.google.com、alt2.aspmx.l.google.com；10 alt3.aspmx.l.google.com、alt4.aspmx.l.google.com。没有测试邮件收发。
