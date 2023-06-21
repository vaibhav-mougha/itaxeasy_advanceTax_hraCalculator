import React from 'react'
import { Box, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function TotalBox({
    text,
    show,
    name = "",
    type = "text",
}) {
  return (
   <>
    <Box px={"10px"} mb={"15px"} bg={"#333333"}>
        <Flex alignItems={"center"}>
          <FormControl id="incomefromSalary">
            <Flex justifyContent={"space-between"}>
              <FormLabel fontSize={"1.2rem"} fontWeight={"normal"} color={"white"}>
                {text}
              </FormLabel>

              {show ? (
                <Input name={name} bg={"#E0E0E0"} w={"16rem"} type={type} />
              ) : (
                ""
              )}
            </Flex>
          </FormControl>
        </Flex>
      </Box>
   </>
  )
}
