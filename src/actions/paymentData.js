import {
  DATA_SUCCESS,
  DATA_FAIL,
  SET_MESSAGE,
} from "./types";

import PaymentDataService from "../services/paymentData.service";


export const paymentUpdate = (order_id, payment_id) => (dispatch) => {
  return PaymentDataService.paymentUpdate(order_id, payment_id).then(
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