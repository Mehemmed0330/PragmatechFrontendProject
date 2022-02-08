import React, { Component } from 'react';

class Page extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'Muhammad',
            surname:'Aliev',
            age:'19',
            num:20,
            color:"green"
        }
    }

    onChange = () =>{
        this.setState((prevState)=>({
            ...this.state,
           num:prevState.num +1
            
        }))
        if(this.state.num >= 20 && this.state.num < 25){
            this.setState({color: "red"});
        }
        else{
            this.setState({color: "blue"});
        }
    }
    

    render() {
        return (
            <div>
                <div style={{color:`${this.state.color}`}}>{this.state.num}</div>
                <div></div>
                <button onClick={this.onChange}>Click Here</button>
            </div>
        );
    }
}

export default Page;
