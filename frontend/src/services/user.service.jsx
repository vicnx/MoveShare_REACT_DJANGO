import {getToken,destroyToken} from 'services/jwt.service'
import {ApiService} from 'services/api.service'

export const UserService = {
  getListUsers() {
    return ApiService.get("users/list");
  },
  getUserData() {
    ApiService.auth();
    ApiService.get("user")
    .then(({ data }) => {
      return data.user
    })
    .catch(({ response }) => {
        destroyToken();
        window.location.reload();
    });
  },

  updateUserData(user) {
    ApiService.auth();
    ApiService.put("user",{user})
    .then(({ data }) => {
      return data.user
    })
    .catch(({ response }) => {
        destroyToken();
        window.location.reload();
    });
  },


}