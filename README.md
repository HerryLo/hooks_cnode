This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `yarn start`

`run` 开发项目，[http://localhost:3000](http://localhost:3000) 预览

### `yarn test`

`test` 运行测试用例，[running tests](https://facebook.github.io/create-react-app/docs/running-tests)查看更多信息

### `yarn build`

`build` 打包构建生产环境目标文件，[deployment](https://facebook.github.io/create-react-app/docs/deployment)查看更多部署信息

## 项目工程

在构建项目中，将构建步骤记录📝下来，防备出现问题时不知道从哪里排查。

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

需要在html中添加如下代码，为html设置根元素的fon-size
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

### scss样式支持

添加 `yarn add node-sass`包，目前的配置create-react-app中 已经支持scss语法，只需要按照loader即可。

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

添加 `yarn add eslint --dev`

`npx eslint --init`

### react-router-dom路由

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