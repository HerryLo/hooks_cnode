![](https://img.shields.io/badge/-react%4016.13.1-brightgreen)
![](https://img.shields.io/badge/-typescript%403.9.3-brightgreen)
![](https://img.shields.io/badge/-webpack%404.42.0-brightgreen)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

以下只是包含前端项目构建的过程。但在实际项目中，我们需要考虑的更多，说的比较多的就如：前端工程化，工程化包括人员搭配、技术选型、框架搭建、组件和模块化、项目构建和项目文档，还包括测试、运维、迭代等，都可以算作工程化的一部分，而前端工程化，也只是在工程化前加了一个前缀，核心本身还是工程化，其实也不区分前端、后端、移动、web。

[项目地址预览](http://h5.didiheng.com/)，只支持http域名。

## 项目构建

在构建项目中，将构建步骤记录📝下来，确认配置的细节。

```c
* px转换rem
* scss样式支持
* ts语法支持
* eslint检测
* react-router-dom
* import按需加载
* css支持外部文件
```

### px转换rem

添加 `yarn add postcss-pxtorem`包，转换px为rem

需要在html中添加如下代码，为html设置根元素的fon-size，以下代码的UE设计稿参考的是750px：
```javascript
var uAgent = window.navigator.userAgent,
        isIOS = uAgent.match(/iphone/i),
        isYIXIN = uAgent.match(/yixin/i),
        is2345 = uAgent.match(/Mb2345/i),
        ishaosou = uAgent.match(/mso_app/i),
        isSogou = uAgent.match(/sogoumobilebrowser/gi),
        isLiebao = uAgent.match(/liebaofast/i),
        isGnbr = uAgent.match(/GNBR/i);
        function resizeRoot() {
            var e, i = screen.width > 0 && (window.innerWidth >= screen.width || 0 == window.innerWidth) ? screen.width : window.innerWidth,
                n = screen.height > 0 && (window.innerHeight >= screen.height || 0 == window.innerHeight) ? screen.height : window.innerHeight;
            window.devicePixelRatio && window.devicePixelRatio, isIOS && (i = screen.width, n = screen.height), i > n && (i = n), (e = (e = i > 1080 ? 144 : i / 7.5) > 32 ? e : 32) > 100 && (e = 100), window.screenWidth_ = i, isYIXIN || is2345 || ishaosou || isSogou || isLiebao || isGnbr ? setTimeout(function() { i = screen.width > 0 && (window.innerWidth >= screen.width || 0 == window.innerWidth) ? screen.width : window.innerWidth, n = screen.height > 0 && (window.innerHeight >= screen.height || 0 == window.innerHeight) ? screen.height : window.innerHeight, e = (e = i > 1080 ? 144 : i / 7.5) > 32 ? e : 32, document.getElementsByTagName("html")[0].style.fontSize = e + "px",fontSizeCheck()}, 500) : (document.getElementsByTagName("html")[0].style.fontSize = e + "px");
            // 检测系统字体是否被放大
            function fontSizeCheck(){/(android|linux|XiaoMi)/i.test(navigator.userAgent)&&setTimeout(function(){var t=document.getElementById("fontSizeCheck"),o=14;if(t&&t.offsetHeight/o>1){document.getElementsByTagName("html")[0].style.fontSize=e/(t.offsetHeight/o)+"px";try{setTimeout(function(){if(window.callErrorLog){var n=document.getElementById("wrapElementMain"),i=document.documentElement.offsetWidth||document.body.offsetWidth,f=0;n&&(f=n.offsetWidth),window.callErrorLog({err_ctype:"warn",err_stack:"字体被放大了，倍数为:"+t.offsetHeight/o+";设置后的字体大小为："+e/(t.offsetHeight/o)+"px; 页面宽度为： "+i+"/"+f,err_ctx:"安卓设备字体被放大"})}},1e3)}catch(e){console.log(e)}}},300)}
            fontSizeCheck();
        }
        resizeRoot();

        var reviseViewPort = function(e, i) {
            var n = 0,
                t = i || 5,
                o = setInterval(function() {
                    var e, i = screen.width > 0 && window.innerWidth >= screen.width ? screen.width : window.innerWidth;
                    i < window.screenWidth_ ? (window.screenWidth_ = i, e = (e = i > 1080 ? 144 : i / 7.5) > 32 ? e : 32, document.getElementsByTagName("html")[0].style.fontSize = e + "px", clearInterval(o)) : n++, n >= t && clearInterval(o)
                }, e || 200)
        };
        reviseViewPort(200);
```

同时在`webpack.config`中的`postcss-loader`加载器的`options`中添加如下代码
```javascript
// 设置根元素字体大小
require('postcss-pxtorem')({
    rootValue: 100,
    propWhiteList: []
})
```
```css
body {
    ...
    max-width: 750px;
    min-width: 320px;
}
```

以上配置可以这样通俗理解：通过`postcss-pxtorem`插件配置` rootValue: 100`可知道，UE图为750px的设计稿，1rem=100px，这个会在代码转换时生效，会按照你UE稿实际px值转换，例如：宽度为100px的div标签，转换后的样式代码就是1rem。此时的rem转换基准已经确定，还需要确定的就是`html`根节点`font-size`的值，那如何确定尼？根据不同设备的实际宽度除以750，我们就可得它们的倍数关系，既然在750px下1rem等于100px，现在有了倍数直接换算就可以了，倍数乘以100px就是当前设备实际的1rem的值。那么可以得到`html`根节点`font-size`的值实际等于 （当前设备视口实际宽度除以750）乘以100px，简化就是 当前设备视口实际宽度除以7.5。



### scss样式支持
### ts语法支持

添加 `yarn add typescript @types/node @types/react @types/react-dom @types/jest`;

项目根目录运行`tsc --init`;

webpack配置文件中添加：
```javascript
{
    test: /\.ts(x?)$/,
    exclude: /node_modules/,
    use: [
        {
            loader: "ts-loader",
            options: {
                transpileOnly: true,
            }
        },
    ]
}

```

### eslint检测

添加 `yarn add eslint eslint-plugin-react --dev`

`npx eslint --init`

`yarn eslint . --ext .ts,.tsx` 可用于检查目前tx、tsx文件中中不符合的规范；
### react-router-dom路由

添加 `yarn add react-router-dom @types/react-router-dom`

```javascript
// app.tsx
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
function App(){
    return (
        <Switch>
            <Route exact path="/">
                <IndexPage />
            </Route>
            <Route path="/detail">
                <DetailPage />
            </Route>
        </Switch>
    )
}

// index.tsx
import { BrowserRouter as Router } from "react-router-dom";

<Router>
    <React.StrictMode>
        <App />
    </React.StrictMode>
</Router>
```

### import按需加载

### css支持外部文件

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
