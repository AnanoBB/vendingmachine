import React,{Component} from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import {Link} from 'react-router-dom'



class VendingMachine extends Component{

    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <p>Hello i am a vending machine what would you like to eat</p>
                <Link exact to="/soda">Soda</Link>
                <Link exact to="/chips">Chips</Link>
                <Link exact to="/sardine">Sardines</Link>
            </div>
        )
    }
}

export default VendingMachine;