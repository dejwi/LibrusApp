import { View, Text } from "react-native";
import React from "react";
import { MainColors } from "../../../theme";

interface props {
  from: string;
  to: string;
}
const Hour: React.FC<props> = ({ from, to }) => {
  return (
    <View className="items-center justify-center w-20">
      <Text
        className="text-xs font-[PoppinsRegular]"
        style={{ color: MainColors.secondary }}
      >
        {from}
      </Text>
      <Text
        className="text-xs font-[PoppinsRegular]"
        style={{ color: MainColors.secondary }}
      >
        {to}
      </Text>
    </View>
  );
};

export default Hour;
