const initState = {
  list: [],
  refvehicle: {},
};

// ACTION TYPES
const ADD_VEHICLE = "ADD_VEHICLE";
const GET_ALL_VEHICLES = "GET_ALL_VEHICLES";
const GET_VEHICLE_BY_ID = "GET_VEHICLE_BY_ID";
const VEHICLE_DELETE = "VEHICLE_DELETE";
const VEHICLE_UPDATE = "VEHICLE_UPDATE";

const REF_VEHICLE = "REF_VEHICLE";

// ACTIONS :: COmponents are interacting with this action
export function VehicleAction(payload) {
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    //console.log(payload);
    const url = `http://localhost:8090/api/vehicle/${payload.vehicleBrand.brand_id}`;
    const requestBody = { ...payload };
    //console.log(requestBody);
    //console.log(payload.vehicleBrand.brand_id);
    // HTTP Client
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // UPDATE THE UI
    dispatch({ type: ADD_VEHICLE, payload: payload });
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

    // Update the UI
    dispatch({ type: GET_ALL_VEHICLES, payload: vehicleList });
  };
}

export function getVehicleByIdAction(payload) {
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = `http://localhost:8090/api/vehicle/${payload.id}`;

    // HTTP Client / POSTMAN / SWAGGER
    const response = await fetch(url);
    const vehicleList = await response.json();

    // Update the UI
    dispatch({ type: GET_VEHICLE_BY_ID, payload: vehicleList });
  };
}

export function VehicleDeleteAction(payload) {
  //return { type: ENQUIRY_DELETE, payload: payload };
  return async (dispatch) => {
    console.log(payload);
    const url = `http://localhost:8090/api/vehicle/${payload.vehicleId}`;
    await fetch(url, { method: "DELETE" });

    // update the ui.
    dispatch(getAllVehiclesAction());
  };
}

export function updateVehicleAction(payload) {
  //return { type: ENQUIRY_UPDATE, payload: payload };
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = `http://localhost:8090/api/vehicle/${payload.vehicleId}`;
    const requestBody = { ...payload };

    await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // update the ui.
    dispatch(updateRefVehicle({}));
  };
}
export function updateRefVehicle(payload) {
  return { type: REF_VEHICLE, payload: payload };
}

// REDUCER LOGIC
export function VehicleReducer(state = initState, action) {
  switch (action.type) {
    case ADD_VEHICLE:
      return { ...state, list: [action.payload, ...state.list] };

    case GET_ALL_VEHICLES:
      // Update the list
      return { ...state, list: action.payload };
    case GET_VEHICLE_BY_ID:
      return { ...state, list: action.payload };
    case VEHICLE_DELETE:
      const oldList = state.list;
      oldList.splice(action.payload, 1);
      console.log("OL", oldList);
      return { ...state, list: [...oldList] };
    case VEHICLE_UPDATE:
      return state;
    case REF_VEHICLE:
      return { ...state, refvehicle: action.payload };

    default:
      return state;
  }
}
