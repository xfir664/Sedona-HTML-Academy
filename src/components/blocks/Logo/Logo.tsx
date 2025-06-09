import styled from "styled-components";
import { Link } from "react-router-dom";

const MyLogoWrapper = styled.p`
  margin-right: 30px;
  margin-bottom: -6px;
`;

const MyLogoLink = styled(Link)`
  display: flex;
  transition: opacity ease 0.3s;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.3;
  }
`;

export default function Logo() {
  return (
    <MyLogoWrapper className="logo m-0">
      <MyLogoLink to="/">
        <img src={"./img/logo.svg"} alt="logo sedona" height={70} width={140} />
      </MyLogoLink>
    </MyLogoWrapper>
  );
}
