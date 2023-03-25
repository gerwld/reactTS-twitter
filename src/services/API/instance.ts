import axios from "axios";

export const instance = axios.create({
 baseURL: "http://localhost:3001/",
 headers: {
  "Set-Cookie": "cross-site-cookie=whatever",
  SameSite: "None",
  Secure: "true",
 },
});
