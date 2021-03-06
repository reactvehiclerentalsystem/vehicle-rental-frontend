const initState = {
  list: [],
  success: false,
};

// ACTION TYPES
const VEHICLE_BOOKING = "VEHICLE_BOOKING";
const VEHICLE_BOOKING_CANCEL = "VEHICLE_BOOKING_CANCEL";
const GET_ALL_BOOKINGS = "GET_ALL_BOOKINGS";

// ACTIONS :: COmponents are interacting with this action
export function VehicleBookingAction(payload) {
  return async (dispatch) => {
    const userDetails = sessionStorage.getItem("user");
    const userList = JSON.parse(userDetails);

    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = `http://localhost:8090/bookings/vehicle/${payload.vehicle.vehicleId}/user/${userList.userId}
    `;
    const requestBody = { ...payload };
    console.log(requestBody);

    // HTTP Client
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
    payload.success = true;

    // UPDATE THE UI
    dispatch({ type: VEHICLE_BOOKING, payload: payload });
  };
}

export function VehicleBookingCancelAction(payload) {
  return async (dispatch) => {
    console.log(payload);
    const url = `http://localhost:8090/bookings/${payload.bookingId}`;
    await fetch(url, { method: "DELETE" });

    // update the ui.
    dispatch(getAllBookingsAction());
  };
}

export function getAllBookingsAction(payload) {
  // return { type: EMPLOYEE_GET_ALL, payload: payload };

  // API CALL/BACKEND CALL / REDUX-THUNK IS THERE
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = "http://localhost:8090/bookings/";

    // HTTP Client / POSTMAN / SWAGGER
    const response = await fetch(url);
    const bookingList = await response.json();

    // Update the UI
    dispatch({ type: GET_ALL_BOOKINGS, payload: bookingList });
  };
}

// REDUCER LOGIC
export function VehicleBookingReducer(state = initState, action) {
  switch (action.type) {
    case VEHICLE_BOOKING:
      return { ...state, list: [action.payload, ...state.list] };

    case VEHICLE_BOOKING_CANCEL:
      const oldList = state.list;
      oldList.splice(action.payload, 1);
      console.log("OL", oldList);
      return { ...state, list: [...oldList] };

    case GET_ALL_BOOKINGS:
      // Update the list
      return { ...state, list: action.payload };

    default:
      return state;
  }
}
