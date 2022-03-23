/*
 * @Descripttion: 
 * @version: 
 * @Author: 曾利锋[阿牛]
 * @Date: 2022-03-23 17:52:55
 * @LastEditors: 曾利锋[阿牛]
 * @LastEditTime: 2022-03-23 18:02:18
 */
const routes = [
    {   //一级路由
        path: '/',
        name: '/',
        title: '首页',
        component: () => import('@/components/home.vue'),
        children: [  // 二级路由
            {
                path: 'mainPage',
                name: 'mainPage',
                title: '主页',
                component: () => import('@/views/coupon/coupon.vue'),
                children: [   // 三级路由
                    // {
                    //     path: 'dataChart',
                    //     name: 'dataChart',
                    //     title: '统计图',
                    //     component: () => import('@/components/mainPage/dataChart.vue'),
                    // },
                ]
            }
        ]
    },
    // {
    //     path: '/login',
    //     name: 'login',
    //     title: '登录',
    //     component: () => import('../components/login.vue'),
    //     meta: {
    //         transition: 'down'
    //     }
    // }
]

export default routes