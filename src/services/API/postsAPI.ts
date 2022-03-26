import axios, { AxiosResponse } from "axios";

export const PostsAPI = {
  fetchPosts(): Promise<AxiosResponse> {
    return axios.get("https://trycode.pw/c/EWISJ.json").then(e => e.data);
  }
}