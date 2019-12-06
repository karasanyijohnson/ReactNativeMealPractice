import React from 'react';
import{createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import CartScreen from '../screens/shop/CartScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen'
import Colors from '../constants/Colors';

const defaultNavOptions = {
    headerStyle:{
        backgroundColor: Platform.OS==='android' ? Colors.primary:''
    },
    headerTitleStyle:{
       fontFamily:'open-sans-bold'
    },
    headerBackTitleStyle:{
        fontFamily:'open-sans'
     },
    headerTintColor: Platform.OS==='android'? 'white':Colors.primary
} 
//PRODUCT NAVIGATOR
const ProductsNavigator= createStackNavigator(
{
ProductsOverview:ProductsOverviewScreen,
ProductDetail:ProductDetailScreen,
cart:CartScreen
},
{
navigationOptions:{
        drawerIcon: drawerConfig =>(
        <Ionicons 
        name={Platform.OS==='android' ? 'md-cart': 'ios-cart'}
        size={23}
        Color={drawerConfig.tintColor}
        />
        )
     },
    defaultNavigationOptions:defaultNavOptions
    }
    );

 //ORDER NAVIGATOR   
const OrdersNavigator= createStackNavigator(
{
    orders:OrdersScreen
 },{
navigationOptions:{
    drawerIcon: drawerConfig =>(
    <Ionicons 
    name={Platform.OS==='android' ? 'md-list': 'ios-list'}
    size={23}
    Color={drawerConfig.tintColor}
    />
    )
 },
defaultNavigationOptions:defaultNavOptions
}
);

//USER NAVIGATOR
const AdminNavigator= createStackNavigator(
 {
    userProducts:UserProductsScreen,
    EditProduct:EditProductScreen
 },
 {
navigationOptions:{
    drawerIcon: drawerConfig =>(
    <Ionicons 
    name={Platform.OS==='android' ? 'md-create': 'ios-create'}
    size={23}
    Color={drawerConfig.tintColor}
    />
    )
 },
defaultNavigationOptions:defaultNavOptions
}
);

// NAVIGATION Drawer
const ShopNavigator= createDrawerNavigator(
{
    products:ProductsNavigator,
    orders:OrdersNavigator,
    Admin:AdminNavigator
},{
   contentOptions:{
       activeTintColor:Colors.primary
   } 
}
);

export default createAppContainer(ShopNavigator)
