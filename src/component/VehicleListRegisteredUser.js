import { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { UserNavBar } from "../common/AppNavBar";
import {
  getAllVehiclesAction,
  getSpecVehiclesAction,
  updateRefVehicle,
} from "../redux/UserVehicleSearchReducer";

export function VehicleListRegisteredUser() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const updateRefObj = () => {
    dispatch(updateRefVehicle({}));
  };

  useEffect(() => {
    dispatch(getAllVehiclesAction());
  }, []);

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
                <Card.Img
                  variant="top"
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*"
                />
                <Card.Body>
                  <Card.Title>{item.vehicleName}</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="#">More Details</Card.Link>
                  <Card.Link href="#">Book Vehicle</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </tr>
        ))}
      </Row>
    </div>
  );
}
