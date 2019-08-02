import React from "react";

import MakeItem from "./components/MakeItem";
import Hero from "./components/Hero";
import Filter from "./components/Filter";
import ShowList from "./components/ShowList";

import "bulma/css/bulma.css";
import "./App.css";
import "./checkbox.css";


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

	setFilter = filter => {
		this.setState({ filter });
	};

	setListItem() {
		let listItems = [];
		switch (this.state.filter) {
			case "pending":
				// this.state.todoList.filter(itemObj => !itemObj.isChecked).forEach((itemObj, i) => {
				this.state.todoList.forEach((itemObj, i) => {
					if (!itemObj.isChecked) {
						listItems.push(
							<MakeItem
								key={i}
								itemObj={itemObj}
								onClickDelete={() => this.removeItem(i)}
								checkItem={() => this.checkItem(i)}
								checkValue={itemObj.isChecked}
							/>
						);
					}
				});
				break;
			case "checked":
				// this.state.todoList.filter(itemObj => itemObj.isChecked).forEach((itemObj, i) => {
				this.state.todoList.forEach((itemObj, i) => {
					if (itemObj.isChecked) {
						listItems.push(
							<MakeItem
								key={i}
								itemObj={itemObj}
								onClickDelete={() => this.removeItem(i)}
								checkItem={() => this.checkItem(i)}
								checkValue={itemObj.isChecked}
							/>
						);
					}
				});
				break;
			default:
				this.state.todoList.forEach((itemObj, i) => {
					listItems.push(
						<MakeItem
							key={i}
							itemObj={itemObj}
							onClickDelete={() => this.removeItem(i)}
							checkItem={() => this.checkItem(i)}
							checkValue={itemObj.isChecked}
						/>
					);
				});
				break;
		}

		return listItems;
	}

  render() {
    const listItems = this.setListItem();

    return (
      <div className="App box">
        <Hero
          todoitem={this.state.todoitem}
          handleInput={this.handleInput}
          addItem={() => this.addItem()}
          deleteAll={() => this.deleteAll()}
        />
        <Filter filter={this.state.filter} setFilter={this.setFilter} />
        <ShowList listItems={listItems} />
      </div>
    );
  }
}

export default App;
