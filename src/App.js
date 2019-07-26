import React from "react";

import "./App.css";

function MakeItem(props) {
	let { item, isChecked } = props.itemObj;
	let toShow = item.length > 50 ? item.slice(0, 45) + "..." : item;
  let strike = isChecked ? "strike" : "";
  
	return (
		<li>
			<div className="tags has-addons todo-item">
				<input type="checkbox" className="check-box" checked={props.checkValue} onClick={props.checkItem} />
				<span className={`item tag is-primary ${strike}`}>
					{toShow}
					<button className="delete is-large" onClick={props.onClickDelete} />
				</span>
			</div>
		</li>
	);
}


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todoList: [
				{ item: "Tweet", isChecked: false },
				{ item: "Reflection", isChecked: false },
				{ item: "Kata", isChecked: false },
				{ item: "Commit", isChecked: false }
			],
			todoitem: "",
			filter: "all"
		};
	}

	handleInput = e => {
		this.setState({ todoitem: e.target.value });
	};

	removeItem(i) {
		let newItem = this.state.todoList.slice();
		newItem.splice(i, 1);
		this.setState({ todoList: newItem });
	}

	addItem() {
		let task = this.state.todoitem;
		if (task.length > 0) {
			let newItem = this.state.todoList.slice();
			newItem.push({ item: task, isChecked: false });
			this.setState({ todoList: newItem });
			this.setState({ todoitem: "" });
		}
	}

	deleteAll() {
		this.setState({ todoList: [] });
	}

	checkItem(i) {
		let newItem = this.state.todoList.slice();
		newItem[i].isChecked = !this.state.todoList[i].isChecked;
		this.setState({ todoList: newItem });
  }
  
  setFilter = (filter) => {
    this.setState({filter})
  }

	render() {
		var listItems = [];
		switch (this.state.filter) {
			case "pending":
        // this.state.todoList.filter(itemObj => !itemObj.isChecked).forEach((itemObj, i) => {
          this.state.todoList.forEach((itemObj, i) => {
            if(!itemObj.isChecked){

              listItems.push(
                <MakeItem
                  itemObj={itemObj}
                  onClickDelete={() => this.removeItem(i)}
                  checkItem={() => this.checkItem(i)}
                  checkValue = {itemObj.isChecked}
                />
              );
            }

          }
				);
				break;
			case "checked":
          // this.state.todoList.filter(itemObj => itemObj.isChecked).forEach((itemObj, i) => {
          this.state.todoList.forEach((itemObj, i) => {
            if(itemObj.isChecked) {

              listItems.push(
                <MakeItem
                  itemObj={itemObj}
                  onClickDelete={() => this.removeItem(i)}
                  checkItem={() => this.checkItem(i)}
                  checkValue = {itemObj.isChecked}
                />
              );
            }

				});
				break;
			default:
				this.state.todoList.forEach((itemObj, i) => {
					listItems.push(
						<MakeItem
							itemObj={itemObj}
							onClickDelete={() => this.removeItem(i)}
							checkItem={() => this.checkItem(i)}
              checkValue = {itemObj.isChecked}
						/>
					);
				});
				break;
		}

    
		return (
			<div className="App box">
				<h1 className="title is-1 is-spaced">Todo List</h1>

				<div className="hero-field">
					<input
						className="input is-info todo-task is-large"
						value={this.state.todoitem}
						type="input"
						onChange={this.handleInput}
					/>
					<button
						className="add-btn button is-info is-large"
						onClick={() => this.addItem()}
					>
						Add
					</button>
					<button
						className="button is-danger is-large"
						onClick={() => this.deleteAll()}
					>
						Delete All
					</button>
				</div>
				<div className="flex">
					<button
						className={`button is-warning flex-item is-large`}
						onClick={() => this.setFilter("all")}
					>
						All Items
					</button>
					<button
						className={`button is-warning flex-item is-large`}
						onClick={() => this.setFilter("checked")}
					>
						Checked Items
					</button>
					<button
						className={`button is-warning flex-item is-large`}
						onClick={() => this.setFilter("pending")}
					>
						Items Pending
					</button>
				</div>

				<ul>{listItems.length>0 ? listItems : <p className="help is-danger">No Items to Show</p>}</ul>
			</div>
		);
	}
}

export default App;
