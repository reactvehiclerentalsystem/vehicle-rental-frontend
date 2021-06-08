import { AppNavBar } from "../common/AppNavBar";

export function HomePage() {
  return (
    <div>
      <AppNavBar />
      <div className="row m-3"></div>
      <div className="row m-3"></div>
      <div className="row m-3"></div>
      <div className="row">
        <div className="col-4 col-md-4 d-none d-md-block"></div>
        <div className="col-12 col-md-4 ">
          <div className="">
            <input
              type="button"
              value="User Login"
              className="form-control btn btn-outline-dark m-4 w-50"
            />
            <input
              type="button"
              value="Admin Login"
              className="form-control btn btn-outline-dark m-4 w-50"
            />
            <input
              type="button"
              value="Guest User"
              className="form-control btn btn-outline-dark m-4 w-50"
            />
          </div>
        </div>
        <div className="col-4 col-md-4 d-none d-md-block"></div>
      </div>
    </div>
  );
}
