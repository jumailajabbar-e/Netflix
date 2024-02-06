import axios from "axios";
import { baseUrl } from "./Components/NavBar/Ult/constants";
const instance = axios.create({
    
  baseURL: baseUrl,
    
  }); 
  export default instance