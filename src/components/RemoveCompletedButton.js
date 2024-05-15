import React from 'react';

function RemoveCompletedButton({ onClick }) {
  return (
    <button className="empty-button" onClick={onClick}>
      Remove Completed
    </button>
  );
}

export default RemoveCompletedButton;
