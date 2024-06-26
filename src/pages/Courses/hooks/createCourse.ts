import { setDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";

export const createCourse = async (e: React.SyntheticEvent) => {
  e.preventDefault();
  console.log(e);
  const target = e.target as typeof e.target & {
    courseName: { value: string };
    courseCode: { value: string };
    schedule: { value: string };
    credit: { value: number };
    teacher: { value: string };
  };
  const courseName = target.courseName.value;
  const courseCode = target.courseCode.value;
  const schedule = target.schedule.value;
  const credit = target.credit.value;
  const teacher = target.teacher.value;
  await setDoc(doc(db, "courses", courseCode), {
    courseName: courseName,
    courseCode: courseCode,
    schedule: schedule,
    credit: credit,
    teacher: teacher,
    studentReigister: [],
  });
  console.log("Create course successfully");
};
