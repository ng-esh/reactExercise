import React from "react";
import "../styles/Box.css";

function Box({ id, width, height, backgroundColor, removeBox }) {
  return (
    <div className="box-container">
      <div 
        className="box"
        style={{ 
          width: `${width}rem`, 
          height: `${height}rem`, 
          backgroundColor 
        }} 
      />
      <button className="remove-btn" onClick={() => removeBox(id)}>X</button>
    </div>
  );
}

export default Box;
