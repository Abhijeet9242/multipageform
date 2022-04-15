import React, { useContext, useState } from "react";
import { FormContext } from "../contexts/FormContext";
import styled from "./Form1.module.css";
import { useNavigate } from "react-router-dom";

const Form1 = () => {
  // const [status, setStatus] = useState(true);
  const { form, handleForm } = useContext(FormContext);
  const navigate = useNavigate();

  // const [data, sendData] = useState({});

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");

  let obj = {
    name,
    age,
    dob,
  };

  // console.log(form);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setData({ ...data, [name]: value });
  // };

  // handleForm(data);

  const sendData = (obj) => {
    handleForm(obj);
    navigate("/form2");
  };
  // console.log(form);

  return (
    <>
      <div className={styled.maincont}>
        <div className={styled.inpcont}>
          <h1>FORM1</h1>
          <form>
            <input
              type="text"
              placeholder="name"
              required
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
            <input
              type="number"
              placeholder="age"
              required
              name="age"
              onChange={(e) => setAge(e.target.value)}
            />
            <br />
            <br />
            <input
              type="date"
              placeholder="date of birth"
              onChange={(e) => setDob(e.target.value)}
              required
              name="dob"
            />
            <br />
            <br />
          </form>

          <button
            disabled={
              obj.name !== "" && obj.age !== "" && obj.dob !== "" ? false : true
            }
            onClick={() => sendData(obj)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Form1;
