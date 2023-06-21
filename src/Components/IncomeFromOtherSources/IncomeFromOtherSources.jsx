import React from "react";
import { Box, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function IncomeFromOtherSources({
  text,
  show,
  name = "",
  type = "text",
  handleChange,
  value
}) {
  return (
    <>
      <Box px={"10px"} mb={"15px"}>
        <Flex alignItems={"center"}>
          <FormControl id="incomefromSalary">
            <Flex justifyContent={"space-between"}>
              <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                {text}
              </FormLabel>

              {show ? (
                <Input
                  name={name}
                  value={value}
                  bg={"#E0E0E0"}
                  w={"16rem"}
                  type={type}
                  onChange={handleChange}
                />
              ) : (
                ""
              )}
            </Flex>
          </FormControl>
        </Flex>
      </Box>
    </>
  );
}
