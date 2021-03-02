import axios from "axios";
// import store from "@/store";
import API_URL from "../common/config";
import JwtService from "./jwt.service";



//esta funcion crea el baseURL y si le indicamos que es seguro añade el token de local storage
export default function createHttp(secured = true) {
  // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  if (secured) {
    return axios.create({
      headers: { "Authorization": `Token ${JwtService.getToken()}` },
      baseURL: API_URL
    });
  } else {
    return axios.create({
      baseURL: API_URL
    });
  }
}