import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

class AdminLeadService {
  LeadAdd(first_name, last_name, mobile, email_id, lead_source, product, description,lead_status) {
    const insertData = new FormData();
    insertData.set('first_name', first_name);
    insertData.set('last_name', last_name);
    insertData.set('mobile', mobile);
    insertData.set('email_id', email_id);
    insertData.set('lead_source', lead_source);
    insertData.set('product', product);
    insertData.set('description', description);
    insertData.set('lead_status', lead_status);
   
    return axios
      .post(API_URL + "api/v1/admin/lead/add", insertData )
      .then((response) => {
        return response.data;
      });
  }


   


}

export default new AdminLeadService();