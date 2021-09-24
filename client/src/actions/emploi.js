import axios from 'axios'
import { GET_EMPLOIS } from './types'

export const getEmplois = () => async(dispatch) => {
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
