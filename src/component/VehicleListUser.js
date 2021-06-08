import { AppNavBar } from "../common/AppNavBar";

export function VehicleListUser() {
  return (
    <div>
      <AppNavBar />
      <div className="row">
        <div className=" col-2 col-md-2 d-none d-md-block"></div>
        <div className="col-12 col-md-8 ">
          <h3 className="alert alert-secondary">Vehicle List</h3>

          <table class="table">
            <thead class="table-dark">
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">VEHICLE NAME</th>
                <th scope="col">VEHICLE TYPE</th>
                <th scope="col">VEHICLE BRAND</th>
                <th scope="col">VEHICLE PLATE NUMBER</th>
                <th scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/**<th scope="row">{index + 1}</th> */}
                <th scope="row">1</th>
                <td>Swift</td>
                <td>Sports</td>
                <td>Maruti</td>
                <td>BR-2345-6789</td>
                <td>
                  <input
                    type="button"
                    value="Detail"
                    className="btn btn-link"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-2 col-md-2 d-none d-md-block"></div>
      </div>
    </div>
  );
}
