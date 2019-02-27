import React,{ Component } from 'react';
export default class extends Component{
    state = {
        hovered: null
    }
    render(){

        const projects = [
          
            {
                url: "https://viwesomagaca.github.io/FOD-sprint",
                image: "/assets/images/projects/probot.jpg" ,
                title: "Design Sprint Product",
                description: 'A Chat bot that assists a client with a Procurement Process'
            },

            {
                url: "https://somagies-shoe-api.herokuapp.com/",
                image: "/assets/images/projects/shoecat.jpg" ,
                title: "Shoe Catalogue",
                description: 'Web App that helps you keep track of your inventory.'
            },
            {
                url: "https://waiterwebapp.herokuapp.com/waiter",
                image: "/assets/images/projects/waiter.jpg" ,
                title: "Waiter Availability App",
                description: 'Alows waiters to Updaye their work schedule, and also alerts the Superviser if he/she needs waiters on a specific day'
            },
            {
                url: "https://viwesomagaca.github.io/matching_days/",
                image: "/assets/images/projects/weekdays.jpg" ,
                title: "Matching Weekdays",
                description: 'Allows you to select two dates, Highlights if the days are on the same day or not',
               
            },
            {
                url: "https://regnumberwebapp.herokuapp.com/registrationNumbers",
                image: "/assets/images/projects/number-plates.jpg" ,
                title: "Reg Number Plates",
                description: 'Allows you to enter valid Registration Numbers, and lets you filter according to a City.'
                
            },
            {
                url: "https://polar-harbor-45886.herokuapp.com/greetings/",
                image: "/assets/images/projects/hello.jpg",
                title: "Greeting Web App",
                description: 'Greets People in different Languages, and also allows you to count how manytimes a name has been greeted.'
            }
        ]

        return(
            <div>
                <div className="projects">
                <h1>Project Samples</h1>

                    <div className="row container project">
                       

                        {
                            projects.map((item, index) => (
                                <a onMouseEnter={() => this.setState({ hovered: index })} onMouseLeave={() => this.setState({ hovered: null })} key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                                {
                                    this.state.hovered === index ?
                                    <div className="project-description">
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                        <p>{item.stack}</p>
                                    </div> :
                                    <div className="project"><img src={item.image} alt=""/></div>
                                     }
                                </a> 
                            ))
                        }
                    </div>
                    </div>
            </div>
        )
    }
}