安装rollup
pnpm add rollup

安装必要的rollup插件
pnpm add @rollup/plugin-commonjs @rollup/plugin-node-resolve @rollup/plugin-typescript
插件作用说明：
@rollup/plugin-commonjs：rollup本身是不支持CommonJS的，使用了这个插件，就可以解析CommonJS模块了
@rollup/plugin-node-resolve：rollup 无法识别 node_modules 中的包，帮助 rollup 查找外部模块，然后导入
@rollup/plugin-typescript：rollup中使用typescript必备的插件

在安装@rollup/plugin-typescript插件时提示我们需要tslib和typescript，所以我们安装这两个第三方库
pnpm add tslib typescript

如果需要进行代码压缩和清除注释等需要安装如下插件
pnpm add rollup-plugin-terser rollup-plugin-cleanup
插件作用说明：
rollup-plugin-terser插件用于代码压缩
rollup-plugin-cleanup插件用于去除无效代码