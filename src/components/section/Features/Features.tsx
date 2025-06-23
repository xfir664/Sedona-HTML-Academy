import FeaturesList from "@/components/blocks/FeaturesList/FeaturesList";
import styled from "styled-components";

const MySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;
`;

const MyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-bottom: 64px;
  max-width: 505px;
`;

const MyTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
`;

const MyDescription = styled.p`
  color: #333333;
`;

export default function Features() {
  return (
    <MySection>
      <MyContainer>
        <MyTitle className="title m-0">
          Приезжайте в Седону отдохнуть в комфорте и уюте!
        </MyTitle>
        <MyDescription className="description m-0">
          Опытный персонал и качественное обслуживание!
        </MyDescription>
      </MyContainer>
      <FeaturesList></FeaturesList>
    </MySection>
  );
}
