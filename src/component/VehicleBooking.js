import { useRef, useState } from "react";
import { useEffect } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { UserNavBar } from "../common/AppNavBar";
import { getAllVehiclesAction } from "../redux/VehicleReducer";
import { VehicleBookingAction } from "./../redux/VehicleBookingReducer";

export const VehicleBooking = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const formEL = useRef();

  const [bookingStartDate, setbookingStartDate] = useState("");
  const [bookingEndDate, setbookingEndDate] = useState("");
  const [vehicle, setvehicle] = useState("");

  const [successOperation, setSuccessOperation] = useState(false);
  const [errorOperation, setErrorOperation] = useState(false);

  const updatebookingStartDate = (e) => setbookingStartDate(e.target.value);
  const updatebookingEndDate = (e) => setbookingEndDate(e.target.value);
  const updatevehicle = (e) => setvehicle(e.target.value);

  useEffect(() => {
    dispatch(getAllVehiclesAction());
  }, []);

  const BookVehicle = (e) => {
    e.preventDefault();
    if (formEL.current.checkValidity() === false) {
      // hanlde the false case
      e.preventDefault();
      e.stopPropagation();
      formEL.current.classList.add("was-validated");
    } else {
      dispatch(
        VehicleBookingAction({
          bookingStartDate,
          bookingEndDate,
          userInfo: {
            userName: state.userName,
          },
          vehicle: {
            vehicleId: vehicle,
          },
        })
      );

      // if (state.VehicleBooking.success === true) {
      setSuccessOperation(true);
      setTimeout(() => setSuccessOperation(false), 2000);
      // } else {
      // setErrorOperation(true);
      // setTimeout(() => setSuccessOperation(false), 2000);
      // }

      setbookingStartDate("");
      setbookingEndDate("");
      setvehicle("");
    }
  };

  return (
    <div>
      <UserNavBar />
      <div className="row">
        <div className="col-3 col-md-3 d-none d-md-block"></div>
        <div className="col-12 col-md-6">
          <div>
            <Alert variant="secondary">
              <h1>Vehicle Booking</h1>
              <p>Book your dream car!</p>
            </Alert>
          </div>

          {successOperation && (
            <div className="alert alert-success">Vehicle Booked</div>
          )}

          {/* {errorOperation && ( */}
          {/* <div className="alert alert-success">Vehicle Not Booked</div> */}
          {/* )} */}

          <form ref={formEL} class="needs-validation" novalidate>
            <div>
              <select
                className="form-control form-select w-100 p-2 mb-2"
                aria-label=".form-select-lg example"
                value={vehicle}
                onChange={(e) => updatevehicle(e)}
                required
              >
                <option selected>Choose your vehicle</option>
                {[...state.Vehiclee.list].map((item, index) => (
                  <option value={item.vehicleId} key={index}>
                    {item.vehicleName}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="">Booking Start Date</label>

              <input
                type="date"
                className="form-control mb-2 p-2"
                placeholder="Enter the Booking start date"
                value={bookingStartDate}
                onChange={(e) => updatebookingStartDate(e)}
                min="2021-06-11"
                max="2022-12-10"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="">Booking End Date</label>
              <input
                type="date"
                className="form-control p-2"
                placeholder="Enter the Booking end date"
                value={bookingEndDate}
                onChange={(e) => updatebookingEndDate(e)}
                min="2021-06-11"
                max="2022-12-10"
                required
              />
            </div>
            <div className="mb-2">
              <input
                type="button"
                className="btn btn-outline-success w-100"
                value="Book"
                onClick={(e) => BookVehicle(e)}
              />
            </div>
          </form>
        </div>
        <div className="col-3 col-md-3  d-none d-md-block"></div>
      </div>
    </div>
  );
};
