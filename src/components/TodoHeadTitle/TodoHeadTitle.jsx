import React, { memo } from 'react';
import * as PropTypes from 'prop-types';

const TodoHeadTitle = ({ classes, title = 'Todos' }) => (
  <span className={classes.headTitle}>
    {title}
  </span>
);

TodoHeadTitle.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string
};

export default memo(TodoHeadTitle);
