import styled from "styled-components";
import {
space,
  SpaceProps,
  color,
  ColorProps,
  display,
  DisplayProps
} from "styled-system";
type imgProps=SpaceProps&ColorProps&DisplayProps

export const Img = styled("img")<imgProps>(
 color,
 display,
 space,
);