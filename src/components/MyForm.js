import React, { useEffect, useState } from "react";

/**
 * A contact form with three input fields:
 * - contact's name
 * - contact's email
 * - contact's phone #
 * When the form is submitted, the form data will be saved in a `contacts` state and passed to a {@link ContactList} component, where it is rendered in the browser.
 * @function MyForm
 * @param {Function} addContact {@link FormRoot based useState setState function}
 * @return {jsx}
 */
export default function MyForm({ addContact }) {
  // const [stateField, setStateFieldFunc] = useState(initialState)
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  /**
   * Update the input field state as each input changes
   * @function handleChange
   * @param {SyntheticEvent} event
   */
  const handleChange = (event) => {
    setContactInfo({
      ...contactInfo,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * Submit form data and reset `contactInfo` in order to receive data for a contact submission.
   * @function handleSubmit
   * @param {SyntheticEvent} event
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    addContact(contactInfo);
    setContactInfo({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <section className="container">
      <div className="row">
        <header className="col">
          <h3>Contact Form</h3>
        </header>
      </div>

      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="form-label" htmlFor="name">
                Contact Name
              </label>
              <input
                value={contactInfo.name}
                type="text"
                name="name"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="form-label" htmlFor="email">
                Contact E-mail
              </label>
              <input
                value={contactInfo.email}
                type="email"
                name="email"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="form-label" htmlFor="phone">
                Contact Phone Number
              </label>
              <input
                value={contactInfo.phone}
                type="tel"
                name="phone"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="mt-4">
              <button type="submit">Submit Contact</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
