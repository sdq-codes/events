import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  // timeout: 60000,
  timeoutErrorMessage: "Request time out",
  headers: {
    "Content-Type": "application/json",
  }
});

export default httpClient;
