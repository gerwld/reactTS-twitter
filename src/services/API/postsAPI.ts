import axios, { AxiosResponse } from "axios";

export const PostsAPI = {
  fetchPosts() {
    return axios.get("/tweets").then(e => e.data);
  }
}