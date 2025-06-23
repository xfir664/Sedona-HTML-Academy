import styled from "styled-components";
import AdvantagesItem from "../AdvantagesItem/AdvantagesItem";

const MyList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export default function AdvantadesList() {
  let imgSrcCount = 0;
  const ADVANTAGES_DATA = [
    {
      title: `Настоящий городок`,
      deskription: `Седона — не аттракцион для туристов, там течёт своя жизнь`,
      imgSrc: "./img/true-citi@2x.webp",
    },
    {
      title: `Небольшая площадь`,
      deskription: `Все достопримечательности находятся очень близко`,
    },
    {
      title: `Красивая дорог`,
      deskription: `Ехать в Седону из Лас-Вегаса совсем не скучно!`,
    },
    {
      title: `Мало туристов`,
      deskription: `Большинство едет в Гранд Каньон и толпится там`,
    },
    {
      title: `Там есть мост дьявола`,
      deskription: `Да, по нему можно пройти! Если вы осмелитесь, разумеется`,
      imgSrc: "./img/devil-bridge@2x.webp",
    },
  ];

  return (
    <MyList className="list m-0">
      {ADVANTAGES_DATA.map((el) => {
        let rowClass = "";

        if (el.imgSrc) {
          imgSrcCount++;
          if (imgSrcCount % 2 === 0) {
            rowClass = "row-reverse";
          }
        }

        const baseClass = el.imgSrc ? "" : "primary";
        return (
          <AdvantagesItem
            key={el.title}
            title={el.title}
            description={el.deskription}
            imgSrc={el.imgSrc}
            className={`${baseClass} ${rowClass}`.trim()}
          ></AdvantagesItem>
        );
      })}
    </MyList>
  );
}
