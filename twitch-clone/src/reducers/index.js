import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import authReducer from "./auth_reducer";
import streamsReducer from "./streams_reducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamsReducer
})