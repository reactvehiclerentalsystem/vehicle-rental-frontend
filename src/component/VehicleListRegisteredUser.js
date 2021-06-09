import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserNavBar } from "../common/AppNavBar";
import {
  getAllVehiclesAction,
  getSpecVehiclesAction,
  updateRefVehicle,
} from "../redux/UserVehicleSearchReducer";

export function VehicleListRegisteredUser() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const updateRefObj = () => {
    dispatch(updateRefVehicle({}));
  };

  useEffect(() => {
    dispatch(getAllVehiclesAction());
  }, []);

  return (
    <div>
      <UserNavBar />
      <div className="row">
        <div className=" col-2 col-md-2 d-none d-md-block"></div>
        <div className="col-12 col-md-8 ">
          <h3 className="alert alert-secondary">Vehicle List</h3>

          <table className="table">
            <thead className="table-dark">
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">VEHICLE NAME</th>
                <th scope="col">VEHICLE TYPE</th>
                <th scope="col">VEHICLE AVAILABLE</th>
                <th scope="col">VEHICLE PLATE NUMBER</th>
                <th scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {state.UserVehicleSearch.refVehicle.map((item, index) => (
                <tr key={index}>
                  {/**<th scope="row">{index + 1}</th> */}
                  <th scope="row">{item.vehicleId}</th>
                  <td>{item.vehicleName}</td>
                  <td>{item.vehicleType}</td>
                  <td>{String(item.available)}</td>
                  <td>{item.vehiclePlateNumber}</td>
                  <td>
                    <input
                      type="button"
                      value="Detail"
                      className="btn btn-link"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-2 col-md-2 d-none d-md-block"></div>
      </div>
    </div>
  );
}
