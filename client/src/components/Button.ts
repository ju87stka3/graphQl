import styled from "styled-components";
import {
space,
  SpaceProps,
  color,
  ColorProps,
  display,
  DisplayProps,
    layout,
LayoutProps,
border,
BorderProps,
typography,
TypographyProps
} from "styled-system";
type buttonProps=SpaceProps&ColorProps&DisplayProps&LayoutProps&BorderProps&TypographyProps

export const Button = styled("button")<buttonProps>(
    { cursor:"pointer"},
 color,
 display,
 space,
   layout,
   border,
   typography

);