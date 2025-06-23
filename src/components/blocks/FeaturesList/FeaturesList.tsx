import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-direction: column;
  padding: 81px 85px;
  max-width: 400px;
  text-align: center;
  background-color: #f0f6fa;

  .subtitle {
    text-transform: uppercase;
  }

  .item-description {
    color: #333333;
  }

  &:nth-child(even) {
    background-color: #ffffff;
  }
`;

export default function FeaturesList() {
  const DATA = [
    {
      title: "Жильё",
      description: "Рекомендуем пожить в настоящем мотеле, всё как в кино!",
      imgSrc: "./img/decore/house.svg",
    },
    {
      title: "Еда",
      description:
        "Всегда заказывайтетоповый фирменный бургер, вы не разочаруетесь!",
      imgSrc: "./img/decore/food.svg",
    },
    {
      title: "Сувениры",
      description:
        "Не только китайского, но и настоящего местного производства!",
      imgSrc: "./img/decore/souvenir.svg",
    },
  ];

  return (
    <List className="list m-0">
      {DATA.map((el) => {
        return (
          <ListItem key={el.title}>
            <img
              src={el.imgSrc}
              alt={el.title}
              aria-hidden="true"
              width={`75`}
              height={`72`}
            />
            <h3 className="subtitle m-0">{el.title}</h3>
            <p className="item-description m-0">{el.description}</p>
          </ListItem>
        );
      })}
    </List>
  );
}
