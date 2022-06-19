import { View, Text } from "react-native";
import React, { useState } from "react";
import SeparatedStatusBar from "../components/SeparatedStatusBar";
import Nav from "../components/Nav";
import Top from "../components/Timetable/Top/Top";
import { MainColors } from "../theme";
import moment from "moment";
import LessonsList from "../components/Timetable/Lessons/LessonsList";
import useTimetableUtil from "../hooks/useTimetableUtil";
import { MotiView } from "moti";

const Timetable = () => {
  // week days in month
  const [currentWeek, selected, setSelected, data] = useTimetableUtil();
  // 1-5 week day

  return (
    <View className="flex-1" style={{ backgroundColor: MainColors.bgPrimary }}>
      <SeparatedStatusBar />
      {!!currentWeek && !!selected && !!data && (
        <>
          <MotiView
            className="flex-1"
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "timing", duration: 150 }}
          >
            <Top
              days={currentWeek as string[]}
              selected={selected as string}
              setSelected={(e) =>
                (setSelected as React.Dispatch<React.SetStateAction<string>>)(e)
              }
            />
            <LessonsList
              selected={selected as string}
              data={data as Timetable}
            />
          </MotiView>
        </>
      )}
    </View>
  );
};

export default Timetable;
