"use client";
import React, { useState } from "react";

export default function TodoList() {
  const [val, setVal] = useState("");
  const [todo, setTodo] = useState([]);
  const [completed, setCompleted] = useState([]);

  function handleInput(e) {
    setVal(e.target.value);
  }

  function storeTodo() {
    if (val.trim() !== "") {
      setTodo([...todo, val]);
      setVal("");
    }
  }

  function markAsCompleted(index) {
    const completedTask = todo[index];
    setCompleted([...completed, completedTask]);
    setTodo(todo.filter((_, i) => i !== index));
  }
  return (
    <>
      <div div className="flex flex-col items-center justify-center gap-4 py-2">
        <input
          onChange={handleInput}
          value={val}
          type="text"
          placeholder="Enter todo"
          className="w-full flex justify-center mx-auto max-w-sm p-3 text-gray-800 placeholder-gray-500 border-2 border-indigo-500 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-300 hover:shadow-md transition duration-200"
        />

        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mx-auto"
          onClick={storeTodo}
        >
          Submit
        </button>
      </div>
      <div className="flex justify-start align-top gap-5 flex-row">
        <div className="border-2 border-black w-1/2 rounded-md p-3">
          <h1 className="flex justify-center underline font-bold">Todo List</h1>
          {todo.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-row justify-between items-center w-full pb-2"
              >
                <h1 className="text-lg font-semibold">{item}</h1>
                <button
                  onClick={() => markAsCompleted(index)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded"
                >
                  ✔
                </button>
              </div>
            );
          })}
        </div>
        <div className="border-2 border-black w-1/2 rounded-md p-3">
          <h1 className="flex justify-center underline font-bold">
            Completed Task List
          </h1>
          {completed.map((item, index) => (
            <div
              key={index}
              className="flex flex-row justify-between items-center w-full pb-2"
            >
              <h1 className="text-lg font-semibold">{`${item} - done`}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
