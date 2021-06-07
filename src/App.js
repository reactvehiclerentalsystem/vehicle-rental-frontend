import "./App.css";

import { Vehicle } from "./component/Vehicle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppNavBar } from "./common/AppNavBar";
import { UserLogin } from "./component/UserLogin";
import { VehicleBooking } from "./component/VehicleBooking";
import { VehicleBookingList } from "./component/VehicleBookingList";
import { AdminLogin } from "./component/AdminLogin";
import { VehicleList } from "./component/VehicleList";
// vehicle
function App() {
  return (
    <Router>
      {/** */}
      <Switch>
        <Route path="/userlogin" exact>
          <UserLogin />
        </Route>
        <Route path="/adminlogin" exact>
          <AdminLogin />
        </Route>
        <Route path="/vehiclebooking" exact>
          <VehicleBooking />
        </Route>
        <Route path="/vehiclebookinglist" exact>
          <VehicleBookingList />
        </Route>
        <Route path="/vehicle" exact>
          <Vehicle />
        </Route>
        <Route path="/vehiclelist" exact>
          <VehicleList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
