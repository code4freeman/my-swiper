# 简单的小程序3D旋转木马轮播组件

![avatar](./GIF.gif)

## 如何使用
按照小程序官方组件说明，引入该仓库下的My-swiper组件即可

## 属性
||参数名|参数类型|说明|
|-|-|-|-|
|1|source|\<Array\> |必选，轮播数据，如：[{img:"xxx",diy1:"xxx",diy_x:"xxx"},...]|
|2|direction|\<String\>|可选，轮播方向，只能为left和right|
|3|delay|\<Number\>|可选，设置轮播间隔时间(毫秒)，建议不小于1000|

## 事件
||事件名|参数|说明|
|-|-|-|-|
|1|touch|{detail}|点击论播图片时，该事件会传递当前所点击图片数据，如：{img:"xxx",diy1:"xxxx",...}|


## 代码示例
```html
<！--wxml代码-->

<my-swiper source="{{source}}" direction="{{direction}}" delay="{{delay}}" bind:touch="touchHandler"></my-swiper>
```

``` javascript
/*javascript代码*/
Page({
    data: {
        //轮播间隔时间
        delay: 2000,
        //轮播器轮播方向
        direction: "left",
        //轮播数据
        source: [
            /*
            * img属性为必选，custom_key为可选自定义属性，点击轮播图片时候会在touch事件传递
            */
            {img: "你的图片url", custom_key1:"自定义属性值"， custom_key2:"xxxx" },
            {img: "你的图片url", custom_key1:"自定义属性值"， custom_key2:"xxxx" },
            //....
        ]
    },
    //轮播器点击事件处理函数
    touchHandler(event){
        const data = event.detail;
        console.log(data); //{img:"xxx", custom_key1:"xxx", custom_key2:"xxx"}
        //...
    }
});
```
*水平有限，欢迎指点和star*