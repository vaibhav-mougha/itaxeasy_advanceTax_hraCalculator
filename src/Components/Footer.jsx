import React from "react";
import {
  Box,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { GrTask } from "react-icons/gr";
import { BsFillChatFill } from "react-icons/bs";
import { ImAirplane } from "react-icons/im";

const Footer = () => {
  return (
    <>
      <Box mt={"3rem"} bg={"#DDDAD0"} p={"2rem"} fontSize={"0.8rem"}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 5 }}
          spacing={8}
          cursor={"pointer"}
          w={"80%"}
          m={"auto"}
        >
          <Stack align={"flex-start"}>
            <Text
              bg={"#6F6D6D"}
              mt={"2.7rem"}
              color={"#FFFFFF"}
              p={"0.4rem"}
              fontSize={"0.8rem"}
            >
              Disclamer
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <GrTask size={"1.2rem"} color={"gray"} />
            <Link href={"#"}>Report Phising</Link>
            <Link href={"#"}>RTI</Link>
            <Link href={"#"}>Children's Corner</Link>
            <Link href={"#"}>Website Policies</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <BsFillChatFill size={"1.2rem"} color={"gray"} />
            <Link href={"#"}>Useful Links</Link>
            <Link href={"#"}>Subscribe</Link>
            <Link href={"#"}>e-Governance</Link>
            <Link href={"#"}>Terms & Conditions</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ImAirplane size={"1.2rem"} color={"gray"} />
            <Link href={"#"}>Sitemap</Link>
            <Link href={"#"}>Shortcut Keys</Link>
            <Link href={"#"}>Accessibility Statement</Link>
            <Link href={"#"}>TDS-CPC</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Flex>
              <Image src={"code.jpg"} mr={"1rem"} h={"3.2rem"} w={"3.7rem"} />
              <Image src={"gov.jpg"} mr={"1rem"} h={"2.7rem"} w={"7rem"} />
              <Image src={"stoc.jpg"} h={"2.7rem"} w={"4rem"} />
            </Flex>
          </Stack>
        </SimpleGrid>
      </Box>

      <Text mt={"1rem"} textAlign={"center"} fontSize={"0.8rem"}>
        © This is the official website of Central Board of Direct Taxes (CBDT),
        Department of Revenue, Ministry of Finance, Government of India.
      </Text>

      <Flex w={"30%"} m={"auto"} mt={"0.7rem"} mb={"1.2rem"}>
        <Text
          textAlign={"center"}
          fontWeight={"bold"}
          fontSize={"1rem"}
          mr={"0.8 rem"}
        >
          Visitor counter :
        </Text>
        <Flex textAlign={"center"}>
          <Text
            bg={"#E19C13"}
            color={"white"}
            mr={"0.4rem"}
            ml={"1rem"}
            p={"0.2rem"}
          >
            0
          </Text>
          <Text bg={"#E19C13"} color={"white"} mr={"0.4rem"} p={"0.2rem"}>
            1
          </Text>
          <Text bg={"#E19C13"} color={"white"} mr={"0.4rem"} p={"0.2rem"}>
            4
          </Text>
          <Text bg={"#E19C13"} color={"white"} mr={"0.4rem"} p={"0.2rem"}>
            6
          </Text>
          <Text bg={"#E19C13"} color={"white"} mr={"0.4rem"} p={"0.2rem"}>
            8
          </Text>
          <Text bg={"#E19C13"} color={"white"} mr={"0.4rem"} p={"0.2rem"}>
            1
          </Text>
          <Text bg={"#E19C13"} color={"white"} mr={"0.4rem"} p={"0.2rem"}>
            0
          </Text>
          <Text bg={"#E19C13"} color={"white"} mr={"0.4rem"} p={"0.2rem"}>
            8
          </Text>
          <Text bg={"#E19C13"} color={"white"} mr={"0.4rem"} p={"0.2rem"}>
            9
          </Text>
          <Text bg={"#E19C13"} color={"white"} mr={"0.4rem"} p={"0.2rem"}>
            0
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
