import BreadCrumsList from "@/components/blocks/BreadCrumsList/BreadCrumsList";
import FormFilter from "@/components/blocks/FormFilter/FormFilter";
import styled from "styled-components";

const MySection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 35px 70px;
  padding-bottom: 70px;
  background-image: url("./img/filter-bg.jpeg");
  background-repeat: no-repeat;
  background-size: cover;

  & .title {
    color: #ffffff;
  }
`;

const MyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default function FilterSection() {
  return (
    <MySection>
      <MyContainer>
        <h2 className="title title--primary m-0">Гостиницы Седоны</h2>
        <BreadCrumsList></BreadCrumsList>
      </MyContainer>
      <FormFilter></FormFilter>
    </MySection>
  );
}
