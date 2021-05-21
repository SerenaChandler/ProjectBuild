import React, {useEffect} from "react";
// import Card from "../components/Card/";
import CardContainer from "../components/CardContainer/";
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Searchbar from "../components/Searchbar"
import Footer from "../components/Footer"



const Search = props => {


    useEffect(() => {
        // getBook();
    }, [])


    return(
        <div>
            <Nav/>
            <Hero/>
            <Searchbar/>
            <CardContainer>
                
            </CardContainer>
            <Footer/>




        </div>


    );


}

export default Search;