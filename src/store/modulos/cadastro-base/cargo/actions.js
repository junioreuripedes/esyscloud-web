import axios from 'axios';

export const lista = (state) => {

    axios.get('http://localhost:8000/api/cadastro-base/cargo').then((response) => {
    
        state.commit('set', response.data.data);

    })

}

export const adicionar = (state, data) => {

    return axios.post('http://localhost:8000/api/cadastro-base/cargo/adicionar', data).then(response => {
    
        state.commit('add', response.data);
        
    })

}

export const excluir = (state, id) => {
   
    return axios.delete('http://localhost:8000/api/cadastro-base/cargo/excluir/' + id).then(response => {
    
        state.commit('destroy', id);
        
    })

}