import MyBtnLink from "@/components/UI/MyBtnLink/MyBtnLink";
import MyIcon from "@/components/UI/MyIcon/MyIcon";
import styled from "styled-components";

const MyContainer = styled.div`
  padding: 22px 16px;
  transition: all ease-in-out 0.3s;

  &:hover,
  &:focus-visible {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.3;
  }
`;

const MyFavoriteBtn = styled(MyBtnLink)`
  position: relative;
  display: flex;
  text-decoration: none;
`;

const MyFavoriteIcon = styled(MyIcon)`
  color: #000000;
`;

const MyFavoriteCount = styled.div`
  position: absolute;
  padding: 5px;
  bottom: 8px;
  left: 11px;
  color: #ffffff;
  background-color: #7db54f;
  border-radius: 50%;
  font-size: 10px;
  line-height: 10px;
`;

export default function MyFavoriteLink() {
  return (
    <MyContainer>
      <MyFavoriteBtn href="/favorite" UIType="navlink">
        <MyFavoriteIcon
          width="20px"
          height="20px"
          id={`heart`}
        ></MyFavoriteIcon>
        <MyFavoriteCount>20</MyFavoriteCount>
      </MyFavoriteBtn>
    </MyContainer>
  );
}
