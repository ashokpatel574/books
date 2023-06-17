import { booksData } from "../constants";

export const initialState = booksData;

export const DataReducer = (state, action) => {
  switch (action.type) {
    case "changeShelf": {
      return state?.map((item) => {
        return item.name === action.payload.name
          ? {
              ...item,
              bookStatus: String(action.payload.catgy),
            }
          : { ...item };
      });
    }

    default:
      return state.bookData;
  }
};
