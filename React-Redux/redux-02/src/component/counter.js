import React from 'react';
import {createStore} from 'redux';
function reducer(state=123,action){
    switch(action.type){
        case 'INCREMENT':
        return state + 1;
        case 'DECREMENT':
        return state - 1;
        default:
        return state
    }
}
const store = createStore(reducer)
class Counter extends React.Component{
    constructor(){
        super();
        this.state = {
            number:store.getState()
        }
    }
    componentDidMount(){
        this.unsubscribe = store.subscribe(()=>{
            this.setState({
                number:store.getState()
            })
        })
    }
    componentWillUnmount(){
        this.unsubscribe()
    }
    increment(){
        store.dispatch({type:'INCREMENT'})
    }
    decrement(){
        store.dispatch({type:'DECREMENT'})
    }

    render(){
        return(
            <>
                <div>{this.state.number}</div>
                <button onClick={()=>{this.increment()}}>+</button>
                <button onClick={()=>{this.decrement()}}>-</button>
            </>
        )
    }
}
export default Counter
