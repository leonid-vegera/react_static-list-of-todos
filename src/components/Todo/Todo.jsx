import React from 'react';
import propTypes from 'prop-types';

import './Todo.scss';
import { User } from '../User';

export const Todo = ({ todo }) => (
  <section className="section">
    <p className="section__title">
      {`Title - `}
      {todo.title}
    </p>
    <p>
      <strong>Status: </strong>
      {todo.completed ? (
        <span className="section__green">Done</span>
      ) : (<span className="section__red">In progress</span>)
      }
    </p>
    <p className="section__user">
      <User user={todo.user} />
    </p>
  </section>
);

Todo.propTypes = {
  todo: propTypes.shape({
    title: propTypes.string.isRequired,
    completed: propTypes.string.isRequired,
    user: propTypes.string.isRequired,
  }).isRequired,
};
