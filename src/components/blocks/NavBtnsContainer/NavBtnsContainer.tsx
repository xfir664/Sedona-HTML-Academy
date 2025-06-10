import styled from "styled-components";
import MyBtn from "@components/UI/MyBtn/MyBtn";
import NavSearch from "@components/blocks/NavSearch/NavSearch";
import NavFavoriteLink from "@components/blocks/NavFavoriteLink/NavFavoriteLink";
import TheamSwithc from "@components/blocks/TheamSwitch/TheamSwithc";

const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const IconsContainer = styled.div`
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

export default function NavBtnsContainer() {
  return (
    <Container>
      <IconsContainer>
        <NavSearch></NavSearch>
        <NavFavoriteLink></NavFavoriteLink>
      </IconsContainer>
      <StyledMyBtn className="btn btn--base">Хочу сюда!</StyledMyBtn>
      <IconsContainer>
        <TheamSwithc></TheamSwithc>
      </IconsContainer>
    </Container>
  );
}
