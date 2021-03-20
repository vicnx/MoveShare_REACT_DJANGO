import {getToken,destroyToken} from '../services/jwt.service'
import {ApiService} from './api.service'

export const UserService = {
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


// export default function getUserData() {
//   ApiService.auth();
//   ApiService.get("user")
//   .then(({ data }) => {
//     console.log(data);
//     return data.user
//   })
//   .catch(({ response }) => {
//       destroyToken();
//       window.location.reload();
//   });
// }

// export function updateUserData(user){
//   console.log("UPDATE USER");
//   console.log(user);
//   ApiService.auth();
//   ApiService.put("user",{user})
//   .then(({ data }) => {
//     console.log(data);
//     return data.user
//   })
//   .catch(({ response }) => {
//       destroyToken();
//       window.location.reload();
//   });
// }