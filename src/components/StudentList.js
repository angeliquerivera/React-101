import React from "react";
import StudentCard from "./StudentCard";

export default function StudentList({
  student,
  absences,
  final_exam,
  term_paper,
  quizzes,
}) {
  return (
    <section>
      <div className="container-lg">
        <header>
          {" "}
          <h2>Students</h2>
        </header>
      </div>
      {student.map({ absences, final_exam, term_paper, quizzes })}
    </section>
  );
}
