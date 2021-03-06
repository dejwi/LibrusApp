import { View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";

import SeparatedStatusBar from "../components/SeparatedStatusBar";
import Top from "../components/Home/Top";
import CurrentLesson from "../components/Home/CurrentLesson";
import LatestGrade from "../components/Home/LatestGrade";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LastGrades from "../components/Home/LastGrades";

import { MainColors } from "../theme";

const Home = () => {
  const [grades, setGrades] = useState<Grades>();

  useEffect(() => {
    AsyncStorage.getItem("grades").then((gr) => {
      if (gr) setGrades(JSON.parse(gr));
    });
  }, []);

  return (
    <View className="flex-1" style={{ backgroundColor: MainColors.bgPrimary }}>
      <SeparatedStatusBar />
      <Top setGrades={(val) => setGrades(val)} />
      <View className="items-center flex-1">
        {/* <CurrentLesson /> */}
        {!!grades && (
          <>
            {!!grades.mostRecent && <LatestGrade grades={grades} />}
            {!!grades.latest && <LastGrades grades={grades} />}
          </>
        )}
      </View>
    </View>
  );
};

export default Home;
