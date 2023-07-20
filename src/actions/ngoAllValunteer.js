import {
  DATA_SUCCESS,
  DATA_FAIL,
  SET_MESSAGE,
} from "./types";

import NgoAllValunteerService from "../services/ngoAllValunteer.service";

  export const NgoFilterValunteer = (user_id,last_id,page_records,from_date,to_date,location,area_of_interest_id) => (dispatch) => {
  return NgoAllValunteerService.NgoFilterValunteer(user_id,last_id,page_records,from_date,to_date,location,area_of_interest_id).then(
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

export const NgoFilterUserValunteer = (user_id,last_id,page_records,from_date,to_date,name,area_of_interest_id) => (dispatch) => {
  return NgoAllValunteerService.NgoFilterUserValunteer(user_id,last_id,page_records,from_date,to_date,name,area_of_interest_id).then(
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


  export const NgoInterestedFilterValunteer = (user_id,last_id,page_records,from_date,to_date,location,area_of_interest_id) => (dispatch) => {
  return NgoAllValunteerService.NgoInterestedFilterValunteer(user_id,last_id,page_records,from_date,to_date,location,area_of_interest_id).then(
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


  export const NgoListingFilterValunteer = (user_id,last_id,page_records,from_date,to_date,location,area_of_interest_id) => (dispatch) => {
  return NgoAllValunteerService.NgolistingFilterValunteer(user_id,last_id,page_records,from_date,to_date,location,area_of_interest_id).then(
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

export const NgoRecentValunteer = (user_id, last_id,page_records) => (dispatch) => {
  return NgoAllValunteerService.NgoRecentValunteer(user_id, last_id,page_records).then(
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

export const NgoRecentTestimonial = (user_id, last_id,page_records) => (dispatch) => {
  return NgoAllValunteerService.NgoRecentTestimonial(user_id, last_id,page_records).then(
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