1. Webpack基础概念
webpack主要作用：

代码转换：TypeScript 编译成 JavaScript、SCSS 编译成 CSS 等。
文件优化：压缩 JavaScript、CSS、HTML 代码，压缩合并图片等。
代码分割：提取多个页面的公共代码、提取首屏不需要执行部分的代码让其异步加载。
模块合并：在采用模块化的项目里会有很多个模块和文件，需要构建功能把模块分类合并成一个文件。
自动刷新：监听本地源代码的变化，自动重新构建、刷新浏览器。
代码校验：在代码被提交到仓库前需要校验代码是否符合规范，以及单元测试是否通过。
自动发布：更新完代码后，自动构建出线上发布代码并传输给发布系统。

Webpack 有以下几个核心概念：
Entry：入口，Webpack 执行构建的第一步将从 Entry 开始，可抽象成输入。
Module：模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块。
Chunk：代码块，一个 Chunk 由多个模块组合而成，用于代码合并与分割。
Loader：模块转换器，用于把模块原内容按照需求转换成新内容。
Plugin：扩展插件，在 Webpack 构建流程中的特定时机会广播出对应的事件，插件可以监听这些事件的发生，在特定时机做对应的事情。
Output：输出结果，在 Webpack 经过一系列处理并得出最终想要的代码后输出结果。

构建过程：
从 Entry 里配置的 Module 开始递归解析 Entry 依赖的所有 Module。
每找到一个 Module， 就会根据配置的 Loader 去找出对应的转换规则。
对 Module 进行转换后，再解析出当前 Module 依赖的 Module。
这些模块会以 Entry 为单位进行分组，一个 Entry 和其所有依赖的 Module 被分到一个组也就是一个 Chunk。
最后 Webpack 会把所有 Chunk 转换成文件输出。
在整个流程中 Webpack 会在恰当的时机执行 Plugin 里定义的逻辑。