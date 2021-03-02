import API_URL from "../common/config";
import createHttp from "./http";

export default async function login(user) {
  console.log(user);
  let http = createHttp(false);
  return http
    .post(`${API_URL}users/login`, user)
    .then((res) => {
      return res.data.user;
    })
    .catch(({ response }) => {
      console.log(response)
      return response.data.errors
    });
}
