import React, { memo, useState } from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { InputBase, Typography } from '@material-ui/core';

const TodoBodyListItemInput = ({
                                 classes = {},
                                 mutated: initialMutated = false, completed = false,
                                 text = '', onChangeTodoText = f => f
                               }) => {
  const [mutated, setMutate] = useState(initialMutated);
  const className = classNames(classes.bodyListItemInput,
    mutated && classes.bodyListItemInputMutated,
    completed && classes.bodyListItemInputCompleted
  );
  const readOnly = !mutated;
  const handleBlurInput = () => setMutate(false);
  const handleKeyPressInput = ({ key }) => {
    if (key === 'Enter') setMutate(false);
  };
  const handleChangeInput = ({ target: { value: text } }) => onChangeTodoText(text);
  const handleDoubleClickTypography = () => setMutate(true);
  return mutated ? (
    <InputBase className={className}
               readOnly={readOnly}
               onBlur={handleBlurInput}
               onKeyPress={handleKeyPressInput}
               value={text}
               onChange={handleChangeInput}
               autoFocus
    />
  ) : (
    <Typography className={className}
                onDoubleClick={handleDoubleClickTypography}
                variant="subtitle1"
    >
      {text}
    </Typography>
  );
};

TodoBodyListItemInput.propTypes = {
  classes: PropTypes.object.isRequired,
  mutated: PropTypes.bool,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onChangeTodoText: PropTypes.func.isRequired,
};

export default memo(TodoBodyListItemInput);
