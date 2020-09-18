import React from 'react';
import '../../styles/custom-button/CustomButton.css';

const CustomButton = ({children,isGoogleSignIn,inverted, ...otherProps}) => {
  return(
    <button className={`${inverted ? 'inverted' :''} ${isGoogleSignIn ? 'google-sign-in': ""} CustomButton `} {...otherProps}>
      {children}
    </button>
  )
}
export default CustomButton;
