import { instance } from "./instance";


export const PostsAPI = {
  async fetchPosts() {
    const e = await instance.get("/tweets");
    return e.data;
  },
  async fetchPost(id) {
    const e = await instance.get("tweets?_id=" + id);
    return e.data;
  },
  async addPost(postObj: object) {
    const e = await instance.post("/tweets", postObj);
    return e.data;
  },
}