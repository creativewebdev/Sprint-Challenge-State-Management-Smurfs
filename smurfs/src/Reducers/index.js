import {
    ADD_SMURF,
    GET_SMURFS
} from '../Actions'


const initialState = {
    smurfs: [],
    addingSmurf: false
}
    
export const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_SMURFS:
            return { ...state, smurfs: action.payload }
        case ADD_SMURF:
            return {...state, smurfs: action.payload, addingSmurf: true}
        default:
            return state 
}

}