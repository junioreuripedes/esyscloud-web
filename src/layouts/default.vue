<template>
  <q-layout view="hHh Lpr lFf"> 

    <q-layout-header>
      <q-toolbar color="blue-10">
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>eSys Cloud</q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
    
    <q-layout-footer>
      <q-toolbar color="white" text-color="dark">
        <q-toolbar-title>
          <span slot="subtitle">Copyright &copy; 2018 eSys Consultoria. v{{ $q.version }}</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-footer>
   
    <q-layout-drawer v-model="leftDrawerOpen" :content-class="$q.theme === 'mat' ? 'white' : null">
      <div class="profile">
        <img src="https://quasar-admin.firebaseapp.com/img/avatar-1.f743093.svg" style='height: 80px' class="inline-block">
        <div class="user-name">
          <span class="text-white">Junior</span>
          <hr>
        </div>
        <div class="user-actions">
          <q-btn color="blue-5" title="Página Principal" icon="home" link to="/"/>&nbsp;&nbsp;
          <q-btn color="blue-5" title="Sair do Sistema" icon="exit_to_app"/>
        </div>
      </div>
      
      <q-list no-border link inset-delimiter>
        <q-list-header>Menu</q-list-header>
        <q-collapsible indent icon="assignment" label="Cadastro Base">
          <q-item link to="/cadastro-base/pessoa">Pessoa</q-item>
          <q-item link to="/cadastro-base/cliente">Cliente</q-item>
          <q-item link to="/cadastro-base/fornecedor">Fornecedor</q-item>
          <q-item link to="/cadastro-base/colaborador">Colaborador</q-item>
          <q-item link to="/cadastro-base/usuario">Usuário</q-item>
          <q-item link to="/cadastro-base/perfil-acesso">Perfil de Acesso</q-item>
          <q-item link to="/cadastro-base/setor">Setor</q-item>
          <q-item link to="/cadastro-base/cargo">Cargo</q-item>
          <q-item link to="/cadastro-base/categoria-produto">Categoria de Produto</q-item>
          <q-item link to="/cadastro-base/nivel-formacao">Nível de Formação</q-item>
          <q-item link to="/cadastro-base/nacionalidade">Nacionalidade</q-item>
          <q-item link to="/cadastro-base/estado-civil">Estado Civil</q-item>
          <q-item link to="/cadastro-base/profissao">Profissão</q-item>
          <q-item link to="/cadastro-base/estado">Estado</q-item>
          <q-item link to="/cadastro-base/cidade">Cidade</q-item>
          <q-item link to="/cadastro-base/bairro">Bairro</q-item>
          <q-item link to="/cadastro-base/cep">CEP</q-item>
          <q-item link to="/cadastro-base/unidade-medida">Unidade Medida</q-item>
          <q-item link to="/cadastro-base/tipo-email">Tipo E-mail</q-item>
          <q-item link to="/cadastro-base/tipo-telefone">Tipo Telefone</q-item>
          <q-item link to="/cadastro-base/tipo-produto">Tipo Produto</q-item>
        </q-collapsible>

        <q-collapsible indent icon="filter_b_and_w" label="Qualidade">
          <q-collapsible indent label="Volumetria">
            <q-item link>Cadastradas</q-item>
            <q-item link>Pendentes</q-item>
            <q-item link>Status Análise</q-item>
          </q-collapsible>

          <q-collapsible indent label="Sanitização">
            <q-item link>Cadastradas</q-item>
            <q-item link>Pendentes</q-item>
            <q-item link>Configuração</q-item>
          </q-collapsible>
        </q-collapsible>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>

import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
  
</style>