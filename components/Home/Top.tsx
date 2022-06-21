import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import Refresh from "./Refresh";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MainColors } from "../../theme";
import Logout from "./Logout";

interface props {
  setGrades: (val: Grades) => void;
}
const Top: React.FC<props> = ({ setGrades }) => {
  const [user, setUser] = useState<UserData>();

  useEffect(() => {
    AsyncStorage.getItem("user").then((usr) =>
      setUser(JSON.parse(usr as string))
    );
  }, []);

  return (
    <View
      className="pb-10"
      style={{
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: MainColors.bgSecondary,
      }}
    >
      <View className="flex-row justify-between mt-8">
        <Text
          className="font-[PoppinsRegular] text-3xl ml-2"
          style={{ color: MainColors.primary }}
        >
          {!!user && `Witaj ${user.FirstName}`}
        </Text>
        <Logout />
      </View>
      <Refresh setGrades={setGrades} />
    </View>
  );
};

export default Top;
