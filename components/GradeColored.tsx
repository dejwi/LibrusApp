import { LastGradesColors } from "../theme";
import { View, Text } from "react-native";

interface props {
  grade: string;
  size?: number;
  marginL?: number;
  fontSize?: number;
  height?: number;
}
const GradeColored: React.FC<props> = ({ grade, size, marginL, fontSize }) => {
  // leave only numbers
  const filtered = grade.replace(/\D/g, "");
  const color =
    filtered && +filtered <= 6
      ? LastGradesColors[+filtered as number]
      : LastGradesColors[0];

  return (
    <View
      style={{
        backgroundColor: color,
        marginLeft: marginL || 8,
        borderRadius: 3,
        width: size || 24,
        height: size || 24,
        justifyContent: "center",
      }}
    >
      <Text
        className="font-[PoppinsRegular] text-center"
        style={{ fontSize: fontSize || 14 }}
      >
        {grade}
      </Text>
    </View>
  );
};

export default GradeColored;
