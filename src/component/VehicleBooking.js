import { Alert, Button } from "react-bootstrap";

export const VehicleBooking = () => {
  return (
    <div>
      <div>
        <Alert variant="info">
          <h1>Vehicle Booking</h1>
          <p>Book your dream car!</p>
        </Alert>
      </div>
      <div>
        <input
          type="text"
          className="form-control my-1 p-2"
          placeholder="Enter your Addhar number"
        />
      </div>
      <div>
        <input
          type="text"
          className="form-control my-1 p-2"
          placeholder="Enter the Vehicle name"
        />
      </div>
      <div>
        <input
          type="text"
          className="form-control my-1 p-2"
          placeholder="Enter the Booking start date"
        />
      </div>
      <div>
        <input
          type="text"
          className="form-control my-1 p-2"
          placeholder="Enter the Booking end date"
        />
      </div>
      <Button variant="success w-100 my-2 p-1">Book</Button>
    </div>
  );
};
