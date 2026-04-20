# 个人网站（GitHub Pages）

这是一个可直接部署到 GitHub Pages 的静态个人网站模板。

## 网站链接（直接可用）

部署完成后，你的网站链接只有两种：

- **仓库名不是** `<用户名>.github.io`：`https://<用户名>.github.io/<仓库名>/`
- **仓库名就是** `<用户名>.github.io`：`https://<用户名>.github.io/`

> 例子：
>
> - 用户名：`octocat`，仓库：`my-site` → `https://octocat.github.io/my-site/`
> - 用户名：`octocat`，仓库：`octocat.github.io` → `https://octocat.github.io/`

## 快速使用

1. 把仓库推送到你的 GitHub（默认分支建议 `main`）。
2. 进入仓库 **Settings → Pages**，确认 **Source = GitHub Actions**。
3. 推送代码后，`Deploy static site to GitHub Pages` 工作流会自动发布。
4. 发布成功后，用上面的链接格式直接访问。

## 自定义内容

- 编辑 `index.html`：替换名字、介绍、项目、联系方式。
- 编辑 `styles.css`：调整配色与布局。
- 编辑 `script.js`：添加交互逻辑。

## 本地预览

直接双击 `index.html`，或使用任意静态服务器工具。
