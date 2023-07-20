import axios from "axios";
import authHeader from "./auth-header";

/*import * as globalSettings from './../globalSettings';

const API_URL = globalSettings.API_URL;*/

const API_URL = process.env.REACT_APP_API_URL;

class userDonateService {
  //UserDonate(user_id) {
    // return axios
    //   .post(API_URL + "api/follow_ngo_goods_donation_post_list", { user_id }, { headers: authHeader() })
    //   .then((response) => {
    //     return response.data;
    //   });

     //return axios
      //.get(API_URL + "api/post/donation_list?user_id="+user_id+"", { user_id }, { headers: authHeader() })
      //.then((response) => {
        //return response.data;
      //});
    
  //}
  
  UserDonate(user_id,cat_id,last_id,page_records,hashtag_val) {

    var str = "";
    if(hashtag_val && typeof hashtag_val !=="undefined" && hashtag_val !==""){
      str = "&hashtag_val="+hashtag_val;
    }

    return axios
      //.get(API_URL + "api/post/donation_list?user_id="+user_id+"&cat_id="+cat_id+"&last_id="+last_id+"&page_records="+page_records+""+str, { headers: authHeader() }) security
      .get(API_URL + "api/post/donation_list?cat_id="+cat_id+"&last_id="+last_id+"&page_records="+page_records+""+str, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

   Donate(cat_id) {
    return axios
      .get(API_URL + "api/post/guest_donation_list?cat_id="+cat_id)
      .then((response) => {
        return response.data;
      });
  }

  UserGoodDonate(user_id, ngo_id, post_id){
  var donation_type=2;
    return axios
      //.post(API_URL + "api/user_donation", { user_id, ngo_id, post_id,donation_type }, { headers: authHeader() }) security
      .post(API_URL + "api/user_donation", {  ngo_id, post_id,donation_type }, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

}

export default new userDonateService();