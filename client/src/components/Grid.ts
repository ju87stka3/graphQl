import styled from "styled-components";
import {
//   gridGap,
//   gridColumnGap,
//   gridRowGap,
//   gridColumn,
//   gridRow,
 
//   gridArea,
  grid,
  GridProps,
//   color,
//    ColorProps,
//     space,
//      SpaceProps,
//   width,
//   WidthProps,
//   fontSize,
//   FontSizeProps,
//   layout ,
//   LayoutProps
} from "styled-system";
import { Box } from "./Box";
// 
//  type gridProps=GridProps&ColorProps&SpaceProps&WidthProps
//  &FontSizeProps&LayoutProps

export const Grid = styled(Box)<GridProps>(
  { display: "grid" },
//   gridGap,
//   gridColumnGap,
//   gridRowGap,
//   gridColumn,
//   gridRow,
//   gridArea,
//   color, 
//   space,
//   width,
//   fontSize,
//   layout
grid

);

// Grid.displayName = "Grid";


