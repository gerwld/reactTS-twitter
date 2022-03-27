import axios, { AxiosResponse } from "axios";

export const PostsAPI = {
  fetchPosts() {
    return axios.get("/tweets").then(e => e.data);
  },
  fetchPost(id) {
    return axios.get("tweets?_id=" + id).then(e => e.data);
  }
}