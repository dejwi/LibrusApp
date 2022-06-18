import { useState, useEffect } from "react";
import moment from "moment";

const useCurrentWeek = () => {
  const [currentWeek, setCurrentWeek] = useState<string[]>();

  useEffect(() => {
    const currentDate = moment();
    const weekStart = currentDate.clone().startOf("week");

    const days = [];
    for (let i = 0; i <= 4; i++) {
      days.push(moment(weekStart).add(i, "days").format("YYYY-MM-DD"));
    }
    setCurrentWeek(days);
  }, []);
  return [currentWeek];
};
export default useCurrentWeek;
