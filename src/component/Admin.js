import { AdminNavBar } from "../common/AppNavBar";
import { useHistory } from "react-router-dom";
export function Admin() {
  const history = useHistory();
  return (
    <div>
      <AdminNavBar />
      <div className="row m-3"></div>
      <div className="row m-3"></div>
      <div className="row m-3"></div>
      <div className="row">
        <div className="col-4 col-md-4 d-none d-md-block"></div>
        <div className="col-12 col-md-4 ">
          <div className="">
            <input
              type="button"
              value="Add New Brand"
              className="form-control btn btn-outline-dark m-4 w-75"
              onClick={() => history.push("/vehiclebrand")}
            />

            <input
              type="button"
              value="Add New Vehicle"
              className="form-control btn btn-outline-dark m-4 w-75"
              onClick={() => history.push("/vehicle")}
            />
          </div>
        </div>
        <div className="col-4 col-md-4 d-none d-md-block"></div>
      </div>
    </div>
  );
}
