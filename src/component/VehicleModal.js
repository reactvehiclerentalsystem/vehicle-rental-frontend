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
        <Modal.Title>Car Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            Name - {state.UserVehicleSearch.ref.vehicleName}
          </ListGroup.Item>
          <ListGroup.Item>
            Type - {state.UserVehicleSearch.ref.vehicleType}
          </ListGroup.Item>
          <ListGroup.Item>
            Seats - {state.UserVehicleSearch.ref.numberOfSeats}
          </ListGroup.Item>
          <ListGroup.Item>
            Daily Price - {state.UserVehicleSearch.ref.dailyPrice}
          </ListGroup.Item>
          <ListGroup.Item>
            Plate Number - {state.UserVehicleSearch.ref.vehiclePlateNumber}
          </ListGroup.Item>
          <ListGroup.Item>
            Location - {String(state.UserVehicleSearch.ref.vehicleLocation)}
          </ListGroup.Item>
          <ListGroup.Item>
            Deleted Status - {String(state.UserVehicleSearch.ref.deleted)}
          </ListGroup.Item>
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
