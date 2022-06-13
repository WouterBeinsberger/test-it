import axios from "axios";

const url = "http://127.0.0.1:5000";
const header = {
  'Content-Type': 'application/json'
};

const api = axios.create({
  baseURL: url,
  headers: header
});

export default api
