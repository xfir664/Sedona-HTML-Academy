import styled from "styled-components";
import MyLogo from "/img/logo.svg";
import { Link } from "react-router-dom";

const MyContainer = styled.div`
  margin-right: 30px;
  margin-bottom: -6px;
  z-index: 10;

  & img {
    transition: all ease-in-out 0.3s;

    display: block;

    &:hover,
    &:focus-visible {
      opacity: 0.6;
    }

    &:active {
      opacity: 0.3;
    }
  }
`;

export default function MainLogo() {
  return (
    <MyContainer className="logo-container">
      <Link to="\">
        <img
          src={MyLogo}
          aria-label="Logo sedona"
          width={`140`}
          height={`70`}
        />
      </Link>
    </MyContainer>
  );
}
