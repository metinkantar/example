import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./controllers/counter";
import authReducer from "./controllers/auth";


const rootReducers = combineReducers({
    auth: authReducer,
    counter: counterReducer,
});

export default rootReducers;

