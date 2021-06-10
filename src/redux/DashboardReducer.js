const initState = {
  list: [],
};
const GET_DASHBOARD = "GET_DASHBOARD";
export function getDashboardAction(payload) {
  // return { type: EMPLOYEE_GET_ALL, payload: payload };

  // API CALL/BACKEND CALL / REDUX-THUNK IS THERE
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = "http://localhost:8090/api/admin/total";

    // HTTP Client / POSTMAN / SWAGGER
    const response = await fetch(url);
    const dashboardList = await response.json();

    // Update the UI
    dispatch({ type: GET_DASHBOARD, payload: dashboardList });
  };
}
export function DashboardReducer(state = initState, action) {
  switch (action.type) {
    case GET_DASHBOARD:
      // Update the list
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
