import { Link } from "react-router-dom";
import styled from "styled-components";
import MyIcon from "@components/UI/MyIcon/MyIcon";

const FavoriteLink = styled(Link)`
  display: flex;
  position: relative;
  padding: 22px 12px;
  text-decoration: none;
`;

const FavoritIcon = styled(MyIcon)`
  transition: all ease 0.3s;
`;

const FavoriteCount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  padding: 5px;
  top: 11px;
  right: 4px;
  color: #ffffff;
  background-color: #7db54f;
  border-radius: 50%;
  font-size: 10px;
  line-height: 10px;
`;

export default function NavFavoriteLink() {
  return (
    <div>
      <FavoriteLink to={`/`}>
        <FavoritIcon
          className={`icon icon--base`}
          width={`20px`}
          height={`20px`}
          id={`heart`}
        ></FavoritIcon>
        <FavoriteCount>12</FavoriteCount>
      </FavoriteLink>
    </div>
  );
}
