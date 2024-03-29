import axios from "axios";

export default {

  // GETS ALL POSTS
  getPosts: function() {

    return axios.get("/api/posts");

  },

  // Gets the post with the given id
  // GETS POST WITH A GIVEN ID
  getPost: function(id) {
    return axios.get("/api/posts/" + id);
  },
  // Deletes the post with the given id
  deletePost: function(id) {
    return axios.delete("/api/posts/" + id);
  },
  // Saves a post to the database
  savePost: function(postData) {
    return axios.post("/api/posts", postData);
  }
};
