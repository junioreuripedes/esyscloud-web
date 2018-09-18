import Vue from 'vue'
import Vuex from 'vuex'

import cadastroBaseCargo from './modulos/cadastro-base/cargo'

Vue.use(Vuex)

Vue.prototype.$urlAPI              = 'http://localhost:8000/api/'
Vue.prototype.$primeiroNomeSistema = 'eSys'
Vue.prototype.$segundoNomeSistema  = 'Cloud'
Vue.prototype.$nomeSistema         = 'eSys Cloud'
Vue.prototype.$descricaoSistema    = 'eSys Cloud - Sistema de gestão online'
Vue.prototype.$versaoSistema       = '2.0.0'
Vue.prototype.$anoSistema          = '2018'
Vue.prototype.$nomeEmpresa         = 'eSys Consultoria e Soluções em TI'
Vue.prototype.$siteEmpresa         = 'http://www.esysconsultoria.com.br'

const store = new Vuex.Store({
  modules: {
    cadastroBaseCargo
  }
})

export default store
