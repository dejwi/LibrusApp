import { View, Text, Image } from "react-native";
import React from "react";

import SeparatedStatusBar from "../components/SeparatedStatusBar";
import Top from "../components/Home/Top";
import CurrentLesson from "../components/Home/CurrentLesson";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <View className="bg-[#F5F7FB] flex-1">
      <SeparatedStatusBar bg="#fff" />
      <Top />
      <View className="items-center mt-6">
        <CurrentLesson />
      </View>
      <Nav current="Home" />
    </View>
  );
};

export default Home;
