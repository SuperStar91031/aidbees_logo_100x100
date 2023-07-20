import {
    DATA_SUCCESS,
    DATA_FAIL,
    SET_MESSAGE,
  } from "./types";
  
  import AdminProductService from "../services/AdminProduct.Service";
  
 
  
  
  export const ProductList = () => (dispatch) => {
    return AdminProductService.ProductList().then(
      (response) => {
        console.log("log in action response", response.data);
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
  
  
  
  
  
  
  
  