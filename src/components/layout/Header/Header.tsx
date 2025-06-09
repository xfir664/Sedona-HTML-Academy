import styled from "styled-components";
import Logo from "../../blocks/Logo/Logo";
import MainNav from "../../blocks/MainNav/MainNav";
import MyBtn from "../../UI/MyBtn/MyBtn";

const MyWrapper = styled.div`
  padding: 0 70px;
  display: flex;
  align-items: center;
`;

const StyledMyBtn = styled(MyBtn)`
  display: block;
  padding: 8px 34px;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  font-family: var(--font-base);
  transition: all ease 0.3s;
`;

const StyledSearchBtn = styled(MyBtn)`
  padding: 22px 12px;
  background-color: transparent;
`;

export default function Header() {
  return (
    <header className="grid-layout">
      <MyWrapper className="grid-column-full">
        <Logo></Logo>
        <MainNav></MainNav>
        <StyledSearchBtn className="btn">
          <svg>
            <use href="sprite/sprite.svg#dark-mode"></use>
          </svg>
        </StyledSearchBtn>
        <StyledMyBtn className="btn btn--base">Хочу сюда!</StyledMyBtn>
      </MyWrapper>
    </header>
  );
}
