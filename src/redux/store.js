import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import { UserLoginReducer } from "./UserLoginReducer";

import { UserRegisterReducer } from "./UserRegisterReducer";

const rootReducer = combineReducers({
  UserRegister: UserRegisterReducer,
  UserLogin: UserLoginReducer,
  // depart : DepartRducer,
  //vechil: VechuileReucer
});

// const store = createStore(rootReducer);
export const store = createStore(rootReducer, applyMiddleware(thunk));
