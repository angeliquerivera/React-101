import React from "react";

export default function ContactCard({ name, phone, email }) {
  return (
    <div className="row mb-3">
      <div className="col-12">
        <div className="card">
          <div className="card-header">{name}</div>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">{phone}</li>
            <li className="list-group-item">{email}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
