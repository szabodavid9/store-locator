import * as Api from "../api/api"

const getCitiesStart = () => ({
  type: "GET_CITIES_START"
})

const getCitiesSuccess = (cities) => ({
  type: "GET_CITIES_SUCCESS",
  payload: {
    cities
  }
})

const getCitiesFail = (error) => ({
  type: "GET_DEPARTURE_STOPS_FAIL",
  payload: {
    error
  }
})

export const getCities = (countrySlug) => {
  return function(dispatch) {
    dispatch(getCitiesStart())
    return Api.getCities(countrySlug)
      .then(result => result.json())
      .then(result => dispatch(getCitiesSuccess(result)))
      .catch(error => dispatch(getCitiesFail(error)))
  }
}