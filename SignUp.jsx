import React, { useState } from "react";

const SignUp = () => {
  const [formObj, setFormObj] = useState({
    fName: "",
    lName: "",
    city: "",
    gender: "",
  });
  const inputOnChange = (property, value) => {
    setFormObj((prevObj) => ({
      ...prevObj,
      [property]: value,
    }));
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formObj));
  };
  return (
    <div className="container">
      <h1> Sign Up</h1>
      <form onSubmit={formSubmit}>
        <input
          onChange={(e) => {
            inputOnChange("fName", e.target.value);
          }}
          value={formObj.fName}
          type="text"
          placeholder="First Name"
        />
        <br />
        <input
          onChange={(e) => {
            inputOnChange("lName", e.target.value);
          }}
          value={formObj.lName}
          type="text"
          placeholder="Last Name"
        />{" "}
        <br />
        <select
          onChange={(e) => {
            inputOnChange("city", e.target.value);
          }}
          value={formObj.city}
        >
          <option value="">Choose City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Gazipur">Gazipur</option>
        </select>
        <br />
        <input
          onChange={(e) => {
            inputOnChange("gender", "Male");
          }}
          checked={formObj.gender == "Male"}
          type="radio"
          name="Gender"
        />
        Male
        <input
          onChange={(e) => {
            inputOnChange("gender", "Female");
          }}
          checked={formObj.gender == "Female"}
          type="radio"
          name="gender"
        />
        Female
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
