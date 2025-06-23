import SocialList from "@/components/blocks/SocialList/SocialList";
import MyBtnLink from "@/components/UI/MyBtnLink/MyBtnLink";
import styled from "styled-components";

const MyFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 70px;
  padding-bottom: 35px;
`;

export default function Footer() {
  return (
    <MyFooter>
      <SocialList></SocialList>
      <MyBtnLink
        href="tel:+7(812)812-12-12"
        className="link link--base"
        UIType="link"
      >
        +7 (812) 812-12-12
      </MyBtnLink>
      <MyBtnLink href="tel:+7(812)812-12-12" className="link" UIType="link">
        <img width={115} height={33} src="./img/logo-htmlacademy.svg" alt="" />
      </MyBtnLink>
    </MyFooter>
  );
}
