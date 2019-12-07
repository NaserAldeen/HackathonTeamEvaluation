import axios from "axios";
const instance = axios.create({
  baseURL: "https://3a336b45.ngrok.io"
});
export default instance;
