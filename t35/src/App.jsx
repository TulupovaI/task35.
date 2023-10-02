import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Contacts from "./components/Contacts";
import EditContact from "./components/EditContact";
import "./App.css";
import "./components/Form.css";

function App() {
  const [listContact, setListContact] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setListContact(data))
      .catch((error) => console.error("Помилка:", error));
  }, []);

  const handleDeleteContact = (id) => {
    const updatedContacts = listContact.filter((contact) => contact.id !== id);
    setListContact(updatedContacts);
  };

  const addContact = (newContact) => {
    setListContact((contacts) => [...contacts, newContact]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Contacts contacts1={listContact} handleDeleteContact={handleDeleteContact} />} />
        <Route path="/form" element={<Form addContact={addContact} />} />
        <Route path="/edit/:id" element={<EditContact listContact={listContact} setListContact={setListContact} />} />

      </Routes>
    </Router>
  );
}

export default App;
