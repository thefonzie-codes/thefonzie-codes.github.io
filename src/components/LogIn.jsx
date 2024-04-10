import axios from "axios";
import { useState } from "react";
import { URL } from "../hooks/helpers";

export default function LogIn({ state, setState }) {

  const [loginData, setLoginData] = useState({
    username: null,
    password: null,
  });

  const LOGIN = async (loginData, state, setState) => {
  try {
    const userData = await axios.post(URL + 'login/', loginData);
    const listData = await axios.get(`${URL}my_list_items`, {
      headers: {
        'Authorization': `Token ${userData.data.token}`,
      }
    });
    window.sessionStorage.setItem("token", `${userData.data.token}`);
    setState({ ...state, user: userData.data.user, list: listData.data, view: "home" });
    return [userData.listData];
  }
  catch (error) {
    console.log(error);
  }
};

  return (
    <div className="modal-bg">
      <div className="LogIn modal">
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            LOGIN(loginData, state, setState);
          }}>
          <input
            type='text'
            label='username'
            placeholder="Username"
            maxLength="100"
            onChange={(evt) => setLoginData({ ...loginData, username: evt.target.value })}>
          </input>
          <input
            type='password'
            label='password'
            placeholder="Password"
            maxLength="100"
            onChange={(evt) => setLoginData({ ...loginData, password: evt.target.value })}>
          </input>
          <button type='submit'>Log In</button>
        </form>
        <button>Cancel</button>
      </div>
    </div>
  );
}