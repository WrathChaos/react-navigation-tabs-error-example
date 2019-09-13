import _ from "lodash";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import BottomMenu from "shared-components/BottomMenuWrapper";

const HomeScreen = props => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BottomMenu />
    </SafeAreaView>
  );
};

export default HomeScreen;
