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
    <>
      <button className="button_add_user">
        <i className="fa fa-plus"></i>
        <span onClick={openModal}>New Member</span>
        <CreateRoomModal isOpen={isOpen} closeModal={closeModal} />
      </button>
      <div className="w3-container">
      <h2>Book List </h2>
      {membershipList}
    </div>
    </>
  );
}
export default observer(MembershipList);

