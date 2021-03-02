import {getToken,destroyToken} from '../services/jwt.service'
import {ApiService} from './api.service'

export default async function getUserData() {
  ApiService.auth();
  ApiService.get("user")
  .then(({ data }) => {
    console.log(data);
    return data.user
  })
  .catch(({ response }) => {
      destroyToken();
      window.location.reload();
  });
}