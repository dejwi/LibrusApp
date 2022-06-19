import { useState, useEffect } from "react";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Librus from "librusjs/lib";

const useTimetableUtil = () => {
  const [currentWeek, setCurrentWeek] = useState<string[]>();
  const [selected, setSelected] = useState<string>();
  const [data, setData] = useState<Timetable>();

  useEffect(() => {
    const weekDays = getWeekDays();
    const day = moment().isoWeekday();
    if (day <= 5) {
      AsyncStorage.getItem("timetable").then((tt) => {
        if (tt) setData(JSON.parse(tt));
      });
    } else {
      // get next week
      AsyncStorage.getItem("timetablenext").then(async (tt) => {
        if (tt) {
          const ttj: Timetable = JSON.parse(tt);
          // is actually next week
          if (ttj[weekDays[0]]) return setData(ttj);
        }

        const usr: UserData = JSON.parse(
          (await AsyncStorage.getItem("user")) as string
        );

        const client = await Librus(usr.Login, usr.password);
        const datatt = await client.getTimetable(weekDays[0]);
        await AsyncStorage.setItem("timetablenext", JSON.stringify(datatt));
        setData(datatt);
      });
    }

    setCurrentWeek(weekDays);
    setSelected(getDay());
  }, []);
  return [currentWeek, selected, setSelected, data];
};
export default useTimetableUtil;

const getDay = () => {
  let day = moment();
  if (day.isoWeekday() > 5) day = day.clone().add("2", "days").startOf("week");

  return day.format("YYYY-MM-DD");
};

const getWeekDays = () => {
  let currentDate = moment();
  if (currentDate.isoWeekday() > 5) currentDate.add("2", "days");

  const weekStart = currentDate.clone().startOf("week");

  const days = [];
  for (let i = 0; i <= 4; i++) {
    days.push(moment(weekStart).add(i, "days").format("YYYY-MM-DD"));
  }
  return days;
};
