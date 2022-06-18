import { View, Text } from "react-native";
import React, { useState } from "react";
import ArrowBack from "../../../assets/svgs/arrow-left-thin.svg";
import DaysNav from "./DaysNav";
import { MainColors, TimetableColors } from "../../../theme";

interface props {
  days: string[];
  selected: string;
  setSelected: (e: string) => void;
}
const Top: React.FC<props> = ({ days, selected, setSelected }) => {
  return (
    <View
      className="py-4"
      style={{
        backgroundColor: MainColors.bgSecondary,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
      }}
    >
      <DaysNav days={days} selected={selected} setSelected={setSelected} />
    </View>
  );
};

export default Top;
