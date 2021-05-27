import React, { useEffect, useState, useRef } from "react";
import Card from "../components/Card";
import CardContainer from "../components/CardContainer";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";
import API from "../utils/API";

const Search = (props) => {
  const [search, setSearch] = useState("");
  const [returnedBooks, setReturnedBooks] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    getBooks(search);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setSearch(value);
  };

  const getBooks = (search) => {
    API.getBook(search)
      .then((results) => {
        setReturnedBooks(results.data.items);
        console.log(results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Nav />
      <Hero />
      <Searchbar
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        search={search}
      />
      <CardContainer>
        {returnedBooks.map((book) => (
          <Card
            id={book.id}
            key={book.id}
            link={book.volumeInfo.infoLink}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors[0]}
            image={book.volumeInfo.imageLinks.thumbnail}
            description={book.volumeInfo.description}
          />
        ))}
      </CardContainer>
      <Footer />
    </div>
  );
};

export default Search;
