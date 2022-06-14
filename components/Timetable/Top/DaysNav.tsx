import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MainColors, TimetableColors } from "../../../theme";

interface props {
  days: number[];
  selected: number;
  setSelected: (e: number) => void;
}
const DaysNav: React.FC<props> = ({ days, selected, setSelected }) => {
  const daysW = ["Pon", "Wt", "Śr", "Czw", "Pt"];

  const contBg = (index: number) => {
    if (index === selected - 1)
      return { backgroundColor: TimetableColors.selected };
    else return {};
  };

  return (
    <View className="flex-row justify-center gap-2">
      {days.map((e, index) => (
        <TouchableOpacity
          key={"day-" + e}
          onPress={() => setSelected(index + 1)}
        >
          <View
            className="items-center w-12 py-1.5 rounded-xl"
            style={contBg(index)}
          >
            <Text
              style={{
                color: index !== selected - 1 ? MainColors.primary : "#ffffff",
              }}
              className="text-xs"
            >
              {daysW[index]}
            </Text>
            <Text
              style={{
                color: index !== selected - 1 ? MainColors.primary : "#ffffff",
              }}
            >
              {e}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DaysNav;
