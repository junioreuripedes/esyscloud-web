<template>
  <q-page>
    <q-card>
      <q-card-title>Cadastro Base | Cargo - Adicionar Cargo</q-card-title>
      <q-card-separator />
      <q-card-main>
        <div class="row">
          <div class="col-12">
            <q-field :error="$v.cargoNome.$error" :error-label="mensagemErroCampoNome" :count="80">
              <q-input v-model="cargoNome" @blur="$v.cargoNome.$touch" stack-label="Nome"/>
            </q-field>
          </div>
        </div> 
        <div class="row">
          <div class="col-12">
            <q-field :count="500" >
              <q-input v-model="cargoDescricao" type="textarea" stack-label="Descrição" :max-height="100" rows="7" />
            </q-field>
          </div>
        </div>
        <br><br>
        <div class="row">
          <div class="col-12" align="right">
            <q-btn color="standard" text-color="black"  v-on:click="voltarPagina()">{{buttonVoltarNome}}</q-btn>&nbsp;&nbsp;&nbsp;&nbsp;
            <q-btn color="secondary" text-color="white" v-on:click.once="adicionarCargo()">{{buttonSubmitNome}}</q-btn>
          </div>
        </div>
       
      </q-card-main>
    </q-card>

  </q-page>
</template>

<script>

import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  data(){
    return {
      buttonClique:     false,
      buttonVoltarNome: 'Cancelar',
      buttonSubmitNome: 'Salvar',
      cargoNome:        '',
      cargoDescricao:   ''
    }
  },
  validations: {
    cargoNome:{
      required,
      minLength: minLength(5),
      maxLength: maxLength(80)
    }
  },
  computed: {
    mensagemErroCampoNome() {
      if (!this.$v.cargoNome.required) return 'Campo Nome é obrigatório.'
      if (!this.$v.cargoNome.minLength) return `Campo Nome deverá ter no mínimo ${this.$v.cargoNome.$params.minLength.min} caracteres.`
      if (!this.$v.cargoNome.maxLength) return `Campo Nome deverá ter no máximo ${this.$v.cargoNome.$params.maxLength.max} caracteres.`
    }
  },
  methods:{
    voltarPagina(){

      this.$router.push('/cadastro-base/cargo');

    },
    adicionarCargo(){

      this.buttonClique     = true
      this.buttonVoltarNome = 'Carregando...'
      this.buttonSubmitNome = 'Carregando...'

      this.$store.dispatch('cadastroBaseCargo/adicionar', { NO_CARGO: this.cargoNome, DS_CARGO: this.cargoDescricao }).then(response => {

        this.$q.notify({
          type: 'positive',
          message:'Cadastro efetuado com sucesso!',
          timeout: 500, 
        })

      })
      .catch((erro) => {

        if(erro == "Error: Network Error"){

          this.$q.notify({
            type: 'negative',
            message:'Cadastro não efetuado. Conexão com o servidor perdida!'
          })

        }else if (erro.response.status === 400){

          let erros = ''
          for(let erroAux of Object.values(erro.response.data)){
            erros += erroAux +" "
          }

          this.$q.notify({
            type: 'negative',
            message: erros
          })

        }else if(erro.response.status == 405){

          this.$q.notify({
            type: 'negative',
            message:'Cadastro não efetuado. Contate o suporte técnico. Código do erro: 405'
          })

        }else{

          this.$q.notify({
            type: 'negative',
            message:'Erro geral do sistema. Contate o suporte técnico.'
          })

        }

      })
      .then(response => {

        this.buttonClique     = true
        this.buttonVoltarNome = 'Cancelar'
        this.buttonSubmitNome = 'Salvar'

      })
      
    }
  }
}
</script>

<style scoped>

.q-card-main{
  padding: 20px;
  background-color: #FFFFFF;
}

</style>