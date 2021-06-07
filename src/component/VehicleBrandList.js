import { Button } from "react-bootstrap";
import { AdminNavBar } from "../common/AppNavBar";

export function VehicleBrandList() {
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
              <td>1</td>
              <td>Audi</td>
              <td>False</td>
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
            </tbody>
          </table>
        </div>
        <div className="col-3 col-md-3 d-none d-md-block"></div>
      </div>
    </div>
  );
}
