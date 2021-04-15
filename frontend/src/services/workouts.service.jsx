import {ApiService} from './api.service'

const WorkoutsService = {
  query(params){
    if(params){
      return ApiService.query(
        "fitness/training" + (params.type === "feed" ? "/feed" : ""),
        {
          params: params.filters,
        }
      );
    }
    return ApiService.query(
      "fitness/training",
    );

  },

  get(slug) {
    return ApiService.get("fitness/training", slug);
  },
  create(params) {
    return ApiService.post("fitness/training", { training: params });
  },
  update(slug, params) {
    return ApiService.update("fitness/training", slug, { training: params });
  },
  destroy(slug) {
    return ApiService.delete(`fitness/training/${slug}`);
  },
  favorite(slug) {
    ApiService.auth();
    return ApiService.post(`fitness/training/${slug}/favorite`);
  },
  unfavorite(slug) {
    ApiService.auth();
    return ApiService.delete(`fitness/training/${slug}/favorite`);
  },
}

export default WorkoutsService;