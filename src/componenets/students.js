import React from "react";
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

export function Students() {
  const { students, dispatch } = useContext(StudentContext);

  return (
    <div>
      {students.map((student) => (
        <div className="band">
          <h2>{student.name}</h2>
          <h3>{student.level}</h3>
          <h4>{student.date}</h4>
          <h2>{student.indexNo}</h2>
          <button
            className="ben"
            onClick={() =>
              dispatch({ type: "DELETE", indexNo: student.indexNo })
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
export default Students;
