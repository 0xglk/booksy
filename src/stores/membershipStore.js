import axios from 'axios';
import { makeObservable, observable, action } from 'mobx';
import slugify from 'react-slugify';
import bookStore from "./booksStore";
class MembershipStore {
  membership = [
    {
        _id: "628514d5b8273a86534c95b8",
        firstName: "Aziz",
        lastName: "AlSaffar",
        membership: "gold",
        currentlyBorrowedBooks: [],
        slug: "aziz-alsaffar",
    },
  ];

  constructor() {
    makeObservable(this, {
      membership: observable,
      createMembership: action,
      updateMembership: action,
      deleteMembership: action,
    });
  }
fetchMemberships = async () =>{
  try {
    const membership = await axios.get(`https://library-borrow-system.herokuapp.com/api/members`);
    this.membership = membership.data; 
  } catch (error) {
    console.log(error);
  }
}
  createMembership = async (membership) => {
    try {
     const response = await axios.post("https://library-borrow-system.herokuapp.com/api/members",membership);
      this.membership.push(response.data); 
    } 
    catch (error) {
      console.log(error);
    }
  };

  deleteMembership = async (membershipId) => {
    // this.rooms = this.rooms.filter((membership) => membership.id !== roomId);
    try {
      this.membership = this.membership = this.membership.filter((membership) => membership.id !== membershipId);
      await axios.delete(`https://coded-task-axios-be.herokuapp.com/rooms/${membershipId}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  updateMembership = async (updatedMembership) => {
//https://library-borrow-system.herokuapp.com/api/books/628685bb308ef6b485b9fc08/borrow/6287c44ce2f657d502cc7023
    const membership = this.membership.find((membership) => membership._id === updatedMembership._id);
    membership.currentlyBorrowedBooks.push(updatedMembership.currentlyBorrowedBooks);

    try {
      await axios.put(`https://library-borrow-system.herokuapp.com/api/books/${updatedMembership.currentlyBorrowedBooks}/borrow/${updatedMembership._id}`);
      bookStore.fetchRooms();
    } catch (error) {
      console.log(error);
    }
  };
}

const membershipStore = new MembershipStore();
membershipStore.fetchMemberships();
export default membershipStore;
