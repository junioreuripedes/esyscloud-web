<template>
  
  <div class="login-box">
    <div class="login-logo"><b>{{this.$primeiroNomeSistema}}</b> {{this.$segundoNomeSistema}}</div>
    
    <div class="login-box-body">
      <p class="login-box-msg">Informe seus dados para entrar no sistema.</p>
      <div class="form-group has-feedback">
        <input type="email" class="form-control" placeholder="E-mail" v-model="emailUsuario">
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input type="password" class="form-control" placeholder="Senha" v-model="senhaUsuario">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div class="row">
        <div class="col-xs-8">
          <div class="checkbox icheck">
            <label>
              <a href="#" title="Esqueci a minha senha">Esqueci a minha senha</a><br>
            </label>
          </div>
        </div>
        <div class="col-xs-4">
          <button class="btn btn-primary btn-block btn-flat" title="Entrar" v-on:click="login()">Entrar</button>
        </div>
      </div>
    </div>
   
  </div>

</template>

<script>

export default {
  name: 'Login',
  data(){
    return {
     emailUsuario: '',
     senhaUsuario: ''
    }
  },
  created(){
      if(sessionStorage.getItem('usuario')){
          this.$router.push('/');
      }
  },
  methods:{
    login(){
      this.$http.post(this.$urlAPI+'login', {
        email: this.emailUsuario,
        password: this.senhaUsuario
      })
      .then(response => {

        if(response.data.token){

          //login com sucesso
          this.$store.commit('setUsuario',response.data);
          sessionStorage.setItem('usuario', JSON.stringify(response.data))
          this.$router.push('/');

        }else if(response.data.status == false){

          //Login invalido
          alert('Login inválido');

        }else{

          //erros de validacao
          console.log('Erros de validação!')
          let erros = '';
          for(let erro of Object.values(response.data)){
            erros += erro +"";
          }

          alert(erros);

        }

      })
      .catch(erro => {

        console.log(erro)
        alert('[Erro] - Tente novamente mais tarde!');

      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

body {
  background-color: #ECF0F5;
}

</style>