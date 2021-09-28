import { GET_PRODUCTS } from "../actions/types";

const initState = {
    products : [], 
    edit: false,
    product: {}
}

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {... state, products: action.payload}
        default:
            return state;
    }
}

export default productReducer