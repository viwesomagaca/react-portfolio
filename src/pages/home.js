import React, { Component } from 'react'
import Header from '../components/header/index'
// import Nav from '../components/nav/index'
import Progress from '../components/progress-bars/index'
import Projects from '../components/projects/index'
import Specs from '../components/specifications/index'
// import Contact from '../pages/contact'

export default class extends Component {
    render(){
        return(
    <div>
      <div className=" home-cover">
      <h4>Fullstack Development/ Responsive Design/ CMS frameworks</h4>
      <p>I create products for companies. innovation is my passion</p>
      <img src='/assets/images/avatar.jpg' alt=""/>
      </div>
      
      <div className="bio">
      < Header/>
      </div>
      <Specs/>
      <Projects/>
   
    </div>
  )
 }
}