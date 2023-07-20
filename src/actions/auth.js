import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  OTP_SUCCESS,
  OTP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  DATA_SUCCESS,
  DATA_FAIL,
} from "./types";

import AuthService from "../services/auth.service";

export const userRegister = (name, email, password, confirm_password, mobile_no) => (dispatch) => {
  return AuthService.userRegister(name, email, password, confirm_password, mobile_no).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve(response);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }
  );
};

export const ngoRegister = (name, email_id, password, confirm_password, contact_person, mobile_no) => (dispatch) => {
  return AuthService.ngoRegister(name, email_id, password, confirm_password, contact_person, mobile_no).then(
    (response) => {
      
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve(response);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }
  );
};


export const changePassword = (logged_user_id, email_id, current_password, password, confirm_password) => (dispatch) => {
  return AuthService.changePassword(logged_user_id, email_id, current_password, password, confirm_password).then(
    (response) => {
      
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve(response);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }
  );
};

export const contactUs = (contactname, contactnumber, contactmail, contacttype, contactcommit, contactfile) => (dispatch) => {
  return AuthService.contactUs(contactname, contactnumber, contactmail, contacttype, contactcommit, contactfile).then(
    (response) => {
      
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve(response);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }
  );
};

export const userRegisterPageOne = (register_user_id, user_reg_profile, reg_username, reg_about_yourself, reg_birth_date, reg_gender, reg_mobile_no, reg_country_id, reg_state_id, reg_city_id) => (dispatch) => {
  return AuthService.userRegisterPageOne(register_user_id, user_reg_profile, reg_username, reg_about_yourself, reg_birth_date, reg_gender, reg_mobile_no, reg_country_id, reg_state_id, reg_city_id).then(
    (response) => {
      
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve(response);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }
  );
};


export const userRegisterPageTwo = (register_user_id, cat_id) => (dispatch) => {
  return AuthService.userRegisterPageTwo(register_user_id, cat_id).then(
    (response) => {
      
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve(response);
    },
    (error) => {

      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }
  );
};

export const userRegisterPageThree = (register_user_id, ngo_id) => (dispatch) => {
  return AuthService.userRegisterPageThree(register_user_id, ngo_id).then(
    (response) => {
      
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve(response);
    },
    (error) => {

      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }
  );
};

export const userRegisterPageFour = (register_user_id, area_expert_id, location_preference, availability_preference) => (dispatch) => {
  return AuthService.userRegisterPageFour(register_user_id, area_expert_id, location_preference, availability_preference).then(
    (response) => {
      
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve(response);
    },
    (error) => {

      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }
  );
};

/*export const userRegisterPageTwo = (register_user_id, cat_id) => (dispatch) => {
  return AuthService.userRegisterPageTwo(register_user_id, cat_id).then(
    (response) => {

      console.log("ngo reg auth response: ");
      console.log(response);
      
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve(response);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};*/

export const NgoNextRegProcedureOne = (id, legal_name, address, pan_no, registration_year, facebook_url, twitter_url, instagram_url, linkedin_url, other_social_media_1, other_social_media_2, head_of_organization, email_head_of_organization, account_name, account_no, ifsc_no, bank_name, country_id, state_id, city_id, registration_no, whatsapp_no, skip, next, is_pan_addhar_required) => (dispatch) => {
  return AuthService.NgoNextRegProcedureOne(id, legal_name, address, pan_no, registration_year, facebook_url, twitter_url, instagram_url, linkedin_url, other_social_media_1, other_social_media_2, head_of_organization, email_head_of_organization, account_name, account_no, ifsc_no, bank_name, country_id, state_id, city_id, registration_no, whatsapp_no, skip, next, is_pan_addhar_required).then(
    (response) => {
      
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve(response);
    },
    (error) => {
      
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }
  );
};


export const NgoNextRegProcedureTwo = (id, skip, next, fy2019_20, register_as_trust, is_pan_no, physical_existance, min_1_year_existance, under_sec12A, fill_it_latest_year, compile_laws, register_under_fcra, stated_rules_aims) => (dispatch) => {
  return AuthService.NgoNextRegProcedureTwo(id, skip, next, fy2019_20, register_as_trust, is_pan_no, physical_existance, min_1_year_existance, under_sec12A, fill_it_latest_year, compile_laws, register_under_fcra, stated_rules_aims).then(
    (response) => {
      
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve(response);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }
  );
};

export const NgoNextRegProcedureThree = (id, skip, next, ngo_certification, address_proof, fcra_certificate, latest_fcra, g80_certificate, a12_certificate, ITR_V, consolidated_audited_accounts, trust_deed, income_tax) => (dispatch) => {
  return AuthService.NgoNextRegProcedureThree(id, skip, next, ngo_certification, address_proof, fcra_certificate, latest_fcra, g80_certificate, a12_certificate, ITR_V, consolidated_audited_accounts, trust_deed, income_tax).then(
    (response) => {
      
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve(response);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }
  );
};

export const NgoNextRegProcedureFour = (id, skip, next, cat_id, celebrity_name, celebrity_desc, celebrity_image, year_var, desc_var, username, about_us, image, cover_image, ceo_speech, video) => (dispatch) => {
  return AuthService.NgoNextRegProcedureFour(id, skip, next, cat_id, celebrity_name, celebrity_desc, celebrity_image, year_var, desc_var, username, about_us, image, cover_image, ceo_speech, video).then(
    (response) => {
      
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve(response);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }
  );
};

export const otpCheck = (email_id, otp, user_register_otp_token) => (dispatch) => {
  return AuthService.otpCheck(email_id, otp, user_register_otp_token).then(
    (response) => {
      dispatch({
        type: DATA_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.message,
      });

      return Promise.resolve(response);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: DATA_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }
    /*(data) => {
      dispatch({
        type: OTP_SUCCESS,
        payload: { otp: data },
      });

      return Promise.resolve(data);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: OTP_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }*/
  );
};

export const otpResend = (email_id) => (dispatch) => {
  return AuthService.otpResend(email_id).then(
    (data) => {
      dispatch({
        type: OTP_SUCCESS,
        payload: { otp: data },
      });

      return Promise.resolve(data);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: OTP_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }
  );
};

export const login = (username, password) => (dispatch) => {
  return AuthService.login(username, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });
      
      return Promise.resolve(data);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }
  );
};

export const loginGoogle = (username) => (dispatch) => {
  return AuthService.logingoogle(username).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });
      
      return Promise.resolve(data);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }
  );
};

export const update_session = (user_id) => (dispatch) => {
  return AuthService.update_session(user_id).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });
      
      return Promise.resolve(data);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }
  );
};


export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};


export const forgotPassword = (email_id) => (dispatch) => {
  return AuthService.forgotPassword(email_id).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve(response);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }
  );
};

export const forgotPasswordOtpVrf = (email_id, otp, forgot_pass_token) => (dispatch) => {
  return AuthService.forgotPasswordOtpVrf(email_id, otp, forgot_pass_token).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve(response);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }
  );
};

export const forgotPasswordSave = (new_password, confirm_password, email_id, forgot_pass_token) => (dispatch) => {
  return AuthService.forgotPasswordSave(new_password, confirm_password, email_id, forgot_pass_token).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve(response);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }
  );
};