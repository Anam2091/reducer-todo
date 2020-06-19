import React,{useState,useReducer} from 'react';
import './App.css';
import { initialState, todoReducer } from "./reducers";
import Todo from "./components/Todo"
import TodoForm from "./components/TodoForm"



function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);


  return (
    <div className="App">
      <header className="App-header">
      {
        state.items.map((todo) =>{
          return(
            <Todo todo={todo} dispatch={dispatch}/>
          )
        })

      }
        <TodoForm dispatch={dispatch}/>
        
      </header>
    </div>
  );
}

export default App;
