import MyIcon from "@/components/UI/MyIcon/MyIcon";
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

const MySelect = styled.div`
  border: 2px solid #e5e5e5;
  border-radius: 4px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 292px;
  margin-right: 70px;
`;

const ToggleList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 160px;
  gap: 8px;
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
        <MySelect>
          <div className="selected">Сначала дешевые</div>
          <MyIcon width="12px" height="7" id={"select-arrow"}></MyIcon>
        </MySelect>
        <ToggleList className="list m-0">
          <li
            style={{
              padding: `17px 16px`,
              boxShadow: `0 0 0 1px #000000`,
              borderRadius: `4px`,
            }}
          >
            <MyIcon width="16" height="14" id={`toggle-plite`}></MyIcon>
          </li>
          <li
            style={{
              padding: `17px 16px`,
              boxShadow: `0 0 0 1px #000000`,
              borderRadius: `4px`,
            }}
          >
            <MyIcon width="16" height="14" id={`toggle-simple`}></MyIcon>
          </li>
          <li
            style={{
              padding: `17px 16px`,
              boxShadow: `0 0 0 1px #000000`,
              borderRadius: `4px`,
            }}
          >
            <MyIcon width="16" height="14" id={`toggle-list`}></MyIcon>
          </li>
        </ToggleList>
      </TitleContainer>
      <CatalogList></CatalogList>
      <PaginationList className="list m-0">
        <li className="pagination-item">1</li>
      </PaginationList>
    </MySection>
  );
}
