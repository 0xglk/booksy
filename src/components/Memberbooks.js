import React from "react";
import bookStore from "./../stores/booksStore";
import { observer } from "mobx-react";
const Memberbooks = ({ membership }) => {
   const membershipBook = membership;
  const membershipList = membershipBook.map((membershipBook) => {
    return(bookStore.books.filter((book) => (book._id.includes(membershipBook))).map((book) => ( <li key={book._id} >{book.title}</li>) ))
  });
  return (
    <div>
      <span className="activeTime" style={{ color: "red" }}>
        Borrowed Books
      </span>
      <ol>
      <span className="activeTime">
      {membershipList}
        </span>
      </ol>
    </div>
  );
};
export default  observer(Memberbooks);
