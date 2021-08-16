/* eslint-disable*/
import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList';

//! в новый массив добавляем каждому объекту свойтво 
//! юзер, котрое мы находим в массиве объектов users, если его id  совпадает с прописанным в todo id
let preparedTodos = todos.map(todo => ({ ...todo, user: (users.find(user => user.id === todo.userId)) }));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <TodoList
          todos={preparedTodos}
        />
      </p>

      <p>
        <span>Users: </span>
        {users.length}
      </p>
    </div>
  );
}

export default App;
