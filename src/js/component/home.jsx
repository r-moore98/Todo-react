import React, { useState } from "react";
import TodoItem from "./TodoItem.jsx";

function Home(props) {
  const [inputBox, setInputBox] = useState("");

  const [todolist, setToDoList] = useState([
   
  ]);

  const addIt = (e) => {
    setInputBox(e.target.value);
  };

  const removeItem = (currentItem) => {
	setToDoList((prevToDoList) =>
	  prevToDoList.filter((item) => item !== currentItem)
	);
  };
  

  return (
    <div className="list">
      <h1>todos</h1>
      <input
        type="text"
        placeholder="What Needs To Be Done?"
        value={inputBox}
        onChange={(e) => addIt(e)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setToDoList([...todolist, e.target.value]);
            setInputBox("");
          }
        }}
      />

      <ul>
        {todolist.map((item, index) => {
          return (
            <TodoItem
              item={item}
              key={item}
              removeItem={removeItem} // Pass the removeItem function as a prop
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Home;

