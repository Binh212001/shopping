import Home from '../pages/Home';
import Clothes from '../pages/Clothes'
import Jewalry from '../pages/Jewalry'
import Shose from '../pages/Shose'
import Furniture from '../pages/Furniture'
import Other from '../pages/Other'
import Electric from '../pages/Electric';

import Cart from '../pages/Cart';
import ProductView from '../feature/component/ProductView';
import ProductSearch from '../pages/ProductSearch';
import Loggin from '../feature/Auth/SignIn/Loggin';



export const routes=[
  {
    path:'/',
    exact:true,
    main : ()=> <Home/>
  },
  {
    path:'/clothse',
    exact:false,
    main : ()=> <Clothes/>
  },
  {
    path:'/jewalry',
    exact:false,
    main : ()=> <Jewalry/>
  },
  {
    path:'/shose',
    exact:false,
    main : ()=> <Shose/>
  },
  {
    path:'/furniture',
    exact:false,
    main : ()=> <Furniture/>
  },
  {
    path:'/other',
    exact:false,
    main : ()=> <Other/>
  },
  {
    path:'/electric',
    exact:false,
    main : ()=> <Electric/>
  },
  {
    path:'/loggin',
    exact:false,
    main: ()=><Loggin></Loggin>
  },
  {
    path:'/cart',
    exact: false,
    main:()=><Cart></Cart>
  },
    {
    path:'/product/:id',
    exact: false,
    main:()=><ProductView></ProductView>
  },
  {
    path:'/search/:name',
    exact: false,
    main:()=><ProductSearch></ProductSearch>
  },
]