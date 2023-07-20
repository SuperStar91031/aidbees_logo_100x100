import {
    DATA_SUCCESS,
    DATA_FAIL,
    SET_MESSAGE,
  } from "./types";
  
  import AdminLeadService from "../services/AdminLead.Service";
  
  export const LeadAdd = (first_name, last_name, mobile, email_id, lead_source, product, description,lead_status) => (dispatch) => {
    return AdminLeadService.LeadAdd(first_name, last_name, mobile, email_id, lead_source, product, description,lead_status).then(
      (response) => {
        dispatch({
          type: DATA_SUCCESS,
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
          type: DATA_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  
 
  
  