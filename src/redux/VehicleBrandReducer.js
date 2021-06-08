const initState = {
  list: [],
};

// ACTION TYPES
const ADD_BRAND = "ADD_BRAND";
const GET_ALL_BRAND = "GET_ALL_BRAND";
// ACTIONS :: COmponents are interacting with this action
export function VehicleBrandAction(payload) {
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = "http://localhost:8090/api/brand/";
    const requestBody = { ...payload };

    // HTTP Client
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // UPDATE THE UI
    dispatch({ type: ADD_BRAND, payload: payload });
  };
}

export function getAllBrandAction(payload) {
  // return { type: EMPLOYEE_GET_ALL, payload: payload };

  // API CALL/BACKEND CALL / REDUX-THUNK IS THERE
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = "http://localhost:8090/api/brand/";

    // HTTP Client / POSTMAN / SWAGGER
    const response = await fetch(url);
    const brandList = await response.json();
    console.log(brandList);

    // Update the UI
    dispatch({ type: GET_ALL_BRAND, payload: brandList });
  };
}

// REDUCER LOGIC
export function VehicleBrandReducer(state = initState, action) {
  switch (action.type) {
    case ADD_BRAND:
      return { ...state, list: [action.payload, ...state.list] };
    case GET_ALL_BRAND:
      // Update the list
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
