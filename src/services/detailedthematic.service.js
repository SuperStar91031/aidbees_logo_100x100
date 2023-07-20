import axios from "axios";
import authHeader from "./auth-header";

/*import * as globalSettings from './../globalSettings';

const API_URL = globalSettings.API_URL;*/

const API_URL = process.env.REACT_APP_API_URL;

class DetailedThematicService {
  insert(sub_cat_name, sub_cat_image, cat_id) {

    const insertData = new FormData();
    insertData.set('sub_cat_name', sub_cat_name);
    insertData.append('sub_cat_image', sub_cat_image[0]);
    insertData.set('cat_id', cat_id);
    
    return axios
      .post(API_URL + "Api/sub_category/add", insertData, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  getList() {
    return axios
      .get(API_URL + "Api/sub_category/List", { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  getInfo(sub_cat_id) {
    return axios
      .post(API_URL + "Api/sub_category/getInfo", {sub_cat_id}, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  update(sub_cat_id, sub_cat_name, sub_cat_image, cat_id) {
    const updateData = new FormData();
    updateData.set('sub_cat_id', sub_cat_id);
    updateData.set('sub_cat_name', sub_cat_name);
    updateData.append('sub_cat_image', sub_cat_image[0]);
    updateData.set('cat_id', cat_id);

    return axios
      .post(API_URL + "Api/sub_category/update", updateData, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  delete(sub_cat_id) {
    return axios
      .post(API_URL + "Api/sub_category/delete", { sub_cat_id }, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
}

export default new DetailedThematicService();