import React, { useState } from "react";

/**
 * A contact form with three input fields:
 * - contact's name
 * - contact's email
 * - contact's phone #
 * When the form is submitted, the form data will be saved in a `contacts` state and passed to a {@link ContactList} component, where it is rendered in the browser.
 * @function MyForm
 * @param {any} props - something
 * @return {jsx}
 */
export default function MyForm(props) {
  // const [stateField, setStateFieldFunc] = useState(initialState)
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: null,
  });

  return (
    <section className="container">
      <div className="row">
        <header className="col">
          <h3>Contact Form</h3>
        </header>
      </div>

      <div className="row">
        <div className="col">
          <form>
            <div>
              <label className="form-label" for="name">
                Contact Name
              </label>
              <input
                value={contactInfo.name}
                type="text"
                name="name"
                className="form-control"
              />
            </div>
            <div>
              <label className="form-label" for="email">
                Contact E-mail
              </label>
              <input
                value={contactInfo.email}
                type="email"
                name="email"
                className="form-control"
              />
            </div>
            <div>
              <label className="form-label" for="phonenumber">
                Contact Phone Number
              </label>
              <input
                value={contactInfo.phone}
                type="tel"
                name="phonenumber"
                className="form-control"
              />
            </div>
            <div className="mt-4">
              <button>Submit Contact</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
