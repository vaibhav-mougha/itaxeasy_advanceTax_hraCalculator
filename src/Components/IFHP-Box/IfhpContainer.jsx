import { Box, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

export default function IfhpContainer({text, show}) {
  return (
    <>
     <Box px={"10px"} mb={"15px"} >
     <Flex alignItems={"center"}>
          <FormControl id="incomefromSalary">
            <Flex justifyContent={"space-between"}>
              <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
               {text}
              </FormLabel>

             {
                show?  <Input
                name="incomefromSalary"
                bg={"#E0E0E0"}
                w={"16rem"}
                type="number"
              /> : ""
             }
            </Flex>
          </FormControl>
        </Flex>
     </Box>
    </>
  )
}
