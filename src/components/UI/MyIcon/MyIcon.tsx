import { CSSProperties } from "styled-components";

type MyIconType = Readonly<{
  id: string;
  width?: string;
  height?: string;
  className?: string;
  style?: CSSProperties;
}>;

export default function MyIcon({ ...props }: MyIconType) {
  const { id, width, height, className, style } = props;

  return (
    <svg width={width} height={height} className={className} style={style}>
      <use href={`sprite/sprite.svg#${id}`}></use>
    </svg>
  );
}
