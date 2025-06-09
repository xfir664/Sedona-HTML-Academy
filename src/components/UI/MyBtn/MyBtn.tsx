type MyBtnType = Readonly<{
  children?: any;
  className?: string;
  onClick?: () => any;
}>;

export default function MyBtn({ children, className, onClick }: MyBtnType) {
  return (
    <button onClick={onClick} className={className ?? ""}>
      {children}
    </button>
  );
}
