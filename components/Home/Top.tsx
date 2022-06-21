import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import Refresh from "./Refresh";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
      className="bg-white pb-10 "
      style={{ borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}
    >
      <Text className="font-[PoppinsRegular] text-3xl mt-8 ml-2">
        {!!user && `Witaj ${user.FirstName}`}
      </Text>
      <Refresh setGrades={setGrades} />
    </View>
  );
};

export default Top;
