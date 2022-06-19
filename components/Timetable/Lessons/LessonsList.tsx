import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { MainColors } from "../../../theme";
import Hour from "./Hour";

const LessonsList: React.FC<props> = ({ data, selected }) => {
  const current = data[selected];
  // ts was mad
  const isFreeDay = current.hasOwnProperty("isFreeDay");

  useEffect(() => {}, [selected]);

  return (
    <View className="flex-1 mt-3.5 flex-row">
      {isFreeDay ? (
        <View className="justify-center items-center flex-1">
          <Text className="font-[PoppinsRegular] text-lg text-center">
            {(current as TimetableFreeDay).name}
          </Text>
          <Text
            className="font-[PoppinsRegular] text-xs"
            style={{ color: MainColors.secondary }}
          >
            Dzień wolny
          </Text>
        </View>
      ) : (
        <ScrollView className="flex-1 gap-3.5">
          {trimmer(current as TimetableLesson[]).map((les, index) => (
            <View
              key={les !== null ? les.name + index : "null" + index}
              className={`flex-row ${les === null && "opacity-0"}`}
            >
              <Hour from={les?.hourFrom || ""} to={les?.hourTo || ""} />
              {les !== null ? (
                <Lesson
                  name={les.name}
                  room={les.room}
                  isCanceled={les.isCanceled}
                  isSubstitutionClass={les.isSubstitutionClass}
                />
              ) : (
                <Lesson name="" room="" />
              )}
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const Lesson: React.FC<props2> = ({
  name,
  room,
  isCanceled,
  isSubstitutionClass,
}) => (
  <View
    style={{ backgroundColor: MainColors.bgSecondary, borderRadius: 6 }}
    className="pl-4 justify-center flex-1 mr-3.5 py-3"
  >
    <Text
      className={`font-[PoppinsRegular] ${isCanceled ? "line-through" : ""}`}
      style={{ color: MainColors.primary }}
    >
      {isSubstitutionClass && !isCanceled ? `➜ ${name}` : name}
    </Text>
    <Text
      className="font-[PoppinsRegular] text-xs"
      style={{ color: MainColors.secondary }}
    >
      {isCanceled ? "odwołane" : `s. ${room}`}
    </Text>
  </View>
);

export default LessonsList;

// remove null's from beginning of array and ending
const trimmer = (arr: TimetableLesson[]): TimetableLesson[] => {
  const positions = arr.reduce(
    (acc, el, i) => {
      if (el !== null) {
        // @ts-ignore
        acc[1] = i + 1;
        // @ts-ignore
        if (acc[0] === undefined) acc[0] = i;
      }
      return acc;
    },
    [undefined, undefined]
  );
  return arr.slice(...positions);
};

interface props {
  data: Timetable;
  selected: string;
}
interface props2 {
  name: string;
  room: string;
  isCanceled?: boolean;
  isSubstitutionClass?: boolean;
}
