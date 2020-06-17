import React, { Component } from 'react';
import {connect} from 'react-redux';

import  * as actionCreators from '../../store/actions/actions';
 
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from "../../store/actions/actions"; //avoid typo errors
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
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () =>dispatch(actionCreators.decrement()),
        onAddValueCounter: () =>dispatch(actionCreators.addValue(5)),
        onSubtractValueCounter: () =>dispatch(actionCreators.subtractValue(5)),
        onStoreResult: (result)  => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id)  => dispatch(actionCreators.deleteResult(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);