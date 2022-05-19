import React from "react";

export default function CardFooter({ dealerInfo }) {
  const {
    dealership_name,
    dealership_miles_from_you,
    dealership_rating,
    dealership_contact_name,
    dealership_contact_number,
    dealership_contact_email,
  } = dealerInfo;
  return (
    <footer className="card-footer">
      <h6>
        <strong>
          {dealership_name} | {dealership_miles_from_you} miles away |{" "}
          {dealership_rating} stars
        </strong>
      </h6>

      <p className="card-text">
        Contact {dealership_contact_name}
        {" by "}
        <a href={`tel:${dealership_contact_number}`}>phone</a>
        {" or "}
        <a href={`mailto:${dealership_contact_email}`}>e-mail.</a>
      </p>
    </footer>
  );
}
