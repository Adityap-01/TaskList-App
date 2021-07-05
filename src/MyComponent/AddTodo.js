import React from 'react'
import { useState } from 'react';

export const AddTodo = (props) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            props.addTodo(title, desc);
            settitle("");
            setdesc("");
        }
    }
    return (
        <div className="container my-3">
            <h3 className="text-center">Add a Task</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Task Title</label>
                    <input type="text" value={title} onChange={(e) => settitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Title" />

                </div>
                <div className="form-group">
                    <label htmlFor="desc">Task Description</label>
                    <input type="text" value={desc} onChange={(e) => setdesc(e.target.value)} className="form-control" id="desc" placeholder="Description" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Task</button>
            </form>
        </div>
    )
}
