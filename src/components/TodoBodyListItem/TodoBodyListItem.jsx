import React, { memo, useState } from 'react';
import * as PropTypes from 'prop-types';
import { ListItem } from '@material-ui/core';
import { TodoBodyListItemAction, TodoBodyListItemCheckbox, TodoBodyListItemInput } from '..';

const TodoBodyListItem = ({
                            classes = {}, visible: initialVisible = false,
                            text = '', completed = false, archived = false,
                            onCompleteTodo = f => f, onChangeTodoText = f => f, onDeleteTodo = f => f
                          }) => {
  const [visible, setVisible] = useState(initialVisible);
  const handleMouseEnterItem = () => setVisible(true);
  const handleMouseLeaveItem = () => setVisible(false);
  return (
    <ListItem className={classes.bodyListItem}
              onMouseEnter={handleMouseEnterItem}
              onMouseLeave={handleMouseLeaveItem}
    >
      <TodoBodyListItemCheckbox classes={classes}
                                checked={completed}
                                onChangeCheck={onCompleteTodo}
      />
      <TodoBodyListItemInput classes={classes}
                             completed={completed}
                             text={text}
                             onChangeTodoText={onChangeTodoText}
      />
      <TodoBodyListItemAction classes={classes}
                              visible={visible}
                              onDeleteTodo={onDeleteTodo}
      />
    </ListItem>
  );
};

TodoBodyListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  visible: PropTypes.bool,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  archived: PropTypes.bool.isRequired,
  onCompleteTodo: PropTypes.func.isRequired,
  onChangeTodoText: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired
};

export default memo(TodoBodyListItem);
