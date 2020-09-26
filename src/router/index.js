import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const userList = r => require.ensure([], () => r(require('@/page/userList')), 'userList');
const projectList = r => require.ensure([], () => r(require('@/page/projectList')), 'projectList');
const moduleList = r => require.ensure([], () => r(require('@/page/moduleList')), 'moduleList');
const dbList = r => require.ensure([], () => r(require('@/page/dbList')), 'dbList');
const ifRelyData = r => require.ensure([], () => r(require('@/page/ifRelyData')), 'ifRelyData');
const relyData = r => require.ensure([], () => r(require('@/page/relyData')), 'relyData');
const executeLog = r => require.ensure([], () => r(require('@/page/executeLog')), 'executeLog');
const ifAssertLog = r => require.ensure([], () => r(require('@/page/ifAssertLog')), 'ifAssertLog');
const ifCase = r => require.ensure([], () => r(require('@/page/ifCase')), 'ifCase');
const ifSuite = r => require.ensure([], () => r(require('@/page/ifSuite')), 'ifSuite');
const ifSuiteCaseList = r => require.ensure([], () => r(require('@/page/ifSuiteCaseList')), 'ifSuiteCaseList');


export default new Router({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/manage',
      component: manage,
      name: '',
      children: [
        {
          path: '/userList',
          component: userList,
          meta: ['用户管理'],
        },
        {
          path: '/projectList',
          component: projectList,
          meta: ['项目管理'],
        },
        {
          path: '/moduleList',
          component: moduleList,
          meta: ['模块管理'],
        }, 
        {
          path: '/dbList',
          component: dbList,
          meta: ['数据源中心'],
        }, 
        {
          path: '/ifRelyData',
          component: ifRelyData,
          meta: ['数据中心','接口依赖'],
        }, 
        {
          path: '/relyData',
          component: relyData,
          meta: ['数据中心','自定义依赖'],
        },   
        {
          path: '/executeLog',
          component: executeLog,
          meta: ['接口测试','执行日志'],
        }, 
        {
          path: '/ifAssertLog',
          component: ifAssertLog,
          meta: ['接口测试','断言日志'],
        }, 
        {
          path: '/ifCase',
          component: ifCase,
          meta: ['接口测试','测试用例'],
        },     
        {
          path: '/ifSuite',
          component: ifSuite,
          meta: ['接口测试','测试套件'],
        },  
        {
          name: 'ifSuiteCaseList',
          path: '/ifSuiteCaseList',
          component: ifSuiteCaseList,
          meta: ['接口测试','测试套件','用例维护'],
        },      
      ],
    }  
  ],
  strict: process.env.NODE_ENV !== 'production',
})
