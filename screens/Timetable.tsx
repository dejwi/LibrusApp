import { View, Text } from "react-native";
import React, { useState } from "react";
import SeparatedStatusBar from "../components/SeparatedStatusBar";
import Nav from "../components/Nav";
import Top from "../components/Timetable/Top/Top";
import { MainColors } from "../theme";
import moment from "moment";
import Lessons from "../components/Timetable/Lessons/Lessons";
import useTimetableUtil from "../hooks/useTimetableUtil";

const Timetable = () => {
  // week days in month
  const [currentWeek, selected, setSelected, data] = useTimetableUtil();
  // 1-5 week day

  return (
    <View className="flex-1" style={{ backgroundColor: MainColors.bgPrimary }}>
      {!currentWeek && !selected && !data ? null : (
        <>
          <SeparatedStatusBar />
          <Top
            days={currentWeek as string[]}
            selected={selected as string}
            setSelected={(e) =>
              (setSelected as React.Dispatch<React.SetStateAction<string>>)(e)
            }
          />
          <Lessons selected={selected as string} data={data as Timetable} />
        </>
      )}
    </View>
  );
};

export default Timetable;
