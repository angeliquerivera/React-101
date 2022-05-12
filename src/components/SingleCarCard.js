import React from "react";

export default function SingleCarCard({ singleCarDetails }) {
  const {
    car_year,
    car_make,
    car_model,
    car_transmission,
    car_color,
    car_mileage,
    car_title_status,
    date_listed,
    dealership_name,
    dealership_miles_from_you,
    dealership_star_rating,
    dealership_contact_name,
    dealership_contact_number,
    dealership_contact_email,
  } = singleCarDetails;

  const basicCarInfo = `${car_year} ${car_make} ${car_model}`;

  return (
    <div className="col-6">
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{basicCarInfo}</h5>
        </div>
      </div>
    </div>
  );
}
