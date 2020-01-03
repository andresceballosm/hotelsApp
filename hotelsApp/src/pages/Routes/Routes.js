import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import HomeTransitions from '../Home/HomeTransitions'


export const StackHome = createStackNavigator({
    home: {
      screen: HomeTransitions,
      navigationOptions: {
        header: null
      }
    }
},{
  headerMode:'none'
});

// export const TabBarHotels = createBottomTabNavigator(
//   {
//     Home: {
//       screen: StackHome,
//       navigationOptions: {
//         tabBarIcon: () =>
//           <Image 
//           style= { styles.activeplus }
//           source={ require('../../../assets/icons/home.png') 
//         }/>
//       }
//     }
//   },
//   {
//     initialRouteName: "Home",
//     tabBarOptions: {
//       activeTintColor: 'orange',
//       inactiveTintColor: 'gray',
//       showLabel: false,
//     }
//   },
// );


const styles = StyleSheet.create({
  inactive: {
      height: 40,
      width: 40
  },
  inactive2: {
    height: 30,
    width: 30
  },
  activeplus: {
    height: 41,
    width: 41
  }
});