import { Box, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

export default function ILTBox({ bg, text }) {
  return (
    <>
      <Flex bg={bg} w={"100%"} m={"auto"} p={"0.7rem"}>
        <FormControl id="secondaryeducationcess">
          <Flex justifyContent={"flex-start"}>
            <FormLabel fontSize={"1.2rem"} fontWeight={"normal"} w="250px">
              {text}
            </FormLabel>

            <Box
              w={"16rem"}
              display={"grid"}
              gridTemplateColumns={"1fr 3fr"}
              gap={"20px"}
            >
              <Input
                name="secondaryeducationcess"
                bg={"#E0E0E0"}
                type="number"
              />
              <Input
                name="secondaryeducationcess"
                bg={"#E0E0E0"}
                type="number"
              />
            </Box>
          </Flex>
        </FormControl>
      </Flex>
    </>
  );
}
