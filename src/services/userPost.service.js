import axios from "axios";
import authHeader from "./auth-header";
// import $ from 'jquery';
import jQuery from 'jquery';
/*import * as globalSettings from './../globalSettings';

const API_URL = globalSettings.API_URL;*/

const API_URL = process.env.REACT_APP_API_URL;

class UserPostService {
  insertPost(logged_user_id, post_text, post_date, post_img, post_video) {

    post_text = post_text.replace(/\r?\n/g, '\n');


    const insertData = new FormData();
    insertData.set('user_id', logged_user_id);
    insertData.set('post_type', 1);
    insertData.set('user_type', 2);

    insertData.set('post_text', post_text);
    //insertData.set('post_date', post_date);

    /*var user_post_text_has_tag_arry = post_text.match(/#\S+/g);
    if(user_post_text_has_tag_arry && typeof user_post_text_has_tag_arry !=="undefined" && user_post_text_has_tag_arry.length>0){
      for (var k = 0; k < user_post_text_has_tag_arry.length; k++) {
        //insertData.append('tag_key', user_post_text_has_tag_arry[k]);
      }
    }else{
      //insertData.set('tag_key', "");
    }*/

    var user_post_text_user_tag_arry = post_text.match(/@\S+/g);
    if(user_post_text_user_tag_arry && typeof user_post_text_user_tag_arry !=="undefined" && user_post_text_user_tag_arry.length>0){
      for (var k = 0; k < user_post_text_user_tag_arry.length; k++) {
        insertData.append('tag_user_list', user_post_text_user_tag_arry[k].replace('@', ''));
      }
    }else{
      insertData.set('tag_user_list', "");
    }

    var is_media = 0;

    if(post_img && typeof post_img !=="undefined" && post_img.length>0){
      for (var i = 0; i < post_img.length; i++) {
        insertData.append('media[]', post_img[i]);
      }
      
      is_media = 1;
    }
    
    if(post_video && typeof post_video !=="undefined" && post_video.length>0){
      for (var j = 0; j < post_video.length; j++) {
        insertData.append('media[]', post_video[j]);
      }

      is_media = 1;
    }

    insertData.set('is_media', is_media);

    return axios
      .post(API_URL + "api/add_post", insertData, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }


  insertDonationPost(logged_user_id, post_text, file_name) {

    post_text = post_text.replace(/\r?\n/g, '\n');


    const insertData = new FormData();
    insertData.set('user_id', logged_user_id);
    insertData.set('post_type', 1);
    insertData.set('user_type', 2);

    insertData.set('post_text', post_text);
    insertData.set('file_name', file_name);
    insertData.set('is_media', 1);

    var user_post_text_user_tag_arry = post_text.match(/@\S+/g);
    if(user_post_text_user_tag_arry && typeof user_post_text_user_tag_arry !=="undefined" && user_post_text_user_tag_arry.length>0){
      for (var k = 0; k < user_post_text_user_tag_arry.length; k++) {
        insertData.append('tag_user_list', jQuery.trim(user_post_text_user_tag_arry[k].replace('@', '')));
      }
    }else{
      insertData.set('tag_user_list', "");
    }

    return axios
      .post(API_URL + "api/add_post", insertData, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }


  insertCampaign(logged_user_id, campaign_cat_id, campaign_sub_cat_id, campaign_ngo_id, user_campaign_name, campaign_text, campaign_date, campaign_img, campaign_video, target_amnt) {

    campaign_text = campaign_text.replace(/\r?\n/g, '\n');

    const insertData = new FormData();
    insertData.set('user_id', logged_user_id);
    insertData.set('cat_id', campaign_cat_id);
    insertData.set('sub_cat_id', campaign_sub_cat_id);
    insertData.set('ngo_id', campaign_ngo_id);
    insertData.set('campaign_name', user_campaign_name);
    insertData.set('user_type', 2);
insertData.set('target_amount', target_amnt);
    insertData.set('post_text', campaign_text);

    var post_text = campaign_text;
    var user_post_text_user_tag_arry = post_text.match(/@\S+/g);
    if(user_post_text_user_tag_arry && typeof user_post_text_user_tag_arry !=="undefined" && user_post_text_user_tag_arry.length>0){
      for (var k = 0; k < user_post_text_user_tag_arry.length; k++) {
        insertData.append('tag_user_list', jQuery.trim(user_post_text_user_tag_arry[k].replace('@', '')));
      }
    }else{
      insertData.set('tag_user_list', "");
    }

    //insertData.set('post_date', campaign_date);

    /*var post_text_has_tag_arry_camp = campaign_text.match(/#\S+/g);
    if(post_text_has_tag_arry_camp && typeof post_text_has_tag_arry_camp !=="undefined" && post_text_has_tag_arry_camp.length>0){
      for (var k = 0; k < post_text_has_tag_arry_camp.length; k++) {
        //insertData.append('tag_key', post_text_has_tag_arry_camp[k]);
      }
    }else{
      //insertData.set('tag_key', "");
    }*/

    var is_media = 0;

    if(campaign_img && typeof campaign_img !=="undefined" && campaign_img.length>0){
      for (var l = 0; l < campaign_img.length; l++) {
        insertData.append('media[]', campaign_img[l]);
      }
      //insertData.append('media[]', campaign_img[0]);
      is_media = 1;
    }
    
    if(campaign_video && typeof campaign_video !=="undefined" && campaign_video.length>0){
      for (var m = 0; m < campaign_video.length; m++) {
        insertData.append('media[]', campaign_video[m]);
      }
      //insertData.append('media[]', campaign_video[0]);

      is_media = 1;
    }

    insertData.set('is_media', is_media);

    if(is_media ===0){
      insertData.set('media[]', "");
    }
    return axios
      .post(API_URL + "api/create_campaign", insertData, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  addValunteerPost(logged_user_id, campaign_name, campaign_post_text, area_of_interest_id, valunteer_no, location, from_date, to_date, post_img, post_video) {

    campaign_post_text = campaign_post_text.replace(/\r?\n/g, '\n');

    const insertData = new FormData();
    insertData.set('user_id', logged_user_id);
    insertData.set('post_type', 3);
    insertData.set('user_type', 1);
    insertData.set('cat_id', 1);
    insertData.set('area_of_interest_id', area_of_interest_id);
    insertData.set('valunteer_no', valunteer_no);
    insertData.set('location', location);
    insertData.set('from_date', from_date);
    insertData.set('to_date', to_date);
    insertData.set('campaign_name', campaign_name);
    insertData.set('post_text', campaign_post_text);

    var post_text = campaign_post_text;
    var user_post_text_user_tag_arry = post_text.match(/@\S+/g);
    if(user_post_text_user_tag_arry && typeof user_post_text_user_tag_arry !=="undefined" && user_post_text_user_tag_arry.length>0){
      for (var k = 0; k < user_post_text_user_tag_arry.length; k++) {
        insertData.append('tag_user_list', jQuery.trim(user_post_text_user_tag_arry[k].replace('@', '')));
      }
    }else{
      insertData.set('tag_user_list', "");
    }

    /*var post_text_has_tag_arry_volunteer = campaign_post_text.match(/#\S+/g);
    if(post_text_has_tag_arry_volunteer && typeof post_text_has_tag_arry_volunteer !=="undefined" && post_text_has_tag_arry_volunteer.length>0){
      for (var k = 0; k < post_text_has_tag_arry_volunteer.length; k++) {
        //insertData.append('tag_key', post_text_has_tag_arry_volunteer[k]);
      }
    }else{
      //insertData.set('tag_key', "");
    }*/

    //var is_media = 0;

    if(post_img && typeof post_img !=="undefined" && post_img.length>0){
      for (var n = 0; n < post_img.length; n++) {
        insertData.append('media_file', post_img[n]);
      }
      //insertData.append('media_file[]', post_img[0]);
      //is_media = 1;
    }
    
    if(post_video && typeof post_video !=="undefined" && post_video.length>0){
      for (var o = 0; o < post_video.length; o++) {
        insertData.append('media_file', post_video[o]);
      }
      //insertData.append('media_file[]', post_video[0]);

      //is_media = 1;
    }

    //insertData.set('is_media', is_media);

    return axios
      .post(API_URL + "api/post/add_volunteer_post", insertData, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }


  addGoodDonationPost(logged_user_id, dogood_campaign_name, dogood_post_text, goods_details, goods_quantity, dogood_location, post_img, post_video) {

    dogood_post_text = dogood_post_text.replace(/\r?\n/g, '\n');

    const insertData = new FormData();
    insertData.set('user_id', logged_user_id);
    insertData.set('post_type', 7);
    insertData.set('user_type', 1);
    insertData.set('cat_id', 1);
    insertData.set('goods_details', goods_details);
    insertData.set('goods_quantity', goods_quantity);
    insertData.set('location', dogood_location);
    insertData.set('campaign_name', dogood_campaign_name);
    insertData.set('post_text', dogood_post_text);

    var post_text = dogood_post_text;
    var user_post_text_user_tag_arry = post_text.match(/@\S+/g);
    if(user_post_text_user_tag_arry && typeof user_post_text_user_tag_arry !=="undefined" && user_post_text_user_tag_arry.length>0){
      for (var k = 0; k < user_post_text_user_tag_arry.length; k++) {
        insertData.append('tag_user_list', jQuery.trim(user_post_text_user_tag_arry[k].replace('@', '')));
      }
    }else{
      insertData.set('tag_user_list', "");
    }

    /*var post_text_has_tag_arry_donation = dogood_post_text.match(/#\S+/g);
    if(post_text_has_tag_arry_donation && typeof post_text_has_tag_arry_donation !=="undefined" && post_text_has_tag_arry_donation.length>0){
      for (var k = 0; k < post_text_has_tag_arry_donation.length; k++) {
        //insertData.append('tag_key', post_text_has_tag_arry_donation[k]);
      }
    }else{
      //insertData.set('tag_key', "");
    }*/

    //var is_media = 0;

    if(post_img && typeof post_img !=="undefined" && post_img.length>0){
      for (var p = 0; p < post_img.length; p++) {
        insertData.append('media_file', post_img[p]);
      }
      //insertData.append('media_file[]', post_img[0]);
      //is_media = 1;
    }
    
    if(post_video && typeof post_video !=="undefined" && post_video.length>0){
      for (var q = 0; q < post_video.length; q++) {
        insertData.append('media_file', post_video[q]);
      }
      //insertData.append('media_file[]', post_video[0]);
      //is_media = 1;
    }

    //insertData.set('is_media', is_media);

    return axios
      .post(API_URL + "api/post/add_good_donation_post", insertData, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  insertNgoPost(logged_user_id, post_text, post_type, post_img, post_video) {

    post_text = post_text.replace(/\r?\n/g, '\n');
    
    const insertData = new FormData();
    insertData.set('user_id', logged_user_id);
    insertData.set('post_type', post_type);
    insertData.set('user_type', 1);
    insertData.set('post_text', post_text);

    var user_post_text_user_tag_arry = post_text.match(/@\S+/g);
    if(user_post_text_user_tag_arry && typeof user_post_text_user_tag_arry !=="undefined" && user_post_text_user_tag_arry.length>0){
      for (var k = 0; k < user_post_text_user_tag_arry.length; k++) {
        insertData.append('tag_user_list', jQuery.trim(user_post_text_user_tag_arry[k].replace('@', '')));
      }
    }else{
      insertData.set('tag_user_list', "");
    }

    /*var post_text_has_tag_arry_ngo = post_text.match(/#\S+/g);
    if(post_text_has_tag_arry_ngo && typeof post_text_has_tag_arry_ngo !=="undefined" && post_text_has_tag_arry_ngo.length>0){
      for (var k = 0; k < post_text_has_tag_arry_ngo.length; k++) {
        //insertData.append('tag_key', post_text_has_tag_arry_ngo[k]);
      }
    }else{
      //insertData.set('tag_key', "");
    }*/

    //var is_media = 0;

    if(post_img && typeof post_img !=="undefined" && post_img.length>0){
      for (var r = 0; r < post_img.length; r++) {
        insertData.append('media_file', post_img[r]);
      }
      //insertData.append('media_file[]', post_img[0]);
      //is_media = 1;
    }
    
    if(post_video && typeof post_video !=="undefined" && post_video.length>0){
      for (var s = 0; s < post_video.length; s++) {
        insertData.append('media_file', post_video[s]);
      }
      //insertData.append('media_file[]', post_video[0]);

      //is_media = 1;
    }

    //insertData.set('is_media', is_media);

    return axios
      .post(API_URL + "api/post/add_post", insertData, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }


  postLike(user_id, post_id) {

    return axios
     // .post(API_URL + "api/post_like", {user_id, post_id}, { headers: authHeader() })security
      .post(API_URL + "api/post_like", { post_id}, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  postInfo(logged_user_id_var, post_id) {

    return axios
      .get(API_URL + "api/post/post_details_by_id/?post_id="+post_id, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  postInfoModal(logged_user_id_var, post_id) {

    return axios
    //  .get(API_URL + "api/post/post_details_by_id/?post_id="+post_id+"&user_id="+logged_user_id_var, { headers: authHeader() }) security
      .get(API_URL + "api/post/post_details_by_id/?post_id="+post_id, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  postCommentModal(logged_user_id_var, post_id) {

    return axios
      .post(API_URL + "api/comment_list", {post_id}, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  postComment(user_id, post_id, comment) {

    return axios
      //.post(API_URL + "api/post_comment", {user_id, post_id, comment}, { headers: authHeader() }) security
      .post(API_URL + "api/post_comment", { post_id, comment}, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

postLikeModal(logged_user_id_var, post_id) {

    return axios
      .post(API_URL + "api/list_post_like_by_id", {post_id}, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
  postShareModal(logged_user_id_var, post_id) {

    return axios
      .post(API_URL + "api/list_post_share_by_id", {post_id}, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
  postActionPopUpSubmit(user_id, post_id, user_type) {

    const insertData = new FormData();
    //insertData.set('user_id', user_id); commented for security

    //if(user_type && (user_type==="user" || user_type=="user")){
    if(user_type && (user_type==="user")){
      insertData.set('user_type', 2);  
    }else{
      //if(user_type && (user_type==="ngo" || user_type=="ngo")){
      if(user_type && (user_type==="ngo")){
        insertData.set('user_type', 1);
      } 
    }

    insertData.set('post_id', post_id);

    return axios
      .post(API_URL + "api/flagged_post_add", insertData, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  postShareSubmit(logged_user_id_var, user_type, share_text, post_type, share_post_id, is_share) {

    share_text = share_text.replace(/\r?\n/g, '\n');

    const insertData = new FormData();
  //  insertData.set('user_id', logged_user_id_var); security 
    
    //if(user_type && (user_type==="user" || user_type=="user")){
    if(user_type && (user_type==="user")){
      insertData.set('user_type', 2);  
    }else{
      //if(user_type && (user_type==="ngo" || user_type=="ngo")){
      if(user_type && (user_type==="ngo")){
        insertData.set('user_type', 1);
      } 
    }
    insertData.set('post_type', 6);
    insertData.set('share_post_text', share_text);
    insertData.set('post_text', share_text);
    insertData.set('share_post_id', share_post_id);
    insertData.set('is_share', is_share);

    return axios
      .post(API_URL + "api/post/add_share_post", insertData, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  postFileDelete(logged_user_id_var, post_file_id) {
    
    return axios
      .get(API_URL + "api/post/delete_post_media?media_id="+post_file_id, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  postUpdate(logged_user_id_var, post_edit_post_id, post_edit_post_type, post_edit_post_text, post_edit_img, post_edit_video,  post_edit_post_title, post_edit_from_date, post_edit_to_date, post_edit_area_of_interest_id, post_edit_valunteer_no, post_edit_volunteer_location, post_edit_goods_details, post_edit_goods_quantity, post_edit_dogood_location, post_edit_post_ngo_id) {

    post_edit_post_text = post_edit_post_text.replace(/\r?\n/g, '\n');
    
    if(post_edit_post_type && typeof post_edit_post_type !=="undefined" && (post_edit_post_type === "1" || post_edit_post_type === "4" || post_edit_post_type === "5")){

      let updateData = new FormData();
  //    updateData.set('user_id', logged_user_id_var); security
      updateData.set('post_id', post_edit_post_id);
      updateData.set('post_text', post_edit_post_text);

      /*var post_text_has_tag_arry1 = post_edit_post_text.match(/#\S+/g);
      if(post_text_has_tag_arry1 && typeof post_text_has_tag_arry1 !=="undefined" && post_text_has_tag_arry1.length>0){
        for (var k = 0; k < post_text_has_tag_arry1.length; k++) {
          //updateData.append('tag_key', post_text_has_tag_arry1[k]);
        }
      }else{
        //updateData.set('tag_key', "");
      }*/

      //var is_media = 0;

      if(post_edit_img && typeof post_edit_img !=="undefined" && post_edit_img.length>0){
        for (var t = 0; t < post_edit_img.length; t++) {
          updateData.append('media_file', post_edit_img[t]);
        }
        //is_media = 1;
        updateData.set('is_media', 1);
      }
      
      if(post_edit_video && typeof post_edit_video !=="undefined" && post_edit_video.length>0){
        for (var u = 0; u < post_edit_video.length; u++) {
          updateData.append('media_file', post_edit_video[u]);
        }
        //is_media = 1;
        updateData.set('is_media', 1);
      }

      //updateData.set('is_media', is_media);

      /*var user_post_text_user_tag_arry = post_edit_post_text.match(/@\S+/g);
      if(user_post_text_user_tag_arry && typeof user_post_text_user_tag_arry !=="undefined" && user_post_text_user_tag_arry.length>0){
        for (var k = 0; k < user_post_text_user_tag_arry.length; k++) {
          updateData.append('tag_user_list', user_post_text_user_tag_arry[k]);
        }
      }else{
        updateData.set('tag_user_list', "");
      }*/

      return axios
        .post(API_URL + "api/post/update_post", updateData, { headers: authHeader() })
        .then((response) => {
        return response.data;
      });


    }else{

      if(post_edit_post_type && typeof post_edit_post_type !=="undefined" && post_edit_post_type === "2"){


        let updateData = new FormData();
      //  updateData.set('user_id', logged_user_id_var); security
        updateData.set('post_id', post_edit_post_id);
        updateData.set('post_text', post_edit_post_text);
        updateData.set('campaign_name', post_edit_post_title);
        updateData.set('ngo_id', post_edit_post_ngo_id);

        /*var post_text_has_tag_arry2 = post_edit_post_text.match(/#\S+/g);
        if(post_text_has_tag_arry2 && typeof post_text_has_tag_arry2 !=="undefined" && post_text_has_tag_arry2.length>0){
          for (var k = 0; k < post_text_has_tag_arry2.length; k++) {
            //updateData.append('tag_key', post_text_has_tag_arry2[k]);
          }
        }else{
          //updateData.set('tag_key', "");
        }*/

        //var is_media = 0;

        if(post_edit_img && typeof post_edit_img !=="undefined" && post_edit_img.length>0){
          for (var v = 0; v < post_edit_img.length; v++) {
            updateData.append('media_file', post_edit_img[v]);
          }
          //is_media = 1;
          updateData.set('is_media', 1);
        }
        
        if(post_edit_video && typeof post_edit_video !=="undefined" && post_edit_video.length>0){
          for (var w = 0; w < post_edit_video.length; w++) {
            updateData.append('media_file', post_edit_video[w]);
          }
          //is_media = 1;
          updateData.set('is_media', 1);
        }

        //updateData.set('is_media', is_media);

        /*var user_post_text_user_tag_arry = post_edit_post_text.match(/@\S+/g);
        if(user_post_text_user_tag_arry && typeof user_post_text_user_tag_arry !=="undefined" && user_post_text_user_tag_arry.length>0){
          for (var k = 0; k < user_post_text_user_tag_arry.length; k++) {
            updateData.append('tag_user_list', user_post_text_user_tag_arry[k]);
          }
        }else{
          updateData.set('tag_user_list', "");
        }*/

        return axios
          .post(API_URL + "api/post/update_post", updateData, { headers: authHeader() })
          .then((response) => {
          return response.data;
        });


      }else{
         if(post_edit_post_type && typeof post_edit_post_type !=="undefined" && post_edit_post_type === "3"){


          let updateData = new FormData();
         // updateData.set('user_id', logged_user_id_var); security
          updateData.set('post_id', post_edit_post_id);
          updateData.set('post_text', post_edit_post_text);
          updateData.set('campaign_name', post_edit_post_title);
          updateData.set('area_of_interest_id', post_edit_area_of_interest_id);
          updateData.set('valunteer_no', post_edit_valunteer_no);
          updateData.set('location', post_edit_volunteer_location);
          updateData.set('from_date', post_edit_from_date);
          updateData.set('to_date', post_edit_to_date);

          /*var post_text_has_tag_arry3 = post_edit_post_text.match(/#\S+/g);
          if(post_text_has_tag_arry3 && typeof post_text_has_tag_arry3 !=="undefined" && post_text_has_tag_arry3.length>0){
            for (var k = 0; k < post_text_has_tag_arry3.length; k++) {
              //updateData.append('tag_key', post_text_has_tag_arry3[k]);
            }
          }else{
            //updateData.set('tag_key', "");
          }*/

          //var is_media = 0;

          if(post_edit_img && typeof post_edit_img !=="undefined" && post_edit_img.length>0){
            for (var x = 0; x < post_edit_img.length; x++) {
              updateData.append('media_file', post_edit_img[x]);
            }
            //is_media = 1;
            updateData.set('is_media', 1);
          }
          
          if(post_edit_video && typeof post_edit_video !=="undefined" && post_edit_video.length>0){
            for (var y = 0; y < post_edit_video.length; y++) {
              updateData.append('media_file', post_edit_video[y]);
            }
            //is_media = 1;
            updateData.set('is_media', 1);
          }

          //updateData.set('is_media', is_media);

          /*var user_post_text_user_tag_arry = post_edit_post_text.match(/@\S+/g);
          if(user_post_text_user_tag_arry && typeof user_post_text_user_tag_arry !=="undefined" && user_post_text_user_tag_arry.length>0){
            for (var k = 0; k < user_post_text_user_tag_arry.length; k++) {
              updateData.append('tag_user_list', user_post_text_user_tag_arry[k]);
            }
          }else{
            updateData.set('tag_user_list', "");
          }*/

          return axios
            .post(API_URL + "api/post/update_post", updateData, { headers: authHeader() })
            .then((response) => {
            return response.data;
          });


        }else{
          if(post_edit_post_type && typeof post_edit_post_type !=="undefined" && post_edit_post_type === "7"){

            let updateData = new FormData();
          //  updateData.set('user_id', logged_user_id_var); security
            updateData.set('post_id', post_edit_post_id);
            updateData.set('post_text', post_edit_post_text);
            updateData.set('campaign_name', post_edit_post_title);
            updateData.set('goods_details', post_edit_goods_details);
            updateData.set('goods_quantity', post_edit_goods_quantity);
            updateData.set('location', post_edit_dogood_location);

            /*var post_text_has_tag_arry = post_edit_post_text.match(/#\S+/g);
            if(post_text_has_tag_arry && typeof post_text_has_tag_arry !=="undefined" && post_text_has_tag_arry.length>0){
              for (var k = 0; k < post_text_has_tag_arry.length; k++) {
                //updateData.append('tag_key', post_text_has_tag_arry[k]);
              }
            }else{
              //updateData.set('tag_key', "");
            }*/
          
            //var is_media = 0;

            if(post_edit_img && typeof post_edit_img !=="undefined" && post_edit_img.length>0){
              for (var a = 0; a < post_edit_img.length; a++) {
                updateData.append('media_file', post_edit_img[a]);
              }
              //is_media = 1;
              updateData.set('is_media', 1);
            }
            
            if(post_edit_video && typeof post_edit_video !=="undefined" && post_edit_video.length>0){
              for (var b = 0; b < post_edit_video.length; b++) {
                updateData.append('media_file', post_edit_video[b]);
              }
              //is_media = 1;
              updateData.set('is_media', 1);
            }

            /*var user_post_text_user_tag_arry = post_edit_post_text.match(/@\S+/g);
            if(user_post_text_user_tag_arry && typeof user_post_text_user_tag_arry !=="undefined" && user_post_text_user_tag_arry.length>0){
              for (var k = 0; k < user_post_text_user_tag_arry.length; k++) {
                updateData.append('tag_user_list', user_post_text_user_tag_arry[k]);
              }
            }else{
              updateData.set('tag_user_list', "");
            }*/

            //updateData.set('is_media', is_media);

            return axios
              .post(API_URL + "api/post/update_post", updateData, { headers: authHeader() })
              .then((response) => {
              return response.data;
            });


          }
        } 
      }
    }
    /*return axios
      .get(API_URL + "api/post/delete_post_media?media_id="+post_file_id, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });*/
  }

  addToWishList(logged_user_id_var, post_id, ngo_id) {

    const insertData = new FormData();
   // insertData.set('user_id', logged_user_id_var); security
    insertData.set('post_id', post_id);
    insertData.set('ngo_id', ngo_id);

    return axios
      .post(API_URL + "api/add_to_wishList", insertData, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  addIntrestedVolunteer(logged_user_id_var, post_id, ngo_id) {

    const insertData = new FormData();
  //  insertData.set('user_id', logged_user_id_var); security
    insertData.set('post_id', post_id);
    insertData.set('ngo_id', ngo_id);

    return axios
      .post(API_URL + "api/intrested_volunteer", insertData, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  addPostDone(logged_user_id_var, post_id) {

    const insertData = new FormData();
    //insertData.set('user_id', logged_user_id_var);
    insertData.set('post_id', post_id);

    return axios
      .post(API_URL + "api/post/update_is_done", insertData, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  deletePost(logged_user_id_var, post_id) {

    const insertData = new FormData();
    //insertData.set('user_id', logged_user_id_var);
    insertData.set('post_id', post_id);

    return axios
      .post(API_URL + "api/post/delete_post", insertData, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
}

export default new UserPostService();
