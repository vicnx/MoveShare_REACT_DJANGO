import API_URL from "../common/config";
import createHttp from "./http";

export default async function register(user) {
  //creamos una conexion sin necesidad de token
  let http = createHttp(false);

  //realizamos la peticion de register
  return http
    .post(`${API_URL}users`, user)
    .then((res) => {
      return res.data.user;
    })
    .catch(({ response }) => {
      console.log(response.data);
      return response.data
    });
}
