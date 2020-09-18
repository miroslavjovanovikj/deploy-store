import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/CustomButton';
import {selectCartItems} from '../../redux/cart/cartSelectors';
import {withRouter} from 'react-router-dom'
import '../../styles/cart-dropdown/CartDropdown.css';
import {createStructuredSelector} from 'reselect';
import {toggleCartHidden} from '../../redux/cart/cartActions'

import CartItem from '../cart-item/CartItem'
const CartDropdown =({cartItems, history,dispatch})=>{
  return(
    <div className='Cart-dropdown'>
    <div className='Cart-items'>
        {
          cartItems.length
          ?
          cartItems.map(cItem=> (
            <CartItem key={cItem.id} item={cItem}/>
        ))
          :
         <span className="emtptyMessage">Your cart is empty</span>
      }
    </div>
    <CustomButton
      onClick={
        ()=>{
          history.push('/checkout');
          dispatch(toggleCartHidden());

      }}
      className="CartDropdownButton" >
      GO TO CHECKOUT</CustomButton>
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
   cartItems:selectCartItems

})
export default withRouter(connect(mapStateToProps)(CartDropdown));
