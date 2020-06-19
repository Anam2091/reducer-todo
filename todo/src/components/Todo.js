import React,{useState,useReducer} from 'react';





const Todo =(props)=>{

    const dispatch =(e)=>{
        e.preventDefault();
        props.dispatch({ type: "TO_TOGGLE", payload:props.todo.id });

    }


    return(
        <div onClick={dispatch} className={`item${props.todo.completed ? ' completed' : ''}`}>

        {props.todo.item}
        {props.todo.completed}
        {/* {props.todo.id} */}

        </div>
    )
}


export default Todo;