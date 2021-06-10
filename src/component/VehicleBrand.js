import { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AdminNavBar } from "../common/AppNavBar";
import {
  updateBrandAction,
  VehicleBrandAction,
} from "../redux/VehicleBrandReducer";

export function VehicleBrand() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const formEL = useRef();

  const [brand_name, setBrand_name] = useState(
    state.VehicleBrandR.refbrand.brand_name
  );

  const [successOperation, setSuccessOperation] = useState(false);

  const updateBrandName = (e) => setBrand_name(e.target.value);

  const AddBrand = (e) => {
    e.preventDefault();

    if (formEL.current.checkValidity() === false) {
      // hanlde the false case
      e.preventDefault();
      e.stopPropagation();
      formEL.current.classList.add("was-validated");
    } else {
      dispatch(
        VehicleBrandAction({
          brand_name,
        })
      );
      console.log(state.VehicleBrandR.brand_name);

      setSuccessOperation(true);
      setTimeout(() => setSuccessOperation(false), 2000);
      // reset the form
      setBrand_name("");
    }
  };

  const UpdateBrand = (e) => {
    e.preventDefault();
    if (formEL.current.checkValidity() === false) {
      // hanlde the false case
      e.preventDefault();
      e.stopPropagation();
      formEL.current.classList.add("was-validated");
    } else {
      dispatch(
        updateBrandAction({
          brand_id: state.VehicleBrandR.refbrand.brand_id,
          brand_name,
        })
      );
      setSuccessOperation(true);
      setTimeout(() => setSuccessOperation(false), 2000);
      setBrand_name("");
    }
  };

  return (
    <div>
      <AdminNavBar />
      <div className="row">
        <div className="col-3 col-md-3 d-none d-md-block "></div>
        <div className="col-12 col-md-6">
          <h1 className="bg-light text-info p-3 mb-2">
            {state.VehicleBrandR.refbrand.brand_id
              ? "Update Brand"
              : "Add Brand"}
          </h1>

          {successOperation && (
            <div className="alert alert-success">Brand Added</div>
          )}

          <form ref={formEL} class="needs-validation" novalidate>
            <input
              type="text"
              placeholder="Enter Vehicle Brand"
              className="form-control mb-2"
              value={brand_name}
              onChange={(e) => updateBrandName(e)}
              pattern="^[A-Z].*"
              required
            />
            {state.VehicleBrandR.refbrand.brand_id ? (
              <div className="p-1">
                <Button
                  variant="outline-primary"
                  className="w-100"
                  onClick={(e) => UpdateBrand(e)}
                >
                  Update
                </Button>
              </div>
            ) : (
              <div className="p-1">
                <Button
                  variant="outline-success"
                  className="w-100"
                  onClick={(e) => AddBrand(e)}
                >
                  Add
                </Button>
              </div>
            )}
          </form>

          <div className="col-3 col-md-3 d-none d-md-block "></div>
        </div>
      </div>
    </div>
  );
}
