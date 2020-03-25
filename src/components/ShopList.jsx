import React, { useEffect } from "react"
import { useParams } from "react-router-dom";
import { connect } from "react-redux"
import { Link } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { getCityShops, getCountryShops } from "../actions/shopActions"
import { bindActionCreators } from "redux";

const ShopList = ({ shopList, getCityShops, getCountryShops }) => {
  const { country, city } = useParams();

  useEffect(() => {
    if (city) {
      getCityShops(city)
    } else {
      getCountryShops(country)
    }
  }, [getCityShops, getCountryShops, city, country])

  return (
    <div className="shop-list-container">
      <h1>Shop List</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Shop name</TableCell>
            <TableCell>Open today</TableCell>
            <TableCell>Close today</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            shopList.map(shop => (
              <TableRow key={shop.uuid} className="shop-row">
                  <TableCell><Link to={`/shop/${shop.uuid}`}>{shop.name}</Link></TableCell>
                  <TableCell>{shop.opening_hours_today[0].open}</TableCell>
                  <TableCell>{shop.opening_hours_today[0].close}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}

const mapStateToProps = (state) => ({
  shopList: state.shops.shopList
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getCityShops,
    getCountryShops
  },dispatch)
)

export default  connect(mapStateToProps, mapDispatchToProps)(ShopList);