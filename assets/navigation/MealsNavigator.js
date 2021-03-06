import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import CategoriesScreen from '../../screens/CategoriesScreen';
import CategoryMealScreen from '../../screens/CategoryMealScreen';
import MealDetailScreen from '../../screens/MealDetailScreen';
import { Color } from '../../constants/Color';




const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    
    CategoriesMeals: {
        screen: CategoryMealScreen,
     
    },
    MealDetail: MealDetailScreen
},
    {
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor:"#4A148C"
            },
            headerTintColor:"white"
        }
    }
);

export default createAppContainer(MealsNavigator);