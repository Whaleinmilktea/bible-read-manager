import dayjs from "dayjs";
import { bible } from "../data/bible";

export const genrateCycle = (
  propStartBook: string,
  propStartChapter: number,
  propCycle: number,
  propDaysOfWeek: number[],
  propDate: string
) => {

  // ? let curDate = dayjs(userInput);
  let curDate = dayjs(propDate);

  const startBook = propStartBook;
  let startChapter = propStartChapter;
  const cycle = propCycle;
  const dayofweek = propDaysOfWeek;
  let trackWeek = 0;
  const schedule = [];

  // 시작 인덱스 찾기
  let bookIndex = bible.findIndex((entry) => entry[0] === startBook);

  // 스케줄 생성
  while (bookIndex < bible.length) {
    let [curBook, maxChapters] = bible[bookIndex];
    const cycleArr = [];

    if (dayofweek[trackWeek] === 0) {
      curDate = curDate.add(1, "day");
      trackWeek++
    } else {
      for (let i = 0; i < cycle; i++) {
        if (startChapter > maxChapters) {
          startChapter = 1;
          bookIndex++;
          if (bookIndex >= bible.length) {
            break;
          }
          [curBook, maxChapters] = bible[bookIndex];
        }
        cycleArr.push([curBook, startChapter]);
        startChapter++;
      }
      curDate = curDate.add(1, "day");
      trackWeek++
      schedule.push([curDate.format("YYYY-MM-DD dddd"), cycleArr]);
    }
    if (trackWeek > 6) {
      trackWeek = 0
    }
  }
  return schedule;
};
