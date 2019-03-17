import React, { memo } from 'react';

const TodoInput = ({ onAddTodo }) => {
  const onEnterKeyPress = event => {
    if (event.key === 'Enter') {
      const todo = event.target.value;
      event.target.value = '';
      onAddTodo(todo);
    }
  };
  return (<input className="Todos-input"
                 type="text"
                 placeholder="What needs to be done?"
                 onKeyPress={onEnterKeyPress}
  />);
};

export default memo(TodoInput);
