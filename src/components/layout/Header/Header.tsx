import styled from "styled-components";
import Logo from "@components/blocks/Logo/Logo";
import MainNav from "@components/blocks/MainNav/MainNav";
import NavBtnsContainer from "@components/blocks/NavBtnsContainer/NavBtnsContainer";

const MyWrapper = styled.div`
  padding: 0 70px;
  display: flex;
  align-items: center;
  z-index: 10;
`;

export default function Header() {
  return (
    <header className="grid-layout">
      <MyWrapper className="grid-column-full">
        <Logo></Logo>
        <MainNav></MainNav>
        <NavBtnsContainer></NavBtnsContainer>
      </MyWrapper>
    </header>
  );
}
