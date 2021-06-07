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
            <input
              type="text"
              className="form-control mb-2 p-2"
              placeholder="Enter the Vehicle Id"
              pattern="^(?=.*\d)[\d]{1,}$"
            />
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
