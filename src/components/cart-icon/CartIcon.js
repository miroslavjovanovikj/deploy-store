import React from 'react';
import '../../styles/cart-icon/CartIcon.css';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cartActions'
import  {ReactComponent as ShoppingIcon} from '../../assets/bag.svg';
import {createStructuredSelector} from 'reselect';
import {selectCartItemsCount} from '../../redux/cart/cartSelectors';
import {selectCartItems} from '../../redux/cart/cartSelectors';
const CartIcon =({toggleCartHidden, itemCount})=>{
  return(
    <div className="Cart-icon" onClick={toggleCartHidden}>

      <ShoppingIcon  className="Shopping-icon"/>
      <span className="Item-count">{itemCount}</span>
    </div>
  )
}
const mapDispatchToProps =(dispatch)=>{
  return{
    toggleCartHidden:()=>{dispatch(toggleCartHidden())}
  }
}
const mapStateToProps =createStructuredSelector({
    itemCount:selectCartItemsCount
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
