import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import ReloadSvg from "../../assets/svgs/reload.svg";
import moment from "moment";
import "moment/locale/pl";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Librus from "librusjs/lib";
import { useAnimationState, MotiView } from "moti";

interface props {
  setGrades: (val: Grades) => void;
}
const Refresh: React.FC<props> = ({ setGrades }) => {
  const [isRefreshing, setRefreshing] = useState(false);
  const [refreshDate, setRefreshDate] = useState<string>();

  const animationState = useAnimationState({
    hide: {
      opacity: 0,
      translateY: -30,
    },
    show: {
      opacity: 1,
      translateY: 0,
    },
  });

  useEffect(() => {
    AsyncStorage.getItem("refreshtime").then((time) => {
      if (time) setRefreshDate(time);
    });
  }, []);
  // very janky
  const refresh = async () => {
    setRefreshing(true);
    animationState.transitionTo("hide");
    const user: UserData = JSON.parse(
      (await AsyncStorage.getItem("user")) as string
    );
    Librus(user.Login, user.password)
      .then(async (ses) => {
        const day = moment().isoWeekday();
        const toUpdate = [
          ses.getGrades(true, 7),
          ses.getTimetable(),
          ses.getLuckyNumber(),
        ];
        if (day > 5)
          toUpdate[1] = ses.getTimetable(
            moment().add("2", "days").startOf("week").format("YYYY-MM-DD")
          );

        const res = await Promise.all(toUpdate);
        const date = moment().toDate().toString();

        const toSet = [
          AsyncStorage.setItem("grades", JSON.stringify(res[0])),
          AsyncStorage.setItem("timetable", JSON.stringify(res[1])),
          AsyncStorage.setItem("luckynumber", res[2].toString()),
          AsyncStorage.setItem("refreshtime", date),
        ];
        if (day > 5)
          toSet.push(
            AsyncStorage.setItem("timetablenext", JSON.stringify(res[1]))
          );
        await Promise.all(toSet);
        setGrades(res[0]);
        setRefreshDate(date);
        setRefreshing(false);
        animationState.transitionTo("show");
      })
      .catch((err) => {});
  };

  return (
    <MotiView style={styles.touch} state={animationState}>
      <TouchableOpacity
        onPress={refresh}
        disabled={isRefreshing}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <ReloadSvg width={20} fill="#000" />
        <Text className="font-[PoppinsRegular] text-xs">
          {refreshDate ? moment(refreshDate).locale("pl").fromNow() : "nigdy"}
        </Text>
      </TouchableOpacity>
    </MotiView>
  );
};

const styles = StyleSheet.create({
  touch: {
    position: "absolute",
    bottom: 2,
    alignSelf: "center",
  },
});

export default Refresh;
