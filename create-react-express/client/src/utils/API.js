import axios from "axios";

export default {

  getBooks: function() {
    return axios.get("/api/books");
  },

  deleteBook: function(id) {
    return axios.delete("/api/book/" + id);
  },


  saveBook: function() {
    return axios.post("/api/books",);
  }




}