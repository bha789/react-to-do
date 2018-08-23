import React, {Component} from 'react';
import './index.css';
import ToDo from './components/ToDo.js';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        todos: [
        {description: 'clean house', isCompleted: true},
        {description: 'feed cat', isCompleted: false},
        {description: 'take out trash', isCompleted: false}
        ],
  
        newTodoDescription: ''
      };
    }
  
  
    toggleComplete(index){
      const todos = this.state.todos.slice();
      const todo = todos[index];
      todo.isCompleted = todo.isCompleted ? false : true; 
      this.setState({todos : todos});
    }
  
    handleSubmit(e){
      e.preventDefault();
      if (!this.state.newTodoDescription) { return }
      const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
      this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
    }
  
    handleChange(e){
      this.setState({newTodoDescription: e.target.value})
    }
  
    deleteTodo(index){
      const filteredTodos = this.state.todos.slice();
      filteredTodos.splice(index, 1)
      this.setState({todos: filteredTodos});
    }
  
    render() {
      return (
        <div className="App">
          <ul>
            {this.state.todos.map( (todo, index) => 
            <ToDo key = {index} description = {todo.description} isComplete = {todo.isCompleted} toggleComplete = {() => this.toggleComplete(index)} deleteTodo = {() => this.deleteTodo(index)}/>)}
          </ul>
          <form onSubmit = {(e) => this.handleSubmit(e) }>
            <input className = "input" type = 'text' value = {this.state.newTodoDescription} onChange={ (e) => this.handleChange(e) }/>
            <input className = "button" type = 'submit'/> 
          </form>
        </div>
      );
    }
  }
  
  export default App;