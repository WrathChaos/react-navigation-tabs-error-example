import _ from "lodash";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import BottomMenu from "shared-components/BottomMenuWrapper";
import ClusterMapView from "./components/ClusterMapView";

import FloatingActionButton from "react-native-floating-action-button";

const HomeScreen = props => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "stretch",
        flexDirection: "column",
        justifyContent: "flex-end",
        ...StyleSheet.absoluteFillObject
      }}
    >
      <ClusterMapView />
      <SafeAreaView>
        <View style={{ right: 16 }}>
          <FloatingActionButton />
        </View>
        <BottomMenu />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
