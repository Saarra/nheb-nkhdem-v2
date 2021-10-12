import axios from 'axios'
import { GET_SUGG } from './types'

export const getsugg = () => async(dispatch) => {
    try {
        const res = await axios.get('/api/contact')
        
        dispatch({
            type: GET_SUGG,
            payload: res.data.contacts
        })
    } catch (error) {
        console.log("impossible to get contact", error)
    }
}

export const addsugg=(newcontact)=>async(dispatch)=>{
    try {
        await axios.post('/api/contact',newcontact)
        dispatch(getsugg())
    } catch (error) {
        console.log(error)
    }
    }