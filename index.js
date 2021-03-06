import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)

}// 冲突怎么没了
// zaicijianzhengshqiji 

}、库哪款款aaaaaaaaaaaaaaaaaaaaaaaaaaa
// 冲突怎么没了
//见证奇迹的时刻

Vue.use(Router)
const home = () => import('@/home/index')
const nav = () => import('@/layout/navbar')
const my = () => import('@/my/index')
const collect = () => import('@/my/collect')
const SpeCollect = () => import('@/my/SpeCollect')
const searchDetail = () => import('@/home/search/searchDetail') // 搜索详情
const specialExpress = () => import('@/specialExpress/index') // 专题快报首页
const speExpDetail = () => import('@/specialExpress/speExpDetail') // 专题快报详情
const ideaFeedback = () => import('@/my/ideaFeedback')
const aboutUs = () => import('@/my/aboutUs')

// 给我冲突，使劲冲突
// 给我冲突，使劲冲突
// 给我冲突，使劲冲突
// 给我冲突，使劲冲突
// 给我冲突，使劲冲突
// 给我冲突，使劲冲突

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
      // name: 'home',
      // component: home
    },
    {
      path: '/home',
      components: {
        default: home, nav: nav
      },
      name: 'home',
      meta: { tab: 'home', title: 'home' }
    },
    {
      path: '/my',
      components: {
        default: my, nav: nav
      },
      name: 'my',
      meta: { tab: 'my', title: 'my' }
    },
    {
      path: '/collect',
      components: {
        default: collect
      },
      name: 'collect',
      meta: { tab: 'collect', title: 'collect' }
    },
    {
      path: '/SpeCollect',
      components: {
        default: SpeCollect
      },
      name: 'SpeCollect',
      meta: { tab: 'SpeCollect', title: 'SpeCollect' }
    },
    {
      path: '/searchDetail',
      components: {
        default: searchDetail, nav: nav
      },
      name: 'searchDetail',
      meta: { tab: 'searchDetail', title: 'searchDetail' }
    },
    {
      path: '/specialExpress',
      components: {
        default: specialExpress, nav: nav
      },
      name: 'specialExpress',
      meta: { tab: 'specialExpress', title: 'specialExpress' }
    },
    {
      path: '/speExpDetail',
      components: {
        default: speExpDetail, nav: nav
      },
      name: 'speExpDetail',
      meta: { tab: 'speExpDetail', title: 'speExpDetail' }
    },
    {
      path: '/ideaFeedback',
      components: {
        default: ideaFeedback
      },
      name: 'ideaFeedback',
      meta: { tab: 'ideaFeedback', title: 'ideaFeedback' }
    },
    {
      path: '/aboutUs',
      components: {
        default: aboutUs
      },
      name: 'aboutUs',
      meta: { tab: 'aboutUs', title: 'aboutUs' }
    },
  ]
})
