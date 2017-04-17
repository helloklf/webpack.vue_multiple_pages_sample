# 基于Webpack的Vue.js多页面项目说明


> 文件夹说明
- node_modules：安装的项目依赖组件
- source_code：源代码码
- release：编译后输出
- package.json 项目依赖信息
- README.md 说明文件
- webpack.config.js webpack配置信息
- .babelrc 
- .gitignore 



## 编译步骤

``` bash
# step1：安装依赖
npm install

# step2：开发模式运行，访问地址 localhost:8080
npm run dev

# step3：编译项目
npm run build
```



## 页面目录结构
> 页面输出

在pages文件下的每个文件夹，代表一个页面，因此 "/source_code/pages/about"目录 将被编译为 
1. /release/about.html
2. /release/scripts/about.js
3. /release/assets/... (图片和字体文件等)



> 页面的js主文件：

现已在webpack.config.js配置为编译时自动获取 "/source_code/pages/[pagename]" 下的*.js作为页面"[pagename]"的主文件。
因此不要在"/source_code/pages/[pagename]"根目录下创建多个js文件。
如果页面"[pagename]"的实现有多个js文件，请在"/source_code/pages/[pagename]"下创建子文件夹，并放置js文件，如：
"/source_code/pages/[pagename]/scripts/anyjsfilename.js"


> 页面的html文件：

每个页面不是必须创建 **[pagename]**.html 文件，因为编译时会默认使用 "/source_code/pages/template.html" 作为全局模板。
当然，你也可以对每个页面单独设置模板，且文件名没有限制，放在"/source_code/pages/**[pagename]**"根目录下即可，如：
"/source_code/pages/**[pagename]**/scripts/anyjshtmlename.html"
同样，不要在"/source_code/pages/**[pagename]**"根目录下创建多个html文件。
如果页面"**[pagename]**"的实现有多个html文件，请在"/source_code/pages/[pagename]"下创建子文件夹，并放置html文件，如：
"/source_code/pages/**[pagename]**/frames/anyfilename.html"



## 使用Vue.js构建页面
**==注意：由于此项目使用了多页面结构，因此，在某个单独页面中配置单独路由时是不推荐的。如果需要在单个页面中实现类似的效果，推荐使用Vue.js中的动态组件+HTML5 historyApi来实现。==**




## 相关链接：

 [docs for vue-loader](http://vuejs.github.io/vue-loader).
