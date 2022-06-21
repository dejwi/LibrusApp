import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MainColors } from "../../theme";
import LogoutSvg from "../../assets/svgs/logout.svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Logout = () => {
  const nav = useNavigation();

  const logout = async () => {
    await Promise.all([
      AsyncStorage.setItem("user", ""),
      AsyncStorage.setItem("timetable", ""),
      AsyncStorage.setItem("timetablenext", ""),
      AsyncStorage.setItem("grades", ""),
      AsyncStorage.setItem("refreshtime", ""),
    ]);
    nav.navigate("Login" as never);
  };

  return (
    <TouchableOpacity style={{ marginRight: 5 }} onPress={logout}>
      <LogoutSvg width={25} height={25} fill={MainColors.primary} />
    </TouchableOpacity>
  );
};

export default Logout;
