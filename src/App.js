import { useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "Clean Code", author: "Robert C. Martin" },
    { id: 2, title: "Atomic Habits", author: "James Clear" },
    { id: 3, title: "The Alchemist", author: "Paulo Coelho" },
  ]);

  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  function addBook() {
    if (title === "" || author === "") return;
    setBooks([...books, { id: Date.now(), title, author }]);
    setTitle("");
    setAuthor("");
  }

  function removeBook(id) {
    setBooks(books.filter((book) => book.id !== id));
  }

  return (
  <div className="app-container">
    <h1>Library Management System</h1>

    {/* Search Section */}
    <div className="search-section">
      <input
        type="text"
        placeholder="Search books"
        className="search-input"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>

    {/* Add Book Section */}
    <h3>Add New Book</h3>
    <div className="add-book">
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <button onClick={addBook}>Add Book</button>
    </div>

    {/* Book List */}
    <ul className="book-list">
      {books
        .filter((book) =>
          book.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((book) => (
          <li className="book-item" key={book.id}>
            <span>
              <strong>{book.title}</strong> — {book.author}
            </span>
            <button onClick={() => removeBook(book.id)}>Remove</button>
          </li>
        ))}
    </ul>
  </div>
);

}

export default App;
