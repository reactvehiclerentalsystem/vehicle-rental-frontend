import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { AdminNavBar } from "../common/AppNavBar";
import {
  getAllVehiclesAction,
  updateRefVehicle,
  VehicleDeleteAction,
} from "../redux/VehicleReducer";

export function VehicleList() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllVehiclesAction());
  }, []);

  const deleteVehicle = (item, index) => {
    dispatch(VehicleDeleteAction(item));
  };

  const updateVehicle = (item, index) => {
    dispatch(updateRefVehicle(item));
    history.push("/vehicle");
  };

  return (
    <div>
      <AdminNavBar />
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
                <th scope="col">VEHICLE BRAND</th>
                <th scope="col">VEHICLE DELETE</th>
                <th scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {[...state.Vehiclee.list].map((item, index) => (
                <tr key={index}>
                  {/**<th scope="row">{index + 1}</th> */}
                  <th scope="row">{item.vehicleId}</th>
                  <td>{item.vehicleName}</td>
                  <td>{item.vehicleType}</td>
                  <td>Maruti</td>
                  <td>{String(item.deleted)}</td>
                  <td>
                    <input
                      type="button"
                      value="Detail"
                      className="btn btn-link"
                    />
                    /
                    <input
                      type="button"
                      value="Edit"
                      className="btn btn-link"
                      onClick={() => updateVehicle(item)}
                    />
                    /
                    <input
                      type="button"
                      value="Delete"
                      className="btn btn-link text-danger"
                      onClick={() => deleteVehicle(item, index)}
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
