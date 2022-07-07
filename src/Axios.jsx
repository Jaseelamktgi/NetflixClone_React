import axios from 'axios';
import { baseUrl } from "./Component/Constants/Constant";

//Creating an instance
const instance = axios.create({
    baseURL: baseUrl,
  });
  export default  instance;

