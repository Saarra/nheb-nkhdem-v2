import axios from 'axios'
import { GET_EMPLOIS, TOGGLE_FALSE, TOGGLE_TRUE } from './types'

export const getEmplois = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/emploi')

        dispatch({
            type: GET_EMPLOIS,
            payload: res.data.emplois
        })
    } catch (error) {
        console.log("impossible to get emploi", error)
    }
}


export const addEmploi = (newEmploi) => async(dispatch) => {
    try {
        await axios.post('/api/emploi/add', newEmploi)
        dispatch(getEmplois())
    } catch (error) {
        console.log(error)    
    }
}

export const deleteEmploi = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/emploi/${id}`)
        dispatch(getEmplois())
        dispatch(toggleTrue())
    } catch (error) {
        console.log(error)
    }
}

export const toggleTrue = () => {
    return {
        type: TOGGLE_TRUE
    }
}

export const toggleFalse = () => {
    return {
        type: TOGGLE_FALSE
    }
}