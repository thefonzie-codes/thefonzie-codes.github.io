import { useState } from "react";
import { ADD_ITEM, GET_ITEMS_BY_USER } from "../hooks/helpers";

export default function AddItem({ setState, state }) {

  const [newItem, setNewItem] = useState("");

  const HANDLE_ADD = async () => {
    await ADD_ITEM(newItem, state, setState);
    const items = await GET_ITEMS_BY_USER(state, setState);
    setState({ ...state, view: "home", list: items});
  }

  return (
    <div className="modal-bg">
      <div className="AddItem modal">
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            HANDLE_ADD();
          }}>
          <input
            id="newItem"
            type='text'
            label='name'
            placeholder="Add new To-do"
            maxLength="100"
            onChange={(evt) => setNewItem(evt.target.value)}>
          </input>
          <button type='submit'>Add</button>
        </form>
        <button onClick={() => setState({ ...state, view: "home" })}>Cancel</button>
      </div>
    </div>
  );
}
