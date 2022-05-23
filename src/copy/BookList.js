import React, { useState } from "react";
import BooksListItem from "./BooksListItem";
import CreateBookModal from "./CreateBookModal";
import bookStore from "../../stores/booksStore";
import { observer } from "mobx-react";
function BookList() {

  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const  booksList =  bookStore.books.filter((book) => 
  (!type) ? (book.author.toLowerCase().includes(query.toLowerCase())) : (book.author.toLowerCase().includes(query.toLowerCase()) &&  book.genres.includes(type)) )
  .map((book) => <BooksListItem key={book._id} book={book}/>);

  const optionList = ['Action', 'Fantasy', 'Sci-Fi', 'Romance', 'Fiction', 'Self-Help', 'Thriller', 'Suspense', 'Biography', 'Business', 'Entrepreneurship', 'Crime', 'Mystery'];
  const SelectorOptions = optionList.map((option) => {
    return( <option key={option} value={option}>{option}</option> );
  });
  
  return (
    <div className="main__chatlist">
      <button className="btn">
        <i className="fa fa-plus"></i>
        <span onClick={openModal}>New Book</span>
        <CreateBookModal isOpen={isOpen} closeModal={closeModal} />
      </button>
      <br/>
      <input type="search" className="form-control rounded"placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={(e) => setQuery(e.target.value)} />
      <center>
        <br/>
        <select className="form-select" defaultValue={'default'} aria-label="Default select example" onChange={(e) => setType(e.target.value)}>
                <option value="" default > All</option>
                {SelectorOptions}
        </select>

        <div className="chatlist__heading">
          <h2>Books List</h2>
        </div>
      </center>

      <div className="chatlist__items">{booksList}</div>
    </div>
  );
}
export default observer(BookList);
