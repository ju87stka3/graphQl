import React from "react";
import { Flex } from "../Flex";
import { Text } from "../Text";
const Header = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      bg="lightblue"
      gridArea="header"
      p={[1, 2, 3]}
    >
      <Text fontWeight={800}>home24</Text>
      <input placeholder={"Search"} />
    </Flex>
  );
};
export default Header;
