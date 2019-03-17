import React, { memo } from 'react';
import { TodoHeader, TodoInput } from '../index';

const TodoHead = ({ onAddTodo }) => (<article className="Todos-head">
  <TodoHeader />
  <TodoInput onAddTodo={onAddTodo} />
</article>);

export default memo(TodoHead);
