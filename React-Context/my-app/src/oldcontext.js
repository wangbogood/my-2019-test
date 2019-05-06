import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';


class Head extends React.Component{
    render(){
        return (
            <div style={{border:'5px solid red',padding:'20px'}}>
            page
            <Title></Title>
            </div>
        )
       
    }
}
class Title extends React.Component{
    static contextTypes={
        color: PropTypes.string,
        changeColor:PropTypes.func
    }
    render(){
        return (

                        <div style={{border:'5px solid pink',padding:'20px',color:this.context.color}}>
                            Title
                            <button onClick={()=>{this.context.changeColor('blue')}}>蓝色</button>
                            <button onClick={()=>{this.context.changeColor('yellow')}}>黄色</button>
                        </div>
                      
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
    static contextTypes={
        color: PropTypes.string,
        changeColor:PropTypes.func
    }
    render(){
        return (
                        <div style={{border:'5px solid pink',padding:'20px',color:this.context.color}}>
                            Content
                            <button onClick={()=>{this.context.changeColor('blue')}}>蓝色</button>
                            <button onClick={()=>{this.context.changeColor('yellow')}}>黄色</button>
                        </div>

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
    static childContextTypes={
        color: PropTypes.string,
        changeColor:PropTypes.func
    }
    getChildContext() {
        return {
            color: this.state.color,
            changeColor:(color)=>{
                this.setState({color})
            }
        }
    }
    render(){
        return (
            <>
                <Head>
                 <Title></Title>
                </Head>
                <Main>
                    
                </Main>
            </>
        )
    }
}