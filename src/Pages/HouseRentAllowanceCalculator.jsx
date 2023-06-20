import React, { useState, useRef } from "react";
import {
  Box,
  Text,
  Flex,
  Image,
  FormControl,
  FormLabel,
  Button,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import Accord from "../Components/Accord";

const HouseRentAllowanceCalculator = () => {
  const [formData, setFormData] = useState({
    basicSalary: "",
    da: "",
    commission: "",
    hra: "",
    rentPaid: "",
    exempted: "",
  });

  const [cal, setCal] = useState({
    exemptedHouseRentAllowance: "",
    taxableHouseRentAllowance: "",
  });

  const checkRef = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  //   console.log(formData)

  const handleClick = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    let HRA = formData.hra;
    let basicSal = 0.5 * formData.basicSalary;
    let actualRentPaid = formData.rentPaid - 0.1 * formData.basicSalary;
    let Comision = formData.commission / 10;

    if (checkRef.current.checked) {
      setCal((prev) => {
        return {
          ...prev,
          exemptedHouseRentAllowance:
            HRA - Math.min(HRA, basicSal, actualRentPaid) - Comision,
          taxableHouseRentAllowance:
            Math.min(HRA, basicSal, actualRentPaid) + Comision,
        };
      });
    } else {
      basicSal = 0.4 * formData.basicSalary;
      setCal((prev) => {
        return {
          ...prev,
          taxableHouseRentAllowance:
            Math.min(HRA, basicSal, actualRentPaid) + Comision,
          exemptedHouseRentAllowance:
            HRA - (cal.taxableHouseRentAllowance + Comision),
        };
      });
    }
  };

  const handleReset = () => {
    setFormData((prev) => {
      return {
        ...prev,
        basicSalary: "",
        da: "",
        commission: "",
        hra: "",
        rentPaid: "",
        exempted: "",
      };
    });

    setCal(() => {
      return {
        exemptedHouseRentAllowance: "",
        taxableHouseRentAllowance: "",
      };
    });

    console.log(formData);
  };

  return (
    <>
      <Flex bg={"#FFFFFF"} mt={"1rem"}>
        <Box 
        
        // border={"2px solid red"}
         w={"80%"}>
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
                    House Rent Allowance
                  </Text>
                </Flex>
              </Flex>
            </Box>

            <Flex bg={"#F4F4F4"} w={"100%"} m={"auto"} p={"0.7rem"}>
              <FormControl id="basicSalary">
                <Flex justifyContent={"space-between"}>
                  <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                    Basic Salary
                  </FormLabel>

                  <Input
                    name="basicSalary"
                    value={formData.basicSalary}
                    bg={"#FFFFFF"}
                    w={"16rem"}
                    type="number"
                    border={"1px solid gray"}
                    onChange={handleChange}
                  />
                </Flex>
              </FormControl>
            </Flex>

            <Flex bg={"#FFFFFF"} w={"100%"} m={"auto"} p={"0.7rem"}>
              <FormControl id="da">
                <Flex justifyContent={"space-between"}>
                  <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                    DA forming part of salary
                  </FormLabel>

                  <Input
                    name="da"
                    value={formData.da}
                    bg={"#FFFFFF"}
                    border={"1px solid gray"}
                    w={"16rem"}
                    type="number"
                    onChange={handleChange}
                  />
                </Flex>
              </FormControl>
            </Flex>

            <Flex bg={"#F4F4F4"} w={"100%"} m={"auto"} p={"0.7rem"}>
              <FormControl id="commission">
                <Flex justifyContent={"space-between"}>
                  <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                    Commission (as % of turnover achieved by the employee)
                  </FormLabel>

                  <Input
                    name="commission"
                    value={formData.commission}
                    bg={"#FFFFFF"}
                    border={"1px solid gray"}
                    w={"16rem"}
                    type="number"
                    onChange={handleChange}
                  />
                </Flex>
              </FormControl>
            </Flex>

            <Flex bg={"#FFFFFF"} w={"100%"} m={"auto"} p={"0.7rem"}>
              <FormControl id="hra">
                <Flex justifyContent={"space-between"}>
                  <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                    HRA Received
                  </FormLabel>

                  <Input
                    name="hra"
                    value={formData.hra}
                    bg={"#FFFFFF"}
                    border={"1px solid gray"}
                    w={"16rem"}
                    type="number"
                    onChange={handleChange}
                  />
                </Flex>
              </FormControl>
            </Flex>

            <Flex bg={"#F4F4F4"} w={"100%"} m={"auto"} p={"0.7rem"}>
              <FormControl id="rentPaid">
                <Flex justifyContent={"space-between"}>
                  <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                    Rent Paid
                  </FormLabel>

                  <Input
                    name="rentPaid"
                    value={formData.rentPaid}
                    bg={"#FFFFFF"}
                    border={"1px solid gray"}
                    w={"16rem"}
                    type="number"
                    onChange={handleChange}
                  />
                </Flex>
              </FormControl>
            </Flex>

            <Flex bg={"#FFFFFF"} w={"100%"} m={"auto"} p={"0.7rem"}>
              <FormControl id="relief">
                <Flex justifyContent={"space-between"}>
                  <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                    Tick if residing in metro city.
                  </FormLabel>

                  <Checkbox defaultChecked mr={"10.7rem"} ref={checkRef}>
                    <Text as="sup">(Tick if Yes)</Text>
                  </Checkbox>
                </Flex>
              </FormControl>
            </Flex>

            <Flex bg={"#F4F4F4"} w={"100%"} m={"auto"} p={"0.7rem"}>
              <FormControl id="exempted">
                <Flex justifyContent={"space-between"}>
                  <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                    Exempted House Rent Allowance
                  </FormLabel>

                  <Input
                    name="exempted"
                    bg={"#FFFFFF"}
                    border={"1px solid gray"}
                    w={"16rem"}
                    type="number"
                    value={cal.exemptedHouseRentAllowance}
                    disabled
                    color={"black"}
                    fontWeight={"bold"}
                  />
                </Flex>
              </FormControl>
            </Flex>

            <Flex bg={"#FFFFFF"} w={"100%"} m={"auto"} p={"0.7rem"}>
              <FormControl id="taxable">
                <Flex justifyContent={"space-between"}>
                  <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                    Taxable House Rent Allowance
                  </FormLabel>

                  <Input
                    name="taxable"
                    bg={"#FFFFFF"}
                    border={"1px solid gray"}
                    w={"16rem"}
                    type="number"
                    value={cal.taxableHouseRentAllowance}
                    disabled
                    color={"black"}
                    fontWeight={"bold"}
                  />
                </Flex>
              </FormControl>
            </Flex>
          </Box>

          <Box w={"20rem"} m={"auto"} mt={"0.7rem"}>
            <Button
              color={"#FFFFFF"}
              bg={"#FE6C5F"}
              fontSize={"0.9rem"}
              borderRadius={"0rem"}
              onClick={handleClick}
              _hover={{
                color: "#FFFFFF",
                bg: "#FE6C5F",
              }}
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
              onClick={handleReset}
            >
              Reset
            </Button>
          </Box>

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

export default HouseRentAllowanceCalculator;
