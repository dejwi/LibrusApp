import { useState, useEffect } from "react";
import moment from "moment";

const useCurrentWeek = () => {
  const [currentWeek, setCurrentWeek] = useState<number[]>();

  useEffect(() => {
    var currentDate = moment();
    var weekStart = currentDate.clone().startOf("isoWeek");
    var days = [];
    for (var i = 0; i <= 4; i++) {
      days.push(+moment(weekStart).add(i, "days").format("DD"));
    }
    setCurrentWeek(days);
  }, []);
  return [currentWeek];
};
export default useCurrentWeek;
