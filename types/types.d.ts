interface UserData {
  Class: string;
  Email: string;
  FirstName: string;
  FullName: string;
  LastName: string;
  Login: string;
  password: string;
}

type TimetableLesson = {
  name: string;
  room: string;
  lessonNo: string;
  teacher: string;
  hourFrom: string;
  hourTo: string;
  isCanceled: boolean;
  isSubstitutionClass: boolean;
  original?: string;
} | null;

interface TimetableFreeDay {
  isFreeDay: true;
  name: string;
}

interface Timetable {
  [day: string]: TimetableLesson[] | TimetableFreeDay;
}
