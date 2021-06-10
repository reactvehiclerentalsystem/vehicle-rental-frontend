import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminNavBar } from "../common/AppNavBar";
import { getAllBrandAction } from "../redux/VehicleBrandReducer";
import { updateVehicleAction, VehicleAction } from "./../redux/VehicleReducer";

export function Vehicle() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [vehicleName, setVehicleName] = useState(
    state.Vehiclee.refvehicle.vehicleName
  );
  const [vehicleType, setVehicleType] = useState(
    state.Vehiclee.refvehicle.vehicleType
  );
  const [vehiclePlateNumber, setVehiclePlateNumber] = useState(
    state.Vehiclee.refvehicle.vehiclePlateNumber
  );
  const [vehicleColor, setVehicleColor] = useState(
    state.Vehiclee.refvehicle.vehicleColor
  );
  const [vehicleLocation, setVehicleLocation] = useState(
    state.Vehiclee.refvehicle.vehicleLocation
  );
  const [numberOfSeats, setNumberOfSeats] = useState(
    state.Vehiclee.refvehicle.numberOfSeats
  );
  const [dailyPrice, setDailyPrice] = useState(
    state.Vehiclee.refvehicle.dailyPrice
  );
  const [picture, setPicture] = useState(state.Vehiclee.refvehicle.picture);
  const [vehicleBrand, setVehicleBrand] = useState(
    state.Vehiclee.refvehicle.vehicleBrand
  );

  const [successOperation, setSuccessOperation] = useState(false);

  const updatevehicleName = (e) => setVehicleName(e.target.value);
  const updatevehicleType = (e) => setVehicleType(e.target.value);
  const updatevehiclePlateNumber = (e) => setVehiclePlateNumber(e.target.value);
  const updatevehicleColor = (e) => setVehicleColor(e.target.value);
  const updatevehicleLocation = (e) => setVehicleLocation(e.target.value);
  const updatenumberOfSeats = (e) => setNumberOfSeats(e.target.value);
  const updatedailyPrice = (e) => setDailyPrice(e.target.value);
  const updatepicture = (e) => setPicture(e.target.value);
  const updatevehicleBrand = (e) => {
    setVehicleBrand(e.target.value);
  };

  // Used to Initialize :: READ THE DATA FROM API
  useEffect(() => {
    dispatch(getAllBrandAction());
  }, []);

  const AddVehicle = (e) => {
    e.preventDefault();
    dispatch(
      VehicleAction({
        vehicleName,
        vehicleType,
        vehiclePlateNumber,
        vehicleColor,
        vehicleLocation,
        numberOfSeats,
        dailyPrice,
        picture,
        vehicleBrand: {
          brand_id: vehicleBrand,
        },
      })
    );

    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 2000);

    setVehicleName("");
    setVehicleType("");
    setVehiclePlateNumber("");
    setVehicleColor("");
    setVehicleLocation("");
    setNumberOfSeats("");
    setDailyPrice("");
    setPicture("");
    setVehicleBrand("");
  };

  const updateVehicleDetails = (e) => {
    e.preventDefault();
    dispatch(
      updateVehicleAction({
        vehicleId: state.Vehiclee.refvehicle.vehicleId,
        vehicleName,
        vehicleType,
        vehiclePlateNumber,
        vehicleColor,
        vehicleLocation,
        numberOfSeats,
        dailyPrice,
        picture,
        vehicleBrand: {
          brand_id: vehicleBrand,
        },
      })
    );

    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 2000);

    setVehicleName("");
    setVehicleType("");
    setVehiclePlateNumber("");
    setVehicleColor("");
    setVehicleLocation("");
    setNumberOfSeats("");
    setDailyPrice("");
    setPicture("");
    setVehicleBrand("");
  };

  return (
    <div>
      <AdminNavBar />
      <div className="row">
        <div className="col-3 col-md-3 d-none d-md-block"></div>
        <div className="col-12 col-md-6">
          <h3 className="alert alert-secondary">
            {state.Vehiclee.refvehicle.vehicleId
              ? "Update enquiry"
              : "Create Enquiry"}
          </h3>

          {successOperation && (
            <div className="alert alert-success">Vehicle Added</div>
          )}

          <input
            type="text"
            className="form-control mb-2"
            placeholder="Vehicle Name"
            value={vehicleName}
            onChange={(e) => updatevehicleName(e)}
            required
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Vehicle Type"
            value={vehicleType}
            onChange={(e) => updatevehicleType(e)}
            required
          />
          <select
            className="form-control form-select w-100 p-2 mb-2"
            aria-label=".form-select-lg example"
            value={vehicleBrand}
            onChange={(e) => updatevehicleBrand(e)}
          >
            <option selected>Brand Name</option>
            {[...state.VehicleBrandR.list].map((item, index) => (
              <option value={item.brand_id} key={index}>
                {item.brand_name}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Vehicle Plate Number"
            value={vehiclePlateNumber}
            onChange={(e) => updatevehiclePlateNumber(e)}
            required
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Vehicle Color"
            value={vehicleColor}
            onChange={(e) => updatevehicleColor(e)}
            required
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Number of Seats"
            value={numberOfSeats}
            onChange={(e) => updatenumberOfSeats(e)}
            required
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Daily Price"
            value={dailyPrice}
            onChange={(e) => updatedailyPrice(e)}
            required
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Vehicle Location"
            value={vehicleLocation}
            onChange={(e) => updatevehicleLocation(e)}
            required
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Vehicle Picture Path"
            value={picture}
            onChange={(e) => updatepicture(e)}
            required
          />
          {state.Vehiclee.refvehicle.vehicleId ? (
            <input
              type="button"
              className="btn btn-outline-success w-100"
              value="Update Vehicle"
              onClick={(e) => updateVehicleDetails(e)}
            />
          ) : (
            <input
              type="button"
              className="btn btn-outline-success w-100"
              value="Add Vehicle"
              onClick={(e) => AddVehicle(e)}
            />
          )}
        </div>
        <div className="col-3 col-md-3  d-none d-md-block"></div>
      </div>
    </div>
  );
}
