import React from "react";

export default function MakeItem(props) {
  let { item, isChecked } = props.itemObj;
  let toShow = item.length > 50 ? item.slice(0, 45) + "..." : item;
  let strike = isChecked ? "strike" : "";

  return (
    <li>
      <div className="item-box tags has-addons todo-item">
        <div>
          <label class="toggle">
            <input
              class="toggle__input"
              type="checkbox"
              checked={props.checkValue}
              onChange={props.checkItem}
            />
            <span class="toggle__label">
              <span class="toggle__text" />
            </span>
          </label>
        </div>
        <span className={`item tag is-primary ${strike}`}>
          {toShow}
          <button className="delete is-large" onClick={props.onClickDelete} />
        </span>
      </div>
    </li>
  );
}
