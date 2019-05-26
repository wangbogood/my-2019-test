import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'
// import NewContext from './newcontext'
// import OldContext from './oldcontext'

class App extends React.Component{
    render(){
        return (
            <h1>App</h1>
        )
    }
}
class Index extends React.Component{
    render(){
        return (
            <h1>index</h1>
        )
    }
}
class About extends React.Component{
    render(){
        return (
            <h1>About</h1>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

