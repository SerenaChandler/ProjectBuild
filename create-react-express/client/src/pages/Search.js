import React, { Component } from "react";
// import Card from "../components/Card/";
import BookList from '../components/BookList'; 
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Searchbar from "../components/Searchbar"
import Footer from "../components/Footer"
import API from '../utils/API.js';


class Search extends Component { 
    state = {
      searchResults : [],
      message       : ""
    }
  
    // When the form is submitted, prevent its default behavior, and search the books API
    searchBooks = query => {
    
      if ( query ) { 
        API.search(query)
        .then(res => {
          res.data.items.map( (book, index) => { book.saved = false; });
        console.log(res.data);
        this.setState({ searchResults: res.data.items });
        })
        .catch(err => {
          console.log(err);
          this.setState( {message : err} );
        });
      }
    };
  
    saveBook = (savedBook, bookIndex) => { 
      console.log('Save Button clicked. Book is :' + JSON.stringify(savedBook, '', 2));
      if ( savedBook ) { 
        const newBook = {
          volumeInfo : { 
            title       : savedBook.volumeInfo.title,
            authors     : savedBook.volumeInfo.authors,
            description : savedBook.volumeInfo.description,
            imageLinks  : {
                            thumbnail: savedBook.volumeInfo.imageLinks.thumbnail
                          },
            infoLink    : savedBook.volumeInfo.infoLink
          }
        }
        console.log ("Book to save: " + JSON.stringify(newBook, '', 2)); 
        API.saveBook(newBook)
        .then(res => {
          savedBook.saved = true;
          let newSearchResults = this.state.searchResults.map((book,index) => 
            index === bookIndex ? savedBook :  book );
          this.setState( { searchResults : newSearchResults });
          console.log("Book saved: " + res.data);
        })
        .catch(err => {
          console.log(err);
        });
      }
    }
  
      render() { 
          return (
              <div>
              <Nav/>
              <Hero/>
              <Searchbar onSubmit={this.searchBooks} value={this.state.query}/>
              <BookList  books={this.state.searchResults} 
                               onBookSave={this.saveBook}
                               caller="search"/>
  
              <Footer/>
  
  
  
  
          </div>
  
          );
      }
  }
  
  export default Search;