import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { AdminNavBar } from "../common/AppNavBar";
import { getAllBrandAction } from "../redux/VehicleBrandReducer";

export function VehicleBrandList() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllBrandAction());
  }, []);

  return (
    <div>
      <AdminNavBar />
      <div className="row">
        <div className="col-3 col-md-3 d-none d-md-block"></div>
        <div className="col-12 col-md-6">
          <h3 className="alert alert-secondary">Vehicle Brands</h3>

          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Brand ID</th>
                <th scope="col">Brand Name</th>
                <th scope="col">Deleted</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[...state.VehicleBrandR.list].map((item, index) => (
                <tr key={index}>
                  <th scope="row">{item.brand_id}</th>
                  <td>{item.brand_name}</td>
                  <td>{String(item.deleted)}</td>
                  <td>
                    <div className="">
                      <Button variant="outline-warning" className="w-10">
                        Edit
                      </Button>{" "}
                      <Button variant="outline-danger" className="w-10">
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-3 col-md-3 d-none d-md-block"></div>
      </div>
    </div>
  );
}
