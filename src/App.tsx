import React, { useState } from "react";
import "./App.css";
import { Todo } from "./Todo";

interface ITodo {
  text: string;
  isCompleted: boolean;
  id: number;
}

function nextId() {
  return Date.now();
}

function App() {
  const [todos, setTodos] = useState([] as ITodo[]);
  const [todoText, setTodoText] = useState("");

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setTodoText(e.currentTarget.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              setTodos((todos) => [
                ...todos,
                {
                  id: nextId(),
                  text: (e.target as HTMLInputElement).value,
                  isCompleted: false,
                },
              ]);
              setTodoText("");
            }
          }}
          value={todoText}
        />
      </div>
      <div className="App">
        {todos.map((todo) => (
          <Todo text={todo.text} isCompleted={todo.isCompleted} key={todo.id} />
        ))}
      </div>
    </>
  );
}

export default App;
