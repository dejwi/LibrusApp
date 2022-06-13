import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";

import HomeIcon from "../assets/svgs/home.svg";
import TimetableIcon from "../assets/svgs/timetable.svg";
import GradesIcon from "../assets/svgs/view-list.svg";

import { NavColors } from "../theme";

interface props {
  current: "Home" | "Timetable" | "Grades";
}

const Nav: React.FC<props> = ({ current }) => {
  const sizeHome = 36;
  const sizeSide = 26;

  return (
    <SafeAreaView
      className={`absolute bottom-0 w-full`}
      style={{ backgroundColor: NavColors.bg }}
    >
      <View className={`flex-row items-center justify-evenly pt-3`}>
        <TimetableIcon
          width={sizeSide}
          height={sizeSide}
          fill={
            current === "Timetable" ? NavColors.selected : NavColors.default
          }
        />
        <HomeIcon
          width={sizeHome}
          height={sizeHome}
          fill={current === "Home" ? NavColors.selected : NavColors.default}
        />
        <GradesIcon
          width={sizeSide}
          height={sizeSide}
          fill={current === "Grades" ? NavColors.selected : NavColors.default}
        />
      </View>
    </SafeAreaView>
  );
};

export default Nav;
