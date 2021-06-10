import { useEffect } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppNavBar } from "../common/AppNavBar";
import { guestVehiclesAction } from "../redux/GuestVehicleReducer";
import {
  updateRefVehicle,
  viewVehicleById,
} from "../redux/UserVehicleSearchReducer";
import { getAllVehiclesAction } from "../redux/VehicleReducer";
import { VehicleModal } from "./VehicleModal";

export function VehicleListUser() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(guestVehiclesAction());
  }, []);

  const getById = (item) => {
    dispatch(viewVehicleById(item));
  };

  return (
    <div className="mb-4">
      <AppNavBar />
      &nbsp;
      <h3 className="alert alert-secondary">Vehicle List</h3>
      <Row xs={1} md={3} className="g-4 p-2">
        {state.guestList.list.map((item, index) => (
          <tr key={index}>
            {/**<th scope="row">{index + 1}</th> */}
            <Col className="mb-2">
              <Card>
                <Card.Img variant="top" src={item.picture} />
                <Card.Body>
                  <Card.Title>{item.vehicleName}</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button onClick={() => getById(item)}> More Details</Button>

                  <Button as={Link} to="/register" className="ml-2 rounded">
                    Register For Booking
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
