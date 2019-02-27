import React, { Component } from 'react'
import Nav from '../components/nav/index'
import Progress from '../components/progress-bars/index'
export default class extends Component {
    render(){
        return(
          <div className="container">
          <Nav/>
             
          <div className="row intro">
          <div className="column">
              <img src="/assets/images/vee.jpg" alt=""></img>
              {/* /Users/viwesomagaca/projects/react-tutorial/public/assets/images/Viwe.png */}
              </div>
              <div className="column">
              <h1 id="hello"> Hi, I am Viwe!</h1>
              <p >I am an Experienced Junior Software Developer with a demonstrated history of working in the professional training &amp; 
                  coaching industry. Skilled in Agile Practices,Test Driven Development, Technical Support, 
                  Front-end Development, Backend Development, Mongo &amp; 
                  MySQL databases, and Javascript. Strong codeX Alumni focused in 
                  website and software Development.I consider myself a good team player 
                  and I am always willing to learn new skills. 
              </p>
              </div>
          </div> 
          <hr></hr>
          <div className="specs">
          <div className="row">
          <div className="column">
           <h1>Client side</h1>
           <p>HTML/CSS, Javascript/Jquery, Version Control/Git, Responsive Design, Testing/Debugging</p>
          </div>
          <div className="column">
          <h1>Server side</h1>
          <p>The server side of an application and everything that communicates between the database and the browser.</p>
          </div>
      
          <div className="column">
           <h1>Frameworks</h1>
           <p>A software development process that relies on the repetition of a very short development cycle.</p>
          </div>
          <div className="column">
          <h1>DevOps</h1>
          <p>The combination of cultural philosophies, practices, and tools that increases an organization’s ability to deliver applications and services</p>
          </div>
          </div>
          </div> 
          <Progress/>             
      </div>
     )
  }
}
