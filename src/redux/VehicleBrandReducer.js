const initState = {
  list: [],
};

// ACTION TYPES
const ADD_BRAND = "ADD_BRAND";

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

// REDUCER LOGIC
export function VehicleBrandReducer(state = initState, action) {
  switch (action.type) {
    case ADD_BRAND:
      return { ...state, list: [action.payload, ...state.list] };
    default:
      return state;
  }
}
