import { Button } from "react-bootstrap";
import React, { useState } from "react";
import bookStore from "../../stores/booksStore";

export default function UpdateBookModal(props) {

  const [book, setRoom] = useState({
    _id: props.book._id,
    author: props.book.author,
    available:  props.book.available,
    image: props.book.image,
    title: props.book.title,
    borrowedBy: props.book.borrowedBy[props.book.borrowedBy.length - 1],
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    bookStore.updateRoom(book);
  };
  return (
    <button className="button_card" onClick={handleSubmit}>
          Return book
        </button>
  );
}
