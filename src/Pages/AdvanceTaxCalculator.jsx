import React, { useState } from "react";
import {
  Box,
  Text,
  Flex,
  Image,
  FormControl,
  FormLabel,
  Select,
  Button,
  useToast,
} from "@chakra-ui/react";
import InitialSelect from "../Components/InitialSelect";
import Accord from "../Components/Accord";

const AdvanceTaxCalculator = () => {
  const [select, setSelect] = useState("");
  const toast = useToast();

  const handleClick = () => {
    toast({
      position: "top",
      title: "Income Tax Department",
      description:
        "Error:Please Select any Tax Payer Options",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  }
  return (
    <>
      <Flex bg={"#FFFFFF"} mt={"1rem"}>
        <Box
          // border={"2px solid red"}
          w={"80%"}
        >
          <Box border={"1px solid gray"} w={"95%"} m={"auto"}>
            <Box w={"100%"} m={"auto"}>
              <Box
                textAlign={"center"}
                bg={"#F4F4F4"}
                border={"1px solid #E0E0E0"}
                p={"0.4rem"}
              >
                <Text fontSize={"0.9rem"}>
                  (As amended upto Finance Act, 2023)
                </Text>
              </Box>

              <Flex mt={"0.7rem"} justifyContent={"space-between"}>
                <Flex bg={"#3B9AC6"} p={"0.7rem"}>
                  <Image src="calculator.jpg" w={"1.5rem"} />
                  <Text color={"#FFFFFF"} ml={"1rem"} fontSize={"1.2rem"}>
                    ADVANCE TAX CALCULATOR FOR FINANCIAL YEAR 2023-24
                  </Text>
                </Flex>
                <Flex p={"0.9rem"} fontSize={"0.9rem"}>
                  <Text>Click here to view relevant </Text>
                  <Text color={"#0018FF"} ml={"0.4rem"} mr={"0.4rem"}>
                    Act
                  </Text>{" "}
                  &{" "}
                  <Text color={"#0018FF"} ml={"0.4rem"}>
                    Rule
                  </Text>
                  <Text>.</Text>
                </Flex>
              </Flex>
            </Box>

            <Flex bg={"#F4F4F4"} w={"100%"} m={"auto"} p={"0.7rem"}>
              <FormControl id="taxPayer">
                <Flex justifyContent={"space-between"}>
                  <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                    Tax Payer
                  </FormLabel>
                  <Select
                    placeholder="Select"
                    name="taxPayer"
                    bg={"#FFFFFF"}
                    w={"16rem"}
                    size={"sm"}
                    onChange={(e) => setSelect(e.target.value)}
                  >
                    <option value="Individual">Individual</option>
                    <option value="HUF">HUF</option>
                    <option value="AOPs/BOI">AOPs/BOI</option>
                    <option value="Domestic Company">Domestic Company</option>
                    <option value="Foreign Company">Foreign Company</option>
                    <option value="Firms">Firms</option>
                    <option value="LLP">LLP</option>
                    <option value="Co-operative Society">
                      Co-operative Society
                    </option>
                  </Select>
                </Flex>
              </FormControl>
            </Flex>

            <InitialSelect condition={select} />
          </Box>

          {select === "" ? (
            <Box w={"20rem"} m={"auto"} mt={"0.7rem"}>
              <Button
                color={"#FFFFFF"}
                bg={"#FE6C5F"}
                fontSize={"0.9rem"}
                borderRadius={"0rem"}
                _hover={{
                  color: "#FFFFFF",
                  bg: "#FE6C5F",
                }}
                onClick={handleClick}
              >
                Calculate
              </Button>
              <Button
                color={"#FFFFFF"}
                bg={"#A0A1A1"}
                ml={"1rem"}
                borderRadius={"0rem"}
                _hover={{
                  color: "#FFFFFF",
                  bg: "#A0A1A1",
                }}
              >
                Reset
              </Button>
            </Box>
          ) : (
            <></>
          )}

          <Flex fontSize={"0.8rem"} ml={"0.7rem"} mt={"1.2rem"}>
            <Text fontWeight={"bold"}>Advisory: </Text>
            <Text>
              Information relates to the law prevailing in the year of
              publication/ as indicated . Viewers are advised to ascertain the
              correct position/prevailing law before relying upon any document.​
            </Text>
          </Flex>

          <Flex fontSize={"0.8rem"} ml={"0.7rem"} mt={"1.2rem"}>
            <Text fontWeight={"bold"}>Disclaimer: </Text>
            <Text>
              The above calculator is on​ly to enable public to have a quick and
              an easy access to basic tax calculation and does not purport to
              give correct tax calculation in all circumstances. It is advised
              that for filing of returns the exact calculation may be made as
              per the provisions contained in the relevant Acts, Rules
              etc.​​​​​​​
            </Text>
          </Flex>
        </Box>

        <Accord />
      </Flex>
    </>
  );
};

export default AdvanceTaxCalculator;
