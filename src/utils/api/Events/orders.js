import httpClient from "../httpClient";

const createOrder = data => {
  return httpClient.post("orders", data);
};

export { createOrder };
