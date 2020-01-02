import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DataLabel from "../components/DataLabel";
import Extract from "../components/Extract";
import Correct from "../components/Correct";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/datalabel',
      name: 'DataLabel',
      component: DataLabel
    },
    {
      path: '/extract',
      name: 'Extract',
      component: Extract
    },
    {
      path: '/correct',
      name: 'Correct',
      component: Correct
    }
  ]
})
