
export const getCountries = () => fetch('https://store-locator-api.allsaints.com/locations')
export const getCities = (countrySlug) => fetch(`https://store-locator-api.allsaints.com/locations/${countrySlug}`)
export const getCityShops = (citySlug) => fetch(`https://store-locator-api.allsaints.com/shops?city=${citySlug}`)
export const getCountryShops = (country) => fetch(`https://store-locator-api.allsaints.com/shops?country=${country}`)
export const getShop = (uuid) => fetch(`https://store-locator-api.allsaints.com/shops/${uuid}`)
