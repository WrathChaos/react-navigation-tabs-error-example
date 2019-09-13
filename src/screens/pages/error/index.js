import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";

const ErrorScreen = props => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Error Page</Text>
  </View>
);

ErrorScreen.propTypes = {};

ErrorScreen.defaultProps = {};

export default ErrorScreen;
