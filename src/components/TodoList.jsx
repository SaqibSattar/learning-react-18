import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    let date = new Date();
    let todoCounter = 1;

    this.state = {
      todoCounter: todoCounter,
      list: [
        {
          id: todoCounter,
          createdAt: date,
        },
      ],
    };
    this.addToStart = this.addToStart.bind(this);
    this.addToEnd = this.addToEnd.bind(this);
    this.sortByEarliest = this.sortByEarliest.bind(this);
    this.sortByLatest = this.sortByLatest.bind(this);
  }

  addToStart() {
    let date = new Date();
    let newId = this.state.todoCounter + 1;
    let newList = [
        {id: newId, createdAt: date},
        ...this.state.list
    ]

    this.setState({
        list: newList,
        todoCounter: newId
    })
  }

  addToEnd() {
    let date = new Date();
    let newId = this.state.todoCounter + 1;
    let newList = [
        ...this.state.list,
        {id: newId, createdAt: date}
    ]

    this.setState({
        list: newList,
        todoCounter: newId
    })
  }

  sortByEarliest() {
    let sortedList = this.state.list.sort((a,b) => {
        return a.createdAt - b.createdAt
    })
    this.setState({
        list: [...sortedList]
    })
  }

  sortByLatest() {
    let sortedList = this.state.list.sort((a,b) => {
        return b.createdAt - a.createdAt
    })
    this.setState({
        list: [...sortedList]
    })
  }

  render() {
    return (
      <div>
        <code>key=index</code>
        <br />
        <button onClick={this.addToStart}>Add New to Start</button>
        <button onClick={this.addToEnd}>Add New to End</button>
        <button onClick={this.sortByEarliest}>Sort by Earliest</button>
        <button onClick={this.sortByLatest}>Sort by Latest</button>
        <table>
          <tr>
            <th>Index</th>
            <th>ID</th>
            <th>Item</th>
            <th>Created at</th>
          </tr>
          {this.state.list.map((todo, index) => (
            <Todo key={index} index={index} {...todo} />
          ))}
        </table>
      </div>
    );
  }
}

export default TodoList;

//   constructor() {
//     super();
//     const date = new Date();
//     const todoCounter = 1;
//     this.state = {
//       todoCounter: todoCounter,
//       list: [
//         {
//           id: todoCounter,
//           createdAt: date,
//         },
//       ],
//     };

//     this.addToStart = this.addToStart.bind(this)
//     this.addToEnd = this.addToEnd.bind(this)
//     this.sortByEarliest = this.sortByEarliest.bind(this)
//     this.sortByLatest = this.sortByLatest.bind(this)
//   }

//   sortByEarliest() {
//     const sortedList = this.state.list.sort((a, b) => {
//       return a.createdAt - b.createdAt;
//     });
//     this.setState({
//       list: [...sortedList],
//     });
//   }

//   sortByLatest() {
//     const sortedList = this.state.list.sort((a, b) => {
//       return b.createdAt - a.createdAt;
//     });
//     this.setState({
//       list: [...sortedList],
//     });
//   }

//   addToEnd() {
//     const date = new Date();
//     const nextId = this.state.todoCounter + 1;
//     const newList = [
//       ...this.state.list,
//       {id: nextId, createdAt: date},
//     ];
//     this.setState({
//       list: newList,
//       todoCounter: nextId,
//     });
//   }

//   addToStart() {
//     const date = new Date();
//     const nextId = this.state.todoCounter + 1;
//     const newList = [
//       {id: nextId, createdAt: date},
//       ...this.state.list,
//     ];
//     this.setState({
//       list: newList,
//       todoCounter: nextId,
//     });
//   }
