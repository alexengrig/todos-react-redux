import React, { memo } from 'react';
import * as PropTypes from 'prop-types';
import { CardActions, Typography } from '@material-ui/core';

const TodoFoot = ({ classes, count }) => {
  return (
    <CardActions className={classes.actions}>
      <Typography paragraph>{`${count} item left`}</Typography>
    </CardActions>
  );
};

TodoFoot.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired
};

export default memo(TodoFoot);
