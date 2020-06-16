const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0,
    status: false
}

//Reducers
const rootReducer = (state = initialState, action) =>{
    if(action.type ==="INC_COUNTER"){
        // state.counter++ you cannot do that bc state is immutable and u re mutating the original state
        return {
            ...state,
            counter: state.counter +1 // copy the old state then overwritte it
        };
    }

    if(action.type ==="ADD_COUNTER"){
        // state.counter++ you cannot do that bc state is immutable and u re mutating the original state
        return {
            ...state,
            counter: state.counter +action.value // copy the old state then overwritte it
        };
    }

    if(action.type === "TOGGLE"){
       
        return {
            ...state,
            status: !state.status
        }
    }
    return state;
}

//Store- manage states
const store = createStore(rootReducer);
console.log("DEFAULT: ", store.getState());

//Subscription
store.subscribe(() =>{
    console.log('[Subscription]', store.getState()) //it triggers whenever actions are dispatched(whenver the state is updated)
});
//Dispatching Action: deal with (a task or opponent) quickly and efficiently.
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
store.dispatch({type: 'TOGGLE'});
console.log("AFTER: ", store.getState());

