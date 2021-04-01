import { createContext, useReducer } from "react";
import studentReducer from "../componenets/reducers/studentReducer";

const initialstudents = [
  {
    name: "Basuma Rufina",
    level: "200",
    date: "01/12/12",
    indexNo: "RU001",
  },
  {
    name: "Abu Agnes",
    level: "300",
    date: "14/02/19",
    indexNo: "RU026",
  },
  {
    name: "Mathias Emelia",
    level: "400",
    date: "23/10/21",
    indexNo: "RU022",
  },
];

export const StudentContext = createContext();

const StudentContextProvider = ({ children }) => {
  const [students, dispatch] = useReducer(studentReducer, initialstudents);
  return (
    <StudentContext.Provider value={{ students, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};
export default StudentContextProvider;
