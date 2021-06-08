import "./App.css";

import { Vehicle } from "./component/Vehicle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppNavBar } from "./common/AppNavBar";
import { UserLogin } from "./component/UserLogin";
import { VehicleBooking } from "./component/VehicleBooking";
import { VehicleBookingList } from "./component/VehicleBookingList";
import { AdminLogin } from "./component/AdminLogin";
import { VehicleList } from "./component/VehicleList";
import { VehicleBrand } from "./component/VehicleBrand";
import { VehicleBrandList } from "./component/VehicleBrandList";
import { HomePage } from "./component/HomePage";
import { Registration } from "./component/Registration";
import { GuestUser } from "./component/GuestUser";
import { VehicleListUser } from "./component/VehicleListUser";
import { User } from "./component/User";
import { VehicleListRegisteredUser } from "./component/VehicleListRegisteredUser";
// vehicle
function App() {
  return (
    <Router>
      {/** */}
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/userlogin" exact>
          <UserLogin />
        </Route>
        <Route path="/adminlogin" exact>
          <AdminLogin />
        </Route>
        <Route path="/guestuser" exact>
          <GuestUser />
        </Route>
        <Route path="/register" exact>
          <Registration />
        </Route>
        <Route path="/user" exact>
          <User />
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
        <Route path="/vehiclelistuser" exact>
          <VehicleListUser />
        </Route>
        <Route path="/vehiclelistreguser" exact>
          <VehicleListRegisteredUser />
        </Route>
        <Route path="/vehiclebrand" exact>
          <VehicleBrand />
        </Route>
        <Route path="/vehiclebrandlist" exact>
          <VehicleBrandList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
