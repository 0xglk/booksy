import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
// import bookStore from "../../stores/booksStore";
import UpdateBookModal from "./UpdateBookModal";
import BooksMember from "./BooksMember";

export default function BookListItem(props) {
  const book = props.book;
  const onError = (e) => {
    e.target.src="https://kwx2f3rgme1bvul52zzobow3-wpengine.netdna-ssl.com/wp-content/themes/realestate-7/images/no-image.png"
  };
  return (
    <>
      <Link to={`/Bookdetails/${book._id}`}>
      <div className="book_card">
          {book.available === true ? "" : <h6 className="false">Borrowed</h6> }
          <img alt="bookimage" onError={onError} src={book.image}/>
          <div className="book_card_information">
            <h6>{book.title}</h6>
            <span>By {book.author}</span>
            <div className="book_card_information_sty">
            <p className="genres_info">Biography</p>
            <p className="genres_info">Biography</p>
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
