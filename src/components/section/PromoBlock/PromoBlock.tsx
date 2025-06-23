import styled from "styled-components";
import welcome from "/img/welcome.svg";

const MySection = styled.section`
  width: 100%;
  padding: 51px 0;
  padding-bottom: 82px;
  margin: 0 auto;
  background-color: #68a2ca;
  background-image: url("./img/hero-decore.svg"),
    url("./img/hero-background@1x.webp");
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: bottom, center;

  img {
    display: flex;
    margin: 0 auto;
  }
`;

export default function PromoBlock() {
  return (
    <MySection>
      <h1 className="visually-hidden ">Главная страница</h1>
      <img src={welcome} alt="Welcome" width={`458`} height={`352`} />
    </MySection>
  );
}
