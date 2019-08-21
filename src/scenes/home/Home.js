import _ from "lodash";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Text, View } from "react-native";
import { Marker } from "react-native-maps";
import MapView from "react-native-map-clustering";
import fetchTaskList from "../../services/redux/actions/task-actions/task-actions";

const markerImage = require("../../assets/location-marker.png");

const HomeScreen = props => {
  const { taskList } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    // console.log(taskList);
    fetchTaskList();
  }, []);

  return (
    <MapView
      region={{
        latitude: 39.89666,
        longitude: 32.776829,
        latitudeDelta: 0.0195,
        longitudeDelta: 0.0155
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
      style={{ width: 400, height: 800 }}
    >
      {_.forEach(taskList, () => {
        console.log(taskList);
        const { geometry } = taskList;
        return (
          <Marker
            coordinate={{
              latitude: geometry.features[0].geometry.coordinates[0],
              longitude: geometry.features[0].geometry.coordinates[1]
            }}
            image={markerImage}
          />
        );
      })}
    </MapView>
  );
};

HomeScreen.propTypes = {};

HomeScreen.defaultProps = {};

function mapStateToProps(state) {
  console.log(state);
  return {
    taskList: state.taskReducer.taskList
  };
}

export default connect(
  mapStateToProps,
  fetchTaskList
)(HomeScreen);
