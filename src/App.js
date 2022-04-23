import { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    mobile: "",
    country: "",
    city: "",
    state:"",
    message:""
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: " Please enter a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "mobile",
      type: "text",
      placeholder: "Enter Your Mobile Number",
      label: "Mobile Number",
      pattern:"^[0-9]{8,12}$",
      errorMessage: " Please enter a valid MobileNumber",
      
    },
    {
      id: 4,
      name: "country",
      type: "text",
      placeholder: "Enter Your Residing Country",
      errorMessage:
        "Please Enter a Valid Country",
      label: "Country",
      pattern: "^[A-Za-z]{3,16}$",
      
    },
    {
      id: 5,
      name: "city",
      type: "text",
      placeholder: "Enter Your Current City",
      errorMessage:
        "Please Enter a Valid City",
      label: "City",
      pattern: "^[A-Za-z]{3,16}$",
     
    },
    {
      id: 6,
      name: "state",
      type: "text",
      placeholder: "Enter Your Residing State",
      errorMessage:
        "Please Enter a Valid State",
      label: "State",
      pattern: "^[A-Za-z]{3,100}$",
      
    },
    {
      id: 7,
      name: "message",
      type: "text",
      placeholder: "Enter Your Message",
      errorMessage:
        "Message should Be 6-100 characters",
      label: "Message",
      pattern: "^[A-Za-z]{6,16}$",
     
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!!")
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register With Us</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;