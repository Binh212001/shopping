import React,{useEffect} from 'react'
import { GetCategory } from '../app/CategorySlice';
import {useDispatch,useSelector} from "react-redux"


import Grid from '../feature/component/Grid';
import Product from '../feature/component/Product';

function Jewalry() {

  const items = useSelector(state => state.ProductCategory)
 
  const je = "jewelery"
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetCategory(je))
  }, [dispatch, je])
  
 if(items.status===true){
   return <div>Loading...........</div>
 }
  return (
    
      <div className="hero">
        <div className="product-list">
      <Grid
      gap={10}
      col={4}
      colmd={2}
      colsm={1}
      >
        {
          items.products.map((data)=>{
            return(
              <Product 
              key={data.id}
              item={data}
              >
              </Product>
            )
          })
        }
      </Grid>
    </div>
    </div>
  )

}

export default Jewalry
