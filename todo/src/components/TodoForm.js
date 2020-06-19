import React from 'react'
import {useForm} from "../hooks/useForm"



const initialValue = {
    item: "",
    
  };


const TodoForm =(props)=>{

    const [values, clearForm, handleChanges] = useForm(
        "checkoutForm",
        initialValue
      );



return(

    <div>
        <form>
            <h2>Add Todo</h2>
            <label>
          Todo:
          <input name="item" value={values.item} onChange={handleChanges} />
        </label>




        <button
            onClick={(e) => {
                e.preventDefault();
              props.dispatch({ type: "ADD_TODO", payload: values });
            }}
          >
              Add Todo
          </button>

        </form>

    </div>
)



}

export default TodoForm;





