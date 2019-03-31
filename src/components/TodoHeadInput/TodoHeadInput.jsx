import React, { memo } from 'react';
import * as PropTypes from 'prop-types';
import { InputBase } from '@material-ui/core';

const TodoHeadInput = ({
                         classes = {}, text = '', onChangeText = f => f, onAddTodo = f => f,
                         placeholder = 'What needs to be done?'
                       }) => {
  const handleChangeInput = ({ target: { value } }) => onChangeText(value);
  const handleKeyPressInput = ({ key }) => {
    if (key === 'Enter') {
      onAddTodo(text);
    }
  };
  return (
    <InputBase className={classes.headInput}
               placeholder={placeholder}
               value={text}
               onChange={handleChangeInput}
               onKeyPress={handleKeyPressInput}
               autoFocus
    />
  );
};

TodoHeadInput.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default memo(TodoHeadInput);
