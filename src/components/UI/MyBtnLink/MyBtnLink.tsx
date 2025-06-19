import { Link } from "react-router-dom";

type MyBtnLinkType = Readonly<{
  children: any;
  UIType: "btn" | "link" | "navlink";
  href?: string;
  to?: string;
  isDisabled?: boolean;
  className?: string;
  btnType?: "button" | "submit" | "reset";
  onClick?: () => any;
}>;

export default function MyBtnLink(props: MyBtnLinkType) {
  const { onClick, children, href, btnType, UIType, className, isDisabled } =
    props;

  return (
    <div>
      {UIType === "btn" && (
        <button
          onClick={onClick}
          type={btnType}
          className={className}
          disabled={isDisabled}
        >
          {children}
        </button>
      )}
      {UIType === "link" && (
        <a
          className={`${className} ${isDisabled ? "disabled" : ""}`}
          href={href ?? ""}
        >
          {children}
        </a>
      )}
      {UIType === "navlink" && (
        <Link
          className={`${className} ${isDisabled ? "disabled" : ""}`}
          to={href ?? ""}
        >
          {children}
        </Link>
      )}
    </div>
  );
}
