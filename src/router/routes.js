
export default [
  
  { path: '/', component: () => import('layouts/default'), children: [ { path: '', component: () => import('pages/index') } ] },
  
  //{ path: '/login', component: () => import('layouts/default'), children: [ { path: '', component: () => import('pages/modulos/login/Login') } ] },
  { path: '/login', component: () => import('pages/modulos/login/Login') },
  //{ path: '/login', component: load('pages/modulos/login/Login') },

  { path: '/cadastro-base/cargo', component: () => import('layouts/default'), children: [ { path: '', component: () => import('pages/modulos/cadastro-base/cargo/Cargo') } ] },
  { path: '/cadastro-base/cargo/adicionar', component: () => import('layouts/default'), children: [ { path: '', component: () => import('pages/modulos/cadastro-base/cargo/CargoAdicionar') } ] },
  { path: '*', component: () => import('pages/404') }

]
