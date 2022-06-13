import { View } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";

import { MainColors } from "../theme";

const SeparatedStatusBar = () => {
  return (
    <View
      style={{
        height: Constants.statusBarHeight,
        backgroundColor: MainColors.bgSecondary,
      }}
    >
      <StatusBar />
    </View>
  );
};

export default SeparatedStatusBar;
