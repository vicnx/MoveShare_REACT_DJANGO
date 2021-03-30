import createHttp from "./http"

let http =createHttp(false);
export const ApiService = {
  auth(){
    http = createHttp(true)
  },

  get(resource, slug = "") {
    return http.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[MS] ApiService ${error}`);
    });
  },

  query(resource, params) {
    console.log(params);
    return http.get(resource, params).catch(error => {
      throw new Error(`[MS] ApiService ${error}`);
    });
  },

  put(resource, params) {
    return http.put(`${resource}`, params);
  },

  post(resource, params) {
    console.log(params);
    return http.post(`${resource}`, params);
  },
}