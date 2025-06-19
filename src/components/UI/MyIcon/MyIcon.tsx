type MyIconType = Readonly<{
  id: string;
  width?: string;
  height?: string;
  className?: string;
  color?: string;
}>;

export default function MyIcon({ ...props }: MyIconType) {
  const { id, width, height, className, color } = props;

  return (
    <svg
      width={width}
      height={height}
      className={className}
      style={{ color: color }}
    >
      <use href={`sprite/sprite.svg#${id}`}></use>
    </svg>
  );
}
