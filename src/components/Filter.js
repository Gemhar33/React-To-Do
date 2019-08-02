import React from "react";

export default function Filter(props) {
  return (
    <div className="flex">
      <button
        className={`button is-warning flex-item is-large ${
          props.filter === "all" ? "is-focused" : ""
        }`}
        onClick={() => props.setFilter("all")}
      >
        All Items
      </button>
      <button
        className={`button is-warning flex-item is-large  ${
          props.filter === "checked" ? "is-focused" : ""
        }`}
        onClick={() => props.setFilter("checked")}
      >
        Checked Items
      </button>
      <button
        className={`button is-warning flex-item is-large  ${
          props.filter === "pending" ? "is-focused" : ""
        }`}
        onClick={() => props.setFilter("pending")}
      >
        Items Pending
      </button>
    </div>
  );
}
