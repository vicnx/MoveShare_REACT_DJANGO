import {getToken,destroyToken} from '../services/jwt.service'
import {ApiService} from './api.service'

const ProfileService = {
  get(params){
    console.log(params);
      return ApiService.get(
        "profiles",params
      );
  }
}

export default ProfileService;