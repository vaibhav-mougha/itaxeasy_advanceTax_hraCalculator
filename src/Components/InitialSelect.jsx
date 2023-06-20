import React from "react";
import {
  Box,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import Huf from "./Huf";
import DomesticCompany from "./DomesticCompany";
import CooperativeSociety from "./CooperativeSociety";

const InitialSelect = ({ condition }) => {
  if (condition === "HUF" || condition === "AOPs/BOI") {
    return (
      <>
        <Huf />
      </>
    );
  } else if (
    condition === "Domestic Company" ||
    condition === "Foreign Company" ||
    condition === "Firms" ||
    condition === "LLP"
  ) {
    return (
      <>
        <DomesticCompany />
      </>
    );
  } else if (condition === "Co-operative Society") {
    return (
      <>
        <CooperativeSociety />
      </>
    );
  } else {
    return (
      <>
        <Box border={"1px solid #E9E9E9"}>
          <Flex bg={"#FFFFFF"} w={"100%"} m={"auto"} p={"0.7rem"} pb={"0.1rem"}>
            <FormControl id="bac">
              <Flex>
                <FormLabel fontSize={"1rem"} fontWeight={"normal"}>
                  <Flex>
                    <Text>Whether opting for taxation under Section</Text>
                    <Text color={"#3B9AC6"} ml={"0.4rem"}>
                      115BAC
                    </Text>
                    <Text>?</Text>
                  </Flex>
                </FormLabel>
                <Select
                  placeholder="Select"
                  name="bac"
                  bg={"#FFFFFF"}
                  w={"10rem"}
                  size={"base"}
                  ml={"31rem"}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Select>
              </Flex>
            </FormControl>
          </Flex>

          <Flex bg={"#FFFFFF"} w={"100%"} m={"auto"} p={"0.7rem"}>
            <FormControl id="taxPayer">
              <Flex justifyContent={"space-between"}>
                <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                  Net Taxable Income
                </FormLabel>

                <Input
                  name="netTaxableIncome"
                  bg={"#E0E0E0"}
                  w={"16rem"}
                  type="number"
                />
              </Flex>
            </FormControl>
          </Flex>

          <Flex bg={"#F4F4F4"} w={"100%"} m={"auto"} p={"0.7rem"}>
            <FormControl id="incomeTax">
              <Flex justifyContent={"space-between"}>
                <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                  Income Tax
                </FormLabel>

                <Input
                  name="incomeTax"
                  bg={"#E0E0E0"}
                  w={"16rem"}
                  type="number"
                />
              </Flex>
            </FormControl>
          </Flex>

          <Flex bg={"#FFFFFF"} w={"100%"} m={"auto"} p={"0.7rem"}>
            <FormControl id="surcharge">
              <Flex justifyContent={"space-between"}>
                <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                  Surcharge
                </FormLabel>

                <Input
                  name="surcharge"
                  bg={"#E0E0E0"}
                  w={"16rem"}
                  type="number"
                />
              </Flex>
            </FormControl>
          </Flex>

          <Flex bg={"#F4F4F4"} w={"100%"} m={"auto"} p={"0.7rem"}>
            <FormControl id="EducationCess">
              <Flex justifyContent={"space-between"}>
                <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                  Education Cess
                </FormLabel>

                <Input
                  name="EducationCess"
                  bg={"#E0E0E0"}
                  w={"16rem"}
                  type="number"
                />
              </Flex>
            </FormControl>
          </Flex>

          <Flex bg={"#FFFFFF"} w={"100%"} m={"auto"} p={"0.7rem"}>
            <FormControl id="secondaryeducationcess">
              <Flex justifyContent={"space-between"}>
                <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                  Secondary and higher education cess
                </FormLabel>

                <Input
                  name="secondaryeducationcess"
                  bg={"#E0E0E0"}
                  w={"16rem"}
                  type="number"
                />
              </Flex>
            </FormControl>
          </Flex>

          <Flex bg={"#F4F4F4"} w={"100%"} m={"auto"} p={"0.7rem"}>
            <FormControl id="totalTaxLiability">
              <Flex justifyContent={"space-between"}>
                <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                  Total Tax Liability
                </FormLabel>

                <Input
                  name="totalTaxLiability"
                  bg={"#E0E0E0"}
                  w={"16rem"}
                  type="number"
                />
              </Flex>
            </FormControl>
          </Flex>

          <Flex bg={"#FFFFFF"} w={"100%"} m={"auto"} p={"0.7rem"}>
            <FormControl id="relief">
              <Flex justifyContent={"space-between"}>
                <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                  Relief
                </FormLabel>

                <Input name="relief" bg={"#F4F4F4"} w={"16rem"} type="number" />
              </Flex>
            </FormControl>
          </Flex>

          <Flex bg={"#F4F4F4"} w={"100%"} m={"auto"} p={"0.7rem"}>
            <FormControl id="tcs">
              <Flex justifyContent={"space-between"}>
                <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                  TDS/TCS/MAT (AMT) Credit Utilized
                </FormLabel>

                <Input name="tcs" bg={"#FFFFFF"} w={"16rem"} type="number" />
              </Flex>
            </FormControl>
          </Flex>

          <Flex bg={"#FFFFFF"} w={"100%"} m={"auto"} p={"0.7rem"}>
            <FormControl id="assessedTax">
              <Flex justifyContent={"space-between"}>
                <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                  Assessed Tax
                </FormLabel>

                <Input
                  name="assessedTax"
                  bg={"#E0E0E0"}
                  w={"16rem"}
                  type="number"
                />
              </Flex>
            </FormControl>
          </Flex>
        </Box>
      </>
    );
  }
};

export default InitialSelect;
