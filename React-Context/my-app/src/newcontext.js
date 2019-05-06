import React from 'react';
import ReactDom from 'react-dom';

const {Provider, Consumer} = React.createContext()

class Head extends React.Component{
    render(){
        return (
            <div style={{border:'5px solid red',padding:'20px'}}>
            Head
            <Title></Title>
            </div>
        )
       
    }
}
class Title extends React.Component{
    render(){
        return (
            <Consumer>
                {
                    (value)=>(
                        <div style={{border:'5px solid pink',padding:'20px',color:value.color}}>
                            Title
                            <button onClick={()=>value.myMethod('skyblue')}>蓝色</button>
                            <button onClick={()=>value.myMethod('orange')}>黄色</button>
                        </div>
                     )
                }
            </Consumer>
           
        )
       
    }
}
class Main extends React.Component{
    render(){
        return (
            <div style={{border:'5px solid blue',padding:'20px'}}>
                Main
                <Content></Content>
            </div>
        )
        
    }
}
class Content extends React.Component{
    render(){
        return (
            <Consumer>
                {
                    (value)=>(
                        <div style={{border:'5px solid pink',padding:'20px',color:value.color}}>
                            Content
                            <button onClick={()=>value.myMethod('skyblue')}>蓝色</button>
                            <button onClick={()=>value.myMethod('orange')}>黄色</button>
                        </div>
                     )
                }
            </Consumer>
        )
        
    }
}

export default class Page extends React.Component {
    constructor(){
        super()
        this.state = {
            color:'orange'
        }
    }
    changeColor = (color)=>{
        this.setState({
            color
        })
    }
    render(){
        return (
            <Provider value={{color:this.state.color,myMethod:this.changeColor}}>
                <Head>
                   
                </Head>
                <Main>
                    
                </Main>
            </Provider>
        )
    }
}