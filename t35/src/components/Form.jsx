import React, { useState } from "react";
import Nav from "./Nav";
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./Form.css";
function Form({ addContact }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function submitFormHandler(e) {
    e.preventDefault();

   const newContact = {
    username,
    name,
    phone,
  };

  addContact(newContact); 

  navigate('/'); 

    
    console.log(newContact);

    setUsername("");
    setName("");
    setPhone("");
     
  }

  return (
    <>
    <Nav/>
    <div className="wrapper">
      <form className="new-user">
        <label htmlFor="username">Введіть своє прізвище:</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="name">Введіть своє ім'я:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="phone">Введіть номер телефону:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <div className="buttons">
          <NavLink to="/" className="btn-form" onClick={submitFormHandler}>
            Зберегти
          </NavLink>
          
          <NavLink to="/" className="btn-form">
            Скасувати
          </NavLink>
        </div>
      </form>
    </div>
  </>  
  );
}

export default Form;
