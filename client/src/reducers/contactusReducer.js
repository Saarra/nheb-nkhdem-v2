import { GET_SUGG } from "../actions/types";


const initState = {
    contacts : [], 
    contact: {}
}

const contactReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_SUGG:
            return {... state, contacts: action.payload}
        default:
            return state;
    }
}

export default contactReducer