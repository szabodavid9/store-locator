const initialState = {
  countryList: [],
  isLoading: true,
  error: null,
  selectedCountry: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_COUNTRY":
      return { ...state, selectedCountry: action.payload.selectedCountry }
    case "GET_COUNTRIES_START": 
      return { ...state, isLoading: true }
    case "GET_COUNTRIES_SUCCESS": 
      return { ...state, countryList: action.payload.countries, isLoading: false }
    case "GET_COUNTRIES_FAIL":
      return { ...state, error: action.payload.error, isLoading: false }
    default: 
      return state
  }
}