import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { AppNavBar } from "../common/AppNavBar";

export function Registration() {
  const history = useHistory();
  return (
    <div>
      <AppNavBar />

      <div className="row">
        <div className="col-3 col-md-3 d-none d-md-block"></div>
        <div className="col-12 col-md-6">
          <form>
            <h3 className="alert alert-secondary">Register</h3>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Mobile"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Adhaar"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <div>
              <Button variant="outline-dark" className="w-100 mb-3">
                Register
              </Button>
            </div>
            <div>
              <input
                type="button"
                className="btn btn-outline-dark w-100"
                value="Login"
                onClick={() => history.push("/userlogin")}
              />
            </div>
          </form>
        </div>
        <div className="col-3 col-md-3  d-none d-md-block"></div>
      </div>
    </div>
  );
}
