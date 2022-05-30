import styled from "styled-components";
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  width,
  WidthProps,
  layout,
  LayoutProps,
  position,
  border,
  BorderProps,
  PositionProps,
  GridAreaProps,
  gridArea,
  gridColumn,
  GridColumnProps,
  } from "styled-system";
type boxProps = ColorProps &
  SpaceProps &
  WidthProps &
  LayoutProps &
  PositionProps &
  GridAreaProps &
  BorderProps &
  GridColumnProps;
export const Box = styled("div")<boxProps>(
  // {
  //   boxSizing: "border-box",
  // },
  space,
  color,
  width,

  gridArea,
  color,
  space,
  width,

  layout,
  position,
  border,
  gridColumn
);
