import {
  DATA_SUCCESS,
  DATA_FAIL,
  SET_MESSAGE,
} from "./types";

import staticDataService from "../services/staticData.service";

export const catListFun = () => (dispatch) => {
  return staticDataService.catListFun().then(
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

      return Promise.reject(error);
    }
  );
};

export const subCatListFun = (filterCatID) => (dispatch) => {
  return staticDataService.subCatListFun(filterCatID).then(
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

      return Promise.reject(error);
    }
  );
};


export const AreaExpertiseList = () => (dispatch) => {
  return staticDataService.AreaExpertiseListFun().then(
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

      return Promise.reject(error);
    }
  );
};

export const countryListFun = () => (dispatch) => {
  return staticDataService.countryListFun().then(
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

      return Promise.reject(error);
    }
  );
};

export const statesListFun = (country_id) => (dispatch) => {
  return staticDataService.statesListFun(country_id).then(
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

      return Promise.reject(error);
    }
  );
};

export const cityListFun = (country_id, state_id) => (dispatch) => {
  return staticDataService.cityListFun(country_id, state_id).then(
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

      return Promise.reject(error);
    }
  );
};

export const ngoList = (filterCatID) => (dispatch) => {
  return staticDataService.ngoList(filterCatID).then(
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

      return Promise.reject(error);
    }
  );
};

export const contactUsTypeList = () => (dispatch) => {
  return staticDataService.contactUsTypeList().then(
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

      return Promise.reject(error);
    }
  );
};

export const AllCityList = () => (dispatch) => {
  return staticDataService.cityList().then(
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
      return Promise.reject(error);
    }
  );
};

export const AvailabilityPreList = () => (dispatch) => {
  return staticDataService.availabilityPreList().then(
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
      return Promise.reject(error);
    }
  );
};

export const AllUserNgoListFilter = (filter_str) => (dispatch) => {
  return staticDataService.AllUserNgoListFilter(filter_str).then(
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
      return Promise.reject(error);
    }
  );

  };

  export const indexHome = () => (dispatch) => {
  return staticDataService.indexHome().then(
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
      return Promise.reject(error);
    }
  );
  };

  export const userHome = () => (dispatch) => {
  return staticDataService.userHome().then(
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
      return Promise.reject(error);
    }
  );
  };

  export const ngoHome = () => (dispatch) => {
  return staticDataService.ngoHome().then(
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
      return Promise.reject(error);
    }
  );
};