
import { APIClinet } from "./APIclient"



const ProductApi = {

  getAll: () => {
    const url = '/products'
    return APIClinet.get(url)
  },
  
  getCategory : (params) => {
    const url = `/products/category/${params}`
    
    return APIClinet.get(url, { params })
  },
  getByID :(params) => {

    const url = `/products/${params.id}`
    
    return APIClinet.get(url, { params })
  },

}

export default ProductApi