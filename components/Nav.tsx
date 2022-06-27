import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import HomeIcon from "../assets/svgs/home.svg";
import TimetableIcon from "../assets/svgs/timetable.svg";
import GradesIcon from "../assets/svgs/view-list.svg";

import { NavColors } from "../theme";

type routes = "Home" | "Timetable" | "Grades";

const Nav: React.FC<{ show: boolean }> = ({ show }) => {
  const [path, setPath] = useState<routes>("Home");
  const navigation = useNavigation();
  const sizeHome = 36;
  const sizeSide = 26;

  const goTo = (route: routes) => {
    navigation.navigate(route as never);
    setPath(route);
  };

  const touchst = {
    paddingVertical: 10,
    paddingHorizontal: 14,
  };

  return show ? (
    <SafeAreaView
      className={`w-full`}
      style={{ backgroundColor: NavColors.bg }}
    >
      <View className={`flex-row items-center justify-evenly pt-3`}>
        <TouchableOpacity onPress={() => goTo("Timetable")} style={touchst}>
          <TimetableIcon
            width={sizeSide}
            height={sizeSide}
            fill={path === "Timetable" ? NavColors.selected : NavColors.default}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => goTo("Home")} style={touchst}>
          <HomeIcon
            width={sizeHome}
            height={sizeHome}
            fill={path === "Home" ? NavColors.selected : NavColors.default}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goTo("Grades")} style={touchst}>
          <GradesIcon
            width={sizeSide}
            height={sizeSide}
            fill={path === "Grades" ? NavColors.selected : NavColors.default}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  ) : null;
};

export default Nav;
