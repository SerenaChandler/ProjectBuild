import React, {useEffect, useState} from "react";
import Card from "../components/Card";
import CardContainer from "../components/CardContainer";
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import API from "../utils/API";




const Saved = props => {


    const [savedBooks, setSavedBooks] = useState([]);
    useEffect(() => {
        API.getSavedBooks()
        .then((results) => {
            setSavedBooks(results.data);
            console.log(results);
          }).catch((err) => console.log(err))
    }, [])
    

    return(
        <div>
            <Nav/>
            <Hero/>
            <CardContainer>
            {savedBooks.map((book) => (
          <Card
            id={book.id}
            key={book.id}
            link={book.volumeInfo.infoLink}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors[0]}
            image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/350x150" }
            description={book.volumeInfo.description}
            // handleSaveBook={() => handleSaveBook(book)}
          />
        ))}
            </CardContainer>
            <Footer/>

        </div>


    );
    

}

export default Saved;
