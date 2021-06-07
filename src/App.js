import logo from "./logo.svg";
import "./App.css";

import { Vehicle } from "./component/Vehicle";
import { VehicleBooking } from "./component/VehicleBooking";
// vehicle
function App() {
  return (
    <div>
      <Vehicle></Vehicle>
      <VehicleBooking />
    </div>
  );
}

export default App;
