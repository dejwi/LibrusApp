import { View, Text } from "react-native";
import React from "react";
import { MainColors } from "../../../theme";

interface props {
  fullHours: string;
}
const Hour: React.FC<props> = ({ fullHours }) => {
  return (
    <View className="items-center justify-center w-20">
      <Text
        className="text-xs font-[PoppinsRegular]"
        style={{ color: MainColors.secondary }}
      >
        {fullHours.split(" - ")[0]}
      </Text>
      <Text
        className="text-xs font-[PoppinsRegular]"
        style={{ color: MainColors.secondary }}
      >
        {fullHours.split(" - ")[1]}
      </Text>
    </View>
  );
};

export default Hour;
