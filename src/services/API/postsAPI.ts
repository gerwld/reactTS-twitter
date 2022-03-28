import axios, { AxiosResponse } from "axios";

export const PostsAPI = {
  async fetchPosts() {
    const e = await axios.get("/tweets");
    return e.data;
  },
  async fetchPost(id) {
    const e = await axios.get("tweets?_id=" + id);
    return e.data;
  },
  async addPost(postObj: object) {
    const e = await axios.post("/tweets", postObj);
    return e.data;
  },
}