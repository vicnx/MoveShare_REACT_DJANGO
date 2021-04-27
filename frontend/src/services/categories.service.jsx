import {getToken,destroyToken} from '../services/jwt.service'
import {ApiService} from './api.service'

const CategoriesService = {
  query(){
    return ApiService.query("fitness/category", {});
  },

  create(exercice){
    ApiService.auth();
    return ApiService.post("fitness/exercice", { exercice })
  },
  destroy(slug) {
    return ApiService.delete(`fitness/exercice/${slug}`);
  },
}

export default CategoriesService;