import { View, Text } from "react-native";
import React, { useState } from "react";
import useCurrentWeek from "../hooks/useCurrentWeek";
import SeparatedStatusBar from "../components/SeparatedStatusBar";
import Nav from "../components/Nav";
import Top from "../components/Timetable/Top/Top";
import { MainColors } from "../theme";
import moment from "moment";

const Timetable = () => {
  // week days in month
  const [currentWeek] = useCurrentWeek();
  // 1-5 week day
  const [selected, setSelected] = useState(moment().day());

  if (!currentWeek) return null;
  return (
    <View className="flex-1" style={{ backgroundColor: MainColors.bgPrimary }}>
      <SeparatedStatusBar />
      <Top
        days={currentWeek}
        selected={selected}
        setSelected={(e) => setSelected(e)}
      />

      <Nav current="Timetable" />
    </View>
  );
};

export default Timetable;
