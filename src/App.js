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
import { Admin } from "./component/Admin";
import { VehicleListRegisteredUser } from "./component/VehicleListRegisteredUser";
import { UserVehicleSearch } from "./component/UserVehicleSearch";
import { AdminVehicleBookingList } from "./component/AdminVehicleBookingList";
import { Dashboard } from "./component/Dashboard";
// vehicle
function App() {
  return (
    <div className="body" style={{ height: "100vh" }}>
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
          <Route path="/admin" exact>
            <Admin />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/adminbookinglist" exact>
            <AdminVehicleBookingList />
          </Route>
          <Route path="/search" exact>
            <UserVehicleSearch />
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
    </div>
  );
}

export default App;
