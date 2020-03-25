import { combineReducers } from "redux"
import countries from "./countries"
import cities from './cities'
import shops from "./shops"

export default combineReducers({
  cities,
  countries,
  shops
})