import React from "react";
import CompanyEmpNavbar from "./CompanyEmpNavbar";

const CompanyEmpAdd = () => {
  return (
    <div>
      <CompanyEmpNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Album Id
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Photos Title
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Url
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Thumbnail Url
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyEmpAdd;
