import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import MapView from 'react-native-map-clustering';
import { Marker } from 'react-native-maps';

const HomeScreen = (props) => {
	const {} = props;
	return (
		<MapView
			region={{
				latitude: 52.5,
				longitude: 19.2,
				latitudeDelta: 8.5,
				longitudeDelta: 8.5,
			}}
			style={{ width: 400, height: 800 }}>
			<Marker coordinate={{ latitude: 52.0, longitude: 18.2 }} />
			<Marker coordinate={{ latitude: 52.4, longitude: 18.7 }} />
			<Marker coordinate={{ latitude: 52.1, longitude: 18.4 }} />
			<Marker coordinate={{ latitude: 52.6, longitude: 18.3 }} />
			<Marker coordinate={{ latitude: 51.6, longitude: 18.0 }} />
			<Marker coordinate={{ latitude: 53.1, longitude: 18.8 }} />
			<Marker coordinate={{ latitude: 52.9, longitude: 19.4 }} />
			<Marker coordinate={{ latitude: 52.2, longitude: 21 }} />
		</MapView>
	);
};

HomeScreen.propTypes = {};

HomeScreen.defaultProps = {};

export default HomeScreen;
