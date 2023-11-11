import axios from "axios";
import React, { useEffect, useState } from "react";
import CompanyEmpNavbar from "./CompanyEmpNavbar";

const CompanyEmpView = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios.get("https://testapi.devtoolsdaily.com/users").then((response) => {
      changeData(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <CompanyEmpNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">First</th>
                      <th scope="col"></th>
                      <th scope="col">Country Code</th>
                      <th scope="col">Company ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((value, index) => {
                      return (
                        <tr>
                          <td>{value.id}</td>
                          <td>{value.firstName}</td>
                          <td>{value.lastName}</td>
                          <td>{value.countryCode}</td>
                          <td>{value.companyId}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyEmpView;
