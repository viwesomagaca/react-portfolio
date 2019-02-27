import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class extends Component {
    render(){
        return(
<div className="nav">
       <Link className="button button-clear small" to="/">Home</Link>
       <Link className="button button-clear small" to="/about">About Me</Link>
       <Link className="button button-clear small" to="/Projects">Projects</Link>
       <Link className="button button-clear small" to="/contact">Contact Me</Link>
        
    </div>
        )
    }
}
