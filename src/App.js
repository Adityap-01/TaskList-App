import logo from './logo.svg';
import './App.css';
import Header from "./MyComponent/Header";
import { Todos } from "./MyComponent/Todos";
import { Footer } from "./MyComponent/Footer";
import { AddTodo } from "./MyComponent/AddTodo";
import { About } from "./MyComponent/About";
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const onDelete = (todo) => {
    setTodo(todos.filter((e) => {
      return e !== todo
    }));
  }

  const addTodo = (title, desc) => {

    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodo([...todos, mytodo]);
  }

  const [todos, setTodo] = useState([]);

  return (
    <div>
      <Router>
        <Header title="Tasks List" searchBar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <div>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </div>
            )
          }}>
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

        </Switch>



        <Footer />
      </Router>
    </div>
  );
}

export default App;
