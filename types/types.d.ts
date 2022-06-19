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

interface Grade {
  grade: string;
  weight: number;
  category: string;
  teacher: string;
  comment: string;
  date: string;
  isFinal: boolean;
  isFinalProposition: boolean;
  isSemester: boolean;
  isSemesterProposition: boolean;
  toAverage: boolean;
}

interface Grades {
  latest?: { [subject: string]: Grade[] };
  mostRecent?: { subject: string; grade: Grade };
  [semester: string]: {
    [subject: string]: Grade[];
  };
}
