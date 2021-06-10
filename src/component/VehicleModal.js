import { useDispatch, useSelector } from "react-redux";
import { ListGroup, Modal, Button } from "react-bootstrap";
import {
  updateRefVehicle,
  viewRefVehicle,
} from "../redux/UserVehicleSearchReducer";

export function VehicleModal() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const updateRefObj = () => {
    dispatch(viewRefVehicle({}));
  };
  return (
    <Modal
      show={state.UserVehicleSearch.ref.vehicleId}
      onHide={() => updateRefObj()}
    >
      <Modal.Header closeButton>
        <Modal.Title>{}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            Name - {state.UserVehicleSearch.ref.vehicleName}
          </ListGroup.Item>
          <ListGroup.Item>User Name - {}</ListGroup.Item>
          <ListGroup.Item>Email - {}</ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={() => updateRefObj()}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
