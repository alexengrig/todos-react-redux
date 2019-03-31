import React, { memo } from 'react';
import * as PropTypes from 'prop-types';
import { TodoHeadControl, TodoHeadTitle } from '..';

const TodoHead = ({ classes = {}, onAddTodo = f => f }) => (
  <section className={classes.head}>
    <TodoHeadTitle classes={classes} />
    <TodoHeadControl classes={classes}
                     onAddTodo={onAddTodo}
    />
  </section>
);

TodoHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onAddTodo: PropTypes.func.isRequired
};

export default memo(TodoHead);
