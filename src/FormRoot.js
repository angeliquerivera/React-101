import React, { useState } from "react";
import MyForm from "./components/MyForm";

/**
 * The top level HTML for the form and submitted form data.
 * @function FormRoot
 * @returns {jsx}
 */
export default function FormRoot() {
  const [contacts, updateContacts] = useState([]);

  /**
   * Updates `contacts` state by combining existing `contacts` values with the incoming `contactInfo`
   * @function addContact
   * @param {Object} contactInfo
   */
  const addContact = (contactInfo) => {
    updateContacts([...contacts, contactInfo]);
    console.log(contacts);
  };

  return (
    <div>
      <MyForm addContact={addContact} />
    </div>
  );
}
