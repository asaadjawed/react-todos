import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{

  constructor(){
    super()

    this.state = {
      todos : [],
      value:"", 
    }
  }


  get_todos=(e)=>{

    this.setState({
      value: e.target.value,
      
    })
  }


  add_todos=()=>{
    this.state.todos.push(this.state.value);
    this.setState({
      todos: this.state.todos,
      value:''
    })
  }


  delete_item=(index)=>{

    this.state.todos.splice(index, 1)
    this.setState({
      todos: this.state.todos
    })
}


  edit_todo=(index)=>{

    let updated_value = prompt("Enter value");
    this.state.todos[index] = updated_value;
    this.setState({
      todos: this.state.todos
    })
    
  }


render(){

    
  return(
    <div>
      <h1>ToDo List</h1>

      <input value = {this.state.value}  onChange={this.get_todos} type="text" placeholder="Enter a Value" />

      <button onClick={this.add_todos}>Add Todos</button>

      <ul>
       {this.state.todos.map((v,i)=>{

        return <li key={i} >
          {v}
          <button onClick= {()=> this.edit_todo(i)} >Edit</button>
          <button onClick = {()=> this.delete_item(i)} >Delete</button>
        
        
        </li>

       })}
      </ul>

    </div>
  )
}

}

export default App