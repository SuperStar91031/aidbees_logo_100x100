import axios from "axios";
import authHeader from "./auth-header";

/*import * as globalSettings from './../globalSettings';

const API_URL = globalSettings.API_URL;*/

const API_URL = process.env.REACT_APP_API_URL;

class ngoAllValunteerService {
 
  NgoFilterValunteer(user_id,last_id,page_records,from_date,to_date,location,area_of_interest_id) {
    return axios
      //.get(API_URL + "api/ngo/ngo_volunteer_list?user_id="+user_id+"&last_id="+last_id+"&page_records="+page_records+"&from_date="+from_date+"&to_date="+to_date+"&location="+location+"&area_of_interest_id="+area_of_interest_id+"",{ headers: authHeader() }) security
      .get(API_URL + "api/ngo/ngo_volunteer_list?last_id="+last_id+"&page_records="+page_records+"&from_date="+from_date+"&to_date="+to_date+"&location="+location+"&area_of_interest_id="+area_of_interest_id+"",{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  NgoFilterUserValunteer(user_id, last_id,page_records,from_date,to_date,name,area_of_interest_id) {
    return axios
      //.get(API_URL + "api/user/user_list?user_id="+user_id+"&last_id="+last_id+"&page_records="+page_records+"&from_date="+from_date+"&to_date="+to_date+"&name="+name+"&area_of_interest_id="+area_of_interest_id+"",{ headers: authHeader() })
      .get(API_URL + "api/user/user_list?last_id="+last_id+"&page_records="+page_records+"&from_date="+from_date+"&to_date="+to_date+"&name="+name+"&area_of_interest_id="+area_of_interest_id+"",{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }


  NgoInterestedFilterValunteer(user_id,last_id,page_records,from_date,to_date,location,area_of_interest_id) {
    return axios
      // .get(API_URL + "api/ngo/ngo_interested_volunteer_list?user_id="+user_id+"&last_id="+last_id+"&page_records="+page_records+"&from_date="+from_date+"&to_date="+to_date+"&location="+location+"&area_of_interest_id="+area_of_interest_id+"",{ headers: authHeader() })
      .get(API_URL + "api/ngo/ngo_volunteer_list?last_id="+last_id+"&page_records="+page_records+"&from_date="+from_date+"&to_date="+to_date+"&location="+location+"&area_of_interest_id="+area_of_interest_id+"",{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
  
  NgolistingFilterValunteer(user_id,last_id,page_records,from_date,to_date,location,area_of_interest_id) {
    return axios
      //.get(API_URL + "api/ngo/ngo_volunteer_listing?user_id="+user_id+"&last_id="+last_id+"&page_records="+page_records+"&from_date="+from_date+"&to_date="+to_date+"&location="+location+"&area_of_interest_id="+area_of_interest_id+"",{ headers: authHeader() })
      .get(API_URL + "api/ngo/ngo_volunteer_listing?last_id="+last_id+"&page_records="+page_records+"&from_date="+from_date+"&to_date="+to_date+"&location="+location+"&area_of_interest_id="+area_of_interest_id+"",{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  NgoRecentValunteer(user_id, last_id,page_records) {
    return axios
      .get(API_URL + "api/ngo/ngo_recent_volunteer_post?user_id="+user_id+"&last_id="+last_id+"&page_records="+page_records+"",{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  NgoRecentTestimonial(user_id, last_id,page_records) {
    return axios
      .get(API_URL + "api/ngo/ngo_recent_testsimonial_post?user_id="+user_id+"&last_id="+last_id+"&page_records="+page_records+"",{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
  
}

export default new ngoAllValunteerService();