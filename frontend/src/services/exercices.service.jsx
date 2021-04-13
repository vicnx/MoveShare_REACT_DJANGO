import {getToken,destroyToken} from '../services/jwt.service'
import {ApiService} from './api.service'

const ExercicesService = {
  query(params){
    if(params){
      return ApiService.query(
        "fitness/exercice" + (params.type === "feed" ? "/feed" : ""),
        {
          params: params.filters,
        }
      );
    }
    return ApiService.query(
      "fitness/exercice",
    );

  },
  getCategories(){
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

export default ExercicesService;