"use client";
//New method
import React, { useState, useEffect } from "react";
import Profile from "./profile";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(22);
  const [name, setName] = useState("pasindu");
  const [todos, setTodos] = useState(createTodos);

  function createTodos() {
    return ["Reading a book", "Watching movies"];
  }
  function handleupdate() {
    setAge((prevVal) => prevVal + 5);
    setName("john");
    setTodos(["swimming", "practice swimming"]);
    console.log({ name, age, todos });
  }
  //initial render and rerender venavita
  //user effect with no dpendensis

  useEffect(() => {
    console.log("UseEffectme 1Triggerd!");
  });
  //user effect with empty dpendensi array
  useEffect(() => {
    console.log("UseEffectme  2 Triggerd!");
  });
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-6">
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="border border-primary py-1 px-2 text-sm rounded-2xl"
      >
        Increment
      </button>
      <Profile />
      <div className=" bg-green-200 p-4">
        <h2>UseState Hook</h2>
        <ul>
          <li>Age:{age}</li>
          <li>Name:{name}</li>
          <li>Todos: {todos.join(", ")}</li>
        </ul>
        <button
          onClick={handleupdate}
          className="bg-pink-200 p-2 border-4 rounded-2xl text-sm"
        >
          Update user
        </button>
      </div>
    </div>
  );
}
