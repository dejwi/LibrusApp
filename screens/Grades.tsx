import { View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { MainColors } from "../theme";
import SeparatedStatusBar from "../components/SeparatedStatusBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GradeSection from "../components/Grades/GradeSection";

const Grades = () => {
  const [data, setData] = useState<{ [subject: string]: Grade[] }>();

  useEffect(() => {
    AsyncStorage.getItem("grades").then((gr) => {
      if (gr) {
        const grades: Grades = JSON.parse(gr);
        // -2 cos mostrecent and latest
        const len = Object.keys(grades).length - 2;
        // set latest semester
        setData(grades["semester" + len]);
      }
    });
  }, []);

  return (
    <View style={{ backgroundColor: MainColors.bgPrimary, flex: 1 }}>
      <SeparatedStatusBar />
      <ScrollView>
        {!!data &&
          Object.keys(data).map((subject, index) => (
            <GradeSection
              subject={subject}
              grades={data[subject]}
              key={subject}
            />
          ))}
      </ScrollView>
    </View>
  );
};

export default Grades;
