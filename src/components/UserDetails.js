import React from "react";
import { observer } from "mobx-react";
import membershipStore from '../stores/membershipStore';
import { Link, Navigate, useParams } from "react-router-dom";
import Memberbooks from "./Memberbooks";

const Bookdetails = ( ) => {
  let {slugid}  = useParams();
    const membership = membershipStore.membership.find((membership) => membership.slug === slugid);
    console.log(membership.firstName,membership.lastName);
  return (
    <>
        <div className="image_profile">
            <img alt="imageprofile" src="https://static.thenounproject.com/png/363639-200.png"/>
          <div className="profile_detalis_information">
            <h6>{membership.firstName} {membership.lastName}</h6>
            <span>Membership: {membership.membership}</span>
            <div className="book_card_information_sty">
            <div className="book_profile_list_itmes">
            <span className="profile_item_Borrowed">
              Borrowed Books:
            </span>
            <ol className="olListing_profile">
            <Memberbooks membership={membership.currentlyBorrowedBooks} />
            </ol>
            </div>
            </div>
          </div>
        </div>
    </>
  );
};
export default  observer(Bookdetails);
