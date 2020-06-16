import React, { Component } from 'react';
import {connect} from 'react-redux';
 
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from "../../store/actions"; //avoid typo errors
class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    // counterChangedHandler = ( action, value ) => {
    //     // eslint-disable-next-line default-case
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} /> {/*this.state.counter */}
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddValueCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractValueCounter} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map (strResult => (
                        <li onClick={() => this.props.onDeleteResult(strResult.id)} key={strResult.id}>{strResult.value}</li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}


const mapStateToProps = state =>{ //map redux state to props 
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results 
    };
}

const mapDispatchToProps = dispatch =>{
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () =>dispatch({type: actionTypes.DECREMENT}),
        onAddValueCounter: () =>dispatch({type: actionTypes.ADDVALUE, value:5}),
        onSubtractValueCounter: () =>dispatch({type: actionTypes.SUBTRACTVALUE, value:5}),
        onStoreResult: (result)  => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteResult: (id)  => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);