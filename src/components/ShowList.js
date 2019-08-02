import React from "react";

export default function ShowList(props) {
  return (
    <>
      <ul>
        {props.listItems.length > 0 ? (
          props.listItems
        ) : (
          <p className="help is-danger">No Items to Show</p>
        )}
      </ul>
    </>
  );
}
