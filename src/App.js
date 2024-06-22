import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  // Function to handle adding a task
  const handleTask = (e) => {
    if (input.trim() === "") {
      return;
    }

    if (isEditing) {
      const updatedList = [...list];
      updatedList[currentIndex] = input;
      setList(updatedList);
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      setList([...list, input]);
    }

    setInput("");
  };

  // Function to handle input changes
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  // Function to handle deleting a task
  const handleDelete = (i) => {
    const filteredList = list.filter((_, index) => index !== i);
    setList(filteredList);
  };

  // Function to handle editing a task
  const handleEdit = (i) => {
    setInput(list[i]);
    setIsEditing(true);
    setCurrentIndex(i);
  };

  return (
    <div className="App">
      <h2>Todo App</h2>
      <div className="container">
        <div className="input-box">
          <input
            type="text"
            value={input}
            onChange={(e) => handleInput(e)}
            placeholder="Enter your task here"
            style={{ marginRight: "10px" }} // Add margin-right directly
          />
          <button onClick={handleTask}>
            {isEditing ? "Update Task" : "Add Task"}
          </button>
        </div>
        <div className="list">
          <ul>
            {list.map((item, i) => (
              <li key={i} className="task-item">
                <div className="task-content">
                  {item}
                  <div className="buttons">
                    <button
                      className="edit-button"
                      onClick={() => handleEdit(i)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(i)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
