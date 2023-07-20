import axios from "axios";
import authHeader from "./auth-header";
import Authservice from "./auth.service"
/*import * as globalSettings from './../globalSettings';

const API_URL = globalSettings.API_URL;*/

const API_URL = process.env.REACT_APP_API_URL;

class UserNgoService {
  ngoListFilter(user_id, name, cat_id, sub_cat_id,last_id,page_records,last_name) {
console.log("service "+page_records)
console.log("last_id "+last_id)
    return axios
     // .post(API_URL + "api/ngo_list_on_filter", { user_id, name, cat_id, sub_cat_id,last_id,page_records,last_name}, { headers: authHeader() }) security
      .post(API_URL + "api/ngo_list_on_filter", {  name, cat_id, sub_cat_id,last_id,page_records,last_name}, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  ngoAddFollow(user_id, ngo_id) {

    return axios
    //.post(API_URL + "api/ngo/ngo_add_follow", { user_id, ngo_id }, { headers: authHeader() }) security
    .post(API_URL + "api/ngo/ngo_add_follow", {  ngo_id }, { headers: authHeader() })
      .then((response) => {
        Authservice.update_session(user_id);
        return response.data;
      });
  }
  ngoUnFollow(user_id, ngo_id) {

    return axios
  // .post(API_URL + "api/ngo/ngo_unfollow", { user_id, ngo_id }, { headers: authHeader() }) security
      .post(API_URL + "api/ngo/ngo_unfollow", {  ngo_id }, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  userNgoMutualFriend(user_id, ngo_id) {

    return axios
     // .get(API_URL + "api/user/user_mutual_ngo_followers?user_id="+user_id+"&ngo_id="+ngo_id, { headers: authHeader() }) security
      .get(API_URL + "api/user/user_mutual_ngo_followers?ngo_id="+ngo_id, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
  
  
  NgoLike(user_id, ngo_id) {

    return axios
    //  .post(API_URL + "api/ngo_like", { user_id, ngo_id }, { headers: authHeader() }) security
      .post(API_URL + "api/ngo_like", {  ngo_id }, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  NgoUnlike(user_id, ngo_id) {

    return axios
     // .post(API_URL + "api/ngo_unlike", { user_id, ngo_id }, { headers: authHeader() }) security
      .post(API_URL + "api/ngo_unlike", {  ngo_id }, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  NgoInfo(ngo_id) {

    return axios
      .post(API_URL + "api/ngo_info", { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  UserNgoInfo(user_id, ngo_id) {

    return axios
     // .post(API_URL + "api/ngo_info", { user_id, ngo_id }, { headers: authHeader() }) security
      .post(API_URL + "api/ngo_info", {  ngo_id }, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
}

export default new UserNgoService();