Page({
  
  data: {
    
    //3d轮播器的数据
    source: [
      //img参数（属性）为必选，也可以自定义添加其他参数，这些参数都会在轮播器touch事件回调中传递
      { img: "https://s.96007.cc/Static/product/images/PnZ6Q.jpg", key1:"自定义参数1",key2:"自定义参数2",key_more:"自定义参数X"},
      { img: "https://s.96007.cc/Static/product/images/8b3.jpg"},
      { img: "https://s.96007.cc/Static/product/images/p2l.jpg" },
      { img: "https://s.96007.cc/Static/product/images/RnKvl.jpg" },
    ]

  },

  //轮播点击事件回调
  touch({detail:data}){
    console.log("我是轮播组件touch事件传递过来的数据：");
    console.log(data);
  }

});