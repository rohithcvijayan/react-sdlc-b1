import React, { Component } from 'react'
import Axios from 'axios'

class Registration extends Component {
    state = {
        fname: '',
        lname: '',
        email: ''
    }
    onChangeHandler = (event) => {
        this.setState({ [event.target.id]: event.target.value })

    }
    onSubmitHandler=()=>{
        console.log(this.state);
        Axios.post('http://localhost:4001/profile',this.state);
    }
    render() {
        return (
            <React.Fragment>
                FirstName: <input id="fname" type="text" value={this.state.fname} onChange={this.onChangeHandler}></input><br/>
                LastName:<input id="lname" type="text" name="" value={this.state.lname} onChange={this.onChangeHandler} /><br/>
                Email:    <input id="email" type="email" name="" value={this.state.email} onChange={this.onChangeHandler} /><br/>
                <button type="submit" onClick={this.onSubmitHandler}>Submit</button>
            </React.Fragment>
        )
    }
}
export default Registration;