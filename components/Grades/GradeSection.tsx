import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MainColors } from "../../theme";
import GradeColored from "../GradeColored";
import GradeExpanded from "./GradeExpanded";

const GradeSection: React.FC<props> = ({ subject, grades }) => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity
      style={{
        paddingVertical: 6,
        backgroundColor: MainColors.bgSecondary,
        marginTop: 3,
      }}
      onPress={() => setExpanded((prev) => !prev)}
    >
      <Text
        style={{
          fontFamily: "PoppinsRegular",
          color: MainColors.primary,
          marginLeft: 7,
        }}
      >
        {subject.toLowerCase()}
      </Text>
      <View className="flex-row">
        {!isExpanded ? (
          grades
            .slice(0, 8)
            .map((g, index) => (
              <GradeColored grade={g.grade} key={subject + index} />
            ))
        ) : (
          <View className="w-full">
            <Text
              style={{
                fontFamily: "PoppinsRegular",
                color: MainColors.secondary,
                marginLeft: 7,
              }}
            >
              {grades.length} ocen
            </Text>
            {grades.map((g, index) => (
              <GradeExpanded grade={g} key={g.grade + index + subject} />
            ))}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

interface props {
  subject: string;
  grades: Grade[];
}

export default GradeSection;
