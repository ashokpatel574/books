import React, { createContext, useContext, useReducer } from "react";
import { initialState, DataReducer } from "../reducer/DataReducer";

const DataContext = createContext();
const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  const categorySelectHandler = (e, bookName) => {
    console.log(e.target.value);

    dispatch({
      type: "changeShelf",
      payload: { name: bookName, catgy: e.target.value },
    });
  };

  return (
    <DataContext.Provider value={{ state, dispatch, categorySelectHandler }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;

export const useData = () => useContext(DataContext);
