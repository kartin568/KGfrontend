import Vue from 'vue'
import Router from 'vue-router'
import DataLabel from "../components/DataLabel";
import Extract from "../components/Extract";
import Correct from "../components/Correct";
import DefineLabel from "../components/DefineLabel";
import CorpusTagging from "../components/CorpusTagging";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DataLabel',
      component: DataLabel,
      children:[
        {
          path: 'definelabel',
          name: 'DefineLabel',
          component: DefineLabel
        },
        {
          path: 'corpustagging',
          name: 'CorpusTagging',
          component: CorpusTagging
        }
      ]
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
    },
  ]
})
