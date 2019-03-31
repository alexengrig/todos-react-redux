import React, { memo } from 'react';
import * as PropTypes from 'prop-types';
import { Divider, IconButton } from '@material-ui/core';
import { Add as AddIcon, Close as CloseIcon } from '@material-ui/icons';

const TodoHeadAction = ({ classes = {}, onClear = f => f, onAdd = f => f }) => (
  <div className={classes.headAction}>
    <IconButton className={classes.iconButton}
                onClick={onClear}
    >
      <CloseIcon className={classes.icon}
                 color="action"
                 fontSize="small"
      />
    </IconButton>
    <Divider className={classes.divider} />
    <IconButton className={classes.iconButton}
                onClick={onAdd}
    >
      <AddIcon className={classes.icon}
               color="primary"
      />
    </IconButton>
  </div>
);

TodoHeadAction.propTypes = {
  classes: PropTypes.object.isRequired,
  onClear: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired
};

export default memo(TodoHeadAction);
