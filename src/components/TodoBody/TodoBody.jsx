import React, { memo } from 'react';
import * as PropTypes from 'prop-types';
import { TodoBodyList } from '..';

const TodoBody = ({
                    classes = {},
                    todos = [], onChangeTodoText = f => f, onDeleteTodo = f => f, onCompleteTodo = f => f
                  }) => (
  <section className={classes.body}>
    <TodoBodyList classes={classes}
                  todos={todos}
                  onChangeTodoText={onChangeTodoText}
                  onDeleteTodo={onDeleteTodo}
                  onCompleteTodo={onCompleteTodo}
    />
  </section>
);

TodoBody.propTypes = {
  classes: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,
  onChangeTodoText: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onCompleteTodo: PropTypes.func.isRequired
};

export default memo(TodoBody);
