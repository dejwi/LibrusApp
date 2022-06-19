import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import ReloadSvg from "../../assets/svgs/reload.svg";
import moment from "moment";
import "moment/locale/pl";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Librus from "librusjs/lib";

interface props {
  setGrades: (val: Grades) => void;
}
const Refresh: React.FC<props> = ({ setGrades }) => {
  const [isRefreshing, setRefreshing] = useState(false);
  const [refreshDate, setRefreshDate] = useState<string>();

  useEffect(() => {
    AsyncStorage.getItem("refreshtime").then((time) => {
      if (time) setRefreshDate(time);
    });
  }, []);

  const refresh = async () => {
    setRefreshing(true);
    const user: UserData = JSON.parse(
      (await AsyncStorage.getItem("user")) as string
    );
    Librus(user.Login, user.password)
      .then(async (ses) => {
        const res = await Promise.all([
          ses.getGrades(true, 7),
          ses.getTimetable(),
          ses.getLuckyNumber(),
        ]);
        const date = moment().toDate().toString();
        await Promise.all([
          AsyncStorage.setItem("grades", JSON.stringify(res[0])),
          AsyncStorage.setItem("timetable", JSON.stringify(res[1])),
          AsyncStorage.setItem("luckynumber", res[2].toString()),
          AsyncStorage.setItem("refreshtime", date),
        ]);
        setGrades(res[0]);
        setRefreshDate(date);
        setRefreshing(false);
      })
      .catch((err) => {});
  };

  return (
    <TouchableOpacity
      style={styles.touch}
      onPress={refresh}
      disabled={isRefreshing}
    >
      <ReloadSvg width={20} fill="#000" />
      <Text className="font-[PoppinsRegular] text-xs">
        {refreshDate ? moment(refreshDate).locale("pl").fromNow() : "nigdy"}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touch: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 2,
    alignSelf: "center",
  },
});

export default Refresh;
