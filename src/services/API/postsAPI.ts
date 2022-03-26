import axios, { AxiosResponse } from "axios";

export const PostsAPI = {
  fetchPosts(): Promise<AxiosResponse> {
    return axios.get("https://trycode.pw/c/1XTWY.json").then(e => e.data);
  }
}