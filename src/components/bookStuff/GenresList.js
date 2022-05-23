import bookStore from "../../stores/booksStore";
import React from "react";
const GenresList = ({genres}) =>{
    const Catagory = genres.map((genres) => {
        return(<p className="genres_info"> {genres} </p> )
      });
      return(
        <>
        {Catagory}
        </>
      )
}

export default GenresList;