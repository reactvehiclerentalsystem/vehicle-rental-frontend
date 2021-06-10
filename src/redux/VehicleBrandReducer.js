const initState = {
  list: [],
  refbrand: {},
};

// ACTION TYPES
const ADD_BRAND = "ADD_BRAND";
const GET_ALL_BRAND = "GET_ALL_BRAND";
const BRAND_DELETE = "BRAND_DELETE";
const REF_BRAND = "REF_BRAND";

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

export function BrandDeleteAction(payload) {
  //return { type: ENQUIRY_DELETE, payload: payload };
  return async (dispatch) => {
    console.log(payload);
    const url = `http://localhost:8090/api/brand/${payload.brand_id}`;
    await fetch(url, { method: "DELETE" });

    // update the ui.
    dispatch(getAllBrandAction());
  };
}

export function updateBrandAction(payload) {
  //return { type: ENQUIRY_UPDATE, payload: payload };
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = `http://localhost:8090/api/brand/${payload.brand_id}`;
    const requestBody = { ...payload };

    await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // update the ui.
    dispatch(updateRefBrand({}));
  };
}
export function updateRefBrand(payload) {
  return { type: REF_BRAND, payload: payload };
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
    case BRAND_DELETE:
      const oldList = state.list;
      oldList.splice(action.payload, 1);
      console.log("OL", oldList);
      return { ...state, list: [...oldList] };
    case REF_BRAND:
      return { ...state, refbrand: action.payload };

    default:
      return state;
  }
}
