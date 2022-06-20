import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { MainColors, LastGradesColors } from "../../theme";
import GradeColored from "../GradeColored";

const LastGrades: React.FC<props> = ({ grades }) => {
  return (
    <View className="items-center mt-2.5 w-[100%]">
      <Text
        className="font-[PoppinsRegular]"
        style={{ color: MainColors.primary }}
      >
        Ostatnie oceny
      </Text>
      <View
        className="rounded-md w-[85%]"
        style={{
          backgroundColor: MainColors.bgSecondary,
        }}
      >
        {Object.keys(grades.latest).map((subject, index) => (
          <GradeSection
            subject={subject}
            grades={grades.latest[subject]}
            key={subject}
          />
        ))}
      </View>
    </View>
  );
};

const GradeSection: React.FC<props2> = ({ subject, grades }) => {
  const trimSubject = truncate(subject.toLowerCase(), 23);
  return (
    <View className="flex-row items-center py-3 px-2">
      <Text className="font-[PoppinsRegular]">{trimSubject}</Text>
      <View className="flex-row ml-1">
        {grades.map((g, index) => (
          <GradeColored grade={g.grade} key={subject + index} />
        ))}
      </View>
    </View>
  );
};

function truncate(str: string, n: number) {
  return str.length > n ? str.substr(0, n - 1).trim() + "..." : str;
}

export default LastGrades;

interface props {
  grades: Grades;
}
interface props2 {
  subject: string;
  grades: Grade[];
}
