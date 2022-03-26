import axios, { AxiosResponse } from "axios";

export const sidebarApi = {
  fetchTopics():Promise<AxiosResponse> {
    return axios.get("/topics").then(e => e.data);
  },
};
