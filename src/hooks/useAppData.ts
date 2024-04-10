import { useState, useEffect } from "react";
import { GET_ITEMS_BY_USER, AUTHENTICATE } from "./helpers";

const token = window.sessionStorage.getItem("token");

let items = [];
let user = {};

if (token) {
  items = await GET_ITEMS_BY_USER();
  user = await AUTHENTICATE();
}

export default function useAppData() {

  let view = "login";

  const [state, setState] = useState({
    list: [],
    view: view,
    user: {},
  });

  useEffect(() => {
    if (token) {
      setState({ ...state, view: "home", list: items, user: user });
    }
  }, []);

  return { state, setState };
}