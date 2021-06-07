import { Button } from "react-bootstrap";
import { AppNavBar } from "../common/AppNavBar";
export const UserLogin = () => {
  return (
    <div>
      <AppNavBar />
      <div className="row">
        <div className="col-3 col-md-3 d-none d-md-block"></div>
        <div className="col-12 col-md-6">
          <h3 className="alert alert-secondary mb-4">User Login</h3>
          <div className="mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-2">
            <input
              type="button"
              className="btn btn-outline-dark w-100"
              value="Login"
            />
          </div>
        </div>
        <div className="col-3 col-md-3  d-none d-md-block"></div>
      </div>
    </div>
  );
};
