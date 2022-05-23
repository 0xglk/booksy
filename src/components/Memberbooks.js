import React from "react";
import bookStore from "./../stores/booksStore";
import { observer } from "mobx-react";
const Memberbooks = ({ membership }) => {
   const membershipBook = membership;
  const membershipList = membershipBook.map((membershipBook) => {
    return(bookStore.books.filter((book) => (book._id.includes(membershipBook))).map((book) => ( <li className="book_item" key={book._id} >{ book.title}</li>) ))
  });
  return (
    <>
      <span className="book_item_Borrowed">
        Borrowed Books
      </span>
      <ol className="olListing">
      {membershipList}
      </ol>
    </>
  );
};
export default  observer(Memberbooks);
