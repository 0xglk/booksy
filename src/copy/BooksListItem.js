import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
// import bookStore from "../../stores/booksStore";
import UpdateBookModal from "./UpdateBookModal";
import BooksMember from "./BooksMember";

export default function BookListItem(props) {
  const book = props.book;
  return (
    <div className="group">
      <Link to={`/borrow/`}>
        <div style={{ animationDelay: "0.1" }} className="chatlist__item">
          <div className="avatar">
            <div className="avatar-img">
              <img src={book.image} alt="#" />
            </div>
          </div>
          <div className="userMeta">
            <p>{book.author}</p>
            <span className="activeTime">{book.title}</span>
            <span className="activeTime">{book.genres}</span>
            <span className="activeTime"><BooksMember bookedby={book.borrowedBy} /></span>
          </div>
        </div>
      </Link>
      <Button disabled={book.available === true ? false : true } className="delete">
      Available
      </Button>
      
      <UpdateBookModal  book={book} />

    </div>
  );
}
