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
    return ( <Button disabled variant="danger" className="delete" onClick={openModal}> Borrow</Button>)
    }
    else {
     return( <Button  className="delete" onClick={openModal}> Borrow </Button>)
    }
  }

  return (
    <div className="group">
      <Link to={`/borrow/`}>
        <div style={{ animationDelay: "0.1" }} className="chatlist__item">
          <div className="avatar">
            <div className="avatar-img">
              <img
                src="https://static.thenounproject.com/png/363639-200.png"
                alt="#"
              />
            </div>
          </div>
          <div className="userMeta">
            <p>
              {membership.firstName} - {membership.lastName}
            </p>
            <span className="activeTime" style={{ color: membership.membership }}>
              {membership.membership}
            </span>
            <Memberbooks membership={membership.currentlyBorrowedBooks} />
          </div>
         
        </div>
      </Link>
      { abc(membership.membership) }
      <UpdateRoomModal isOpen={isOpen} closeModal={closeModal} membership={membership} />
    </div>
  );
}
