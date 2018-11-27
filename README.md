# 简单的小程序3D旋转木马轮播组件

![avatar](http://my-swiper.kuaiyunds.com/my-swiper/gif.gif)

## 如何使用
按照小程序官方组件说明，引入该仓库下的My-swiper组件即可

## 参数
||参数名|参数类型|说明|
|-|-|-|-|
|1|source|\<Array\> |必选，轮播数据，如：[{img:"xxx",diy1:"xxx",diy_x:"xxx"},...]|
|2|direction|\<String\>|可选，轮播方向，只能为left和right|
|3|delay|\<Number\>|可选，设置轮播间隔时间(毫秒)，建议不小于1000|

## 事件
||事件名|参数|说明|
|-|-|-|-|
|1|touch|{detail}|点击论播图片时，该事件会传递当前所点击图片数据，如：{img:"xxx",diy1:"xxxx",...}|

*水平有限，欢迎指点和star*