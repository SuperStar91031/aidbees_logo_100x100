import axios from "axios";
import authHeader from "./auth-header";

import * as globalSettings from './../globalSettings';

const API_URL = globalSettings.API_URL;

class StateService {
  insert(country_id, state_name) {
    return axios
      .post(API_URL + "api/state/add", { country_id, state_name }, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  getList() {
    return axios
      .get(API_URL + "api/state/List", { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  getInfo(state_id) {
    return axios
      .post(API_URL + "api/admin/state/state_getinfo", {state_id}, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  update(state_id, state_name, country_id) {
    return axios
      .post(API_URL + "api/state/update", { state_id, state_name, country_id }, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  delete(state_id) {
    return axios
      .post(API_URL + "api/state/delete", { state_id }, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  getInfoForNgo(state_id) {
    return axios
      .post(API_URL + "api/admin/state/state_getinfo", {state_id}, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
}

export default new StateService();