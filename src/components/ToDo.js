import React, {Component} from 'react';

class ToDo extends Component{
    render(){
        return(
                <li className = "list">
            <input className = 'check' type= 'checkbox' checked = {this.props.isCompleted} onChange={this.props.toggleComplete}/> 
            <span>{this.props.description}</span>
            <button className = 'delete' type = 'submit' onClick = {this.props.deleteTodo}>Delete</button>
            </li>
            
        );
    }
}

export default ToDo; 