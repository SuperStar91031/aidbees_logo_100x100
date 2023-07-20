import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

class AdminProductService {
 


  ProductList() {
    
    return axios
      .get(API_URL + "api/v1/admin/product/list")
      .then((response) => {
        return response.data;
      });
  }


}

export default new AdminProductService();