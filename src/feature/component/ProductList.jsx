import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'


import { GetProduct } from '../../app/ProductSlice'
import Grid from './Grid'
import Product  from './Product'


function ProductList() {
 
  const dispatch = useDispatch()
  const products= useSelector (state=> state.Products)

  useEffect(() => {
    dispatch(GetProduct())
  }, [dispatch])

  if(products.status ===true){
    return(
      <div>Loading</div>
    )
  }
  return (
    <div className="product-list">
      <Grid
      gap={10}
      col={4}
      colmd={2}
      colsm={1}
      >
        {
          products.products.map((data)=>{
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
  )
}

export default ProductList
