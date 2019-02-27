import React, { Component } from 'react'
import Nav from '../components/nav/index'
export default class extends Component {
    render(){
        return(
            <div>
            <div className="container">
                <Nav/></div>
                
                        <div class="flip-container centered">
                        <div class="flipper">
                            <div class="front"></div>
                            <div class="back">
                                <h1>Viwe Somagaca</h1>
                                 <p>Web Design & Development</p>
                            <div class="font-a-icons">
                                <div class="icon-group">
                                <span class="bold">T: </span><span class="contact">073 005 8133</span>
                                <div class="icon-group">
                                    <span class="bold">E: </span><a class="contact" href="mailto:viwesomagaca29@gmail.com" target="_top">viwesomagaca29@gmail.com</a>
                                </div>
                                <div class="icon-group">
                            <a class="contact" href="http://www.viwesomagaca.io" target="_blank" rel="noopener noreferrer">www.viwesomagaca.io</a>
                                </div>
                            </div>
                        </div>   
                        <a class="icon-box" href="https://www.facebook.com/xpetrus.rex" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook"></i></a>
                        <a class="icon-box" href="https://twitter.com/Gothburz" target="_blank" rel="noopener noreferrer"><i class="fa fa-twitter"></i></a>
                        <a class="icon-box" href="https://www.linkedin.com/in/xpetrus" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin"></i></a>
                        <a class="icon-box" href="https://github.com/Gothburz" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i></a>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}