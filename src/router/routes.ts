const routes = [
    {   //一级路由
        path: '/',
        name: '/',
        title: "首页",
        component: () => import('@/components/home.vue'), 
        redirect:"/coupon",
        children: [  // 二级路由
            {
                path: 'coupon',
                name: 'coupon',
                title: "主页",
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
]

export default routes