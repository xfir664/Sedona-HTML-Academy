import styled from "styled-components";
import MyBtn from "@components/UI/MyBtn/MyBtn";
import MyIcon from "@components/UI/MyIcon/MyIcon";

const StyledMyhBtn = styled(MyBtn)`
  display: flex;
  padding: 22px 12px;
  background-color: transparent;
`;

const SearchIcon = styled(MyIcon)`
  transition: all ease 0.3s;
`;

export default function NavSearch() {
  return (
    <StyledMyhBtn className="btn">
      <SearchIcon
        className={`icon icon--base`}
        id="search"
        width={"20px"}
        height={"20px"}
      ></SearchIcon>
    </StyledMyhBtn>
  );
}
