import React, { memo, useState } from 'react';
import * as PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import { TodoHeadAction, TodoHeadInput } from '..';

const TodoHeadControl = ({ classes = {}, onAddTodo = f => f, text: initialText = '' }) => {
  const [text, setText] = useState(initialText);
  const handleClearText = () => setText('');
  const handleChangeText = text => setText(text);
  const handleAddTodo = () => {
    handleClearText();
    onAddTodo(text);
  };
  const actionIsVisible = Boolean(text.length);
  return (
    <Paper className={classes.headControl}
           elevation={1}
    >
      <TodoHeadInput classes={classes}
                     text={text}
                     onChangeText={handleChangeText}
                     onAddTodo={handleAddTodo}
      />
      {actionIsVisible &&
      <TodoHeadAction classes={classes}
                      visible={actionIsVisible}
                      onAdd={handleAddTodo}
                      onClear={handleClearText}
      />}
    </Paper>
  );
};
TodoHeadControl.propTypes = {
  classes: PropTypes.object.isRequired,
  onAddTodo: PropTypes.func.isRequired,
  text: PropTypes.string
};

export default memo(TodoHeadControl);
