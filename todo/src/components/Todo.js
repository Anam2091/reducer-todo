import React,{useState,useReducer} from 'react';


const Todo =(props)=>{


    return(
        <div>

        {props.todo.item}
        {props.todo.completed}
        {/* {props.todo.id} */}

        </div>
    )
}


export default Todo;