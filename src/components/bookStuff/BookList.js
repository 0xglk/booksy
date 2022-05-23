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
  (!type) ? (book.title.toLowerCase().includes(query.toLowerCase())) : (book.title.toLowerCase().includes(query.toLowerCase()) &&  book.genres.includes(type)) )
  .map((book) => <BooksListItem key={book._id} book={book}/>);

  const optionList = ['Action', 'Fantasy', 'Sci-Fi', 'Romance', 'Fiction', 'Self-Help', 'Thriller', 'Suspense', 'Biography', 'Business', 'Entrepreneurship', 'Crime', 'Mystery'];
  const SelectorOptions = optionList.map((option) => {
    return( <option key={option} value={option}>{option}</option> );
  });
  
  return (
    <div>
    <div className="filter_container filter_bar">
      <h5>Filter Bar: </h5>
      <input type="search" placeholder="Search" className="SearchBar_book"  onChange={(e) => setQuery(e.target.value)}/>
      <select defaultValue={'default'} aria-label="Default select example"  className="select_option_book"  onChange={(e) => setType(e.target.value)}>
            <option value="" default > All</option>
                {SelectorOptions}
        </select>
    </div>
    <button className="button_add_book">
        <i className="fa fa-plus"></i>
        <span onClick={openModal}>New Book</span>
        <CreateBookModal isOpen={isOpen} closeModal={closeModal} />
      </button>
    <div className="w3-container">
    <h2>Book List </h2>
      {booksList}
    </div>

    </div>
  );
}
export default observer(BookList);
