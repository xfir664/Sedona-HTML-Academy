import { NavLink } from "react-router-dom";

type MyBtnLinkType = Readonly<{
  children: any;
  UIType: "btn" | "link" | "navlink";
  href?: string;
  to?: string;
  isDisabled?: boolean;
  isActive?: boolean;
  isEnd?: boolean;
  className?: string;
  btnType?: "button" | "submit" | "reset";
  onClick?: () => any;
}>;

export default function MyBtnLink(props: MyBtnLinkType) {
  const {
    onClick,
    children,
    href,
    btnType,
    UIType,
    className,
    isDisabled,
    isActive,
    isEnd,
  } = props;

  return (
    <>
      {UIType === "btn" && (
        <button
          onClick={onClick}
          type={btnType}
          className={`${className} ${isActive ? "active" : ""}`}
          disabled={isDisabled}
        >
          {children}
        </button>
      )}
      {UIType === "link" && (
        <a
          className={`${className} ${isActive ? "active" : ""} ${
            isDisabled ? "disabled" : ""
          }`}
          href={href ?? ""}
        >
          {children}
        </a>
      )}
      {UIType === "navlink" && (
        <NavLink
          className={`${className} ${isDisabled ? "disabled" : ""}`}
          to={href ?? ""}
          end={isEnd}
        >
          {children}
        </NavLink>
      )}
    </>
  );
}
