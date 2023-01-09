import { createRouter, createWebHistory } from 'vue-router'
import UserManager from '../views/UserManager'
import AddUser from '../views/AddUser'
import EditUser from '../views/EditUser'
import ViewUser from '../views/ViewUser'
import PageNotFound from '../views/PageNotFound'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/users',
    component: UserManager
  },
  {
    path: '/users',
    name: 'UserManager',
    component: UserManager
  },
  {
    path: '/users/add',
    name: 'AddContact',
    component: AddUser
  },
  {
    path: '/users/edit/:userId',
    name: 'EditContact',
    component: EditUser
  },
  {
    path: '/users/view/:userId',
    name: 'ViewUser',
    component: ViewUser
  },
  {
    path: '/:patchMatch(.*)',
    name: 'PageNotFound',
    component: PageNotFound
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
