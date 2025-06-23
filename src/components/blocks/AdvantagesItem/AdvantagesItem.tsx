import styled from "styled-components";

type AdvantadesItemType = Readonly<{
  title: string;
  description: string;
  imgSrc?: string;
  className?: string;
}>;

const MyItem = styled.li`
  display: flex;
  background-color: #82b3d3;
  color: #ffffff;

  & .item-subtitle {
    text-transform: uppercase;
    max-width: 175px;

    &::after {
      content: "";
      display: block;
      width: 60px;
      height: 2px;
      margin: 0 auto;
      margin-top: 30px;
      background-color: rgba(255, 255, 255, 0.3);
    }
  }

  &.primary {
    background-color: #e6f0f6;
    color: #000000;

    & .item-description {
      color: #333333;
    }
    & .item-subtitle {
      &::after {
        content: "";
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
  }

  &.primary:nth-child(even) {
    background-color: #f0f6fa;
  }
`;

const ItemContainer = styled.div`
  padding: 102px 82px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 400px;
  text-align: center;
`;

export default function AdvantagesItem(props: AdvantadesItemType) {
  const { title, description, imgSrc, className } = props;

  return (
    <MyItem className={className}>
      <ItemContainer>
        <h3 className="item-subtitle subtitle m-0">{title}</h3>
        <p className="item-description m-0">{description}</p>
      </ItemContainer>
      {imgSrc && (
        <img src={imgSrc} width={`800`} height={`385`} aria-label={title}></img>
      )}
    </MyItem>
  );
}
