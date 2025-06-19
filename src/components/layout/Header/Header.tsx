import MyBtnLink from "@/components/UI/MyBtnLink/MyBtnLink";

export default function Header() {
  return (
    <header className="grid-layout">
      <div className="grid-column-full">
        <div className="base">base</div>
        <div className="base base--primary">base primary</div>
        <div className="base base--secondary">base secondary</div>
      </div>
      <div className="grid-column-full">
        <div style={{ display: "flex", gap: 10 }}>
          <MyBtnLink className="btn" UIType="btn">
            btn
          </MyBtnLink>
          <MyBtnLink className="btn btn--base" UIType="btn">
            base--base
          </MyBtnLink>
          <MyBtnLink
            className="btn btn--base active"
            UIType="btn"
            btnType={"button"}
          >
            base--base active
          </MyBtnLink>
          <MyBtnLink
            className="btn btn--base active"
            UIType="btn"
            isDisabled={true}
          >
            base--base isDisabled
          </MyBtnLink>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <MyBtnLink className="btn btn--primary" UIType="btn">
            base--primary
          </MyBtnLink>
          <MyBtnLink className="btn btn--primary active" UIType="btn">
            base--primary active
          </MyBtnLink>
          <MyBtnLink
            className="btn btn--primary active"
            UIType="btn"
            isDisabled={true}
          >
            base--primary isDisabled
          </MyBtnLink>
        </div>
        <div style={{ display: "flex", gap: 10, background: "#000" }}>
          <MyBtnLink className="btn btn--secondary" UIType="btn">
            base--secondary
          </MyBtnLink>
          <MyBtnLink className="btn btn--secondary active" UIType="btn">
            base--secondary active
          </MyBtnLink>
        </div>
      </div>
      <div className="grid-column-full">
        <div style={{ display: "flex", gap: 10 }}>
          <MyBtnLink className="link" UIType="link">
            link
          </MyBtnLink>
          <MyBtnLink className="link link--base" UIType="link">
            link--base
          </MyBtnLink>
          <MyBtnLink className="link link--base active" UIType="link">
            link--base active
          </MyBtnLink>
          <MyBtnLink
            className="link link--base active"
            UIType="link"
            isDisabled={true}
          >
            base--base isDisabled
          </MyBtnLink>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <MyBtnLink className="link link--primary" UIType="link">
            base--primary
          </MyBtnLink>
          <MyBtnLink className="link link--primary active" UIType="link">
            base--primary active
          </MyBtnLink>
          <MyBtnLink
            className="link link--primary active"
            UIType="btn"
            isDisabled={true}
          >
            base--primary isDisabled
          </MyBtnLink>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <MyBtnLink className="link link--secondary" UIType="link">
            base--secondary
          </MyBtnLink>
          <MyBtnLink className="link link--secondary active" UIType="link">
            base--secondary active
          </MyBtnLink>
          <MyBtnLink
            className="link link--secondary active"
            UIType="link"
            isDisabled={true}
          >
            base--secondary active isDisabled
          </MyBtnLink>
        </div>
      </div>
      <div className="grid-column-full">
        <div style={{ display: "flex", gap: 10 }}>
          <MyBtnLink className="navlink" UIType="navlink">
            link
          </MyBtnLink>
          <MyBtnLink className="navlink navlink--base" UIType="navlink">
            link--base
          </MyBtnLink>
          <MyBtnLink className="navlink navlink--base active" UIType="navlink">
            link--base active
          </MyBtnLink>
          <MyBtnLink
            className="navlink navlink--base active"
            UIType="link"
            isDisabled={true}
          >
            base--base isDisabled
          </MyBtnLink>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <MyBtnLink className="navlink navlink--primary" UIType="navlink">
            base--primary
          </MyBtnLink>
          <MyBtnLink
            className="navlink navlink--primary active"
            UIType="navlink"
          >
            base--primary active
          </MyBtnLink>
          <MyBtnLink
            className="navlink navlink--primary active"
            UIType="navlink"
            isDisabled={true}
          >
            base--primary isDisabled
          </MyBtnLink>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <MyBtnLink className="navlink navlink--secondary" UIType="navlink">
            base--secondary
          </MyBtnLink>
          <MyBtnLink
            className="navlink navlink--secondary active"
            UIType="navlink"
          >
            base--secondary active
          </MyBtnLink>
          <MyBtnLink
            className="navlink navlink--secondary active"
            UIType="navlink"
            isDisabled={true}
          >
            base--secondary active isDisabled
          </MyBtnLink>
        </div>
      </div>
    </header>
  );
}
