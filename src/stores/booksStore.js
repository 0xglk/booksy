import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";
import axios from "axios";
import membershipStore from '../stores/membershipStore';

class BookStore {
  books = [
    {
      _id: "62853a01d8ec5d3d4a29fa5b",
      author: "Leigh Bardugo",
      title: "The Language of Thorns: Midnight Tales and Dangerous Magic",
      genres: ["Fantasy"],
      available: true,
      borrowedBy: ["6285150fb8273a86534c95bb"],
      slug: "the-language-of-thorns-midnight-tales-and-dangerous-magic-1",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1491842507l/34076952.jpg",
    },
  ];

  constructor() {
    makeObservable(this, {
      books: observable,
      createRoom: action,
      updateRoom: action,
      deleteRoom: action,
      createMsg: action,
    });
  }

  fetchRooms = async () => {
    try {
      const books = await axios.get(
        "https://library-borrow-system.herokuapp.com/api/books"
      );
      this.books = books.data;
    } catch (error) {
      console.error(error);
    }
  };

  createRoom = async (book) => {
    try { 
      const response =  await axios.post("https://library-borrow-system.herokuapp.com/api/books",book );
      this.books.push(response.data); 
    } catch (e) {
      console.log(e);
    }
  };

  deleteRoom = async (roomId) => {
    this.books = this.books.filter((book) => book._id !== roomId);
    try {
      await axios.delete(
        `https://coded-task-axios-be.herokuapp.com/books/${roomId}`
      );
    } catch (e) {
      console.error(e);
    }
  };
  createMsg = (roomId, msg) => {
    const book = this.books.find((_room) => _room._id === +roomId);
    book.messages.push(msg);
  };

  updateRoom = async (updatedRoom) => {
    const book = this.books.find((book) => book._id === updatedRoom._id);
    book.available = true;
    try {
      await axios.put(
        `https://library-borrow-system.herokuapp.com/api/books/${book._id}/return/${[updatedRoom.borrowedBy]}`
      );
      bookStore.fetchRooms();
      membershipStore.fetchMemberships();
    } catch (e) {
      console.error(e);
    }
  };
}

const bookStore = new BookStore();
bookStore.fetchRooms();
export default bookStore;
