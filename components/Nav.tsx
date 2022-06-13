import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

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
  const navigation = useNavigation();

  return (
    <SafeAreaView
      className={`absolute bottom-0 w-full`}
      style={{ backgroundColor: NavColors.bg }}
    >
      <View className={`flex-row items-center justify-evenly pt-3`}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Timetable" as never)}
        >
          <TimetableIcon
            width={sizeSide}
            height={sizeSide}
            fill={
              current === "Timetable" ? NavColors.selected : NavColors.default
            }
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Home" as never)}>
          <HomeIcon
            width={sizeHome}
            height={sizeHome}
            fill={current === "Home" ? NavColors.selected : NavColors.default}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Grades" as never)}
        >
          <GradesIcon
            width={sizeSide}
            height={sizeSide}
            fill={current === "Grades" ? NavColors.selected : NavColors.default}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Nav;
