import CatalogSection from "@/components/section/CatalogSection/CatalogSection";
import FilterSection from "@/components/section/FilterSection/FilterSection";
import Subscribe from "@/components/section/Subscribe/Subscribe";

export default function Catalog() {
  return (
    <>
      <h1 className="visually-hidden">Katalog</h1>
      <FilterSection></FilterSection>
      <CatalogSection></CatalogSection>
      <Subscribe></Subscribe>
    </>
  );
}
