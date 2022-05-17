// library imports
import React from "react";

// component imports
import SingleCarCard from "./components/SingleCarCard";
import VehicleTypes from "./components/VehicleTypes";

// local data
import carListingInfo from "../data/car_listing_info.json";

const vehicleTypesArr = ["car", "motorcycle", "SUV"];

export default function CarsList() {
  return (
    <section className="container-fluid">
      <h1>{"This is CarsList"}</h1>
      <h2>We've got all the vehicles you could ever want, including:</h2>

      <VehicleTypes types={vehicleTypesArr} />

      <h2>Our Car List</h2>
      {/* Rows can have a max of 12 cols */}
      <div className="row">
        {carListingInfo.map((singleCarData) => (
          <SingleCarCard
            key={singleCarData.uid}
            singleCarDetails={singleCarData}
          />
        ))}
      </div>
    </section>
  );
}
