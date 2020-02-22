import React from 'react';
import {View, Text,Button, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Color from '../constants/Color';


const CategoriesScreen = props =>{
    const renderGridItem = (itemData) =>{
        return (
            <TouchableOpacity style={styles.gridItem}  onPress={()=>{props.navigation.navigate('CategoriesMeals');}} >
            <View ><Text> {itemData.item.title} </Text></View>
            </TouchableOpacity>
        );
    };
    
    return(
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}/>
    );

};

CategoriesScreen.navigationOptions={
    headerTitle:'Meals Categories',
    headerStyle:{
        backgroundColor: Color.primaryColor
    },
    headerTintColor:"white"
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },
    gridItem:{
        flex:1,
        margin:15,
        height:150
    }
});


export default CategoriesScreen;