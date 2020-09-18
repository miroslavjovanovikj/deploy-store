import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import {Container,Row,Col} from 'react-bootstrap';
import CollectionPage from '../collection/CollectionPage';


const ShopPage =({match})=>{
   console.log(match)
    return(
      <div className="Shop-page">

        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
    )
}

export default ShopPage;
