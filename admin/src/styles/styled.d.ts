import "styled-components";

declare module "styled-components" {
  export interface IColorPalette {
    MainColor: string;
    SubColor: string;
    MainTextColor: string;
    SubTextColor: string;
  }
}
