declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.webp" {
  const content: string;
  export default content;
}
