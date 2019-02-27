import React, { Component } from 'react'
import Projects from '../components/projects/index';
import Nav from '../components/nav/index';
export default class extends Component {
    render(){
        return(
            <div>
            <div className="container">
            <Nav/>
            <Projects/></div>
            </div>
        )
    }
}