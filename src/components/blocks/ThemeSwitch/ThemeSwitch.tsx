import MyBtnLink from "@/components/UI/MyBtnLink/MyBtnLink";
import MyIcon from "@/components/UI/MyIcon/MyIcon";
import styled from "styled-components";

const MyContainer = styled.div`
  display: flex;
`;

const ThemeBtns = styled(MyBtnLink)`
  display: flex;
  padding: 22px 16px;
  transition: all ease-in-out 0.3s;

  &:hover,
  &:focus-visible {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.3;
  }
`;

const MyThemeIcons = styled(MyIcon)`
  color: #000000;
`;

export default function ThemeSwitch() {
  return (
    <MyContainer>
      <ThemeBtns className="btn" UIType="btn">
        <MyThemeIcons width="20" height="20" id={`light-mode`}></MyThemeIcons>
      </ThemeBtns>
      <ThemeBtns className="btn" UIType="btn">
        <MyThemeIcons width="20" height="20" id={`dark-mode`}></MyThemeIcons>
      </ThemeBtns>
    </MyContainer>
  );
}
