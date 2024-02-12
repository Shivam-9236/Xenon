import axios from "axios";

const url = "https://xenon-express.onrender.com";

export const userRegister = async (user) => {
  const res = await axios.post(`${url}/register`, user);
  return res;
};

export const userLogin = async (user) => {
  const res = await axios.post(`${url}/login`, user);
  return res;
};

export const userContact = async (user) => {
  const res = axios.post(`${url}/contactus`, user);
  return res;
};
