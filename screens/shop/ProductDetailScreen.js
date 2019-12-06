import React from 'react';
import {View,ScrollView,Text,Image,Button,StyleSheet} from 'react-native';
import { useSelector,useDispatch } from 'react-redux'

import Colors from '../../constants/Colors';
import * as cartActions from '../../store/actions/cart'


const ProductOverviewScreen = props=> {
    const ProductId= props.navigation.getParam('productId');
    //useSelector receives state from reducer
    const selectedProduct= useSelector(state=>
    state.products.availableProducts.find(prod=>prod.id===ProductId));

    const dispatch =useDispatch();

 return(
   <ScrollView>
       <Image style={styles.image} source={{uri:selectedProduct.imageUrl}}/>
       <View style={styles.actions}>
       <Button 
       color={Colors.primary} 
       title='Add to Card' 
        onPress={()=>{
           dispatch(cartActions.addToCart(selectedProduct));
       }}/>
       </View>
       <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
   </ScrollView>
 )
}
ProductOverviewScreen.navigationOptions=navData=>{
    return{
        headerTitle:navData.navigation.getParam('productTitle')
    }
}

const styles= StyleSheet.create({
image:{
    width:'100%',
    height:300
},
actions:{
marginVertical:10,
alignItems:'center'
},
price:{
    fontFamily:'open-sans-bold',
    fontSize:20,
    textAlign:'center',
},
description:{
    fontFamily:'open-sans',
    fontSize:14,
    textAlign:'center',
    marginHorizontal:10
}
})

export default ProductOverviewScreen;