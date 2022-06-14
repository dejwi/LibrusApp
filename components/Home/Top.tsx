import { View, Text } from "react-native";
import React from "react";
import ReloadSvg from "../../assets/svgs/reload.svg";

const Top = () => {
  return (
    <View
      className="bg-white pb-12 "
      style={{ borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}
    >
      <Text className="font-[PoppinsRegular] text-3xl mt-8 ml-1">
        Witaj Dawid
      </Text>
      <View className="flex-row items-center absolute bottom-0.5 self-center">
        <ReloadSvg width={20} fill="#000" />
        <Text className="font-[PoppinsRegular] text-xs">2 godziny temu</Text>
      </View>
    </View>
  );
};

export default Top;
