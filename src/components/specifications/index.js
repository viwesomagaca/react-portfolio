import React,{ Component } from 'react';
export default class extends Component{
    render(){
        return(
            <div className="specs container">
            <div className="row">
            <div className="column">
            <h4>Front-end Development</h4>
            <p>everything involved in programming the user interface of a web application. Typically it refers to HTML, CSS and JavaScript.</p>
            
            <h6>Things i enjoy</h6>

            <p>Websites, WebApps, Responsive Design</p>

            <h6>My Tools</h6>
            <ul>
            <li>Visual studio/Atom</li> 
            <li>Github & Gitlab</li>
            <li>Version Control/Git</li>
            <li>Terminal</li>
            <li>Kanban</li>
            <li>Trello</li>
            <li>Developer Tools</li>
            </ul>
            


            </div>
            <div className="column left">
            <h4>Back-end Development</h4>
            <p>The server side of an application and everything that communicates between the database and the browser.</p>

            <h6>Things i enjoy</h6>

            <p>Api's, Servers, Database Management</p>

            <h6>Dev Tools</h6>
            <ul>
            <li>NodeJs</li> 
            <li>ExpressJs</li>
            <li>Terminal</li>
            <li>Postman</li>
            <li>Postgres,Mongo,MySql</li>
            <li>Docker</li>
            <li>Slack</li>
            </ul>
            </div>

            <div className="column left">
            <h4>Frameworks</h4>
            <p>A software that allows users to modify or extend its content,but not change it's code. I enjoy using this to create project platforms.</p>
            <h6>Things i enjoy</h6>

            <p>Templating</p>

            <h6>My Stack</h6>
            <ul>
            <li>Wordpress</li> 
            <li>Craft</li>
            <li>VueJs</li>
            <li>React </li>
            <li>Laravel</li>
            <li>Bootstrap</li>
            <li>Materialise</li>
            <li>Bulma</li>
            <li>Millagram</li>
            </ul>

            </div>
            </div>
            </div> 
        )
    }
}