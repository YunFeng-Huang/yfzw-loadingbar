import progress from "./components/main.vue";

export default {
  install(Vue) {
    if (typeof window !== "undefined" && window.Vue) {
      Vue = window.Vue;
    }
    let el;
    Vue.component(progress.name, progress);
    let self = Vue
    function a(status="start",step=0) {
      el && document.body.removeChild(el)
      let LoadingBar = Vue.extend({
        render(h) {
          let props = {
            status,
            step,
          };
          if(self.prototype.$LoadingBarConfig){
            self.prototype.$LoadingBarConfig.color != undefined && (props.color = self.prototype.$LoadingBarConfig.color)
            self.prototype.$LoadingBarConfig.progress_bg && (props.progress_bg = self.prototype.$LoadingBarConfig.progress_bg)
            self.prototype.$LoadingBarConfig.duration && (props.duration = self.prototype.$LoadingBarConfig.duration)
          }
          return h("VLoadingBar", { props });
        }
      });
      let newMessage = new LoadingBar();
      let vm = newMessage.$mount();
       el = vm.$el;
      document.body.appendChild(el); // 把生成的提示的dom插入body中
    }
    function b(){
      document.body.removeChild(el); // 把生成的提示的dom插入body中
    }
    // 挂载到vue原型上，暴露方法
    Vue.prototype.$LoadingBar = {
      start() {
        a();
      },
      destroy(){
        b()
      },
      success(){
        a('success',20);
        setTimeout(()=>{
          b()
        },1000)
      },
      failure(){
        a('failure',20);
        setTimeout(()=>{
          b()
        },1000)
      },
    };
  },
};
