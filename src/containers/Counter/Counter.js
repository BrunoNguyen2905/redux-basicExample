import React, { Component } from 'react';
import {connect} from 'react-redux';
 
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

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
            </div>
        );
    }
}


const mapStateToProps = state =>{ //map redux state to props 
    return {
        ctr: state.counter
    };
}

const mapDispatchToProps = dispatch =>{
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () =>dispatch({type: "DECREMENT"}),
        onAddValueCounter: () =>dispatch({type: "ADDVALUE", value:5}),
        onSubtractValueCounter: () =>dispatch({type: "SUBTRACTVALUE", value:5}) 
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);