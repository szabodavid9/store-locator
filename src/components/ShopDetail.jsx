import React, { useEffect } from "react"
import { useParams } from "react-router-dom";
import { getShop } from "../actions/shopActions"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const ShopDetail= ({ shop, getShop, isLoading }) => {
  const { uuid } = useParams();
  
  useEffect(() => {
    getShop(uuid)
  }, [getShop, uuid])

  return (
    !isLoading && shop && <div className="card blue-grey darken-1 shop-list-container">
      <div className="card-content white-text">
        <span className="card-title page-title">Shop detail</span>
        <ul className="shop-detail-list">
          <li>Shop name: {shop.name}</li>
          <li>Shop address: {shop.address_line1}</li>
          {shop.phone_number !== '-' && <li> Phone number: {shop.phone_number}</li>}
          <li>
            Opening Hours:
            <ul>
              {
                shop.opening_hours && Object.keys(shop.opening_hours).map((key) => (
                  <li key={key}>
                    {`${key} Open: ${shop.opening_hours[key][0].open} Close: ${shop.opening_hours[key][0].close}`}
                  </li>
                ))
              }
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  shop: state.shops.shopList[0],
  isLoading: state.shops.isLoading
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getShop
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ShopDetail)