import { Alert, Button } from "react-bootstrap";
import { UserNavBar } from "../common/AppNavBar";

export const VehicleBooking = () => {
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
          <div>
            <input
              type="text"
              className="form-control mb-2 p-2"
              placeholder="Enter your Addhar number"
              pattern="^(?=.*\d)[\d]{12}$"
            />
          </div>
          <div>
            <select
              class="form-control form-select w-100 p-2 mb-2"
              aria-label=".form-select-lg example"
            >
              <option selected>Choose your vehicle</option>
              {["Swift", "Wagonor", "City", "Polo"].map((item, index) => (
                <option value="1" key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div>
            <input
              type="date"
              className="form-control mb-2 p-2"
              placeholder="Enter the Booking start date"
            />
          </div>
          <div className="mb-4">
            <input
              type="date"
              className="form-control p-2"
              placeholder="Enter the Booking end date"
            />
          </div>
          <div className="mb-2">
            <input
              type="button"
              className="btn btn-outline-success w-100"
              value="Book"
            />
          </div>
        </div>
        <div className="col-3 col-md-3  d-none d-md-block"></div>
      </div>
    </div>
  );
};
