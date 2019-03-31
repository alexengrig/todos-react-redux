import React, { memo } from 'react';
import * as PropTypes from 'prop-types';
import { List } from '@material-ui/core';
import { TodoBodyListItem } from '..';

const TodoBodyList = ({
                        classes = {},
                        todos = [], onChangeTodoText = f => f, onDeleteTodo = f => f, onCompleteTodo = f => f
                      }) => (
  <List className={classes.bodyList}>
    {todos.map(({ id, ...todo }, key) => (
      <TodoBodyListItem {...todo}
                        classes={classes}
                        key={key}
                        onCompleteTodo={completed => onCompleteTodo(id, completed)}
                        onChangeTodoText={text => onChangeTodoText(id, text)}
                        onDeleteTodo={() => onDeleteTodo(id)}
      />
    ))}
  </List>
);

TodoBodyList.propTypes = {
  classes: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,
  onChangeTodoText: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onCompleteTodo: PropTypes.func.isRequired
};

export default memo(TodoBodyList);
