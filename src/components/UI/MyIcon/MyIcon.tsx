export default function MyIcon(props: any) {
  const { id } = props;

  return (
    <svg {...props}>
      <use href={`sprite/sprite.svg#${id}`}></use>
    </svg>
  );
}
