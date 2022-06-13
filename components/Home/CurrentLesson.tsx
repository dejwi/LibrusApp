import { View, Text } from "react-native";
import React from "react";

const CurrentLesson = () => {
  return (
    <View className="items-center">
      <Text className="text-[#111942] font-[PoppinsRegular]">Soon - s. 10</Text>
      <View className="bg-white w-72 py-4 pl-4 rounded-md">
        <Text className="text-[#111942] font-[PoppinsRegular]">
          podstawy programowania
        </Text>
        <Text className="text-[#666F9E] font-[PoppinsRegular] text-xs -mt-1">
          12.35 - 13.20
        </Text>
      </View>
    </View>
  );
};

export default CurrentLesson;
