import { View } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";

const SeparatedStatusBar = ({ bg }: { bg: string }) => {
  return (
    <View style={{ height: Constants.statusBarHeight, backgroundColor: bg }}>
      <StatusBar />
    </View>
  );
};

export default SeparatedStatusBar;
