import axios from "axios";
import authHeader from "./auth-header";

/*import * as globalSettings from './../globalSettings';

const API_URL = globalSettings.API_URL;*/

const API_URL = process.env.REACT_APP_API_URL;

class userNgoReviewService {
  userNgoReview(user_id, ngo_id) {
    return axios
    //  .post(API_URL + "api/ngo_review", { user_id, ngo_id }, { headers: authHeader() }) security 
    .post(API_URL + "api/ngo_review", {  ngo_id }, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  userAddUpdateNgoReview(user_id, ngo_id, review, review_id) {
    return axios
      //.post(API_URL + "api/add_update_ngo_review", { user_id, ngo_id, review, review_id }, { headers: authHeader() })
      .post(API_URL + "api/add_update_ngo_review", {  ngo_id, review, review_id }, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  NgoReviewList(ngo_id) {
    return axios
      .post(API_URL + "api/ngo_review_list", { ngo_id }, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
}

export default new userNgoReviewService();