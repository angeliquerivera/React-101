import React from "react";
import student_record from "../../data/student_record.json";
// import StudentList from "../components/StudentList";
/**
 * NB: You already have Bootstrap enabled for class styling, so search the docs to see how to properly apply these styles.
 * {@see {@link https://getbootstrap.com/docs/5.0/getting-started/introduction/ Intro to Bootstrap 5}}
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
  const ViewSingleStudentObj = ({ singleStudent }) => (
    <div class="row">
      <div class="col">
        <pre>{JSON.stringify(singleStudent, null, 2)}</pre>
      </div>
    </div>
  );

  return (
    <main>
      <div class="container">
        <h1>Map Root</h1>
        {student_record.map((singleStudent) => (
          <ViewSingleStudentObj
            key={singleStudent.student}
            singleStudent={singleStudent}
          />
        ))}
      </div>
    </main>
  );
}
