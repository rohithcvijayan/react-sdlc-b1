import React, { Component } from 'react'

class Content extends Component{
    (props)=> {
  
    return (
        <div>
            <input type="text"  value={props.name} style={{background:props.color}} 
            onChange={props.onChangeHandler}/>
            {props.name}
            <button onClick={props.changename}>Change Name</button>
        </div>
    )
}


export default Content;