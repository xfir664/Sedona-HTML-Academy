import styled from "styled-components";

const MySection = styled.section`
  padding-top: 69px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  margin-bottom: 90px;
`;

const MyTitle = styled.h2`
  margin-bottom: 25px;
  text-align: center;
  text-transform: uppercase;
  max-width: 620px;
`;

const MyDescription = styled.p`
  max-width: 651px;
  color: #333333;
  text-align: center;
`;

export default function Advantages() {
  return (
    <MySection>
      <TitleWrapper>
        <MyTitle className="title m-0">
          Седона — небольшой городок в Аризоне, заслуживающий большего!
        </MyTitle>
        <MyDescription className="description m-0">
          Рассмотрим причины, по которым Седона круче, чем Гранд-Каньон!
        </MyDescription>
      </TitleWrapper>
    </MySection>
  );
}
