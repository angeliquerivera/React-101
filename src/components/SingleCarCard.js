import React from "react";

export default function SingleCarCard({ singleCarDetails }) {
  const {
    uid,
    car_year,
    car_make,
    car_model,
    car_transmission,
    car_color,
    car_price,
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

  /**
   * Write a function that strips the initial `$` from `car_price` and convert THAT string into an number.
   */

  function strToNum(str) {
    return Number(str.slice(1));
  }

  /**
   * Write a function that rounds `car_prices` to the next highest 10 and then subtract 1.
   */
  function roundUpToNearestNine(price) {
    // Math.round(4.01) => 4, .round(4.5) => 5
    // Math.ceil(4.999) => 5
    // Math.floor(4.9999) => 4

    return Math.ceil(price / 10) * 10 - 1;
  }

  /**
   * Write a function that determines how many days have passed between `date_listed` and today's date.
   */
  function listingAge(listingDate) {
    const today = new Date();

    // example: "03/14/2022"
    const convertedListing = new Date(listingDate);

    const difference = today.getTime() - convertedListing.getTime();
    const dayCount = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return dayCount;
  }

  function formatTelephone(telNumber) {
    // ex tel-number (123) 456-7890
    telNumber.slice(1, 3);
    telNumber.replace();
  }

  const roundedValue = roundUpToNearestNine(strToNum(car_price));
  const calculatedListingAge = listingAge(date_listed);

  return (
    <div className="col-6">
      <div className="card mb-4">
        <header className="card-header">
          <small>{car_title_status}</small>
          <h5 className="card-title">
            {basicCarInfo} ({car_color})
          </h5>
        </header>

        <div className="card-body">
          <h5>Listed {calculatedListingAge} days ago</h5>
          <h6 className="card-subtitle text-muted">
            {car_mileage} mi. | Transmission: {car_transmission}
          </h6>
          <h4 className="display-4">
            ${roundedValue}
            <sup>
              <small>99</small>
            </sup>
          </h4>
        </div>
        <footer className="card-footer">
          <h6>
            <strong>
              {dealership_name} - {dealership_miles_from_you} miles from you
            </strong>
          </h6>
          <p className="card-text">{dealership_star_rating} stars</p>
          <p className="card-text">Contact {dealership_contact_name}</p>
          <p className="card-text">{dealership_contact_number}</p>
          <p className="card-text">{dealership_contact_email}</p>
        </footer>
      </div>
    </div>
  );
}
