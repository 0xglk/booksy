import React from "react";
import { observer } from "mobx-react";
import membershipStore from '../stores/membershipStore';
import { Link, Navigate, useParams } from "react-router-dom";
import Memberbooks from "./Memberbooks";

const Bookdetails = ( ) => {
  let {membershipid}  = useParams();
    const membership = membershipStore.membership.find((membership) => membership._id === membershipid);
  return (
    <>
        <div className="book_card_details">
            <img alt="bookimage" src="https://static.thenounproject.com/png/363639-200.png"/>
          <div className="book_card_detalis_information">
            <h6>{membership.firstName}{membership.lastName}</h6>
            <span>By {membership.membership}</span>
            <div className="book_card_information_sty">
            <div className="booklist_itmes">
            <Memberbooks membership={membership.currentlyBorrowedBooks} />
            </div>
            <p className="genres_info">Fantasy</p>
            <p className="genres_info">Biography</p>
            </div>
          </div>
        </div>
    </>
  );
};
export default  observer(Bookdetails);
