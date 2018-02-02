import React, { Component } from 'react';
import './App.css';
import  ListItem from './components/Todo';
import Form from './components/Form';
import Filter from './components/Filter';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      listItem: [
          {id: 1, content: "Take out trash", completed: true},
          {id: 2, content: "Clean the room", completed: false},
          {id: 3, content: "Go shopping", completed: false},
          {id: 4, content: "Wash the disk", completed: false},
          {id: 5, content: "Fix the car", completed: true},
          {id: 6, content: "Do homework", completed: false},
          {id: 7, content: "Make dinner", completed: false},
      ],
      dataFilter: [],
      uncomplete: 5,
      lastItemId: 7,
      inputValue: '',
      validation: '',
      filter: 'default'
    }

    this.checkboxChangeHandler = this.checkboxChangeHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.createItem = this.createItem.bind(this)
  }

  componentDidMount = () => {
    this.setState({ dataFilter: this.state.listItem });
  }

  checkboxChangeHandler = (itemId) => {
    let list = this.state.listItem;
    let leftJob = 0;
    let complete = 0;
    list.map((item) => {
      if (item.id === parseInt(itemId, 10)) {
        item.completed = !item.completed;
        complete = item.completed ? 1 : -1;
        leftJob = this.state.uncomplete - complete;
      }
      return 1;
    });
    this.setState({
      listItem: list,
      uncomplete: leftJob
    });
    this.filterChangeHandler(this.state.filter);
  }

  removeItem = (itemId) => {
    let list = this.state.listItem;
    let leftJob = this.state.uncomplete;
    list.map((item, index) => {
      if (item.id === parseInt(itemId, 10)) {
        let count = item.completed ? 0 : 1;
        leftJob -= count;
        list.splice(index, 1);
      }
    })
    this.setState({
      listItem: list,
      uncomplete: leftJob
    });
    this.filterChangeHandler(this.state.filter);
  }

  handleChange = (value) => {
    this.setState({
        inputValue: value,
        validation: ''
    });
  }

  createItem = () => {
    if (this.state.inputValue.trim() === '') {
      this.setState({ validation: 'Please input something' })
    } else {
      let list = this.state.listItem;
      let lastId = this.state.lastItemId + 1;
      let total = this.state.uncomplete + 1;
      list.push({
        id: lastId,
        content: this.state.inputValue,
        completed: false
      });
      this.setState({
        listItem: list,
        lastItemId: lastId,
        inputValue: '',
        uncomplete: total
      });
      this.filterChangeHandler(this.state.filter);
    }
  }

  filterChangeHandler = (filterValue) => {
    let listItem = this.state.listItem;
    let filterItem = [];
    if (filterValue === 'completed') {
      filterItem = listItem.filter(item => item.completed === true);
    } else if (filterValue === 'uncompleted') {
      filterItem = listItem.filter(item => item.completed === false);
    } else {
      filterItem = listItem;
    }
    this.setState({
      dataFilter: filterItem,
      filter: filterValue
    });

  }

  render() {
    return (
      <div className="container">
          <div className="row">
            <h3 className="center-align">
              You have {this.state.uncomplete} things to do left
            </h3>
            <Filter onFilterChange={this.filterChangeHandler} />
          </div>
          <div className="row">
            <ListItem
              list={this.state.dataFilter}
              listClick={this.checkboxChangeHandler}
              onRemoveItem={this.removeItem}/>
            <Form
              value={this.state.inputValue}
              validation={this.state.validation}
              onValueChange={this.handleChange}
              onItemCreate={this.createItem}/>
          </div>
      </div>
    );
  }
}

export default App;
