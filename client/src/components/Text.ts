import styled from "styled-components";
import {
typography ,
TypographyProps,
space,
  SpaceProps,
  color,
  ColorProps,
  display,
  DisplayProps
} from "styled-system";
type textProps=TypographyProps&SpaceProps&ColorProps&  DisplayProps


export const Text = styled("p")<textProps>(
 color,
 space,
typography,
display
);