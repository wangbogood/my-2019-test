import React from 'react';
import ReactDOM from 'react-dom';
import { Provider ,connect } from 'react-redux'
import { createStore } from 'redux'
// import NewContext from './newcontext'
// import OldContext from './oldcontext'
const reducer = (state={a:1} , action) => {
    switch (action.type) {
      case 'ADD':
        return state.a + action.wangbo;
      default: 
        return state;
    }
  };
const store = createStore(reducer)

  console.log(store.getState())
class App extends React.Component{
    render(){
        return (
            <h1 onClick={() => store.dispatch({type: 'ADD',payload:{wangbo:10}})}>App</h1>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'));

