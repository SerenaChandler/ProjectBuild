import axios from "axios"; 

export default {


  getBook: function (search) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
  },
 
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id)
  },


  saveBook : function(book) { 
    return axios.post("/api/books", book ); 
    },


   deleteBook : function(bookId) { 
     return axios.delete("/api/books/" + bookId ); 
    },

    getSavedBooks : function() {
      return axios.get("/api/books/");
      
    }
    
};
