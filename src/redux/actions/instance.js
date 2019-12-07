import axios from "axios";
const instance = axios.create({
  baseURL: "https://eda2b584.ngrok.io"
});
export default instance;
