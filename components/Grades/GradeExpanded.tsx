import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";
import "moment/locale/pl";
import GradeColored from "../GradeColored";
import { MainColors } from "../../theme";

interface props {
  grade: Grade;
}
const GradeExpanded: React.FC<props> = ({ grade }) => {
  const daysAgo = moment().diff(moment(grade.date), "days");

  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        marginTop: 8,
        alignItems: "center",
        flex: 1,
      }}
    >
      <GradeColored grade={grade.grade} marginL={0} fontSize={20} size={32} />
      <View className="ml-1 flex-1 flex-row items-center">
        <View className="flex-1">
          <Text
            className="font-[PoppinsRegular]"
            style={{ color: MainColors.primary, fontSize: 12 }}
          >
            {truncate(grade.category, 30)}
          </Text>
          {!!grade.weight && (
            <Text
              className="font-[PoppinsRegular] text-xs -mt-1.5"
              style={{ color: MainColors.secondary }}
            >
              waga {grade.weight}
            </Text>
          )}
        </View>
        <View className="">
          <Text
            className="font-[PoppinsRegular] text-xs"
            style={{ color: MainColors.secondary }}
          >
            {daysAgo <= 7
              ? moment(grade.date).locale("pl").fromNow()
              : moment(grade.date).format("DD.MM.YYYY")}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GradeExpanded;

function truncate(str: string, n: number) {
  return str.length > n ? str.substr(0, n - 1).trim() + "..." : str;
}
