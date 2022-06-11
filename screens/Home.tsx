import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import ReloadSvg from "../assets/svgs/reload.svg";

const Home = () => {
  return (
    <SafeAreaView>
      <Text>Witaj Dawid</Text>
      <View>
        <ReloadSvg width={30} height={30} fill="#000" />
        <Text>2 godziny temu</Text>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Home;
