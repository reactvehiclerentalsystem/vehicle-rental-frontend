const initState = {
  list: [],
};

const GET_ALL_VEHICLES = "GET_ALL_VEHICLES";

export function guestVehiclesAction(payload) {
  // return { type: EMPLOYEE_GET_ALL, payload: payload };

  // API CALL/BACKEND CALL / REDUX-THUNK IS THERE
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = "http://localhost:8090/api/vehicle/allVehicles";

    // HTTP Client / POSTMAN / SWAGGER
    const response = await fetch(url);
    const vehicleList = await response.json();

    // Update the UI
    dispatch({ type: GET_ALL_VEHICLES, payload: vehicleList });
  };
}

export function GuestVehicleReducer(state = initState, action) {
  switch (action.type) {
    case GET_ALL_VEHICLES:
      // Update the list
      return { ...state, list: action.payload };

    default:
      return state;
  }
}
