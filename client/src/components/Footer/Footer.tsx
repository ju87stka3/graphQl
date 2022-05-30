import React from "react";
import { Flex } from "../Flex";
import { Text } from "../Text";
const Footer = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      bg="lightblue"
      gridArea="footer"
      p={[1, 2, 3]}
    >
      <Text fontSize={2}>
        Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
        Versandkosten.
      </Text>
    </Flex>
  );
};
export default Footer;
