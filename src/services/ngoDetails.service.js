import axios from "axios";
import authHeader from "./auth-header";

/*import * as globalSettings from './../globalSettings';

const API_URL = globalSettings.API_URL;*/

const API_URL = process.env.REACT_APP_API_URL;

class ngoDetailsService {
  Ngodetailsdata(ngo_id) {
    return axios
     // .post(API_URL + "api/ngo_details_by_id", { ngo_id }, { headers: authHeader() }) security
      .post(API_URL + "api/ngo_details_by_id", { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  MyAllPostListData(ngo_id,last_id,page_records,hashtag_val) {
    
    var str = "";
    if(hashtag_val && typeof hashtag_val !=="undefined" && hashtag_val !==""){
      str = "&hashtag_val="+hashtag_val;
    }

    return axios
       //.get(API_URL + "api/post/own_post_list?user_id="+ngo_id+"&last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() }) security
       .get(API_URL + "api/post/own_post_list?last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  MyTestimonialPostListData(ngo_id,last_id,page_records, hashtag_val) {
    
    var str = "";
    if(hashtag_val && typeof hashtag_val !=="undefined" && hashtag_val !==""){
      str = "&hashtag_val="+hashtag_val;
    }

    var testimonial_post_type='5';
    return axios
       //.get(API_URL + "api/post/my_post_by_type?user_id="+ngo_id+"&last_id="+last_id+"&page_records="+page_records+"&post_type="+testimonial_post_type+""+str,{ headers: authHeader() })security
       .get(API_URL + "api/post/my_post_by_type?last_id="+last_id+"&page_records="+page_records+"&post_type="+testimonial_post_type+""+str,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  MyStoryPostListData(ngo_id,last_id,page_records, hashtag_val) {
    
    var str = "";
    if(hashtag_val && typeof hashtag_val !=="undefined" && hashtag_val !==""){
      str = "&hashtag_val="+hashtag_val;
    }

    var story_post_type='4';
    return axios
       //.get(API_URL + "api/post/my_post_by_type?user_id="+ngo_id+"&last_id="+last_id+"&page_records="+page_records+"&post_type="+story_post_type+""+str,{ headers: authHeader() })
       .get(API_URL + "api/post/my_post_by_type?last_id="+last_id+"&page_records="+page_records+"&post_type="+story_post_type+""+str,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
  
  MyMediaPostListData(ngo_id,last_id,page_records, hashtag_val) {
    
    var str = "";
    if(hashtag_val && typeof hashtag_val !=="undefined" && hashtag_val !==""){
      str = "&hashtag_val="+hashtag_val;
    }

    return axios
       //.get(API_URL + "api/post/my_media_post_list?user_id="+ngo_id+"&last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() }) security
       .get(API_URL + "api/post/my_media_post_list?last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  MyAllPostListData_ngo(user_id,ngo_id,last_id,page_records, hashtag_val) {
    
    var str = "";
    if(hashtag_val && typeof hashtag_val !=="undefined" && hashtag_val !==""){
      str = "&hashtag_val="+hashtag_val;
    }

    return axios
      // .get(API_URL + "api/post/own_post_list_ngo?user_id="+user_id+"&ngo_id="+ngo_id+"&last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() }) security
       .get(API_URL + "api/post/own_post_list_ngo?user_id="+user_id+"&ngo_id="+ngo_id+"&last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  MyTestimonialPostListData_ngo(user_id,ngo_id,last_id,page_records, hashtag_val) {
    
    var str = "";
    if(hashtag_val && typeof hashtag_val !=="undefined" && hashtag_val !==""){
      str = "&hashtag_val="+hashtag_val;
    }

    var testimonial_post_type='5';
    return axios
       //.get(API_URL + "api/post/my_post_by_type_ngo?user_id="+user_id+"&ngo_id="+ngo_id+"&last_id="+last_id+"&page_records="+page_records+"&post_type="+testimonial_post_type+""+str,{ headers: authHeader() }) security
       .get(API_URL + "api/post/my_post_by_type_ngo?ngo_id="+ngo_id+"&last_id="+last_id+"&page_records="+page_records+"&post_type="+testimonial_post_type+""+str,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  MyStoryPostListData_ngo(user_id,ngo_id,last_id,page_records, hashtag_val) {
    
    var str = "";
    if(hashtag_val && typeof hashtag_val !=="undefined" && hashtag_val !==""){
      str = "&hashtag_val="+hashtag_val;
    }

    var story_post_type='4';
    return axios
      // .get(API_URL + "api/post/my_post_by_type_ngo?user_id="+user_id+"&ngo_id="+ngo_id+"&last_id="+last_id+"&page_records="+page_records+"&post_type="+story_post_type+""+str,{ headers: authHeader() })
       .get(API_URL + "api/post/my_post_by_type_ngo?ngo_id="+ngo_id+"&last_id="+last_id+"&page_records="+page_records+"&post_type="+story_post_type+""+str,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
  MyMediaPostListData_ngo(user_id,ngo_id,last_id,page_records, hashtag_val) {
    
    var str = "";
    if(hashtag_val && typeof hashtag_val !=="undefined" && hashtag_val !==""){
      str = "&hashtag_val="+hashtag_val;
    }

    return axios
       //.get(API_URL + "api/post/my_media_post_list_ngo?user_id="+user_id+"&ngo_id="+ngo_id+"&last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() }) security
       .get(API_URL + "api/post/my_media_post_list_ngo?ngo_id="+ngo_id+"&last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  MyCampaignPostListData(ngo_id,last_id,page_records, hashtag_val) {
    
    var str = "";
    if(hashtag_val && typeof hashtag_val !=="undefined" && hashtag_val !==""){
      str = "&hashtag_val="+hashtag_val;
    }

    return axios
      // .get(API_URL + "api/post/ngo_campaign_post_list?user_id="+ngo_id+"&last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() }) security
       .get(API_URL + "api/post/ngo_campaign_post_list?last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  MyTaggedPostListData(ngo_id,last_id,page_records, hashtag_val) {

    var str = "";
    if(hashtag_val && typeof hashtag_val !=="undefined" && hashtag_val !==""){
      str = "&hashtag_val="+hashtag_val;
    }

    return axios
       .get(API_URL + "api/post/ngo_taging?user_id="+ngo_id+"&last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  MyNgoTaggedPostListData(ngo_id,last_id,page_records, hashtag_val) {

    var str = "";
    if(hashtag_val && typeof hashtag_val !=="undefined" && hashtag_val !==""){
      str = "&hashtag_val="+hashtag_val;
    }

    return axios
       //.get(API_URL + "api/post/ngo_tagged_post?user_id="+ngo_id+"&last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() })
       .get(API_URL + "api/post/ngo_tagged_post?last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

   RecentCampaignData(ngo_id,last_id,page_records) {

    return axios
       //.get(API_URL + "api/ngo/ngo_recent_campaign_list?user_id="+ngo_id+"&last_id="+last_id+"&page_records="+page_records+"",{ headers: authHeader() }) security
       .get(API_URL + "api/ngo/ngo_recent_campaign_list?last_id="+last_id+"&page_records="+page_records+"",{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  RecentVolunteerData(ngo_id,last_id,page_records) {

    return axios
       //.get(API_URL + "api/ngo/ngo_recent_valunteer_list?user_id="+ngo_id+"&last_id="+last_id+"&page_records="+page_records+"",{ headers: authHeader() }) security
       .get(API_URL + "api/ngo/ngo_recent_valunteer_list?last_id="+last_id+"&page_records="+page_records+"",{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  RecentDonationData(ngo_id,last_id,page_records) {

    return axios
       //.get(API_URL + "api/ngo/ngo_recent_donation_list?user_id="+ngo_id+"&last_id="+last_id+"&page_records="+page_records+"",{ headers: authHeader() }) security
       .get(API_URL + "api/ngo/ngo_recent_donation_list?last_id="+last_id+"&page_records="+page_records+"",{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  RecentTestimonialData(ngo_id,last_id,page_records,testimonial_type){

    return axios
      // .get(API_URL + "api/ngo/ngo_testimonial_list?user_id="+ngo_id+"&last_id="+last_id+"&page_records="+page_records+"&testimonial_type="+testimonial_type+"",{ headers: authHeader() })
       .get(API_URL + "api/ngo/ngo_testimonial_list?last_id="+last_id+"&page_records="+page_records+"&testimonial_type="+testimonial_type+"",{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  RecentCelebrityTestimonialData(ngo_id,last_id,page_records){

    return axios
       .get(API_URL + "api/ngo/ngo_celebrity_testimonial_list?user_id="+ngo_id+"&last_id="+last_id+"&page_records="+page_records+"",{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  CelebrityTestimonial(ngo_id){

    return axios
      // .get(API_URL + "api/ngo/ngo_celebrity_list?user_id="+ngo_id,{ headers: authHeader() })
       .get(API_URL + "api/ngo/ngo_celebrity_list",{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  ngoNotificationData(user_id){
    return axios
       //.get(API_URL + "api/ngo_notification?ngo_id="+user_id,{ headers: authHeader() }) security
       .get(API_URL + "api/ngo_notification",{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  RecentTrending(user_id,last_id,page_records){
    return axios
       //.get(API_URL + "api/post/user_like_post_list?user_id="+user_id+"&last_id="+last_id+"&page_records="+page_records+"",{ headers: authHeader() }) security
       .get(API_URL + "api/post/user_like_post_list?last_id="+last_id+"&page_records="+page_records+"",{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  DoGoodDonationsConnect(user_id,post_id){
    return axios
       .post(API_URL + "api/post/update_is_connect_donation",{user_id, post_id},{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  InterestedVolunteerConnect(user_id, post_id, is_connect){
    return axios
       .post(API_URL + "api/post/update_is_connect_intvolunteer",{user_id, post_id, is_connect},{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  VolunteerConnect(user_id, post_id, is_connect){
    return axios
       .post(API_URL + "api/post/update_is_connect_volunteer",{user_id, post_id, is_connect},{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  UserVolunteerConnect(ngo_id, user_id){
    return axios
       //.post(API_URL + "api/user/update_is_connect_user",{ngo_id, user_id},{ headers: authHeader() })
       .post(API_URL + "api/user/update_is_connect_user",{ngo_id},{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  getNgoEditRegDetails (ngo_id)
  {
    return axios
      //.post(API_URL + "api/ngo_edit_reg_details", {  ngo_id },{ headers: authHeader() })
      .post(API_URL + "api/ngo_edit_reg_details",{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  allTestimonialListData(user_id,ngo_id,last_id,page_records) {
    return axios
      // .get(API_URL + "api/all_testimonial_list?user_id="+user_id+"&ngo_id="+ngo_id+"&last_id="+last_id+"&page_records="+page_records,{ headers: authHeader() }) security
       .get(API_URL + "api/all_testimonial_list?ngo_id="+ngo_id+"&last_id="+last_id+"&page_records="+page_records,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

}

export default new ngoDetailsService();