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
      {membershipList}
    </>
  );
};
export default  observer(Memberbooks);
