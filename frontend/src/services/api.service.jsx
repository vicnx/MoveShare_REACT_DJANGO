import createHttp from "./http"

let http =createHttp(false);
export const ApiService = {
  auth(){
    http = createHttp(true)
  },

  async get(resource, slug = "") {
    return http.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RVD] ApiService ${error}`);
    });
  },
}