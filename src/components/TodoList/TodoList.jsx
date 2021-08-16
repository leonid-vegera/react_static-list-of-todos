/* eslint-disable*/
import React from 'react';
import propTypes from 'prop-types';

import './TodoList.scss';
import { Todo } from '../Todo';

export const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id} className="todo__item">
        <Todo
          todo={todo}
        />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
