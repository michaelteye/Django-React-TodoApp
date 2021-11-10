
import React, { Component } from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';

// const list = [
  
//     {
//         "id": 1,
//         "title": "Python Crush Course",
//         "body": "best python book ever, with massive in depth about python and its packages"
//     },
//     {
//         "id": 2,
//         "title": "django crush course",
//         "body": "best of all django course, this course was introduce in the 2014"
//     },
//     {
//         "id": 3,
//         "title": "git and github",
//         "body": "this course was created by Mosh, it is found to be one of the best course on Udemy"
//     }

// ]
class App extends Component {
  state = {
    todos : []
  
};

componentDidMount() {
  this.getTodos();
}

getTodos() {
  axios
    .get('http://127.0.0.1:8000/api/')
    .then(res => {
      this.setState({ todos: res.data});
    })
    .catch(err => {
      console.log(err);
    })
}

render() {
  return (
    <div>
      {this.state.todos.map(item => (
        <div key = {item.id}>
          <h1> {item.title}</h1>
          <span>{ item.body}</span>

        </div>
      ))}
    </div>
  );
}
}

export default App;