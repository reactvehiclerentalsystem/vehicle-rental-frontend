import { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AdminNavBar } from "../common/AppNavBar";
import { getDashboardAction } from "../redux/DashboardReducer";

export function Dashboard() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboardAction());
  }, []);

  return (
    <div>
      <AdminNavBar />
      <Row xs={1} md={1} className="g-4 p-2">
        {[state.dashboard.list].map((item, index) => (
          <tr key={index}>
            {/**<th scope="row">{index + 1}</th> */}
            <Col className="mb-1">
              <Card className="text-light bg-dark border-info">
                <Card.Img variant="top" />
                <Card.Body>
                  <Card.Text>Total Register User : {item[0]}</Card.Text>
                  <Card.Text>Total Booking : {item[1]}</Card.Text>
                  <Card.Text>Total Qrueries : {item[2]}</Card.Text>
                  <Card.Text>Total Testimonials : {item[3]}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </tr>
        ))}
      </Row>
    </div>
  );
}
