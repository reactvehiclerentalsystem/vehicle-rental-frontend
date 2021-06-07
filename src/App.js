import "./App.css";

import { Vehicle } from "./component/Vehicle";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppNavBar } from "./common/AppNavBar";
import { UserLogin } from "./component/UserLogin";
import { VehicleBooking } from "./component/VehicleBooking";
import { VehicleBookingList } from "./component/VehicleBookingList";
// vehicle
function App() {
  return (
    <Router>
      {/** */}
      <Route path="/userlogin" exact>
        <UserLogin />
      </Route>
      <Route path="/vehiclebooking" exact>
        <VehicleBooking />
      </Route>
      <Route path="/vehiclebookinglist" exact>
        <VehicleBookingList />
      </Route>
    </Router>
  );
}

export default App;
