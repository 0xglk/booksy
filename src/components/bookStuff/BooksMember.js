import React from "react";
import membershipStore from "./../../stores/membershipStore"
import { observer } from "mobx-react";
const BooksMember = ({ bookedby }) => {
    const listUsers = bookedby.map((bookedby) => {
     return( membershipStore.membership.filter(
        (membership) =>
        membership._id.includes(bookedby)).map((usersname) => (
          <div>
        <li key={usersname._id}>{`${usersname.firstName}, ${usersname.lastName}`}</li>
        </div>
        )));
  });
  return (
    <div>

      <div className="Listing_users">
      <span className="profile_items_Borrowed">
        Borrowd by:
      </span>
        <ol className="olListing_borrowed">
          <span>
          {listUsers}
          </span>
        </ol>
        </div>
    </div>
  );
};
export default  observer(BooksMember);
