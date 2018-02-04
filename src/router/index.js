import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/Search'
import ImportData from '@/components/ImportData'
import Manage from '@/components/Manage'
import CreateIndex from '@/components/CreateIndex'
import MappingColumn from '@/components/MappingColumn'
import Menu from '@/components/Menu'

//메뉴
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { Navbar } from 'bootstrap-vue/es/components';

Vue.use(Router)
Vue.use(Navbar)

//TODO : URL 수정
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage
    },
    {
      path: '/create-index',
      name: 'CreateIndex',
      component: CreateIndex
    },
    {
      path: '/mapping-index',
      name: 'MappingColumn',
      component: MappingColumn
    },
    {
      path: '/data/import',
      name: 'ImportData',
      component: ImportData
    },

  ]
})

//TODO : 컴포넌트 등록 위치 변경
Vue.component('Menu', Menu);
