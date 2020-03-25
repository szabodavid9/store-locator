import * as Api from "../api/api"

export const selectCountry = (country) => ({
  type: 'SELECT_COUNTRY',
  payload: {
    selectedCountry: country
  }
})

const getCountriesStart = () => ({
  type: "GET_COUNTRIES_START"
})

const getCountriesSuccess = (countries) => ({
  type: "GET_COUNTRIES_SUCCESS",
  payload: {
    countries
  }
})

const getCountriesFail = (error) => ({
  type: "GET_DEPARTURE_STOPS_FAIL",
  payload: {
    error
  }
})

export const getCountries = () => {
  return function(dispatch) {
    dispatch(getCountriesStart())
    return Api.getCountries()
      .then(result => result.json())
      .then(result => dispatch(getCountriesSuccess(result)))
      .catch(error => dispatch(getCountriesFail(error)))
  }
}