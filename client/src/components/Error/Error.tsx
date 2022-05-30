import React, { memo, useEffect, useState } from "react";
import { Text } from "../Text";
import { Flex } from "../Flex";
import "./Error.css";
const Error = ({ message }: { message: string }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log();
    const timer = setTimeout(() => {
      setOpen(false);
    }, 7000);
    setOpen(true);
    return () => {
      clearTimeout(timer);
    };
  }, [message]);

  return (
    // <div className={open ? "Error__show Error" : "Error__close Error"}>
    <Flex
      className={open ? "Error__show Error" : "Error__close Error"}
      position={"fixed"}
      border={"1px solid"}
      bg={"red"}
      color="white"
      borderRadius={"12px"}
      zIndex={10}
      p={"0px 10px"}
      minWidth={"300px"}
      justifyContent={"flex-start"}
      alignItems={"center"}
    >
      <Text fontSize={2}>{message}</Text>
      {/* </div> */}
    </Flex>
  );
};
export default memo(Error);
