import axios from "axios";
import authHeader from "./auth-header";

/*import * as globalSettings from './../globalSettings';

const API_URL = globalSettings.API_URL;*/

const API_URL = process.env.REACT_APP_API_URL;

class ngoAllDonationService {
 
  NgoAllFilterDonation(user_id,last_id,page_records,from_date,to_date,name,amount) {
    return axios
      //.get(API_URL + "api/ngo/ngo_all_donation_list?user_id="+user_id+"&last_id="+last_id+"&page_records="+page_records+"&from_date="+from_date+"&to_date="+to_date+"&name="+name+"&amount="+amount+"",{ headers: authHeader() }) security
      .get(API_URL + "api/ngo/ngo_all_donation_list?last_id="+last_id+"&page_records="+page_records+"&from_date="+from_date+"&to_date="+to_date+"&name="+name+"&amount="+amount+"",{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

   NgoFilterDonation(user_id,last_id,page_records,from_date,to_date,name,amount) {
    return axios
      //.get(API_URL + "api/ngo/ngo_donations_list?user_id="+user_id+"&last_id="+last_id+"&page_records="+page_records+"&from_date="+from_date+"&to_date="+to_date+"&name="+name+"&amount="+amount+"",{ headers: authHeader() }) security
      .get(API_URL + "api/ngo/ngo_donations_list?last_id="+last_id+"&page_records="+page_records+"&from_date="+from_date+"&to_date="+to_date+"&name="+name+"&amount="+amount+"",{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  NgoGoodFilterDonation(user_id,last_id,page_records,from_date,to_date,name,amount) {
    return axios
      //.get(API_URL + "api/ngo/ngo_good_donation_list?user_id="+user_id+"&last_id="+last_id+"&page_records="+page_records+"&from_date="+from_date+"&to_date="+to_date+"&name="+name+"&amount="+amount+"",{ headers: authHeader() }) security
      .get(API_URL + "api/ngo/ngo_good_donation_list?last_id="+last_id+"&page_records="+page_records+"&from_date="+from_date+"&to_date="+to_date+"&name="+name+"&amount="+amount+"",{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
  
  NgoDoGoodListingFilterDonation(user_id,last_id,page_records,from_date,to_date,name) {
    return axios
      //.get(API_URL + "api/ngo/ngo_do_good_listing?user_id="+user_id+"&last_id="+last_id+"&page_records="+page_records+"&from_date="+from_date+"&to_date="+to_date+"&name="+name+"",{ headers: authHeader() }) security
      .get(API_URL + "api/ngo/ngo_do_good_listing?last_id="+last_id+"&page_records="+page_records+"&from_date="+from_date+"&to_date="+to_date+"&name="+name+"",{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

}

export default new ngoAllDonationService();