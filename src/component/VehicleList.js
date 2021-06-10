import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { AdminNavBar } from "../common/AppNavBar";

import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  getAllVehiclesAction,
  updateRefVehicle,
  VehicleDeleteAction,
} from "../redux/VehicleReducer";
import { AdminVehicleModal } from "./AdminVehicleModal";
import { viewVehicleById } from "../redux/UserVehicleSearchReducer";

export function VehicleList() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllVehiclesAction());
  }, []);

  const deleteVehicle = (item, index) => {
    dispatch(VehicleDeleteAction(item));
  };

  const updateVehicle = (item, index) => {
    dispatch(updateRefVehicle(item));
    history.push("/vehicle");
  };

  const getById = (item) => {
    dispatch(viewVehicleById(item));
  };
  return (
    <div>
      <AdminNavBar />
      <div className="mb-4">
        &nbsp;
        <h3 className="alert alert-secondary">Vehicle List</h3>
        <Row xs={1} md={3} className="g-4 p-2">
          {[...state.Vehiclee.list].map((item, index) => (
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
                    <Button
                      variant="outline-primary"
                      onClick={() => getById(item)}
                    >
                      {" "}
                      More Details
                    </Button>
                    <input
                      type="button"
                      value="Edit"
                      className="btn btn-outline-warning ml-1"
                      onClick={() => updateVehicle(item)}
                    />
                    <input
                      type="button"
                      value="Delete"
                      className="btn btn-outline-danger ml-1"
                      onClick={() => deleteVehicle(item, index)}
                    />
                  </Card.Body>
                </Card>
              </Col>
            </tr>
          ))}
        </Row>
        <AdminVehicleModal />
      </div>
    </div>
  );
}
