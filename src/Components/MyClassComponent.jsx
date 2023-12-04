import React,{Component} from "react";
class MyClassComponent extends Component{
    constructor(probs){
        super(probs);
        // state initialization
        this.state = {value:0}

    }
    increment= () => {
        this.setState({value:this.state.value + 1});
   }
   decrement = () =>{

   this.setState({value:this.state.value - 1});
   }
        
    

render() { 
    return <div>
        <h1> class Component</h1>
        value:<b>{this.state.value}</b> <br />
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement} >-</button>
    </div> 
}
}
export default MyClassComponent;