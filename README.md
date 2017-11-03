# ZiY-slide（响应式轮播插件）

ZiY-slide（响应式轮播插件）是基于媒体查询`@media`，针对不同浏览器屏幕大小，做出适应性优化的扁平化轮播插件。

####使用方式1：通过网页链接进行导入
```html
<!-- 最新版本的 ZiY-slide 核心 CSS 文件 -->
<link rel="stylesheet" href="https://github.com/LeoZiyang/ZiY-slide1.0.1/blob/master/ZiY-slide.css">
<!-- 最新的 ZiY-slide 核心 JavaScript 文件 -->
<script src="https://github.com/LeoZiyang/ZiY-slide1.0.1/blob/master/ZiY-slide.js"></script>
```

####使用方式2：直接下载文件
```
ZiY-slide/
├── img/
│   ├── slide1.png
│   ├── slide2.png
│   ├── slide3.png
└── ZiY-slide.html  
├── ZiY-slide.css
└── ZiY-slide.js
```


####代码示例
```html
<DOCTYPE html>
<html lang="ZN-Ch">
    <head>
        <meta charset="utf-8">
        <title>ZiY-silide</title>
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="view-port" content="width=device-width,initial-scale=1">
        <link rel="stylesheet" href="ZiY-silide.css">
    </head>
    <body>
        <!--首页滚动大图-->
        <section id="slide">
            <div id="imgGroup">
                <img src="./imgs/slide1.png" alt="">
                <img src="./imgs/slide2.png" alt="">
                <img src="./imgs/slide3.png" alt="">
            </div>
            <div id="clickDot">
                <span class="click-dot-on" setindex="0"></span>
                <span setindex="1"></span>
                <span setindex="2"></span>
            </div>
            <span class="arrow" id="next">&gt;</span>
            <span class="arrow" id="prev">&lt;</span>
        </section>
        <script src="ZiY-slide.js"></script>
    </body>
</html>
```

####更新提示:
`下版本将会出现可选参数（间隔时间、是否悬浮停止、轮播方式等），优化各细节，以及提升插件兼容性。`
