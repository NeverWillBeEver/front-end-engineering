import Vue from 'vue';
import App from './App.vue';
import router from 'plugins/router';
import store from 'plugins/store';


window.GLOBAL.vbus = new Vue();

// 引入插件
import inject from 'plugins/inject';
import cookie from 'js-cookie';

// mock数据引入
// import './mock';

// 安装插件
Vue.use(inject);

Vue.prototype.$cookie = cookie;

Vue.config.productionTip = false;

// import './custom-style/index.scss';

// import './global-style/index.scss';

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
