import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MainColors, TimetableColors } from "../../../theme";

interface props {
  days: string[];
  selected: string;
  setSelected: (e: string) => void;
}
const DaysNav: React.FC<props> = ({ days, selected, setSelected }) => {
  const daysW = ["Pon", "Wt", "Śr", "Czw", "Pt"];

  const contBg = (day: string) => {
    if (day === selected) return { backgroundColor: TimetableColors.selected };
    else return {};
  };

  return (
    <View className="flex-row justify-center gap-2">
      {days.map((e, index) => (
        <TouchableOpacity key={"day-" + e} onPress={() => setSelected(e)}>
          <View
            className="items-center w-12 py-1.5 rounded-xl"
            style={contBg(e)}
          >
            <Text
              style={{
                color: e !== selected ? MainColors.primary : "#ffffff",
              }}
              className="text-xs"
            >
              {daysW[index]}
            </Text>
            <Text
              style={{
                color: e !== selected ? MainColors.primary : "#ffffff",
              }}
            >
              {e.split("-")[2]}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};



export default DaysNav;
