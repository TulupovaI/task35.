import React from "react";
import Nav from "./Nav";
import Modal from "./Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Contacts({ contacts1, handleDeleteContact }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const navigate = useNavigate();
  
  const navigateToEdit = (id) => {
    navigate(`/edit/${id}`);
  };
  
  const openModal = (id) => {
      setSelectedContact(id);
      setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const confirmDelete = () => {
      handleDeleteContact(selectedContact);
      closeModal();
  };
  
  return (
    <>
    <Nav />
      <Modal show={showModal} onClose={closeModal} onConfirm={confirmDelete} />
    <div className="contacts">
      <h2>Список контактів</h2>
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>Телефон</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {contacts1.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.username}</td>
              <td>{contact.phone}</td>
              <td>
              <button onClick={() => openModal(contact.id)}>Видалити</button>
              <button onClick={() => navigateToEdit(contact.id)}>Редагувати</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  </>  
  );
}

export default Contacts;
