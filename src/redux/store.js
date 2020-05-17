import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Reducers
import {
  postReducer,
  specialityReducer,
  courseReducer,
  fragmentReducer,
  teacherReducer
} from './reducers';


export default createStore(
  combineReducers({
    postReducer,
    specialityReducer,
    courseReducer,
    fragmentReducer,
    teacherReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
