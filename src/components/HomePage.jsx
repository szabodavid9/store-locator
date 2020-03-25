import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { Link } from "react-router-dom";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getCountries, selectCountry } from "../actions/countryActions"
import { getCities } from "../actions/cityActions" 

const formControlStyle = {
  width: 200
}

const HomePage = ({ countryList, cityList, getCountries, getCities, isLoading, selectCountry, selectedCountry }) => {
  useEffect(() => {
    getCountries()
  }, [getCountries])

  const [selectedCity, setSelectedCity] = useState('')

  const handleCountryChange = (event) => {
    setSelectedCity('')
    getCities(event.target.value)
    selectCountry(event.target.value)
  }

  const linkTarget = selectedCity ? `/shops/${selectedCountry}/${selectedCity}` : `/shops/${selectedCountry}`

  return (
    !isLoading && <div>
      <h2 className="page-title">Store locator</h2>
      <div className="home-page-container">
        <div>
          <FormControl style={formControlStyle}>
            <InputLabel id="demo-simple-select-label">Countries</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleCountryChange}
            >
              {
                countryList.map(country => <MenuItem key={country.slug} value={country.slug}>{country.country}</MenuItem>)
              }
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl style={formControlStyle}>
            <InputLabel id="demo-simple-select-label2">Cities</InputLabel>
            <Select
                labelId="demo-simple-select-label2"
                id="demo-simple-select"
                onChange={(event) => {setSelectedCity(event.target.value)}}
                disabled={!selectedCountry}
            >
              {
                cityList && cityList.map(city => <MenuItem key={city.slug} value={city.slug}>{city.name}</MenuItem>)
              }
            </Select>
          </FormControl>
        </div>
        <div className="button-container">
          <Link className={!selectedCountry ? "disabled-link" : ''} to={linkTarget}>
            <button disabled={!selectedCountry} className="waves-effect waves-light btn"> List shops </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isLoading: state.countries.isLoading,
  countryList: state.countries.countryList,
  cityList: state.cities.cityList.cities,
  selectedCountry: state.countries.selectedCountry
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getCountries,
    getCities,
    selectCountry
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);