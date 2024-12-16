"use client";

import React, { useState } from 'react';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';

const Home: React.FC = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Aprender Next.js', completed: false },
    { id: 2, text: 'Fazer uma lista de tarefas', completed: true },
  ]);

  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Minha Lista de Tarefas
      </h1>
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
    </div>
  );
};

export default Home;