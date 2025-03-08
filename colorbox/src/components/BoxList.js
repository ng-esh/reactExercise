import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";
import "../styles/BoxList.css";

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
    setBoxes([...boxes, { ...newBox, id: uuid() }]);
  };

  const removeBox = (id) => {
    setBoxes(boxes.filter(box => box.id !== id));
  };

  return (
    <div className="boxlist-container">
      <NewBoxForm addBox={addBox} />
      <div className="boxes">
        {boxes.map(({ id, width, height, backgroundColor }) => (
          <Box 
            key={id} 
            id={id} 
            width={width} 
            height={height} 
            backgroundColor={backgroundColor} 
            removeBox={removeBox} 
          />
        ))}
      </div>
    </div>
  );
}

export default BoxList;
