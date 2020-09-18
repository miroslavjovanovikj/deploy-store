import React from 'react';
import '../../styles/collection-preview/CollectionPreview.css'
import CollectionItem from '../collection-item/CollectionItem';
import {Container,Row,Col} from 'react-bootstrap';

const CollectionPreview = ({title, items}) =>{
  return(
      <Container className="Collection-preview">
        <h1 className="title">{title}</h1>
        <Row>
          {items
            .filter((item,idx)=>idx<4)
            .map((item)=>(
                <Col key={item.id} className="items" md={6} lg={3} sm={6} xs={12}>
                <CollectionItem  key={item.id} item={item}/>
              </Col>
          ))}
        </Row>
  </Container>

  )
}
export default CollectionPreview
