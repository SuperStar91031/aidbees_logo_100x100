import axios from "axios";
import authHeader from "./auth-header";

/*import * as globalSettings from './../globalSettings';

const API_URL = globalSettings.API_URL;*/

const API_URL = process.env.REACT_APP_API_URL;

class ThematicService {
  insert(cat_name, cat_image) {

    const insertData = new FormData();
    insertData.set('cat_name', cat_name);
    insertData.append('cat_image', cat_image[0]);

    return axios
      .post(API_URL + "Api/category/add", insertData, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  getList() {
    return axios
      .get(API_URL + "Api/category/List", { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  getInfo(cat_id) {
    return axios
      .post(API_URL + "Api/category/getInfo", {cat_id}, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  update(cat_id, cat_name, cat_image) {
    const updateData = new FormData();
    updateData.set('cat_id', cat_id);
    updateData.set('cat_name', cat_name);
    updateData.append('cat_image', cat_image[0]);

    return axios
      .post(API_URL + "Api/category/update", updateData, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  delete(cat_id) {
    return axios
      .post(API_URL + "Api/category/delete", { cat_id }, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
}

export default new ThematicService();