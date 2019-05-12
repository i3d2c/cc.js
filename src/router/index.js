import Vue from 'vue'
import Router from 'vue-router'

import Canvas from '@/components/Canvas'
import AddImageFile from '@/components/AddImageFile'
import AddScale from '@/components/AddScale'
import Edit from '@/components/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'add_image' }
    },
    {
      path: '/canvas',
      name: 'canvas',
      component: Canvas,
      children: [
        {
          path: '/canvas/addImageFile',
          name: 'add_image',
          component: AddImageFile
        },
        {
          path: '/canvas/addScale',
          name: 'add_scale',
          component: AddScale
        },
        {
          path: '/canvas/edit',
          name: 'edit',
          component: Edit
        }
      ]
    }
  ]
})
