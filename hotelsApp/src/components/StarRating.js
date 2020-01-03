import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Image
} from 'react-native';

export default class StarRating extends Component {
	render() {
        let ratings = this.props.ratings;
        let stars = [];

        for (var i = 1; i <= 5; i++) {
			let path = require('../../assets/icons/star-gold.png');
			if (i > ratings) {
				path = require('../../assets/icons/star-white.png');
			}

			stars.push((<Image key={i} style={styles.image} source={path} />));
        }
        
		return (
			<View style={ styles.container }>
              { stars }
			</View>
		);
	}
}

const styles = StyleSheet.create({
    container: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	image: {
		width: 25,
		height: 25
	},
});