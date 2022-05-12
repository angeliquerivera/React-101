import React from "react";
import SingleCarCard from "./components/SingleCarCard";

import carListingInfo from "../data/car_listing_info.json";

const vehicleTypes = ["car", "motorcycle", "SUV"];

export default function CarsList() {
  return (
    <section className="container">
      <h1>{"This is CarsList"}</h1>
      <h2>We've got all the vehicles you could ever want, including:</h2>
      <ul>
        {vehicleTypes.map((type) => (
          <li key={type}>{type}</li>
        ))}
      </ul>

      <h2>Our Car List</h2>
      {/* Rows can have a max of 12 cols */}
      <div className="row">
        {carListingInfo.map((carDetailsObj) => {
          const basicCarInfo = `${carDetailsObj.car_year} ${carDetailsObj.car_make} ${carDetailsObj.car_model}`;

          return (
            <SingleCarCard
              key={basicCarInfo}
              singleCarDetails={carDetailsObj}
            />
          );
        })}
      </div>
    </section>
  );
}
