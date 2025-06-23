import styled from "styled-components";
import MainLogo from "@/components/blocks/MainLogo/MainLogo";
import MainNavList from "@/components/blocks/MainNavList/MainNavList";
import MySearcht from "@/components/UI/MySearch/MySearch";
import MyFavoriteLink from "@/components/blocks/MyFavoriteLink/MyFavoriteLink";
import WantHere from "@/components/blocks/WantHere/WantHere";
import ThemeSwitch from "@/components/blocks/ThemeSwitch/ThemeSwitch";

const MyHeader = styled.header`
  padding: 0 70px;
`;

const MyContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const MyNav = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export default function Header() {
  return (
    <MyHeader>
      <MyNav className="main-nav">
        <MainLogo></MainLogo>
        <MainNavList></MainNavList>
        <MyContainer>
          <div style={{ display: "flex" }}>
            <MySearcht></MySearcht>
            <MyFavoriteLink></MyFavoriteLink>
          </div>
          <WantHere></WantHere>
          <ThemeSwitch></ThemeSwitch>
        </MyContainer>
      </MyNav>
    </MyHeader>
  );
}
