import React from 'react'

class TodoForm extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     items: []
  //   };

  //   this.addItem = this.addItem.bind(this);
  // }

  // addItem(e) {
  //   if (this._inputElement.value !== '') {
  //     const newItem = {
  //       text: this._inputElement.value,
  //       key: Date.now()
  //     };
  //     this.setState((prevState) => {
  //       return {
  //         items: prevState.items.concat(newItem)
  //       };
  //     });
  //     this._inputElement.value = '';
  //   }
  //   console.log(this.state.items);
  //   e.preventDefault();
  // }
  constructor() {
    super();
    this.state = {
      todoText: ''
    };
  }

  handleChanges = e => {
    this.setState({
      todoText: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.todoText);
    this.setState({todoText: ''});
  };

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          name='item'
          type='text'
          id='item'
          placeholder='...todo'
          value={this.state.todoText}
          onChange={this.handleChanges}
        />
        <button type='submit'>Add Todo</button>

        <button 
        className='clear' 
        onClick={this.props.clearCompleted}
      >
        Clear Completed
      </button>
      </form>
    );
  }
}

export default TodoForm;