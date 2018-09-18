export const set = (state, cargos) => {

    state.cargos = cargos

}

export const add = (state, cargo) => {

    state.cargos.push(cargo);

}

export const destroy = (state, cargoId) => {

    let index = state.cargos.findIndex((item) => {
        
        return item.CO_CADASTRO_BASE_CARGO == cargoId;

    });

    if(index!=-1){

        state.cargos.splice(index,1);
        
    }

}