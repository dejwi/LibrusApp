import { View, Text } from "react-native";
import React from "react";
import Refresh from "./Refresh";

const Top = () => {
  return (
    <View
      className="bg-white pb-12 "
      style={{ borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}
    >
      <Text className="font-[PoppinsRegular] text-3xl mt-8 ml-1">
        Witaj Dawid
      </Text>
      <Refresh />
    </View>
  );
};

export default Top;
