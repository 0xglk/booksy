import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
// import bookStore from "../../stores/booksStore";
import UpdateBookModal from "./UpdateBookModal";
import BooksMember from "./BooksMember";
import noimage from "./../../no-image.png"
export default function BookListItem(props) {
  const book = props.book;
  const onError = (e) => {
    e.target.src=`${noimage}`
  };
  const Catagory = book.genres.map((book) => {
    return(<p className="genres_info"> {book} </p> )
  });
  
  return (
    <>
      <Link to={`/Bookdetails/${book.slug}`}>
      <div className="book_card">
          {book.available === true ? "" : <h6 className="false">Borrowed</h6> }
          <img alt="bookimage" onError={onError}  src={book.image}/>
          <div className="book_card_information">
            <h6>{book.title}</h6>
            <span>By {book.author}</span>
            <div className="book_card_information_sty">
              {Catagory}
            </div>
            <div className="buttons_card">
            {book.available === true ? "" : <UpdateBookModal  book={book} /> }
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
