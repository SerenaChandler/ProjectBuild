import axios from "axios"; 

export default {
    getBooks : function() {
        return axios.get("/api/books");
    },


    search : function (query) {
      const searchTerm = encodeURI( query );
      const API_KEY = "AIzaSyAMqK-okzb8cr1m8PgjK-7OZGVcsPMzDuw";
      console.log ("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm + "&key=" + API_KEY);
      return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm + "&key=" + API_KEY);
    },


    saveBook : function(book) { 
      return axios.post("/api/books", book ); 
    },


    deleteBook : function(bookId) { 
      return axios.delete("/api/books/" + bookId ); 
    }

    
};
