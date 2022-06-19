import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import LessonsList from "./LessonsList";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface props {
  selected: string;
  data: Timetable;
}
const Lessons: React.FC<props> = ({ selected, data }) => {

  useEffect(() => {
    
  }, []);

  return (
    <View className="flex-1 mt-3.5 flex-row">
      {!!data && <LessonsList selected={selected} data={data} />}
    </View>
  );
};

export default Lessons;
