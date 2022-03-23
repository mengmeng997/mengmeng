import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
    history: createWebHashHistory(),  // hash 模式，想要改为history 模式可以使用createWebHistory
    routes
})
// 动态修改路由过度动画
router.afterEach((to:any, from:any) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  console.log(toDepth)
  console.log(fromDepth)
  console.log(to)
  console.log(from)
  if (to.path == '/login') {
    to.meta.transitionName = 'down'
    from.meta.transitionName = 'opt'
  } else if (from.path == '/login') {
    from.meta.transitionName = 'down'
    to.meta.transitionName = 'up'
  } else {
    to.meta.transitionName = toDepth <= fromDepth ? 'slide_left' : 'slide_right'
  }
  
})
export default router