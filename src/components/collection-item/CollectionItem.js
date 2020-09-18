import React from 'react';
import '../../styles/collection-item/CollectionItem.css';
import {Container,Row,Col} from 'react-bootstrap';
import CustomButton from '../../components/custom-button/CustomButton'
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cartActions'
const CollectionItem = ({item,addItem}) =>{
  const { name,price, imageUrl} =item
  return(
    <div className="Collection-item">

     <div
       className='Image'
       style={{backgroundImage:`url(${imageUrl})`}}
     />

     <div className='Collection-footer'>
       <span className='name'>{name}</span>
       <span className='price'>${price}</span>
     <CustomButton onClick={()=>addItem(item)} inverted>Add to cart</CustomButton>
     </div>

   </div>
  )
}
const mapDispatchToProps =(dispatch)=>{
  return{
    addItem:(item)=>dispatch(addItem(item))
  }
}
export default connect(null,mapDispatchToProps)(CollectionItem);
