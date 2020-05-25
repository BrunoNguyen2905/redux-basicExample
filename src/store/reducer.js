const initialState = {
    counter: 0
}
const reducer = (state = initialState, action) =>{
    switch (action.type){
        case 'INCREMENT':
            return {
                counter: state.counter +1
            }
        case 'DECREMENT':
            return {
                counter: state.counter -1
            }
        case 'ADDVALUE':
            return {
                counter: state.counter + action.value
            }
        case 'SUBTRACTVALUE':
            return {
                counter: state.counter - action.value
            }
        default: 
        return state;
    }
    
    //switch case makes code cleanable
    // if(action.type === "INCREMENT"){
    //     return {
            
    //         counter: state.counter +1
    //     };
    // }

    // if(action.type === "DECREMENT"){
    //     return{
           
    //         counter: state.counter -1
    //     };
    // }

    // if(action.type === "ADDVALUE"){
    //     return{
            
    //         counter: state.counter + action.value
    //     };
    // }

    // if(action.type === "SUBTRACTVALUE"){
    //     return{
            
    //         counter: state.counter - action.value
    //     };
    // }
    // return state;
    
}

export default reducer;