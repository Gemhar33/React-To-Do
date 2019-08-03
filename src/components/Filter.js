import React from "react";

export default function Filter(props) {
  return (
    <div className="flex">
      <button
        className={`button is-info flex-item is-large ${
          props.filter === "all" ? "is-hovered is-inverted is-focused" : ""
        }`}
        onClick={() => props.setFilter("all")}
      >
        All Items
      </button>
      <button
        className={`button is-info flex-item is-large  ${
          props.filter === "checked" ? "is-hovered is-inverted is-focused" : ""
        }`}
        onClick={() => props.setFilter("checked")}
      >
        Checked Items
      </button>
      <button
        className={`button is-info flex-item is-large  ${
          props.filter === "pending" ? "is-hovered is-inverted is-focused" : ""
        }`}
        onClick={() => props.setFilter("pending")}
      >
        Items Pending
      </button>
    </div>
  );
}
