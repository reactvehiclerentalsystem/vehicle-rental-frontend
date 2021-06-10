import { UserNavBar } from "../common/AppNavBar";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getSpecVehiclesAction,
  updateRefVehicle,
  viewVehicleById,
} from "../redux/UserVehicleSearchReducer";
import { Button, Card, Col, Row } from "react-bootstrap";
import { VehicleModal } from "./VehicleModal";

export function UserVehicleSearch() {
  const history = useHistory();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [vehicleName, setVehicleName] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [numberOfSeats, setNumberOfSeats] = useState("");
  const [vehicleLocation, setVehicleLocation] = useState("");

  const updatevehicleName = (e) => setVehicleName(e.target.value);
  const updatevehicleType = (e) => setVehicleType(e.target.value);
  const updatevehicleColor = (e) => setVehicleColor(e.target.value);
  const updatenumberOfSeats = (e) => setNumberOfSeats(e.target.value);
  const updatevehicleLocation = (e) => setVehicleLocation(e.target.value);

  const SearchVehicle = (e) => {
    e.preventDefault();

    dispatch(
      getSpecVehiclesAction({
        vehicleName,
        vehicleType,
        vehicleColor,
        numberOfSeats,
        vehicleLocation,
      })
    );

    console.log(state.UserVehicleSearch.refVehicle);

    setVehicleName("");
    setVehicleType("");
    setVehicleColor("");
    setVehicleLocation("");
    setNumberOfSeats("");

    // history.push("/vehiclelistreguser");
  };

  const updateRefObj = () => {
    dispatch(updateRefVehicle({}));
  };

  const getById = (item) => {
    dispatch(viewVehicleById(item));
  };

  return (
    <div>
      <UserNavBar />
      <div className="row m-3"></div>
      <div className="row m-3"></div>
      <div className="row m-3"></div>
      <div className="row">
        <div className="col-4 col-md-4 d-none d-md-block"></div>
        <div className="col-12 col-md-4 ">
          <div className="">
            <input
              type="button"
              className="btn btn-outline-dark w-100 mb-4"
              value="Search All"
              onClick={() => history.push("/vehiclelistreguser")}
            />
            <form>
              <input
                type="text"
                className="form-control mb-4 p-1"
                placeholder="Enter Name"
                value={vehicleName}
                onChange={(e) => updatevehicleName(e)}
                required
              />
              <input
                type="text"
                className="form-control mb-4 p-1"
                placeholder="Enter Type"
                value={vehicleType}
                onChange={(e) => updatevehicleType(e)}
                required
              />
              <input
                type="text"
                className="form-control mb-4 p-1"
                placeholder="Enter Color"
                value={vehicleColor}
                onChange={(e) => updatevehicleColor(e)}
                required
              />
              <input
                type="text"
                className="form-control mb-4 p-1"
                placeholder="Enter Number Of Seats"
                value={numberOfSeats}
                onChange={(e) => updatenumberOfSeats(e)}
                required
              />
            </form>
            <input
              type="text"
              className="form-control mb-4 p-1"
              placeholder="Enter Location"
              value={vehicleLocation}
              onChange={(e) => updatevehicleLocation(e)}
              required
            />
            <div>
              <input
                type="button"
                className="btn btn-outline-dark w-100"
                value="Search"
                // onClick={() => history.push("/vehiclelistreguser")}
                onClick={(e) => SearchVehicle(e)}
              />
            </div>
          </div>
        </div>
        <div className="col-4 col-md-4 d-none d-md-block"></div>
      </div>
      <br />
      <div>
        <Row xs={1} md={2} className="g-4">
          {state.UserVehicleSearch.refVehicle.map((item, index) => (
            <tr key={index}>
              {/**<th scope="row">{index + 1}</th> */}
              <Col>
                <Card>
                  <Card.Img variant="top" src={item.picture} />
                  <Card.Body>
                    <Card.Title>{item.vehicleName}</Card.Title>
                  </Card.Body>
                  <Card.Body>
                    <Button onClick={() => getById(item)}> More Details</Button>

                    <Button
                      as={Link}
                      to="/vehiclebooking"
                      className="ml-2 rounded"
                    >
                      Book Vehicle
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </tr>
          ))}
        </Row>
      </div>
      <VehicleModal />
    </div>
  );
}
