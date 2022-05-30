import styled from "styled-components";
import {
//   flexWrap,
//   flexDirection,
//   alignItems,
//   justifyContent,
//   overflow
flexbox,
FlexboxProps
} from "styled-system";
import { Box } from "./Box";


export const Flex = styled(Box)<FlexboxProps>(
  {
    display: "flex"
  },
//   flexWrap,
//   flexDirection,
//   alignItems,
//   justifyContent,
//   overflow,
flexbox
);