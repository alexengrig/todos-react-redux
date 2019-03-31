import React, { memo, useState } from 'react';
import * as PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { withStyles } from '@material-ui/core';
import { TodoBody, TodoHead } from '../../components';

const styles = theme => ({
  root: {
    minWidth: '50%',
    maxWidth: '50%',
    border: '1px solid black'
  },

  head: {},
  headAction: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headControl: {
    display: 'flex',
    flexDirection: 'row',
    height: '48px'
  },
  headInput: {
    flex: 1,
    marginLeft: `${theme.spacing.unit}px`,
    marginRight: `${theme.spacing.unit}px`,
    fontSize: '20px'
  },
  headTitle: {
    fontSize: '8vmin',
    fontFamily: `${theme.typography.fontFamily}`,
    color: `${theme.palette.common.white}`
  },

  body: {},
  bodyList: {
    padding: 0
  },
  bodyListItem: {
    backgroundColor: `${theme.palette.common.white}`,
    borderRadius: `${theme.shape.borderRadius}px`,
    padding: `${theme.spacing.unit / 4}px ${theme.spacing.unit / 2}px`,
    marginTop: `${theme.spacing.unit / 8}px`
  },
  bodyListItemInputAction: {},
  bodyListItemCheckbox: {},
  bodyListItemInput: {
    flex: 1,
    marginLeft: `${theme.spacing.unit}px`,
    marginRight: `${theme.spacing.unit}px`,
    wordBreak: 'break-all',
    cursor: 'pointer'
  },
  bodyListItemInputCompleted: {
    color: `${theme.palette.text.disabled}`,
    textDecoration: 'line-through'
  },
  bodyListItemInputMutated: {
    fontStyle: 'oblique'
  },

  iconButton: {
    padding: `${theme.spacing.unit}px`
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
});

const createTodo = (text = '', props = {}) => {
  const { id = v4(), completed = false, archived = false } = props;
  return { id, text, completed, archived };
};
const initialState = {
  1: createTodo('Todo 1', { id: 1 })
};

const Todos = ({ classes = {}, todos: initialTodos = initialState }) => {
  const [todos, setTodos] = useState(initialTodos);
  const handleAddTodo = text => {
    if (!text) return;
    const { id, ...todo } = createTodo(text);
    setTodos({ ...todos, [id]: { ...todo, id } });
  };
  const handleChangeTodoText = (id, text) => {
    if (!text) handleDeleteTodo(id);
    const { [id]: todo, ...target } = todos;
    setTodos({ ...target, [id]: { ...todo, text } });
  };
  const handleDeleteTodo = id => {
    const { [id]: { archived, ...todo }, ...target } = todos;
    if (archived) setTodos(target);
    else setTodos({ ...target, [id]: { ...todo, archived: !archived } });
  };
  const handleCompleteTodo = (id, completed) => {
    const { [id]: todo } = todos;
    setTodos({ ...todos, [id]: { ...todo, completed } });
  };
  return (
    <section className={classes.root}>
      <TodoHead classes={classes}
                onAddTodo={handleAddTodo}
      />
      <TodoBody classes={classes}
                todos={Object.values(todos)}
                onChangeTodoText={handleChangeTodoText}
                onDeleteTodo={handleDeleteTodo}
                onCompleteTodo={handleCompleteTodo}
      />
    </section>
  );
};

Todos.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(memo(Todos));
