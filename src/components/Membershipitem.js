import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import UpdateRoomModal from "./UpdateRoomModal";
import Memberbooks from "./Memberbooks";

export default function ChatRoomitem(props) {
  const membership = props.membership;

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const abc = () =>{
    if ((membership.membership === "platinum" && membership.currentlyBorrowedBooks.length === 5 ) || 
        (membership.membership === "gold"     && membership.currentlyBorrowedBooks.length === 3 ) || 
        (membership.membership === "silver"   && membership.currentlyBorrowedBooks.length === 2 )) 
    {
    return (<button className="book_item_Borrowed_button_full">Full</button>)
    }
    else {
     return( <button onClick={openModal} className="book_item_Borrowed_button_card">Borrow</button>)
    }
  }

  return (
    <>

    <div className="user_Card">
      <div className="user_Information">
        <img alt="userimage" src="https://static.thenounproject.com/png/363639-200.png" />
        <h5 className="user_name_card">{membership.firstName} {membership.lastName}</h5>
        <h5 style={{ color: membership.membership }} className="Membership_card">Membership: {membership.membership}</h5>
      </div>
    <div className="booklist_itmes">
      <Memberbooks membership={membership.currentlyBorrowedBooks} />
    </div>
    
      { abc(membership.membership) }
      <Link to={`/UserDetails/${membership._id}`}>
      <button onClick={openModal} className="book_item_information_button_card">Profile Information</button>
      </Link>
      <UpdateRoomModal isOpen={isOpen} closeModal={closeModal} membership={membership} />
    </div>

    </>
  );
}
