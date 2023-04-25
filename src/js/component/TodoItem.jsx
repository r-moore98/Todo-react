// TodoItem.jsx

import React, { useState } from "react";

const TodoItem = (props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <li
      onMouseEnter={() => setToggle(true)}
      onMouseLeave={() => setToggle(false)}
    >
      {props.item}
      {toggle && (
        <button onClick={() => props.removeItem(props.item)}>Remove</button>
      )}
    </li>
  );
};

export default TodoItem;

