import axios from 'axios'

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF"

export const getSmurfs = () => dispatch => {
    axios 
        .get('http://localhost:3333/smurfs')
        .then(response => {
            console.log(response.data)
            dispatch({type: GET_SMURFS, payload: response.data})
        })
        .catch(err => {
        console.log(err)
    })
}

export const addSmurf = newSmurf => dispatch => {
    axios 
        .post('http://localhost:3333/smurfs', newSmurf)
        .then(response => {
            console.log('add smurf', response.date)
            dispatch({type: ADD_SMURF, payload: response.data})
        })
        .catch(err => {
            console.log(err)
        })
}