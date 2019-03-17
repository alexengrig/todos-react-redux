import React, { memo } from 'react';
import { TodoListItem } from '../';

const TodoList = ({ todos }) => (<ul className="Todos-list">
  {todos.map((todo, key) => (<TodoListItem key={key} text={todo} />))}
</ul>);

export default memo(TodoList);
