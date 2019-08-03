import React from "react";

export default function Hero(props) {
  return (
    <>
      <h1 className="subtitle is-1 is-spaced">Todo List</h1>
      <div className="hero-field">
        <input
          className="input is-link todo-task is-large"
          value={props.todoitem}
          type="input"
          onChange={props.handleInput}
        />
        <button
          className="add-btn button is-info is-large"
          onClick={props.addItem}
        >
          Add
        </button>
        <button className="button is-danger is-large" onClick={props.deleteAll}>
          Delete All
        </button>
      </div>
    </>
  );
}
