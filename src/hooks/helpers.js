import axios from "axios";

const URL = "http://localhost:8000/";
const TOKEN = window.sessionStorage.getItem("token");
const HEADERS = {
  headers: {
    'Authorization': `Token ${TOKEN}`
  },
};

const AUTHENTICATE = async () => {
  try {
    const response = await axios.get(URL + "authenticate/", HEADERS);
    return response.data;
  }
  catch (error) {
    console.log(error);
  }
};

const GET_ALL_ITEMS = async () => {
  try {
    axios.get(URL + "list_items.json", HEADERS);
  }
  catch (error) {
    console.log(error);
  }
};

const GET_ITEMS_BY_USER = async () => {
  try {
    const items = await axios.get(URL + "my_list_items.json", HEADERS);
    return items.data;
  }
  catch (error) {
    console.log(error);
  }
};

const DELETE_ITEM = async (id) => {
  try {
    const DELETE_API = await axios.delete(URL + 'list_items/' + id, HEADERS);
    console.log('Successfully deleted item');
  } catch (error) {
    console.log(error);
  }
};

const ADD_ITEM = async (name, state, setState) => {
  try {
    let item = {
      name: name,
      completed: false,
      user_id: state.user.id,
    };
    await axios.post(`${URL}list_items/`, item, HEADERS);
    console.log('Successfully added item');
  } catch (error) {
    console.log(error);
  };
};

const EDIT_ITEM = async(id, item) => {
  try {
    axios.put(`${URL}list_items/${id}`, item, HEADERS);
    console.log('Successfully edited item');
  }
  catch (error) {
    console.log(error);
  }
};

const CHANGE_STATUS = async (name, id, done, userId) => {
  try {
    await axios.put(`${URL}list_items/${id}`, {
      name: name,
      completed: !done,
      user_id: userId
    }, HEADERS);
    console.log('Successfully changed status');
  }
  catch (error){
    console.log(error);
  }
};

const LOGOUT = (state, setState) => {
  window.sessionStorage.removeItem("token");
  setState({ ...state, user: null, view: "login", list: [] });
};

export { AUTHENTICATE, LOGOUT, GET_ALL_ITEMS, GET_ITEMS_BY_USER, CHANGE_STATUS, EDIT_ITEM, ADD_ITEM, DELETE_ITEM, URL, HEADERS, TOKEN };