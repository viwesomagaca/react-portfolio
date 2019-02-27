import React, { Component } from 'react';
export default class extends Component{
    render(){
        return(
            <div>
            <h1>Skills</h1>
            <div className="row">
            <div className="column column-20">Front End</div>

            <div className="column">
            <div className="w3-light-grey w3-round-xlarge">
                <div className="w3-container w3-blue w3-round-xlarge" style={sql}>25%</div>
            </div></div>
            </div><br/>

            <div className="row">
            <div className="column column-20">Back End</div>

            <div className="column">
            <div className="w3-light-grey w3-round-xlarge">
            <div className="w3-container w3-blue w3-round-xlarge" style={btnStyle}>50%</div>
            </div></div>
            </div> <br/>
 

           <div className="row">
            <div className="column column-20">Design</div>

            <div className="column"> 
             <div className="w3-light-grey w3-round-xlarge">
            <div className="w3-container w3-blue w3-round-xlarge" style={html}>80%</div>
            </div></div>
            </div><br/>

            <div className="row">
                <div className="column column-20">Dev Ops</div>

                <div className="column">
                 <div className="w3-light-grey w3-round-xlarge">
               <div className="w3-container w3-blue w3-round-xlarge" style={btnStyle}>50%</div>
            </div>
            </div>
            </div>
           
            </div>
        )
    }
}

const sql = {
    width: '25%'
}

const html={
  width: '80%'
}

const btnStyle = {
    width: "50%"
}