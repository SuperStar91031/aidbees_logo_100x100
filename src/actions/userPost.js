import {
  DATA_SUCCESS,
  DATA_FAIL,
  SET_MESSAGE,
} from "./types";

import UserPostService from "../services/userPost.service";

export const insertPost = (logged_user_id, post_text, post_date, post_img, post_video) => (dispatch) => {
  return UserPostService.insertPost(logged_user_id, post_text, post_date, post_img, post_video).then(
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

export const insertDonationPost = (logged_user_id, post_text, file_name) => (dispatch) => {
  return UserPostService.insertDonationPost(logged_user_id, post_text, file_name).then(
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

export const insertCampaign = (logged_user_id, campaign_cat_id, campaign_sub_cat_id, campaign_ngo_id, user_campaign_name, campaign_text, campaign_date, campaign_img, campaign_video, target_amnt) => (dispatch) => {
  return UserPostService.insertCampaign(logged_user_id, campaign_cat_id, campaign_sub_cat_id, campaign_ngo_id, user_campaign_name, campaign_text, campaign_date, campaign_img, campaign_video, target_amnt).then(
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

export const addValunteerPost = (logged_user_id, campaign_name, campaign_post_text, area_of_interest_id, valunteer_no, location, from_date, to_date, post_img, post_video) => (dispatch) => {
  return UserPostService.addValunteerPost(logged_user_id, campaign_name, campaign_post_text, area_of_interest_id, valunteer_no, location, from_date, to_date, post_img, post_video).then(
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

export const addGoodDonationPost = (logged_user_id, dogood_campaign_name, dogood_post_text, goods_details, goods_quantity, dogood_location, post_img, post_video) => (dispatch) => {
  return UserPostService.addGoodDonationPost(logged_user_id, dogood_campaign_name, dogood_post_text, goods_details, goods_quantity, dogood_location, post_img, post_video).then(
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

export const insertNgoPost = (logged_user_id, post_text, post_type, post_img, post_video) => (dispatch) => {
  return UserPostService.insertNgoPost(logged_user_id, post_text, post_type, post_img, post_video).then(
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


export const postLike = (user_id, post_id) => (dispatch) => {
  return UserPostService.postLike(user_id, post_id).then(
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

export const postInfo = (logged_user_id_var, post_id) => (dispatch) => {
  return UserPostService.postInfo(logged_user_id_var, post_id).then(
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

export const postInfoModal = (logged_user_id_var, post_id) => (dispatch) => {
  return UserPostService.postInfoModal(logged_user_id_var, post_id).then(
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

export const postCommentModal = (logged_user_id_var, post_id) => (dispatch) => {
  return UserPostService.postCommentModal(logged_user_id_var, post_id).then(
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
export const postLikeModal = (logged_user_id_var, post_id) => (dispatch) => {
  return UserPostService.postLikeModal(logged_user_id_var, post_id).then(
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

export const postShareModal = (logged_user_id_var, post_id) => (dispatch) => {
  return UserPostService.postShareModal(logged_user_id_var, post_id).then(
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


export const postComment = (user_id, post_id, comment) => (dispatch) => {
  return UserPostService.postComment(user_id, post_id, comment).then(
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

export const postActionPopUpSubmit = (user_id, post_id, user_type) => (dispatch) => {
  return UserPostService.postActionPopUpSubmit(user_id, post_id, user_type).then(
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

export const postShareSubmit = (logged_user_id_var, user_type, share_text, post_type, share_post_id, is_share) => (dispatch) => {
  return UserPostService.postShareSubmit(logged_user_id_var, user_type, share_text, post_type, share_post_id, is_share).then(
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

export const postFileDelete = (logged_user_id_var, post_file_id) => (dispatch) => {
  return UserPostService.postFileDelete(logged_user_id_var, post_file_id).then(
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


export const postUpdate = (logged_user_id_var, post_edit_post_id, post_edit_post_type, post_edit_post_text, post_edit_img, post_edit_video,  post_edit_post_title, post_edit_from_date, post_edit_to_date, post_edit_area_of_interest_id, post_edit_valunteer_no, post_edit_volunteer_location, post_edit_goods_details, post_edit_goods_quantity, post_edit_dogood_location, post_edit_post_ngo_id) => (dispatch) => {
  return UserPostService.postUpdate(logged_user_id_var, post_edit_post_id, post_edit_post_type, post_edit_post_text, post_edit_img, post_edit_video,  post_edit_post_title, post_edit_from_date, post_edit_to_date, post_edit_area_of_interest_id, post_edit_valunteer_no, post_edit_volunteer_location, post_edit_goods_details, post_edit_goods_quantity, post_edit_dogood_location, post_edit_post_ngo_id).then(
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


export const addToWishList = (logged_user_id_var, post_id, ngo_id) => (dispatch) => {
  return UserPostService.addToWishList(logged_user_id_var, post_id, ngo_id).then(
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

export const addIntrestedVolunteer = (logged_user_id_var, post_id, ngo_id) => (dispatch) => {
  return UserPostService.addIntrestedVolunteer(logged_user_id_var, post_id, ngo_id).then(
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

export const addPostDone = (logged_user_id_var, post_id) => (dispatch) => {
  return UserPostService.addPostDone(logged_user_id_var, post_id).then(
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

export const deletePost = (logged_user_id_var, post_id) => (dispatch) => {
  return UserPostService.deletePost(logged_user_id_var, post_id).then(
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

