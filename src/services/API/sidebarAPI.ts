import { AxiosResponse } from "axios";
import { instance } from "./instance";

export const sidebarApi = {
 fetchTopics(): Promise<AxiosResponse> {
  return instance.get("/topics").then((e) => e.data);
 },
};
