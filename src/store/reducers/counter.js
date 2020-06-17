import * as actionTypes from "../actions/actions"; //avoid typo errors

const initialState = {
    counter: 0
}
const reducer = (state = initialState, action) =>{
 
    switch (action.type){
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter +1;
            return newState;
        case actionTypes.DECREMENT:
            return {
                ...state, //distribute old state, overwrite counter and dont touch results
                counter: state.counter -1
            }
        case actionTypes.ADDVALUE:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACTVALUE:
            return {
                ...state,
                counter: state.counter - action.value
            }
        default: 
        return state;
    }
}

export default reducer;