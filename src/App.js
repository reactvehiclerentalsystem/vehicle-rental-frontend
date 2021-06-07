import logo from "./logo.svg";
import "./App.css";

import { Vehicle } from "./component/Vehicle";
import { BrowserRouter as Router } from "react-router-dom";
import { AppNavBar } from "./common/AppNavBar";
// vehicle
function App() {
  return (
    <Router>
      <AppNavBar />
    </Router>
  );
}

export default App;
