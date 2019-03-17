import React, { memo } from 'react';
import { TodoList } from '../index';

const TodoBody = ({ todos }) => (<article className="Todos-body">
  <TodoList todos={todos} />
</article>);

export default memo(TodoBody);
