import * as Api from "../api/api"

const getCityShopsStart = () => ({
  type: "GET_CITY_SHOPS_START"
})

const getCityShopsSuccess = (shops) => ({
  type: "GET_CITY_SHOPS_SUCCESS",
  payload: {
    shops
  }
})

const getCityShopsFail = (error) => ({
  type: "GET_CITY_SHOPS_FAIL",
  payload: {
    error
  }
})

export const getCityShops = (citySlug) => {
  return function(dispatch) {
    dispatch(getCityShopsStart())
    return Api.getCityShops(citySlug)
      .then(result => result.json())
      .then(result => dispatch(getCityShopsSuccess(result)))
      .catch(error => dispatch(getCityShopsFail(error)))
  }
}

const getCountryShopsStart = () => ({
  type: "GET_COUNTRY_SHOPS_START"
})

const getCountryShopsSuccess = (shops) => ({
  type: "GET_COUNTRY_SHOPS_SUCCESS",
  payload: {
    shops
  }
})

const getCountryShopsFail = (error) => ({
  type: "GET_COUNTRY_SHOPS_FAIL",
  payload: {
    error
  }
})

export const getCountryShops = (countrySlug) => {
  return function(dispatch) {
    dispatch(getCountryShopsStart())
    return Api.getCountryShops(countrySlug)
      .then(result => result.json())
      .then(result => dispatch(getCountryShopsSuccess(result)))
      .catch(error => dispatch(getCountryShopsFail(error)))
  }
}

const getShopStart = () => ({
  type: "GET_SHOP_START"
})

const getShopSuccess = (shops) => ({
  type: "GET_SHOP_SUCCESS",
  payload: {
    shops
  }
})

const getShopFail = (error) => ({
  type: "GET_SHOP_FAIl",
  payload: {
    error
  }
})

export const getShop = (uuid) => {
  return function(dispatch) {
    dispatch(getShopStart())
    return Api.getShop(uuid)
      .then(result => result.json())
      .then(result => dispatch(getShopSuccess(result)))
      .catch(error => dispatch(getShopFail(error)))
  }
}

