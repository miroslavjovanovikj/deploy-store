import React from 'react';
import CollectionItem from '../../components/collection-item/CollectionItem';
import '../../styles/collection/CollectionPage.css';
import {connect} from 'react-redux';
import {Container,Row,Col} from 'react-bootstrap';
import {selectCollection} from '../../redux/shop/shopSelectors';

const CollectionPage =({collection})=>{
const  {title, items} =collection;
  return(
    <div className="CollectionPage">
    <Container>
      <h2 className="Title">{title}</h2>
      <Row>
        {
          items.map(item=>(
            <Col lg={4} md={4} sm={12} xs={12} key={item.id}>
              <CollectionItem key={item.id} item={item}/>
            </Col>
          ))
        }
        </Row>
      </Container>
    </div>
  )
};
const mapStateToProps =(state,ownProps)=>({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(CollectionPage);
