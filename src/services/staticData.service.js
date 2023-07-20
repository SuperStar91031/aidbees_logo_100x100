import axios from "axios";
import authHeader from "./auth-header";

/*import * as globalSettings from './../globalSettings';

const API_URL = globalSettings.API_URL;*/

const API_URL = process.env.REACT_APP_API_URL;

class staticDataService {
  catListFun() {

    return axios
      .get(API_URL + "api/category_list", { } )
      .then((response) => {
        return response.data;
      });
  }

  subCatListFun(cat_id) {

    return axios
      .post(API_URL + "api/sub_category_list", { cat_id }, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  countryListFun() {

    return axios
      .get(API_URL + "api/before_log_country_list", { } )
      .then((response) => {
        return response.data;
      });
  }

  statesListFun(country_id) {

    return axios
      .post(API_URL + "api/before_log_states_list", { country_id } )
      .then((response) => {
        return response.data;
      });
  }

  cityListFun(country_id, state_id) {

    return axios
      .post(API_URL + "api/before_log_city_list", { country_id, state_id } )
      .then((response) => {
        return response.data;
      });
  }
  cityList() {

    return axios
      .get(API_URL + "api/admin/city/all_city_list")
      .then((response) => {
        return response.data;
      });
  }
  AreaExpertiseListFun() {

    return axios
      .get(API_URL + "api/user_area_expertise_list", { } )
      .then((response) => {
        return response.data;
      });
  }
  
  availabilityPreList() {

    return axios
      .get(API_URL + "api/user_availability_List")
      .then((response) => {
        return response.data;
      });
  }
  
  AvailabilityListFun() {

    return axios
      .get(API_URL + "api/user_availability_List", { } )
      .then((response) => {
        return response.data;
      });
  }

  ngoList(cat_id) {

    if(!Array.isArray(cat_id)){
      cat_id = cat_id.split(',');
    }

    const insertData = new FormData();

    for (var i = 0; i < cat_id.length; i++) { 
      insertData.append('cat_id[]', cat_id[i]);
    }

    return axios
      .post(API_URL + "api/ngo_filter_by_cat", insertData )
      .then((response) => {
        return response.data;
      });
  }

  contactUsTypeList() {

    return axios
      .get(API_URL + "api/contact_us/list", {} )
      .then((response) => {
        return response.data;
      });
  }

  AllUserNgoListFilter(name) {

    return axios
      .post(API_URL + "api/user_ngo_list_on_filter", {name} )
      .then((response) => {
        return response.data;
      });
  }


  indexHome() {
    return axios
      .get(API_URL + "api/banner/indexhome", { } )
      .then((response) => {
        return response.data;
      });
  }

  userHome() {
    return axios
      .get(API_URL + "api/banner/userhome", { } )
      .then((response) => {
        return response.data;
      });
  }

  ngoHome() {
    return axios
      .get(API_URL + "api/banner/ngohome", { } )
      .then((response) => {
        return response.data;
      });
  }
}

export default new staticDataService();