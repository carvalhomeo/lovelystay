import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: process.env.NEXT_PUBLIC_API_TOKEN
    ? {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      }
    : { "Content-Type": "application/json" },
});

export default api;
