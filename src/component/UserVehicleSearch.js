import { UserNavBar } from "../common/AppNavBar";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export function UserVehicleSearch() {
  const history = useHistory();
  const state = useSelector((state) => state);

  return (
    <div>
      <UserNavBar />
      <div className="row m-3"></div>
      <div className="row m-3"></div>
      <div className="row m-3"></div>
      <div className="row">
        <div className="col-4 col-md-4 d-none d-md-block"></div>
        <div className="col-12 col-md-4 ">
          <div className="">
            <input
              type="button"
              className="btn btn-outline-dark w-100 mb-4"
              value="Search All"
              onClick={() => history.push("/vehiclelistreguser")}
            />
            <form>
              <input
                type="text"
                className="form-control mb-4 p-1"
                placeholder="Search by Name"
                required
              />
              <input
                type="text"
                className="form-control mb-4 p-1"
                placeholder="Search by Type"
                required
              />
              <input
                type="text"
                className="form-control mb-4 p-1"
                placeholder="Search by Color"
                required
              />
              <input
                type="text"
                className="form-control mb-4 p-1"
                placeholder="Search by Location"
                required
              />
            </form>
            <input
              type="text"
              className="form-control mb-4 p-1"
              placeholder="Search by Id"
              required
            />
            <div>
              <input
                type="button"
                className="btn btn-outline-dark w-100"
                value="Search"
                onClick={() => history.push("/vehiclelistreguser")}
              />
            </div>
          </div>
        </div>
        <div className="col-4 col-md-4 d-none d-md-block"></div>
      </div>
    </div>
  );
}
