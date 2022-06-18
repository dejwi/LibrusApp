import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import LessonsList from "./LessonsList";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface props {
  selected: string;
}
const Lessons: React.FC<props> = ({ selected }) => {
  const [data, setData] = useState<Timetable>();

  useEffect(() => {
    AsyncStorage.getItem("timetable").then((tt) => {
      if (tt) setData(JSON.parse(tt));
    });
  }, []);

  return (
    <View className="flex-1 mt-3.5 flex-row">
      {!!data && <LessonsList selected={selected} data={data} />}
    </View>
  );
};

export default Lessons;
