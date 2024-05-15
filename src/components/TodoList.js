import React from 'react';

function TodoList() {
  const todoItems = [
    "Read SpringBoot",
    "Complete assignments",
    "Prepare breakfast",
    "Sleep for 2 hours",
    "Take a shower"
  ];

  return (
    <div className="todo-list">
      {todoItems.map((item, index) => (
        <div key={index} className="todo-item">
          {item}
        </div>
      ))}
    </div>
  );
}

export default TodoList;

