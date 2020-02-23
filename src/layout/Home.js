import React, { Component } from 'react'
import Axios from 'axios'

export default class Home extends Component {
    state={
        profile:[]
    }
    componentDidMount(){
        Axios.get('http://localhost:4001/profile').then(res=>{
            this.setState({profile:res.data})
        })
    }
    render() {
        return (
            <div>
                {this.state.profile.map(user=>{
                    return <div>{user.fname}</div>
                })}
            </div>
        )
    }
}
