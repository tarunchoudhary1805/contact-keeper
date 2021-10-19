import React, { useState } from "react";

const EditContact = (props) => {
  const [data, setData] = useState({
    fullName: props.data.fullName,
    phoneNumber: props.data.phoneNumber,
    email: props.data.email,
    address: props.data.address,
    _id: props.data._id,
  });
  console.log(props);
  const submit = () => {
    console.log(data);
    props.editForm(data);
    setData({
      fullName: "",
      phoneNumber: "",
      email: "",
      address: "",
      _id: "",
    });
    // contacts.push(data);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };
  return (
    <div>
      <div>
        <i
          data-toggle="modal"
          data-target="#exampleModaledit"
          className="far fa-edit m-2  text-success"
          title="Edit Contact"
        ></i>
      </div>

      <div
        className="modal fade"
        id="exampleModaledit"
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
                Edit Contact Details
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

export default EditContact;
