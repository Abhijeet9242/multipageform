import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const payload = {
    name: "",
    age: "",
    dob: "",
    state: "",
    address: "",
    pincode: "",
  };

  const [form, setForm] = useState(payload);

  const handleForm = (val) => {
    setForm(val);
  };

  // const addForm = (list) => {
  //   fetch(`http://localhost:3001/user`, {
  //     method: "POST",
  //     body: JSON.stringify(list),
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   }).then((res) => {
  //     res.json();
  //   });
  // };

  // addForm();

  return (
    <FormContext.Provider value={{ form, handleForm, setForm }}>
      {children}
    </FormContext.Provider>
  );
};
