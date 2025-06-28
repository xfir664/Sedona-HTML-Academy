import CatalogViewToggle from "@/components/blocks/CatalogViewToggle/CatalogViewToggle";
import MySelect from "@/components/UI/MySelect/MySelect";
import CatalogList from "@components/blocks/CatalogList/CatalogList";
import styled from "styled-components";

const MySection = styled.section`
  padding: 50px 70px;
  padding-bottom: 60px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 40px;
`;

const MyTitle = styled.h2`
  text-transform: uppercase;
  margin-right: auto;
`;

const PaginationList = styled.ul`
  display: flex;
  gap: 8px;

  & .pagination-item {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    line-height: 36px;
    font-weight: 700;
    width: 60px;
    height: 60px;
    background: #f2f2f2;
    border-radius: 4px;
  }
`;

export default function CatalogSection() {
  return (
    <MySection>
      <h2 className="visually-hidden">Каталог</h2>
      <TitleContainer>
        <MyTitle className="title m-0">Найдено гостиниц: 38</MyTitle>
        <MySelect name={"select"} className="select select--base"></MySelect>
        <CatalogViewToggle></CatalogViewToggle>
      </TitleContainer>
      <CatalogList></CatalogList>
      <PaginationList className="list m-0">
        <li className="pagination-item">1</li>
      </PaginationList>
    </MySection>
  );
}
