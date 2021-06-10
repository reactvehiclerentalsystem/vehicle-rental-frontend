import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { AppNavBar } from "../common/AppNavBar";
import { AdminLoginAction } from "../redux/AdminLoginReducer";

export function AdminLogin() {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);
  const formEL = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [successOperation, setSuccessOperation] = useState(false);
  const [errorOperation, setErrorOperation] = useState(false);

  const updateEmail = (e) => setEmail(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);

  const AdminLoginFunction = (e) => {
    if (formEL.current.checkValidity() === false) {
      // hanlde the false case
      e.preventDefault();
      e.stopPropagation();
      formEL.current.classList.add("was-validated");
    } else {
      dispatch(
        AdminLoginAction({
          email,
          password,
        })
      );

      setErrorOperation(true);
      setTimeout(() => setErrorOperation(false), 5000);

      console.log(email, password);
      console.log(state.email, state.password);
    }
  };

  if (state.AdminLogin.loginAction === true) {
    history.push("/admin");

    return <div></div>;
  }

  return (
    <div>
      <AppNavBar />
      <div className="row">
        <div className="col-3 col-md-3 d-none d-md-block"></div>
        <div className="col-12 col-md-6">
          <h3 className="alert alert-secondary">Admin Login</h3>

          {state.UserLogin.loginAction === false && errorOperation && (
            <div className="alert alert-danger">login failure</div>
          )}
          <form ref={formEL} class="needs-validation" novalidate>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Enter Email"
              onChange={(e) => updateEmail(e)}
              required
              pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
            />
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Enter Password"
              onChange={(e) => updatePassword(e)}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#%^*])[a-zA-Z\d!@#%^*]{8,}$"
              required
            />
            <input
              type="button"
              className="btn btn-outline-dark w-100"
              value="Login"
              onClick={(e) => AdminLoginFunction(e)}
            />
          </form>
        </div>
        <div className="col-3 col-md-3  d-none d-md-block"></div>
      </div>
    </div>
  );
}
