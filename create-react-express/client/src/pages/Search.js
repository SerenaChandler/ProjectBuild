import React, {useEffect, useState, useRef} from "react";
// import Card from "../components/Card/";
import CardContainer from "../components/CardContainer/";
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Searchbar from "../components/Searchbar"
import Footer from "../components/Footer"
import API from "../utils/API";



const Search = props => {
    const [state, setState] = useState({


    })

    const titleRef = useRef();

    useEffect(() => {
        // getBook();
    }, [])

    const handleFormSubmit = (event) => {
        event.preventDefault();
        API.getBook({
            title: titleRef.current.value

        })
        .then((result) => {
        
        setState(result);
    }).catch((err) => console.log(err));
    


    }
    

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setState(
            {[name]: value})
        

    }

    return(
        <div>
            <Nav/>
            <Hero/>
            <Searchbar handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange} />
            <CardContainer>
                
            </CardContainer>
            <Footer/>




        </div>


    );


}

export default Search;