import axios from "axios";
import authHeader from "./auth-header";

/*import * as globalSettings from './../globalSettings';

const API_URL = globalSettings.API_URL;*/

const API_URL = process.env.REACT_APP_API_URL;

class ngoReviewListService {
  NgoReviewList(ngo_id,from_date,to_date) {

  	const insertData = new FormData();
    insertData.set('ngo_id', ngo_id);
    insertData.set('from_date', from_date);
    insertData.set('to_date', to_date);

    return axios
      .post(API_URL + "api/ngo_review_list",insertData, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  reviewDelete(review_id) {

    return axios
      .get(API_URL + "api/ngo/delete_ngo_review?review_id="+review_id, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

}

export default new ngoReviewListService();