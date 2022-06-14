import { View, Text } from "react-native";
import React from "react";
import data from "../../../testdata/timetable.json";
import LessonsList from "./LessonsList";

interface props {
  selected: number;
}
const Lessons: React.FC<props> = ({ selected }) => {
  return (
    <View className="flex-1 mt-7 flex-row">
      <LessonsList
        selected={selected}
        data={data.table as TableData}
        hours={data.hours}
      />
    </View>
  );
};

export default Lessons;
