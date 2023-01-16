import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "bootstrap/dist/css/bootstrap.min.css";

function Todo() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <TodoInput />
          <h3 className="mt-5 pt-4">
            <span className="border-bottom border-3 border-secendary">
              {" "}
              * Your Todos List *{" "}
            </span>
          </h3>
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default Todo;
