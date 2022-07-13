import React from "react";
import student_record from "../../data/student_record.json";

/**
 * NB: You already have Bootstrap enabled for class styling, so search the docs to see how to properly apply these styles.
 * {@see {@link https://getbootstrap.com/docs/4.0/getting-started/introduction/ Intro to Bootstrap 5}}
 * Tasks:
 * 1. Import student records for use
 * 2. Map students to some kinda component
 * - This component presents the student name, their name, absences, midterm, final exam, term paper scores, as well as a table showing each of the five quiz scores the student earned.
 *
 * Hints:
 * 1. Think about HOW you want to physically organize a student's record in HTML
 * 2. What is the most important info from each student record?
 * 3. What are some data values that could be grouped together?
 * 4. How should present the table of quiz score data?
 */
export default function MapRoot() {
  let puppies = ["Droopy", "Puffball", "Chonky"];
  let puppiesWithOwners = [
    { owner: "John", puppy: "Droopy" },
    { owner: "Drake", puppy: "Puffball" },
    { owner: "Kimiko", puppy: "Chonky" },
  ];

  return (
    <main>
      <h1>Map Root</h1>
      {/* <pre>{JSON.stringify(student_record, null, 2)}</pre> */}

      {/* <h2>List of Puppies</h2>
      <ul>
        {puppies.map((puppyName) => (
          <li key={puppyName}>{puppyName}</li>
        ))}
      </ul>

      <h2>List of puppies and their owners</h2>

      <ul>
        {puppiesWithOwners.map((puppyOwnerObj) => (
          <li key={puppyOwnerObj.puppy}>
            {puppyOwnerObj.owner} is the owner of {puppyOwnerObj.puppy}
          </l
          i>
        ))}
      </ul> */}

      {student_record.map((student) => (
        <p key={student.student}>{student.student}</p>
      ))}
    </main>
  );
}
