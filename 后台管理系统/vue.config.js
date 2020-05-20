module.exports={
  devServer:{
    // host:"baidu",
    // port: '8081',
    // https:false,
    // open:true,
    // proxy:{
    //   '/api':{
    //     // target:' http://125.124.170.40:8888',
    //     target:' http://yy.weilian/xin',
    //     changeOrigin:true,
    //     ws: true,
    //     pathRewrite:{
    //       '^/api': ''
    //     }
    //   }
    // }  
    proxy: 'http://125.124.170.40:8888'
  
  
  }
}
