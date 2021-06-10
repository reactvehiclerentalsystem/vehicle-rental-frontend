import { useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserNavBar } from "../common/AppNavBar";
import {
  getAllVehiclesAction,
  getSpecVehiclesAction,
  updateRefVehicle,
  viewVehicleById,
} from "../redux/UserVehicleSearchReducer";
import { getVehicleByIdAction } from "../redux/VehicleReducer";
import { VehicleModal } from "./VehicleModal";

export function VehicleListRegisteredUser() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const updateRefObj = () => {
    dispatch(updateRefVehicle({}));
  };

  useEffect(() => {
    dispatch(getAllVehiclesAction());
  }, []);

  const getById = (item) => {
    dispatch(viewVehicleById(item));
  };

  return (
    <div className="mb-4">
      <UserNavBar />
      &nbsp;
      <h3 className="alert alert-secondary">Vehicle List</h3>
      <Row xs={1} md={3} className="g-4 p-2">
        {state.UserVehicleSearch.refVehicle.map((item, index) => (
          <tr key={index}>
            {/**<th scope="row">{index + 1}</th> */}
            <Col className="mb-2">
              <Card>
                <Card.Img variant="top" src={item.picture} />
                <Card.Body>
                  <Card.Title>{item.vehicleName}</Card.Title>
                  <Card.Text>
                    Everything in life is somewhere else, and you get there in a
                    car.
                  </Card.Text>
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
      <VehicleModal />
    </div>
  );
}
