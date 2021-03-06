import _ from "lodash";
import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import MapView from "react-native-map-clustering";
import ApiRequest from "services/api/hooks/redux";
import { BASE_URL, GET } from "services/api/Api.constant";

const markerImage = require("../../../assets/location-marker.png");

const ClusterMapView = props => {
  const [{ status, response }, makeRequest] = ApiRequest(BASE_URL + GET, {
    verb: "get"
  });
  const { children } = props;

  useEffect(() => {
    makeRequest();
  }, []);

  renderMarkers = () => {
    const markerList = [];
    const list = response && response.data;
    _.each(list, item => {
      const { geometry } = item;
      markerList.push(
        <Marker
          key={item._id}
          coordinate={{
            latitude:
              (geometry && geometry.features[0].geometry.coordinates[0]) ||
              39.8982,
            longitude:
              (geometry && geometry.features[0].geometry.coordinates[1]) ||
              32.77589
          }}
          image={markerImage}
        />
      );
    });
    return markerList;
  };

  return (
    <React.Fragment>
      <MapView
        region={{
          latitude: 39.89666,
          longitude: 32.776829,
          latitudeDelta: 2.1195,
          longitudeDelta: 3.5155
        }}
        clusterStyle={{
          width: 50,
          height: 50,
          backgroundColor: "white",
          borderRadius: 25,
          alignItems: "center",
          borderColor: "pink",
          borderWidth: 2,
          justifyContent: "center"
        }}
        clusterTextStyle={{
          color: "pink"
        }}
        style={{ flex: 1, zIndex: -1, ...StyleSheet.absoluteFillObject }}
      >
        {children}
        {renderMarkers()}
      </MapView>
    </React.Fragment>
  );
};

ClusterMapView.propTypes = {
  example: PropTypes.number
};

ClusterMapView.defaultProps = {
  example: 5
};

export default ClusterMapView;
