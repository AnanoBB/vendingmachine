import React,{Component} from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'



class Soda extends Component{

    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <p>Hello i am a vending machine what would you like to eat</p>
                <ul>
                    <li>SODA</li>
                   
                </ul>
            </div>
        )
    }
}

export default Soda;