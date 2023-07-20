import axios from "axios";
import authHeader from "./auth-header";

/*import * as globalSettings from './../globalSettings';

const API_URL = globalSettings.API_URL;*/

const API_URL = process.env.REACT_APP_API_URL;

class AuthService {
  login(email_id, password) {
    return axios
      .post(API_URL + "api/user_login", { email_id, password })
      .then((response) => {

        //if (response.data.token && (response.data.data[0].type==='ngo' || response.data.data[0].type=='ngo') && (response.data.data[0].is_admin_update===1 || response.data.data[0].is_admin_update==="1" )) {
        if (response.data.token && (response.data.data[0].type==='ngo') && (response.data.data[0].is_admin_update===1 || response.data.data[0].is_admin_update==="1" )) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }else{
          //if(response.data.token && (response.data.data[0].type==='user' || response.data.data[0].type=='user')){
          if(response.data.token && (response.data.data[0].type==='user')){
            localStorage.setItem("user", JSON.stringify(response.data));
          }else{
            localStorage.removeItem("user");  
          }
        }

        //return response.data.data;
        return response.data;
      });
  }
  logingoogle(email_id) {
    return axios
      .post(API_URL + "api/user_login_gmail", { email_id })
      .then((response) => {
        
        if (response.data.token && (response.data.data[0].skip!==1 || response.data.data[0].skip==="1" )) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }else{
          localStorage.removeItem("user");
        }

        //return response.data.data;
        return response.data;
      });
  }
update_session(id) {
    return axios
     // .post(API_URL + "api/session_update", { id }) security
     .post(API_URL + "api/session_update",{}, { headers: authHeader() })
      .then((response) => {
        
        //if (response.data.token) {
        if (response.data && typeof response.data !=="undefined" && response.data.length>0) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
  }

  otpCheck(email_id, otp, user_register_otp_token) {
    
    let headers_arry = {};
    headers_arry['otp_token'] = user_register_otp_token;

    return axios
      .post(API_URL + "api/check_otp", {otp}, { headers: headers_arry })
      .then((response) => {
        return response.data;
      });
  }

  otpResend(email_id) {
    return axios
      .post(API_URL + "api/resend_otp", {email_id})
      .then((response) => {
        return response.data;
      });
  }

  changePassword(id, email_id, current_password, password, confirm_password) {
    return axios
      .post(API_URL + "api/change_password", {id, email_id, current_password, password, confirm_password}, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  contactUs(name, number, email, type_query, comment, contactfile) {

    const insertData = new FormData();
    insertData.set('name', name);
    insertData.set('number', number);
    insertData.set('mobile_no', number);
    insertData.set('email', email);
    insertData.set('type_query', type_query);
    insertData.set('comment', comment);

    var is_attachment = 0;

    if(contactfile && typeof contactfile !=="undefined" && contactfile.length>0){
      insertData.append('contactfile', contactfile[0]);
      is_attachment = 1;
    }
    
    insertData.set('is_attachment', is_attachment);
    
    return axios
      .post(API_URL + "api/contact_us", insertData)
      .then((response) => {
        return response.data;
      });
  }

  userRegister(name, email, password, confirm_password, mobile_no) {
    return axios
      .post(API_URL + "api/user_registration", {name, email, password, confirm_password, mobile_no})
      .then((response) => {
        return response.data;
      });
  }

  /*NgoNextRegProcedureOne(id, legal_name, address, pan_no, registration_year, facebook_url, twitter_url, instagram_url, linkedin_url, other_social_media_1, other_social_media_2, head_of_organization, email_head_of_organization, account_name, account_no, ifsc_no, bank_name, skip, next) {
    return axios
      .post(API_URL + "api/ngo_next_reg_procedure", {id, legal_name, address, pan_no, registration_year, facebook_url, twitter_url, instagram_url, linkedin_url, other_social_media_1, other_social_media_2, head_of_organization, email_head_of_organization, account_name, account_no, ifsc_no, bank_name, skip, next})
      .then((response) => {
        return response.data;
      });
  }*/

  userRegisterPageOne(register_user_id, user_reg_profile, reg_username, reg_about_yourself, reg_birth_date, reg_gender, reg_mobile_no, reg_country_id, reg_state_id, reg_city_id) {
  
    const insertData = new FormData();
    insertData.set('id', register_user_id);
    insertData.set('image', user_reg_profile[0]);
    insertData.append('username', reg_username);
    insertData.set('about_yourself', reg_about_yourself);
    insertData.set('birth_date', reg_birth_date);
    insertData.set('gender', reg_gender);
    //insertData.set('mobile_no', reg_mobile_no);
    insertData.set('country_id', reg_country_id);
    insertData.set('state_id', reg_state_id);
    insertData.set('city_id', reg_city_id);
    insertData.set('skip', 1);
    insertData.set('next', 1);
    
    return axios
      .post(API_URL + "api/user_next_reg_procedure", insertData)
      .then((response) => {
        return response.data;
      });
  }

  userRegisterPageTwo(register_user_id, cat_id) {
  
    const insertData = new FormData();
    insertData.set('id', register_user_id);

    if(cat_id && typeof cat_id !=="undefined" && !Array.isArray(cat_id)){
      cat_id = cat_id.split(',');
    }

    if(cat_id && typeof cat_id !=="undefined" && cat_id.length>0){
      for (var l = 0; l < cat_id.length; l++) {  
        insertData.append('cat_id[]', cat_id[l]);
      }  
    }else{
      insertData.set('cat_id[]', 0);
    }

    insertData.set('skip', 1);
    insertData.set('next', 2);
    
    return axios
      .post(API_URL + "api/user_next_reg_procedure", insertData)
      .then((response) => {

        return response.data;
      });
  }

  userRegisterPageThree(register_user_id, ngo_id) {
  
    const insertData = new FormData();
    insertData.set('id', register_user_id);

    if(ngo_id && typeof ngo_id !=="undefined" && !Array.isArray(ngo_id)){
      ngo_id = ngo_id.split(',');
    }
    
    if(ngo_id && typeof ngo_id !=="undefined" && ngo_id.length>0){
      for (var i = 0; i < ngo_id.length; i++) {  
        insertData.append('ngo_id[]', ngo_id[i]);
      }  
    }else{
      insertData.set('ngo_id[]', 0);
    }
    
    insertData.set('skip', 1);
    insertData.set('next', 3);
    
    return axios
      .post(API_URL + "api/user_next_reg_procedure", insertData)
      .then((response) => {

        return response.data;
      });
  }

  userRegisterPageFour(register_user_id, area_expert_id, location_preference, availability_preference) {
  
    const insertData = new FormData();
    insertData.set('id', register_user_id);
    insertData.set('area_expert_id[]', area_expert_id);
    insertData.set('availability_preference', availability_preference);
    insertData.set('location_preference', location_preference);

    insertData.set('skip', 0);
    insertData.set('next', 4);
    
    return axios
      .post(API_URL + "api/user_next_reg_procedure", insertData)
      .then((response) => {

        return response.data;
      });
  }

  /*userRegisterPageTwo(register_user_id, cat_id) {
  
    const insertData = new FormData();
    insertData.set('id', register_user_id);

    if(!Array.isArray(cat_id)){
      cat_id = cat_id.split(',');
    }

    for (var i = 0; i < cat_id.length; i++) {  
      insertData.set('cat_id[]', cat_id[i]);
    }

    insertData.set('skip', 0);
    insertData.set('next', 2);
    
    return axios
      .post(API_URL + "api/user_next_reg_procedure", insertData)
      .then((response) => {
        return response.data;
      });
  }*/

  NgoNextRegProcedureOne(id, legal_name, address, pan_no, registration_year, facebook_url, twitter_url, instagram_url, linkedin_url, other_social_media_1, other_social_media_2, head_of_organization, email_head_of_organization, account_name, account_no, ifsc_no, bank_name, country_id, state_id, city_id, registration_no, whatsapp_no, skip, next, is_pan_addhar_required) {
  
    const insertData = new FormData();
    insertData.set('id', id);
    insertData.set('legal_name', legal_name);
    insertData.set('address', address);
    insertData.set('pan_no', pan_no);
    insertData.set('registration_year', registration_year);
    insertData.set('facebook_url', facebook_url);
    insertData.set('twitter_url', twitter_url);
    insertData.set('instagram_url', instagram_url);
    insertData.set('linkedin_url', linkedin_url);
    insertData.set('other_social_media_1', other_social_media_1);
    insertData.set('other_social_media_2', other_social_media_2);
    insertData.set('head_of_organization', head_of_organization);

    insertData.set('email_head_of_organization', email_head_of_organization);
    insertData.set('account_name', account_name);
    insertData.set('account_no', account_no);
    insertData.set('ifsc_no', ifsc_no);
    insertData.set('bank_name', bank_name);

    insertData.set('country_id', country_id);
    insertData.set('state_id', state_id);
    insertData.set('city_id', city_id);
    insertData.set('registration_no', registration_no);
    insertData.set('whatsapp_no', whatsapp_no);
    
    insertData.set('skip', 1);
    insertData.set('next', 1);
    insertData.set('is_pan_addhar_required', is_pan_addhar_required);
    

    return axios
      .post(API_URL + "api/ngo_next_reg_procedure", insertData)
      .then((response) => {
        return response.data;
      });
  }

  NgoNextRegProcedureTwo(id, skip, next, fy2019_20, register_as_trust, is_pan_no, physical_existance, min_1_year_existance, under_sec12A, fill_it_latest_year, compile_laws, register_under_fcra, stated_rules_aims) {

    const insertData = new FormData();
    insertData.set('id', id);
    insertData.set('skip', 1);
    insertData.set('next', 2);
    insertData.set('fy2019_20', fy2019_20);
    insertData.set('register_as_trust', register_as_trust);
    insertData.set('is_pan_no', is_pan_no);
    insertData.set('physical_existance', physical_existance);
    insertData.set('min_1_year_existance', min_1_year_existance);
    insertData.set('under_sec12A', under_sec12A);
    insertData.set('fill_it_latest_year', fill_it_latest_year);
    insertData.set('compile_laws', compile_laws);
    insertData.set('register_under_fcra', register_under_fcra);
    insertData.set('stated_rules_aims', stated_rules_aims);

    return axios
      .post(API_URL + "api/ngo_next_reg_procedure", insertData)
      .then((response) => {
        return response.data;
      });
  }

  NgoNextRegProcedureThree(id, skip, next, ngo_certification, address_proof, fcra_certificate, latest_fcra, g80_certificate, a12_certificate, ITR_V, consolidated_audited_accounts, trust_deed, income_tax) {

    const insertData = new FormData();
    insertData.set('id', id);
    insertData.set('skip', 1);
    insertData.set('next', 3);
    if(ngo_certification && typeof ngo_certification !=="undefined" && ngo_certification.length>0){
      insertData.append('ngo_certification', ngo_certification[0]);  
    }else{
      insertData.append('ngo_certification', "");
    }

    if(address_proof && typeof address_proof !=="undefined" && address_proof.length>0){
      insertData.append('address_proof', address_proof[0]);  
    }else{
      insertData.append('address_proof', "");
    }

    if(fcra_certificate && typeof fcra_certificate !=="undefined" && fcra_certificate.length>0){
      insertData.append('fcra_certificate', fcra_certificate[0]);  
    }else{
      insertData.append('fcra_certificate', "");
    }

    if(latest_fcra && typeof latest_fcra !=="undefined" && latest_fcra.length>0){
      insertData.append('latest_fcra', latest_fcra[0]);  
    }else{
      insertData.append('latest_fcra', "");
    }

    if(g80_certificate && typeof g80_certificate !=="undefined" && g80_certificate.length>0){
      insertData.append('g80_certificate', g80_certificate[0]);  
    }else{
      insertData.append('g80_certificate', "");
    }

    if(a12_certificate && typeof a12_certificate !=="undefined" && a12_certificate.length>0){
      insertData.append('a12_certificate', a12_certificate[0]);  
    }else{
      insertData.append('a12_certificate', "");
    }

    if(ITR_V && typeof ITR_V !=="undefined" && ITR_V.length>0){
      insertData.append('ITR_V', ITR_V[0]);  
    }else{
      insertData.append('ITR_V', "");
    }

    if(trust_deed && typeof trust_deed !=="undefined" && trust_deed.length>0){
      insertData.append('trust_deed', trust_deed[0]);  
    }else{
      insertData.append('trust_deed', "");
    }

    if(consolidated_audited_accounts && typeof consolidated_audited_accounts !=="undefined" && consolidated_audited_accounts.length>0){
      insertData.append('consolidated_audited_accounts', consolidated_audited_accounts[0]);  
    }else{
      insertData.append('consolidated_audited_accounts', "");
    }

    if(income_tax && typeof income_tax !=="undefined" && income_tax.length>0){
      insertData.append('income_tax', income_tax[0]);  
    }else{
      insertData.append('income_tax', "");
    }
    
    /*insertData.append('ngo_certification', ngo_certification[0]);
    insertData.append('address_proof', address_proof[0]);
    insertData.append('fcra_certificate', fcra_certificate[0]);
    insertData.append('latest_fcra', latest_fcra[0]);
    insertData.append('g80_certificate', g80_certificate[0]);
    insertData.append('a12_certificate', a12_certificate[0]);
    insertData.append('ITR_V', ITR_V[0]);
    insertData.append('trust_deed', trust_deed[0]);
    insertData.append('consolidated_audited_accounts', consolidated_audited_accounts[0]);
    insertData.append('income_tax', income_tax[0]);*/

    return axios
      .post(API_URL + "api/ngo_next_reg_procedure", insertData)
      .then((response) => {
        return response.data;
      });
  }

  NgoNextRegProcedureFour(id, skip, next, cat_id, celebrity_name, celebrity_desc, celebrity_image, year_var, desc_var, username, about_us, image, cover_image, ceo_speech, video) {

    const insertData = new FormData();
    insertData.set('id', id);
    insertData.set('skip', 0);
    insertData.set('next', 4);
    insertData.set('is_complete', 1);

    if(cat_id && typeof cat_id !=="undefined" && !Array.isArray(cat_id)){
      cat_id = cat_id.split(',');
    }

    if(cat_id && typeof cat_id !=="undefined" && cat_id.length>0){
      for (var i = 0; i < cat_id.length; i++) {  
        insertData.append('cat_id[]', cat_id[i]);
      }
    }else{
      insertData.set('cat_id[]', 0);
    }
    

    if(year_var && typeof year_var !=="undefined" && !Array.isArray(year_var)){
      year_var = year_var.split(',');
    }

    if(year_var && typeof year_var !=="undefined" && year_var.length>0){
      for (var j = 0; j < year_var.length; j++) {  
        insertData.append('year[]', year_var[j]);
      }
    }else{
      insertData.set('year[]', 0);
    }

    if(desc_var && typeof desc_var !=="undefined" && !Array.isArray(desc_var)){
      desc_var = desc_var.split(',');
    }

    if(desc_var && typeof desc_var !=="undefined" && desc_var.length>0){
      for (var k = 0; k < desc_var.length; k++) {  
        insertData.append('desc[]', desc_var[k]);
      }
    }else{
      insertData.set('desc[]', 0);
    }

    

    insertData.set('celebrity_name', celebrity_name);
    insertData.set('celebrity_desc', celebrity_desc);
    insertData.set('celebrity_image', celebrity_image[0]);
    
    insertData.set('about_us', about_us);
    insertData.set('username', username);
    insertData.append('image', image[0]);
    insertData.append('cover_image', cover_image[0]);
    insertData.append('ceo_speech', ceo_speech[0]);
    insertData.append('video', video[0]);

    return axios
      .post(API_URL + "api/ngo_next_reg_procedure", insertData)
      .then((response) => {
        return response.data;
      });
  }

  ngoRegister(name, email_id, password, confirm_password, contact_person, mobile_no) {
    return axios
      .post(API_URL + "api/ngo_registration", {name, email_id, password, confirm_password, contact_person,mobile_no})
      .then((response) => {
        
        return response.data;
    });
  }

  forgotPassword(email_id) {
    return axios
      .post(API_URL + "api/forgot_password", {email_id})
      .then((response) => {
        
        return response.data;
    });
  }

  forgotPasswordOtpVrf(email_id, otp, forgot_pass_token) {
    let headers_arry = {};
    headers_arry['forgot_pass_token'] = forgot_pass_token;
    return axios
      .post(API_URL + "api/forgot_password_otp_verification", {otp}, { headers: headers_arry })
      .then((response) => {
        
        return response.data;
    });
  }

  forgotPasswordSave(new_password, confirm_password, email_id, forgot_pass_token) {
    let headers_arry = {};
    headers_arry['forgot_pass_token'] = forgot_pass_token;
    return axios
      .post(API_URL + "api/save_new_password", {new_password, confirm_password}, { headers: headers_arry })
      .then((response) => {
        
        return response.data;
    });
  }
}

export default new AuthService();
