"use server";

import { Fragment } from "react";

const RootPage = async () => {
  return (
    <div className="grid grid-cols-2">
      <span className="font-oleo col-span-2 mx-auto">Champ</span>
      {data.map(({ lang, value }) => (
        <Fragment key={lang}>
          <span className="text-primary font-bold">{lang}</span>
          <span>{value}</span>
        </Fragment>
      ))}
    </div>
  );
};

export default RootPage;

const data = [
  {
    lang: "English",
    value: `Hello, I am Champ.
This text includes English letters and punctuation.
I love programming!`,
  },
  {
    lang: "Thai",
    value: `สวัสดี ฉันชื่อแชมป์
ที่นี่มีตัวอักษรจีน พินอิน และเครื่องหมายวรรคตอน
ฉันชอบเขียนโปรแกรม!`,
  },
  {
    lang: "Japanese",
    value: `こんにちは、わたしはチャンプです。
ひらがな と カタカナ と 漢字 が ぜんぶ あります。
プログラミング が だいすき です！`,
  },
  {
    lang: "Simplified Chinese",
    value: `你好，我是冠军。
这里有汉字、拼音和标点符号。
我喜欢编程！`,
  },
  {
    lang: "Traditional Chinese",
    value: `你好，我是冠軍。
這裡有漢字、拼音和標點符號。
我喜歡編程！`,
  },
];
