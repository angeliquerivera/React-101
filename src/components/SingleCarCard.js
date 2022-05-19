import React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import listingAge from "../utils/listingAge";
import roundUpToNearestNine from "../utils/roundUpToNearestNine";
import strToNum from "../utils/strtoNum";

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
    ...dealerInfo
  } = singleCarDetails;

  const basicCarInfo = `${car_year} ${car_make} ${car_model}`;

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
        <CardHeader
          titleStatus={car_title_status}
          info={basicCarInfo}
          color={car_color}
        />

        <CardBody
          listingAge={calculatedListingAge}
          mileage={car_mileage}
          transmission={car_transmission}
          roundedValue={roundedValue}
        />
        <CardFooter dealerInfo={dealerInfo} />
      </div>
    </div>
  );
}
