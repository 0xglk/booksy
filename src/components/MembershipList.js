import React, { useState } from "react";
import Membershipitem from './Membershipitem';
import membershipStore from '../stores/membershipStore';
import CreateRoomModal from "./CreateRoomModal";

import { observer } from "mobx-react";
import { Link } from "react-router-dom";
// import ChatRoom from "./ChatRoom";
// import BookList from "./BookList";
// import { Route, Switch } from "react-router";
function MembershipList() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const membershipList = membershipStore.membership.map((membership) => {
    return <Membershipitem membership= {membership} key={membership._id} />;
  });
  return (
    <div className="main__chatlist">
      <button className="btn">
        <i className="fa fa-plus"></i>
        <span onClick={openModal}>New Member</span>
        <CreateRoomModal isOpen={isOpen} closeModal={closeModal} />
      </button>
      <Link to={`/BookList/bookStuff`}>
      <button className="btn">
        <i className="fa fa-plus"></i>
        <span>Books List</span>
      </button>
      </Link>
      <div className="chatlist__items">{membershipList}</div>
    </div>
  );
}
export default observer(MembershipList);

