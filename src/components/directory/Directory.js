import React, {Component} from 'react';
import '../../styles/directory/Directory.css';
import MenuItem from '../menu-item/MenuItem';
import {Container,Row,Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import '../../styles/directory/Directory.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStructuredSelector} from 'reselect'
import  {selectDirectorySections} from '../../redux/directory/directorySelectors';
const Directory =({section})=>{

    return(
        <div >
          <Container className="HomePage">
            <Row>
              {section.map(({ id,imageUrl,size, ...othersSectionProps})=>{
                return (
                  id === 'sd5' ?
                  <Col  key={id} lg={8} sm={12} md={12} xs={12} >
                   <div style={{backgroundImage:`url(${imageUrl})`}} className={`${size} Directory-menu`}>
                     <MenuItem {...othersSectionProps}/>
                   </div>

                 </Col>
                   :
                  <Col key={id} lg={4} sm={12} md={6}  >
                   <div style={{backgroundImage:`url(${imageUrl})`}} className={`${size} Directory-menu`}>
                     <MenuItem  {...othersSectionProps}/>
                   </div>
                 </Col>
                )
              })}

            </Row>
          </Container>
        </div>
    )
}
const mapStateToProps =createStructuredSelector({
  section:selectDirectorySections
})
export default connect(mapStateToProps)(Directory);
