import React, { useState } from 'react';
import TodoItem from './TodoItem';
import EmptyMessage from './EmptyMessage';
import RemoveCompletedButton from './RemoveCompletedButton';

function TodoList() {
  const [todoItems, setTodoItems] = useState([
    { id: 1, text: "Read SpringBoot", completed: false },
    { id: 2, text: "Complete assignments", completed: false },
    { id: 3, text: "Prepare breakfast", completed: false },
    { id: 4, text: "Sleep for 2 hours", completed: false },
    { id: 5, text: "Take a shower", completed: false }
  ]);

  const handleItemClick = (id) => {
    setTodoItems(todoItems.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const handleRemoveCompleted = () => {
    setTodoItems(todoItems.filter(item => !item.completed));
  };

  return (
    <div className="todo-list">
      {todoItems.length === 0 ? (
        <EmptyMessage />
      ) : (
        <table>
          <tbody>
            {todoItems.map(item => (
              <TodoItem
                key={item.id}
                item={item}
                onItemClick={handleItemClick}
              />
            ))}
          </tbody>
        </table>
      )}
      <RemoveCompletedButton onClick={handleRemoveCompleted} />
    </div>
  );
}

export default TodoList;
