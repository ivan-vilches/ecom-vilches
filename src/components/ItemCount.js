import React, { useState } from "react";

const ItemCount = ({ stock, onAdd, initial }) => {
  const [count, setCount] = useState(initial);

  const addCount = () => {
    if (stock > 1 && count <= stock) {
      const counter = count + 1;
      setCount(counter);
    }
  };

  return (
    <div>
      <button onClick={addCount}>+</button>
      {count}
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={onAdd}>Agregar Item</button>
    </div>
  );
};

export default ItemCount;
