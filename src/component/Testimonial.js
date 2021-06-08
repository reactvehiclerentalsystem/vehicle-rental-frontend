import { Button } from "react-bootstrap";

export function Testimonial() {
  return (
    <div>
      <div className="row">
        <div className="col-3 col-md-3 d-none d-md-block"></div>
        <div className="col-12 col-md-6">
          <h3 className="alert alert-secondary">Feedback</h3>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Feedback"
            />
          </div>
          <div>
            <Button variant="outline-dark" className="w-100">
              Submit
            </Button>
          </div>
        </div>

        <div className="col-3 col-md-3  d-none d-md-block"></div>
      </div>
    </div>
  );
}
