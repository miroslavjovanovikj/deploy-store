import React from 'react';
import '../../styles/menu-item/MenuItem.css';
import {withRouter} from 'react-router-dom';
const MenuItem = ({title, imageUrl, history, linkUrl, match}) => {
  return(
    <div className= 'HomePage-menu-item'onClick={()=>history.push(`${match.url}${linkUrl}`)}>
      <div  className="HomePage-content">
        <div className="HomePage-title">{title.toUpperCase()}</div>
        <div className="HomePage-subtitle">SHOP NOW</div>
      </div>
    </div>
  )
}
export default withRouter(MenuItem)
