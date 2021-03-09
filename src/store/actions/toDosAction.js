import { ADD_TODO, EDIT_TODO, GET_TODOS, REMOVE_TODO, TODOS_ERROR } from "../types";
import axios from "axios";

export const getToDos = () => async dispatch => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
    dispatch({
      type: GET_TODOS,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: TODOS_ERROR,
      payload: console.log(e)
    });
  }
};

export const addToDo = (toDo) => async dispatch => {
  try {
    const res = await axios.post(`https://jsonplaceholder.typicode.com/todos`, toDo);
    dispatch({
      type: ADD_TODO,
      payload: res.data
    })
  } catch(e) {
    dispatch({
      type: TODOS_ERROR,
      payload: console.log(e)
    });
  }
}

export const isTimeboxEdited = (state, timebox) => state.editIndex && state.editIndex === timebox.id;

export const editToDo = (id, editedToDo) => async dispatch => {
  try {
    const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, editedToDo)
    dispatch({
      type: EDIT_TODO,
      payload: res.data
    })
  } catch(e) {
    dispatch({
      type: TODOS_ERROR,
      payload: console.log(e)
    })
  }
}

export const updateToDo = (toDo) => async dispatch => {
  try {
    const res = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${toDo.id}`, {completed: !toDo.completed});
    dispatch({
      type: EDIT_TODO,
      payload: res.data
    })
  } catch(e) {
    dispatch({
      type: TODOS_ERROR,
      payload: console.log(e)
    })
  }
}

export const removeToDo = (id) => async dispatch => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    dispatch({
      type: REMOVE_TODO,
      payload: id
    })
  } catch(e) {
    dispatch({
      type: TODOS_ERROR,
      payload: console.log(e)
    });
  }
}
