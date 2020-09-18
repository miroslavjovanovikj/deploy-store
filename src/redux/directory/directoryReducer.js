const initialState={
  section:[
    {
      title:'hats',
      imageUrl:'https://cdna.lystit.com/photos/3f35-2015/09/23/stussy-maroon-world-tour-snapback-hat-purple-product-4-185181650-normal.jpeg',
      id:'uj1',
      linkUrl:'shop/hats'
    },
    {
      title:'jackets',
      imageUrl:'https://img.abercrombie.com/is/image/anf/KIC_132-2310-1402-330_model1?$product-large-anf$',
      id:'aw2',
      linkUrl:'shop/jackets'
    },
    {
      title:'sneakers',
      imageUrl:'https://img.abercrombie.com/is/image/anf/anf_139541_01_life2?$product-large-anf$',
      id:'we3',
      linkUrl:'shop/sneakers'
    },
    {
      title:'womans',
      imageUrl:'https://img.abercrombie.com/is/image/anf/KIC_155-2121-2305-278_model1?$product-large-anf$',
      size:'large',
      id:'tr4',
      linkUrl:'shop/womens'
    },
    {
      title:'mans',
      imageUrl:'https://img.abercrombie.com/is/image/anf/KIC_122-2912-1006-181_model3?$product-large-anf$',
      size:'large',
      id:'sd5',
      linkUrl:'shop/mens'
    },
  ]
};
const directoryReducer =(state=initialState, action)=>{
  switch (action.type) {
    default:
      return state
  }
}
export default directoryReducer
