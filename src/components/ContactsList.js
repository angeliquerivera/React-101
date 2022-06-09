import React from "react";
import ContactCard from "./ContactCard";

/**
 * @function ContactsList
 * @param {Object[]} contacts - array containing contact info objects
 * @returns {JSX}
 */
export default function ContactsList({ contacts }) {
  return (
    <section className="container mt-5">
      <div className="row">
        <header className="col-12">
          <h3>Submitted Contacts</h3>
        </header>
      </div>
      {/* Take every contact in the contacts array and return the following JSX for each contact. */}
      {contacts.map(({ name, phone, email }) => (
        <ContactCard key={phone} name={name} phone={phone} email={email} />
      ))}
    </section>
  );
}

// https://excalidraw.com/#room=996d0cdedff37db36d7c,ZpvXYU-4R45LTKCSp93zuQ
