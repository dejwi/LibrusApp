interface TableData {
  [day: string]: LessonData[] | null[];
}
interface TimetableData {
  hours: string[];
  table: TableData;
}
type LessonData = {
  title: string;
  flag: string;
  insideFields: {
    firstField: string | null;
    secondField: string | null;
  };
} | null;

interface UserData {
  Class: string;
  Email: string;
  FirstName: string;
  FullName: string;
  LastName: string;
  Login: string;
  password: string;
}
