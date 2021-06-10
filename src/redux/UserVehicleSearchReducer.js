const initState = {
  list: [],
  refVehicle: [],
  ref: {},
};

const GET_SPEC_VEHICLES = "GET_SPEC_VEHICLES";
const GET_ALL_VEHICLES = "GET_ALL_VEHICLES";
const REF_VEHICLE = "REF_VEHICLE";
const REF = "REF";

export function getSpecVehiclesAction(payload) {
  // return { type: EMPLOYEE_GET_ALL, payload: payload };

  // API CALL/BACKEND CALL / REDUX-THUNK IS THERE
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = `http://localhost:8090/api/vehicle/name/${payload.vehicleName}/type/${payload.vehicleType}/color/${payload.vehicleColor}/seats/${payload.numberOfSeats}/location/${payload.vehicleLocation}`;

    // HTTP Client / POSTMAN / SWAGGER
    const response = await fetch(url);
    const vehicleList = await response.json();

    console.log(vehicleList);

    // Update the UI
    // dispatch({ type: GET_SPEC_VEHICLES, payload: vehicleList });

    // this wil update the refemp
    dispatch(updateRefVehicle(vehicleList));
  };
}
export function getAllVehiclesAction(payload) {
  // return { type: EMPLOYEE_GET_ALL, payload: payload };

  // API CALL/BACKEND CALL / REDUX-THUNK IS THERE
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = "http://localhost:8090/api/vehicle/allVehicles";

    // HTTP Client / POSTMAN / SWAGGER
    const response = await fetch(url);
    const vehicleList = await response.json();
    console.log(vehicleList);

    // Update the UI
    dispatch(updateRefVehicle(vehicleList));
  };
}

export function viewVehicleById(payload) {
  return async (dispatch) => {
    const url = `http://localhost:8090/api/vehicle/${payload.vehicleId}`;
    const response = await fetch(url);
    const userObj = await response.json();
    console.log(userObj);

    dispatch(viewRefVehicle(userObj));
  };
}

export function updateRefVehicle(payload) {
  return { type: REF_VEHICLE, payload: payload };
}

export function viewRefVehicle(payload) {
  return { type: REF, payload: payload };
}

export function UserVehicleSearchReducer(state = initState, action) {
  switch (action.type) {
    case GET_SPEC_VEHICLES:
      // Update the list
      return { ...state, list: action.payload };
    case GET_ALL_VEHICLES:
      // Update the list
      return { ...state, list: action.payload };
    case REF_VEHICLE:
      return { ...state, refVehicle: action.payload };
    case REF:
      return { ...state, ref: action.payload };
    default:
      return state;
  }
}
