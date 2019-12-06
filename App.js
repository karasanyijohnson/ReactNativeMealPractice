import React,{useState} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';

import productReducer from './store/reducers/Product';
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/orders'
import ShopNavigator from './navigation/ShopNavigator'

const rootReducer = combineReducers({
  products: productReducer,
  cart:cartReducer,
  orders:ordersReducer
})

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
   'open-sans': require('./assets/Fonts/OpenSans-Regular.ttf'),
   'open-sans-bold': require('./assets/Fonts/OpenSans-Bold.ttf')
   })
 }

export default function App() {
  const [fontLoaded, setFontLoaded]= useState(false)  
if(!fontLoaded){
  return(
    <AppLoading
   startAsync={fetchFonts} 
   onFinish={()=>setFontLoaded(true)}
    />
    ) 
  }
  return (
    <Provider store={store}>
     <ShopNavigator/>
    </Provider>
  );
}


