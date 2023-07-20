import {
  DATA_SUCCESS,
  DATA_FAIL,
  SET_MESSAGE,
} from "./types";

import NgoAllDonationService from "../services/ngoAllDonation.service";

  export const NgoAllFilterDonation = (user_id,last_id,page_records,from_date,to_date,name,amount) => (dispatch) => {
  return NgoAllDonationService.NgoAllFilterDonation(user_id,last_id,page_records,from_date,to_date,name,amount).then(
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

 export const NgoFilterDonation = (user_id,last_id,page_records,from_date,to_date,name,amount) => (dispatch) => {
  return NgoAllDonationService.NgoFilterDonation(user_id,last_id,page_records,from_date,to_date,name,amount).then(
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

export const NgoGoodFilterDonation = (user_id,last_id,page_records,from_date,to_date,name,amount) => (dispatch) => {
  return NgoAllDonationService.NgoGoodFilterDonation(user_id,last_id,page_records,from_date,to_date,name,amount).then(
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

  export const NgoDoGoodListingFilterDonation = (user_id,last_id,page_records,from_date,to_date,name) => (dispatch) => {
  return NgoAllDonationService.NgoDoGoodListingFilterDonation(user_id,last_id,page_records,from_date,to_date,name).then(
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
