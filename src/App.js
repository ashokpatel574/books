import "./App.css";
import CategoryShelf from "./components/CategoryShelf";
import { bookShelfCategory } from "./constants";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <main className="app">
      <h2 className="header-title">Book Shelf App</h2>
      <div className="searchbtn_container">
        <Link to="search">
          <button className="searchBtn">Search books</button>
        </Link>
      </div>
      <section className="category_container">
        <ul>
          {bookShelfCategory.map((shelf) => (
            <CategoryShelf shelf={shelf} key={shelf} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default App;
