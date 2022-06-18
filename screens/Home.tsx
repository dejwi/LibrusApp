import { View, Text, Image } from "react-native";
import React from "react";

import SeparatedStatusBar from "../components/SeparatedStatusBar";
import Top from "../components/Home/Top";
import CurrentLesson from "../components/Home/CurrentLesson";
import Nav from "../components/Nav";

import { MainColors } from "../theme";

const Home = () => {
  return (
    <View className="flex-1" style={{ backgroundColor: MainColors.bgPrimary }}>
      <SeparatedStatusBar />
      <Top />
      <View className="items-center mt-6 flex-1">
        <CurrentLesson />
      </View>
    </View>
  );
};

export default Home;
