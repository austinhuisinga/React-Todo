import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const data = [
  {
    task: 'Work out',
    id: 1,
    completed: false
  },
  {
    task: 'Work on tomorrow\'s assignment',
    id: 2,
    completed: false
  },
  {
    task: 'Walk the dog',
    id: 3,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

 

  constructor() {
    super();

    this.state = {
      listItems: data
    };
  }

  addItem = itemText => {
    const newItem = {
      task: itemText,
      completed: false,
      id: Date.now()
    };
    this.setState({
      listItems: [...this.state.listItems, newItem]
    });
  };

  toggleCompleted = id => {
    const newTodoList = this.state.listItems.map(item => {
      if(item.id === id) {
        return {
          ... item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    this.setState({
      listItems: newTodoList
    });
  }

  clearCompleted = () => {
    this.setState({
      listItems: this.state.listItems.filter(task => !task.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          listItems={this.state.listItems} 
          toggleCompleted={this.toggleCompleted}
        />
        <TodoForm 
          addItem={this.addItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
