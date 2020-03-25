const initialState = {
  shopList: [],
  isLoading: true,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_CITY_SHOPS_START": 
      return { ...state, isLoading: true }
    case "GET_CITY_SHOPS_SUCCESS": 
      return { ...state, shopList: action.payload.shops, isLoading: false }
    case "GET_CITY_SHOPS_FAIL":
      return { ...state, error: action.payload.error, isLoading: false }
    case "GET_COUNTRY_SHOPS_START": 
      return { ...state, isLoading: true }
    case "GET_COUNTRY_SHOPS_SUCCESS": 
      return { ...state, shopList: action.payload.shops, isLoading: false }
    case "GET_COUNTRY_SHOPS_FAIL":
      return { ...state, error: action.payload.error, isLoading: false }
    case "GET_SHOP_START": 
      return { ...state, isLoading: true }
    case "GET_SHOP_SUCCESS": 
      return { ...state, shopList: [action.payload.shops], isLoading: false }
    case "GET_SHOP_FAIL":
      return { ...state, error: action.payload.error, isLoading: false }
    default: 
      return state
  }
}