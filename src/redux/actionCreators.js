import Axios from 'axios';
import { GET_ALL_POSTS, GET_ALL_SPECIALITIES, GET_ALL_COURSES, GET_ALL_TEACHERS, GET_POST, GET_SPECIALITY, GET_COURSE, GET_FRAGMENT } from './actions';

const API_URL = process.env.REACT_APP_API_URL;

export const getAllPosts = () => dispatch => {
  Axios.get(`${API_URL}/posts`)
    .then(response => {
      return dispatch({
        type: GET_ALL_POSTS,
        data: response.data
      })
    });
}

export const getAllSpecialities = () => dispatch => {
  Axios.get(`${API_URL}/specialities`)
    .then(response => {
      return dispatch({
        type: GET_ALL_SPECIALITIES,
        data: response.data
      })
    });
}

export const getAllCourses = () => dispatch => {
  Axios.get(`${API_URL}/courses`)
    .then(response => {
      return dispatch({
        type: GET_ALL_COURSES,
        data: response.data
      })
    });
}

export const getAllTeachers = () => dispatch => {
  Axios.get(`${API_URL}/teachers`)
    .then(response => {
      return dispatch({
        type: GET_ALL_TEACHERS,
        data: response.data
      })
    });
}

export const getPost = (id) => dispatch => {
  Axios.get(`${API_URL}/posts/${id}`)
    .then(response => {
      return dispatch({
        type: GET_POST,
        data: response.data
      })
    });
}

export const getSpeciality = (id) => dispatch => {
  Axios.get(`${API_URL}/specialities/${id}`)
    .then(response => {
      return dispatch({
        type: GET_SPECIALITY,
        data: response.data
      })
    });
}

export const getCourse = (id) => dispatch => {
  Axios.get(`${API_URL}/courses/${id}`)
    .then(response => {
      return dispatch({
        type: GET_COURSE,
        data: response.data
      })
    });
}

export const getClass = (id) => dispatch => {
  Axios.get(`${API_URL}/classes/${id}`)
    .then(response => {
      return dispatch({
        type: GET_FRAGMENT,
        data: response.data
      })
    });
}
