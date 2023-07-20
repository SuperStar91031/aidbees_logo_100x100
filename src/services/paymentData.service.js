import axios from "axios";
import authHeader from "./auth-header";

/*import * as globalSettings from './../globalSettings';

const API_URL = globalSettings.API_URL;*/

const API_URL = process.env.REACT_APP_API_URL;

class paymentDataService {
  paymentUpdate(order_id, payment_id) {
    return axios
      .post(API_URL + "api/update_payment_id", { order_id, payment_id }, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

}

export default new paymentDataService();