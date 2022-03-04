import React,{useEffect} from 'react'
import { GetCategory } from '../app/CategorySlice';
import {useDispatch,useSelector} from "react-redux"


import Grid from '../feature/component/Grid';
import Product from '../feature/component/Product';

function Electric() {
  const items = useSelector(state => state.ProductCategory)
  console.log("🚀 ~ file: Clothes.jsx ~ line 12 ~ Clothes ~ items", items)
  const el = "electronics"
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetCategory(el))
  }, [dispatch, el])
  
 if(items.status===true){
   return <div>Loading...........</div>
 }
  return (
    <div>
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
    
    </div>
  )
}

export default Electric
