export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user/login',
        component: './User/Login',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        component: './Admin',
      },
    ],
  },
  {
    name: 'dashboard',
    icon: 'dashboard',
    path: '/dashboard',
    component: './Dashboard',
  },
  {
    name: 'analysis',
    icon: 'barChart',
    path: '/analysis',
    component: './Analysis',
  },
  {
    name: 'monitor',
    icon: 'monitor',
    path: '/monitor',
    component: './Monitor',
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
]; 