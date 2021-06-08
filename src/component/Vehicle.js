import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminNavBar } from "../common/AppNavBar";
import { getAllBrandAction } from "../redux/VehicleBrandReducer";

export function Vehicle() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);

  // Used to Initialize :: READ THE DATA FROM API
  useEffect(() => {
    dispatch(getAllBrandAction());
  }, []);

  return (
    <div>
      <AdminNavBar />
      <div className="row">
        <div className="col-3 col-md-3 d-none d-md-block"></div>
        <div className="col-12 col-md-6">
          <h3 className="alert alert-secondary">Add vehicle</h3>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Vehicle Name"
            required="required"
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Vehicle Type"
            required="required"
          />
          <select
            class="form-control form-select w-100 p-2 mb-2"
            aria-label=".form-select-lg example"
          >
            <option selected>Brand Name</option>
            {[...state.VehicleBrandR.list].map((item, index) => (
              <option value="1" key={index}>
                {item.brand_id}-{item.brand_name}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Vehicle Plate Number"
            required="required"
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Vehicle Color"
            required="required"
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Number of Seats"
            required="required"
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Vehicle Location"
            required="required"
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Vehicle Picture Path"
            required="required"
          />
          <input
            type="button"
            className="btn btn-outline-success w-100"
            value="Add Vehicle"
          />
        </div>
        <div className="col-3 col-md-3  d-none d-md-block"></div>
      </div>
    </div>
  );
}
