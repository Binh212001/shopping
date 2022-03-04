import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../feature/component/Product';
import { Productcontext } from '../Layout';
import Grid from '../feature/component/Grid'

function ProductSearch() {

  const filter = useParams();
  let item = useContext(Productcontext)
  item = item.filter((e)=>e.title.toLowerCase().indexOf(filter.name.toLowerCase())!==-1)

 
  return (
    <div className='routefilter'>

    <div className="product-list">
      <Grid
      gap={10}
      col={4}
      colmd={2}
      colsm={1}
      >
        {
          item.map((data)=>{
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

export default ProductSearch
