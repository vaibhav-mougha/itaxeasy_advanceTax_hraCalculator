import React, { useState } from "react";
import {
  Box,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast,
  Button,
} from "@chakra-ui/react";
import AdvanceTaxTable from "./AdvanceTaxTable";

const Huf = () => {
  const [cal, setCal] = useState({
    netTaxableIncome: "",
    relief: "",
    tds: "",
  });

  const [formData, setFormData] = useState({
    incomeTax: "",
    surcharge: "",
    educationCess: "",
    secondaryHigherEducationCess: "",
    totalTaxLiability: "",
    assessedTax: "",
  });

  const toast = useToast();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCal((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // console.log(cal)

  const handleClick = (event) => {
    const { name, value } = event.target;
    setCal((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    if (cal.netTaxableIncome <= 250000) {
      formData.incomeTax = 0;
      formData.surcharge = 0;
      formData.educationCess = 0;
      formData.secondaryHigherEducationCess = 0;
      formData.totalTaxLiability = 0;
      formData.assessedTax = 0;

      setCal((prev) => {
        return {
          ...prev,
          relief: 0,
          tds: 0,
        };
      });
      toast({
        position: "top",
        title: "Income Tax Department",
        description:
          "Error:Advance Tax will not be payable if assessed tax is less than ₹10,000",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else if (
      250001 <= cal.netTaxableIncome &&
      cal.netTaxableIncome <= 500000
    ) {
      formData.incomeTax = (cal.netTaxableIncome * 0.05 - 12500).toFixed(2);
      formData.surcharge = 0;
      formData.educationCess = 0;
      formData.secondaryHigherEducationCess = (
        cal.netTaxableIncome / 1000
      ).toFixed(2);
      formData.totalTaxLiability = (
        +formData.secondaryHigherEducationCess + +formData.incomeTax
      ).toFixed(2);
      formData.assessedTax = formData.totalTaxLiability - cal.relief;
      formData.assessedTax = formData.assessedTax - cal.tds;
      (+formData.assessedTax).toFixed(2);

      if (formData.assessedTax <= 10000) {
        formData.incomeTax = 0;
        formData.surcharge = 0;
        formData.educationCess = 0;
        formData.secondaryHigherEducationCess = 0;
        formData.totalTaxLiability = 0;
        formData.assessedTax = 0;
        setCal((prev) => {
          return {
            ...prev,
            relief: 0,
            tds: 0,
          };
        });
        toast({
          position: "top",
          title: "Income Tax Department",
          description:
            "Error:Advance Tax will not be payable if assessed tax is less than ₹10,000",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          position: "top",
          title: "Income Tax Department",
          description: `Assessed Tax : ${formData.assessedTax}`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } else if (
      500001 <= cal.netTaxableIncome &&
      cal.netTaxableIncome <= 750000
    ) {
      // console.log(cal.netTaxableIncome);
      formData.incomeTax = (cal.netTaxableIncome * 0.1 - 12500).toFixed(2);
      formData.surcharge = 0;
      formData.educationCess = 0;
      formData.secondaryHigherEducationCess = (
        cal.netTaxableIncome * 0.004
      ).toFixed(2);
      formData.totalTaxLiability = (
        +formData.secondaryHigherEducationCess + +formData.incomeTax
      ).toFixed(2);
      formData.assessedTax = formData.totalTaxLiability - cal.relief;
      formData.assessedTax = formData.assessedTax - cal.tds;
      (+formData.assessedTax).toFixed(2);

      if (formData.assessedTax <= 10000) {
        formData.incomeTax = 0;
        formData.surcharge = 0;
        formData.educationCess = 0;
        formData.secondaryHigherEducationCess = 0;
        formData.totalTaxLiability = 0;
        formData.assessedTax = 0;
        setCal((prev) => {
          return {
            ...prev,
            relief: 0,
            tds: 0,
          };
        });
        toast({
          position: "top",
          title: "Income Tax Department",
          description:
            "Error:Advance Tax will not be payable if assessed tax is less than ₹10,000",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          position: "top",
          title: "Income Tax Department",
          description: `Assessed Tax : ${formData.assessedTax}`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } else if (
      750001 <= cal.netTaxableIncome &&
      cal.netTaxableIncome <= 1000000
    ) {
      // console.log(cal.netTaxableIncome);
      formData.incomeTax = (cal.netTaxableIncome * 0.15 - 37500).toFixed(2);
      formData.surcharge = 0;
      formData.educationCess = 0;
      formData.secondaryHigherEducationCess = (
        cal.netTaxableIncome * 0.0045
      ).toFixed(2);
      formData.totalTaxLiability = (
        +formData.secondaryHigherEducationCess + +formData.incomeTax
      ).toFixed(2);
      formData.assessedTax = formData.totalTaxLiability - cal.relief;
      formData.assessedTax = formData.assessedTax - cal.tds;
      (+formData.assessedTax).toFixed(2);

      if (formData.assessedTax <= 10000) {
        formData.incomeTax = 0;
        formData.surcharge = 0;
        formData.educationCess = 0;
        formData.secondaryHigherEducationCess = 0;
        formData.totalTaxLiability = 0;
        formData.assessedTax = 0;
        setCal((prev) => {
          return {
            ...prev,
            relief: 0,
            tds: 0,
          };
        });
        toast({
          position: "top",
          title: "Income Tax Department",
          description:
            "Error:Advance Tax will not be payable if assessed tax is less than ₹10,000",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          position: "top",
          title: "Income Tax Department",
          description: `Assessed Tax : ${formData.assessedTax}`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } else if (
      1000001 <= cal.netTaxableIncome &&
      cal.netTaxableIncome <= 1250000
    ) {
      // console.log(cal.netTaxableIncome);
      formData.incomeTax = (cal.netTaxableIncome * 0.2 - 62500).toFixed(2);
      formData.surcharge = 0;
      formData.educationCess = 0;
      formData.secondaryHigherEducationCess = (
        cal.netTaxableIncome * 0.006
      ).toFixed(2);
      formData.totalTaxLiability = (
        +formData.secondaryHigherEducationCess + +formData.incomeTax
      ).toFixed(2);
      formData.assessedTax = formData.totalTaxLiability - cal.relief;
      formData.assessedTax = formData.assessedTax - cal.tds;
      (+formData.assessedTax).toFixed(2);

      if (formData.assessedTax <= 10000) {
        formData.incomeTax = 0;
        formData.surcharge = 0;
        formData.educationCess = 0;
        formData.secondaryHigherEducationCess = 0;
        formData.totalTaxLiability = 0;
        formData.assessedTax = 0;
        setCal((prev) => {
          return {
            ...prev,
            relief: 0,
            tds: 0,
          };
        });
        toast({
          position: "top",
          title: "Income Tax Department",
          description:
            "Error:Advance Tax will not be payable if assessed tax is less than ₹10,000",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          position: "top",
          title: "Income Tax Department",
          description: `Assessed Tax : ${formData.assessedTax}`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } else if (
      1250001 <= cal.netTaxableIncome &&
      cal.netTaxableIncome <= 1500000
    ) {
      // console.log(cal.netTaxableIncome);
      formData.incomeTax = (cal.netTaxableIncome * 0.25 - 112500).toFixed(2);
      formData.surcharge = 0;
      formData.educationCess = 0;
      formData.secondaryHigherEducationCess = (
        cal.netTaxableIncome * 0.007
      ).toFixed(2);
      formData.totalTaxLiability = (
        +formData.secondaryHigherEducationCess + +formData.incomeTax
      ).toFixed(2);
      formData.assessedTax = formData.totalTaxLiability - cal.relief;
      formData.assessedTax = formData.assessedTax - cal.tds;
      (+formData.assessedTax).toFixed(2);

      if (formData.assessedTax <= 10000) {
        formData.incomeTax = 0;
        formData.surcharge = 0;
        formData.educationCess = 0;
        formData.secondaryHigherEducationCess = 0;
        formData.totalTaxLiability = 0;
        formData.assessedTax = 0;
        setCal((prev) => {
          return {
            ...prev,
            relief: 0,
            tds: 0,
          };
        });
        toast({
          position: "top",
          title: "Income Tax Department",
          description:
            "Error:Advance Tax will not be payable if assessed tax is less than ₹10,000",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          position: "top",
          title: "Income Tax Department",
          description: `Assessed Tax : ${formData.assessedTax}`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } else if (cal.netTaxableIncome > 1500000) {
      // console.log(cal.netTaxableIncome);
      formData.incomeTax = (cal.netTaxableIncome * 0.3 - 188000).toFixed(2);
      formData.surcharge = 0;
      formData.educationCess = 0;
      formData.secondaryHigherEducationCess = (
        cal.netTaxableIncome * 0.008
      ).toFixed(2);
      formData.totalTaxLiability = (
        +formData.secondaryHigherEducationCess + +formData.incomeTax
      ).toFixed(2);
      formData.assessedTax = formData.totalTaxLiability - cal.relief;
      formData.assessedTax = formData.assessedTax - cal.tds;
      (+formData.assessedTax).toFixed(2);

      if (formData.assessedTax <= 10000) {
        formData.incomeTax = 0;
        formData.surcharge = 0;
        formData.educationCess = 0;
        formData.secondaryHigherEducationCess = 0;
        formData.totalTaxLiability = 0;
        formData.assessedTax = 0;
        setCal((prev) => {
          return {
            ...prev,
            relief: 0,
            tds: 0,
          };
        });
        toast({
          position: "top",
          title: "Income Tax Department",
          description:
            "Error:Advance Tax will not be payable if assessed tax is less than ₹10,000",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          position: "top",
          title: "Income Tax Department",
          description: `Assessed Tax : ${formData.assessedTax}`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  const handleReset = () => {
    setCal({
      netTaxableIncome: "",
      relief: "",
      tds: "",
    });

    setFormData({
      incomeTax: "",
      surcharge: "",
      educationCess: "",
      secondaryHigherEducationCess: "",
      totalTaxLiability: "",
      assessedTax: "",
    });
  };

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
                value={cal.netTaxableIncome}
                onChange={handleChange}
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
                value={formData.incomeTax}
                bg={"#E0E0E0"}
                w={"16rem"}
                type="number"
                disabled
                fontWeight={"bold"}
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
                value={formData.surcharge}
                bg={"#E0E0E0"}
                w={"16rem"}
                type="number"
                disabled
              />
            </Flex>
          </FormControl>
        </Flex>

        <Flex bg={"#F4F4F4"} w={"100%"} m={"auto"} p={"0.7rem"}>
          <FormControl id="educationCess">
            <Flex justifyContent={"space-between"}>
              <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                Education Cess
              </FormLabel>

              <Input
                name="educationCess"
                value={formData.educationCess}
                bg={"#E0E0E0"}
                w={"16rem"}
                type="number"
                disabled
                fontWeight={"bold"}
              />
            </Flex>
          </FormControl>
        </Flex>

        <Flex bg={"#FFFFFF"} w={"100%"} m={"auto"} p={"0.7rem"}>
          <FormControl id="secondaryHigherEducationCess">
            <Flex justifyContent={"space-between"}>
              <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                Secondary Higher Education Cess
              </FormLabel>

              <Input
                name="secondaryHigherEducationCess"
                value={formData.secondaryHigherEducationCess}
                bg={"#E0E0E0"}
                w={"16rem"}
                type="number"
                disabled
                fontWeight={"bold"}
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
                value={formData.totalTaxLiability}
                bg={"#E0E0E0"}
                w={"16rem"}
                type="number"
                disabled
                fontWeight={"bold"}
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

              <Input
                name="relief"
                value={cal.relief}
                onChange={handleChange}
                bg={"#F4F4F4"}
                w={"16rem"}
                type="number"
                fontWeight={"bold"}
              />
            </Flex>
          </FormControl>
        </Flex>

        <Flex bg={"#F4F4F4"} w={"100%"} m={"auto"} p={"0.7rem"}>
          <FormControl id="tds">
            <Flex justifyContent={"space-between"}>
              <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                TDS/TCS/MAT (AMT) Credit Utilized
              </FormLabel>

              <Input
                name="tds"
                value={cal.tds}
                onChange={handleChange}
                bg={"#FFFFFF"}
                w={"16rem"}
                type="number"
                fontWeight={"bold"}
              />
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
                value={formData.assessedTax}
                bg={"#E0E0E0"}
                w={"16rem"}
                type="number"
                disabled
                fontWeight={"bold"}
              />
            </Flex>
          </FormControl>
        </Flex>
      </Box>

      <Box w={"20rem"} m={"auto"} mt={"0.7rem"} mb={"1rem"}>
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
          onClick={handleReset}
        >
          Reset
        </Button>
      </Box>

      {+formData.assessedTax > 0 ? (
        <AdvanceTaxTable TableData={formData.assessedTax} />
      ) : (
        ""
      )}
    </>
  );
};

export default Huf;
