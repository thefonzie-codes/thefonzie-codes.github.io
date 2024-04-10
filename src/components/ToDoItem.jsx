import { useState } from "react";
import axios from "axios";

import { CHANGE_STATUS, DELETE_ITEM, GET_ITEMS_BY_USER } from "../hooks/helpers";

export default function ToDoItem({ name, completed, id, setState, state, dueDate }) {

  const HANDLE_DELETE = async () => {
    try {
      await DELETE_ITEM(id);
      const items = await GET_ITEMS_BY_USER(state, setState);
      setState({ ...state, view: "home", list: items });
    }
    catch (error) {
      console.log(error);
    }
  };

  const HANDLE_CHANGE = async () => {
    try {
      await CHANGE_STATUS(name, id, done, state.user.id);
      setDone(!done);
    }
    catch (error) {
      console.log(error);
    }
  }

  const [done, setDone] = useState(completed);

  return (
    <div className="card">
      <p>{name}</p>
      <p>{dueDate}</p>
      <button onClick={() => HANDLE_CHANGE()}>{done ? "Done" : "Not Yet"}</button>
      <button onClick={() => HANDLE_DELETE()}>Delete</button>
      <button onClick={() => setState({ ...state, view: "edit", itemToEdit: id })}>Edit</button>
    </div>
  );
}