import styled from "styled-components";
import MyBtn from "@components/UI/MyBtn/MyBtn";
import MyIcon from "@components/UI/MyIcon/MyIcon";

const StyledMyhBtn = styled(MyBtn)`
  display: flex;
  padding: 22px 12px;
  background-color: transparent;
  color: #000000;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ThemeIcon = styled(MyIcon)`
  transition: all ease 0.3s;
`;

export default function TheamSwithc() {
  return (
    <IconsContainer>
      <StyledMyhBtn className="btn">
        <ThemeIcon
          className={`icon icon--base`}
          width={`20px`}
          height={`20px`}
          id={`dark-mode`}
        ></ThemeIcon>
      </StyledMyhBtn>
      <StyledMyhBtn className="btn">
        <ThemeIcon
          className={`icon icon--base`}
          width={`20px`}
          height={`20px`}
          id={`light-mode`}
        ></ThemeIcon>
      </StyledMyhBtn>
    </IconsContainer>
  );
}
