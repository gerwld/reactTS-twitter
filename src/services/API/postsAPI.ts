import axios, { AxiosResponse } from "axios";

export const PostsAPI = {
  fetchPosts(): Promise<AxiosResponse> {
    return axios.get("/tweets").then(e => e.data);
  }
}