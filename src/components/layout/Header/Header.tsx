import styled from "styled-components";
import MainLogo from "@/components/blocks/MainLogo/MainLogo";

const MyHeader = styled.header`
  padding: 0 70px;
`;

export default function Header() {
  return (
    <MyHeader>
      <nav className="main-nav">
        <MainLogo></MainLogo>
      </nav>
    </MyHeader>
  );
}
