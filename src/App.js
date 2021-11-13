import React from 'react';
import './App.css';

function App() {
  const [task,setTask] = React.useState({desc:'', date:''});
  const [todos,setTodos] = React.useState([]);

  const inputChanged =(event) =>{
    setTask({...task, [event.target.id]:event.target.value});
  }
  
  const addTodo =(event) => {
    event.preventDefault();
    setTodos([...todos, task]);
  }

  const deleteRow = (event) => {
    let newTodos= todos.filter((todo, i) => i != event.target.id);
    setTodos(newTodos);
  }

  return (
    <div className="App">

      <header className="App-header">
        <h1>Todolist</h1>
      </header>

      <fieldset> 
        <legend align="left">Add todo</legend>
      
      <form onSubmit={addTodo}>
        <label for="task">Task</label>
        <input type="text" onChange={inputChanged} id="desc"/>
        <label for="date">Date</label>
        <input type="text" onChange={inputChanged} id="date"/>
        <input type="submit" value="Add"/>
      </form>
      </fieldset>



      <table>
        <tbody>
          
          <tr><th>Date</th><th>Description</th></tr>
          {
            todos.map((todo,index) => 
            <tr key={index}>
              <td>{todo.date}</td>
              <td>{todo.desc}</td>
              <td><input type="button" value="Delete" id={index} onClick={deleteRow}/></td>
            </tr>
              )
          }
        </tbody>
      </table>  
    </div>
  );
}

export default App;
