import MyBtnLink from "@/components/UI/MyBtnLink/MyBtnLink";
import MyIcon from "@/components/UI/MyIcon/MyIcon";
import styled from "styled-components";

type CatalogItemType = Readonly<{
  title?: string;
  description?: string;
  imgSrc?: string;
  isFavorite?: string;
  itemUrl?: string;
  itemType?: string;
  rating?: string;
  starRating?: number;
  minPrice?: number;
}>;

const MyItem = styled.li`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 340px;
  box-shadow: 0 0 0 1px #e6e6e6;
  border-radius: 4px;

  & .navlink {
    display: flex;
    flex-direction: column;
    gap: 16px;
    text-decoration: none;
    color: #000000;
  }

  & .item-wrapper {
    display: flex;
    justify-content: space-between;
  }

  & .btn {
    min-width: 140px;
    padding: 8px;
    text-transform: uppercase;
    font-weight: 700;
  }

  & .star-rating {
    display: flex;
    gap: 6px;
    align-items: center;
  }

  & .icon {
    color: #83b3d3;
  }

  & .rating {
    padding: 8px;
    min-width: 140px;
    text-align: center;
    background: #f2f2f2;
    border-radius: 4px;
    font-size: 16px;
    line-height: 20px;
  }
`;

export default function CatalogItem(props: CatalogItemType) {
  const {
    title,
    description,
    imgSrc,
    isFavorite,
    itemUrl,
    rating,
    starRating,
    itemType,
    minPrice,
  } = props;

  return (
    <MyItem className="item">
      <MyBtnLink className="navlink" UIType="navlink">
        <img src="./img/hotels/amara-resort-spa@2x.webp" alt="" />
        <h3 className="title m-0">Amara Resort & Spa</h3>
      </MyBtnLink>
      <div className="item-wrapper">
        <p className="item-description m-0">Гостиница</p>
        <p className="item-price m-0">От 4000 ₽</p>
      </div>
      <div className="item-wrapper">
        <MyBtnLink className="btn btn--base" UIType="btn">
          Подробнее
        </MyBtnLink>
        <MyBtnLink className="btn btn--primary" UIType="btn">
          в избранное
        </MyBtnLink>
      </div>
      <div className="item-wrapper">
        <div className="star-rating">
          <MyIcon
            width="18"
            height="17"
            className="icon"
            id={"rating-star"}
          ></MyIcon>
          <MyIcon
            width="18"
            height="17"
            className="icon"
            id={"rating-star"}
          ></MyIcon>
          <MyIcon
            width="18"
            height="17"
            className="icon"
            id={"rating-star"}
          ></MyIcon>
          <MyIcon
            width="18"
            height="17"
            className="icon"
            id={"rating-star"}
          ></MyIcon>
        </div>
        <p className="rating m-0">Рейтинг: 8,5</p>
      </div>
    </MyItem>
  );
}
