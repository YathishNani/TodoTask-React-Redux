import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo,removeTodo } from "../actions/index";
import  "./todo.css";
const Todo = () =>{

    const [inputData,setInputData] = useState('');
    const list = useSelector((state)=> state.todoReducers.list)
    const dispatch = useDispatch(); 

    return (
        <>
          <div className="main-div">
            <div className="child-div">
                <div>
                    <h1> Add Your list here</h1>
                </div>
                <div className="addItems">
                    <input type="text" placeholder="Add items.." value={inputData}
                     onChange = { (event)=> setInputData(event.target.value)} 

                    />
                    
                    <i className="fa fa-plus add-btn" onClick={()=> dispatch(addTodo(inputData),setInputData(''))}> </i> 
                </div>

                <div className="showItems">
                    {    
                        list.map((elem) =>{
                            return(
                                <div className="eachItem" key={elem.id}>
                                    <h3>{elem.data}</h3>
                                    <div className="todo-btn">
                                    <i className="far add-btn" title="Delete Item" onClick={()=> dispatch(deleteTodo(elem.id))}> </i> 
                                    </div> 
                                </div> 
                                )  
                        })
                    }
                </div>
            </div>
          </div>
        </>
      )
}

export default Todo;

