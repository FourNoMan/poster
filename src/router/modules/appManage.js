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
      hidden: true,
      component: () => import('@/views/appManage/index'),
      name: 'appManage',
      meta: { title: '', noCache: true }
    },
    {
      path: 'appAdd',
      hidden: true,
      component: () => import('@/views/appManage/components/index'),
      name: 'appAdd',
      meta: { title: '添加应用', noCache: true }
    },
    {
      path: 'appConfig',
      hidden: true,
      component: () => import('@/views/appManage/components/appConfig'),
      name: 'appConfig',
      meta: { title: '应用配置', noCache: true }
    },
    {
      path: 'relationConfig',
      hidden: true,
      component: () => import('@/views/appManage/components/relationConfig'),
      name: 'relationConfig',
      meta: { title: '关联资源配置', noCache: true }
    }
  ]
}]

export default appManage
