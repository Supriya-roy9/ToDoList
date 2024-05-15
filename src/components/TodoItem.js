import React from 'react';

function TodoItem({ item, onItemClick }) {
  return (
    <tr>
      <td>
        <div
          className={`todo-item ${item.completed ? 'completed' : ''}`}
          onClick={() => onItemClick(item.id)}
        >
          {item.text}
        </div>
      </td>
    </tr>
  );
}

export default TodoItem;
