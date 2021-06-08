import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AdminNavBar } from "../common/AppNavBar";
import { VehicleBrandAction } from "../redux/VehicleBrandReducer";

export function VehicleBrand() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const [brand_name, setBrand_name] = useState("");

  const updateBrandName = (e) => setBrand_name(e.target.value);

  const AddBrand = (e) => {
    e.preventDefault();

    // THIS IS REDUX ACTION CALLING
    dispatch(
      VehicleBrandAction({
        brand_name,
      })
    );
    console.log(state.VehicleBrandR.brand_name);
    // A2: navigate to another page
    // history.push("/list-employee");

    // reset the form
    setBrand_name("");
  };
  return (
    <div>
      <AdminNavBar />
      <div className="row">
        <div className="col-3 col-md-3 d-none d-md-block "></div>
        <div className="col-12 col-md-6">
          <div>
            <h1 className="bg-light text-info p-3">Add Brand</h1>
            <div className="mb-1 p-1">
              <input
                type="text"
                placeholder="Enter Vehicle Brand"
                className="form-control"
                value={brand_name}
                onChange={(e) => updateBrandName(e)}
              />
            </div>
            <div className="p-1">
              <Button
                variant="outline-success"
                className="w-100"
                onClick={(e) => AddBrand(e)}
              >
                Add
              </Button>
            </div>
          </div>
          <div className="col-3 col-md-3 d-none d-md-block "></div>
        </div>
      </div>
    </div>
  );
}
