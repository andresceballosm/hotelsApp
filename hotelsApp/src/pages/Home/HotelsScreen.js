import React, { Component } from 'react'
import { connect } from 'react-redux';
import { 
    Text, 
    View, 
    TouchableOpacity, 
    Image, 
    FlatList,
    SafeAreaView,
    TextInput } from 'react-native'
import { Transition} from 'react-navigation-fluid-transitions'
import { LoadingSmall } from '../../components/LoadingSmall';
import { MapsComponent } from '../../components/MapsComponent';
import StarRating from '../../components/StarRating';
import { ButtonGeneral } from '../../components/Button';
import { ActionSetLoading } from '../../store/actions/ActionApp';
import { ActionGetHotelByParameters } from '../../store/actions/ActionHotels';
import styles from './Styles';


class HotelsScreen extends Component {
    // static router = Navigator.router;
    static navigationOptions = {
        title: 'Home',
        headerTintColor: '#ffffff',
        headerStyle: {
            backgroundColor: '#2F95D6',
            borderBottomColor: '#ffffff',
            borderBottomWidth: 3,
        },
        headerTitleStyle: {
            fontSize: 18,
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            hotelName: null,
            searchText:'',
        };
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.hotels!==prevState.hotels){
          return { hotels: nextProps.hotels};
        }
        else return null;
    }
     
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.hotels!==this.props.hotels 
        && this.state.latitude === null 
        && this.props.hotels.hotels.length > 0){
            this.setState({
                latitude: this.props.hotels.hotels[0].lat,
                longitude: this.props.hotels.hotels[0].lng,
                hotelName: this.props.hotels.hotels[0].name
            })
        }
    }


    gotToHotel = (item) => {
        this.props.navigation.navigate('homeDetails', {
            name: item['name'],
            hotel: item, 
            refresh :false
        })
    }

    searchText = (e) => {
        this.setState({searchText : e})
    }

    render() {
        const { hotels, loading, city, navigation } = this.props;

        const LoadingStatus = () => {
            if (loading == true)
               return <LoadingSmall />      
            return null;
        };

        return (
            <SafeAreaView style={styles.mainContainer}>
                { LoadingStatus() }
                <View style={{flex:1}}>
                    <View style={styles.topContainer}>
                        {/* Button for go back */}
                        <TouchableOpacity onPress={() => navigation.pop()} style={{marginLeft:10, marginTop:10}}>
                            <Image source={require('../../../assets/icons/left.png')}/>
                        </TouchableOpacity>
                        <View style={{flexDirection:'row'}}>
                        <Text style={{
                            marginLeft: 15,
                            color: '#58647a',
                            fontSize: 24,
                            fontWeight: 'bold'
                        }}>
                            Resultado en
                        </Text>
                        <Text style={{
                            marginLeft: 15,
                            marginRight: 15,
                            color: '#db6e2e',
                            fontSize: 24,
                            fontWeight: 'bold'
                        }}>{ city }</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            {/* TextInput for search hotels by name in the city selected */}
                            <View style={{flex:3}}>
                                <TextInput
                                paddingLeft={12}
                                style={styles.searchBar}
                                value={this.state.searchText}
                                onChangeText={value => this.searchText(value)}
                                placeholder={'Buscar hotel por nombre EJ: Hotel playa'} />
                            </View>
                            <View style={{flex:1}}>
                                <ButtonGeneral
                                title="Buscar"
                                width={90} 
                                click={() => { this.props.searchHotelsByName(this.state.searchText, city) }}
                                color="#db6e2e"
                                fontColor="white"/>
                            </View>
                        </View>
                    </View>
                {/* Validate if there are hotel, if  there are hotels render Map */}
                { hotels.hotels ? 
                <View style={{flex:5}}>
                    { this.renderMap(hotels) }
                </View> : <View></View>
                }   
                </View>
            </SafeAreaView>
        );
    }
    //Render card with hotel info
    renderHotelCard(item, index) {
        return (
                <TouchableOpacity key={index} onPress={() => {
                    this.setState({
                        latitude:item.lat,
                        longitude:item.lng,
                        hotelName: item.name
                    })
                }} activeOpacity = {1}>
                    {/* Create effect of animation for transition */}
                    <Transition shared={item['name']}>
                        <View style={styles.card}>
                            <View style={{flex:1, marginTop:5}}>
                                <Image style={styles.image}
                                    source={{uri : item.images[0]}}/>
                            </View>
                            <View style={{flex:1, alignItems:'center'}}>
                                <View style={{flex:3,flexDirection:'row'}}>
                                    <View style={{flex:2}}>
                                        <View style={{marginTop:18, flexDirection:'row'}}>
                                            <Text style={styles.subtitle}>{item.name}</Text>  
                                        </View> 
                                        <View style={{marginTop:5, flexDirection:'row'}}>
                                            <StarRating ratings={item.stars}/> 
                                        </View> 
                                    </View>
                                    <View style={{flex:1}}>
                                        <View style={{marginTop:18, flexDirection:'row'}}>
                                            <Text style={styles.subtitle}>
                                                COP {item.price}
                                            </Text>  
                                        </View> 
                                        <View style={styles.cardMap}>
                                            <TouchableOpacity onPress={(event) => { this.gotToHotel(item)}}>
                                                <Text style={{color:'white'}}> Detalles</Text>
                                            </TouchableOpacity>
                                        </View>  
                                    </View>
                                </View>
                                
                            </View> 
                        </View>
                    </Transition>
                </TouchableOpacity>
        );
    }
    //Render Map with hotels locations
    renderMap(hotels){
        if(hotels.hotels.length > 0 ) {
            return(
                <View style={{  flex: 1}}>  
                    { this.state.latitude !== null ?
                    <MapsComponent 
                    latitude={this.state.latitude} 
                    longitude={this.state.longitude} 
                    hotelName={this.state.hotelName} 
                    />   
                    : <View></View>
                    }
                    <View style={styles.listHotels}>
                        <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        extraData={hotels.hotels}
                        keyExtractor = {(item) => item._id} 
                        data={hotels.hotels}
                        renderItem={({item, index}) => this.renderHotelCard(item, index)}
                        />   
                    </View>                                               
                </View>                 
            )  
        } else {
            return(
                <View style={{ paddingTop:50, height: 200, alignItems:'center'}}>
                    <Text>
                        En el momento no hay hoteles disponibles en esta ciudad.
                    </Text>
                </View>
            )
        }
    }

}

const mapStateToProps = state => ({
    hotels : state.ReducerHotels,
    loading: state.ReducerLoading.loading,
    city : state.ReducerCity.city,
});

const mapDispatchToProps = dispatch => ({
    searchHotelsByName : (name, city) => {
        dispatch(ActionSetLoading());
        let query = [
            {
                parameter : 'city',
                value : city
            },
            {
                parameter : 'name',
                value : name
            }
        ]
        dispatch(ActionGetHotelByParameters(query));
      }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(HotelsScreen);