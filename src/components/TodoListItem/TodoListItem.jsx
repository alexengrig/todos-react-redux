import React, { memo } from 'react';

const TodoListItem = ({ text }) => (<li className="Todos-list-item">{text}</li>);

export default memo(TodoListItem);
