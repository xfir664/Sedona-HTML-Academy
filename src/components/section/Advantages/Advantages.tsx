import AdvantadesList from "@/components/blocks/AdvantagesList/AdvantadesList";
import styled from "styled-components";

const MySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 69px;
`;

const MyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding-bottom: 90px;
  max-width: 651px;
`;

const MyTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
`;

const MyDescription = styled.p`
  color: #333333;
`;

export default function Advantages() {
  return (
    <MySection>
      <MyContainer>
        <MyTitle className="title m-0">
          Седона — небольшой городок в Аризоне, заслуживающий большего!
        </MyTitle>
        <MyDescription className="description m-0">
          Рассмотрим причины, по которым Седона круче, чем Гранд-Каньон!
        </MyDescription>
      </MyContainer>
      <AdvantadesList></AdvantadesList>
    </MySection>
  );
}
