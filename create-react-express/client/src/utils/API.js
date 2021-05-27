import axios from "axios";

export default {

  getBook: function (search) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
  },
 
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id)
  },

  saveBook: function (bookData) {
    return axios.post("/api/books", bookData)
  },
 
  savedBooks: function () {
    return axios.get("/api/books")
  },



}