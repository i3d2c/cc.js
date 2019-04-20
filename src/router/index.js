import Vue from 'vue'
import Router from 'vue-router'

import AddImageFile from '@/components/AddImageFile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'new_project',
      component: AddImageFile
    },
    {
      path: '/addImageFile',
      name: 'add_image',
      component: AddImageFile
    }
    // {
    //   path: '/addImageFile/validate/',
    //   name: 'validate_image',
    //   component: ValidateImageFile
    // },
    // {
    //   path: '/addScale/',
    //   name: 'add_scale',
    //   component: AddScale
    // }
  ]
})
