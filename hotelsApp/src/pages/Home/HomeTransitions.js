import React from 'react';
import { FluidNavigator } from 'react-navigation-fluid-transitions';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import HotelsScreen from './HotelsScreen';


const Navigator = FluidNavigator({
    home: { screen: HomeScreen },
    homeDetails: { screen: DetailsScreen },
    hotels: { screen: HotelsScreen },
});

class HomeTransitions extends React.Component {
    static router = Navigator.router;
    render() {
        const {navigation} = this.props;
        return (
            <Navigator navigation={navigation}/>
        );
    }
}

export default HomeTransitions;
