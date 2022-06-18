import { View, Text } from "react-native";
import React, { useState } from "react";
import useCurrentWeek from "../hooks/useCurrentWeek";
import SeparatedStatusBar from "../components/SeparatedStatusBar";
import Nav from "../components/Nav";
import Top from "../components/Timetable/Top/Top";
import { MainColors } from "../theme";
import moment from "moment";
import Lessons from "../components/Timetable/Lessons/Lessons";

const Timetable = () => {
  // week days in month
  const [currentWeek] = useCurrentWeek();
  // 1-5 week day
  const day = moment().format("YYYY-MM-DD");
  const [selected, setSelected] = useState(day);

  return (
    <View className="flex-1" style={{ backgroundColor: MainColors.bgPrimary }}>
      {!currentWeek ? null : (
        <>
          <SeparatedStatusBar />
          <Top
            days={currentWeek}
            selected={selected}
            setSelected={(e) => setSelected(e)}
          />
          <Lessons selected={selected} />
        </>
      )}
    </View>
  );
};

export default Timetable;
