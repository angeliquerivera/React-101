/**
 * Write a function that determines how many days have passed between `date_listed` and today's date.
 */
export default function listingAge(listingDate) {
  const today = new Date();

  // example: "03/14/2022"
  const convertedListing = new Date(listingDate);

  const difference = today.getTime() - convertedListing.getTime();
  const dayCount = Math.ceil(difference / (1000 * 60 * 60 * 24));
  return dayCount;
}
