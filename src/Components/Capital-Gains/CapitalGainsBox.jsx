import { Box, Input, Text } from '@chakra-ui/react'
import React from 'react'

export default function CapitalGainsBox({text, type = "text", bold=false }) {
  return (
    <>
        <Box display={"flex"} alignItems={"center"} flexDirection={"column"} justifyContent={"space-between"} minH={"80px"}>
            <Text textAlign={"center"} fontWeight={bold? "bold" : "normal"} fontSize={"13px"}>{text}</Text>
            <Input type={type} />
        </Box>
    </>
  )
}
