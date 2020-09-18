import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeButton =({price})=>{
  const priceForStripe = price*100;
  const publishableKey = 'pk_test_51HShHpK1FjRGoYnKrXTFoQGxiHAKyY54YUzFdYu3DK6DC2JMjJJzMo6qBsrltmOVfN5Yaav6NVd3I0I8xozGJLF400UXW9anLT'
  const onToken =(token)=>{
    console.log(token)
    alert('Payment Successful')
  }
  return(
    <div>
      <StripeCheckout
        label="Pay Now"
        name="OS Clothing Ltd."
        billingAddress
        shippingAdress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amaunt={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  )
}
export default StripeButton;
