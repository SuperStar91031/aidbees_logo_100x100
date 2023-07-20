import axios from "axios";
import authHeader from "./auth-header";

/*import * as globalSettings from './../globalSettings';

const API_URL = globalSettings.API_URL;*/

const API_URL = process.env.REACT_APP_API_URL;

class userUserService {
  userListFilter(name) {

    return axios
      .post(API_URL + "api/user_list_filter_by_name", { name }, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  userUserListFilter(user_id, name) {

    return axios
     // .post(API_URL + "api/user_list_filter_by_name", { user_id, name }, { headers: authHeader() }) security
      .post(API_URL + "api/user_list_filter_by_name", {  name }, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  userAddFriend(user_id, friend_id) {

    return axios
      .post(API_URL + "api/user/user_add_friend", { user_id, friend_id }, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  userRemoveFriend(user_id, friend_id) {

    return axios
      .post(API_URL + "api/user/user_remove_friend", { user_id, friend_id }, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
  
  userBlockFriend(user_id, block_user_id) {

    return axios
      .post(API_URL + "api/user/user_block", { user_id, block_user_id }, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
  
  userUnblockFriend(user_id, block_user_id) {

    return axios
      .post(API_URL + "api/user/user_unblock", { user_id, block_user_id }, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  TestimonialSubmit(user_id, post_id, testimonial_text) {


    const insertData = new FormData();
   // insertData.set('user_id', user_id); security
    insertData.set('post_id', post_id);
    insertData.set('testimonial_text', testimonial_text);
    insertData.set('testimonial_type', 1);

    //var is_attachment = 0;

    return axios
      .post(API_URL + "api/user/add_user_testimonial", insertData, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  TestimonialSubmitDonation(user_id, post_id, donation_id, testimonial_text) {

    const insertData = new FormData();
 //   insertData.set('user_id', user_id); security
    insertData.set('post_id', post_id);
    insertData.set('donation_id', donation_id);
    insertData.set('testimonial_text', testimonial_text);
    insertData.set('testimonial_type', 1);

    //var is_attachment = 0;

    return axios
      .post(API_URL + "api/user/add_user_testimonial", insertData, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
  
  volunteerTestimonialSubmit(user_id, post_id, testimonial_text) {

    const insertData = new FormData();
    //insertData.set('user_id', user_id); security
    insertData.set('post_id', post_id);
    insertData.set('testimonial_text', testimonial_text);
    insertData.set('testimonial_type', 2);

    //var is_attachment = 0;

    return axios
      .post(API_URL + "api/user/add_user_testimonial", insertData, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
}

export default new userUserService();

