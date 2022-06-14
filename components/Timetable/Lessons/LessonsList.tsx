import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { MainColors } from "../../../theme";
import Hour from "./Hour";

const LessonsList: React.FC<props> = ({ data, selected, hours }) => {
  const [lessons, setLessons] = useState<LessonData[]>([]);
  useEffect(() => {
    Object.keys(data).map((key, index) => {
      if (index === selected - 1) setLessons(data[key]);
    });
  }, [selected]);

  return (
    <ScrollView className="flex-1 gap-3.5">
      {lessons.map((e, index) => (
        <View
          key={e !== null ? (e?.title as string) + index : "null" + index}
          className={`flex-row h-16 ${e === null && "opacity-0"}`}
        >
          <Hour fullHours={hours[index]} />
          {e !== null ? (
            <Lesson
              name={e?.title.split("-")[0].trim() as string}
              room={e?.title.split("s. ")[1] as string}
            />
          ) : (
            <Lesson name="" room="" />
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const Lesson: React.FC<props2> = ({ name, room }) => (
  <View
    style={{ backgroundColor: MainColors.bgSecondary, borderRadius: 6 }}
    className="pl-4 justify-center flex-1 mr-3.5"
  >
    <Text
      className="font-[PoppinsRegular]"
      style={{ color: MainColors.primary }}
    >
      {name}
    </Text>
    <Text
      className="font-[PoppinsRegular] text-xs"
      style={{ color: MainColors.secondary }}
    >
      {room ? `s. ${room}` : ""}
    </Text>
  </View>
);

export default LessonsList;

interface props {
  data: TableData;
  hours: string[];
  selected: number;
}
interface props2 {
  name: string;
  room: string;
}
