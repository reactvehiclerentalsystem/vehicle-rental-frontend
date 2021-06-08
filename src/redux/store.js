import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import { AdminLoginReducer } from "./AdminLoginReducer";
import { UserLoginReducer } from "./UserLoginReducer";
import { UserRegisterReducer } from "./UserRegisterReducer";
import { VehicleBookingReducer } from "./VehicleBookingReducer";
import { VehicleBrandReducer } from "./VehicleBrandReducer";
import { VehicleReducer } from "./VehicleReducer";

const rootReducer = combineReducers({
  UserRegister: UserRegisterReducer,
  UserLogin: UserLoginReducer,
  VehicleBrandR: VehicleBrandReducer,
  AdminLogin: AdminLoginReducer,
  VehicleBooking: VehicleBookingReducer,
  Vehiclee: VehicleReducer,
  // depart : DepartRducer,
  //vechil: VechuileReucer
});

// const store = createStore(rootReducer);
export const store = createStore(rootReducer, applyMiddleware(thunk));
