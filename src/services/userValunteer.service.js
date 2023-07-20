import axios from "axios";
import authHeader from "./auth-header";

/*import * as globalSettings from './../globalSettings';

const API_URL = globalSettings.API_URL;*/

const API_URL = process.env.REACT_APP_API_URL;

class userValunteerService {
  userValunteer(user_id,last_id,page_records,from_date,location,area_of_interest_id,ngo_id, hashtag_val) {

    var str = "";
    if(hashtag_val && typeof hashtag_val !=="undefined" && hashtag_val !==""){
      str = "&hashtag_val="+hashtag_val;
    }
    
    return axios
      // .get(API_URL + "api/post/volunteer_post_list?user_id="+user_id+"", { headers: authHeader() })
      //.get(API_URL + "api/post/user_menu_volunteer_list?user_id="+user_id+"&last_id="+last_id+"&page_records="+page_records+"&from_date="+from_date+"&location="+location+"&area_of_interest_id="+area_of_interest_id+"&ngo_id="+ngo_id+""+str, { headers: authHeader() }) security
      .get(API_URL + "api/post/user_menu_volunteer_list?last_id="+last_id+"&page_records="+page_records+"&from_date="+from_date+"&location="+location+"&area_of_interest_id="+area_of_interest_id+"&ngo_id="+ngo_id+""+str, { headers: authHeader() })
      //.get(API_URL + "api/post/volunteer_list?user_id="+user_id+"&last_id="+last_id+"&page_records="+page_records+"&from_date="+from_date+"&location="+location+"&area_of_interest_id="+area_of_interest_id+"&ngo_id="+ngo_id+"", { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  valunteer() {
    return axios
      .get(API_URL + "api/post/guest_volunteer_list")
      .then((response) => {
        return response.data;
      });
  }

  userMonthVolunteerList(user_id, month_var, year_var) {
    return axios
      //.get(API_URL + "api/user/user_month_volunteer_list?user_id="+user_id+"&month="+month_var+"&year="+year_var, { headers: authHeader() }) security
      .get(API_URL + "api/user/user_month_volunteer_list?month="+month_var+"&year="+year_var, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  userDayVolunteerList(user_id, date_var) {
    return axios
    //  .get(API_URL + "api/post/user_day_wise_volunteer_list?user_id="+user_id+"&date="+date_var, { headers: authHeader() }) security
      .get(API_URL + "api/post/user_day_wise_volunteer_list?date="+date_var, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
}

export default new userValunteerService();