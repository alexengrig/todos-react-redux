import React, { memo } from 'react';
import * as PropTypes from 'prop-types';
import { Fade, IconButton } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';

const TodoBodyListItemAction = ({ classes = {}, visible = false, onDeleteTodo = f => f }) => {
  return (
    <Fade in={visible}>
      <IconButton className={classes.iconButton}
                  onClick={onDeleteTodo}
      >
        <CloseIcon color="secondary"
                   fontSize="small"
        />
      </IconButton>
    </Fade>
  );
};

TodoBodyListItemAction.propTypes = {
  classes: PropTypes.object.isRequired,
  visible: PropTypes.bool,
  onDeleteTodo: PropTypes.func.isRequired
};

export default memo(TodoBodyListItemAction);
