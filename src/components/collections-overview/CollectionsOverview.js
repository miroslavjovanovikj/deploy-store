import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import '../../styles/collections-overview/CollectionsOverview.css'
import CollectionPreview from '../collection-preview/CollectionPreview';
import {selectCollectionsForPreview} from '../../redux/shop/shopSelectors'
const CollectionsOverview =({collections}) =>{
  return(
    <div className='CollectionsOverview'>
    {collections.map(({id, ...otherCollectionProps})=>(
        <CollectionPreview key={id} {...otherCollectionProps}/>
    ))}
    </div>
  )
}
const mapStateToProps =createStructuredSelector({
  collections:selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
