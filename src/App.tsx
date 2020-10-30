import React, { useReducer, useState } from "react";
import { toEditorSettings } from "typescript";

const initialState = {
  toDos: [],
};

const ADD = "add";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD:
      return { toDos: [...state.toDos, { text: action.payload }] };

    default:
      return;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState<string>("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newToDo });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setNewToDo(value);
  };

  return (
    <>
      <h1>Add To Do</h1>
      <form onSubmit={onSubmit}>
        <input
          value={newToDo}
          type="text"
          placeholder="Write to do"
          onChange={onChange}
        />
      </form>

      <ul>
        <h2>To Dos</h2>
        {state?.toDos.map((todo: any, index: number) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
