import { Modal, Button , Form } from "react-bootstrap";
import React, { useState } from "react";
import membershipStore from '../stores/membershipStore';
import bookStore from "./../stores/booksStore";

function UpdateRoomModal(props) {
  const available_books = bookStore.books.filter(
      (book) =>
      book.available === true )
    .map((book) => <option key={book._id} value={book._id}>{book.title}</option>);

  const [membership, setMembership] = useState({
    _id: props.membership._id,
    currentlyBorrowedBooks: props.membership.currentlyBorrowedBooks
  });

  const handleChange = (event) => {
    setMembership({ ...membership, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    membershipStore.updateMembership(membership);
    props.closeModal();
  };
  return (
    <Modal centered show={props.isOpen} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Borrow a Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Available Books</Form.Label>
            <Form.Select name="currentlyBorrowedBooks" onChange={handleChange}>
            <option  value="" disabled selected>Select Book</option>
              {available_books}
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Borrow
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UpdateRoomModal;