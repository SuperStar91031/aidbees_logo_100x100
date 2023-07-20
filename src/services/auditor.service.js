import axios from "axios";
import authHeader from "./auth-header";

/*import * as globalSettings from './../globalSettings';

const API_URL = globalSettings.API_URL;*/

const API_URL = process.env.REACT_APP_API_URL;

class CountryService {
  insert(name, contact_no, email, pan_no, address, education, username, password, certificate) {
    
    const insertData = new FormData();
    insertData.set('name', name);
    insertData.set('contact_no', contact_no);
    insertData.set('email', email);
    insertData.set('pan_no', pan_no);
    insertData.set('address', address);
    insertData.set('education', education);
    insertData.set('username', username);
    insertData.set('password', password);
    insertData.append('certificate', certificate[0]);

    return axios
      .post(API_URL + "Api/auditor/add", insertData, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  getList() {
    return axios
      .get(API_URL + "Api/auditor/List", { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  getInfo(auditor_id) {
    return axios
      .post(API_URL + "Api/auditor/getInfo", {auditor_id}, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  update(auditor_id, name, contact_no, email, pan_no, address, education, username, certificate) {
    const updateData = new FormData();
    updateData.set('auditor_id', auditor_id);
    updateData.set('name', name);
    updateData.set('contact_no', contact_no);
    updateData.set('email', email);
    updateData.set('pan_no', pan_no);
    updateData.set('address', address);
    updateData.set('education', education);
    updateData.set('username', username);
    updateData.append('certificate', certificate[0]);

    return axios
      .post(API_URL + "Api/auditor/update", updateData, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  delete(auditor_id) {
    return axios
      .post(API_URL + "Api/auditor/delete", { auditor_id }, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
}

export default new CountryService();
