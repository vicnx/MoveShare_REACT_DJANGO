import {getToken,destroyToken} from '../services/jwt.service'
import {ApiService} from './api.service'

const ProfileService = {
  get(params){
    console.log(params);
      return ApiService.get(
        "profiles",params
      );
  },
  follow(username) {
    return ApiService.post(`profiles/${username}/follow`);
  },
  unfollow(username) {
    return ApiService.delete(`profiles/${username}/follow`);
  },
}

export default ProfileService;