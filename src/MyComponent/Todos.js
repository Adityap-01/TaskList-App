import React from 'react'
import {TodoItem} from "./TodoItem";


export const Todos = (props) => {
    let myStyle = {
        minHieght:"70vh",
        margin:"40px auto"
    }
    return (
        <div className="container" style={myStyle}> 
            <h3 className="text-center my-3">Tasks List</h3>
            {props.todos.length===0?"No Tasks Left":
            props.todos.map((ele)=>{
                return (<TodoItem todo={ele} key={ele.sno} onDelete={props.onDelete}/> )
                
            })
            }
        </div>
    )
}
