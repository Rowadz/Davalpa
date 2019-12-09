import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'ant-design-vue/dist/antd.min.css';
import 'magic.css/dist/magic.min.css';
import {
  Button,
  Col,
  Row,
  notification,
  Icon,
  Tabs,
  Radio,
  Collapse,
  Statistic,
  Popover,
  Select,
  Divider
} from 'ant-design-vue';

Vue.config.productionTip = false;
Vue.use(Button)
  .use(Col)
  .use(Row)
  .use(Icon)
  .use(Tabs)
  .use(Radio)
  .use(Collapse)
  .use(Statistic)
  .use(Popover)
  .use(Select)
  .use(Divider);

Vue.prototype.$notification = notification;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
