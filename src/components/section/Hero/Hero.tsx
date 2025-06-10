import styled from "styled-components";
import HeroBg1x from "/img/hero-background@1x.webp";
import HeroBg2x from "/img/hero-background@2x.webp";
import WelcomeToSedona from "/img/welcome.svg";

const HeroSection = styled.section`
  padding: 51px 371px 82px;
  background-color: var(--bg-secondary);
  background-image: url("/Sedona-HTML-Academy/img/hero-decore.svg"),
    image-set(url(${HeroBg1x}) 1x, url(${HeroBg2x}) 2x);
  background-position: bottom, center;
  background-repeat: no-repeat, no-repeat;
  background-size: 100% auto, cover;
`;

const HeroImg = styled.img`
  display: block;
`;

export default function Hero() {
  return (
    <HeroSection>
      <h1 className="visually-hidden">Главная страница Sedona</h1>
      <HeroImg
        width={`458px`}
        height={`352px`}
        src={WelcomeToSedona}
        alt="Wealcome"
      />
    </HeroSection>
  );
}
