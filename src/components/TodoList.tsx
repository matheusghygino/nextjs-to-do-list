import React from "react";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: {
        id: number;
        text: string;
        completed: boolean;
    }[];
    onDelete: (id: number) => void;
    onToggle: (id:number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onToggle }) => {
    return (
        <div className="bg-white shadow-md rounded-lg">
            {todos.map((todo) => (
                <TodoItem 
                    key={todo.id}
                    todo={todo}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
};

export default TodoList;
