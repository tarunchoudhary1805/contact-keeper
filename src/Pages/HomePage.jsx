import React, { useState, useEffect } from "react";
import ContactList from "../components/ContactList";
import Form from "../components/Form";
import img1 from "../assets/img1.jpg";
import EditContact from "../components/EditContact";

import { data } from "../api.js";

const api = data.api;

const HomePage = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState();

  console.log("dattttta", contacts);
  console.log("index", index);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await fetch(`${api}/api/contact/`, { method: "GET" });
      console.log(response);
      const data = await response.json();
      console.log(data);
      if (response.status == 200) {
        setContacts(data.contacts);
      }
      setLoading(false);
    })();
  }, []);

  const formRes = (data) => {
    console.log("dataaaaaaaa", data);
    let val = [...contacts];
    val.push(data);
    setContacts(val);
  };

  const editForm = async (data) => {
    console.log("edddd", data);
    const response = await fetch(`${api}/api/contact/${data._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const data2s = await response.json();
    if (response.status == 200) {
      let data1 = [...contacts];
      data1[index] = data;
      setContacts(data1);
    }
  };

  const deleteContact = async (i, id) => {
    let data2 = [...contacts];
    const response = await fetch(`${api}/api/contact/${id}`, {
      method: "DELETE",
    });
    const data1 = await response.json();
    console.log(data1);
    if (response.status == 200) {
      data2.splice(i, 1);
      setContacts(data2);
    }
  };

  return (
    <div className="container">
      <Form formRes={(data) => formRes(data)} />
      {contacts.length == 0 && (
        <h3 className="text-center text-secondary">No Contacts available</h3>
      )}
      <div className="contact-list">
        {contacts?.map((item, i) => (
          <div className="cardd">
            <div className="content">
              {" "}
              <h4>{item.fullName}</h4>
              <p>
                {item.email} <br /> {item.phoneNumber} <br /> {item.address}
              </p>
              <p className="d-flex">
                <i
                  onClick={() => deleteContact(i, item._id)}
                  className="far fa-trash-alt m-2 text-danger"
                  title="Delete Contact"
                ></i>
                <i onClick={() => setIndex(i)}>
                  <EditContact
                    data={item}
                    editForm={(data, i) => editForm(data, i)}
                  />
                </i>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
