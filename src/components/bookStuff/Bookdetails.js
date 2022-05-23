import React from "react";
import { observer } from "mobx-react";
import bookStore from "../../stores/booksStore";
import { Link, Navigate, useParams } from "react-router-dom";
import BooksMember from "./BooksMember";
import GenresList from "./GenresList";

const Bookdetails = ( ) => {
  let {slugid}  = useParams();
    const book = bookStore.books.find((book) => book.slug === slugid);
    const onError = (e) => {
        e.target.src="https://kwx2f3rgme1bvul52zzobow3-wpengine.netdna-ssl.com/wp-content/themes/realestate-7/images/no-image.png"
      };
  return (
    <>
        <div className="book_card_details">
            <img alt="bookimage" onError={onError} src={book.image}/>
          <div className="book_card_detalis_information">
            <h6>{book.title}</h6>
            <span>By {book.author}</span>
            <div className="genres_info_details">
            <GenresList genres={book.genres} />
            </div>
          </div>
          <BooksMember bookedby={book.borrowedBy} />
        </div>
    </>
  );
};
export default  observer(Bookdetails);
