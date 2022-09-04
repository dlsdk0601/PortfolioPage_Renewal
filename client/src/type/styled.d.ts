import "styled-components";

declare module "styled-components" {
  export interface ColorPlatte {
    MainColor: string;
    SubColor: string;
    MainTextColor: string;
    SubTextColor: string;
  }
}
