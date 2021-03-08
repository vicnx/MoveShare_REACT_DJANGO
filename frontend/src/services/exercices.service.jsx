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

  }
}

export default ExercicesService;