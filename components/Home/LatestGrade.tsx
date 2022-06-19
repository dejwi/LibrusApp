import { View, Text } from "react-native";
import React from "react";
import { MainColors } from "../../theme";

const LatestGrade: React.FC<{ grades: Grades }> = ({ grades }) => {
  return (
    <View className="items-center mt-3">
      <Text
        className="font-[PoppinsRegular] mb-1"
        style={{ color: MainColors.primary }}
      >
        Ostatnia ocena
      </Text>
      <View
        className="max-w-[288px] min-w-[200px] px-3 gap-2 rounded-md flex-row items-center justify-center"
        style={{ backgroundColor: MainColors.bgSecondary }}
      >
        <View>
          <Text
            className="text-[45px] font-[PoppinsRegular]"
            style={{ color: MainColors.primary }}
          >
            {grades.mostRecent?.grade.grade}
          </Text>
        </View>
        <View>
          <Text
            className="font-[PoppinsRegular]"
            style={{ color: MainColors.primary }}
          >
            {grades.mostRecent?.subject}
          </Text>
          <Text
            className="font-[PoppinsRegular] text-xs -mt-1"
            style={{ color: MainColors.secondary }}
          >
            {grades.mostRecent?.grade.category}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LatestGrade;
