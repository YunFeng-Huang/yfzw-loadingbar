# progress

> A Vue.js project

## Build Setup

``` bash

import VLoadingBar from 'yfzw-loadingbar'
Vue.use(VLoadingBar);

//配置

color  进度条 颜色 
progress_bg 进度条背景色

Vue.prototype.$LoadingBarConfig = {
  color: {
    success:'#20a0ff',
    failure:'#E7392A',
  },
  progress_bg:'#999'
};


4个方法
this.$LoadingBar.start()   
this.$LoadingBar.success()
this.$LoadingBar.failure()
this.$LoadingBar.destroy()


```


