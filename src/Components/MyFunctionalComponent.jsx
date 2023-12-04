import React from "react"
export function MyFunctionalComponent(){
  const[state, setState] = React.useState({value:0});
  const[age,updateAge] = React.useState(29);

    const increment = () => {
      setState({...state,value:state.value+1});
    }
const decrement = () =>{
  setState({...state,value:state.value-1});
}
  
  
  
    return <div>
      <h1>Functional Components</h1>
      <p>value:{state.value}</p>
      <p>Age:{age}</p>
      
      <button onClick={()=>updateAge(30)}>updatedAge</button><br /> <br />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

     
    </div>

  
}
  