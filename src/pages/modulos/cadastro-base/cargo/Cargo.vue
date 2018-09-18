<template>
  <q-page>
    <q-card>
      <q-card-title>Cadastro Base - Cargo</q-card-title>
      <q-card-separator />
      <q-card-main>  
        <q-table :columns="columns" :filter="filter" :visible-columns="visibleColumns" :data="cargos" no-results-label="Nenhum registro encontrado" no-data-label="Nenhum registro encontrado" rows-per-page-label="Linhas por página" :pagination-label="paginationLabel">
          
          <template slot="top-left" slot-scope="props">
            <q-search placeholder="Pesquisar..." hide-underline color="secondary" v-model="filter" class="col-12"/>
          </template>
          
          <template slot="top-right" slot-scope="props">
            <q-table-columns color="secondary" class="q-mr-sm" v-model="visibleColumns" :columns="columns" />
          </template>

          <q-tr slot="body" slot-scope="props" :props="props" @click.native="abreMenuAcao(props.row)" class="cursor-pointer">
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.value }}
            </q-td>
          </q-tr>

        </q-table>
      </q-card-main>
    </q-card>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn round color="secondary" @click="adicionarAcao()" icon="add" />
    </q-page-sticky>

    <template>
      <q-action-sheet v-model="actionSheet" title="Ações" :grid=true @cancel="cancelarAcao" 
        :actions="[
          {
            label: 'Excluir',
            icon: 'delete',
            color: 'red',
            handler: excluirAcao
          },
          {
            label: 'Alterar',
            icon: 'edit',
            color: 'primary',
            handler: alterarAcao
          }
        ]"
      />
    </template>

  </q-page>
</template>

<script>
export default {
  data(){
    return {
      actionSheet: false,
      codigoCargo: null,
      filter: '',
      visibleColumns: ['codigo', 'dataCadastro', 'nome'],
      columns:[
        {
          name: 'codigo',
          field: 'CO_CADASTRO_BASE_CARGO',
          align: 'left',
          label: 'Código',
          sortable:true
        },
        {
          name: 'dataCadastro',
          field: 'DT_CADAS_FORMATADA',
          align: 'left',
          label: 'Data\Hora Cadastro',
          sortable:true
        },
        {
          name: 'nome',
          field: 'NO_CARGO',
          align: 'left',
          label: 'Nome',
          sortable:true
        },
        {
          name: 'descricao',
          field: 'DS_CARGO',
          align: 'left',
          label: 'Descrição',
          sortable:false
        }
      ]
    }
  },
  methods: {
    abreMenuAcao(data) {

      this.codigoCargo = data.CO_CADASTRO_BASE_CARGO
      this.actionSheet = true

    },
    adicionarAcao () {

      this.$router.push('/cadastro-base/cargo/adicionar')

    },
    excluirAcao(){

      this.$store.dispatch('cadastroBaseCargo/excluir', this.codigoCargo).then((response) => {

        this.$q.notify({
          type: 'positive',
          message:'Exclusão efetuada com sucesso!',
          timeout: 500, 
        })
        
      })
      .catch((erro) => {
        
        if(erro == "Error: Network Error"){

          this.$q.notify({
            type: 'negative',
            message:'Exclusão não efetuada. Conexão com o servidor perdida!'
          })

        }else if(erro.response.status == 404){

          this.$q.notify({
            type: 'negative',
            message:'Exclusão não efetuada. Contate o suporte técnico. Código do erro: 404'
          })

          this.$store.dispatch('cadastroBaseCargo/lista')

        }else if(erro.response.status == 405){

          this.$q.notify({
            type: 'negative',
            message:'Exclusão não efetuada. Contate o suporte técnico. Código do erro: 405'
          })

          this.$store.dispatch('cadastroBaseCargo/lista')

        }else{

          this.$q.notify({
            type: 'negative',
            message:'Erro geral do sistema. Contate o suporte técnico.'
          })

          this.$store.dispatch('cadastroBaseCargo/lista')

        }

      })
      
    },
    alterarAcao(){

      this.$q.notify({
        type: 'warning',
        message:'Alterando...',
        timeout: 500, 
      })

    },
    cancelarAcao () {

      this.$q.notify({
        type: 'info',
        message:'Ação cancelada!',
        timeout: 500, 
      })

    },
    paginationLabel(start, end, total) {

      return start + ' até ' + end + ' de ' + total

    }
  },
  computed:{
    cargos(){
      return this.$store.state.cadastroBaseCargo.cargos
    },
    statusExcluirCargo(){
      return this.$store.state.cadastroBaseCargo.statusExcluirCargo
    }
  },
  mounted(){
    this.$store.dispatch('cadastroBaseCargo/lista')
  }
}
</script>