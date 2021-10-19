import React, { useState } from "react";
import { data } from "../api.js";

const api = data.api;

const Form = (props) => {
  const [data, setData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    address: "",
  });
  const submit = async () => {
    console.log(data);
    const response = await fetch(`${api}/api/contact/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    const data1 = await response.json();
    console.log("data1", data1);
    if (response.status == 200) {
      props.formRes(data);
      setData({
        fullName: "",
        phoneNumber: "",
        email: "",
        address: "",
      });
    }
    // contacts.push(data);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };
  return (
    <div>
      <div
        className="d-flex "
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          margin: "5% 0",
        }}
      >
        {/* <div className="form-group"> */}
        <input
          type="text"
          name="address"
          className="form-control w-50"
          id="exampleInputPassword1"
          placeholder="Search Here..."
        />
        {/* </div> */}
        <button
          type="button"
          className="btn btn-success"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <i className="fas fa-user-plus"></i>
        </button>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header ">
              <h5
                className="modal-title text-align-center"
                id="exampleModalLabel"
              >
                Add Contact Details
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    name="fullName"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Full Name"
                    value={data.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="phoneNumber"
                    className="form-control"
                    minLength="10"
                    value={data.phoneNumber}
                    onChange={handleChange}
                    id="exampleInputPassword1"
                    placeholder="contact number"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={data.email}
                    onChange={handleChange}
                    placeholder="Email Id"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="address"
                    value={data.address}
                    onChange={handleChange}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Address"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={submit}
                data-dismiss="modal"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
