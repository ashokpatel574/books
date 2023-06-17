import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useData } from "../context/DataContext";

const SearchPage = () => {
  const { state, categorySelectHandler } = useData();
  const [input, setInput] = useState("");
  return (
    <div className="search_container">
      <div>
        <Link to="/">
          <button>back to home</button>
        </Link>

        <div>
          <label htmlFor="search">
            <input
              type="text"
              id="search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </label>
        </div>

        <ul>
          {state?.map((bookItem) => (
            <li key={bookItem.name} className="categoryShelf_container-item">
              <div className="categoryShelf_Imgcontainer">
                <img src={bookItem.img} alt={bookItem.name} />
                <div>
                  <label htmlFor="shelfCategory"></label>
                  <select
                    id="shelfCategory"
                    onChange={(e) => categorySelectHandler(e, bookItem.name)}
                  >
                    <option disabled={true}>Move to..</option>
                    <option value={`Currently Reading`}>
                      Currently Reading
                    </option>
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
    </div>
  );
};

export default SearchPage;
