import React, { memo, useState } from 'react';
import { TodoHead, TodoBody } from './components';
import './Todos.css';


const Todos = memo(() => {
  const [todos, setTodos] = useState([]);
  return (<section className="Todos">
    <TodoHead onAddTodo={todo => setTodos([...todos, todo])} />
    <TodoBody todos={todos} />
  </section>);
});

export default Todos;
