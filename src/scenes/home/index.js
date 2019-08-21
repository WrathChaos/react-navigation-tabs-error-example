import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import MapView from "react-native-map-clustering";
import { Marker } from "react-native-maps";
import { Api } from "../../services/api";

const markerImage = require("../../assets/location-marker.png");

const HomeScreen = props => {
  const {} = props;

  useEffect(() => {
    Api.getAllTasks();
  }, []);

  return (
    <MapView
      region={{
        latitude: 52.5,
        longitude: 19.2,
        latitudeDelta: 8.5,
        longitudeDelta: 8.5
      }}
      clusterStyle={{ width: 100, height: 100, backgroundColor: "blue" }}
      style={{ width: 400, height: 800 }}
    >
      <Marker
        coordinate={{ latitude: 52.0, longitude: 18.2 }}
        image={markerImage}
      />
      <Marker
        coordinate={{ latitude: 52.4, longitude: 18.7 }}
        image={markerImage}
      />
      <Marker
        coordinate={{ latitude: 52.1, longitude: 18.4 }}
        image={markerImage}
      />
      <Marker
        coordinate={{ latitude: 52.6, longitude: 18.3 }}
        image={markerImage}
      />
      <Marker
        coordinate={{ latitude: 51.6, longitude: 18.0 }}
        image={markerImage}
      />
      <Marker
        coordinate={{ latitude: 53.1, longitude: 18.8 }}
        image={markerImage}
      />
      <Marker
        coordinate={{ latitude: 52.9, longitude: 19.4 }}
        image={markerImage}
      />
      <Marker
        coordinate={{ latitude: 52.2, longitude: 21 }}
        image={markerImage}
      />
    </MapView>
  );
};

HomeScreen.propTypes = {};

HomeScreen.defaultProps = {};

export default HomeScreen;
