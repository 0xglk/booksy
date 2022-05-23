import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import React, { useState } from "react";
import membershipStore from "../stores/membershipStore";

export default function CreateRoomModal(props) {
  const [user, setRoom] = useState({
    firstName: "",
    lastName: "",
    membership: "silver",
    currentlyBorrowedBooks: [],
    slug: "",
  });
  const handleChange = (event) => {
    setRoom({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    membershipStore.createMembership(user);
    props.closeModal();
  };
  return (
    <Modal centered show={props.isOpen} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Create a user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputGroup.Text>First name</InputGroup.Text>
            <Form.Control
              type="text"
              name="firstName"
              onChange={handleChange}
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text>Last name</InputGroup.Text>
            <Form.Control type="text" name="lastName" onChange={handleChange} />
          </InputGroup>
          <br />
          <Form.Group className="mb-3">
            <Form.Label>membership</Form.Label>
            <Form.Select name="membership" onChange={handleChange}>
              <option selected value="silver" >Select</option>
              <option value="platinum"> platinum</option>
              <option value="gold">gold</option>
              <option value="silver">silver</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Create user
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
