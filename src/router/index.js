import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import ServerStatus from '@/components/ServerStatus'
import { requireAuth } from '../utils/auth'
/* eslint-disable */

export const routes =[
    {
      path: '/login',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'ServerStatus',
      beforeEnter: requireAuth,
      component: ServerStatus
    }
  ]

