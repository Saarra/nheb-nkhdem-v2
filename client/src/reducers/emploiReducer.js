import { GET_EMPLOIS } from "../actions/types";


const initState = {
    emplois : [], 
    edit: false,
    emploi: {}
}

const emploiReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_EMPLOIS:
            return {... state, emplois: action.payload}
        
    
        default:
            return state;
    }
}

export default emploiReducer