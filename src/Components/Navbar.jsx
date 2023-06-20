import React from "react";
import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { FaInstagramSquare, FaHome } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <>
      <Flex bg={"#0561C8"} p={"0.5rem"} justifyContent={"flex-end"}>
        <Text color={"#FFFC00"} mr={"0.4rem"} fontSize={"1.1rem"}>
          Follow us on{" "}
        </Text>
        <AiOutlineTwitter size={"1.5rem"} color={"#FFFFFF"} />
        <Text color={"#FFFFFF"} ml={"0.5rem"} mr={"0.7rem"}>
          @IncomeTaxIndia |{" "}
        </Text>
        <BsFacebook size={"1.3rem"} color={"#343EA1"} />
        <Text color={"#FFFFFF"} ml={"0.5rem"} mr={"0.7rem"}>
          @IncomeTaxIndiaOfficial |{" "}
        </Text>
        <FaInstagramSquare size={"1.4rem"} color={"#FF4389"} />
        <Text color={"#FFFFFF"} ml={"0.5rem"} mr={"0.7rem"}>
          @IncomeTaxIndia.Official |{" "}
        </Text>
        <BsYoutube size={"1.4rem"} color={"#E81414"} />
        <Text color={"#FFFFFF"} ml={"0.5rem"} mr={"0.7rem"}>
          Income Tax India |{" "}
        </Text>
        <Text color={"#FFFC00"} mr={"0.4rem"} fontSize={"1.1rem"}>
          to stay updated{" "}
        </Text>
      </Flex>

      <Flex justifyContent={"space-between"} p={"1rem 2rem"}>
        <Flex>
          <Image src={"logo.jpg"} w={"10rem"} />
          <Box>
            <Text fontSize={"2rem"} pt={"2rem"} fontWeight={"semibold"}>
              Income Tax Department
            </Text>
            <Text>Government of India</Text>
          </Box>
        </Flex>
        <Flex pt={"2.4rem"}>
          <Input placeholder={"Search..."} />
          <Box bg={"#E39B14"} h={"2.3rem"} p={"0.4rem"}>
            <ImSearch color={"gray"} size={"1.7rem"} />
          </Box>
        </Flex>
      </Flex>

      <Flex
        justifyContent={"flex-end"}
        bg={"#ECECEC"}
        p={"0.7rem"}
        cursor={"pointer"}
      >
        <Flex
          _hover={{
            bg: "#4F4F4F",
            color: "#FFFFFF",
          }}
        >
          <FaHome size={"1.5rem"} />
          <Text fontSize={"1.2rem"} ml={"0.4rem"}>
            Home
          </Text>
        </Flex>

        <Text
          _hover={{
            bg: "#4F4F4F",
            color: "#FFFFFF",
          }}
          fontSize={"1.2rem"}
          ml={"0.8rem"}
        >
          About Us <ChevronDownIcon />
        </Text>

        <Text
          _hover={{
            bg: "#4F4F4F",
            color: "#FFFFFF",
          }}
          fontSize={"1.2rem"}
          ml={"0.8rem"}
        >
          Taxpayers'Charter
        </Text>

        <Text
          _hover={{
            bg: "#4F4F4F",
            color: "#FFFFFF",
          }}
          fontSize={"1.2rem"}
          ml={"0.8rem"}
        >
          Forms/Downloads <ChevronDownIcon />
        </Text>

        <Text
          _hover={{
            bg: "#4F4F4F",
            color: "#FFFFFF",
          }}
          fontSize={"1.2rem"}
          ml={"0.8rem"}
        >
          Tax e-Services
        </Text>

        <Text
          _hover={{
            bg: "#4F4F4F",
            color: "#FFFFFF",
          }}
          fontSize={"1.2rem"}
          ml={"0.8rem"}
        >
          Publicity Campaign
        </Text>

        <Text
          _hover={{
            bg: "#4F4F4F",
            color: "#FFFFFF",
          }}
          fontSize={"1.2rem"}
          ml={"0.8rem"}
        >
          Contact Us
        </Text>

        <Text
          _hover={{
            bg: "#4F4F4F",
            color: "#FFFFFF",
          }}
          fontSize={"1.2rem"}
          ml={"0.8rem"}
        >
          Feedback
        </Text>
      </Flex>

      <Flex
        justifyContent={"flex-start"}
        mt={"1rem"}
        bg={"#ECECEC"}
        p={"0.7rem"}
        cursor={"pointer"}
      >
        <Text color={"#3B9AC6"} fontSize={"0.9rem"}>
          Income Tax Department
        </Text>
        <Text m={"0 0.4rem"}>{">"}</Text>
        <Text color={"#3B9AC6"} fontSize={"0.9rem"}>
          Tax Tools
        </Text>
        <Text m={"0 0.4rem"}>{">"}</Text>
        <Text color={"#3B9AC6"} fontSize={"0.9rem"}>
          House rent allowance calculator
        </Text>
      </Flex>
    </>
  );
};

export default Navbar;
