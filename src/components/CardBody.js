import React from "react";

export default function CardBody({
  listingAge,
  mileage,
  transmission,
  roundedValue,
}) {
  return (
    <div className="card-body">
      <h5>Listed {listingAge} days ago</h5>
      <h6 className="card-subtitle text-muted">
        {mileage} mi. | Transmission: {transmission}
      </h6>
      <h4 className="display-4">
        ${roundedValue}
        <sup>
          <small>99</small>
        </sup>
      </h4>
    </div>
  );
}
