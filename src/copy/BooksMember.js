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
      <span className="activeTime" style={{ color: "red" }}>
      Before Borrowed by : 
      </span>
      <ol>
      <span className="activeTime">
      {listUsers}
        </span>
      </ol>
    </div>
  );
};
export default  observer(BooksMember);
