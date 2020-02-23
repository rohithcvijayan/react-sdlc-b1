import React, { Component } from 'react'
import Navbar from './layout/Navbar'
import Content from './layout/Content'

 class App extends Component {
     state={
         name: 'Rohith',
         color:''
     }
 changename=()=>{
        this.setState({name:'Raj',color:'red'})
     }
 onChangeHandler=(evt)=>{
    this.setState({name:evt.target.value})
    }
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Content 
                name={this.state.name} 
                color={this.state.color}
                changename={this.changename}
                onChangeHandler={this.onChangeHandler}></Content>
            </div>
        )
    }
}

export default App;