import React, { useContext, useState, useEffect } from "react";
import { FormContext } from "../contexts/FormContext";
import styled from "./Form2.module.css";
import { useNavigate } from "react-router-dom";

const Form2 = () => {
  // const { form, handleForm } = useContext(FormContext);
  // const [data, setData1] = useState({});
  const navigate = useNavigate();

  const { form, handleForm, setForm } = useContext(FormContext);

  const [data, getData] = useState([]);

  const [user, setUser] = useState([]);
  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    fetch("http://localhost:3005/users")
      .then((d) => d.json())
      .then((res) => {
        // console.log(res)
        setUser(res);
      });
  };

  // const [state, setState] = useState("");
  // const [address, setAddress] = useState("");
  // const [pin, setPin] = useState("");

  // let obj1 = {
  //   state,
  //   address,
  //   pin,
  // };

  // const sendallData = () => {
  //   setForm(...form, obj1);
  // };

  // console.log(form);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log(obj1);
  //   setData1(obj1);
  //   handleForm({ ...form, obj1 });
  // };
  // console.log(form);
  // const handleList = () => {
  //   setList(form);
  //   addForm(list);
  // };

  const handleForm2 = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const getDta = (e) => {
    e.preventDefault();
    // console.log(form);
    fetch("http://localhost:3005/users", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    }) //its show get request to make post add method ,body,header
      // getTodo()
      .then(() => {
        getUser();
      });
    // navigate("/userdetails");
    getData(user);
  };
  return (
    <>
      <div className={styled.maincont}>
        <div className="userdisplay">
          {data.map((e, i) => (
            <div className="userflex">
              <p>{e.name}</p>
              <p>{e.age}</p>
              <p>{e.dob}</p>
              <p>{e.state}</p>
              <p>{e.address}</p>
            </div>
          ))}
        </div>
        <h1>FORM2</h1>
        <div className={styled.inpcont}>
          <form>
            <input
              type="text"
              placeholder="state"
              required
              // onChange={(e) => setState(e.target.value)}
              onChange={handleForm2}
              name="state"
            />
            <br />
            <br />
            <input
              type="address"
              placeholder="address"
              required
              onChange={handleForm2}
              name="address"
            />
            <br />
            <br />
            <input
              type="number"
              placeholder="pincode"
              required
              onChange={handleForm2}
              name="pincode"
            />
            <br />
            <br />
            <input type="submit" onClick={getDta} />
          </form>
        </div>
      </div>
    </>
  );
};

export default Form2;

// let obj = {
//   name:"",
//   age:"",
//   dob:"",
//   state:"",
//   address:"",
//   pin:""
// }
