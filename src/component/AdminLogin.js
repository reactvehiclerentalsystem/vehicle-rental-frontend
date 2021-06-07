export function AdminLogin() {
  return (
    <div className="row">
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 className="alert alert-secondary">Admin Login</h3>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter Email"
          required="required"
        />
        <input
          type="password"
          className="form-control mb-2"
          placeholder="Enter Password"
          required="required"
        />
        <input
          type="button"
          className="btn btn-outline-success w-100"
          value="Login"
        />
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}
