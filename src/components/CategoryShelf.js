import React from "react";
import { useData } from "../context/DataContext";

const CategoryShelf = ({ shelf }) => {
  const { state, categorySelectHandler } = useData();
  const filteredBooks = state?.filter((item) => item.bookStatus === shelf);

  return (
    <div className="categoryShelf_container">
      <h2>{shelf}</h2>
      <ul>
        {filteredBooks.map((bookItem) => (
          <li key={bookItem.name} className="categoryShelf_container-item">
            <div className="categoryShelf_Imgcontainer">
              <img src={bookItem.img} alt={bookItem.name} />
              <div>
                <label htmlFor="shelfCategory"></label>
                <select
                  id="shelfCategory"
                  onChange={(e) => categorySelectHandler(e, bookItem.name)}
                >
                  <option>Move to..</option>
                  <option value={`Currently Reading`}>Currently Reading</option>
                  <option value={`Want to Read`}>Want to Read</option>
                  <option value={`Read`}>Read</option>
                </select>
              </div>
            </div>
            <h3>{bookItem.name}</h3>
            <p>{bookItem.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryShelf;
