import API_URL from "../common/config";
import createHttp from "./http";

export default async function login(user) {
  //creamos una conexion sin necesidad de token
  let http = createHttp(false);

  //realizamos la peticion de login
  return http
    .post(`${API_URL}users/login`, user)
    .then((res) => {
      return res.data.user;
    })
    .catch(({ response }) => {
      return response.data.errors
    });
}
