import React, { useState } from "react";
import MyForm from "./components/MyForm";
import ContactsList from "./components/ContactsList";

/**
 * The top level HTML for the form and submitted form data.
 * @function FormRoot
 * @returns {JSX}
 */
export default function FormRoot() {
  const [contacts, updateContacts] = useState([]);

  /**
   * Updates `contacts` state by combining existing `contacts` values with the incoming `contactInfo`
   * @function addContact
   * @param {Object} newSubmittedContact
   */
  const addContact = (newSubmittedContact) => {
    updateContacts([...contacts, newSubmittedContact]);
  };

  return (
    <div>
      <MyForm addContact={addContact} />
      <ContactsList contacts={contacts} />
    </div>
  );
}
