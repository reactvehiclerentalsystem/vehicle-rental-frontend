import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { AdminNavBar } from "../common/AppNavBar";

export function VehicleBrand() {
  return (
    <div>
      <AdminNavBar />
      <div className="row">
        <div className="col-3 col-md-3 d-none d-md-block "></div>
        <div className="col-12 col-md-6">
          <div>
            <h1 className="bg-light text-info p-3">Add Brand</h1>
            <div className="mb-1 p-1">
              <input
                type="text"
                placeholder="Enter Vehicle Brand"
                className="form-control"
              />
            </div>
            <div className="p-1">
              <Button variant="outline-success" className="w-100">
                Add
              </Button>
            </div>
          </div>
          <div className="col-3 col-md-3 d-none d-md-block "></div>
        </div>
      </div>
    </div>
  );
}
