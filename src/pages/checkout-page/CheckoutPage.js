import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems,selectCartTotal} from '../../redux/cart/cartSelectors'
import '../../styles/checkout-page/CheckoutPage.css';
import StripeButton from '../../components/stripe-button/StripeButton'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'

const CheckoutPage = ({cartItems, total}) =>{
  return(
    <div className='CheckoutPage'>
         <div className="CheckoutHeader">
            <div className="HeaderBlock">
              <span>Product</span>
            </div>
            <div className="HeaderBlock">
              <span>Description</span>
            </div>
            <div className="HeaderBlock">
              <span>Quantity</span>
            </div>
            <div className="HeaderBlock">
              <span>Price</span>
            </div>
            <div className="HeaderBlock">
              <span>Remove</span>
            </div>

         </div>
         {
           cartItems.map(cartItem=>(
             <CheckoutItem
               key={cartItem.id}
                cartItem={cartItem}
              />
           ))
         }
         <div className="total">
           <span>TOTAL: ${total}</span>
         </div>
         <div className="TestWorning">
           *Please use the following test credit card for payments*
           <br/>
           Card No: 4242 4242 4242 4242 - Exp: 01/21 - Cvv:123
         </div>
         <StripeButton price={total}/>
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  cartItems:selectCartItems,
  total:selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);
