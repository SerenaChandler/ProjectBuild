import React, {useEffect} from "react";
import Card from "../components/Card/";
import CardContainer from "../components/CardContainer/";
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Searchbar from "../components/Searchbar"
import Footer from "../components/Footer"


const Search = props => {


    useEffect(() => {
        getBook();
    }, [])


    return(
        <div>
            <Nav/>
            <Hero/>
            <Searchbar/>
            <CardContainer>
                {state.books.map(book => (
                    <Card 
                    key={book.title}
                    title={book.title}
                    author={book.author}
                    image={book.image}
                    description={book.description}
                    link={book.link}
                    
                    />
                ))}
            </CardContainer>
            <Footer/>




        </div>


    );


}

export default Search;