import React, { useState } from 'react';

function TodoList() {
  const [todoItems, setTodoItems] = useState([
    "Read SpringBoot",
    "Complete assignments",
    "Prepare breakfast",
    "Sleep for 2 hours",
    "Take a shower"
  ]);

  const handleEmptyButtonClick = () => {
    setTodoItems([]);
  };

  return (
    <div className="todo-list">
      {todoItems.length === 0 ? (
        <p><em>Nothing to do buddy. Sleep!</em></p>
      ) : (
        todoItems.map((item, index) => (
          <div key={index} className="todo-item">
            {item}
          </div>
        ))
      )}
      {todoItems.length > 0 && (
        <button onClick={handleEmptyButtonClick}>Empty</button>
      )}
    </div>
  );
}

export default TodoList;
