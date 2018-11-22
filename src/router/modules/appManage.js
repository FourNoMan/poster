/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const appManage = [{
  path: '/appManage',
  component: Layout,
  redirect: 'appManage',
  name: 'appManage',
  meta: {
    title: '应用管理',
    icon: 'chart'
  },
  children: [
    {
      path: '',
      component: () => import('@/views/appManage/appConfig/index'),
      redirect: 'appList',
      name: 'appManage',
      meta: { title: '应用', noCache: true },
      children: [
        {
          path: 'appList',
          hidden: true,
          component: () => import('@/views/appManage/appConfig/appList'),
          name: 'appList',
          meta: { title: '配置列表', noCache: true }
        },
        {
          path: 'appConfig',
          hidden: true,
          component: () => import('@/views/appManage/appConfig/appConfig'),
          name: 'appConfig',
          meta: { title: '配置应用', noCache: true }
        }
      ]
    },
    {
      path: 'appType',
      component: () => import('@/views/appManage/appType/index'),
      name: 'appType',
      meta: { title: '应用分类', noCache: true }
    }
  ]
}]

export default appManage
