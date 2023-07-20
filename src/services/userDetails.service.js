import axios from "axios";
import authHeader from "./auth-header";

/*import * as globalSettings from './../globalSettings';

const API_URL = globalSettings.API_URL;*/

const API_URL = process.env.REACT_APP_API_URL;

class userDetailsService {
  Userinfodata(user_id) {
    return axios
     // .post(API_URL + "api/user_profile", { user_id }, { headers: authHeader() }) security
      .post(API_URL + "api/user_profile",  { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  UserUserinfodata(id, user_id) {
    return axios
     // .post(API_URL + "api/user_info", { id, user_id }, { headers: authHeader() })
      .post(API_URL + "api/user_info", {user_id }, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  UserProfileFun(user_id, image) {

    const insertData = new FormData();
   // insertData.set('user_id', user_id); security
    insertData.set('image', image[0]);

    return axios
      .post(API_URL + "api/user/user_profile_photo_edit", insertData, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  UserCoverFun(user_id, cover_page) {

    const insertData = new FormData();
   // insertData.set('user_id', user_id); security
    insertData.set('cover_page', cover_page[0]);
    
    return axios
      .post(API_URL + "api/user/user_cover_page_edit", insertData, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

   Userdetails_data(user_id) {
    return axios
      .post(API_URL + "api/user_about_profile", { user_id }, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

   Userdetails_data_by_id(user_id) {
    return axios
      //.get(API_URL + "api/user/user_details?user_id="+user_id+"", { headers: authHeader() }) security
      .get(API_URL + "api/user/user_details", { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

//user Profile
  MyAllPostListData(user_id,last_id,page_records, hashtag_val) {

    var str = "";
    if(hashtag_val && typeof hashtag_val !=="undefined" && hashtag_val !==""){
      str = "&hashtag_val="+hashtag_val;
    }
    
    return axios
      // .get(API_URL + "api/post/my_all_post_list?user_id="+user_id+"&last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() })security
       .get(API_URL + "api/post/my_all_post_list?last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  MyNgoPostListData(user_id,last_id,page_records, hashtag_val) {

    var str = "";
    if(hashtag_val && typeof hashtag_val !=="undefined" && hashtag_val !==""){
      str = "&hashtag_val="+hashtag_val;
    }

    return axios
       //.get(API_URL + "api/post/my_ngo_post_list?user_id="+user_id+"&last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() }) security
       .get(API_URL + "api/post/my_ngo_post_list?last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  MyDonationPostListData(user_id,last_id,page_records, hashtag_val) {
    
    var str = "";
    if(hashtag_val && typeof hashtag_val !=="undefined" && hashtag_val !==""){
      str = "&hashtag_val="+hashtag_val;
    }

    return axios
       .get(API_URL + "api/post/my_donation_post_list?user_id="+user_id+"&last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  MyValunteerPostListData(user_id,last_id,page_records, hashtag_val) {

    var str = "";
    if(hashtag_val && typeof hashtag_val !=="undefined" && hashtag_val !==""){
      str = "&hashtag_val="+hashtag_val;
    }

    return axios
       //.get(API_URL + "api/post/my_volunteer_post_list?user_id="+user_id+"&last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() }) security
       .get(API_URL + "api/post/my_volunteer_post_list?last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  MyMediaPostListData(user_id,last_id,page_records, hashtag_val) {

    var str = "";
    if(hashtag_val && typeof hashtag_val !=="undefined" && hashtag_val !==""){
      str = "&hashtag_val="+hashtag_val;
    }

    return axios
       //.get(API_URL + "api/post/my_media_post_list?user_id="+user_id+"&last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() }) security
       .get(API_URL + "api/post/my_media_post_list?last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  //user Homepage

  HomeAllPostListData(user_id,last_id,page_records, hashtag_val) {
    
    var str = "";
    if(hashtag_val && typeof hashtag_val !=="undefined" && hashtag_val !==""){
      str = "&hashtag_val="+hashtag_val;
    }

    return axios
       //.get(API_URL + "api/post/all_post_list?user_id="+user_id+"&last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() }) security
       .get(API_URL + "api/post/all_post_list?last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  HomeNgoPostListData(user_id,last_id,page_records, hashtag_val) {
    var str = "";
    if(hashtag_val && typeof hashtag_val !=="undefined" && hashtag_val !==""){
      str = "&hashtag_val="+hashtag_val;
    }

    return axios
     //  .get(API_URL + "api/post/ngo_post_list?user_id="+user_id+"&last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() })
       .get(API_URL + "api/post/ngo_post_list?last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  HomeDonationPostListData(user_id,last_id,page_records, hashtag_val) {
    var str = "";
    if(hashtag_val && typeof hashtag_val !=="undefined" && hashtag_val !==""){
      str = "&hashtag_val="+hashtag_val;
    }

    return axios
      // .get(API_URL + "api/post/donation_post_list?user_id="+user_id+"&last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() }) security
       .get(API_URL + "api/post/donation_post_list?last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  HomeValunteerPostListData(user_id,last_id,page_records, hashtag_val) {
    var str = "";
    if(hashtag_val && typeof hashtag_val !=="undefined" && hashtag_val !==""){
      str = "&hashtag_val="+hashtag_val;
    }

    return axios
       //.get(API_URL + "api/post/volunteer_post_list?user_id="+user_id+"&last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() }) security
       .get(API_URL + "api/post/volunteer_post_list?last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  HomeTrendingPostListData(user_id,last_id,page_records, hashtag_val) {
    var str = "";
    if(hashtag_val && typeof hashtag_val !=="undefined" && hashtag_val !==""){
      str = "&hashtag_val="+hashtag_val;
    }
    
    return axios
       //.get(API_URL + "api/post/friend_post_list?user_id="+user_id+"&last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() }) security
       .get(API_URL + "api/post/friend_post_list?last_id="+last_id+"&page_records="+page_records+""+str,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
  
  RecentNewNgoData(user_id,last_id,page_records) {

    return axios
      // .get(API_URL + "api/user/ngo_recent_added_list?user_id="+user_id+"&last_id="+last_id+"&page_records="+page_records+"",{ headers: authHeader() })
       .get(API_URL + "api/user/ngo_recent_added_list?last_id="+last_id+"&page_records="+page_records+"",{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
  RecentNewUserData(user_id,last_id,page_records) {

    return axios
       //.get(API_URL + "api/user/user_recent_added_list?user_id="+user_id+"&last_id="+last_id+"&page_records="+page_records+"",{ headers: authHeader() }) security
       .get(API_URL + "api/user/user_recent_added_list?last_id="+last_id+"&page_records="+page_records+"",{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

   RecentCampaignData(user_id,last_id,page_records) {
    return axios
      // .get(API_URL + "api/user/user_recent_campaign_list?user_id="+user_id+"&last_id="+last_id+"&page_records="+page_records+"",{ headers: authHeader() }) security
       .get(API_URL + "api/user/user_recent_campaign_list?last_id="+last_id+"&page_records="+page_records+"",{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

   RecentTestimonialData(user_id,last_id,page_records,testimonial_type){
    return axios
      // .get(API_URL + "api/user/user_testimonial_list?user_id="+user_id+"&last_id="+last_id+"&page_records="+page_records+"&testimonial_type="+testimonial_type+"",{ headers: authHeader() }) security
       .get(API_URL + "api/user/user_testimonial_list?last_id="+last_id+"&page_records="+page_records+"&testimonial_type="+testimonial_type+"",{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  RecentDonationTestimonialData(user_id,last_id,page_records,testimonial_type){
    return axios
       //.get(API_URL + "api/user/user_testimonial_list?user_id="+user_id+"&last_id="+last_id+"&page_records="+page_records+"&testimonial_type="+testimonial_type+"",{ headers: authHeader() }) security
       .get(API_URL + "api/user/user_testimonial_list?last_id="+last_id+"&page_records="+page_records+"&testimonial_type="+testimonial_type+"",{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
  
  MyCampaignData(user_id){
     return axios
     // .post(API_URL + "api/user_my_campaigns", { user_id }, { headers: authHeader() }) security
      .post(API_URL + "api/user_my_campaigns", { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

   MyDonationsData(user_id){
     return axios
   //  .post(API_URL + "api/user_my_Donations", { user_id }, { headers: authHeader() }) security
      .post(API_URL + "api/user_my_Donations",  { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  //Guest UserHome Page

  GuestAllPostListData() {
    return axios
       .get(API_URL + "api/post/guest_all_post_list")
      .then((response) => {
        return response.data;
      });
  }

  GuestNgoPostListData() {
    return axios
       .get(API_URL + "api/post/guest_ngo_post_list")
      .then((response) => {
        return response.data;
      });
  }

  GuestDonationPostListData() {
    return axios
       .get(API_URL + "api/post/guest_donation_post_list")
      .then((response) => {
        return response.data;
      });
  }

  GuestValunteerPostListData() {

    return axios
       .get(API_URL + "api/post/guest_volunteer_post_list")
      .then((response) => {
        return response.data;
      });
  }
  GuestTrendingPostListData() {
    return axios
       .get(API_URL + "api/post/guest_trending_post_list")
      .then((response) => {
        return response.data;
      });
  }


  GuestTrendingPostListUserHome(last_id, page_records) {
    return axios
       .get(API_URL + "api/post/guest_trending_post_list?last_id="+last_id+"&page_records="+page_records)
      .then((response) => {
        return response.data;
      });
  }
  
  UserTrendingPostListUserHome(user_id, last_id, page_records) {
    return axios
       //.get(API_URL + "api/post/user_trending_post_list?user_id="+user_id+"&last_id="+last_id+"&page_records="+page_records) security
       .get(API_URL + "api/post/user_trending_post_list?last_id="+last_id+"&page_records="+page_records,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  userNotificationData(user_id){
    return axios
      // .get(API_URL + "api/user_notification?user_id="+user_id,{ headers: authHeader() })
       .get(API_URL + "api/user_notification",{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  NotificationCount(user_id){
    return axios
       .get(API_URL + "api/notification_count_by_id?user_id="+user_id,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  NotificationRead(user_id){
    return axios
       //.get(API_URL + "api/read_notification?user_id="+user_id,{ headers: authHeader() })
       .get(API_URL + "api/read_notification",{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

   userUpdatePageOne(register_user_id,name,username, reg_about_yourself, reg_birth_date, reg_gender, reg_mobile_no, reg_country_id, reg_state_id, reg_city_id) {
  
    const insertData = new FormData();
    insertData.set('id', register_user_id);
    insertData.set('name',name);
    insertData.append('username', username);
    insertData.set('about_us', reg_about_yourself);
    insertData.set('birth_date', reg_birth_date);
    insertData.set('gender', reg_gender);
    insertData.set('mobile_no', reg_mobile_no);
    insertData.set('country_id', reg_country_id);
    insertData.set('state_id', reg_state_id);
    insertData.set('city_id', reg_city_id);
    insertData.set('type', '1');
    
    return axios
      .post(API_URL + "api/user/user_about_profile_edit",insertData,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  UserUpdateAadharPan(register_user_id,aadhar_card, pan_card){
  
    const insertData = new FormData();
    insertData.set('id', register_user_id);
    insertData.set('aadhar_card', aadhar_card);
    insertData.set('pan_card', pan_card);
    insertData.set('type', '2');
    
    return axios
      .post(API_URL + "api/user/user_about_profile_edit",insertData, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

 userUpdateVolunteerDetails(register_user_id,area_expert_id, location_pre, availability_pre, aval_from_date, aval_to_date){
  
    const insertData = new FormData();
    insertData.set('id', register_user_id);
    insertData.set('area_expert_id', area_expert_id);
    insertData.set('location_preference', location_pre);
    insertData.set('availability_preference', availability_pre);
    insertData.set('aval_from_date', aval_from_date);
    insertData.set('aval_to_date', aval_to_date);
    insertData.set('type', '3');

    return axios
      .post(API_URL + "api/user/user_about_profile_edit", insertData,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

userUpdateTheme(register_user_id,cat_ids){

    const insertData = new FormData();
    insertData.set('user_id', register_user_id);
    //insertData.set('cat_ids', cat_ids);

    for (let i = 0; i < cat_ids.length; i++) {
      insertData.append('cat_ids[]', cat_ids[i]);     
    }

     return axios
      .post(API_URL + "api/user_update_categories", insertData,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });

  }

  userTestimonialSubmit(user_id,testimonials_post_id,testimonial_text){

    const insertData = new FormData();
    //insertData.set('user_id', user_id); security
    insertData.set('post_id', testimonials_post_id);
    insertData.set('testimonials_text', testimonial_text);
    insertData.set('testimonial_type', 1);

     return axios
      .post(API_URL + "api/user/add_user_testimonial", insertData,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });

  }

  userFollowersList(user_id){
    return axios
       .get(API_URL + "api/user/user_followers_info_list?user_id="+user_id,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  userFollowingsList(user_id){
    return axios
       .get(API_URL + "api/user/user_followings_info_list?user_id="+user_id,{ headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

}

export default new userDetailsService();