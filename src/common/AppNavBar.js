import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export function AppNavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand as={Link} to="/">
        VRS APP
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/register">
            User Register
          </Nav.Link>
          <Nav.Link as={Link} to="/list-employee">
            Enquiry
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export function UserNavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand as={Link} to="/">
        VRS APP
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/search">
            Search
          </Nav.Link>
          <Nav.Link as={Link} to="/vehiclebookinglist">
            Booking Details
          </Nav.Link>
          <Nav.Link as={Link} to="/vehiclebooking">
            Book Vehicles
          </Nav.Link>
          <Nav.Link as={Link} to="/user">
            User
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export function AdminNavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand as={Link} to="/">
        VRS APP
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mr-5 ">
          <NavDropdown title="More Options" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/vehiclelist">
              Vehicle List
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/vehicle">
              Add Vehicle
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/vehiclebrand">
              Vehicle Brand
            </NavDropdown.Item>

            <NavDropdown.Item as={Link} to="/vehiclebrandlist">
              Brand List
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
