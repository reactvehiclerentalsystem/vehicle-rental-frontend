import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { AppNavBar } from "../common/AppNavBar";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { UserRegisterAction } from "../redux/UserRegisterReducer";
import { useState } from "react";

export function Registration() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userAdhaar, setUserAdhaar] = useState("");

  const updateUserName = (e) => setUserName(e.target.value);
  const updateUserPassword = (e) => setUserPassword(e.target.value);
  const updateUserEmail = (e) => setUserEmail(e.target.value);
  const updateUserNumber = (e) => setUserNumber(e.target.value);
  const updateUserAdhaar = (e) => setUserAdhaar(e.target.value);

  const RegisterUser = (e) => {
    e.preventDefault();

    // THIS IS REDUX ACTION CALLING
    dispatch(
      UserRegisterAction({
        userAdhaar,
        userNumber,
        userName,
        userEmail,
        userPassword,
      })
    );

    // A2: navigate to another page
    // history.push("/list-employee");

    // reset the form
    setUserName("");
    setUserPassword("");
    setUserEmail("");
    setUserNumber("");
    setUserAdhaar("");
  };

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
                value={userName}
                onChange={(e) => updateUserName(e)}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email"
                value={userEmail}
                onChange={(e) => updateUserEmail(e)}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Mobile"
                value={userNumber}
                onChange={(e) => updateUserNumber(e)}
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Adhaar"
                value={userAdhaar}
                onChange={(e) => updateUserAdhaar(e)}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={userPassword}
                onChange={(e) => updateUserPassword(e)}
              />
            </div>

            <div>
              <Button
                variant="outline-dark"
                className="w-100 mb-3"
                onClick={(e) => RegisterUser(e)}
              >
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
