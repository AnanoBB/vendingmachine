import React,{Component} from 'react';




class Sardines extends Component{

    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <p>Hello i am a vending machine what would you like to eat</p>
                <ul>
                    <li>SODA</li>
                    <li>CHIPS</li>
                    <li>FRESH SARDINES</li>
                </ul>
            </div>
        )
    }
}

export default Sardines;