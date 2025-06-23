import MyBtnLink from "@components/UI/MyBtnLink/MyBtnLink";
import MyIcon from "@components/UI/MyIcon/MyIcon";
import styled from "styled-components";

const MyContainer = styled.div`
  padding: 22px 16px;
  display: grid;
  grid-template-columns: 0 1fr;
  transition: all ease-in-out 0.3s;
  max-width: 300px;

  &:hover,
  &:focus-visible {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.3;
  }
`;

const MySearchBtn = styled(MyBtnLink)`
  display: flex;
  grid-column: 2 / -1;
`;

const MySearchIcon = styled(MyIcon)`
  color: #000000;
`;

export default function MySearcht() {
  return (
    <MyContainer>
      <MySearchBtn btnType="button" UIType="btn" className="btn">
        <MySearchIcon id={"search"} width="20" height="20"></MySearchIcon>
      </MySearchBtn>
    </MyContainer>
  );
}
