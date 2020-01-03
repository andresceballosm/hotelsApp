import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
    Text, 
    View, 
    TouchableOpacity, 
    Image, 
    Dimensions,
    ImageBackground,
    FlatList } from 'react-native'
import { Transition} from 'react-navigation-fluid-transitions'
import { LoadingSmall } from '../../components/LoadingSmall';
import StarRating from '../../components/StarRating';
import styles from './Styles';
import { Header } from 'react-navigation';

let screenWidth = Dimensions.get('window').width;

class DetailsScreen extends Component {   
    render(){
        const { navigation, loading } = this.props;
        const item = navigation.getParam('name', '');
        const hotel = navigation.getParam('hotel', '');
        let ratings = hotel.stars;

        const LoadingStatus = () => {
            if (loading == true)
               return <LoadingSmall />      
            return null;
        };

        return (
            <View style={styles.DetailMainContainer}>
                { LoadingStatus() }
                <Transition shared={item}>
                    {/* Create an image carrousel  */}
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        extraData={hotel.images}
                        data={hotel.images}
                        keyExtractor = {(item) => item} 
                        renderItem={({item, index}) => this.renderImage(item, index)}
                    />   
                </Transition>
                <View style={{flex:1,backgroundColor:'#ffffff', height: scaleToDimension(50)}}>
                    <Text style={styles.titleDetial}>{hotel.name}</Text>
                    {/* Render stars */}
                    <StarRating ratings={ratings}/>
                    <Text style={styles.subtitleDetail}>COP ${hotel.price}</Text>
                </View> 
            </View>
        );
    }
    //Render Header with hotel images 
    renderImage = (hotel, index) => {
        return <ImageBackground key={index}  source={{ uri : hotel}} style={styles.detailTopContainer}>
            <TouchableOpacity onPress={()=> this.props.navigation.pop()} style={[styles.navigationHeaderContainer, { height: Header.HEIGHT }]}>
                <Image style={styles.imageDetail}
                source={require('../../../assets/icons/down.png')}/>
            </TouchableOpacity>
            <View style={{flex:1,justifyContent:'flex-end', marginBottom:10}}>
                <View style={styles.navigationHeaderContainer1}>
                    <Text style={{color:'white'}}>Imagen {index + 1}</Text>
                </View>
            </View>
        </ImageBackground>
    }

}

const scaleToDimension = (size) => {
    return screenWidth * size / 375
};

const mapStateToProps = state => ({
    hotels : state.ReducerHotels,
    loading: state.ReducerLoading.loading,
    city : state.ReducerCity.city,
});
  
  const mapDispatchToProps = dispatch => ({

  });
  
export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);
