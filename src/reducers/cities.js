const initialState = {
  cityList: [],
  isLoading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_CITIES_START": 
      return { ...state, isLoading: true }
    case "GET_CITIES_SUCCESS": 
      return { ...state, cityList: action.payload.cities, isLoading: false }
    case "GET_CITIES_FAIL":
      return { ...state, error: action.payload.error, isLoading: false }
    default: 
      return state
  }
}