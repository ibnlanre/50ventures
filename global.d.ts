declare module "*.jpg" {
  export default "" as string;
}
declare module "*.png" {
  export default "" as string;
}

declare module "*.svg" {
  export default "" as string;
}

declare module "*.pdf" {
  export default "" as string;
}

declare module "*.json" {
  export default "" as object;
}

declare module "*.scss" {
  const styles: { [className: string]: string };
  export default styles;
}
