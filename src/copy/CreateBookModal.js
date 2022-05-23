import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import React, { useState } from "react";
import bookStore from "../../stores/booksStore";

const genresArray =[];

export default function CreateBookModal(props) {
  const [book, setRoom] = useState({
    author: "",
    title: "",
    genres: [],
    available: true,
    borrowedBy: [],
    image: "",
  });

  const handleChange1 = (event) => {
    if (event.target.checked === true) {
      genresArray.push(event.target.value);
      console.log(genresArray);

    } else {
      const index = genresArray.indexOf(event.target.value);
      if (index > -1) {
        genresArray.splice(index, 1);
        console.log(genresArray);
      }
    }

  };
  const handleChange = (event) => {
    setRoom({ ...book, [event.target.name]: event.target.value, "genres": genresArray});
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    bookStore.createRoom(book);
    props.closeModal();
  };
  const optionList = ['Action', 'Fantasy', 'Sci-Fi', 'Romance', 'Fiction', 'Self-Help', 'Thriller', 'Suspense', 'Biography', 'Business', 'Entrepreneurship', 'Crime', 'Mystery'];
  const SelectorOptions = optionList.map((option) => {
    
    return( <Form.Check  onChange={handleChange1} type="checkbox" key={option} value={option} label={option} /> );
  });
  return (
    <Modal centered show={props.isOpen} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputGroup.Text>author</InputGroup.Text>
            <Form.Control type="text" name="author" onChange={handleChange} />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text>title</InputGroup.Text>
            <Form.Control type="text" name="title" onChange={handleChange} />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text>Image</InputGroup.Text>
            <Form.Control type="text" name="image" onChange={handleChange} />
          </InputGroup>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            {SelectorOptions}
           </Form.Group>
          <br />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Create book
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
