import styled from "styled-components";
import {
  
  space,
  SpaceProps,
  
} from "styled-system";
type listProps = 
  SpaceProps 
 


export const List = styled("ul")<listProps>(
 
{listStyleType: "none"  },
space
);