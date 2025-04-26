# Mkdirs 文档

最好的目录网站模板。

网站: [mkdirs.com](https://mkdirs.com)

体验 [在线演示](https://demo.mkdirs.com)

阅读 [文档](https://docs.mkdirs.com)

观看 [视频教程](https://www.youtube.com/@MkdirsHQ)

> 如果您发现任何问题，请 [提交 issue](https://github.com/MkdirsHQ/mkdirs-template/issues/new) 或通过邮件联系我 [support@mkdirs.com](mailto:support@mkdirs.com)。

> 如果您有任何功能请求、问题或想法要分享，请 [在讨论区提交](https://github.com/MkdirsHQ/mkdirs-template/discussions)。


让我帮您分析当前工作目录的结构。


Ran tool
看起来这是一个使用 Astro 框架的项目。让我们进一步查看一些关键文件的内容，以便更好地了解项目结构。

首先，让我们看看 `package.json` 文件：



Read file: package.json
让我们再看看 `src` 目录的内容：





1. **项目类型**：
   - 这是一个使用 Astro 框架的文档网站项目
   - 使用了 Starlight 主题（@astrojs/starlight）
   - 使用 TypeScript 作为开发语言

2. **主要依赖**：
   - astro: ^4.15.3
   - @astrojs/starlight: ^0.28.3
   - typescript: ^5.6.3
   - sharp: ^0.32.5（用于图片处理）

3. **项目结构**：
   - `src/` - 源代码目录
     - `content/` - 文档内容
     - `components/` - 组件
     - `assets/` - 静态资源
   - `public/` - 公共静态文件
   - `astro.config.mjs` - Astro 配置文件
   - `tsconfig.json` - TypeScript 配置

4. **开发脚本**：
   - `pnpm install` - 安装依赖
   - `pnpm run dev` - 启动开发服务器
   - `astro dev` - 启动开发服务器
   - `dev`/`start`: 启动开发服务器
   - `build`: 构建项目
   - `preview`: 预览构建结果

