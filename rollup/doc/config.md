// rollup.config.js

export default {
  // 核心选项
  input,      输入，文件入口
  external,   外部依赖的名称，或者2、文件的绝对路径
  plugins,    插件

  // 额外选项
  onwarn,

  // danger zone
  acorn,
  context,
  moduleContext,
  legacy

  output: {  // 必须 (如果要输出多个，可以是一个数组)
    // 核心选项
    file,    // 必须，输出的文件
    format,  // 必须，生成的格式，es, cjs，umd，amd，iife
    name,       生成包的名字
    globals,    全局模块，Object

    // 额外选项
    paths,      Function，它获取一个ID并返回一个路径，或者id：path对的Object。
    banner,
    footer,
    intro,
    outro,
    sourcemap,
    sourcemapFile,
    interop,

    // 高危选项
    exports,
    amd,
    indent
    strict
  },
};


包的格式：
amd – 异步模块定义，用于像RequireJS这样的模块加载器
cjs – CommonJS，适用于 Node 和 Browserify/Webpack
es – 将软件包保存为ES模块文件
iife – 一个自动执行的功能，适合作为<script>标签。（如果要为应用程序创建一个捆绑包，您可能想要使用它，因为它会使文件大小变小。）
umd – 通用模块定义，以amd，cjs 和 iife 为一体