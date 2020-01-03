import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { ButtonGeneral } from '../../components/Button';
import { ActionSetLoading, ActionSetCity } from '../../store/actions/ActionApp';
import { ActionGetHotelByParameter } from '../../store/actions/ActionHotels';
import styles from './Styles';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchText:'',
    };
};
  searchText = (e) => {
      this.setState({searchText : e})
  }
  render(){
    const { navigation } = this.props;
    return (
        <View style={styles.container}>
          <View style={styles.viewTitle}>
            <Text style={styles.title}>¿A donde quieres viajar?</Text>
          </View>
          <TextInput
          paddingLeft={12}
          style={styles.searchBarHome}
          value={this.state.searchText}
          onChangeText={value => this.searchText(value)}
          placeholder={'Buscar por ciudad EJ: Bogota, Medellin'} />
          <View style={styles.btn}>
            <ButtonGeneral
            title="Buscar" 
            click={() => { 
                this.props.searchHotelsByCity(this.state.searchText, navigation)
            }}
            color="#db6e2e"
            fontColor="white"/>
          </View>
        </View>
    );
  }
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  searchHotelsByCity:(city, navigation) => {
    dispatch(ActionSetLoading());
    dispatch(ActionSetCity(city));
    let parameter = 'city';
    let value = city;
    dispatch(ActionGetHotelByParameter(parameter, value));
    navigation.navigate('hotels')
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
