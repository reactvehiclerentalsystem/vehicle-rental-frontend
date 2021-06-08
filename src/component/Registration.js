import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { AppNavBar } from "../common/AppNavBar";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { UserRegisterAction } from "../redux/UserRegisterReducer";
import { useRef, useState } from "react";

export function Registration() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const formEL = useRef();

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

    if (formEL.current.checkValidity() === false) {
      // hanlde the false case
      e.preventDefault();
      e.stopPropagation();
      formEL.current.classList.add("was-validated");
    } else {
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
    }
  };

  // THIS IS REDUX ACTION CALLING

  return (
    <div>
      <AppNavBar />

      <div className="row">
        <div className="col-3 col-md-3 d-none d-md-block"></div>
        <div className="col-12 col-md-6">
          <h3 className="alert alert-secondary">Register</h3>
          <form ref={formEL} class="needs-validation" novalidate>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                value={userName}
                onChange={(e) => updateUserName(e)}
                minLength="4"
                maxLength="10"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                value={userEmail}
                onChange={(e) => updateUserEmail(e)}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter Mobile"
                value={userNumber}
                onChange={(e) => updateUserNumber(e)}
                min="999999999"
                max="9999999999"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter Adhaar"
                value={userAdhaar}
                onChange={(e) => updateUserAdhaar(e)}
                min="9999999999"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={userPassword}
                onChange={(e) => updateUserPassword(e)}
                required
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
